import { useLanguage } from "@/components/TranslationProvider";
import ToastType from "@/constants/toastTypes";
import useGetUser from "@/hooks/useGetUser";
import handleErrorToast from "@/lib/utils/handleErrorToast";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import {
  ApolloCache,
  DefaultContext,
  MutationUpdaterFunction,
  useMutation,
} from "@apollo/client";
import Toast from "react-native-toast-message";
import {
  ADD_LOCATION,
  AddUserLocationMutation,
  ErrorTranslationKey,
  Exact,
  GET_USER,
  REMOVE_LOCATION,
  RemoveUserLocationMutation,
  SuccessTranslationKey,
} from "weather-forecast-common";

type UpdateCacheFunction<T> =
  | MutationUpdaterFunction<
      T,
      Exact<{
        userId: number;
        locationId: number;
      }>,
      DefaultContext,
      ApolloCache<any>
    >
  | undefined;

const updateCacheOnAdd =
  (sessionId: number): UpdateCacheFunction<AddUserLocationMutation> =>
  (store, { data }) => {
    const { getUser: user } = store.readQuery({
      query: GET_USER,
      variables: { id: sessionId },
    })!;
    const { locations } = user!;
    store.writeQuery({
      query: GET_USER,
      variables: { id: sessionId },
      data: {
        getUser: {
          ...user!,
          locations: [...locations!, data!.addUserLocation],
        },
      },
    });
  };

const updateCacheOnRemove =
  (sessionId: number): UpdateCacheFunction<RemoveUserLocationMutation> =>
  (store, { data }) => {
    const { getUser: user } = store.readQuery({
      query: GET_USER,
      variables: { id: sessionId },
    })!;
    const { locations } = user!;
    const updatedLocations = locations!.filter(
      (location) => location.id !== data?.removeUserLocation.id
    );
    store.writeQuery({
      query: GET_USER,
      variables: { id: sessionId },
      data: {
        getUser: { ...user!, locations: updatedLocations },
      },
    });
  };

const useToggleLocation = (locationId: number) => {
  const { user } = useGetUser();
  const [add, { loading: loadingAdd }] = useMutation(ADD_LOCATION);
  const [remove, { loading: loadingRemove }] = useMutation(REMOVE_LOCATION);
  const { i18n } = useLanguage();
  const { id } = user!;

  const variables = { userId: id, locationId };

  const addLocation = async () => {
    try {
      const { errors } = await add({
        variables,
        update: updateCacheOnAdd(id),
      });
      if (errors) {
        throw new Error(errors[0].message);
      }
      Toast.show({
        type: ToastType.SUCCESS,
        text1: i18n.t(SuccessTranslationKey.SUCCESS_ADD),
      });
    } catch (err) {
      const message = translateErrorMessage({
        err,
        i18n,
        messageKey: ErrorTranslationKey.LOCATION_LIMIT,
        defaultMessageKey: ErrorTranslationKey.FAILED_ADD,
      });
      handleErrorToast(message!);
    }
  };
  const removeLocation = async () => {
    try {
      const { errors } = await remove({
        variables,
        update: updateCacheOnRemove(id),
      });
      if (errors) {
        throw new Error(errors[0].message);
      }
      Toast.show({
        type: ToastType.SUCCESS,
        text1: i18n.t(SuccessTranslationKey.SUCCESS_REMOVE),
      });
    } catch (err) {
      handleErrorToast(i18n.t(ErrorTranslationKey.FAILED_REMOVE));
    }
  };
  const loading = loadingAdd || loadingRemove;
  return { addLocation, removeLocation, loading };
};

export default useToggleLocation;

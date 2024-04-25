import {
  ApolloCache,
  DefaultContext,
  MutationUpdaterFunction,
  useMutation,
} from "@apollo/client";
import { toast } from "sonner";

import useGetUser from "./useGetUser";

import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import { useTranslations } from "next-intl";
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
      (location) => location.id !== data?.removeUserLocation.id,
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
  const user = useGetUser();
  const [add, { loading: loadingAdd }] = useMutation(ADD_LOCATION);
  const [remove, { loading: loadingRemove }] = useMutation(REMOVE_LOCATION);
  const t = useTranslations();
  if (!user?.id) {
    return null;
  }

  const variables = { userId: user.id, locationId };

  const addLocation = async () => {
    try {
      const { errors } = await add({
        variables,
        update: updateCacheOnAdd(user.id),
      });
      if (errors) {
        throw new Error(errors[0].message);
      }
      toast.success(t(SuccessTranslationKey.SUCCESS_ADD));
    } catch (err) {
      const message = translateErrorMessage({
        err,
        t,
        messageKey: ErrorTranslationKey.LOCATION_LIMIT,
        defaultMessageKey: ErrorTranslationKey.FAILED_ADD,
      });
      toast.error(message);
    }
  };
  const removeLocation = async () => {
    try {
      const { errors } = await remove({
        variables,
        update: updateCacheOnRemove(user.id),
      });
      if (errors) {
        throw new Error(errors[0].message);
      }
      toast.success(t(SuccessTranslationKey.SUCCESS_REMOVE));
    } catch (err) {
      toast.error(t(ErrorTranslationKey.FAILED_REMOVE));
    }
  };
  const loading = loadingAdd || loadingRemove;
  return { addLocation, removeLocation, loading };
};

export default useToggleLocation;

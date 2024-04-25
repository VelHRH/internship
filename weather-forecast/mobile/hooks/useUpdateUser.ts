import { useLanguage } from "@/components/TranslationProvider";
import ToastType from "@/constants/toastTypes";
import handleErrorToast from "@/lib/utils/handleErrorToast";
import { useMutation } from "@apollo/client";
import Toast from "react-native-toast-message";

import {
  GET_USER,
  SuccessTranslationKey,
  UPDATE_USER,
} from "weather-forecast-common";
import { UpdateUserMutationVariables } from "weather-forecast-common/graphql/__generated__/graphql";

const useUpdateUser = () => {
  const [updateProfile, { loading: loadingUpdate }] = useMutation(UPDATE_USER);

  const { i18n } = useLanguage();

  const updateUser = async (variables: UpdateUserMutationVariables) => {
    const { errors } = await updateProfile({
      variables,
      update: (store, { data }) => {
        const { getUser: user } = store.readQuery({
          query: GET_USER,
          variables: { id: variables.id },
        })!;
        const { __typename, ...updatedUser } = data!.updateUser;
        store.writeQuery({
          query: GET_USER,
          variables: { id: variables.id },
          data: {
            getUser: {
              ...user!,
              ...updatedUser,
              hasPassword: user!.hasPassword || !!variables.password,
            },
          },
        });
      },
    });
    if (errors) {
      handleErrorToast(errors[0].message);
    }
    Toast.show({
      type: ToastType.SUCCESS,
      text1: i18n.t(SuccessTranslationKey.SAVED),
    });
  };

  return { updateUser, loadingUpdate };
};

export default useUpdateUser;

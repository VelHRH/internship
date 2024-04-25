import { useMutation } from "@apollo/client";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import {
  GET_USER,
  SuccessTranslationKey,
  UPDATE_USER,
} from "weather-forecast-common";
import { UpdateUserMutationVariables } from "weather-forecast-common/graphql/__generated__/graphql";

const useUpdateUser = () => {
  const [updateProfile, { loading: loadingUpdate }] = useMutation(UPDATE_USER);
  const t = useTranslations();
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
      throw new Error(errors[0].message);
    }
    toast.success(t(SuccessTranslationKey.SAVED));
  };

  return { updateUser, loadingUpdate };
};

export default useUpdateUser;

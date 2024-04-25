import { FC, useContext } from "react";

import { useLanguage } from "@/components/TranslationProvider";
import { ProfileContext } from "@/components/profile/ProfileProvider";
import Button from "@/components/ui/Button";
import { ButtonTranslationKey } from "weather-forecast-common";

const UpdateProfileButton: FC = () => {
  const { i18n } = useLanguage();

  const { updateFormData, handleUpdateUser, isChanged, loadingUpdate } =
    useContext(ProfileContext);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = updateFormData;

  if (!isChanged) {
    return null;
  }

  return (
    <Button
      text={i18n.t(ButtonTranslationKey.SAVE)}
      onPress={handleSubmit(handleUpdateUser)}
      disabled={isSubmitting || loadingUpdate}
    />
  );
};

export default UpdateProfileButton;

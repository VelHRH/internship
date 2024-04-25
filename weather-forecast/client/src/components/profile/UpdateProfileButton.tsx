import { Button } from "@mui/material";
import { FC, useContext } from "react";

import { useTranslations } from "next-intl";
import { ButtonTranslationKey } from "weather-forecast-common";
import { UpdateProfileContext } from "./UpdateProfileProvider";

const UpdateProfileButton: FC = () => {
  const { updateFormData, handleUpdateUser, isChanged, loadingUpdate } =
    useContext(UpdateProfileContext);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = updateFormData;
  const t = useTranslations();
  if (!isChanged) {
    return null;
  }
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={handleSubmit(handleUpdateUser)}
      disabled={isSubmitting || loadingUpdate}
    >
      {t(ButtonTranslationKey.SAVE)}
    </Button>
  );
};

export default UpdateProfileButton;

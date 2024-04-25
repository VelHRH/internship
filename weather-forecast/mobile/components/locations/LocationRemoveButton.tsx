import { useLanguage } from "@/components/TranslationProvider";
import { LocationItemContext } from "@/components/locations/LocationItemProvider";
import IconSize from "@/constants/iconSizes";
import useCustomTheme from "@/hooks/useCustomTheme";
import useToggleLocation from "@/hooks/useToggleLocation";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { ButtonTranslationKey } from "weather-forecast-common";
import Button from "../ui/Button";

const LocationRemoveButton = () => {
  const { palette } = useCustomTheme();
  const backgroundColor = palette.error.dark;
  const { i18n } = useLanguage();
  const { locationId } = useContext(LocationItemContext);
  const { removeLocation, loading } = useToggleLocation(locationId);
  return (
    <Button
      icon={<AntDesign name="minus" size={IconSize.MEDIUM} color="white" />}
      onPress={removeLocation}
      text={i18n.t(ButtonTranslationKey.REMOVE)}
      color={backgroundColor}
      style={{ padding: 5 }}
      disabled={loading}
    />
  );
};

export default LocationRemoveButton;

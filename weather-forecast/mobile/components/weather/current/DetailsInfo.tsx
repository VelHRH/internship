import { useLanguage } from "@/components/TranslationProvider";
import Divider from "@/components/ui/Divider";
import Spinner from "@/components/ui/Spinner";
import { WeatherContext } from "@/components/weather/WeatherProvider";
import WeatherValue from "@/components/weather/WeatherValue";
import DetailsSection from "@/components/weather/current/DetailsSection";
import IconSize from "@/constants/iconSizes";
import useCustomTheme from "@/hooks/useCustomTheme";
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SecondaryWeatherKey, units } from "weather-forecast-common";

const enum Widths {
  SMALL = "40%",
  BIG = "49%",
}

const DetailsInfo = () => {
  const { current } = useContext(WeatherContext);
  const { palette } = useCustomTheme();
  const borderColor = palette.primary.main;
  const color = palette.text.primary;

  const { i18n } = useLanguage();

  if (!current) {
    return <Spinner />;
  }

  return (
    <View style={{ ...styles.details, borderColor }}>
      <DetailsSection
        title={i18n.t(SecondaryWeatherKey.FEELSLIKE)}
        icon={
          <FontAwesome6
            name="face-meh"
            size={IconSize.SUPER_SMALL}
            color={color}
          />
        }
        style={{ width: Widths.BIG }}
      >
        <WeatherValue
          value={current.feelsLike}
          units={units.feelsLike}
          size="medium"
        />
      </DetailsSection>
      <Divider rotate="vertical" style={{ height: Widths.SMALL }} />
      <DetailsSection
        title={i18n.t(SecondaryWeatherKey.HUMIDITY)}
        icon={<Entypo name="drop" size={IconSize.SUPER_SMALL} color={color} />}
        style={{ width: Widths.BIG }}
      >
        <WeatherValue
          value={current.humidity}
          units={units.humidity}
          size="medium"
        />
      </DetailsSection>
      <Divider
        rotate="horisontal"
        style={{ width: Widths.SMALL, marginBottom: 20 }}
      />
      <Divider rotate="horisontal" style={{ width: Widths.SMALL }} />
      <DetailsSection
        title={i18n.t(SecondaryWeatherKey.PRESSURE)}
        icon={
          <MaterialIcons
            name="compress"
            size={IconSize.SUPER_SMALL}
            color={color}
          />
        }
        style={{ width: Widths.BIG }}
      >
        <WeatherValue
          value={current.pressure}
          units={units.pressure}
          size="medium"
        />
      </DetailsSection>
      <Divider rotate="vertical" style={{ height: Widths.SMALL }} />
      <DetailsSection
        title={i18n.t(SecondaryWeatherKey.WIND)}
        icon={
          <FontAwesome6 name="wind" size={IconSize.SUPER_SMALL} color={color} />
        }
        style={{ width: Widths.BIG }}
      >
        <WeatherValue
          value={current.wind.speed}
          units={units.wind}
          size="medium"
          additionalIcon={
            <AntDesign
              name="arrowup"
              size={IconSize.ENORMOUS}
              color={color}
              style={{ transform: [{ rotate: `${current.wind.deg}deg` }] }}
            />
          }
        />
      </DetailsSection>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 15,
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default DetailsInfo;

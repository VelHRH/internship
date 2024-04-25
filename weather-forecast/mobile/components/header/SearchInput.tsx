import { useLanguage } from "@/components/TranslationProvider";
import SearchIcon from "@/components/header/SearchIcon";
import { SearchContext } from "@/components/header/SearchProvider";
import useCustomTheme from "@/hooks/useCustomTheme";
import { useContext } from "react";
import { Animated, StyleSheet, TextInput } from "react-native";
import { PlaceholderTranslationKey } from "weather-forecast-common";

const SearchInput = () => {
  const {
    handleBlur,
    handleFocus,
    width,
    inputRef,
    setInputValue,
    inputValue,
  } = useContext(SearchContext);

  const { i18n } = useLanguage();

  const { palette } = useCustomTheme();
  const backgroundColor = palette.action.selected;
  const color = palette.text.primary;

  return (
    <Animated.View
      style={{
        ...styles.searchInput,
        backgroundColor,
        width,
      }}
    >
      <TextInput
        style={{
          color,
          ...styles.textInput,
        }}
        placeholder={i18n.t(PlaceholderTranslationKey.SEARCH)}
        placeholderTextColor={color}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={setInputValue}
        value={inputValue}
        ref={inputRef}
      />
      <SearchIcon />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    marginRight: 3,
    fontFamily: "Montserrat-Medium",
  },
});

export default SearchInput;

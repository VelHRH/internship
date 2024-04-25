import { SearchContext } from "@/components/header/SearchProvider";
import IconSize from "@/constants/iconSizes";
import useCustomTheme from "@/hooks/useCustomTheme";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";

const SearchIcon = () => {
  const { palette } = useCustomTheme();
  const color = palette.text.primary;

  const { inputRef, isInput, setInputValue } = useContext(SearchContext);

  const handleCross = () => {
    setInputValue("");
    inputRef.current!.blur();
  };

  return (
    <>
      {isInput ? (
        <Entypo
          name="cross"
          size={IconSize.MEDIUM}
          color={color}
          onPress={handleCross}
        />
      ) : (
        <FontAwesome name="search" size={IconSize.SMALL} color={color} />
      )}
    </>
  );
};

export default SearchIcon;

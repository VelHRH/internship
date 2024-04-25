import ScreenLink from "@/constants/screenlinks";
import { router, usePathname } from "expo-router";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Animated, TextInput, useWindowDimensions } from "react-native";

type SearchCtx = {
  isInput: boolean;
  handleFocus: () => void;
  handleBlur: () => void;
  width: Animated.Value;
  inputRef: RefObject<TextInput>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext({} as SearchCtx);

interface SearchProviderProps extends PropsWithChildren {}

const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [isInput, setIsInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const pathname = usePathname();

  const inputRef = useRef<TextInput>(null);
  const windowWidth = useWindowDimensions().width - 10;
  const width = useRef(new Animated.Value(windowWidth * 0.5)).current;

  const searchRoute = ScreenLink.SEARCH_RESULTS;

  useEffect(() => {
    if (pathname !== searchRoute) {
      inputRef.current?.blur();
    }
  });

  const handleFocus = () => {
    setIsInput(true);
    if (pathname !== searchRoute) {
      router.push(searchRoute);
    }
    Animated.timing(width, {
      toValue: windowWidth,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (inputValue.length === 0 && pathname === searchRoute) {
      router.back();
    }
    Animated.timing(width, {
      toValue: windowWidth * 0.5,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setIsInput(false);
    });
  };

  const value = {
    isInput,
    inputRef,
    handleBlur,
    handleFocus,
    width,
    inputValue,
    setInputValue,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;

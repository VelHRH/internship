import { useLanguage } from "@/components/TranslationProvider";
import ToastType from "@/constants/toastTypes";
import useUpdateUser from "@/hooks/useUpdateUser";
import handleErrorToast from "@/lib/utils/handleErrorToast";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import {
  ErrorTranslationKey,
  InfoTranslationKey,
  LocationNumber,
  UpdatePassword,
  updatePasswordSchema,
} from "weather-forecast-common";
import { GetUserQuery } from "weather-forecast-common/graphql/__generated__/graphql";

interface ProfileCtx {
  isChanged: boolean;
  profile: NonNullable<GetUserQuery["getUser"]>;
  incrementLocationNumber: () => void;
  decrementLocationNumber: () => void;
  changeLanguage: (lang: string) => void;
  language: string;
  locationNumber: number;
  isChangePassword: boolean;
  toggleIsPassword: () => void;
  handleUpdateUser: (data: UpdatePassword) => void;
  updateFormData: UseFormReturn<UpdatePassword, any, undefined>;
  loadingUpdate: boolean;
}

export const ProfileContext = createContext({} as ProfileCtx);

interface ProfileProviderProps extends PropsWithChildren {
  profile: NonNullable<GetUserQuery["getUser"]>;
}

const ProfileProvider: FC<ProfileProviderProps> = ({ children, profile }) => {
  const {
    userSettings: {
      locationNumber: defaultLocationNumber,
      language: defaultLanguage,
      theme,
    },
  } = profile;

  const [locationNumber, setLocationNumber] = useState<number>(
    defaultLocationNumber
  );
  const [isChangePassword, setIsChangePassword] = useState<boolean>(false);
  const updateFormData = useForm<UpdatePassword>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const { i18n, setLocale: changeLanguage, locale: language } = useLanguage();

  const isChanged =
    isChangePassword ||
    locationNumber !== defaultLocationNumber ||
    language !== defaultLanguage;
  const { updateUser, loadingUpdate } = useUpdateUser();

  useEffect(() => {
    if (!isChangePassword) {
      updateFormData.reset();
    }
  }, [isChangePassword]);

  const handleUpdateUser = async (data: UpdatePassword) => {
    try {
      await updateUser({
        id: profile.id,
        userSettings: { locationNumber, theme, language },
        password: data.newPassword ? data : undefined,
      });
      setIsChangePassword(false);
    } catch (err) {
      const message = translateErrorMessage({
        err,
        i18n,
        messageKey: ErrorTranslationKey.WRONG_PASSWORD,
        defaultMessageKey: ErrorTranslationKey.FAILED_UPDATE,
      });
      handleErrorToast(message!);
    }
  };

  const incrementLocationNumber = () => {
    if (locationNumber < LocationNumber.MAX)
      setLocationNumber((prev) => prev + 1);
    else {
      Toast.show({
        type: ToastType.INFO,
        text1: i18n.t(InfoTranslationKey.MAX_REACHED),
      });
    }
  };
  const decrementLocationNumber = () => {
    if (locationNumber > LocationNumber.MIN)
      setLocationNumber((prev) => prev - 1);
    else {
      Toast.show({
        type: ToastType.INFO,
        text1: i18n.t(InfoTranslationKey.MIN_REACHED),
      });
    }
  };

  const toggleIsPassword = () => setIsChangePassword((prev) => !prev);
  const value = {
    isChanged,
    profile,
    incrementLocationNumber,
    decrementLocationNumber,
    locationNumber,
    isChangePassword,
    toggleIsPassword,
    handleUpdateUser,
    updateFormData,
    loadingUpdate,
    changeLanguage,
    language,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;

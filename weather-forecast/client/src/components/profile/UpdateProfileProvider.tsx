"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  ErrorTranslationKey,
  InfoTranslationKey,
  LocationNumber,
  UpdateUser,
  updateUserSchema,
} from "weather-forecast-common";

import { ThemeToggleContext } from "@/components/theme/ThemeRegistry";
import useUpdateUser from "@/hooks/useUpdateUser";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import { useTranslations } from "next-intl";
import { GetUserQuery } from "weather-forecast-common/graphql/__generated__/graphql";

interface UpdateProfileCtx {
  isChanged: boolean;
  profile: NonNullable<GetUserQuery["getUser"]>;
  incrementLocationNumber: () => void;
  decrementLocationNumber: () => void;
  locationNumber: number;
  isChangePassword: boolean;
  toggleIsPassword: () => void;
  handleUpdateUser: (data: UpdateUser) => void;
  updateFormData: UseFormReturn<UpdateUser, any, UpdateUser>;
  loadingUpdate: boolean;
}

export const UpdateProfileContext = createContext({} as UpdateProfileCtx);

interface UpdateProfileProviderProps extends PropsWithChildren {
  profile: NonNullable<GetUserQuery["getUser"]>;
}

const UpdateProfileProvider: FC<UpdateProfileProviderProps> = ({
  children,
  profile,
}) => {
  const {
    userSettings: {
      locationNumber: defaultLocationNumber,
      theme: defaultTheme,
    },
  } = profile;
  const t = useTranslations();
  const { mode } = useContext(ThemeToggleContext);
  const [locationNumber, setLocationNumber] = useState<number>(
    defaultLocationNumber,
  );
  const [isChangePassword, setIsChangePassword] = useState<boolean>(false);
  const updateFormData = useForm<UpdateUser>({
    resolver: zodResolver(updateUserSchema),
  });
  const isChanged =
    isChangePassword ||
    !(locationNumber === defaultLocationNumber && mode === defaultTheme);
  const { updateUser, loadingUpdate } = useUpdateUser();

  useEffect(() => {
    if (!isChangePassword) {
      updateFormData.reset();
    }
  }, [isChangePassword]);

  const handleUpdateUser = async (data: UpdateUser) => {
    try {
      await updateUser({
        id: profile.id,
        userSettings: { locationNumber, theme: mode },
        password: data.password,
      });
      setIsChangePassword(false);
    } catch (err) {
      const message = translateErrorMessage({
        err,
        t,
        messageKey: ErrorTranslationKey.WRONG_PASSWORD,
        defaultMessageKey: ErrorTranslationKey.FAILED_UPDATE,
      });
      toast.error(message);
    }
  };

  const incrementLocationNumber = () => {
    if (locationNumber < LocationNumber.MAX)
      setLocationNumber((prev) => prev + 1);
    else {
      toast.info(t(InfoTranslationKey.MAX_REACHED));
    }
  };
  const decrementLocationNumber = () => {
    if (locationNumber > LocationNumber.MIN)
      setLocationNumber((prev) => prev - 1);
    else {
      toast.info(t(InfoTranslationKey.MIN_REACHED));
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
  };
  return (
    <UpdateProfileContext.Provider value={value}>
      {children}
    </UpdateProfileContext.Provider>
  );
};

export default UpdateProfileProvider;

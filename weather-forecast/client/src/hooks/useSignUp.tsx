import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { ErrorTranslationKey, LoginInput } from "weather-forecast-common";

import NavigationLink from "@/constants/navigation/links";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { SIGN_UP } from "weather-forecast-common";

const useSignUp = () => {
  const [signUp] = useMutation(SIGN_UP);
  const router = useRouter();
  const t = useTranslations();
  const signUpUser = async ({ email, password }: LoginInput) => {
    try {
      await signUp({ variables: { email, password } });
      router.push(NavigationLink.LOGIN);
    } catch (err) {
      const message = translateErrorMessage({
        err,
        t,
        messageKey: ErrorTranslationKey.DUPLICATE_EMAIL,
        defaultMessageKey: ErrorTranslationKey.FAILED_SIGN_UP,
      });
      toast.error(message);
    }
  };

  return signUpUser;
};

export default useSignUp;

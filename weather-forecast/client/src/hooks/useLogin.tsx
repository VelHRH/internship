import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ErrorTranslationKey, LoginInput } from "weather-forecast-common";

const useLogin = () => {
  const router = useRouter();
  const t = useTranslations();
  const loginUser = async ({ email, password }: LoginInput) => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) {
      const message = translateErrorMessage({
        err: new Error(res.error),
        t,
        messageKey: ErrorTranslationKey.WRONG_CREDENTIALS,
        defaultMessageKey: ErrorTranslationKey.FAILED_LOGIN,
      });
      toast.error(message);
    } else {
      router.refresh();
    }
  };

  return loginUser;
};

export default useLogin;

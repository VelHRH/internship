import ToastType from "@/constants/toastTypes";
import Toast from "react-native-toast-message";

const handleErrorToast = (text1: string) => {
  Toast.show({
    type: ToastType.ERROR,
    text1,
  });
};

export default handleErrorToast;

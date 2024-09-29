import { toast, ToastContainerProps, type ToastOptions } from "react-toastify";

const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  progress: undefined,
  theme: "colored",
};

const toastContainerConfig: ToastContainerProps = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  theme: "colored",
};

const toastError = (message: string) => toast.error(message, toastConfig);

const toastSuccess = (message: string) => toast.success(message, toastConfig);

const toastWarning = (message: string) => toast.warn(message, toastConfig);

const toastInfo = (message: string) => toast.info(message, toastConfig);

export {
  toastConfig,
  toastContainerConfig,
  toastError,
  toastSuccess,
  toastWarning,
  toastInfo,
};

import { ToastContainer as ReactToastContainer, toast as reactToast } from 'react-toastify';

export const ToastContainer = ReactToastContainer;
export const toast = (content: Parameters<typeof reactToast>[0], options?: Parameters<typeof reactToast>[1]) =>
  reactToast(content, {
    ...options,
    hideProgressBar: options?.hideProgressBar ?? true,
  });

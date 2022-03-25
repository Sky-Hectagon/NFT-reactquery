/* eslint-disable no-console */
import type { ApiClientError } from 'src/hooks/apiClient';

type CallbackOptionsType = {
  400?: () => void;
  401?: () => void;
  404?: () => void;
  500?: () => void;
  default?: () => void;
};

type UseHandleApiResponseErrorType = {
  handleApiResponseError: (
    error: ApiClientError<unknown>,
    callbackOptions?: Partial<CallbackOptionsType>,
  ) => string | undefined;
};

export const useHandleApiResponseError = (): UseHandleApiResponseErrorType => {
  const handleApiResponseError = (
    error: ApiClientError<unknown>,
    callbackOptions?: CallbackOptionsType,
  ): string | undefined => {
    switch (error.response?.status) {
      case 400: {
        if (callbackOptions?.[400]) {
          callbackOptions[400]();
        } else {
          console.log('400 Bad Request');
          return '400 Bad Request';
        }
        return undefined;
      }
      case 401: {
        if (callbackOptions?.[401]) {
          callbackOptions[401]();
        } else {
          console.log('401 Unauthorized');
          return '401 Unauthorized';
        }
        return undefined;
      }
      case 404: {
        if (callbackOptions?.[404]) {
          callbackOptions[404]();
        } else {
          console.log('404 Not Found');
          return '404 Not Found';
        }
        return undefined;
      }
      case 500: {
        if (callbackOptions?.[500]) {
          callbackOptions[500]();
        } else {
          console.log('500 Internal Server Error');
          return '500 Internal Server Error';
        }
        return undefined;
      }
      default: {
        if (callbackOptions?.default) {
          callbackOptions.default();
        } else {
          console.log('Erros');
          return 'erros';
        }
        return undefined;
      }
    }
  };

  return { handleApiResponseError };
};

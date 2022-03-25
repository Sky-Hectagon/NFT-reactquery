import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import { apiClient } from 'src/hooks/apiClient';
import type { ApiClientError } from 'src/hooks/apiClient';
import { useHandleApiResponseError } from 'src/hooks/useHandleApiResponseErros';

type DataResponseType = {
  data?: String[];
};

const useFecth = (): UseQueryResult<
  DataResponseType,
  ApiClientError<unknown>
> => {
  const { handleApiResponseError } = useHandleApiResponseError();
  
  return useQuery(['fecthdata'],
    async () => {
      const api = apiClient();
      const fecthUrl = '/profile/fetch';
      const res = await api.get(fecthUrl, {
        params: null,
        data: null,
      });

      return {
        data: res.data.result,
      } as DataResponseType;
    },
    {
      onError: (error) => {
        handleApiResponseError(error);
      },
    }
  );
};

export default useFecth;

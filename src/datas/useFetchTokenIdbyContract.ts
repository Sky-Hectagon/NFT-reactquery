import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import { apiClient } from 'src/hooks/apiClient';
import type { ApiClientError } from 'src/hooks/apiClient';
import { useHandleApiResponseError } from 'src/hooks/useHandleApiResponseErros';

type DataResponseType = {
  data?: String[];
};

const useFetchTokenIdbyContract = (contractAddress: string): UseQueryResult<
  DataResponseType,
  ApiClientError<unknown>
> => {
  const { handleApiResponseError } = useHandleApiResponseError();
  
  return useQuery(['TokenIdbyContract'],
    async () => {
      const api = apiClient();
      const fecthUrl = `https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}`;
      const res = await api.get(fecthUrl, {
        params: null,
        data: null,
      });

      return { data: res.data.id } as DataResponseType;
    },
    {
      onError: (error) => {
        handleApiResponseError(error);
      },
    }
  );
};

export default useFetchTokenIdbyContract;

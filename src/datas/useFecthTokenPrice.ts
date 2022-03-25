import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import { apiClient } from 'src/hooks/apiClient';
import type { ApiClientError } from 'src/hooks/apiClient';
import { useHandleApiResponseError } from 'src/hooks/useHandleApiResponseErros';

type DataResponseType = {
  data?: String[];
};

const useFecthTokenPrice = (tokenId: string): UseQueryResult<
  DataResponseType,
  ApiClientError<unknown>
> => {
  const { handleApiResponseError } = useHandleApiResponseError();
  tokenId = 'olympus';
  
  return useQuery(['TokenPrice'],
    async () => {
      const api = apiClient();
      const fecthUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`;
      const res = await api.get(fecthUrl, {
        params: null,
        data: null,
      });

      return { data: res.data[tokenId].usd } as DataResponseType;
    },
    {
      onError: (error) => {
        handleApiResponseError(error);
      },
    }
  );
};

export default useFecthTokenPrice;

import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import type { ApiClientError } from 'src/hooks/apiClient';
import { ethers } from "ethers";
import { useWeb3Context } from "src/hooks/web3Context";

type DataResponseType = {
  ensName: string;
  ensAvatar: string;
};

const useENS = (address: string): UseQueryResult<
  DataResponseType,
  ApiClientError<unknown>
> => {
  const { provider } = useWeb3Context();
  
  return useQuery(['ENS', address],
    async () => {
      let ensName = await provider.lookupAddress(address);

      return { ensName, ensAvatar: "" };
    },
    {
      onError: (error) => {
        console.log(error);
      },
      enabled: ethers.utils.isAddress(address),
    }
  );
};

export default useENS;

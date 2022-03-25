import { useQuery } from 'react-query';
import { ethers } from "ethers";
import { abi as PairContractABI } from "../abi/PairContract.json";
import type { UseQueryResult } from 'react-query';
import { PairContract } from "../typechain";
import type { ApiClientError } from 'src/hooks/apiClient';
import { addresses } from "../helpers/constants";

type DataResponseType = {
  data?: String[];
};

const useGetMarketPrice = (provider: any): UseQueryResult<
  DataResponseType,
  ApiClientError<unknown>
> => useQuery(['MaketPrice'],
    async () => {
      const networkId = provider.network?.chainId;
      const pairAddress = addresses[networkId].BUSD_HECTA;
    
      // const mainnetProvider = NodeHelper.getMainnetStaticProvider();
      // const ohm_dai_address = ohm_dai.getAddressForReserve(NetworkId.MAINNET);
      const pairContract = new ethers.Contract(pairAddress || "", PairContractABI, provider) as PairContract;
      const reserves = await pairContract.getReserves();
    
      const marketPrice = Number(reserves[0].toString()) / Number(reserves[1].toString()) / 10 ** 9;
      return marketPrice;
    },
  );

export default useGetMarketPrice;

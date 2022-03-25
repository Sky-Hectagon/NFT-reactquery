import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import type { ApiClientError } from 'src/hooks/apiClient';
import { NFT__factory } from "src/typechain";
import { addresses } from "src/helpers/constants";
import { BigNumber } from "ethers";
import { apiClient } from 'src/hooks/apiClient';
import { INFTMetadata } from "src/pages/Profile/CardNFT";
import {
  IBaseAddressAsyncThunk,
} from "../slices/interfaces";

type ownerNftType = {
  data: INFTMetadata[];
}

const limitPanigation = 12;

const getNFTOwner = ({ provider, networkID, address }: IBaseAddressAsyncThunk, page: number): UseQueryResult<
  ownerNftType,
  ApiClientError<unknown>
> => {  
  return useQuery(['NFTOwner', address, page],
    async () => {
      let nfts = [];
      const nftContract = NFT__factory.connect(addresses[networkID].NFT_ADDRESS, provider);
      const balance = await nftContract.balanceOf(address);
      
      const nextPage =
        Number(balance) - page * limitPanigation > 0 ? limitPanigation : Number(balance) - (page - 1) * limitPanigation;
      const start = (page - 1) * limitPanigation;
      const end = start + nextPage;

      for (let i = (page - 1) * limitPanigation; i < end; i++) {
        const indexOwnerToken = await nftContract.tokenOfOwnerByIndex(address, BigNumber.from(i));
        const uri = await nftContract.tokenURI(indexOwnerToken);
        const api = apiClient();
        const nftData = await api.get(uri).then(res => res.data);
        nfts.push({ ...nftData, ...{ id: indexOwnerToken } });
      }

      return {
        data: nfts,
        ownerBalance: Number(balance),
      };
    },
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

export default getNFTOwner;

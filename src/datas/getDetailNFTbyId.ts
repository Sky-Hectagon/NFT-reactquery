import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import type { ApiClientError } from 'src/hooks/apiClient';
import { NFT__factory } from "src/typechain";
import { addresses } from "src/helpers/constants";
import { BigNumber } from "ethers";
import {
  IDetailNFTAsyncThunk,
} from "../slices/interfaces";
import { INFTMetadata } from "src/pages/Profile/CardNFT";

interface INFTDetailMetadata extends INFTMetadata {
  owner: string;
}

const getDetailNFTbyId = ({ provider, networkID, address, id }: IDetailNFTAsyncThunk): UseQueryResult<
  INFTDetailMetadata,
  ApiClientError<unknown>
> => {  
  return useQuery(['detailNFT', networkID, id],
    async () => {
      const nftContract = NFT__factory.connect(addresses[networkID].NFT_ADDRESS, provider);
      const uri = await nftContract.tokenURI(BigNumber.from(id));
      const owner = await nftContract.ownerOf(id);
      const nftData = await fetch(uri).then(res => res.json());

      return { ...nftData, ...{ owner } };
    },
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

export default getDetailNFTbyId;

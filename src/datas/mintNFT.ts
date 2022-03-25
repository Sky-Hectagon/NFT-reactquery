import { useQueryClient, useMutation, UseMutationResult } from 'react-query';
import type { ApiClientError } from 'src/hooks/apiClient';
import { NFT__factory } from "src/typechain";
import { addresses } from "src/helpers/constants";
import { BigNumber, ethers } from "ethers";
import {
  IMintNFTAsyncThunk
} from "../slices/interfaces";

const mintNFT = (): UseMutationResult<
unknown,
ApiClientError<unknown>,
IMintNFTAsyncThunk,
unknown
> => {
const queryClient = useQueryClient();

return useMutation(async ({ provider, networkID, to, uri, symbol, amount, id }: IMintNFTAsyncThunk) => {
    const signer = provider.getSigner();
    let transferTx: ethers.ContractTransaction | undefined;
    const nftContract = NFT__factory.connect(addresses[networkID].NFT_ADDRESS, signer);
    transferTx = await nftContract.safeMint(to, uri, symbol, amount, BigNumber.from(id));
  }, {
  onSuccess: async () => {
    await queryClient.invalidateQueries();
    const text = "Loading ...";
    const pendingTxnType = `mint`;
    // dispatch(fetchPendingTxns({ txnHash: transferTx.hash, text, type: pendingTxnType }));
    // await transferTx.wait();
    // dispatch(clearPendingTxn(transferTx.hash));
    // dispatch(info(`Mint success ${uris.length} nft to address : ${to}`));
  },
  onError: (error) => {	
    console.log(error);
  },
});
}; 

export default mintNFT;

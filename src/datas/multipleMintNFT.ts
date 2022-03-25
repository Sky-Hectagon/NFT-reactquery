import { useQueryClient, useMutation, UseMutationResult } from 'react-query';
import type { ApiClientError } from 'src/hooks/apiClient';
import { NFT__factory } from "src/typechain";
import { addresses } from "src/helpers/constants";
import { BigNumber, ethers } from "ethers";
import {
  IMultipleMintNFTAsyncThunk
} from "../slices/interfaces";

const multipleMintNFT = (): UseMutationResult<
unknown,
ApiClientError<unknown>,
IMultipleMintNFTAsyncThunk,
unknown
> => {
const queryClient = useQueryClient();

return useMutation(async ({ provider, networkID, to, uris, symbols, amount, id }: IMultipleMintNFTAsyncThunk) => {
    const signer = provider.getSigner();
    let transferTx: ethers.ContractTransaction | undefined;
    const nftContract = NFT__factory.connect(addresses[networkID].NFT_ADDRESS, signer);
    transferTx = await nftContract.safeMintTokens(to, uris, symbols, amount, BigNumber.from(id));
  }, {
  onSuccess: async () => {
    await queryClient.invalidateQueries();
    const text = "Loading ...";
    const pendingTxnType = `multiple_mint`;
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

export default multipleMintNFT;

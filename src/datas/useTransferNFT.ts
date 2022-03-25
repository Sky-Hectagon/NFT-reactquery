import { useQueryClient, useMutation, UseMutationResult } from 'react-query';
import type { ApiClientError } from 'src/hooks/apiClient';
import { NFT__factory } from "src/typechain";
import { addresses } from "src/helpers/constants";
import { ethers } from "ethers";
import { useHistory } from "react-router-dom";
import {
  ITransferNFTAsyncThunk,
} from "../slices/interfaces";

const useTransferNFT = (): UseMutationResult<
unknown,
ApiClientError<unknown>,
ITransferNFTAsyncThunk,
unknown
> => {
const queryClient = useQueryClient();
const history = useHistory();

return useMutation(async ({ provider, networkID, newOwner, address, tokenId }: ITransferNFTAsyncThunk) => {
    const signer = provider.getSigner();
    let transferTx: ethers.ContractTransaction | undefined;
    const nftContract = NFT__factory.connect(addresses[networkID].NFT_ADDRESS, signer);
    transferTx = await nftContract.transferFrom(address, newOwner, tokenId);
  }, {
  onSuccess: async () => {
    await queryClient.invalidateQueries();
    const text = "Loading ...";
    const pendingTxnType = `transfer`;
    // dispatch(getNF({ txnHash: transferTx.hash, text, type: pendingTxnType }));
    // await transferTx.wait();
    // dispatch(clearPendingTxn(transferTx.hash));
    // dispatch(getNFTOwner({ provider, networkID, address }));
    // dispatch(info("Transfer successfully to address " + address));
    history.push("/profile");
  },
  onError: (error) => {	
    console.log(error);
  },
});
}; 

export default useTransferNFT;

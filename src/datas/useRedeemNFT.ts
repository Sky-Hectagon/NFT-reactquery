import { useQueryClient, useMutation, UseMutationResult } from 'react-query';
import { useHistory } from "react-router-dom";
import { ethers } from "ethers";

import type { ApiClientError } from 'src/hooks/apiClient';
import { NFT__factory } from "src/typechain";
import { addresses } from "src/helpers/constants";

import {
  IRedeemNFTAsyncThunk
} from "../slices/interfaces";

const useRedeemNFT = (): UseMutationResult<
unknown,
ApiClientError<unknown>,
IRedeemNFTAsyncThunk,
unknown
> => {
const queryClient = useQueryClient();
const history = useHistory();

return useMutation(async ({ provider, networkID, tokenId, address }: IRedeemNFTAsyncThunk) => {
    let redeemTx: ethers.ContractTransaction | undefined;
    const signer = provider.getSigner();
    const nftContract = NFT__factory.connect(addresses[networkID].NFT_ADDRESS, signer);
    redeemTx = await nftContract.redeem(tokenId);
  }, {
  onSuccess: async () => {
    await queryClient.invalidateQueries();
    const text = "Loading ...";
    const pendingTxnType = `redeem`;
    // dispatch(fetchPendingTxns({ txnHash: redeemTx.hash, text, type: pendingTxnType }));
    // await redeemTx.wait();
    // dispatch(clearPendingTxn(redeemTx.hash));
    // dispatch(getNFTOwner({ provider, networkID, address }));
    // dispatch(success("Redeem completed"));
    history.push("/profile");
  },
  onError: (error) => {	
    console.log(error);
  },
});
}; 

export default useRedeemNFT;

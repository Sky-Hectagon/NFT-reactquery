import { Grid, Pagination, Skeleton, Button, Stack, Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useWeb3Context } from "src/hooks";
// import { changePageOwner, getNFTOwner, INFTMetadata, limitPanigation, transferNFT } from "@/slices/NFT";
import { INFTMetadata } from "./CardNFT";
import CardNFT from "./CardNFT";
// import { isPendingTxn, txnButtonText } from "../../slices/PendingTxnsSlice";
import PromptModal from "src/Common/PromptModal";
import { useHistory } from "react-router-dom";
import { ethers } from "ethers";
import useTransferNFT from "src/datas/useTransferNFT";
import getNFTOwner from 'src/datas/getNFTOwner';
import {
  IDetailNFTAsyncThunk,
} from "src/slices/interfaces";

 const Profile = () => {
  const history = useHistory();
  const { address, provider, networkId, connected, connect } = useWeb3Context();
  const { data: ownerNft, isLoading: loading } = getNFTOwner({ provider: provider, address, networkID: networkId }, 1);
  const { mutate: transferNFT, isLoading: pendingTransactions } = useTransferNFT();

  if (!connected) {
    return (
      <Alert severity="info">
        Please,{" "}
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            connect();
          }}
        >
          connect
        </Button>{" "}
        your wallet to see your NFT listing
      </Alert>
    );
  }

  if (loading) {
    return (
      <div>
        <Grid container spacing={2}>
          {[1, 1, 1, 1].map((item, key) => (
            <Grid item xs={12} sm={4} md={3} xl={3} key={key}>
              <Skeleton height={450} />
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ alignItems: "center", mt: 3 }}>
          <Skeleton width={200} height={50} />
        </Stack>
      </div>
    );
  }

  return (
    <div>
      <Grid container spacing={3}>
        {ownerNft && ownerNft.data.length > 0 ? (
          ownerNft.data.map((nftMetaData: INFTMetadata, key: number) => (
            <Grid item xs={12} sm={4} md={3} xl={3} key={key}>
              <CardNFT
                nftMetaData={nftMetaData}
                key={key}
                action={
                  <Grid container spacing={1.5}>
                    <Grid item xs={6} />
                    <Grid item xs={6}>
                      <PromptModal
                        placeholder="0x000000000000000000000"
                        title={nftMetaData.name}
                        onOk={(text: string) =>
                          transferNFT({
                            provider,
                            networkID: networkId,
                            address,
                            newOwner: text,
                            tokenId: nftMetaData.id,
                            history,
                          })
                      }
                        rules={{
                          required: "Address required",
                          validate: (value: string) => {
                            if (value && address.toLowerCase() === value.toLowerCase()) {
                              return "You cannot transfer to  your wallet!";
                            }
                            if (ethers.utils.isAddress(value)) {
                              return true;
                            }
                            return `The address does not exist!, please re-enter address!`;
                          },
                        }}
                        content={<Typography>Are you sure transfer this NFT ? </Typography>}
                      >
                        <Button variant="outlined" fullWidth>
                          Transfer
                        </Button>
                      </PromptModal>
                    </Grid>
                  </Grid>
                }
              />
            </Grid>
          ))
        ) : (
          <Typography align="center" display="block" justifyContent="center">
            No NFT to show,
            <br />
            Wanna to earn some? head over to our community for further instruction!
          </Typography>
        )}
      </Grid>
    </div>
  );
}

export default Profile;

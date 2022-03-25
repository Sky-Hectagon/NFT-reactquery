import { Button, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { ReactComponent as HECTA } from "../../assets/tokens/HECTA.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import getDetailNFTById from "src/datas/getDetailNFTbyId";
import useRedeemNFT from "src/datas/useRedeemNFT";
import useTransferNFT from "src/datas/useTransferNFT";
import { useWeb3Context } from "../../hooks";
import { useParams, useHistory } from "react-router-dom";
import PromptModal from "src/Common/PromptModal";
import ConfirmModal from "src/Common/Confirm";
import { shorten } from "../../helpers";
import { ethers } from "ethers";

export interface IPendingTxn {
  readonly txnHash: string;
  readonly text: string;
  readonly type: string;
}

export const isPendingTxn = (pendingTransactions: IPendingTxn[], type: string) => {
  return pendingTransactions.map(x => x.type).includes(type);
};
export const txnButtonText = (pendingTransactions: IPendingTxn[], type: string, defaultText: string) => {
  return isPendingTxn(pendingTransactions, type) ? `Pending...` : defaultText;
};

 const NFTDetail = () => {
  // const pendingTransactions = useAppSelector(state => {
  //   return state.pendingTransactions;
  // });
  const history = useHistory();

  let params = useParams() as any;

  const { address, provider, networkId, connected } = useWeb3Context();
  const { data: nft } = getDetailNFTById({ provider: provider, address, networkID: networkId, id: params.id });
  const { mutate: redeemNFT } = useRedeemNFT();
  const { mutate: transferNFT, isLoading: pendingTransactions } = useTransferNFT();

  console.log(nft);
  

  const amount: string | undefined = nft?.attributes?.find(
    (attribute: any) => attribute.trait_type === "amount",
  )?.value;

  const symbol: string | undefined = nft?.attributes.find((attribute: any) => attribute.trait_type === "symbol")?.value;

  return (
    <>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={6}>
          {!nft ? <Skeleton height={400} /> : <img style={{ width: "100%" }} src={nft.image} />}
        </Grid>

        <Grid item xs={6}>
          {!nft ? (
            <Skeleton height={100} />
          ) : (
            <Typography variant="h2" sx={{ mt: 5 }}>
              {nft.name}
            </Typography>
          )}
          {!nft ? (
            <Stack direction="row" spacing={1} sx={{ mt: 5 }}>
              <Skeleton height={50} width={50} />
              <Skeleton height={50} width="100%" />
            </Stack>
           ) : (
            <Stack direction="row" spacing={1} sx={{ mt: 5, alignItems: "center" }}>
              <HECTA />
              <Typography variant="h5" sx={{ fontSize: 32 }}>
                {`${amount}  ${symbol}`}
              </Typography>
            </Stack>
          )}
          {!nft ? (
            <Skeleton height={50} />
          ) : (
            <Typography color="text.secondary" sx={{ mt: 5 }}>
              {nft.description}
            </Typography>
          )}
          {!nft ? (
            <Skeleton height={50} />
          ) : (
            <Typography color="text.secondary" sx={{ mt: 5 }}>
              Owned by {shorten(nft.owner)}
            </Typography>
          )}
          {!nft ? (
            <Skeleton height={200} />
          ) : (
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                mt: 5,
                svg: {
                  cursor: "pointer",
                },
              }}
            >
              <Typography sx={{ mb: 0 }}> Share to</Typography>
              <Twitter />
              <Discord />
            </Stack>
          )}
          {!nft ? (
            <Stack direction="row" spacing={4}>
              <Skeleton height={45} width={150} />
              <Skeleton height={45} width={150} />
              <Skeleton height={45} width={150} />
            </Stack>
          ) : (
            <Stack direction="row" spacing={4} sx={{ mt: 5 }}>
              <ConfirmModal
                content={
                  <Typography>
                    Are you sure redeem <b>{nft.name}</b> to {amount} {symbol} ?
                  </Typography>
                }
                title={`Confirm Redeem`}
                onOk={() => {
                  redeemNFT({ provider, networkID: networkId, tokenId: params.id, address, history });
                }}
              >
                <Button variant="outlined">
                  Redeem
                </Button>
              </ConfirmModal>
              <PromptModal
                placeholder="0x000000000000000000000"
                title={nft.name}
                onOk={(text: string) =>
                    transferNFT({
                      provider,
                      networkID: networkId,
                      address,
                      newOwner: text,
                      tokenId: params.id,
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
                <Button variant="outlined">
                  Transfer
                </Button>
              </PromptModal>
             </Stack>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default NFTDetail;

import { CardMedia, CardContent, Stack, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
// import { attributeData } from "../../helpers";
import React from "react";
import { SxProps } from "@mui/system";

export type TraitType = "amount" | "symbol" | "id";

export interface Attribute {
  trait_type: TraitType;
  value: string;
}

export type INFTMetadata = {
  id: string;
  name: string;
  amount: string;
  description?: string;
  image: string;
  attributes: Attribute[];
}

export default function CardNFT({
  nftMetaData,
  action,
  sx,
}: {
  sx?: SxProps<Theme>;
  nftMetaData: INFTMetadata;
  action?: React.ReactElement;
}) {
  const history = useHistory();

  const attributeData = (nftMetaData: INFTMetadata, key: string) =>
  nftMetaData?.attributes.find((attribute: any) => attribute.trait_type === key)?.value || "";

  const symbol: string | undefined = attributeData(nftMetaData, "symbol");

  if (!nftMetaData) {
    return null;
  }

  return (
    <Box>
      <Card sx={{ cursor: "pointer", ...sx }} variant="outlined">
        <CardMedia onClick={() => history.push(`/nfts/${nftMetaData.id}`)} component="img" image={nftMetaData.image} />
        <CardContent>
          <Typography
            sx={{ mb: 2, mt: 1, fontSize: 18 }}
            color="text.secondary"
            onClick={() => history.push(`/nfts/${nftMetaData.id}`)}
          >
            {nftMetaData.name}
          </Typography>
          {action}
        </CardContent>
      </Card>
    </Box>
  );
}
CardNFT.defaultProps = {
  isAction: true,
};

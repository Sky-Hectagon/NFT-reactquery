import { Box, Button, IconButton, Paper, SvgIcon, Typography, useTheme } from "@mui/material";
import { withStyles } from "@mui/material/styles";
import { ReactComponent as CloseIcon } from "src/assets/icons/x.svg";
import { useWeb3Context } from "src/hooks";
import { Trans } from "@lingui/macro";
import WalletAddressEns from "./WalletAddressEns";

const DisconnectButton = () => {
  const { disconnect } = useWeb3Context();
  const theme = useTheme();
  return (
    <Button
      className={`disconnect-btn ${theme.palette.mode}`}
      onClick={disconnect}
      variant="contained"
      size="large"
      color="secondary"
    >
      <Trans>Disconnect</Trans>
    </Button>
  );
};

// const CloseButton = withStyles(theme => ({
//   root: {
//     ...theme.overrides?.MuiButton?.containedSecondary,
//     width: "30px",
//     height: "30px",
//   },
// }))(IconButton);

const WalletTotalValue = () => {
  return (
    <Box style={{ flex: 1, textAlign: "center" }}>
      <Typography style={{ lineHeight: 1.1, fontWeight: 600, fontSize: "0.975rem" }}>MY WALLET</Typography>
      <WalletAddressEns />
    </Box>
  );
};

function InitialWalletView({ onClose }: { onClose: () => void }) {
  const theme = useTheme();

  return (
    <Paper>
      <Box sx={{ padding: theme.spacing(0, 3), display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", padding: theme.spacing(3, 0) }}>
          <WalletTotalValue />
          {/* <CloseButton size="small" onClick={onClose} aria-label="close wallet">
            <SvgIcon component={CloseIcon} color="primary" style={{ width: "15px", height: "15px" }} />
          </CloseButton> */}
        </Box>

        <Box sx={{ marginTop: "auto", marginX: "auto", padding: theme.spacing(2) }}>
          <DisconnectButton />
        </Box>
      </Box>
    </Paper>
  );
}

export default InitialWalletView;

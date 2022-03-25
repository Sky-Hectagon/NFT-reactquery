import { useState } from "react";

import { useWeb3Context } from "src/hooks/web3Context";
import InitialWalletView from "./InitialWalletView";
import { Button, SwipeableDrawer } from "@mui/material";
import { shorten } from "src/helpers";

const WalletButton = ({ openWallet }: { openWallet: () => void }) => {
  const { connect, connected, address } = useWeb3Context();
  const onClick = connected ? openWallet : connect;
  return (
    <Button onClick={onClick} variant="outlined">
      {connected ? shorten(address) : "Connect Wallet"}
    </Button>
  );
};

export function Wallet() {
  const [isWalletOpen, setWalletOpen] = useState(false);
  const closeWallet = () => setWalletOpen(false);
  const openWallet = () => setWalletOpen(true);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <WalletButton openWallet={openWallet} />
      <SwipeableDrawer
        sx={{
          width: "460px",
          maxWidth: "100%",
        }}
        disableBackdropTransition={!isIOS}
        disableDiscovery={isIOS}
        anchor="right"
        open={isWalletOpen}
        onOpen={openWallet}
        onClose={closeWallet}
      >
        <InitialWalletView onClose={closeWallet} />
      </SwipeableDrawer>
    </>
  );
}

export default Wallet;

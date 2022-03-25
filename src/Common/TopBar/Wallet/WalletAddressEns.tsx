import useENS from "src/datas/useENS";
import { useWeb3Context } from "src/hooks/web3Context";
import { shorten } from "src/helpers";
import { useTheme, Button } from "@mui/material";
export default function WalletAddressEns() {
  const { address } = useWeb3Context();
  const { data: ensData } = useENS(address);
  const theme = useTheme();
  return (
    <div>
      {address && (
        <div className={`wallet-link ${theme.palette.mode}`}>
          {ensData?.ensAvatar && <img className="avatar" src={ensData.ensAvatar} alt={address} />}
          <Button size="small" href={`https://bscscan.com/address/${address}`} target="_blank">
            {ensData?.ensName || shorten(address)}
          </Button>
        </div>
      )}
    </div>
  );
}

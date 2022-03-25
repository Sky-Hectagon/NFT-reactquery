import { AppBar, Box, Button, SvgIcon, Toolbar } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitch";
import LocaleSwitcher from "./LocaleSwitch";
import Wallet from "./Wallet";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as MenuIcon } from "../../assets/icons/hamburger.svg";
import { ReactComponent as HectagonLightIcon } from "../../assets/icons/hectagon-nav-header-light.svg";
import { ReactComponent as HectagonDarkIcon } from "../../assets/icons/hectagon-nav-header-dark.svg";
import { useHistory } from "react-router-dom";
import { useWeb3Context } from "src/hooks";
import { addresses } from "src/helpers/constants";
function TopBar({ toggleTheme, handleDrawerToggle }: any) {
  const history = useHistory();
  const { connected, address, networkId } = useWeb3Context();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          padding: "0px",
          marginBottom: "0px",
        },
        [theme.breakpoints.up("md")]: {
          padding: "0px 80px",
          marginBottom: theme.spacing(12),
        },
        [theme.breakpoints.up("xl")]: {
          padding: "0px 255px",
        },
        position: "sticky",
        zIndex: 10,
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar disableGutters>
        <SvgIcon
          onClick={() => history.push("/")}
          color="primary"
          component={theme.palette.mode === "light" ? HectagonLightIcon : HectagonDarkIcon}
          viewBox="0 0 196 32"
          sx={{
            width: "196px",
            height: "32px",
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Button
          sx={{
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          }}
          variant="outlined"
          color="primary"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <SvgIcon component={MenuIcon} />
        </Button>
        <Box
          display="flex"
          sx={{
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            button: {
              height: 48,
              whiteSpace: "nowrap !important",
              overflow: "hidden !important",
              margin: theme.spacing(1),
              minWidth: "fit-content !important",
            },
          }}
        >
          <Button variant="contained" color="secondary" onClick={() => history.push("/marketplace")}>
            Marketplace
          </Button>

          {address && address.toLowerCase() === addresses[networkId]?.MINT_ADDRESS.toLowerCase() && (
            <Button variant="contained" color="secondary" onClick={() => history.push("/mint")}>
              Mint
            </Button>
          )}
          {["mint", ""].find(hash => window.location.hash.includes(hash)) && connected && (
            <Button variant="contained" color="secondary" onClick={() => history.push("/profile")}>
              My NFT
            </Button>
          )}
          <Wallet />
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          <LocaleSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { styled, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useTheme from "./hooks/useTheme";
// import { useWeb3Context } from "./hooks/web3Context";
import { Profile, NFTDetail } from "./pages";
import TopBar from "./Common/TopBar/TopBar";
import Footer from "./Common/Footer";
// import Messages from "./components/Messages/Messages";
import { dark as darkTheme } from "./themes/dark";
import { light as lightTheme } from "./themes/light";
// import { NetworkId } from "@/helpers/constants"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const useStyles = makeStyles()((theme: any) => {
  return {
    contentShift: {
      [theme.breakpoints.up("sm")]: {
        padding: "0px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "0px 80px",
      },
      [theme.breakpoints.up("xl")]: {
        padding: "0px 255px",
      },
    },
    // necessary for content to be below app bar
  };
});

const BlurLeft = styled("div")(theme => ({
  position: "absolute",
  left: "-2.08%",
  zIndex: -1,
  right: "78.96%",
  top: "9.75%",
  bottom: "68.05%",
  background: "linear-gradient(132.98deg, #B200C1 14.33%, #130637 56.82%, #008E75 90.8%)",
  opacity: "0.8",
  filter: "blur(170px)",
}));

const BlurRight = styled("div")(theme => ({
  position: "absolute",
  zIndex: -1,
  left: "114.56%",
  right: "-37.68%",
  top: "44.65%",
  bottom: "33.15%",
  background: "linear-gradient(132.98deg, #B200C1 14.33%, #130637 56.82%, #008E75 90.8%)",
  opacity: 0.6,
  filter: "blur(166px)",
  transform: "rotate(120deg)",
}));

const BackgroundMountain = styled("div")(theme => ({
  position: "absolute",
  top: "10px",
  right: "-200px",
  zIndex: -1,
  width: "100%",
  height: "526px",
  opacity: 0.6,
  backgroundSize: "contain!important",
  backgroundRepeat: "no-repeat",
  background: "url('assets/images/Mountain.png')",
}));

 const App = () => {
  // useSegmentAnalytics();
  // useGoogleAnalytics();
  const location = useLocation();
  const [theme, toggleTheme, mounted] = useTheme();
  const currentPath = location.pathname + location.hash + location.search;
  const { classes } = useStyles();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeMode, setThemeMode] = useState(theme === "light" ? lightTheme : darkTheme);

  // const { address, connect, hasCachedProvider, provider, connected, networkId, providerInitialized } = useWeb3Context();
  const isSmallerScreen = useMediaQuery("(max-width: 980px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [walletChecked, setWalletChecked] = useState(false);
  // TODO (appleseed-expiredBonds): there may be a smarter way to refactor this


  // The next 3 useEffects handle initializing API Loads AFTER wallet is checked
  //
  // this useEffect checks Wallet Connection & then sets State for reload...
  // ... we don't try to fire Api Calls on initial load because web3Context is not set yet
  // ... if we don't wait we'll ALWAYS fire API calls via JsonRpc because provider has not
  // ... been reloaded within App.
  // useEffect(() => {
  //   if (hasCachedProvider()) {
  //     // then user DOES have a wallet
  //     connect()
  //       .then(() => {
  //         setWalletChecked(true);
  //       })
  //       .catch(e => {
  //         console.error(e);
  //       });
  //   } else {
  //     // then user DOES NOT have a wallet
  //     setWalletChecked(true);
  //   }
  // }, []);
  useEffect(() => {
    const newThemeMode = theme === "light" ? lightTheme : darkTheme;
    setThemeMode(newThemeMode);
  }, [theme]);
  // this useEffect fires on state change from above. It will ALWAYS fire AFTER
  // useEffect(() => {
  //   // don't load ANY details until wallet is Checked
  //   if (walletChecked) {
  //     if (networkId !== -1) {
  //       loadDetails("account");
  //       loadDetails("app");
  //     }
  //   }
  // }, [walletChecked, networkId]);

  // this useEffect picks up any time a user Connects via the button
  // useEffect(() => {
  //   // don't load ANY details until wallet is Connected
  //   if (connected && providerInitialized) {
  //     loadDetails("account");
  //   }
  // }, [connected, networkId, providerInitialized]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleSidebarClose = () => {
  //   setIsSidebarExpanded(false);
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        <div className={`app ${isSmallerScreen && "tablet"} ${isSmallScreen && "mobile"} ${theme}`}>
          <BlurLeft />
          <BlurRight />
          <TopBar theme={theme} toggleTheme={toggleTheme} handleDrawerToggle={handleDrawerToggle} />
          <div className={` ${classes.contentShift}`}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/profile" />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/nfts/:id">
                <NFTDetail />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

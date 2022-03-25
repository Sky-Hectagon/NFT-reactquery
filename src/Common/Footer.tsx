import { ReactComponent as Twitter } from "../assets/icons/twitterDark.svg";
import { ReactComponent as Telegram } from "../assets/icons/telDark.svg";
import { ReactComponent as Medium } from "../assets/icons/mediumDark.svg";
import { ReactComponent as Discord } from "../assets/icons/discordDark.svg";
import { ReactComponent as HectagonFooter } from "../assets/icons/HectagonFooter.svg";
import { Grid, Stack, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        [theme.breakpoints.up("sm")]: {
          padding: "0px",
          mt: 0,
        },
        [theme.breakpoints.up("md")]: {
          padding: "40px 80px",
          mt: 10,
        },
        [theme.breakpoints.up("xl")]: {
          padding: "130px 235px",
          mt: 20,
        },
      }}
    >
      <Grid item xs={6}>
        <Stack spacing={2}>
          <HectagonFooter />
          <Stack
            direction="row"
            spacing={4}
            sx={{
              div: {
                display: "grid",
                placeItems: "center",
                background: "#E6E6E6",
                width: 32,
                height: 32,
                borderRadius: "50%",
                cursor: "pointer",
              },
            }}
          >
            <div>
              <a href="https://t.me/hectagonfinance" target="_blank">
                <Telegram />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/HectagonFinance" target="_blank">
                <Twitter />
              </a>
            </div>
            <div>
              <a href="https://medium.com/@HectagonFinance" target="_blank">
                <Medium />
              </a>
            </div>
            <div>
              <a href="https://discord.gg/RPXCehSQ" target="_blank">
                <Discord />
              </a>
            </div>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Typography color="text.secondary">Products</Typography>
              <Link href='./'>Bonds</Link>
              <Link href='./'>Staking</Link>
              <Link href='./'>NFT contract</Link>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Typography color="text.secondary">Learn</Typography>
              <Link href='./'>Docs</Link>
              <Link href="https://medium.com/@HectagonFinance" target="_blank">
                Medium
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Typography color="text.secondary">Join us</Typography>
              <Link href="https://discord.gg/RPXCehSQ" target="_blank">
                Discord
              </Link>
              <Link target="_blank" href="https://t.me/hectagonfinance">
                Telegram
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
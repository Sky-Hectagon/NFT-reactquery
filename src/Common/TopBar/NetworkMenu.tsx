import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useWeb3Context } from "src/hooks/web3Context";
import { NETWORKS } from "src/helpers/constants";
import { useTheme } from "@mui/material/styles";
function NetworkMenu() {
  const { networkId, networkName } = useWeb3Context();
  const [setImage] = useState(null);
  const theme = useTheme();
  useEffect(() => {
    if (NETWORKS[networkId]) {
      // @ts-ignore
      setImage(NETWORKS[networkId].image);
    }
  }, [networkId]);

  return (
    <Grid container>
      <Button
        aria-label="change-network"
        size="large"
        variant="contained"
        color="secondary"
        title="Change Network"
        component={NavLink}
        to="/network"
        className="network-menu-button"
      >
        <Typography
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
          className="network-menu-button-text"
        >
          {networkName}
        </Typography>
      </Button>
    </Grid>
  );
}

export default NetworkMenu;

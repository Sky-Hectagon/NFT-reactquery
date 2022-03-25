import { t } from "@lingui/macro";
import { i18n } from "@lingui/core";
import { useState, MouseEvent } from "react";
import { Popover, Button, Paper, Typography, Box, Fade } from "@mui/material";

import FlagIcon from "src/helpers/flagicon";
import { locales, selectLocale } from "src/locales";
import { useTheme } from "@mui/material/styles";
function getLocaleFlag(locale: string) {
  return locales[locale].flag;
}

function LocaleSwitcher() {
  const [anchorEl, setAnchorEl] = useState<any | null>(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Box component="div">
      <Button
        size="large"
        onClick={(e: MouseEvent<Element, globalThis.MouseEvent>) => handleClick(e)}
        variant="contained"
        color="secondary"
        title={t`Change locale`}
      >
        <FlagIcon code={getLocaleFlag(i18n.locale)} />
        <span>&nbsp;</span>
      </Button>

      <Popover
        sx={{
          zIndex: 5,
          backgroundColor: "#00000003",
          backdropFilter: " blur(33px)",
          marginTop: theme.spacing(2),
          borderRadius: "10px",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper
          sx={{
            padding: "6px 6px",
            display: "flex",
            flexDirection: "column",
            width: "80px",
            maxWidth: "80px",
            button: {
              display: "block",
              width: "100%",
              textAlign: "left",
              marginBottom: theme.spacing(1),
            },
          }}
          className="locales-menu"
          elevation={1}
        >
          <Box component="div">
            {Object.keys(locales).map((locale, key) => (
              <Button color="secondary" key={key} variant="contained" fullWidth onClick={() => selectLocale(locale)}>
                <Typography align="center">
                  <FlagIcon code={getLocaleFlag(locale)} />
                </Typography>
              </Button>
            ))}
          </Box>
        </Paper>
      </Popover>
    </Box>
  );
}

export default LocaleSwitcher;

import fonts from "../fonts";
import { Components } from "@mui/material/styles/components";
import { IColor } from "../interface";

export default function ComponentSetting(theme: IColor): Components {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "@font-face": fonts,
          body: {
            background: theme.background,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: theme.paperBg,
          zIndex: 7,
          "@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
            backgroundColor: "rgba(54, 56, 64, 0.98)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: theme.paperBg,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: theme.backdropBg,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.color,
          "&:hover": {
            color: theme.textHighlightColor,
            textDecoration: "none",
            "&.active": {
              color: theme.color,
            },
          },
          "&.active": {
            color: theme.color,
            textDecoration: "none",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: theme.color,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          color: theme.gray,
          "&$selected": {
            color: theme.gold,
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: theme.paperBg,
          "&:hover": {
            color: theme.color,
            backgroundColor: `${theme.containedSecondaryButtonHoverBG} !important`,
          },
          selected: {
            backgroundColor: theme.containedSecondaryButtonHoverBG,
          },
          "@media (hover:none)": {
            "&:hover": {
              color: theme.color,
              backgroundColor: theme.paperBg,
            },
            "&:focus": {
              color: theme.color,
              backgroundColor: theme.paperBg,
              borderColor: "transparent",
              outline: "#00000000",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: theme.primaryButtonColor,
          backgroundImage: theme.backgroundButtonGradient,
          "&:hover": {
            backgroundColor: theme.primaryButtonHoverBG,
            color: theme.primaryButtonHoverColor,
          },

          "&.Mui-disabled": {
            color: theme.primaryButtonHoverColor,
          },
          "@media (hover:none)": {
            backgroundColor: theme.primaryButtonBG,
            "&:hover": {
              backgroundColor: theme.primaryButtonHoverBG,
            },
          },
        },
        containedSecondary: {
          color: theme.color,
          backgroundColor: theme.paperBg,
          "&:hover": {
            color: "#FCFCFC",
            backgroundColor: `${theme.containedSecondaryButtonHoverBG} !important`,
          },
          "@media (hover:none)": {
            color: theme.color,
            backgroundColor: theme.paperBg,
            "&:hover": {
              color: "#FCFCFC",
              backgroundColor: `${theme.containedSecondaryButtonHoverBG} !important`,
            },
          },
        },
        outlinedSecondary: {
          color: theme.color,
          borderColor: theme.color,
          "&:hover": {
            color: theme.outlinedSecondaryButtonHoverColor,
            backgroundColor: theme.outlinedSecondaryButtonHoverBG,
            borderColor: "#333333",
          },
        },
        textPrimary: {
          color: theme.gray,
          "&:hover": {
            background: theme.backgroundButtonGradient,
            backgroundClip: "text",
            position: "relative",
            textFillColor: "transparent",
          },
          "&:active": {
            color: theme.gold,
            borderBottom: "#F8CC82",
          },
        },
        textSecondary: {
          color: theme.color,
          "&:hover": {
            color: theme.textHighlightColor,
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          ".Mui-selected": {
            background: theme.backgroundButtonGradient,
            color: theme.popoverBg,
            border: "transparent",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          "&.grid-message-typography": {
            color: "#A3A3A3",
          },
          "&.chain-highlight": {
            color: "#DADADA",
          },
          "&.current": {
            color: theme.gold,
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "&.grid-button": {
            borderColor: `#FFFFFF !important`,
            "&:hover": {
              backgroundColor: theme.gridButtonHoverBackground,
            },
            "&.current": {
              borderColor: `${theme.gold} !important`,
              backgroundColor: theme.gridButtonActiveBackground,
              "&:hover": {
                backgroundColor: theme.gridButtonHoverBackground,
              },
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          root: {
            borderRadius: "12px",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        colorPrimary: {
          color: theme.color,
          "&$checked": {
            color: theme.switchBg,
            "& + $track": {
              backgroundColor: theme.color,
              borderColor: theme.color,
            },
          },
        },
        track: {
          border: `1px solid ${theme.color}`,
          backgroundColor: theme.switchBg,
        },
      },
    },
  };
}

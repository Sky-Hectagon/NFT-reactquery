import fonts from "../fonts";
import { IColor } from "../interface";
import { Components } from "@mui/material/styles/components";

export default function ComponentSetting(theme: IColor): Components {
  return {
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
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: theme.paperBg,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: theme.backgroundColor,
          zIndex: 7,
          "@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
            backgroundColor: "rgba(255, 255, 255, 0.98)",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255, 0)",
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
          "@media (hover:none)": {
            "&:hover": {
              color: theme.textHighlightColor,
              textDecoration: "none",
              backgroundColor: "#00000000 !important",
            },
            "&:focus": {
              color: theme.textHighlightColor,
              backgroundColor: "#00000000 !important",
            },
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
    MuiInputBase: {
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
            color: theme.color,
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
            backgroundColor: theme.containedSecondaryButtonHoverBG,
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
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: theme.containedSecondaryButtonHoverBG,
          },
          "@media (hover:none)": {
            "&:hover": {
              color: theme.color,
              backgroundColor: theme.containedSecondaryButtonHoverBG,
            },
            "&:focus": {
              color: theme.color,
              backgroundColor: theme.containedSecondaryButtonHoverBG,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: "#93AEBC",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: "#FCFCFC",
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
        outlinedPrimary: {
          background: theme.backgroundButtonGradient,
          backgroundClip: "text",
          position: "relative",
          textFillColor: "transparent",
          border: "none!important",
          ":before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "12px",
            padding: "1px",
            background: theme.backgroundButtonGradient,
            mask: `linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);`,
            maskComposite: "xor",
          },
          "&:hover": {
            background: theme.backgroundButtonGradient,
            backgroundClip: "border-box",
            color: "white!important",
            textFillColor: "inherit",
          },
          "@media (hover:none)": {
            color: theme.primaryButtonBG,
            "&:hover": {
              color: `${theme.gold} !important`,
              backgroundColor: `${theme.primaryButtonBG} !important`,
            },
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
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.grid-message-typography": {
            color: theme.gray,
          },
          "&.chain-highlight": {
            color: theme.color,
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "&.grid-button": {
            borderColor: `${theme.gridButtonActiveBackground} !important`,
            "&:hover": {
              backgroundColor: theme.gridButtonHoverBackground,
            },
            "&.current": {
              backgroundColor: theme.gridButtonActiveBackground,
              "&:hover": {
                backgroundColor: theme.gridButtonHoverBackground,
              },
            },
          },
        },
      },
    },
  };
}

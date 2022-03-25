import fonts from "./fonts";

export const handleBackdropFilter = (rgbaString: string) => {
  const supported = CSS.supports("(-webkit-backdrop-filter: none)") || CSS.supports("(backdrop-filter: none)");
  if (!supported) {
    // make the opacity == 0.9;
    rgbaString = rgbaString.replace(/[\d\.]+\)$/g, "0.9)");
  }
  return rgbaString;
};

const commonSettings = {
  direction: "ltr",
  typography: {
    fontSize: 16,
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "3.3rem",
    },
    h2: {
      fontSize: "2.3rem",
      fontWeight: 600,
      letterSpacing: "1.3px",
    },
    h3: {
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
      letterSpacing: "0.4px",
    },
    h6: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1,
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 28,
          height: 16,
          padding: 0,
          display: "flex",
        },
        switchBase: {
          padding: 2,
          "&$checked": {
            transform: "translateX(12px)",
            "& + $track": {
              opacity: 1,
            },
          },
        },
        track: {
          borderRadius: 16 / 2,
          opacity: 1,
        },
        thumb: {
          width: 12,
          height: 12,
          boxShadow: "none",
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            "@font-face": fonts,
            // breakpoints: { values: breakpointValues },
            body: {
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              justifyContent: "flex-end",
            },
          },
        },
        MuiPaper: {
          defaultProps: {
            elevation: 0,
          },
          styleOverrides: {
            root: {
              backdropFilter: "blur(33px)",
              "&.hecta-card": {
                padding: "24px",
                borderRadius: "12px",
                maxWidth: "833px",
                width: "97%",
                marginBottom: "1.8rem",
                overflow: "hidden",
              },
              "&.hecta-menu": {
                padding: "24px",
                borderRadius: "12px",
                margin: "0px",
              },
              "&.hecta-chart-card": {
                padding: "24px",
                whiteSpace: "nowrap",
                maxWidth: "700px",
                width: "97%",
                marginBottom: "1.8rem",
              },
            },
          },
        },
        MuiContainer: {
          styleOverrides: {
            root: {
              backgroundColor: "transparent",
              flexGrow: 1,
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "none",
        },
        styleOverrides: {
          root: {
            textDecoration: "none",
            textUnderlineOffset: ".23rem",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "none",
              underline: "none",
            },
            "&.active": {
              textDecoration: "none",
              underline: "none",
            },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          margin: "36px 0px",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 0,
          fontSize: "1rem",
        },
        head: {
          color: "#999999",
        },
      },
    },

    MuiBackdrop: {
      defaultProps: {
        transitionDuration: 300,
      },
      styleOverrides: {
        root: {
          // backdropFilter: "blur(15px)",
          zIndex: 0,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: "12px",
          margin: "8px",
          padding: "18px 24px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          transition: ".2s",
          borderRadius: "12px",
          textTransform: "none",
          textDecoration: "none",
          whiteSpace: "nowrap",
          minWidth: "max-content",
          // padding: "18px 24px",
        },
        containedPrimary: {
          border: 0,
          fontWeight: "600",
        },
        containedSecondary: {
          fontWeight: "600",
        },
        outlinedPrimary: {
          // padding: "16px 32px",
        },
        outlinedSecondary: {
          textTransform: "none",
          textDecoration: "none",
          // fontSize: "1.1em",
          // padding: "16px 32px",
        },
        text: {
          "&:hover": {
            backgroundColor: "#00000000",
          },
        },
        textSecondary: {
          textTransform: "none",
          textDecoration: "none",
          padding: "2px 2px",
          "&:hover": {
            backgroundColor: "#00000000",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#00000000",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          height: "43px",
          padding: "16px",
        },
      },
    },
    // MuiInputLabel: {styleOverrides :
    //   // outlined: {
    //   //   transform: "translate(16px, 14px) scale(1)",
    //   // },
    // }},
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "40px",
          height: "40px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          cursor: "pointer",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: "min-content !important",
          padding: "0px",
          margin: "0px 10px",
          fontWeight: 400,
          fontSize: "24px",
          fontStyle: "normal",
          lineHeight: "24px",
        },
      },
    },
    MuiTextButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
    },
  },
};

export default commonSettings;

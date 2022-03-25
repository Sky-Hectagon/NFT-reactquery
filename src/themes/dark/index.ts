import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import fonts from "../fonts";
import commonSettings, { handleBackdropFilter } from "../global";
import ComponentSetting from "./components";
import { PaletteSetting } from "./palette";
import { IColor } from "../interface";

// TODO: Break repeated use color values out into list of consts declared here
// then set the values in darkTheme using the global color variables

const darkTheme: IColor = {
  color: "#ffffff",
  gold: "#F8CC82",
  gray: "#A3A3A3",
  textHighlightColor: "#a2a2a2",
  backgroundColor: "#1B1D21",
  background: `#1B1D21`,
  paperBg: "#1B1D21",
  modalBg: "#24242699",
  popoverBg: "rgba(153, 153, 153, 1)",
  menuBg: handleBackdropFilter("rgba(54, 56, 64, 0.5)"),
  backdropBg: "rgba(54, 56, 64, 0.5)",
  largeTextColor: "#F4D092",
  activeLinkColor: "#F5DDB4",
  activeLinkSvgColor:
    "brightness(0) saturate(100%) invert(84%) sepia(49%) saturate(307%) hue-rotate(326deg) brightness(106%) contrast(92%)",
  primaryButtonColor: "#333333",
  primaryButtonBG: "#F4D092",
  primaryButtonHoverBG: "#333333",
  secondaryButtonHoverBG: "rgba(54, 56, 64, 1)",
  outlinedPrimaryButtonHoverBG: "#F8CC82",
  outlinedPrimaryButtonHoverColor: "#333333",
  outlinedSecondaryButtonHoverBG: "transparent",
  outlinedSecondaryButtonHoverColor: "#F8CC82", //gold
  containedSecondaryButtonHoverBG: "rgba(255, 255, 255, 0.15)",
  graphStrokeColor: "rgba(255, 255, 255, .1)",
  gridButtonHoverBackground: "rgba(255, 255, 255, 0.6)",
  gridButtonActiveBackground: "#00000038",
  switchBg: "#333333",
  backgroundButtonGradient: "linear-gradient(132.98deg, #F8A4FF 14.33%, #FFFFFF 52.18%, #94FFEC 90.8%)",
  backgroundGradient: "linear-gradient(132.98deg, #F8A4FF 14.33%, #FFFFFF 52.18%, #94FFEC 90.8%)",
  backgroundGradientHover: "linear-gradient(132.98deg, #B200C1 14.33%, #130637 56.82%, #008E75 90.8%)",
  primaryButtonHoverColor: "#00000038",
};

export const dark = responsiveFontSizes(
  createTheme(
    {
      palette: PaletteSetting(darkTheme),
      typography: {
        fontFamily: "'Poppins', sans-serif",
      },
      components: ComponentSetting(darkTheme),
    },
    commonSettings,
  ),
);

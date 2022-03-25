import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import commonSettings, { handleBackdropFilter } from "../global";
import { IColor } from "../interface";
import PaletteSetting from "./palette";
import ComponentSetting from "./components";

const lightTheme: IColor = {
  color: "#000000",
  gold: "#F8CC82",
  gray: "#A3A3A3",
  textHighlightColor: "#93AEBC",
  backgroundColor: "#FFFFFF",
  background: "#FFFFFF",
  paperBg: "rgba(255, 255, 255, 1)",
  modalBg: "#FAFAFAEF",
  popoverBg: "rgba(255, 255, 255, 0.95)",
  menuBg: handleBackdropFilter("rgba(255, 255, 255, 0.5)"),
  backdropBg: "rgba(200, 200, 200, 0.4)",
  largeTextColor: "#759AAE",
  activeLinkColor: "#222222",
  activeLinkSvgColor: "invert(64%) sepia(11%) saturate(934%) hue-rotate(157deg) brightness(90%) contrast(86%)",
  primaryButtonBG: "#93AEBC",
  primaryButtonHoverBG: "#759AAE",
  // these need fixing
  primaryButtonHoverColor: "#FCFCFC",
  secondaryButtonHoverBG: "rgba(54, 56, 64, 1)",
  outlinedPrimaryButtonHoverBG: "#F8CC82",
  outlinedPrimaryButtonHoverColor: "#333333",
  outlinedSecondaryButtonHoverBG: "#FCFCFC",
  outlinedSecondaryButtonHoverColor: "#333333",
  containedSecondaryButtonHoverBG: "#33333333",
  graphStrokeColor: "rgba(37, 52, 73, .2)",
  gridButtonHoverBackground: "rgba(118, 130, 153, 0.2)",
  gridButtonActiveBackground: "rgba(118, 130, 153, 0.7)",
  switchBg: "#FCFCFC",
  backgroundGradient:
    "linear-gradient(94.47deg, rgba(124, 0, 158, 0.15) -2.19%, rgba(21, 0, 81, 0.15) 51.83%, rgba(0, 168, 177, 0.15) 101.53%)",
  backgroundButtonGradient: `linear-gradient(132.98deg, #B200C1 -16.57%, #5A0170 15.88%, #130637 56.82%, #0B7677 96.98%, #008E75 131.74%)`,
};

export const light = responsiveFontSizes(
  createTheme(
    {
      palette: PaletteSetting(lightTheme),
      typography: {
        fontFamily: "'Poppins', sans-serif",
      },
      components: ComponentSetting(lightTheme),
    },
    commonSettings,
  ),
);

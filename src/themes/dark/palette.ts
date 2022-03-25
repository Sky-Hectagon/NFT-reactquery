import { IColor } from "../interface";
import { PaletteOptions } from "@mui/material/styles/createPalette";

export function PaletteSetting(theme: IColor): PaletteOptions {
  return {
    mode: "dark",
    background: {
      default: theme.backgroundColor,
      paper: theme.paperBg,
    },
    getContrastText: () => theme.color,
    primary: {
      main: theme.color,
    },
    text: {
      primary: theme.color,
      secondary: theme.gray,
    },
  };
}

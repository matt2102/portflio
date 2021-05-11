import * as createPalette from '@material-ui/core/styles/createPalette';


declare module "@material-ui/core/styles/createPalette" {
  interface AccentPaletteColorOptions {
    purple?: string;
    yellow?: string;
    cyan?: string;
  }
  interface AccentPaletteColor{
    purple: string;
    yellow: string;
    cyan: string;
  }
  interface PaletteOptions{
    accent?: AccentPaletteColorOptions;
  }
  interface Palatte {
    accent?: AccentPaletteColor;
  }
}

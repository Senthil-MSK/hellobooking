 
import React, { useMemo } from "react";
 
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
 
import palette from "./palette";
import GlobalStyles from "./globalStyles";
import componentsOverride from "./overrides";

 
export default function ThemeProvider({ children }) {
  // Overwrite default theme options
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      spacing: 1,
      breakpoints: {
        values: {
          xs: 0,
          sm: 767,
          md: 993,
          lg: 1200,
          xl: 1600,
        },
      },
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

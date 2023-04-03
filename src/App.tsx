import React from "react";
import RoutesWapper from "./routes/Index.routes";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <RoutesWapper />
    </ThemeProvider>
  );
}

export default App;

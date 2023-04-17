import React from "react";
import Main from "./pages/Main";
import { ColorModeContext, useMode } from './theme/index.jsx';
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from './toolkitRedux/store'

function App() {
  const [theme, colorMode] = useMode();

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: { backgroundColor: theme.palette.pageColor.main },
            }}
          />
          <Main />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
}

export default App;

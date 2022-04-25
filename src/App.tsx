/**
 * * React Utils
 */
import { Routes, Route } from "react-router-dom";

/**
 * * Wallet && Blockchain interaction */
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

/**
 * ! Provider Error */
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  URI_AVAILABLE,
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
} from "@web3-react/walletconnect-connector";

/**
 * * Mantine UI Library
 */
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

/**
 * *Layout */
import Layout from "@layout/default";

/**
 * *Pages */
import Home from "@pages/Home";
import CardsPage from "@pages/CardsPage";
import TablePage from "@pages/TablePage";
import FormsPage from "@pages/FormsPage";

function App() {
  /*Theme Mode Management*/
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  /*
   * Blockchain interaction*/
  /* CONTEXT of Web3ReactProvider for reused state*/
  const context = useWeb3React();
  const { error } = context;

  //Gestion des erreurs
  function getErrorMessage(error: object) {
    if (error instanceof NoEthereumProviderError) {
      return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
    } else if (error instanceof UnsupportedChainIdError) {
      return "You're connected to an unsupported network.";
    } else if (
      error instanceof UserRejectedRequestErrorInjected ||
      error instanceof UserRejectedRequestErrorWalletConnect
    ) {
      return "Please authorize this website to access your Ethereum account.";
    } else {
      console.error(error);
      return "An unknown error occurred. Check the console for more details.";
    }
  }

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          {!!error && (
            <h4 style={{ marginTop: "1rem", marginBottom: "0" }}>
              {getErrorMessage(error)}
            </h4>
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<Layout />}>
              <Route path="/examples/cards" element={<CardsPage />} />
              <Route path="/examples/table" element={<TablePage />} />
              <Route path="/examples/forms" element={<FormsPage />} />
            </Route>
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;

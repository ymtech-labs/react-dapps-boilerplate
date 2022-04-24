/**
 * * React Utils
 */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

/**
 * * Wallet && Blockchain interaction */
import { ethers } from "ethers";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

import { injected, walletconnect } from "@utils/connectors";

import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
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
import {
  hideNotification,
  NotificationsProvider,
  showNotification,
} from "@mantine/notifications";

/**
 * *Layout */
import Layout from "@layout/default";

/**
 * *Pages */
import Home from "@pages/index";
import CardsPage from "@pages/CardsPage";
import TablePage from "@pages/TablePage";
import FormsPage from "@pages/FormsPage";

const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

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
  const { connector, library, chainId, account, active, error } = context;

  /* CONTRACT Address */
  const [greeting, setGreetingValue] = useState(null);

  //Get data of blockchain
  async function fetchGreeting() {
    if (typeof window.ethereum !== "undefined") {
      //Create a new provider with ether library
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //Create a new instance of contract (adress contract, abi contract && provider)
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
        const data = await contract.greet();
        setGreetingValue(data);
        hideNotification("erorrFetchGreeting");
        showNotification({
          id: "Données récupérée",
          color: "green",
          message: `Récupération de la données ${data}`,
        });
      } catch (e) {
        //const message =
        showNotification({
          id: "erorrFetchGreeting",
          color: "red",
          message: `Unable to call the greet() function of the greeter contract, try "npx hardhat node or npx hardhat run scripts/deploy.ts --network localhost" : ${e}`,
          autoClose: false,
        });
      }
    }
  }

  //setData on blockchain
  async function setGreeting() {
    if (active) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      setGreetingValue(null);
      try {
        await transaction.wait();
        await fetchGreeting();
        showNotification({
          id: "Transaction",
          color: "green",
          message: "Contrat modifié sur la blockchain",
          autoClose: false,
        });
      } catch (e) {
        showNotification({
          id: "erorrSetGreetingFetch",
          color: "red",
          message: `Unable to call contract to set transaction : setGreeting : ${e}`,
          autoClose: false,
        });
      }
    }
  }

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
          <NotificationsProvider>
            <b>Test : {greeting}</b>
            <input
              onChange={(e) => setGreetingValue(e.target.value)}
              placeholder="Set greeting"
            />
            <button onClick={setGreeting}>Set Greeting</button>
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
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;

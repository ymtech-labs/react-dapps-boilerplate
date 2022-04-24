import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "@utils/connectors";
import {
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
  Menu,
  Divider,
} from "@mantine/core";

import { useEffect, useState } from "react";

import LightDarkButton from "@components/LightDarkButton";
import { Link } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import {
  Alien,
  Network,
  Copy,
  CurrencyEthereum,
  MessageCircle,
  ArrowBarToRight,
  ArrowsLeftRight,
} from "tabler-icons-react";

function headerLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  // Connect to wallet
  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  const [networkName, setNetworkName] = useState("unknown");

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          setNetworkName(library._network.name);
        } catch (e) {
          showNotification({
            id: "Error to connect wallet ",
            color: "red",
            message: `Error with injected wallet : ${e}`,
            autoClose: false,
          });
        }
      }
    };
    connectWalletOnPageLoad();
  });

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", "true");
    } catch (e) {
      showNotification({
        id: "Error to connect wallet ",
        color: "red",
        message: `Error with injected wallet : ${e}`,
        autoClose: false,
      });
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (e) {
      showNotification({
        id: "Error to disconnect wallet ",
        color: "red",
        message: `Error with injected wallet : ${e}`,
        autoClose: false,
      });
    }
  }

  function copyAccount(adress: string) {
    navigator.clipboard.writeText(adress || "");
    return showNotification({
      id: "Copy",
      color: "green",
      message: `The account address has been copied : ${adress}`,
    });
  }

  return (
    <Header
      style={{ display: "flex", justifyContent: "space-between" }}
      height={70}
      p="md"
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          size="lg"
          transform="uppercase"
        >
          Tuto React - Mantine
        </Text>
      </MediaQuery>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Text component={Link} variant="link" to="/">
          Home
        </Text>
        <Text component={Link} variant="link" to="/examples">
          Examples
        </Text>
        {!active && (
          <Button
            leftIcon={<CurrencyEthereum />}
            variant="gradient"
            uppercase
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={connect}
          >
            Connect wallet
          </Button>
        )}
        {(active || error) && (
          <>
            <Menu
              control={
                <Button
                  styles={(theme) => ({
                    root: {
                      textOverflow: "ellipsis",
                      maxWidth: "190px",
                    },
                  })}
                  leftIcon={<Alien />}
                  variant="outline"
                  uppercase
                  type="button"
                >
                  {account === null
                    ? "-"
                    : account
                    ? `${account.substring(0, 6)}...${account.substring(
                        account.length - 4
                      )}`
                    : ""}
                </Button>
              }
            >
              <Menu.Label>
                Wallet :{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {library.connection.url}
                </span>
              </Menu.Label>
              <Menu.Item icon={<Network size={14} />}>
                Network :{" "}
                <b>
                  {" "}
                  {networkName} ({chainId} )
                </b>
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  copyAccount;
                }}
                icon={<Copy size={14} />}
              >
                Copy Adress
              </Menu.Item>
              <Divider />
              <Menu.Item
                onClick={() => {
                  disconnect();
                }}
                color="red"
                icon={<ArrowBarToRight size={14} />}
              >
                Disconnect Wallet
              </Menu.Item>
            </Menu>
          </>
        )}

        <LightDarkButton />
      </div>
    </Header>
  );
}

export default headerLayout;

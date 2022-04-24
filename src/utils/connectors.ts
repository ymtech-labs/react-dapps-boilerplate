import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 12000;

const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/61778f8337ab4ddab531940abe721ab9",
  4: "https://rinkeby.infura.io/v3/61778f8337ab4ddab531940abe721ab9",
};

/** Browser Extension/dApp Browser */
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 31337],
});

/**QR Code */
export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

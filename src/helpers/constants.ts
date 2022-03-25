import { NodeHelper } from "./NodeHelper";
import { ReactComponent as BusdImg } from "src/assets/tokens/BUSD.svg";
import { ReactComponent as HectaImg } from "src/assets/tokens/HECTA.svg";
import { ReactComponent as BNBImg } from "src/assets/tokens/BNB.svg";

export const THE_GRAPH_URL =
  window.location.host === "app.hectagon.finance" ? "" : "https://graph.gameifyhub.asia/subgraphs/name/hectagon";

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;
export const TOKEN_DECIMALS = 9;

export enum NetworkId {
  MAINNET = 56,
  TESTNET_RINKEBY = 4,
  TESTNET_BSC = 97,
}

interface IAddresses {
  [key: number]: { [key: string]: string };
}

interface IBackedToken {
  [key: string]: {
    decimal: number;
    icon: SVGImageElement | any;
  };
}

export const backedTokens: IBackedToken = {
  BUSD: {
    decimal: 18,
    icon: BusdImg,
  },
  HECTA: {
    decimal: 9,
    icon: HectaImg,
  },
};
export const addresses: IAddresses = {
  [NetworkId.TESTNET_BSC]: {
    NFT_ADDRESS: "0xE3a4D0D3C9d61B94F0C32Fd1c4d8AC1bc77379D4",
    MINT_ADDRESS: "0x8703d1C3cd670dd678ddFacA1e98237f6a342C3C",
    BUSD_ADDRESS: "0x1843e3E1f1778e0f772643D20f60FFEd776c745a",
    HECTA_ADDRESS: "0x383990f08c5706d436c6a8De837C21c15942B705",
  },
  [NetworkId.TESTNET_RINKEBY]: {},
  [NetworkId.MAINNET]: {},
};

/**
 * Network details required to add a network to a user's wallet, as defined in EIP-3085 (https://eips.ethereum.org/EIPS/eip-3085)
 */

interface INativeCurrency {
  name: string;
  symbol: string;
  decimals?: number;
}

interface INetwork {
  chainName: string;
  chainId: number;
  nativeCurrency: INativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  image: SVGImageElement | any;
  imageAltText: string;
  uri: () => string;
}
export const NETWORKS: { [key: number]: INetwork } = {
  [NetworkId.MAINNET]: {
    chainName: "BSC",
    chainId: 56,
    nativeCurrency: {
      name: "Binance Smart Chain",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://bscscan.com/"],
    image: BNBImg,
    imageAltText: "BNB Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.MAINNET) || "https://bsc-dataseed.binance.org",
  },
  [NetworkId.TESTNET_RINKEBY]: {
    chainName: "Rinkeby Testnet",
    chainId: 4,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://rinkeby.etherscan.io/#/"],
    image: BusdImg,
    imageAltText: "Ethereum Logo",
    uri: () =>
      NodeHelper.getMainnetURI(NetworkId.TESTNET_RINKEBY) ||
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  },

  [NetworkId.TESTNET_BSC]: {
    chainName: "BSC Testnet",
    chainId: 97,
    nativeCurrency: {
      name: "Binance",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://testnet.bscscan.com/"],
    image: BNBImg,
    imageAltText: "BSC Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.TESTNET_BSC) || "https://data-seed-prebsc-1-s1.binance.org:8545",
  },
};

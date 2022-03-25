import { NetworkId } from "src/helpers/constants";
import { useQuery } from "react-query";
// import { fetchCrossChainBalances } from "src/lib/fetchBalances";

export interface IToken {
  symbol: string;
  address: string;
  decimals: number;
  icon: string;
  balance: string;
  price: number;
  crossChainBalances?: { balances: Record<NetworkId, string>; isLoading: boolean };
  vaultBalances?: { [vaultName: string]: string };
  totalBalance: string;
}

const addTokenToWallet = async (token: IToken, userAddress: string) => {
  if (!window.ethereum) return;
  const host = window.location.origin;
  try {
    await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: token.address,
          symbol: token.symbol,
          decimals: token.decimals,
          image: `${host}/${token.icon}`,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// export const useCrossChainBalances = (address: string) => {
//   const { isLoading, data } = useQuery(["crossChainBalances", address], () => fetchCrossChainBalances(address), {
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//   });
//   return { isLoading, ...data };
// };

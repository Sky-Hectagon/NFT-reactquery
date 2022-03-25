import { JsonRpcProvider, StaticJsonRpcProvider } from "@ethersproject/providers";
import { BigNumber, BigNumberish } from "ethers";
import { NetworkId } from "../helpers/constants";
import { History } from "history";

export interface IJsonRPCError {
  readonly message: string;
  readonly code: number;
  readonly data?: {
    message: string;
  };
}

export interface IBaseAsyncThunk {
  readonly networkID: NetworkId;
  readonly provider: StaticJsonRpcProvider | JsonRpcProvider;
}

export interface IValueOnlyAsyncThunk extends IBaseAsyncThunk {
  readonly value: BigNumber;
}

export interface IChangeApprovalAsyncThunk extends IBaseAsyncThunk {
  readonly token: string;
  readonly address: string;
}

export interface IChangeApprovalWithVersionAsyncThunk extends IChangeApprovalAsyncThunk {
  readonly version2: boolean;
}

export interface IValueAsyncThunk extends IBaseAsyncThunk {
  readonly value: string;
  readonly address: string;
}

export interface IActionValueAsyncThunk extends IValueAsyncThunk {
  readonly action: string;
}

export interface IActionValueGasAsyncThunk extends IActionValueAsyncThunk {
  readonly gas: number;
  readonly version2: boolean;
  readonly rebase: boolean;
}

export interface IBaseAddressAsyncThunk extends IBaseAsyncThunk {
  readonly address: string;
}

export interface IDetailNFTAsyncThunk extends IBaseAsyncThunk {
  readonly id: string;
  readonly address: string;
}
export interface ITransferNFTAsyncThunk extends IBaseAsyncThunk {
  readonly newOwner: string;
  readonly address: string;
  readonly tokenId: string;
  readonly history: History<History.LocationState>;
}

export interface IMintNFTAsyncThunk extends IBaseAsyncThunk {
  readonly to: string;
  readonly uri: string;
  readonly symbol: string;
  readonly amount: string;
  readonly id: string;
}

export interface IMultipleMintNFTAsyncThunk extends IBaseAsyncThunk {
  readonly to: string;
  readonly uris: string[];
  readonly symbols: string[];
  readonly amount: string[];
  readonly id: string;
}
export interface IRedeemNFTAsyncThunk extends IBaseAsyncThunk {
  readonly tokenId: string;
  readonly address: string;
  readonly history: History<History.LocationState>;
}

export interface IApproveNFTAsyncThunk extends IBaseAsyncThunk {
  // readonly;
}
// Account Slice

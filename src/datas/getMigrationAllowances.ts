import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import type { ApiClientError } from 'src/hooks/apiClient';
import { addresses } from "src/helpers/constants";
import { BigNumber } from "ethers";
import { IERC20__factory } from "src/typechain";
import { handleContractError } from "../helpers";

import {
  IBaseAddressAsyncThunk,
} from "../slices/interfaces";

type DataResponseType = {
  data?: String[];
};

const getMigrationAllowances = ({ networkID, provider, address }: IBaseAddressAsyncThunk): UseQueryResult<
  DataResponseType,
  ApiClientError<unknown>
> => {  
  return useQuery(['migrationAllowances'],
    async () => {
      let gOhmAllowance = BigNumber.from(0);
      const gOhmContract = IERC20__factory.connect(addresses[networkID].GHECTA_ADDRESS, provider);
      gOhmAllowance = await gOhmContract.allowance(address, addresses[networkID].MIGRATOR_ADDRESS);

      return {
        migration: {
          gohm: +gOhmAllowance,
        },
        isMigrationComplete: false,
      };
    },
    {
      onError: (error) => {
        handleContractError(error);
      },
    }
  );
};

export default getMigrationAllowances;

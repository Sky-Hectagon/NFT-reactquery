import { useMutation, useQueryClient } from 'react-query';
import type { UseMutationResult } from 'react-query';
import { apiClient } from 'src/hooks/apiClient';
import type { ApiClientError } from 'src/hooks/apiClient';
import { useHandleApiResponseError } from 'src/hooks/useHandleApiResponseErros';


type UpdateDataType = {
  data: string;
};

const useMutate = (): UseMutationResult<
  unknown,
  ApiClientError<unknown>,
  UpdateDataType[],
  unknown
> => {
  const queryClient = useQueryClient();
  const { handleApiResponseError } = useHandleApiResponseError();

  return useMutation(async (data: UpdateDataType[]) => {
    const api = apiClient();
    const updateUrl = '/profile/edit/';
    await api.put(updateUrl, data);
  }, {
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
    onError: (error) => {	
      handleApiResponseError(error);
    },
  });
}; 

export default useMutate;

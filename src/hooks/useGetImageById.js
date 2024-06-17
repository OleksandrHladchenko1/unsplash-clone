import { useQuery } from 'react-query';

import { getImageById } from '../api/images';

export const useGetImageById = id => {
  const { isLoading, data = {} } = useQuery({
    queryKey: [id],
    queryFn: () => getImageById(id),
    enabled: !!id,
  });

  return {
    isLoading,
    data,
  }
};

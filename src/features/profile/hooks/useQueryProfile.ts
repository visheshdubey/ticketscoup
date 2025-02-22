import { QueryKeys, api } from '@/lib/api';

import { useQuery } from '@tanstack/react-query';

export const useQueryProfile = () => useQuery({ queryFn: () => api.profile(), queryKey: [QueryKeys.PROFILE] });

import { QueryKeys, api } from '@/lib/api';

import { useQuery } from '@tanstack/react-query';

export const useQueryTeam = () => useQuery({ queryFn: () => api.getTeam({ id: 1 }), queryKey: [QueryKeys.TEAM] });

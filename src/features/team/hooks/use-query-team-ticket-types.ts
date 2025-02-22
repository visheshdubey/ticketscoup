import { QueryKeys, api } from '@/lib/api';

import { useQuery } from '@tanstack/react-query';

export const useQueryTeamTicketTypes = () =>
    useQuery({ queryFn: () => api.getTeamTicketTypes({ id: 1 }), queryKey: [QueryKeys.TEAM_TICKET_TYPES] });

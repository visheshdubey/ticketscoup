import { format, parseISO } from 'date-fns';

export function formatTimestampToLocaleTime(timestamp: string) {
    const localeDate = parseISO(timestamp);
    return format(localeDate, 'hh:mm a');
}

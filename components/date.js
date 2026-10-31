import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  // parseISO('2026-10-01') -> a JavaScript Date object
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

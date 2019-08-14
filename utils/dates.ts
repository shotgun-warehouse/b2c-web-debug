import { format, differenceInSeconds } from 'date-fns';
import fr from 'date-fns/locale/fr';

const formatOptions = () => {
  return { locale: fr };
};

export const formatDate = (timestamp: number) => {
  const date = APIDate.parse(timestamp);

  return format(date, 'dddd D MMMM YYYY', formatOptions());
};

export const formatDates = (startTime: number, endTime: number) => {
  if (endTime - startTime > 60 * 60 * 24) {
    return `Du ${formatDate(startTime)} au ${formatDate(endTime)}`;
  } else {
    return formatDate(startTime);
  }
};

export const formatTime = (timestamp: number) => {
  const date = APIDate.parse(timestamp);

  return format(date, 'HH:mm', formatOptions());
};

export const secondsLeft = (timestamp: number) => {
  const date = APIDate.parse(timestamp);

  return differenceInSeconds(date, new Date());
};

export const timeLeftToString = (timestamp: number): string => {
  const date = APIDate.parse(timestamp);

  const secondsLeft = differenceInSeconds(date, new Date());

  if (secondsLeft <= 0) {
    return '00 : 00';
  } else {
    const minutes = `${Math.floor(secondsLeft / 60)}`.padStart(2, '0');
    const seconds = `${secondsLeft % 60}`.padStart(2, '0');
    return `${minutes} : ${seconds}`;
  }
};

export const APIDate = {
  parse: (timestamp: number) => {
    if (Number.isInteger(timestamp)) {
      return new Date(timestamp * 1000);
    }
    throw new Error(
      "timestamp is not integer and can't be converted to date: " + timestamp,
    );
  },
  format: (date: Date) => Math.trunc(date.getTime() / 1000),
};

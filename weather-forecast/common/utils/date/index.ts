import { addDays, format, isToday, parse, startOfDay } from 'date-fns';
import { ButtonTranslationKey, translations } from '../../translations';
// TODO: remove relative imports
export const generatetoggleDates = (
  startDay: Date,
  nowDate: string,
  todayDate: string,
): string[] => {
  const dateArray: string[] = [];
  dateArray.push(nowDate);

  for (let i = 0; i < 5; i++) {
    const nextDate = addDays(startOfDay(startDay), i);
    const isTodayDate = isToday(nextDate);
    const dateString = isTodayDate ? todayDate : format(nextDate, 'MMM dd');

    dateArray.push(dateString);
  }

  return dateArray;
};

export const formatDay = (date: Date) => {
  return format(date, 'dd-MM-yyyy');
};

export const reformatToggleButtonDate = (
  toggleButton: string,
  nowDate: string,
  todayDaye: string,
) => {
  if (toggleButton === nowDate) {
    return translations.en[ButtonTranslationKey.NOW];
  }
  if (toggleButton === todayDaye) {
    return translations.en[ButtonTranslationKey.TODAY];
  }
  const originalDate = parse(toggleButton, 'MMM dd', new Date());
  return formatDay(originalDate);
};

export const formatTime = (date: Date) => format(date, 'ha');

export const formatDayTime = (dateString: string) => {
  const date = new Date(dateString);

  if (isToday(date)) {
    return `Today, ${formatTime(date)}`;
  } else {
    return format(date, 'd MMM, ha');
  }
};

import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/fr";

export const useDateLocale = ({ locale }: { locale?: string }) => {
  dayjs.locale(locale);

  return {
    dayjs,
  };
};

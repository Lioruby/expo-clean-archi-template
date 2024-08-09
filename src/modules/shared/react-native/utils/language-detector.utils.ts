import * as Localization from "expo-localization";
import type { LanguageDetectorModule } from "i18next";

const detectPrimaryLanguage = () => {
  const locales = Localization.getLocales();
  const primaryLocale = locales[0];

  return primaryLocale.languageTag;
};

export const languageDetector: LanguageDetectorModule = {
  type: "languageDetector",
  detect: detectPrimaryLanguage,
  cacheUserLanguage: () => {},
  init: () => {},
};

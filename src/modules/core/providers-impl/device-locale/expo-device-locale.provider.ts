import { getLocales } from "expo-localization";
import { IDeviceLocaleProvider } from "../../providers/device-locale.provider";

export class ExpoDeviceLocaleProvider implements IDeviceLocaleProvider {
  getLocale(): string {
    const locales = getLocales();
    const primaryLocale = locales[0];

    return primaryLocale.languageCode ?? "en";
  }
}

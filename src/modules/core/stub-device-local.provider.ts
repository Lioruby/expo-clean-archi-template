import { IDeviceLocaleProvider } from "./device-locale.provider";

export class StubDeviceLocaleProvider implements IDeviceLocaleProvider {
  getLocale(): string {
    return "en";
  }
}

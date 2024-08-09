import { ExpoDeviceLocaleProvider } from "./expo-device-locale.provider";
import * as Localization from "expo-localization";

jest.mock("expo-localization");

describe("ExpoDeviceLocaleProvider", () => {
  beforeEach(() => {
    (Localization.getLocales as jest.Mock).mockReturnValue([
      {
        languageCode: "pl",
      },
    ]);
  });

  it("should return the locale from the device", () => {
    const provider = new ExpoDeviceLocaleProvider();
    const locale = provider.getLocale();
    expect(locale).toBe("pl");
  });
});

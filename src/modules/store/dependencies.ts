import { IDeviceLocaleProvider } from "../global/core/providers/device-locale.provider";
import { IStorageProvider } from "../global/core/providers/storage.provider";

export type Dependencies = {
  /* Providers */
  deviceLocaleProvider: IDeviceLocaleProvider;
  storageProvider: IStorageProvider;
};

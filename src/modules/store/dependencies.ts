import { IAnalyticsGateway } from "../analytics/gateways/analytics-gateway";
import { IDeviceLocaleProvider } from "../core/providers/device-locale.provider";
import { IStorageProvider } from "../core/providers/storage.provider";

export type Dependencies = {
  /* Providers */
  deviceLocaleProvider: IDeviceLocaleProvider;
  storageProvider: IStorageProvider;

  /* Gateways */
  analyticsGateway: IAnalyticsGateway;
};

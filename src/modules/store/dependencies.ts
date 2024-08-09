import { IAnalyticsGateway } from "../analytics/gateways/analytics-gateway";
import { IDeviceLocaleProvider } from "../core/device-locale.provider";

export type Dependencies = {
  deviceLocaleProvider: IDeviceLocaleProvider;
  analyticsGateway: IAnalyticsGateway;
};

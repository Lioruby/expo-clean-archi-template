import * as amplitude from "@amplitude/analytics-react-native";
import { IAnalyticsGateway } from "../core/gateways/analytics.gateway";

export class AmplitudeAnalyticsGateway implements IAnalyticsGateway {
  constructor() {
    const publicApiKey = process.env.PUBLIC_AMPLITUDE_KEY ?? "";

    amplitude.init(publicApiKey);
  }

  track(event: string, properties?: Record<string, any>): void {
    amplitude.track(event, properties);
  }
}

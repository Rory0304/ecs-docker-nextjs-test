import { AnalyticsType } from '@enums/analytics';

export interface AnalyticsEvent {
  analyticsTypes: AnalyticsType[];
  eventName: string;
  eventValues?: { [key: string]: any };
}

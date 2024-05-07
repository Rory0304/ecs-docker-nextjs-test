import { AnalyticsEvent } from '@interfaces/analytics';

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export namespace GoogleAnalyticsManager {
  export const logEvent = async (
    eventName: AnalyticsEvent['eventName'],
    eventValues: AnalyticsEvent['eventValues'],
  ) => {
    if (window.dataLayer) {
      window.dataLayer?.push(Object.assign({ event: eventName }, eventValues));
    }
  };
}

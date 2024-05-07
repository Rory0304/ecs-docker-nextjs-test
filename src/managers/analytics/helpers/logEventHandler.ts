import { AnalyticsType } from '@enums/analytics';
import { AnalyticsEvent } from '@interfaces/analytics';
import { GoogleAnalyticsManager } from '@managers/analytics/vendors/google';

export const logEventHandler = (event: AnalyticsEvent) => {

  const analyticsTypes = event.analyticsTypes;
  const eventName = event.eventName;
  const eventValues = event.eventValues;

  analyticsTypes.forEach(type => {
    switch (type) {
      case AnalyticsType.GOOGLE:
      default: {
        GoogleAnalyticsManager.logEvent(eventName, eventValues);
        break;
      }
    }
  });
};

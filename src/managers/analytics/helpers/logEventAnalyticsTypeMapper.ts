import { AnalyticsEventLoggingKey, AnalyticsType } from '@enums/analytics';

export const getAllAnalyticsTypes = (eventName: string): AnalyticsType[] => {
  // Default
  const result: Set<AnalyticsType> = new Set([AnalyticsType.MIXPANEL, AnalyticsType.GOOGLE]);

  const analyticsTypeByEventLoggingKey = getNormalAnalyticsTypes(eventName as AnalyticsEventLoggingKey);

  analyticsTypeByEventLoggingKey.forEach(type => {
    result.add(type);
  });

  return Array.from(result);
};

const getNormalAnalyticsTypes = (loggingKey: AnalyticsEventLoggingKey): AnalyticsType[] => {
  switch (loggingKey) {
    default:
      return [];
  }
};

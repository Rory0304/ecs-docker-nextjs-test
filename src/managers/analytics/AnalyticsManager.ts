import { AnalyticsLogEventMapperManager } from './AnalyticsLogEventMapperManager';
import { logEventHandler } from './helpers/logEventHandler';

import { AnalyticsEventLoggingKey } from '@enums/analytics';
import { AnalyticsEvent } from '@interfaces/analytics';
import { PlantwikiAnalyticsViewParams } from '@interfaces/analytics/plantwiki';

export const logEvent = (eventName: AnalyticsEvent['eventName'], eventValues: AnalyticsEvent['eventValues']) => {
  const analyticsEventMapper = new AnalyticsLogEventMapperManager(eventName, eventValues);
  const analyticsEvent = analyticsEventMapper.analyticsEvent;
  logEventHandler(analyticsEvent);
};

const createEventHandlers =
  <T>(eventName: AnalyticsEvent['eventName']) =>
  (params?: T) => {
    logEvent(eventName, params as AnalyticsEvent['eventValues']);
  };

/**
 * Plantwiki
 */
export const view_plantdetail = createEventHandlers<PlantwikiAnalyticsViewParams.ViewPlantdetail>(
  AnalyticsEventLoggingKey.view_plantdetail,
);

/**
 * App Download
 */
export const click_download_app = createEventHandlers(AnalyticsEventLoggingKey.click_download_app);

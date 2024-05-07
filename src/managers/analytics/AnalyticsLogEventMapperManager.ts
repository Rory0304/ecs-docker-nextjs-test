import { getAllAnalyticsTypes } from './helpers/logEventAnalyticsTypeMapper';

import { AnalyticsType } from '@enums/analytics';
import { AnalyticsEvent } from '@interfaces/analytics';

export class AnalyticsLogEventMapperManager {
  analyticsEvent: AnalyticsEvent;

  private eventName: AnalyticsEvent['eventName'];

  private eventValues: AnalyticsEvent['eventValues'];

  private analyticsTypes: AnalyticsType[];

  // Constructor

  constructor(eventName: AnalyticsEvent['eventName'], eventValues?: AnalyticsEvent['eventValues']) {
    this.eventName = eventName;
    this.eventValues = eventValues;
    this.analyticsTypes = getAllAnalyticsTypes(eventName);

    this.analyticsEvent = {
      eventName: this.eventName,
      eventValues: this.eventValues,
      analyticsTypes: this.analyticsTypes,
    };
  }
}

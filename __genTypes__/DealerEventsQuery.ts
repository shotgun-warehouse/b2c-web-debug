/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { EventFilterInput, EventSortInput } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL query operation: DealerEventsQuery
// ====================================================

export interface DealerEventsQuery_events {
  __typename: "Event";
  id: string;
  name: string;
  cover: string | null;
  startTime: number;
  endTime: number;
  /**
   * The price of the cheapest ticket deal for this event. Null if event is sold-out
   */
  minTicketPrice: number | null;
}

export interface DealerEventsQuery {
  /**
   * Get all events.
   */
  events: DealerEventsQuery_events[];
}

export interface DealerEventsQueryVariables {
  filter?: EventFilterInput | null;
  sort?: EventSortInput | null;
}

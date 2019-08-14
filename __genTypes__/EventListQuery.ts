/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { EventFilterInput, Page, CityInput, EventSortInput, ETagTypo } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL query operation: EventListQuery
// ====================================================

export interface EventListQuery_events_tags {
  __typename: "Tag";
  id: string;
  name: string;
  typo: ETagTypo;
}

export interface EventListQuery_events_artists {
  __typename: "Artist";
  id: string;
  name: string;
}

export interface EventListQuery_events_dealer {
  __typename: "Dealer";
  id: string;
  name: string;
  logo: string | null;
}

export interface EventListQuery_events {
  __typename: "Event";
  id: string;
  name: string;
  cover: string | null;
  trailer: string | null;
  startTime: number;
  endTime: number;
  /**
   * The price of the cheapest ticket deal for this event. Null if event is sold-out
   */
  minTicketPrice: number | null;
  tags: EventListQuery_events_tags[];
  artists: EventListQuery_events_artists[];
  dealer: EventListQuery_events_dealer;
}

export interface EventListQuery {
  /**
   * Get all events.
   */
  events: EventListQuery_events[];
}

export interface EventListQueryVariables {
  filter?: EventFilterInput | null;
  page?: Page | null;
  city?: CityInput | null;
  search?: string | null;
  sort?: EventSortInput | null;
}

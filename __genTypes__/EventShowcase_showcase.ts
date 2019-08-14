/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ETagTypo } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL fragment: EventShowcase_showcase
// ====================================================

export interface EventShowcase_showcase_events_tags {
  __typename: "Tag";
  id: string;
  name: string;
  typo: ETagTypo;
}

export interface EventShowcase_showcase_events_artists {
  __typename: "Artist";
  id: string;
  name: string;
}

export interface EventShowcase_showcase_events_dealer {
  __typename: "Dealer";
  id: string;
  name: string;
  logo: string | null;
}

export interface EventShowcase_showcase_events {
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
  tags: EventShowcase_showcase_events_tags[];
  artists: EventShowcase_showcase_events_artists[];
  dealer: EventShowcase_showcase_events_dealer;
}

export interface EventShowcase_showcase {
  __typename: "HomeShowcase";
  id: string;
  heading: string | null;
  text: string | null;
  events: EventShowcase_showcase_events[];
}

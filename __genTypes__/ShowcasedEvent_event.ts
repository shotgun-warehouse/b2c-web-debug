/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ETagTypo } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL fragment: ShowcasedEvent_event
// ====================================================

export interface ShowcasedEvent_event_tags {
  __typename: "Tag";
  id: string;
  name: string;
  typo: ETagTypo;
}

export interface ShowcasedEvent_event_artists {
  __typename: "Artist";
  id: string;
  name: string;
}

export interface ShowcasedEvent_event_dealer {
  __typename: "Dealer";
  id: string;
  name: string;
  logo: string | null;
}

export interface ShowcasedEvent_event {
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
  tags: ShowcasedEvent_event_tags[];
  artists: ShowcasedEvent_event_artists[];
  dealer: ShowcasedEvent_event_dealer;
}

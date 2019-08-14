/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ECurrency, ETagTypo } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL query operation: EventQuery
// ====================================================

export interface EventQuery_event_tags {
  __typename: "Tag";
  id: string;
  name: string;
  typo: ETagTypo;
}

export interface EventQuery_event_artists {
  __typename: "Artist";
  id: string;
  name: string;
}

export interface EventQuery_event_dealer {
  __typename: "Dealer";
  id: string;
  name: string;
  logo: string | null;
}

export interface EventQuery_event_subCategories {
  __typename: "SubCategory";
  id: string;
  title: string;
  rank: number | null;
}

export interface EventQuery_event_deals_subCategory {
  __typename: "SubCategory";
  id: string;
  title: string;
  rank: number | null;
}

export interface EventQuery_event_deals {
  __typename: "Deal";
  id: string;
  title: string;
  description: string | null;
  maxQuantity: number;
  isSoldOut: boolean;
  price: number;
  typo: string | null;
  subCategory: EventQuery_event_deals_subCategory | null;
}

export interface EventQuery_event {
  __typename: "Event";
  id: string;
  currency: ECurrency;
  /**
   * Facebook Pixel ID set by the organizer
   */
  facebookPixelId: string | null;
  /**
   * Metadata - pixels or scripts - set by the organizer on the Shop page
   */
  shopMetadata: string | null;
  /**
   * Metadata - pixels or scripts - set by the organizer on the Shop confirmation page
   */
  confirmationMetadata: string | null;
  name: string;
  cover: string | null;
  trailer: string | null;
  startTime: number;
  endTime: number;
  /**
   * The price of the cheapest ticket deal for this event. Null if event is sold-out
   */
  minTicketPrice: number | null;
  tags: EventQuery_event_tags[];
  artists: EventQuery_event_artists[];
  dealer: EventQuery_event_dealer;
  subCategories: EventQuery_event_subCategories[];
  deals: EventQuery_event_deals[];
}

export interface EventQuery {
  /**
   * Get an event by ID.
   */
  event: EventQuery_event;
}

export interface EventQueryVariables {
  id: string;
}

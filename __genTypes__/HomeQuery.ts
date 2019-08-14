/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ETagTypo } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL query operation: HomeQuery
// ====================================================

export interface HomeQuery_home_hero {
  __typename: "HomeHero";
  heading: string | null;
  text: string | null;
  image: string | null;
  video: string | null;
  eventId: string;
}

export interface HomeQuery_home_showcases_events_tags {
  __typename: "Tag";
  id: string;
  name: string;
  typo: ETagTypo;
}

export interface HomeQuery_home_showcases_events_artists {
  __typename: "Artist";
  id: string;
  name: string;
}

export interface HomeQuery_home_showcases_events_dealer {
  __typename: "Dealer";
  id: string;
  name: string;
  logo: string | null;
}

export interface HomeQuery_home_showcases_events {
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
  tags: HomeQuery_home_showcases_events_tags[];
  artists: HomeQuery_home_showcases_events_artists[];
  dealer: HomeQuery_home_showcases_events_dealer;
}

export interface HomeQuery_home_showcases {
  __typename: "HomeShowcase";
  id: string;
  heading: string | null;
  text: string | null;
  events: HomeQuery_home_showcases_events[];
}

export interface HomeQuery_home_focus {
  __typename: "HomeFocus";
  heading: string | null;
  text: string | null;
  eventId: string;
  image: string | null;
  callToAction: string | null;
}

export interface HomeQuery_home {
  __typename: "Home";
  id: string;
  hero: HomeQuery_home_hero | null;
  showcases: (HomeQuery_home_showcases | null)[] | null;
  focus: (HomeQuery_home_focus | null)[] | null;
}

export interface HomeQuery {
  /**
   * Shotgun website home CMS
   */
  home: HomeQuery_home;
}

export interface HomeQueryVariables {
  cityId: string;
}

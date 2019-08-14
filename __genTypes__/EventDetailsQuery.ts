/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EventDetailsQuery
// ====================================================

export interface EventDetailsQuery_event_artworks {
  __typename: "Artwork";
  id: string;
  originalUrl: string;
}

export interface EventDetailsQuery_event_location_gps {
  __typename: "GPSPoint";
  lat: number;
  lng: number;
}

export interface EventDetailsQuery_event_location_city_location {
  __typename: "GPSPoint";
  lat: number;
  lng: number;
}

export interface EventDetailsQuery_event_location_city {
  __typename: "City";
  id: string;
  name: string;
  location: EventDetailsQuery_event_location_city_location | null;
}

export interface EventDetailsQuery_event_location {
  __typename: "EventLocation";
  street: string | null;
  venue: string | null;
  gps: EventDetailsQuery_event_location_gps | null;
  city: EventDetailsQuery_event_location_city;
}

export interface EventDetailsQuery_event_dealer {
  __typename: "Dealer";
  id: string;
  name: string;
  logo: string | null;
  description: string | null;
}

export interface EventDetailsQuery_event {
  __typename: "Event";
  id: string;
  startTime: number;
  endTime: number;
  artworks: EventDetailsQuery_event_artworks[];
  description: string | null;
  location: EventDetailsQuery_event_location;
  dealer: EventDetailsQuery_event_dealer;
}

export interface EventDetailsQuery {
  /**
   * Get an event by ID.
   */
  event: EventDetailsQuery_event;
}

export interface EventDetailsQueryVariables {
  id: string;
}

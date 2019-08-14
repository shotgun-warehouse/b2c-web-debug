/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: VenueHero_dealer
// ====================================================

export interface VenueHero_dealer_geolocation_city {
  __typename: "City";
  name: string;
}

export interface VenueHero_dealer_geolocation {
  __typename: "Geolocation";
  city: VenueHero_dealer_geolocation_city | null;
}

export interface VenueHero_dealer {
  __typename: "Dealer";
  id: string;
  name: string;
  description: string | null;
  logo: string | null;
  cover: string | null;
  website: string | null;
  facebookPage: string | null;
  geolocation: VenueHero_dealer_geolocation | null;
}

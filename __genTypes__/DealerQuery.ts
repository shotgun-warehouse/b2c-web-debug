/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DealerQuery
// ====================================================

export interface DealerQuery_dealer_geolocation_city {
  __typename: "City";
  name: string;
}

export interface DealerQuery_dealer_geolocation {
  __typename: "Geolocation";
  city: DealerQuery_dealer_geolocation_city | null;
}

export interface DealerQuery_dealer {
  __typename: "Dealer";
  id: string;
  name: string;
  description: string | null;
  logo: string | null;
  cover: string | null;
  website: string | null;
  facebookPage: string | null;
  geolocation: DealerQuery_dealer_geolocation | null;
}

export interface DealerQuery {
  /**
   * Get a dealer by ID.
   */
  dealer: DealerQuery_dealer;
}

export interface DealerQueryVariables {
  id: string;
}

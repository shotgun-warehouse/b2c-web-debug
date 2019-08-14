/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CitiesFilterInput, CitiesSortInput } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL query operation: CitiesDropdownQuery
// ====================================================

export interface CitiesDropdownQuery_cities {
  __typename: "City";
  id: string;
  name: string;
}

export interface CitiesDropdownQuery {
  cities: CitiesDropdownQuery_cities[];
}

export interface CitiesDropdownQueryVariables {
  filter?: CitiesFilterInput | null;
  sort?: CitiesSortInput | null;
}

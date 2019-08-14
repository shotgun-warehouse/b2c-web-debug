/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ECardBrand } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL query operation: CardsQuery
// ====================================================

export interface CardsQuery_cards {
  __typename: "Card";
  id: string;
  stripeId: string;
  brand: ECardBrand;
  lastDigits: number;
  expMonth: number;
  expYear: number;
}

export interface CardsQuery {
  /**
   * Retrieve the credit cards of the currently logged-in user.
   */
  cards: CardsQuery_cards[];
}

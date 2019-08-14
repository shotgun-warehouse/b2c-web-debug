/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ECardBrand } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL fragment: CreditCardCard_card
// ====================================================

export interface CreditCardCard_card {
  __typename: "Card";
  id: string;
  stripeId: string;
  brand: ECardBrand;
  lastDigits: number;
  expMonth: number;
  expYear: number;
}

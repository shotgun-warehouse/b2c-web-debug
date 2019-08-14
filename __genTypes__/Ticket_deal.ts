/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ticket_deal
// ====================================================

export interface Ticket_deal_subCategory {
  __typename: "SubCategory";
  id: string;
  title: string;
  rank: number | null;
}

export interface Ticket_deal {
  __typename: "Deal";
  id: string;
  title: string;
  description: string | null;
  maxQuantity: number;
  isSoldOut: boolean;
  price: number;
  typo: string | null;
  subCategory: Ticket_deal_subCategory | null;
}

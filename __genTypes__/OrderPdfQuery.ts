/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrderPdfQuery
// ====================================================

export interface OrderPdfQuery_order {
  __typename: "Order";
  id: string;
  pdf: string | null;
}

export interface OrderPdfQuery {
  /**
   * Get order by UUID.
   */
  order: OrderPdfQuery_order;
}

export interface OrderPdfQueryVariables {
  uuid: string;
}

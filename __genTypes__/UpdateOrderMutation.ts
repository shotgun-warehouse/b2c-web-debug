/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UpdateOrderInput } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL mutation operation: UpdateOrderMutation
// ====================================================

export interface UpdateOrderMutation_updateOrder_user {
  __typename: "User";
  id: string;
}

export interface UpdateOrderMutation_updateOrder {
  __typename: "Order";
  id: string;
  user: UpdateOrderMutation_updateOrder_user | null;
  email: string | null;
  phone: string | null;
}

export interface UpdateOrderMutation {
  updateOrder: UpdateOrderMutation_updateOrder;
}

export interface UpdateOrderMutationVariables {
  orderId: string;
  input?: UpdateOrderInput | null;
}

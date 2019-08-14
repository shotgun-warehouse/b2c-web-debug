/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ConfirmOrderInput, EPaymentIntentStatus } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL mutation operation: ConfirmOrderMutation
// ====================================================

export interface ConfirmOrderMutation_confirmOrder {
  __typename: "PaymentIntent";
  status: EPaymentIntentStatus;
  clientSecret: string | null;
}

export interface ConfirmOrderMutation {
  confirmOrder: ConfirmOrderMutation_confirmOrder;
}

export interface ConfirmOrderMutationVariables {
  input?: ConfirmOrderInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateOrderInput } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL mutation operation: CreateOrderMutation
// ====================================================

export interface CreateOrderMutation_createOrder_event {
  __typename: "Event";
  id: string;
  /**
   * Facebook Pixel ID set by the organizer
   */
  facebookPixelId: string | null;
  /**
   * Metadata - pixels or scripts - set by the organizer on the Shop page
   */
  shopMetadata: string | null;
  /**
   * Metadata - pixels or scripts - set by the organizer on the Shop confirmation page
   */
  confirmationMetadata: string | null;
  name: string;
  startTime: number;
  endTime: number;
  cover: string | null;
}

export interface CreateOrderMutation_createOrder_shotguns_deal {
  __typename: "Deal";
  id: string;
  /**
   * Price transfered to the organizer
   */
  merchantPrice: number;
}

export interface CreateOrderMutation_createOrder_shotguns {
  __typename: "Shotgun";
  id: string;
  deal: CreateOrderMutation_createOrder_shotguns_deal;
}

export interface CreateOrderMutation_createOrder_user {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  avatar: string | null;
  facebookId: string | null;
}

export interface CreateOrderMutation_createOrder {
  __typename: "Order";
  id: string;
  timeout: number;
  amount: number;
  uuid: string;
  email: string | null;
  phone: string | null;
  event: CreateOrderMutation_createOrder_event;
  shotguns: CreateOrderMutation_createOrder_shotguns[];
  user: CreateOrderMutation_createOrder_user | null;
}

export interface CreateOrderMutation {
  createOrder: CreateOrderMutation_createOrder;
}

export interface CreateOrderMutationVariables {
  input?: CreateOrderInput | null;
}

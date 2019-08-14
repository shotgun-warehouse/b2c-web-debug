/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Checkout_order
// ====================================================

export interface Checkout_order_event {
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

export interface Checkout_order_shotguns_deal {
  __typename: "Deal";
  id: string;
  /**
   * Price transfered to the organizer
   */
  merchantPrice: number;
}

export interface Checkout_order_shotguns {
  __typename: "Shotgun";
  id: string;
  deal: Checkout_order_shotguns_deal;
}

export interface Checkout_order_user {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  avatar: string | null;
  facebookId: string | null;
}

export interface Checkout_order {
  __typename: "Order";
  id: string;
  timeout: number;
  amount: number;
  uuid: string;
  email: string | null;
  phone: string | null;
  event: Checkout_order_event;
  shotguns: Checkout_order_shotguns[];
  user: Checkout_order_user | null;
}

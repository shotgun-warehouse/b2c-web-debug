/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { OrderFilterInput, Page } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL query operation: OrdersQuery
// ====================================================

export interface OrdersQuery_orders_event_location {
  __typename: "EventLocation";
  street: string | null;
}

export interface OrdersQuery_orders_event {
  __typename: "Event";
  id: string;
  name: string;
  startTime: number;
  endTime: number;
  cover: string | null;
  location: OrdersQuery_orders_event_location;
}

export interface OrdersQuery_orders_shotguns {
  __typename: "Shotgun";
  id: string;
}

export interface OrdersQuery_orders {
  __typename: "Order";
  id: string;
  uuid: string;
  event: OrdersQuery_orders_event;
  shotguns: OrdersQuery_orders_shotguns[];
}

export interface OrdersQuery {
  /**
   * Retrieve the orders of the currently logged-in user.
   */
  orders: OrdersQuery_orders[];
}

export interface OrdersQueryVariables {
  filter?: OrderFilterInput | null;
  page?: Page | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrderListItem_order
// ====================================================

export interface OrderListItem_order_event_location {
  __typename: "EventLocation";
  street: string | null;
}

export interface OrderListItem_order_event {
  __typename: "Event";
  id: string;
  name: string;
  startTime: number;
  endTime: number;
  cover: string | null;
  location: OrderListItem_order_event_location;
}

export interface OrderListItem_order_shotguns {
  __typename: "Shotgun";
  id: string;
}

export interface OrderListItem_order {
  __typename: "Order";
  id: string;
  uuid: string;
  event: OrderListItem_order_event;
  shotguns: OrderListItem_order_shotguns[];
}

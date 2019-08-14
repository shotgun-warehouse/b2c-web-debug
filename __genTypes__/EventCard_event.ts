/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EventCard_event
// ====================================================

export interface EventCard_event {
  __typename: "Event";
  id: string;
  name: string;
  cover: string | null;
  startTime: number;
  endTime: number;
  /**
   * The price of the cheapest ticket deal for this event. Null if event is sold-out
   */
  minTicketPrice: number | null;
}

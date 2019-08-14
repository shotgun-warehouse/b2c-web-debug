/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EventTracking_event
// ====================================================

export interface EventTracking_event {
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
}

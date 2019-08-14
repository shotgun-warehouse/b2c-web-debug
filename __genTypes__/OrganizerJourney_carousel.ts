/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrganizerJourney_carousel
// ====================================================

export interface OrganizerJourney_carousel_slides {
  __typename: "PartnersCarouselSlide";
  id: string;
  originalUrl: string;
  title: string | null;
  text: string | null;
}

export interface OrganizerJourney_carousel {
  __typename: "PartnersCarousel";
  id: string;
  heading: string | null;
  slides: OrganizerJourney_carousel_slides[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ECMSTheme } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL query operation: PartnersQuery
// ====================================================

export interface PartnersQuery_partners_hero {
  __typename: "PartnersHero";
  id: string;
  heading: string | null;
  text: string | null;
  image: string | null;
  primaryCTA: string | null;
  secondaryCTA: string | null;
}

export interface PartnersQuery_partners_references_references {
  __typename: "PartnersReference";
  image: string | null;
}

export interface PartnersQuery_partners_references {
  __typename: "PartnersReferences";
  id: string;
  references: PartnersQuery_partners_references_references[] | null;
}

export interface PartnersQuery_partners_valuePropositions_paragraphs {
  __typename: "PartnersValuePropositionParagraph";
  title: string | null;
  text: string | null;
}

export interface PartnersQuery_partners_valuePropositions {
  __typename: "PartnersValueProposition";
  id: string;
  theme: ECMSTheme | null;
  heading: string | null;
  image: string | null;
  paragraphs: PartnersQuery_partners_valuePropositions_paragraphs[] | null;
}

export interface PartnersQuery_partners_carousel_slides {
  __typename: "PartnersCarouselSlide";
  id: string;
  originalUrl: string;
  title: string | null;
  text: string | null;
}

export interface PartnersQuery_partners_carousel {
  __typename: "PartnersCarousel";
  id: string;
  heading: string | null;
  slides: PartnersQuery_partners_carousel_slides[] | null;
}

export interface PartnersQuery_partners_valuesGrid_items {
  __typename: "PartnersValuesGridItem";
  id: string;
  image: string;
  title: string | null;
  text: string | null;
}

export interface PartnersQuery_partners_valuesGrid {
  __typename: "PartnersValuesGrid";
  id: string;
  heading: string | null;
  items: PartnersQuery_partners_valuesGrid_items[] | null;
}

export interface PartnersQuery_partners_pricing_plans {
  __typename: "PartnersPricingPlan";
  id: string;
  price: string | null;
  priceConditions: string | null;
  featuresTitle: string | null;
  features: string[];
}

export interface PartnersQuery_partners_pricing_addons {
  __typename: "PartnersPricingAddon";
  id: string;
  title: string | null;
  text: string | null;
  image: string | null;
}

export interface PartnersQuery_partners_pricing {
  __typename: "PartnersPricing";
  id: string;
  heading: string | null;
  plans: PartnersQuery_partners_pricing_plans[];
  addons: PartnersQuery_partners_pricing_addons[];
}

export interface PartnersQuery_partners {
  __typename: "Partners";
  id: string;
  hero: PartnersQuery_partners_hero | null;
  references: PartnersQuery_partners_references | null;
  valuePropositions: PartnersQuery_partners_valuePropositions[] | null;
  carousel: PartnersQuery_partners_carousel | null;
  valuesGrid: PartnersQuery_partners_valuesGrid | null;
  pricing: PartnersQuery_partners_pricing | null;
}

export interface PartnersQuery {
  /**
   * Shotgun website partners CMS
   */
  partners: PartnersQuery_partners;
}

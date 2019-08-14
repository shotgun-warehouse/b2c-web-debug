/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Pricing_pricing
// ====================================================

export interface Pricing_pricing_plans {
  __typename: "PartnersPricingPlan";
  id: string;
  price: string | null;
  priceConditions: string | null;
  featuresTitle: string | null;
  features: string[];
}

export interface Pricing_pricing_addons {
  __typename: "PartnersPricingAddon";
  id: string;
  title: string | null;
  text: string | null;
  image: string | null;
}

export interface Pricing_pricing {
  __typename: "PartnersPricing";
  id: string;
  heading: string | null;
  plans: Pricing_pricing_plans[];
  addons: Pricing_pricing_addons[];
}

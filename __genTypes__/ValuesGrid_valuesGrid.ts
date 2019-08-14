/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ValuesGrid_valuesGrid
// ====================================================

export interface ValuesGrid_valuesGrid_items {
  __typename: "PartnersValuesGridItem";
  id: string;
  image: string;
  title: string | null;
  text: string | null;
}

export interface ValuesGrid_valuesGrid {
  __typename: "PartnersValuesGrid";
  id: string;
  heading: string | null;
  items: ValuesGrid_valuesGrid_items[] | null;
}

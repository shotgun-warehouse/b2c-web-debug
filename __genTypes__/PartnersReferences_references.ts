/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PartnersReferences_references
// ====================================================

export interface PartnersReferences_references_references {
  __typename: "PartnersReference";
  image: string | null;
}

export interface PartnersReferences_references {
  __typename: "PartnersReferences";
  id: string;
  references: PartnersReferences_references_references[] | null;
}

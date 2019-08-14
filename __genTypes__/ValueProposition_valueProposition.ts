/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ECMSTheme } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL fragment: ValueProposition_valueProposition
// ====================================================

export interface ValueProposition_valueProposition_paragraphs {
  __typename: "PartnersValuePropositionParagraph";
  title: string | null;
  text: string | null;
}

export interface ValueProposition_valueProposition {
  __typename: "PartnersValueProposition";
  id: string;
  theme: ECMSTheme | null;
  heading: string | null;
  image: string | null;
  paragraphs: ValueProposition_valueProposition_paragraphs[] | null;
}

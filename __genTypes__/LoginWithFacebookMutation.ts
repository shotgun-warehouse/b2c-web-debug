/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginWithFacebookMutation
// ====================================================

export interface LoginWithFacebookMutation_loginWithFacebook {
  __typename: "User";
  id: string;
  jwt: string | null;
  smoochJwt: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  isNew: boolean | null;
}

export interface LoginWithFacebookMutation {
  loginWithFacebook: LoginWithFacebookMutation_loginWithFacebook;
}

export interface LoginWithFacebookMutationVariables {
  facebookAccessToken: string;
}

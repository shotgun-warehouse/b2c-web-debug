/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignupMutation
// ====================================================

export interface SignupMutation_signup {
  __typename: "User";
  id: string;
  jwt: string | null;
  smoochJwt: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  isNew: boolean | null;
}

export interface SignupMutation {
  signup: SignupMutation_signup;
}

export interface SignupMutationVariables {
  email: string;
  password: string;
  firstName: string;
  lastName?: string | null;
  gender?: string | null;
}

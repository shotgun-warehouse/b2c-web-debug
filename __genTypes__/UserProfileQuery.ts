/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserProfileQuery
// ====================================================

export interface UserProfileQuery_user {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  avatar: string | null;
  facebookId: string | null;
}

export interface UserProfileQuery {
  /**
   * Retrieve user info of the currently logged-in user.
   */
  user: UserProfileQuery_user;
}

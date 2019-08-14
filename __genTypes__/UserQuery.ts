/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserQuery
// ====================================================

export interface UserQuery_user {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
}

export interface UserQuery {
  /**
   * Retrieve user info of the currently logged-in user.
   */
  user: UserQuery_user;
}

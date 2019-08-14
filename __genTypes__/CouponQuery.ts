/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ECouponType } from "./../AppApolloGlobalTypes";

// ====================================================
// GraphQL query operation: CouponQuery
// ====================================================

export interface CouponQuery_coupon {
  __typename: "Coupon";
  id: string;
  affectedDeals: string[] | null;
  limit: number;
  discountValue: number;
  type: ECouponType | null;
}

export interface CouponQuery {
  coupon: CouponQuery_coupon;
}

export interface CouponQueryVariables {
  code: string;
  dealIds: string[];
}

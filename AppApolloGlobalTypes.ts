/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Enum of the different CMS theme.
 */
export enum ECMSTheme {
  dark = "dark",
  light = "light",
}

export enum ECardBrand {
  AmericanExpress = "AmericanExpress",
  Club = "Club",
  Diners = "Diners",
  Discover = "Discover",
  JCB = "JCB",
  MasterCard = "MasterCard",
  Unknown = "Unknown",
  Visa = "Visa",
}

export enum ECitiesSortCriterion {
  DISTANCE = "DISTANCE",
}

export enum ECitySelector {
  CURRENT_USER_CITY = "CURRENT_USER_CITY",
}

export enum ECouponType {
  global = "global",
  unit = "unit",
}

/**
 * Enum of the different currencies available on the shotgun platform
 */
export enum ECurrency {
  EUR = "EUR",
}

export enum EEventSortCriterion {
  END_TIME = "END_TIME",
  RECOMMENDER = "RECOMMENDER",
  START_TIME = "START_TIME",
  TRENDING = "TRENDING",
}

/**
 * Enum of the different payment intent status.
 */
export enum EPaymentIntentStatus {
  requiresAction = "requiresAction",
  succeeded = "succeeded",
}

export enum EPresetEventFilter {
  TOMORROW = "TOMORROW",
  TONIGHT = "TONIGHT",
  WEEKEND = "WEEKEND",
}

export enum ESortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * Enum of the different types event tags.
 */
export enum ETagTypo {
  music = "music",
  spot = "spot",
}

export interface CitiesFilterInput {
  hasLiveEvents?: boolean | null;
}

export interface CitiesSortInput {
  criterion: ECitiesSortCriterion;
  order: ESortOrder;
}

export interface CityInput {
  id?: string | null;
  selector?: ECitySelector | null;
}

export interface ConfirmOrderInput {
  orderId: string;
  paymentMethodId?: string | null;
  savePaymentMethod?: boolean | null;
}

export interface CreateDealerInput {
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  name?: string | null;
  facebookPage?: string | null;
  eventName?: string | null;
  eventFacebookPage?: string | null;
}

export interface CreateOrderInput {
  idempotentId: string;
  amount: number;
  shotgunRequests: ShotgunRequestInput[];
  couponId?: number | null;
  withPaymentIntent?: boolean | null;
  ip?: string | null;
}

export interface EventFilterInput {
  upcoming?: boolean | null;
  past?: boolean | null;
  currentUserWent?: boolean | null;
  preset?: EPresetEventFilter | null;
  tagIds?: string[] | null;
  isBookmarkedByUser?: boolean | null;
  dealerId?: string | null;
}

export interface EventSortInput {
  criterion: EEventSortCriterion;
  order: ESortOrder;
}

export interface OrderFilterInput {
  upcoming?: boolean | null;
  past?: boolean | null;
  captured?: boolean | null;
}

export interface Page {
  skip: number;
  take: number;
}

export interface ShotgunRequestInput {
  dealId: string;
  quantity: number;
}

export interface UpdateOrderInput {
  email?: string | null;
  phone?: string | null;
  amount?: number | null;
  couponId?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

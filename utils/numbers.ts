import { ECurrency } from 'AppApolloGlobalTypes';

export const formatPrice = (
  price: number,
  currency: ECurrency = ECurrency.EUR,
) => {
  return new Intl.NumberFormat('fr', {
    style: 'currency',
    currency: currency.toString(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const formatQuantity = (quantity: number) => {
  return new Intl.NumberFormat('fr', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(quantity);
};

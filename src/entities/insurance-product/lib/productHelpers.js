import { INSURANCE_CATEGORIES, PRODUCT_TARIFFS } from '../model/productModel';

export const getProductCategoryName = (categoryKey) => {
  return INSURANCE_CATEGORIES[categoryKey] || 'Неизвестная категория';
};

export const getTariffName = (tariffKey) => {
  return PRODUCT_TARIFFS[tariffKey] || 'Базовый';
};

export const calculateProductPrice = (basePrice, tariff = 'BASIC') => {
  const multipliers = {
    BASIC: 1,
    STANDARD: 1.5,
    PREMIUM: 2
  };
  return Math.floor(basePrice * (multipliers[tariff] || 1));
};
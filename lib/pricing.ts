export interface ServiceApartmentPricing {
  bedrooms: string;
  basePrice: number;
  laundry: number;
  gardenSmall: number;
  gardenLarge: number;
}

export const serviceApartmentPricing: ServiceApartmentPricing[] = [
  { bedrooms: "Studio/1BR", basePrice: 1200, laundry: 250, gardenSmall: 350, gardenLarge: 500 },
  { bedrooms: "2 Bedrooms", basePrice: 1500, laundry: 350, gardenSmall: 350, gardenLarge: 500 },
  { bedrooms: "3 Bedrooms", basePrice: 2000, laundry: 500, gardenSmall: 350, gardenLarge: 750 },
  { bedrooms: "4 Bedrooms", basePrice: 2500, laundry: 750, gardenSmall: 500, gardenLarge: 750 },
  { bedrooms: "5 Bedrooms", basePrice: 3000, laundry: 1000, gardenSmall: 500, gardenLarge: 1000 },
  { bedrooms: "6 Bedrooms", basePrice: 3500, laundry: 1250, gardenSmall: 500, gardenLarge: 1250 },
];

export interface PeriodicalPricing {
  bedrooms: string;
  pricePerVisit: number;
}

export const periodicalPricing: PeriodicalPricing[] = [
  { bedrooms: "Studio/1BR", pricePerVisit: 800 },
  { bedrooms: "2 Bedrooms", pricePerVisit: 1000 },
  { bedrooms: "3 Bedrooms", pricePerVisit: 1300 },
  { bedrooms: "4 Bedrooms", pricePerVisit: 1600 },
  { bedrooms: "5 Bedrooms", pricePerVisit: 1800 },
  { bedrooms: "6 Bedrooms", pricePerVisit: 2000 },
];

export const periodicalDiscounts = {
  visits4: 0.05,
  visits8: 0.10,
  visits12: 0.15,
  visits24: 0.20
};

export const deepCleaningPricing = {
  pricePerSqm: 35,
  minimum: 3000,
  kitchenAddonMin: 1500,
  kitchenAddonMax: 3000
};

export const moveInOutPricing = {
  normal: {
    pricePerSqm: 50,
    minimum: 5000
  },
  heavy: {
    pricePerSqm: 65,
    minimum: 6500
  }
};

export const upholsteryPricing = {
  minimum: 1500,
  chairs: { min: 200, max: 250 },
  sofas: { min: 400, max: 1500 },
  mattresses: { min: 400, max: 600 }
};

export const calculatePrice = (
  serviceType: string,
  size: number,
  addOns: {
    laundry?: boolean;
    gardenSmall?: boolean;
    gardenLarge?: boolean;
    kitchenDeep?: boolean;
  }
): number => {
  let price = 0;
  
  switch (serviceType) {
    case 'serviceApartments':
      const apartment = serviceApartmentPricing[size] || serviceApartmentPricing[0];
      price = apartment.basePrice;
      if (addOns.laundry) price += apartment.laundry;
      if (addOns.gardenSmall) price += apartment.gardenSmall;
      if (addOns.gardenLarge) price += apartment.gardenLarge;
      break;
      
    case 'deepCleaning':
      price = Math.max(size * deepCleaningPricing.pricePerSqm, deepCleaningPricing.minimum);
      if (addOns.kitchenDeep) price += deepCleaningPricing.kitchenAddonMin;
      break;
      
    case 'moveInOut':
      price = Math.max(size * moveInOutPricing.normal.pricePerSqm, moveInOutPricing.normal.minimum);
      break;
      
    case 'moveInOutHeavy':
      price = Math.max(size * moveInOutPricing.heavy.pricePerSqm, moveInOutPricing.heavy.minimum);
      break;
      
    case 'periodical':
      const periodical = periodicalPricing[size] || periodicalPricing[0];
      price = periodical.pricePerVisit;
      break;
      
    case 'upholstery':
      price = upholsteryPricing.minimum;
      break;
  }
  
  return price;
};

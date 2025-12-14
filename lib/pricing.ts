export interface ServiceApartmentPricing {
  bedrooms: string;
  basePrice: number;
  laundry: number;
}

export const serviceApartmentPricing: ServiceApartmentPricing[] = [
  { bedrooms: "Studio/1BR", basePrice: 1500, laundry: 400 },
  { bedrooms: "2 Bedrooms", basePrice: 2000, laundry: 600 },
  { bedrooms: "3 Bedrooms", basePrice: 2500, laundry: 800 },
  { bedrooms: "4 Bedrooms", basePrice: 3000, laundry: 1000 },
  { bedrooms: "5 Bedrooms", basePrice: 4000, laundry: 1200 },
  { bedrooms: "6 Bedrooms", basePrice: 5000, laundry: 1500 },
];

export interface PeriodicalPricing {
  bedrooms: string;
  pricePerVisit: number;
}

export const periodicalPricing: PeriodicalPricing[] = [
  { bedrooms: "Studio/1BR", pricePerVisit: 800 },
  { bedrooms: "2 Bedrooms", pricePerVisit: 1200 },
  { bedrooms: "3 Bedrooms", pricePerVisit: 1500 },
  { bedrooms: "4 Bedrooms", pricePerVisit: 2000 },
  { bedrooms: "5 Bedrooms", pricePerVisit: 2500 },
  { bedrooms: "6 Bedrooms", pricePerVisit: 3000 },
];

export const periodicalDiscounts = {
  visits4: 0.05,
  visits8: 0.10,
  visits12: 0.15,
  visits24: 0.20
};

export const deepCleaningPricing = {
  pricePerSqm: 30,
  minimum: 1500,
  minimumSqm: 50,
  kitchenDeepClean: 1000,
  gardenPerSqm: 8
};

export const moveInOutPricing = {
  normal: {
    pricePerSqm: 40,
    minimum: 2000,
    minimumSqm: 50
  },
  heavy: {
    pricePerSqm: 50,
    minimum: 2500,
    minimumSqm: 50
  }
};

export const upholsteryPricing = {
  minimum: 1500,
  items: {
    armchair: 250,
    singleSeat: 350,
    twoSeater: 400,
    threeSeater: 600,
    fourSeater: 800,
    lShape: 1000,
    sectional: 1200,
    smallMattress: 400,
    largeMattress: 600
  }
};

export const serviceApartmentAddons = {
  gardenPerSqm: 5,
  upholstery: upholsteryPricing.items
};

export const periodicalAddons = {
  kitchenDeepClean: 250,
  gardenPerSqm: 3,
  upholstery: upholsteryPricing.items
};

const calculateUpholsteryAddons = (upholsteryItems?: { [key: string]: number }): number => {
  let total = 0;
  if (upholsteryItems) {
    Object.entries(upholsteryItems).forEach(([item, count]) => {
      total += (upholsteryPricing.items[item as keyof typeof upholsteryPricing.items] || 0) * count;
    });
  }
  return total;
};

export const calculatePrice = (
  serviceType: string,
  size: number,
  addOns: {
    laundry?: boolean;
    gardenSize?: number;
    kitchenDeep?: boolean;
    upholsteryItems?: { [key: string]: number };
  }
): number => {
  let price = 0;
  
  switch (serviceType) {
    case 'serviceApartments':
      const apartment = serviceApartmentPricing[size] || serviceApartmentPricing[0];
      price = apartment.basePrice;
      if (addOns.laundry) price += apartment.laundry;
      if (addOns.gardenSize) price += addOns.gardenSize * serviceApartmentAddons.gardenPerSqm;
      price += calculateUpholsteryAddons(addOns.upholsteryItems);
      break;
      
    case 'deepCleaning':
      price = Math.max(size * deepCleaningPricing.pricePerSqm, deepCleaningPricing.minimum);
      if (addOns.kitchenDeep) price += deepCleaningPricing.kitchenDeepClean;
      if (addOns.gardenSize) price += addOns.gardenSize * deepCleaningPricing.gardenPerSqm;
      price += calculateUpholsteryAddons(addOns.upholsteryItems);
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
      if (addOns.kitchenDeep) price += periodicalAddons.kitchenDeepClean;
      if (addOns.gardenSize) price += addOns.gardenSize * periodicalAddons.gardenPerSqm;
      price += calculateUpholsteryAddons(addOns.upholsteryItems);
      break;
      
    case 'upholstery':
      price = calculateUpholsteryAddons(addOns.upholsteryItems);
      price = Math.max(price, upholsteryPricing.minimum);
      break;
  }
  
  return price;
};

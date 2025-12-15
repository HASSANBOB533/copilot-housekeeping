export interface BedroomOption {
  key: string;
  label: string;
  labelAr: string;
  bedroomCount: number;
}

export const bedroomOptions: BedroomOption[] = [
  { key: 'studio-1br', label: 'Studio/1BR', labelAr: 'استوديو/غرفة واحدة', bedroomCount: 1 },
  { key: '2br', label: '2 Bedrooms', labelAr: 'غرفتين', bedroomCount: 2 },
  { key: '3br', label: '3 Bedrooms', labelAr: '3 غرف', bedroomCount: 3 },
  { key: '4br', label: '4 Bedrooms', labelAr: '4 غرف', bedroomCount: 4 },
  { key: '5br', label: '5 Bedrooms', labelAr: '5 غرف', bedroomCount: 5 },
  { key: '6br', label: '6 Bedrooms', labelAr: '6 غرف', bedroomCount: 6 },
  { key: '7br', label: '7 Bedrooms', labelAr: '7 غرف', bedroomCount: 7 },
  { key: '8br', label: '8 Bedrooms', labelAr: '8 غرف', bedroomCount: 8 },
  { key: '9br', label: '9 Bedrooms', labelAr: '9 غرف', bedroomCount: 9 },
  { key: '10br', label: '10 Bedrooms', labelAr: '10 غرف', bedroomCount: 10 },
];

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

export const calculateBedroomPrice = (
  bedrooms: number,
  serviceType: 'serviceApartments' | 'periodical'
): number => {
  const basePrices = serviceType === 'serviceApartments' 
    ? { 1: 1500, 2: 2000, 3: 2500, 4: 3000, 5: 4000, 6: 5000 }
    : { 1: 800, 2: 1200, 3: 1500, 4: 2000, 5: 2500, 6: 3000 };
  
  if (bedrooms <= 6) {
    return basePrices[bedrooms as keyof typeof basePrices] || basePrices[1];
  }
  
  // For 7+ bedrooms: 6BR price + 25% per extra room
  const maxPrice = basePrices[6];
  const extraRooms = bedrooms - 6;
  const extraCharge = maxPrice * 0.25;
  
  return maxPrice + (extraRooms * extraCharge);
};

export const calculateLaundryPrice = (bedrooms: number): number => {
  const laundryPrices = { 1: 400, 2: 600, 3: 800, 4: 1000, 5: 1200, 6: 1500 };
  
  if (bedrooms <= 6) {
    return laundryPrices[bedrooms as keyof typeof laundryPrices] || laundryPrices[1];
  }
  
  // For 7+ bedrooms: 6BR laundry + 25% per extra room
  const maxPrice = laundryPrices[6];
  const extraRooms = bedrooms - 6;
  const extraCharge = maxPrice * 0.25;
  
  return maxPrice + (extraRooms * extraCharge);
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

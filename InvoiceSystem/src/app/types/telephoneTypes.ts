export type OffersType = {
  offerName: string;
  totalUnits: number;
  price: number;
};

export type ServiceCardType = {
  serviceName: string;
  serviceOffers: OffersType[];
};

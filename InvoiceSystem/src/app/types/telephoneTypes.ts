export type OffersType = {
  id: string;
  offerName: string;
  totalUnits: number;
  price: number;
};

export type ServiceCardType = {
  id: string;
  serviceName: string;
  serviceOffers: OffersType[];
};

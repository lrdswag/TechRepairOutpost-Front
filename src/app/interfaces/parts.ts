export interface Parts {
  id?: string;
  qtyOnHand?: number;
  parLevel?: number;
  partName?: string;
  partDescription?: string;
  imgUrl?: string;
  salePrice?: string;
  partsOrdered?: string;
  compatibleDevices?: {
    id: string;
    brand: string;
    model: string;
    series: string;
  };
}

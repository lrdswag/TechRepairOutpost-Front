export interface Suppliers {
  id?: string;
  name?: string;
  email?: string;
  contactNumber?: string;
  contactPerson?: string;
  partsOffered?: {
    id: string;
    partName: string;
  };
  readonly purchaseOrders?: {
    id: string;
  };
}

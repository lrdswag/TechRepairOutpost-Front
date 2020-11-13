export interface Orders {
  id?: string;
  readonly dateOfOrder?: Date;
  readonly isDelivered?: boolean;
  readonly supplier?: {
    id: string;
    name: string;
  };
  readonly purchaseOrderDetails?: string[];
}

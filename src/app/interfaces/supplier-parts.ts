export interface SupplierParts {
  id?: string;
  readonly supplier?: {
    id: string;
    name: string;
  };
  readonly parts?: {
    id: string;
    partName: string;
  };
}

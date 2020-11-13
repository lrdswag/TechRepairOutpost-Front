export interface User {
  id?: string;
  email?: string;
  roles?: any;
  password?: string;
  firstName?: string;
  lastName?: string;
  contactNumber?: string;
  readonly bookingsPlaced?: {
    id: string;
  };
  readonly customersRepairs?: {
    id: string;
  };
}

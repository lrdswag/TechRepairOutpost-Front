export interface Repairs {
  id?: string;
  dateReceived?: Date;
  repaired?: boolean;
  dateCompleted?: Date;
  repairNotes?: string;
  waitingForParts?: boolean;
  partsUsed?: {
    id: string;
  };
   customer?: {
    id: string;
    firstName: string;
    lastName: string;
  };
   relatedBooking?: {
    id: string;
  };
}

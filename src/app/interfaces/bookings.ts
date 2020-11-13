export interface Bookings {
  id?: string;
  dateBookingMade?: Date;
  customer?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  dateOfAppointment?: Date;
  bookingConfirmed?: boolean;
  device?: {
    id: string;
    brand: string;
    model: string;
  };
  relatedRepair?: {
        id: string;
      };
}

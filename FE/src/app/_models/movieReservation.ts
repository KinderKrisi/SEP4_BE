import { User } from './user';
import { ParkingPlace } from './parkingPlace';

export class MovieReservation {
    movieId: Number;
    seatId: Number;
    userId: Number;
    startDate: Number;
    endDate: Number;
    wantParking: Boolean;
    parkingPlaces? : ParkingPlace[]; 
}
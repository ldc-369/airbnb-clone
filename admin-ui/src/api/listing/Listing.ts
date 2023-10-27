import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  dataMap: JsonValue;
  description: string;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  photos: JsonValue;
  placeAmenities: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};

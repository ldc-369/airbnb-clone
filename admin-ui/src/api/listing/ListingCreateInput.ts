import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  dataMap: InputJsonValue;
  description: string;
  listingCreatedBy: UserWhereUniqueInput;
  locationData: InputJsonValue;
  locationType: string;
  photos: InputJsonValue;
  placeAmenities: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  price: number;
  title: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};

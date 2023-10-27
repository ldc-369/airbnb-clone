import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  dataMap?: InputJsonValue;
  description?: string;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: InputJsonValue;
  locationType?: string;
  photos?: InputJsonValue;
  placeAmenities?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number;
  title?: string;
  trips?: TripUpdateManyWithoutListingsInput;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};

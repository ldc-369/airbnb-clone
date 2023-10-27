import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  dataMap?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  listingCreatedById?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  photos?: SortOrder;
  placeAmenities?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

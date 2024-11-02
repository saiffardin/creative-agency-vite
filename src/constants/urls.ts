const BASE_URL = import.meta.env.VITE_BASE_URL;

export const URLS = {
  GET_ALL_SERVICES: BASE_URL + "/loadAll",
  GET_ALL_REVIEWS: BASE_URL + "/loadAllReviews",
  FIND_ADMIN: (email: string) => `${BASE_URL}/findAdmin/${email}`,
};

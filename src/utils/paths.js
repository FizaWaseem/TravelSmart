import { lazy } from "react";
const Home = lazy(() => import("../pages/Home/index"));
const Listing = lazy(() => import("../pages/Listing/index"));

export const paths = {
  home: "Home",
  listing: "Listing",
};
export const routes = {
  home: "/",
  listing: "/listing-pages",
};
export const publicRoutes = {
  [paths.home]: {
    name: "Home",
    path: routes.home,
    component: Home,
  },
  [paths.listing]: {
    name: "Listing",
    path: routes.listing,
    component: Listing,
  },
};

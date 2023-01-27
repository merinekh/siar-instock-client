export const AppRoute = {
  HOME: "/",
  WAREHOUSE: "/warehouse",
  INVENTORY: "/inventory",
  ADD_INVENTORY: "/inventory/addinventory",
  ADD_WAREHOUSE_FORM: "/warehouse/add",
  EDIT_WAREHOUSE_FORM: "/warehouse/edit",
  // WAREHOUSE_SHOW: "/warehouse/show/:id",
};





export const NavigationItems = [
  { url: AppRoute.WAREHOUSE, text: "Warehouses" },
  { url: AppRoute.INVENTORY, text: "Inventory" },
];

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ENDPOINT_WAREHOUSES = `${BASE_URL}/api/warehouses`;

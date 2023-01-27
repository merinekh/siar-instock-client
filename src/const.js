export const AppRoute = {
  HOME: "/",
  WAREHOUSE: "/warehouse",
  WAREHOUSE_INVENTORY: "/warehouse/:id",
  INVENTORY: "/inventory",
  ADD_INVENTORY: "/inventory/addinventory",
  ADD_WAREHOUSE_FORM: "/warehouse/add",
  EDIT_WAREHOUSE_FORM: "/warehouse/edit",
  // WAREHOUSE_SHOW: "/warehouse/show/:id",
  INVENTORY_ITEM: "/inventory/:id",
  EDIT_INVENTORY: "/inventory/editinventory/:id",
 
};




export const NavigationItems = [
  { url: AppRoute.WAREHOUSE, text: "Warehouses" },
  { url: AppRoute.INVENTORY, text: "Inventory" },
];

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ENDPOINT_WAREHOUSES = `${BASE_URL}/api/warehouses`;
console.log(BASE_URL);

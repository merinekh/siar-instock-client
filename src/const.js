const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ENDPOINT_WAREHOUSES = `${BASE_URL}/api/warehouses`;

export const AppRoute = {
  HOME: "/",
  WAREHOUSE: "/warehouse",
  WAREHOUSE_INVENTORY: "/warehouse/:id",
  INVENTORY: "/inventory",
  ADD_INVENTORY: "/inventory/addinventory",
  WAREHOUSE_ADD: "/warehouse/add",
  WAREHOUSE_EDIT: "/warehouse/edit/:id",
  INVENTORY_ITEM: "/inventory/:id",
  EDIT_INVENTORY: "/inventory/editinventory/:id",
  
};

export const NavigationItems = [
  { url: AppRoute.WAREHOUSE, text: "Warehouses" },
  { url: AppRoute.INVENTORY, text: "Inventory" },
];

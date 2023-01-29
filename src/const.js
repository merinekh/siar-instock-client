const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ENDPOINT_WAREHOUSES = `${BASE_URL}/api/warehouses`;
export const ENDPOINT_INVENTORY = `${BASE_URL}/api/inventories`;
export const AppRoute = {
  HOME: "/",
  WAREHOUSE: "/warehouse",
  INVENTORY: "/inventory",
  ADDINVENTORY: "/inventory/addinventory",
  ADDWAREHOUSEFORM: "/warehouse/add",
  EDIT_WAREHOUSEFORM: "/warehouse/edit",
  WAREHOUSEDETAILS: "warehouse/:id/warehouseDetails",
};

export const NavigationItems = [
  { url: AppRoute.WAREHOUSE, text: "Warehouses" },
  { url: AppRoute.INVENTORY, text: "Inventory" },
];

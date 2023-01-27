export const AppRoute = {
  HOME: "/",
  WAREHOUSE: "/warehouse",
  WAREHOUSEINVENTORY: "/warehouse/:id",
  INVENTORY: "/inventory",
  ADDINVENTORY: "/inventory/addinventory",
  ADDWAREHOUSEFORM: "/warehouse/add",
  EDIT_WAREHOUSEFORM: "/warehouse/edit",
};

export const NavigationItems = [
  { url: AppRoute.WAREHOUSE, text: "Warehouses" },
  { url: AppRoute.INVENTORY, text: "Inventory" },
];

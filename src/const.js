export const AppRoute = {
  HOME: "/",
  WAREHOUSE: "/warehouse",
  WAREHOUSEINVENTORY: "/warehouse/:id",
  INVENTORY: "/inventory",
  INVENTORYITEM: "/inventory/:id",
  ADDINVENTORY: "/inventory/addinventory",
  EDITINVENTORY: "/inventory/editinventory/:id",
  ADDWAREHOUSEFORM: "/warehouse/add",
  EDIT_WAREHOUSEFORM: "/warehouse/edit",
};

export const NavigationItems = [
  { url: AppRoute.WAREHOUSE, text: "Warehouses" },
  { url: AppRoute.INVENTORY, text: "Inventory" },
];

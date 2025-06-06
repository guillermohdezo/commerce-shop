import { db } from "@/db"
import { eq, sql } from "drizzle-orm"
import {
  brands,
  categories,
  items,
  units,
  suppliers,
  purchases,
  purchasePrices,
  sellingPrices,
  itemTypes,
  customerPurchases,
  payments,
} from "@/db/schema"

// CATEGORIES
export const psGetCategoryByName = db
  .select()
  .from(categories)
  .where(eq(categories.name, sql.placeholder("name")))
  .prepare("psGetCategoryNyName")

export const psGetCategoryById = db
  .select()
  .from(categories)
  .where(eq(categories.id, sql.placeholder("id")))
  .prepare("psGetCategoryById")

export const psGetAllCategories = db
  .select()
  .from(categories)
  .prepare("psGetAllCategories")

// BRANDS
export const psGetBrandByName = db
  .select()
  .from(brands)
  .where(eq(brands.name, sql.placeholder("name")))
  .prepare("psGetBrandByName")

export const psGetBrandById = db
  .select()
  .from(brands)
  .where(eq(brands.id, sql.placeholder("id")))
  .prepare("psGetBrandById")

export const psGetAllBrands = db.select().from(brands).prepare("psGetAllBrands")

// UNITS
export const psGetUnitByName = db
  .select()
  .from(units)
  .where(eq(units.name, sql.placeholder("name")))
  .prepare("psGetUnitByName")

export const psGetUnitById = db
  .select()
  .from(units)
  .where(eq(units.id, sql.placeholder("id")))
  .prepare("psGetUnitById")

export const psGetAllUnits = db.select().from(units).prepare("psGetAllUnits")

// ITEMS
export const psGetItemByName = db
  .select()
  .from(items)
  .where(eq(items.name, sql.placeholder("name")))
  .prepare("psGetItemByName")

export const psGetItemById = db
  .select()
  .from(items)
  .where(eq(items.id, sql.placeholder("id")))
  .prepare("psGetItemById")

export const psGetAllItems = db.select().from(items).prepare("psGetAllItems")

// SUPPLIERS
export const psGetSupplierByName = db
  .select()
  .from(suppliers)
  .where(eq(suppliers.name, sql.placeholder("name")))
  .prepare("psGetSupplierByName")

export const psGetSupplierById = db
  .select()
  .from(suppliers)
  .where(eq(suppliers.id, sql.placeholder("id")))
  .prepare("psGetSupplierById")

export const psGetAllSuppliers = db.select().from(suppliers).prepare("psGetAllSuppliers")

// PURCHASES
export const psGetPurchaseById = db
  .select()
  .from(purchases)
  .where(eq(purchases.id, sql.placeholder("id")))
  .prepare("psGetPurchaseById")

export const psGetAllPurchases = db.select().from(purchases).prepare("psGetAllPurchases")

// PURCHASE PRICES
export const psGetPurchasePriceById = db
  .select()
  .from(purchasePrices)
  .where(eq(purchasePrices.id, sql.placeholder("id")))
  .prepare("psGetPurchasePriceById")

export const psGetAllPurchasePrices = db.select().from(purchasePrices).prepare("psGetAllPurchasePrices")

// SELLING PRICES
export const psGetSellingPriceById = db
  .select()
  .from(sellingPrices)
  .where(eq(sellingPrices.id, sql.placeholder("id")))
  .prepare("psGetSellingPriceById")

export const psGetAllSellingPrices = db.select().from(sellingPrices).prepare("psGetAllSellingPrices")

// ITEM TYPES
export const psGetItemTypeById = db
  .select()
  .from(itemTypes)
  .where(eq(itemTypes.id, sql.placeholder("id")))
  .prepare("psGetItemTypeById")

export const psGetAllItemTypes = db.select().from(itemTypes).prepare("psGetAllItemTypes")

// CUSTOMER PURCHASES
export const psGetCustomerPurchaseById = db
  .select()
  .from(customerPurchases)
  .where(eq(customerPurchases.id, sql.placeholder("id")))
  .prepare("psGetCustomerPurchaseById")

export const psGetAllCustomerPurchases = db.select().from(customerPurchases).prepare("psGetAllCustomerPurchases")

// PAYMENTS
export const psGetPaymentById = db
  .select()
  .from(payments)
  .where(eq(payments.id, sql.placeholder("id")))
  .prepare("psGetPaymentById")

export const psGetAllPayments = db.select().from(payments).prepare("psGetAllPayments")


CREATE TABLE IF NOT EXISTS "customer_purchase" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text,
	"item_id" integer,
	"purchase_id" integer,
	"quantity" integer NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "item_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(32) NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payment" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_purchase_id" integer,
	"amount" numeric(10, 2) NOT NULL,
	"payment_date" timestamp NOT NULL,
	"payment_type" varchar(32)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "purchase_price" (
	"id" serial PRIMARY KEY NOT NULL,
	"item_id" integer,
	"purchase_id" integer,
	"discount" numeric(5, 2) DEFAULT '0' NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "purchase" (
	"id" serial PRIMARY KEY NOT NULL,
	"supplier_id" integer,
	"total" numeric(10, 2) NOT NULL,
	"sub_total" numeric(10, 2) NOT NULL,
	"purchase_date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "selling_price" (
	"id" serial PRIMARY KEY NOT NULL,
	"item_id" integer,
	"price" numeric(10, 2) NOT NULL,
	"discount" numeric(5, 2) DEFAULT '0' NOT NULL,
	"start_date" timestamp,
	"end_date" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "supplier" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(64) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "cellphone" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "reminder_type" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "reminder_day" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customer_purchase" ADD CONSTRAINT "customer_purchase_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customer_purchase" ADD CONSTRAINT "customer_purchase_item_id_item_id_fk" FOREIGN KEY ("item_id") REFERENCES "item"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customer_purchase" ADD CONSTRAINT "customer_purchase_purchase_id_purchase_id_fk" FOREIGN KEY ("purchase_id") REFERENCES "purchase"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payment" ADD CONSTRAINT "payment_customer_purchase_id_customer_purchase_id_fk" FOREIGN KEY ("customer_purchase_id") REFERENCES "customer_purchase"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "purchase_price" ADD CONSTRAINT "purchase_price_item_id_item_id_fk" FOREIGN KEY ("item_id") REFERENCES "item"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "purchase_price" ADD CONSTRAINT "purchase_price_purchase_id_purchase_id_fk" FOREIGN KEY ("purchase_id") REFERENCES "purchase"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "purchase" ADD CONSTRAINT "purchase_supplier_id_supplier_id_fk" FOREIGN KEY ("supplier_id") REFERENCES "supplier"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "selling_price" ADD CONSTRAINT "selling_price_item_id_item_id_fk" FOREIGN KEY ("item_id") REFERENCES "item"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

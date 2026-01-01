CREATE TABLE "categories" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar(150) NOT NULL,
	"slug" varchar(150) NOT NULL,
	"image" text,
	"parent_id" bigint,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "categories_slug_key" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"category_id" bigint NOT NULL,
	"name" varchar(200) NOT NULL,
	"slug" varchar(200) NOT NULL,
	"description" text,
	"selling_price" numeric(10, 2) NOT NULL,
	"image" text,
	"mrp_price" numeric(10, 2) NOT NULL,
	"stock" integer DEFAULT 0,
	"is_active" boolean DEFAULT true,
	"tag" varchar(200) NOT NULL,
	CONSTRAINT "products_slug_key" UNIQUE("slug"),
	CONSTRAINT "products_selling_price_check" CHECK (selling_price >= (0)::numeric),
	CONSTRAINT "products_mrp_price_check" CHECK (mrp_price >= (0)::numeric),
	CONSTRAINT "products_stock_check" CHECK (stock >= 0)
);
--> statement-breakpoint
CREATE TABLE "user_cart" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"product_id" bigint NOT NULL,
	"quantity" integer NOT NULL,
	"added_at" timestamp DEFAULT now(),
	CONSTRAINT "uq_user_cart" UNIQUE("user_id","product_id"),
	CONSTRAINT "user_cart_quantity_check" CHECK (quantity > 0)
);
--> statement-breakpoint
CREATE TABLE "user_wishlist" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"product_id" bigint NOT NULL,
	"added_at" timestamp DEFAULT now(),
	CONSTRAINT "uq_user_wishlist" UNIQUE("user_id","product_id")
);
--> statement-breakpoint
DROP INDEX "account_userId_idx";--> statement-breakpoint
DROP INDEX "session_userId_idx";--> statement-breakpoint
DROP INDEX "verification_identifier_idx";--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "fk_category_parent" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "fk_product_category" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_cart" ADD CONSTRAINT "fk_cart_user" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_cart" ADD CONSTRAINT "fk_cart_product" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_wishlist" ADD CONSTRAINT "fk_wishlist_user" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_wishlist" ADD CONSTRAINT "fk_wishlist_product" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "account_userId_idx" ON "account" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "session_userId_idx" ON "session" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "verification_identifier_idx" ON "verification" USING btree ("identifier" text_ops);
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"image" varchar(255),
	"slug" varchar(255) NOT NULL,
	"price" double precision NOT NULL
);

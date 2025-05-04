import { doublePrecision, integer, uuid, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
    id: uuid().defaultRandom().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    description: text(),
    image: varchar({ length: 255 }),
    slug: varchar({ length: 255 }).notNull(),
    price: doublePrecision().notNull(),
});

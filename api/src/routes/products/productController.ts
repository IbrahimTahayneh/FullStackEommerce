import { Request, Response } from 'express';
import { db } from '../../db';
import { productsTable, createProductSchema } from '../../db/productSchema';
import { eq } from 'drizzle-orm';
import _ from 'lodash';
import { object } from 'zod';

export async function getProducts(req: Request, res: Response) {
    try {
        const products = await db.select().from(productsTable);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }

}

export async function getProductById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const [products] = await db.select().from(productsTable).where(eq(productsTable.id, id));
        if (!products) {
            res.status(404).json({ error: 'Product not found' });
            return;
        } else {
            res.json(products);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
export async function createProduct(req: Request, res: Response) {
    try {
        const [product] = await db.insert(productsTable)
            .values(req.cleanBody)
            .returning();

        res.status(201).json(product);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export async function updateProduct(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const updateFields = req.cleanBody;
        const [updateItem] = await db.update(productsTable).set(updateFields).where(eq(productsTable.id, id)).returning();
        if (!updateItem) {
            res.status(404).send({ message: 'Product not found' });
            return;
        } else {
            res.json(updateItem)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

export async function deleteProduct(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const [deletedItem] = await db.delete(productsTable).where(eq(productsTable.id, id)).returning();

        if (!deletedItem) {
            res.status(404).send({ message: 'Product was not found' });
            return;
        } else {
            res.status(204).send();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
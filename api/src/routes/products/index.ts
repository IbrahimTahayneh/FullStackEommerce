import { Router } from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from './productController';
import { validateData } from '../../middlewares/validationMiddleware';
import { createProductSchema, updateProductSchema } from '../../db/productSchema';



const router = Router();




router.get('/', getProducts);
router.get('/:id', getProductById)
router.post('/', validateData(createProductSchema), createProduct);
router.put('/:id', validateData(updateProductSchema), updateProduct);
router.delete('/:id', deleteProduct);


export default router;
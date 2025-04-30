import express from 'express';
import productRoutes from './routes/products/index';
const port = 3000;
const app = express();

app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

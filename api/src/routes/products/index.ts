import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
    res.send('List of Products from or api');
})
router.get('/:id', (req, res) => {
    res.send('Product with id ' + req.params.id);
})
router.post('/', (req, res) => {
    res.send('Product created');
})

export default router;
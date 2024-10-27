import { Router } from 'express';
import { getAllBooks, addBook } from '../controllers/bookController';

const router = Router();

router.get('/', getAllBooks);
router.post('/', addBook);

export default router;

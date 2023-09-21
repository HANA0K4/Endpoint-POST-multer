import { Router } from 'express';
import multer from 'multer';
import applyFiltersHandler from './applyFiltersHandler.mjs';

const storage = multer.memoryStorage();
const upload = multer({ storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'filters', maxCount: 3 }, // Asumiendo un máximo de 3 filtros,
]);

const router = Router();

router.get('/', (req, res) => {
  res.send('images Get');
});

router.post('/', upload, applyFiltersHandler);

export default router;

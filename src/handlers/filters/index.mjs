import { Router } from "express";
import applyFiltersHandler from "./applyFiltersHandler.mjs";
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).fields([
    { name: 'image', maxCount: 1 },
    { name: 'filters', maxCount: 3 } // Asumiendo un máximo de 3 filtros,
]);

const router = Router();

router.get("/", (req, res) => {
    res.send("images Get");
});

router.post("/", upload, applyFiltersHandler);

export default router;
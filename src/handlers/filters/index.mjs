import {Router} from "express";
import applyFiltersHandler from "./applyFiltersHandler.mjs";
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.get("/", (req, res) => {
    res.send("images Get");
});

router.post("/", upload.single('image'), applyFiltersHandler);

export const test = ()=>{}

export default router;
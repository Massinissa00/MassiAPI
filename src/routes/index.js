import { Router } from "express";

import authRouter from "./auth.js";
import carsRouter from "./cars.js";
import fileRouter from "./file.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/cars", carsRouter);

router.use("/uploads", fileRouter);

export default router;

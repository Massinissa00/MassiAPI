import { Router } from "express";

import authRouter from "./auth.js";
import carsRouter from "./cars.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/cars", carsRouter);

export default router;

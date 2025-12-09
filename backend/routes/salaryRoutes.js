
import express from 'express';
import { createSalaryRecord, getAllSalaries,deleteSalary  } from "../controllers/salaryController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();
//create salary record (only admin)
router.post('/',authMiddleware,adminMiddleware,createSalaryRecord);
//get all salary records (only admin)
router.get('/',authMiddleware,adminMiddleware,getAllSalaries);
router.delete("/:id", authMiddleware, adminMiddleware, deleteSalary);

export default router;
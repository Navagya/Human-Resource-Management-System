import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';
import {createDepartment,getAllDepartments,deleteDepartment} from "../controllers/departmentController.js";

const router = express.Router();

//create a new department
router.post('/',authMiddleware,adminMiddleware,createDepartment);

//get all departments
router.get('/',getAllDepartments);

//delete department (only admin)
router.delete("/:id",authMiddleware,adminMiddleware,deleteDepartment);

export default router;
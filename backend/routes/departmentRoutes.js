import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';
import {createDepartment,getAllDepartments,deleteDepartment} from "../controllers/departmentController.js";

const router = express.Router();

//create a new department
router.post('/',createDepartment);

//get all departments
router.get('/',getAllDepartments);

//delete department (only admin)
router.delete("/:id",deleteDepartment);

export default router;
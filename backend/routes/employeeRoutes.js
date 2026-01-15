import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';
import {createEmployee,getAllEmployees,updateEmployee,deleteEmployee} from '../controllers/employeeController.js';


const router =express.Router();

//create employee (only admin)
// router.post('/',authMiddleware,adminMiddleware,createEmployee);
router.post('/', authMiddleware,adminMiddleware,createEmployee);  


//get all employees (only admin)
router.get('/',authMiddleware,adminMiddleware,getAllEmployees);
//update employee (only admin)
router.put('/:id',authMiddleware,adminMiddleware,updateEmployee);

//delete employee (only admin)
router.delete('/:id',authMiddleware,adminMiddleware,deleteEmployee);

export default router;
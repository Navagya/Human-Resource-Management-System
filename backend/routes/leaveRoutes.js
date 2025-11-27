import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';
import {applyLeave,viewAllLeaves,updateLeaveStatus, getMyLeaves} from '../controllers/leaveController.js';

const router = express.Router();

//Employee applies for leave
router.post('/apply', authMiddleware, applyLeave);

//Employee views own leave
router.get('/me', authMiddleware, getMyLeaves);

//admin can view all leaves
router.get('/view',authMiddleware,adminMiddleware,viewAllLeaves);

//admin can approve or reject leave (update leave status)
router.put('/update/:id',authMiddleware,adminMiddleware,updateLeaveStatus);

export default router;
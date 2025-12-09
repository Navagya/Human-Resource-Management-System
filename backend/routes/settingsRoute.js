import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

import {
    getSettings,
    saveSettings
} from "../controllers/settingsController.js";

const router = express.Router();

//Get settings accessible by admin only

router.get('/',authMiddleware,adminMiddleware,getSettings);

//save or update settings only by admins
router.post('/',authMiddleware,adminMiddleware,saveSettings);

export default router;
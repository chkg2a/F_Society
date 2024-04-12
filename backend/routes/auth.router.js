import express from 'express'
const router=express.Router();
import { signup,signin,google,signout } from '../controllers/auth.controller.js';

router.post('/sign-up',signup);
router.post('/sign-in',signin);
router.post('/google',google);
router.post('/sign-out',signout)
router.post('/report',report)



export default router
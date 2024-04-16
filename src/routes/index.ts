/**
 * Express router for handling routes.
 */
import express from 'express';
import UserRoutes from '../modules/user/user.route';

const router = express();

router.use('/user', UserRoutes);

export default router;

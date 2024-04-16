import express from 'express';
import UserController from './user.controller';
import ValidateRequest from '../../middleware/validateRequest';
import {
    createUserDto,
    deleteUserDto,
    getUserDto,
    updateUserDto,
} from './user.dto';

/**
 * Express router for handling user-related routes.
 */
const router = express.Router();

/**
 * Route for creating a new user.
 * @route POST /
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
router.post('/', ValidateRequest(createUserDto), UserController.createUser);

/**
 * Route for retrieving all users.
 * @route GET /all
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
router.get('/all', UserController.findUsers);

/**
 * Route for retrieving a user by ID.
 * @route GET /:userId
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
router.get(
    '/:userId',
    ValidateRequest(getUserDto),
    UserController.findUserById,
);

/**
 * Route for updating a user by ID.
 * @route PATCH /:userId
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
router.patch(
    '/:userId',
    ValidateRequest(updateUserDto),
    UserController.updateUserById,
);

/**
 * Route for deleting a user by ID.
 * @route DELETE /:userId
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
router.delete(
    '/:userId',
    ValidateRequest(deleteUserDto),
    UserController.deleteUserById,
);

export default router;

import { Request, Response } from 'express';
import userService from './user.service';
import { generalResponse } from '../../utils/generalResponse';
import HttpStatus from 'http-status';
import { InternalServerErrorException } from '../../errors/InternalServerErrorException';

/**
 * Creates a new user.
 * @param {Request} req - The request object.
 * @param {Response} response - The response object.
 * @returns {Promise<void>}
 * @throws {InternalServerErrorException} If an internal server error occurs.
 */
const createUser = async (req: Request, response: Response): Promise<void> => {
    try {
        const payload = req.body;
        const data = await userService.createUser(payload);

        generalResponse({
            response,
            message: 'User created successfully',
            status: HttpStatus.CREATED,
            data,
        });
    } catch (error: any) {
        throw new InternalServerErrorException((error as Error).message);
    }
};

/**
 * Finds all users.
 * @param {Request} req - The request object.
 * @param {Response} response - The response object.
 * @returns {Promise<void>}
 * @throws {InternalServerErrorException} If an internal server error occurs.
 */
const findUsers = async (req: Request, response: Response): Promise<void> => {
    try {
        const data = await userService.findUsers();

        generalResponse({
            response,
            message: 'Users found successfully',
            status: HttpStatus.OK,
            data,
        });
    } catch (error: any) {
        throw new InternalServerErrorException((error as Error).message);
    }
};

/**
 * Finds a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} response - The response object.
 * @returns {Promise<void>}
 * @throws {InternalServerErrorException} If an internal server error occurs.
 */
const findUserById = async (req: Request, response: Response): Promise<void> => {
    try {
        const userId = req.params.userId;
        const data = await userService.findUserById(userId);

        generalResponse({
            response,
            message: 'User found successfully',
            status: HttpStatus.OK,
            data,
        });
    } catch (error: any) {
        throw new InternalServerErrorException((error as Error).message);
    }
};

/**
 * Updates a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} response - The response object.
 * @returns {Promise<void>}
 * @throws {InternalServerErrorException} If an internal server error occurs.
 */
const updateUserById = async (req: Request, response: Response): Promise<void> => {
    try {
        const userId = req.params.userId;
        const payload = req.body;
        const data = await userService.updateUserById(userId, payload);

        generalResponse({
            response,
            message: 'User updated successfully',
            status: HttpStatus.OK,
            data,
        });
    } catch (error: any) {
        throw new InternalServerErrorException((error as Error).message);
    }
};

/**
 * Deletes a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} response - The response object.
 * @returns {Promise<void>}
 * @throws {InternalServerErrorException} If an internal server error occurs.
 */
const deleteUserById = async (req: Request, response: Response): Promise<void> => {
    try {
        const userId = req.params.userId;
        const data = await userService.deleteUserById(userId);

        generalResponse({
            response,
            message: 'User deleted successfully',
            status: HttpStatus.OK,
            data,
        });
    } catch (error: any) {
        throw new InternalServerErrorException((error as Error).message);
    }
};

export default {
    createUser,
    findUsers,
    findUserById,
    updateUserById,
    deleteUserById,
};

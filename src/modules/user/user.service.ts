import { UpdateQuery } from 'mongoose';
import Users, { UserDocument } from './user.schema';
import { BadRequestException } from '../../errors/BadRequestException';
import { InternalServerErrorException } from '../../errors/InternalServerErrorException';

/**
 * Creates a new user.
 * @param userData - The user data.
 * @returns The created user.
 * @throws BadRequestException if there are errors while creating the user.
 * @throws InternalServerErrorException if there is an internal server error.
 */
const createUser = async (userData: Partial<UserDocument>) => {
    try {
        const data = await Users.create(userData);
        if (data) {
            return data;
        }
        throw new BadRequestException(
            'Sorry some errors occurred while creating user',
        );
    } catch (error) {
        throw new InternalServerErrorException((error as Error).message);
    }
};

/**
 * Finds all users.
 * @returns An array of user documents.
 * @throws BadRequestException if no users are found.
 * @throws InternalServerErrorException if there is an internal server error.
 */
const findUsers = async (): Promise<UserDocument[]> => {
    try {
        const data = await Users.find();
        if (data) {
            return data;
        }
        throw new BadRequestException('Sorry no users found');
    } catch (error) {
        throw new InternalServerErrorException((error as Error).message);
    }
};

/**
 * Finds a user by ID.
 * @param userId - The ID of the user to find.
 * @returns The user document if found, otherwise null.
 * @throws BadRequestException if no user is found.
 * @throws InternalServerErrorException if there is an internal server error.
 */
const findUserById = async (userId: string): Promise<UserDocument | null> => {
    try {
        const data = await Users.findById(userId);
        if (data) {
            return data;
        }
        throw new BadRequestException('Sorry no user found');
    } catch (error) {
        throw new InternalServerErrorException((error as Error).message);
    }
};

/**
 * Updates a user by ID.
 * @param userId - The ID of the user to update.
 * @param payload - The update payload.
 * @returns The updated user document if found, otherwise null.
 * @throws BadRequestException if there are errors while updating the user's data.
 * @throws InternalServerErrorException if there is an internal server error.
 */
const updateUserById = async (
    userId: string,
    payload: UpdateQuery<UserDocument>,
): Promise<UserDocument | null> => {
    try {
        const data = await Users.findByIdAndUpdate(userId, payload, {
            upsert: false,
            new: true,
        });
        if (data) {
            return data;
        }
        throw new BadRequestException(
            "Sorry some errors occurred while updating user's data",
        );
    } catch (error) {
        throw new InternalServerErrorException((error as Error).message);
    }
};

/**
 * Deletes a user by ID.
 * @param userId - The ID of the user to delete.
 * @returns A promise that resolves to the deletion result.
 * @throws BadRequestException if there are errors while deleting the user.
 * @throws InternalServerErrorException if there is an internal server error.
 */
const deleteUserById = async (userId: string): Promise<unknown | null> => {
    try {
        const data = await Users.deleteOne({
            _id: userId,
        });
        if (data) {
            return data;
        }
        throw new BadRequestException(
            'Sorry some errors occurred while deleting user',
        );
    } catch (error) {
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

import * as yup from 'yup';

/**
 * Represents the data transfer object for creating a user.
 */
export const createUserDto = yup.object({
    body: yup.object({
        /**
         * The username of the user.
         */
        username: yup
            .string()
            .required('Username is required')
            .min(3, 'Username must be at least 3 characters'),
        /**
         * The email of the user.
         */
        email: yup
            .string()
            .required('Email is required')
            .email('Email must be a valid email'),
        /**
         * The password of the user.
         */
        password: yup
            .string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters long'),
    }),
});

/**
 * Represents the data transfer object for getting a user.
 */
export const getUserDto = yup.object({
    params: yup.object({
        /**
         * The ID of the user.
         */
        userId: yup.string().required('User ID is required'),
    }),
});

/**
 * Represents the data transfer object for updating a user.
 */
export const updateUserDto = yup.object({
    params: yup.object({
        /**
         * The ID of the user.
         */
        userId: yup.string().required('User ID is required'),
    }),
    body: yup.object({
        /**
         * The updated username of the user.
         */
        username: yup.string().min(3, 'Username must be at least 3 characters'),
        /**
         * The updated email of the user.
         */
        email: yup.string().email('Email must be a valid email'),
        /**
         * The updated password of the user.
         */
        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters long'),
    }),
});

/**
 * Represents the data transfer object for deleting a user.
 */
export const deleteUserDto = yup.object({
    params: yup.object({
        /**
         * The ID of the user.
         */
        userId: yup.string().required('User ID is required'),
    }),
});

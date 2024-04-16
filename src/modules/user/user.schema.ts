import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * Represents a user document in the database.
 */
export interface UserDocument extends mongoose.Document {
    username: string;
    email: string;
    password: string;
}

/**
 * Defines the schema for the users collection in the database.
 */
const usersSchema = new mongoose.Schema<UserDocument>(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
        },
        password: {
            type: String,
            required: [true, 'Enter any password'],
        },
    },
    {
        timestamps: true,
        minimize: false,
    },
);

usersSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

usersSchema.path('password').set(function (value: string) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(value, salt);
    return hash;
});

/**
 * Represents the Users model in the database.
 */
const Users = mongoose.model<UserDocument>('User', usersSchema, 'users');

export default Users;

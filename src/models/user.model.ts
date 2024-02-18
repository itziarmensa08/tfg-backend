import {Schema, model} from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User> (
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user',
            required: true,
        },
        telephone: {
            type: Number,
        },
        dateBorn: {
            type: Date,
        },
        profileImage: {
            type: String,
        }, 
        language: {
            type: String,
            enum: ['ca', 'es', 'en_US'],
            default: 'es',
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model('users', UserSchema);

export default UserModel;
import * as mongoose from 'mongoose'
import { validateCPF } from '../common/validators'
import * as bcrypt from 'bcrypt'
import { environment } from '../common/environment'

export interface User extends mongoose.Document {
    name: string,
    email: string,
    password: string
}

export interface UserModel extends mongoose.Model<User> {
    findByEmail(email: String): Promise<User>
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 80,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    gender: {
        type: String,
        required: false,
        enum: ['Male', 'Female']
    },
    cpf: {
        type: String,
        required: false,
        validate: {
            validator: validateCPF,
            message: '{PATH}: Invalid CPF ({VALUE})'
        },
    },
})

userSchema.statics.findByEmail = function(email: string) {
    return this.findOne({email})
}

const hashPassword = function (obj: any, next: any) {
    bcrypt.hash(obj.password, environment.security.saltRounds)
        .then(hash => {
            obj.password = hash
            next()
        }).catch(next)
}

const saveMiddleware = function (next) {
    const user: any = this
    if (!user.isModified('password')) {
        next()
        return;
    }
    hashPassword(user, next)
}

const updateMiddlware = function (next) {
    if (!this.getUpdate().password) {
        next()
        return;
    }
    hashPassword(this.getUpdate(), next)
}

userSchema.pre('save', saveMiddleware)
userSchema.pre('findOneAndUpdate', updateMiddlware)
userSchema.pre('update', updateMiddlware)

export const User = mongoose.model<User, UserModel>('User', userSchema)
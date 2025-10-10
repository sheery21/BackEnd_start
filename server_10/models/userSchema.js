import mongoose, { Types } from "mongoose";

const schema = mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    age : {
        type : Number
    }
})

const UserModel = mongoose.model('user', schema)


export default UserModel;
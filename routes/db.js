import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema=new Schema({
    email: {type: String, unique: true},
    password: String, 
    firstName: String,
    Lastname: String
})

const adminSchema=new Schema({
    email: {type: String, unique: true},
    password: String, 
    firstName: String,
    Lastname: String
})


const courseSchema=new Schema({
    title: String,
    description: String,
    price: {
        type: Number,
        default: 0
    },
    imageURL: String,
    videoURL: String,
    pdfURL: String,
    creatorID: {
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
})


const purchaseSchema=new Schema({
    courseID: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

const courseViewSchema=new Schema({
    courseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    progress: {
        type: Number,
        default: 0
    }
})

const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("Admin", userSchema);
const courseModel = mongoose.model("Course", userSchema);
const purchaseModel = mongoose.model("Purchased", userSchema);
const viewAllCoursesModel = mongoose.model("ViewCourse", userSchema);

export {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
    viewAllCoursesModel,
};
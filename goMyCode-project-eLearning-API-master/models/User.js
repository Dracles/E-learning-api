const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: "first name is required",
  },
  lastName: {
    type: String,
    required: "last name is required",
  },
  email: {
    type: String,
    required: "Email is required",
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: "Email is required",
  },
  address: {
    type: String,
  },
  courses: [mongoose.Schema.Types.ObjectId],
  likedCourses: [mongoose.Schema.Types.ObjectId],
  favouriteCourses: [mongoose.Schema.Types.ObjectId],
});

const User = mongoose.model("user", UserSchema);
module.exports = User;

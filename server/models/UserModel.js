const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Please provied your fullname']
  },
  email: {
    type: String,
    required: [true, 'Please provied your email'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provied your password'],
    minength: [6, "Password must be at least 6 characters"],
  },
  image: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  likedMovies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie"
    },
  ],
}, {
  timestamps: true
})

export default mongoose.model("User", UserSchema)
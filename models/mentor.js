import mongoose from './connect.js'

 const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  students: {
    type: Array,
  },
})

const Mentor = mongoose.model('mentor', mentorSchema)

export default Mentor
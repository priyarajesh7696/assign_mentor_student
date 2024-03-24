import mongoose from './connect.js'
// import { mentorSchema } from './mentor.js'

 const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  mentor: {
    type: String,
    default: null,
   
  },
})

const Student = mongoose.model('Student', studentSchema)

export default Student
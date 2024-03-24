import Mentor from '../models/mentor.js'
import mongoose from '../models/connect.js'
import Student from '../models/student.js'

const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find()
    res.status(200).send(mentors)
  } catch (error) {
    res.status(404).send({ message: error.message })
  }
}
const createMentor = async (req, res) => {
  console.log(req.body)
  try {
  const mentor = req.body
  const newMentor = await Mentor.create(req.body)
  
    res.status(201).send(newMentor)
  } catch (error) {
    res.status(409).send({ message: error.message })
    console.log(error)
  }
}

const assignStudent = async (req, res) => {
    const { student_list, mentor_id } = req.body

    try {
      student_list.map(async(student_id) => {
      if (!mongoose.Types.ObjectId.isValid(student_id))
      return res.status(404).send('No student with that id')

    const student = await Student.findById(student_id)
    student.mentor = mentor_id

    await student.save()
  })
    if (!mongoose.Types.ObjectId.isValid(mentor_id))
      return res.status(404).send('No mentor with that id')

    const mentor = await Mentor.findById(mentor_id)
    mentor.students.push(student_list)
    await mentor.save()  
      res.send('Updated Successfully')
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  const MentorStudentList = async (req, res) => {
    const  {mentor_id}  = req.body
   
  
      const students = await Student.find({ mentor: mentor_id })
      res.send(students)
   
  }
  export default {
    getMentors,
createMentor,
  assignStudent,
  MentorStudentList
  }


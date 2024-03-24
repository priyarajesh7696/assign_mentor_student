import Mentor from '../models/mentor.js'
import Student from '../models/student.js'
import mongoose from '../models/connect.js'

const getStudent = async (req, res) => {
  try {
    const students = await Student.find()

    res.status(200).json(students)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
 const createStudent = async (req, res) => {
  try {
  const student = req.body
  const newStudent = await Student.create(student)

  
    res.status(200).send({message:"Student created successfully", newStudent })
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
const assignMentor = async (req, res) => {
    const { student_id, mentor_id } = req.body
  
    try {
      if (!mongoose.Types.ObjectId.isValid(student_id))
        return res.status(404).send('No student with that id')
  
      const student = await Student.findById(student_id)
      student.mentor = mentor_id
  
      await student.save()
  
      if (!mongoose.Types.ObjectId.isValid(mentor_id))
        return res.status(404).send('No mentor with that id')
  
      const mentor = await Mentor.findById(mentor_id)
      mentor.students.push(student_id)
      await mentor.save()
  
      res.send('Updated Successfully')
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  export default {
    getStudent,
    createStudent,
    assignMentor
  }


// const db_connection = require('../models/connect')

// module.exports.getStudent = async (req,res,next) => {
//     try{
//         var data = await (await db_connection()).collection("student").find().toArray()
//         res.send(data)
//     }catch(err){
//         console.log(err)
//         res.status(500).send(err)
//     }
// }

// module.exports.createStudent = async (req,res,next) => {
//     try{
//         var data =await (await db_connection()).collection("student").insertOne(req.body)
//         res.send(data)
//     }catch(err){
//         console.log(err)
//         res.status(500).send(err)
//     }
// }

// module.exports.assignMentor = async (req,res,next) => {
//     try{
//         // var list =  await (await db_connection()).collection("student").find().toArray()
//         // console.log(req.params.id)
//         // // console.log(list)
//         // for(var i=0;i<list.length;i++){
//         //     // console.log(req.params.id)
//         //     if(list[i].id===req.params.id){

//         //         console.log(req.params.id)

//         //         var mentor = list[i].mentor
//         //     }
//         // }
//         // var mmlist = []
//         // var mllist = []
//         // if(mentor){
//         //     var mentorList = await (await db_connection()).collection("mentor").find().toArray()
//         //     for(var i=0;i<mentorList.length;i++){
//         //         if(mentorList[i].id==mentor){
//         //             mmlist = mentorList[i].menteeList;
//         //         }
//         //         else if(mentorList[i].id==req.body.mentor){
//         //             mllist = mentorList[i].menteeList;
//         //         }
//         //     }
//         //     mmlist = mmlist.filter(item => item !== req.params.id)
//         //     mllist.push(req.params.id)
//         //     var x = await (await db_connection()).collection("mentor").updateOne({id:mentor},{$set:{menteeList:mmlist}})
//         //     var y = await (await db_connection()).collection("mentor").updateOne({id:req.body.mentor},{$set:{menteeList:mllist}})
//             var data = await (await db_connection()).collection("student").updateOne({"_id":(req.params.id)},{$set:{"mobile":(req.body.mobile)}})
//             console.log(req.body.mobile)
//             res.send(data)
//     //     }else{
//     //         res.send("Student not found")
//     //     }
//      }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// }
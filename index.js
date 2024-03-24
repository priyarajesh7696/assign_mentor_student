import express from 'express'
import mongoose from 'mongoose'
// import bodyParser from 'body-parser'
// import cors from 'cors'
import dotenv from 'dotenv'
import mentorRouter from "./routes/mentor.js"
import studentRouter from "./routes/student.js"
const app = express()
dotenv.config()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Welcome to student mentor API')
  })

app.use('/mentor',mentorRouter)
app.use('/student',studentRouter)
const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log(`Server is listening on Port:${PORT}`))
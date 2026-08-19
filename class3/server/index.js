const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const dbUrl = `mongodb+srv://<user_name>:<pws>@cluster0.9ljqiiq.mongodb.net/LMS?appName=Cluster0`

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

const courseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required: true
    },

    instructor: {
        type: String,
        required: true
    },

    ratings: {
        type: Number
    },

    isPublished: {
        type: Boolean,
        required: true
    }

})

const CourseModel = mongoose.model('course',courseSchema)

app.get('/', (req, res) => {
    res.send("Hello from server")
})

app.post('/api/courses', async(req, res)=>{
    let course = await CourseModel.create({
        course_name : req.body.course_name,
        instructor : req.body.instructor,
        isPublished :req.body.isPublished,
        ratings : req.body.ratings
  });
  res.send('Course Created' , course)
});
app.listen(8002, () => {
    console.log("Server Ready")
})

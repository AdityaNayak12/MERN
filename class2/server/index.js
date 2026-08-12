const express  = require('express')

const app = express()

app.use(express.json())

const courses = [
    {id:1, courseName:'Java', instructor: 'Savitri', rating: '4.6'},
    {id:2, courseName:'DBMS', instructor: 'Savitri Devi', rating: '4.4'},
    {id:3, courseName:'Python', instructor: 'Savitri Devi ki behan', rating: '4.8'},
    {id:4, courseName:'OS', instructor: 'Savitri ki behan ka beta', rating: '2.6'}
]

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/courses/:id', (req, res)=>{
    id = req.params.id
    let course = courses.find((course)=>course.id == parseInt(id))
    res.send(course)
})

app.post('/courses', (req, res)=>{
    courses.push(req.body)
    res.send("Course created")
})

app.put('/courses/:id', (req, res)=>{
    let id = req.params.id
    let course = courses.find((course)=>course.id == parseInt(id))
    course.courseName = "C++"
    res.send(course)
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) =>{
    res.send('About page')
})

app.listen(8002, () => {
  console.log('Server started')
})


import Express from "express"
import { Person } from "./person.js"

const app = Express()
const router = Express.Router()
const port = +process.env.PORT || 9000

app.use(
    Express.json(),
    router
)
router.get('^/$|/class', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: "you're HOME"
    })
})
router.get('/person1', (req, res)=>{
    let person1 = new Person()
    person1.firstName = 'Peter'
    person1.lastName = 'Parker'
    person1.age = 20
    person1.display()
    res.end('please check your terminal')
})
router.get('/person2', (req, res)=>{
    let person2 = new Person()
    person2.firstName = 'Bruce'
    person2.lastName = 'Wayne'
    person2.age = 35
    person2.display()
    res.end('Check terminal')
})
app.listen(port, ()=>{
    console.log(`Server is running at: http://localhost:${port}`);
})
import express from 'express';
import simpleGit from 'simple-git';
const { generate } = require('./idgeneration')
const app = express()
app.use(express.json())
app.use(cors())


app.post('/deploy', (req, res) => {
    const url = req.body.url


    res.json({
        message: "Hello From the Uplaod Server"
    })
})



app.listen(3000, () => {
    console.log("Upload service is running on port 3000")
})



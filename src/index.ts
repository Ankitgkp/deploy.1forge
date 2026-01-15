import express from 'express';
import simpleGit from 'simple-git';
const { generate } = require('./idgeneration')
const app = express()
app.use(express.json())


app.post('/deploy', (req, res) => {
    const Giturl = req.body.url
    const id = generate()
    simpleGit().clone(Giturl, `output/${id}`)

    res.json({
        id: id
    })
})



app.listen(3000, () => {
    console.log("Upload service is running on port 3000")
})



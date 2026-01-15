import express from 'express';
import simpleGit from 'simple-git';
import { getFiles } from './files';
import path from 'path'
const { generate } = require('./idgeneration')
import { uploadFiletoS3 } from './awsS3';
import 'dotenv/config'

const app = express()
app.use(express.json())

app.post('/deploy', async (req, res) => {
    const Giturl = req.body.url
    const id = generate()
    await simpleGit().clone(Giturl, path.join(__dirname, `output/${id}`))

    const files = getFiles(path.join(__dirname, `output/${id}`))

    files.forEach(async file => {
        await uploadFiletoS3(file.slice(__dirname.length + 1), file);
    })


    res.json({
        id: id
    })
})



app.listen(3000, () => {
    console.log("Upload service is running on port 3000")
})



const http = require('http')
const path = require('path')
const express = require('express')
const multer = require('multer')

const app = express()

const port = process.env.PORT || 8080



const upload = multer({
    dest: 'upload/',
    limits: {
        fileSize: 1024000
    }
})

app.post('/getfilesize', upload.single('file'), (request, response) => {
    
    response.set({ 'content-type': 'application/json; charset=utf-8' })
    response.json({
        size: request.file.size
    })
})


app.use(express.static(path.join(__dirname, 'public')))

http.createServer(app).listen(port, () => {
    console.log('http server started at port '+ port)
})
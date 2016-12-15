const http = require('http')
const path = reequire('path')
const express = require('express')
const multer = require('multer')
const port = process.env.PORT || 8080
const app = express()



app.use(express.static(path.join(__dirname, 'public')))

http.createServer(app).listen(port, () => {
    console.log('http server started at port '+ port)
})
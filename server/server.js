//importando modulos
const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const dotenv = require('dotenv')
dotenv.config()



app.use(cors())


const serveStatic = require('serve-static');
app.use(serveStatic('views/navbar-menu'));

const storage = multer.diskStorage({
    destination: __dirname + '/uploads',
    filename: function(req, file, cb){
        //cb("", "imagen.jpg")
        cb("", Date.now() + '-'+ file.originalname)
    }
})

const upload =multer({
    //dest: 'uploads/'
    storage: storage,
})
 app.get('/', (req, res) => {
     res.sendFile(__dirname +"/views/navbar-menu/index.html");
 });

app.use(express.static(path.join(__dirname, 'views')));
/*
app.get('/', (req, res) => {
    res.sendFile(__dirname +"/navbar-menu/index.html");
});
*/
app.post("/archivos", upload.single('clase'), (req, res) => {
    res.send("funcionó, el archivo fue subido")
})

app.get('/archivos', (req, res) => {
    fs.readdir(__dirname + '/uploads', (err, files) => {
        if (err) {
            res.status(500).send('Error al leer el directorio de subida');
        } else {
            res.send(files);
        }
    });
});




app.listen(8080, () => console.log('listening on port 8080'));



// const connectDB = require('./config/db');

// connectDB();

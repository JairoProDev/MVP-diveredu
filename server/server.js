const express = require('express');
const fs = require('fs'); // Módulo para leer archivos del sistema de archivos
const multer = require('multer'); // Módulo para gestionar la subida de archivos
const cors = require('cors'); // Módulo para habilitar CORS en Express
const path = require('path'); // Módulo para trabajar con rutas de archivos
const app = express(); //creando instancia de la aplicación express

//cargar la configuración de las variables de entorno
const dotenv = require('dotenv') // Módulo para cargar variables de entorno desde un archivo .env
dotenv.config()

// Habilitar CORS en la app de Express para permitir el acceso desde cualquier origen.
app.use(cors())

// Módulo para servir archivos estáticos desde el directorio 'views/navbar-menu'
const serveStatic = require('serve-static');
app.use(serveStatic('views/navbar-menu'));

// Configuración de multer para guardar los archivos subidos en el directorio 'uploads' y renombrarlos con el timestamp actual y el nombre original del archivo
const storage = multer.diskStorage({
    destination: __dirname + '/uploads',
    filename: function(req, file, cb){
        //cb("", "imagen.jpg")
        cb("", Date.now() + '-'+ file.originalname)
    }
})

// Configuración de multer para gestionar la subida de archivos
const upload =multer({
    //dest: 'uploads/'
    storage: storage,
})

app.set('view wngine', 'ejs');

// Ruta principal de la aplicación, sirve el archivo index.html desde el directorio 'views/navbar-menu'
app.get('/', (req, res) => {
    res.sendFile(__dirname +"/views/navbar-menu/index.html");
});

app.get("/login",(req,res)=>{
    //mostrar el formulario de login
    res.render("login")
})

app.post("/login", (req, res) => {
    //recibir credenciales e iniciar sesión

})

// Middleware para servir archivos estáticos desde el directorio 'views'
app.use(express.static(path.join(__dirname, 'views')));

// Ruta para gestionar la subida de archivos
app.post("/archivos", upload.single('clase'), (req, res) => {
    res.send("funcionó, el archivo fue subido")
})

// Ruta para obtener la lista de archivos subidos
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


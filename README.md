abrimos git bash
creamos una carpeta con mkdir llamada MVP-DIVEREDU
dentro creamos una subcarpeta llamda server

inicializamos npm para crear un package.json
instalamos express
instalamos mongoose

creamos una cuenta en mongodb atlas
creamos un cluster M0 gratuito en servidores compartidos
en mongodb conectamos nuestra dirección ip
damos a conectar nuestra aplicación y nos da un código para pegar en db.js

creamos una carpeta llamada dv.js dentro de server
le cambiamos la palabra password del código por nuestra contraseña de usuario en el cluster de mongo

creamos un archivo: server,js
traemos el módulo express
lo asignamos a una constante app
a través del método get denuestra constante creada(app) respondemos con un mensaje de bienbenida en la ruta root (/)

definimos en que puerto escuchará nuestra aplicación
mandamos un mensaje por consola para ver que funciona

creamos una carpeta (uploads) donde se van a guardar los archivos
otra carpeta views donde va estar el index.html

dentro del index.html creamos la estructura báasica
creamos un formulario cuya action dirigira a la ruta files con un método de post, para que los usuarios suban los archivos desde la web

en el server,js utilizamos nuestra constante app otra vez, pero ahora usando el método post para crear una nueva ruta ("/files")
y esto es lo que se guardará en la carpeta uploads

el formulario del index.html debe tener un atribuo llamado enctype el cual tiene tres valores: el por defecto, el para texto y el para multimedia que se llama: "multipart/form-data" 

dentro del formulario creamos dos inputs para cargar el archivo y para enviar el formulario
el que es para cargar el archivo es de tipo file y el input para enviar será de tipo submit y le ponemos es atributo value para decir que texto de mostrará en ese botón

creamos bien la respuesta que se mostrará en la ruta raiz:
utilizaremos la variable __dirname y en vez de enviar una simple respuesta, enviaremos el archivo con res.sendFile(__dirname + '/views/index.html'
la variable __dirname nos lleva a la ruta inicial de las carpetas y ya a partir de alí le indicamos por donde tiene que ir, en este caso queremos que muestre el html que está dentro de la carpeta views.

instalamos multer
requerimos el módulo
queremos que multer lea el archivo
convertimos en funión a la constante dinde estaba guardada el módulo multer
crmos la constante upload y le asignamos la anterior constante multer pero convirtiendola o usando su función para darle ciertas configuraciones 
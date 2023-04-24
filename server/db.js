const mongoose = require('mongoose');

// Se utiliza una constante para almacenar la cadena de conexión proporcionada por MongoDB Atlas
const URI = 'mongodb+srv://JairoProDev:FwPoo3fqgoiJBQ5P@cluster0.kbrhroi.mongodb.net/?retryWrites=true&w=majority';

// Se utiliza una función asíncrona para conectarse a la base de datos
const connectDB = async () => {
  // Se utiliza mongoose.connect para conectarse a la base de datos utilizando la cadena de conexión y las opciones necesarias
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
    useCreateIndex: true,
    useFindAndModify: false
  });
  console.log('DB Connected');
};


// manejador de eventos para detectar cuando se ha establecido la conexión exitosamente:
mongoose.connection.on('connected', () => {
    console.log('Mongoose connection established successfully.');
});


// manejador de eventos en caso de que ocurra un error en la conexión:
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});

usuario.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Usuario guardado en la base de datos");
    }
});




// Se exporta la función connectDB para poder utilizarla en otros archivos de su proyecto
module.exports = connectDB;









/*

const mongoose = require('mongoose');

const URI = 'mongodb+srv://JairoProDev:FwPoo3fqgoiJBQ5P@cluster0.kbrhroi.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('DB Connected');
};

module.exports = connectDB;

const mongoose = require('mongoose');
const uri = 'mongodb+srv://JairoProDev:FwPoo3fqgoiJBQ5P@cluster0.kbrhroi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established successfully.');
});

connection.on('error', (err) => {
    console.log('MongoDB connection error: ' + err);
    process.exit();
});


*/
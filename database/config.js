const mongoose = require('mongoose');

//retorna una promesa
const dbConnection = async() => {


    try {
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('BD online');

    } catch (error) {
        console.log(error);
        console.log('Error al iniciar la BD');
    }


}

module.exports = {
    dbConnection
}
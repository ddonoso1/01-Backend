const express = require('express');

//Usar variables de entorno o archivo .dev
require('dotenv').config();

//Configurar cors - para que se pueda acceder desde cualquier parte
const cors = require('cors')

const { dbConnection } = require('./database/config');

/*BD
daniel
YSGJWD1WGz51ketx */


//crear el servidor de express
const app = express();


app.use(cors());

//Base de datos
dbConnection();

//Rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'hola mundo'
    })

});


//abrir puerto
app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en puerto ' + process.env.PORT);

})
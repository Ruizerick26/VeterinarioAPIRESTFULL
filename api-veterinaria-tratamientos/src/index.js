
import app from './server.js'


// Importar la función connection()
import connection from './database.js';

// Haicneod uso de la función connection()
connection()


app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://172.31.115.155:${app.get('port')}`);
})


const express    = require('express');
const mysql2     = require('mysql2');
const bodyParser = require('body-parser');
 
const app  = express();
const PORT = 3000;
 
// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
 
// Conexion a MySQL (XAMPP)
const db = mysql2.createConnection({
  host:     'localhost',
  user:     'root',
  password: '',        // Contrasena de XAMPP (vacia por defecto)
  database: 'mi_base'  // Nombre de tu base de datos
});
 
db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL correctamente');
});
 
// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
 
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

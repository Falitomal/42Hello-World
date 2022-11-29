const express = require("express");
const app = express();
app.get('/', function (req, res) {
	res.send('Send saluditos, for request in next');
  });
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

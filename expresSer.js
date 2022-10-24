const express = require('express');
const { url } = require('inspector');
const path = require("path");//modulo path, se utiliza para concatenar la ruta raiz
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var array = [
    {
        "id": "1",
        "titulo": "Carne",
        "precio": "$53",
        "imagen":"https://www.pngmart.com/files/16/Loaf-Bread-PNG-Transparent-Image.png",
        "categoria": "Comida",
        "descripción":"Comestible"

    }
]

app.use(express.static(__dirname + '/public'))
app.get("/productos",(req,res,next)=>{
    console.log(req)
    console.log("<h1>hola mundo</h1>")
    res.json(array)
}) 

app.post("/productos",(req,res,next)=>{
  console.log(req.body);
     const productoNew = {
	id: req.body.id,
    titulo: req.body.titulo,
    precio: req.body.precio,
    categoria: req.body.categoria,
    imagen: req.body.imagen
}

app.delete("/productos",(req,res,next)=>{
    console.log(req.body)
    res.json(array)
    
})

    array.push(productoNew)
  res.json({menssager:"productoAgregadoCorrectamente", producto:productoNew});
})

app.get("/chau-mundo",(req,res,next)=>{ res.send("<h1>estamos en chau mundo</h1>")})

app.listen(3080, () =>{
    console.log("server running on port")
})
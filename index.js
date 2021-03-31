var express=require('express');
var app=express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes);
app.get('/productos',c_productos);

function c_inicio(req,res){
    res.send('<h1>Express Inicio</h1>')
}
function c_clientes(req,res){
    res.send('<h1>Clientes</h1><ul><li>Veronica Mendoza</li><li>Juanito Perez</li><li>Juan Jose</li></ul>')
}
function c_productos(req,res){
    res.send('<h1>Productos</h1><ul><li>Lays</li><li>Oreo</li><li>InKa Cola</li></ul>')
}
function c_server(req,res){
    console.log('9000');
}

var server=app.listen(9000,c_server);
const express= require('express')
const app = express()
const MercadopagoController = require('./controller')
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-4923400578677862-051000-4834316d31083a8fa569d490079cfb3a-470207459'
});

     

app.get('/',(req, res)=>{
    res.sendFile(__dirname+'/index.html')
});

app.post('/comprar',(req,res)=>{
    res.json('nigga')
})


app.post('/test',(req,res)=>{
  let preference = {
    items: [
      {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  }


  mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  res.json(response.body.id)
}).catch(function(error){
  console.log(error);
});


})



app.listen(3000,()=> console.log('server on'))
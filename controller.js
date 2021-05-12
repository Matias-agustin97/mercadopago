const mercadopago = require('mercadopago')

mercadopago.configure({
    access_token: 'TEST-4923400578677862-051000-4834316d31083a8fa569d490079cfb3a-470207459'
  });


  class MercadopagoController {
      async mercadopago({request}){
      
        let preference={
            items :[
                {
                title:'remera',
                unit_price: 129,
                quantity:20
            }
        ]
        }

        const res= await mercadopago.preferences(preference)
        return res
  }
}
console.log(MercadopagoController);
module.exports = MercadopagoController
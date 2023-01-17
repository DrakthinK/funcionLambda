// SDK de Mercado Pago
exports.handler= async (event)=>{
    const mercadopago = require ('mercadopago');
// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-5314717904546719-011011-e0088f1a2d2daf256406a43eefa92d4e-1044477840'
});
// Crea un objeto de preferencia
preference_api=JSON.parse(event.body)

respuestaPago= await mercadopago.preferences.create(preference_api)
const respuesta = {
    statusCode: 200,
    body: JSON.stringify(respuestaPago),
  };
  return respuesta;

}



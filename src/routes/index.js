const { Router } = require('express');
const router = Router();
const webpush = require("../js/webpush.js");

//const webpush = require("../js/webpush");

let pushSubscription;

// Suscribe al usuario para que reciba notificaciones.
router.post('/subscription', async(req, res) => {
   try {
      pushSubscription = req.body;
      // Notificacion a enviar
      const payload = JSON.stringify({
         title: 'Mi notificación',
         message: 'Hola este es mi noticación'
      });

      res.status(200).json();

     await webpush.sendNotification(pushSubscription, payload);
     

   } catch (error) {
      console.log(error);
   }

});
//
module.exports = router;
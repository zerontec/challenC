const {Router} = require ('express');
const router = Router();
const palindromeRoutes = require ('./echoTextRoutes');


// router.get('/', (req, res) => { 
//     res.status(200).send('Hello World!') });

  router.use('/iecho', palindromeRoutes );
  
  
module.exports = router;
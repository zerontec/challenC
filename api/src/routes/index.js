const {Router} = require ('express');
const router = Router();
const palindromeRoutes = require ('./echoTextRoutes');




  router.use('/iecho', palindromeRoutes );
  
  
module.exports = router;
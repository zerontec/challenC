const {Router}= require ('express');
const router = Router();
const { palindrome}= require('../controller/echoText.controller');




router.get('/', palindrome)



module.exports = router;
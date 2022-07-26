


async function palindrome(req,res, next){

try{

   let text = req.query.text;
   
   const lowerCase= text.toLowerCase();

   const reverseText = lowerCase.split('').reverse().join('');
   if(lowerCase === reverseText){

    res.status(200).send({message:`text: ${reverseText} es Palindrome`})

   }else{
    return res.status(400).send({message:`text: ${reverseText} no es Palindrome`})
   }

}catch(err){
  res.status(500).send({err})
}



}


module.exports ={

    palindrome

}


/**
 * It takes a string, converts it to lowercase, reverses it, and then compares it to the original
 * string. If they are the same, it returns a message saying it's a palindrome. If they are not the
 * same, it returns a message saying it's not a palindrome.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - A function that you call to pass control to the next middleware function.
 * @returns a promise.
 */



async function palindrome(req, res, next) {
  try {
    let text = req.query.text;



    const lowerCase = text.toLowerCase();

    const reverseText = lowerCase.split("").reverse().join("");
    if (lowerCase === reverseText) {
      res.status(200).send({ message: `text: ${reverseText}   es Palindrome` });
    } else {
      return res
        .status(200)
        .send({ message: `text: ${reverseText} no es Palindrome` });
    }
  } catch (err) {
    res.status(500).send({ err });
    console.log(err)
  }
}

module.exports = {
  palindrome,
};

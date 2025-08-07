

// 1. write a function named 'maketea' that takes one parameter, 'typeoftea', and return a string like "making green tea" when called with "green tea". store the result in a variable named 'teaorder.'

function maketea(typeoftea){
    return `making ${typeoftea}`;
}
let teaOrder = maketea("lemon tea");
console.log(teaOrder);




// 2. create a function named 'ordertea' that takes one parameter, 'teatype'. Inside the function , create another function named 'confirmorder' that returns a message like "order confirmed for chai". call 'confirmorder' from within 'ordertea' and return the XPathResult.
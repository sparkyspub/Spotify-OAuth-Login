



// function FirstFactorial(num) {
//     var factorial = 1;

//     for (var i = 1; i <= num; i++) {
//         factorial = factorial * i;
//         console.log(factorial);
//     }
// }

// FirstFactorial(5);

// function FirstFactorial(num) {
//     function factorial(n) {

//         console.log(n);
//         if (n === 0) { return 1;}

//         else {return factorial(n - 1) * n;}
//     }

//     return factorial(num);
// }

// FirstFactorial(5);


// const factorialize = number => {
//     let product = 1;
//     for (let i = 0; i <= number.length; i++) {
//         product *= 1; 
//     }
//     return product;
// };

// mocha.setup("bdd");
// const { assert } = chai;

// describe("Factorial", () => {
//     it("Should implement factorial", () => {
//         assert.equal(factorial(0), 1);
//         assert.equal(factorial(1), 1);
//         assert.equal(factorial(2), 2);
//         assert.equal(factorial(3), 6);
//         assert.equal(factorial(4), 24);
//         assert.equal(factorial(5),
//         factorialize(5));
//     });
// });

// mocha.run();

/**
* Generates a random string containing numbers and letters 
* http://usejsdoc.org/tags-param.html
* @param {number} length
* @return {string}
*/
const generateRandomString = function(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log(text);
    return text;
};

generateRandomString();
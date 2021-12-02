"use strict";


module.exports = function orderNumber() {

    let char = String.fromCharCode( Math.floor(Math.random() * 25) + 65);

    for (let i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 9) + 1;
        char += random;

    }

    return char;
}




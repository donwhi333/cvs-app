"use strict";

/*
Thanks, you would like an estimate for $photo_category photos with a $photo_finish finish with a size of $photo_size and you have $photo_number photos.
 */

const orderNumber = require("./generate-ordernumber.js");

const on = /^[1-9][0-9]?$|^100/



console.log(orderNumber())

function main(photo_size, photo_number, photo_category, photo_finish) {

    let finish_price = 0;
    let category_price = 0;
    let number_price = 0;
    let size_price = 0;

    switch (photo_finish.toLowerCase()){
        case "glossy":
            finish_price += 10;
            break
        case "matte":
            finish_price += 3;
            break
        case "luster":
            finish_price += 2
            break
        default:
            finish_price = 0
    }

    switch (photo_category.toLowerCase()) {
        case "christmas" || "thanksgiving" || "newyears":
            category_price = 3;
            break
        case "halloween" || "valentine":
            category_price = 2;
            break
        case "graducation" || "wedding" || "birthday":
            category_price = 10;
            break
        default:
            category_price = 0;

    }

    switch (photo_size.toLowerCase()) {
        case "medium":
            size_price = 5;
            break
        case "large":
            size_price = 10;
            break
        case "small":
            size_price = 3;
            break
        default:
            size_price = 0;

    }

    switch (photo_number) {

        case photo_number >= 1 && photo_number <= 10:
            number_price = 20;
            break
        case photo_number >= 11 && photo_number <= 20:
            number_price = 40;
            break
        case photo_number >= 21 && photo_number <= 40:
            number_price = 60;

    }

    const totoal = number_price + size_price + category_price + finish_price;

    return {

        finalPrice: totoal
    }
}



console.log(main("Small",3, "christmas", "glossy"))


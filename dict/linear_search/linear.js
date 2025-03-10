"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = linear_search;
function linear_search(arr, target) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
console.log(linear_search([1, 2, 3, 4, 5], 6));
console.log(linear_search([1, 2, 3, 4, 5], 5));

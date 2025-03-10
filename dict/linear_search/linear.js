"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = linear_search;
function linear_search(arr, target) {
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

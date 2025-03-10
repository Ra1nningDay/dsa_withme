"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = binary_serach;
function binary_serach(arr, needle) {
    let lo = 0;
    let hi = arr.length;
    let n = needle;
    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        let v = arr[m];
        if (v === n) {
            return true;
        } else if (v > n) {
            hi = m;
        } else if (v < n) {
            lo = m + 1;
        }
    } while (lo < hi);
    return false;
}

const number = [1, 2, 3, 4, 5];
console.log(binary_serach(number, 6));

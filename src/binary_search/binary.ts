export default function binary_serach(arr: number[], needle: number): boolean {
    let lo: number = 0;
    let hi: number = arr.length;
    let n: number = needle;

    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        let v = arr[m];

        if (v === n) {
            return true;
        } else if (v > n) {
            lo = m + 1;
        } else if (v < n) {
            hi = m;
        }
    } while (lo < hi);

    return false;
}

const number = [1, 2, 3, 4, 5];
console.log(binary_serach(number, 6));

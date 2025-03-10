function linear_search(arr: number[], target: number): boolean {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

console.log(linear_search([1, 2, 3, 4, 5], 6));
console.log(linear_search([1, 2, 3, 4, 5], 5));

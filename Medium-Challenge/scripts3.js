function sharePizza(x, y) {
    const slicesPerPerson = (x / y).toFixed(2);
    return `Each person gets ${slicesPerPerson} slices of pizza; from our ${x} slice pizza`;
}

//output examples:
console.log(sharePizza(12, 2));
// Output: Each person gets 6 slices of pizza; from our 8 slice pizza

console.log(sharePizza(8, 1));
// Output: Each person gets 8 slices of pizza; from our 8 slice pizza
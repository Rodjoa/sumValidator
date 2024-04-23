function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] + array[j] === targetSum) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

// Ejemplo de uso:
const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 100;
const result = twoNumberSum(array, targetSum);
console.log("result = ", result );

if (result.length > 1) {
    console.log("El array resultante es: ", result);
}

else {
    console.log("No hay coincidencias");
}

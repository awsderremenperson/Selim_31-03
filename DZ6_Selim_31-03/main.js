// Функция, принимающая массив и функцию для выполнения математического действия
function applyOperationToElements(array, operation) {
    // Проходимся по массиву и применяем функцию к каждому элементу
    for (let i = 0; i < array.length; i++) {
        array[i] = operation(array[i]);
    }
    return array; // Возвращаем обновленный массив
}

// Примеры функций для математических действий
function square(num) {
    return num * num;
}

function double(num) {
    return num * 2;
}

function subtractTen(num) {
    return num - 10;
}

// Пример использования функции
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = applyOperationToElements(numbers, square);
console.log(squaredNumbers); // Выводит: [1, 4, 9, 16, 25]

let doubledNumbers = applyOperationToElements(numbers, double);
console.log(doubledNumbers); // Выводит: [2, 4, 6, 8, 10]

let subtractedNumbers = applyOperationToElements(numbers, subtractTen);
console.log(subtractedNumbers); // Выводит: [-9, -8, -7, -6, -5]

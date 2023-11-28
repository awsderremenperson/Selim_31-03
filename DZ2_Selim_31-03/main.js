var Starbucks = {
    coffee: {
        americano: {
            description: "Классический напиток с одной порцией эспрессо и горячей водой."
        },
        latte: {
            description: "Напиток на основе эспрессо с молоком и воздушной пенкой."
        },
        cappuccino: {
            description: "Напиток на основе эспрессо с молоком и плотной пенкой."
        }
    },
    tea: {
        blackTea: {
            description: "Крепкий черный чай с молоком и сахаром, при необходимости."
        },
        greenTea: {
            description: "Легкий зеленый чай с приятным ароматом."
        }
    },
    otherDrinks: {
        hotChocolate: {
            description: "Горячий шоколад с молоком и взбитыми сливками."
        },
        icedCoffee: {
            description: "Охлажденный кофе со льдом и молоком."
        }
    }
};

// Пример использования объекта Starbucks
console.log("Описание напитка americano:", Starbucks.coffee.americano.description);
console.log("Описание напитка blackTea:", Starbucks.tea.blackTea.description);
console.log("Описание напитка hotChocolate:", Starbucks.otherDrinks.hotChocolate.description);



// Запросить число от пользователя
var userInput = Number(prompt("Введите число от 1 до 7:"))

// Проверить, является ли введенное значение числом от 1 до 7
if (userInput >= 1 && userInput <= 7) {
    // Использовать switch..case для определения дня недели
    var day;

    switch (userInput) {
        case 1:
            day = "Понедельник";
            break;
        case 2:
            day = "Вторник";
            break;
        case 3:
            day = "Среда";
            break;
        case 4:
            day = "Четверг";
            break;
        case 5:
            day = "Пятница";
            break;
        case 6:
            day = "Суббота";
            break;
        case 7:
            day = "Воскресенье";
            break;
        default:
            console.log('Некорректный ввод. Введите число от 1 до 7.')
    }

    // Вывести день недели
    console.log(`День недели: ${day}`);
} else {
    // Вывести сообщение об ошибке, если введенное число не соответствует диапазону от 1 до 7
    console.log("Некорректный ввод. Введите число от 1 до 7.")
}
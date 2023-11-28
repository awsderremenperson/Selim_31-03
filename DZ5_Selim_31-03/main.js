function filterAndMapBooks(books) {
    // Фильтрация книг, содержащих букву 'у'
    var booksWithU = books.filter(function(book) {
        return book.toLowerCase().includes('у');
    });

    // Формирование нового массива с текстом "книга с буквой 'у'"
    var result = booksWithU.map(function(book) {
        return book + ' - книга с буквой "у"';
    });

    // Отдельный список для книг без буквы 'у'
    var booksWithoutU = books.filter(function(book) {
        return !book.toLowerCase().includes('у');
    });

    // Вывод в консоль
    console.log(result.join('\n'));
    console.log('--- Остальные книги ---');
    console.log(booksWithoutU.join('\n'));
}

var books = ["Книга", "Учебник", "Словарь", "Роман", "Успех", "Азбука"];
filterAndMapBooks(books);



var counterElement = document.getElementById('counter');
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');

// Обработчик события для кнопки "+"
incrementButton.addEventListener('click', function() {
    counterElement.value = parseInt(counterElement.value) + 1;
});

// Обработчик события для кнопки "-"
decrementButton.addEventListener('click', function() {
    counterElement.value = parseInt(counterElement.value) - 1;
});
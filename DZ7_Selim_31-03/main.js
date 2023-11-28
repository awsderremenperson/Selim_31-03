// Получаем все кнопки с классом toggle-button
var toggleButtons = document.querySelectorAll('.toggle-button');

// Перебираем кнопки и добавляем обработчики событий
toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Находим следующий элемент (ответ на загадку) после кнопки
        var answer = button.nextElementSibling;

        // Переключаем класс 'hidden' на ответе, чтобы скрыть или показать его
        answer.classList.toggle('hidden');

        // Меняем текст кнопки исходя из видимости ответа
        if (answer.classList.contains('hidden')) {
            button.textContent = 'Показать ответ';
        } else {
            button.textContent = 'Скрыть ответ';
        }
    });
});

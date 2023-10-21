document.querySelector('.top__btn').addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращение стандартного поведения ссылки

    const target = document.querySelector('.header'); // Выбор элемента по классу, "header"
    const offsetTop = target.offsetTop; // Получение его вертикального смещения от верха страницы

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Добавление параметра behavior: 'smooth', для плавного скролла
    });
});
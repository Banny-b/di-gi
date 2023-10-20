const newsItems = document.getElementById("newsItems");
const newsItemElements = newsItems.querySelectorAll(".news__item");

function rearrangeItems() {
    if (window.innerWidth >= 1440) {
      // 4 колонки
    rearrangeColumns(4);
    } else if (window.innerWidth >= 1024) {
      // 3 колонки
    rearrangeColumns(3);
    } else if (window.innerWidth >= 768) {
      // 2 колонки
    rearrangeColumns(2);
    } else if (window.innerWidth >= 640) {
      // 2 колонки
    rearrangeColumns(2);
    } else {
      // 1 колонка
    rearrangeColumns(1);
    }
};

function rearrangeColumns(columns) {
    const itemsArray = Array.from(newsItemElements);
    newsItems.innerHTML = ""; // Очистим контейнер
    let columnArray = Array.from({ length: columns }, () => []);

    itemsArray.forEach((item, index) => {
        columnArray[index % columns].push(item);
    });

    columnArray.forEach((column) => {
        const columnContainer = document.createElement("div");
        columnContainer.classList.add("news__column");

    column.forEach((item) => {
        columnContainer.appendChild(item);
    });

    newsItems.appendChild(columnContainer);
    });
};

window.addEventListener("resize", rearrangeItems);
rearrangeItems(); // Вызываем функцию при загрузке страницы
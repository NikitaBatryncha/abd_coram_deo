(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById('modal-menu');
    const listener = document.getElementById('call');

    // Функция для показа меню
    function showMenu() {
      menu.classList.add("active");
    }

    // Функция для скрытия меню
    function hideMenu(event) {
      // Проверяем, если курсор не находится на элементе-слушателе или меню
      if (!menu.contains(event.relatedTarget) && !listener.contains(event.relatedTarget)) {
        menu.classList.remove("active");
      }
    }

    // Показ меню при наведении на слушатель
    listener.addEventListener('mouseenter', showMenu);

    // Скрытие меню при выходе курсора из зоны меню или слушателя
    menu.addEventListener('mouseleave', hideMenu);
    listener.addEventListener('mouseleave', hideMenu);


    const burger = document.getElementById('burger');

    burger.addEventListener("click", (e) => {
      e.preventDefault();
      showMenu()
    });

    const close= document.getElementById('close-burger');

    close.addEventListener("click", (e) => {
      e.preventDefault();
      hideMenu(e)
    });
  });
})();

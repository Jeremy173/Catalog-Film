document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');

      // Убираем активный класс с всех вкладок
      tabLinks.forEach(link => link.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Добавляем активный класс к текущей вкладке
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
});

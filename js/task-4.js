document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email,
      password,
    };

    console.log(formData); // Выводим объект с данными формы в консоль

    form.reset(); // Очищаем поля формы
  });
});

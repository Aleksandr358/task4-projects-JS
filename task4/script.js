const link = document.querySelector('#link');

link.addEventListener('click', function(event) {
    event.preventDefault();
    let pro = prompt("Введите новое название ссылки");
    document.querySelector('#link').innerHTML = pro;
    prompt = null
});

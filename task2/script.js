const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
});

let paragraph = document.querySelector('#code1');
paragraph.addEventListener('click', function() {
    this.textContent = 'Пример использования команды console.log'
});

const alert1 = document.querySelector('#alert1');

alert1.addEventListener('click', () => {
    alert('Служит для вывода информации в веб-сайт')
});

let paragraph1 = document.querySelector('#code2');
paragraph1.addEventListener('click', function() {
    this.textContent = 'Пример использования команды alert'
});

const prompt1 = document.querySelector('#prompt1');

prompt1.addEventListener('click', () => {
    prompt('Диалоговое окно с запросом на ввод текста')
});

let paragraph2 = document.querySelector('#code3');
paragraph2.addEventListener('click', function() {
    this.textContent = 'Пример использования команды prompt'
});
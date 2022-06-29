

document.querySelector("#autform").addEventListener("submit", (event) => {
event.preventDefault();
let input = document.querySelector('input');
console.log(input.value);
event.target.reset();
});
oninput = function() {
document.querySelector('#duplicateField').innerHTML = document.querySelector('input').value;
};
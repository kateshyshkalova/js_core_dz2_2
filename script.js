let text = prompt('Введіть email');
console.log(text);
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == '@') { count++ };
}
if ((text.charAt(0) == '@') || (text.charAt(text.length - 1) == '@')) console.log('Ви ввели неправильний email');
else if (count === 0) console.log('Ви ввели неправильний email');
else console.log('Ваш email прийнято');

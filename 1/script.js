'use strict';
/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
градусах по Фаренгейту
*/
let Tc = +prompt("Введите температуру °С: ");
let Tf = (9 / 5) * Tc + 32;
alert(Tf);

/*
2. Объявить две переменные: admin и name. Записать в name строку "Василий". 
Скопировать значение из name в admin. 
Вывести в консоль переменную admin (должно вывести "Василий")
*/
let admin = "админ";
let name = "Василий";
admin = name;
console.log(admin);

/*
3. Вывести в консоль значения выражений и объяснить 
почему получились такие значения используя 
комментарии к каждому выражению.
*/

/*
1. 10 плюс 10 получаем 20
2. 20 плюс '10' получаем '2010'
3. '2010' присваиваем example1
4. с помощью console.log выводим example1 в консоль
*/
let example1 = 10 + 10 + '10';
console.log(example1);
/*
1. 10 плюс '10' получаем '1010'
2. '1010' плюс 10 получаем '101010'
3. '101010' присваиваем example1
4. с помощью console.log выводим example2 в консоль
*/
let example2 = 10 + '10' + 10;
console.log(example2);
/*
1. 10 плюс 10 получаем 20
2. приводим '10' к числу и получаем 10
3. 20 плюс 10 получаем 30
4. 30 присваиваем example3
5. с помощью console.log выводим example3 в консоль
*/
let example3 = 10 + 10 + +'10';
console.log(example3);
/*
1. приводим "" к отрицательному числу получаем -0
2. 10 делим на -0 получаем -Infinity
3. -Infinity присваиваем example4
4. с помощью console.log выводим example4 в консоль
*/
let example4 = 10 / -"";
console.log(example4);
/*
1. приводим "2,5" к числу получаем NaN
2. 10 делим на NaN получаем NaN
3. NaN присваиваем example5
4. с помощью console.log выводим example5 в консоль
*/
let example5 = 10 / +"2,5";
console.log(example5);
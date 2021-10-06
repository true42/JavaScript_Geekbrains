'use strict';
/*
1. С помощью цикла for написать алгоритм для вывода чисел 
(выводите в консоль, с помощью console.log) от 0 до 10 включительно
*/
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`)
    } else if (i % 2 == 0) {
        console.log(`${i} - чётное число`)
    } else if (i % 2 != 0) {
        console.log(`${i} - нечётное число`)
    }
};
/*
2. Выведите в консоль значения, указанные рядом с комментариями
*/
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author)
console.log(post.comments[0].rating.dislikes)
console.log(post.comments[1].userId)
console.log(post.comments[1].text)

/*
3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%
*/
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function(element) { console.log(element.price * 0.85) })

/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1. Получить все товары, у которых есть фотографии
    2. Отсортируйте товары по цене (от низкой цены к высокой).
*/

const products1 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let photoProducts = products1.filter(i => Object.values(i).length == 3 && i.photos.length > 0)

console.log(photoProducts)

let sortProducts = products1.sort(function(a, b) {
    return a.price - b.price;
});

console.log(sortProducts)

/*
5.Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
*/

for (let i = 0; i < 10; console.log(++i));

/*
6. Нарисовать горку с помощью console.log (используя цикл for), у вашей горки должно быть 20 рядов
*/

for (let i = 1; i <= 21; i++) {
    let point = ''
    for (let j = 1; j < i; j++) {
        point += '*'
    }
    console.log(point)
};
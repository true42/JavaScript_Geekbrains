"use strict";
/* 
Разметка товара:

<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div>
*/
const url = 'https://example.com/producs/'
const products = {
    phones: [{
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [{
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [{
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

const products_el = document.querySelector(".products");
const buttons = document.querySelectorAll("button");
buttons.forEach(function(button) {
    button.addEventListener("click", clickHandler);
});

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    products_el.innerHTML = "";
    showCategory(event.target.dataset.type);
}

/**
 * Сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 * @param {string} category 
 */
function showCategory(category) {
    const products_category = products[category];
    let products_div = "";
    products_category.forEach(function(product) {
        products_div += getProductMarkup(product);
    });
    products_el.insertAdjacentHTML("afterbegin", products_div);
}

/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара
 */
function getProductMarkup(product) {
    return `<div class="product">
                <div>${product.name}</div>
                <img src="${product.imageUrl}" alt="">
                <div>${product.price}</div>
                <a href="${url}${product.id}">Подробнее</a>
            </div>`;
}
'use strict';
/*
1.1 Сделайте в стиле es5, а затем в стиле es6, конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип.
*/
function Product_es5(name, price) {
    this.name = name;
    this.price = price;
};

Product_es5.prototype.make25PercentDiscount = function() {
    this.price = this.price * 0.75;
};

let obj1 = new Product_es5('product_№1', 500);

console.log(`У ${obj1.name} цена: ${obj1.price}`);
obj1.make25PercentDiscount();
console.log(`У ${obj1.name} цена: ${obj1.price}`);

class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
};

let obj2 = new Product_es6('product_№2', 100);

console.log(`У ${obj2.name} цена: ${obj2.price}`);
obj2.make25PercentDiscount();
console.log(`У ${obj2.name} цена: ${obj2.price}`);

/*
1.2 Сделайте в стиле es5, а затем в стиле es6,
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
*/

function Post_es5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post_es5.prototype.edit = function(text1) {
    if (text1 != '') {
        this.text = text1;
    }
}

function AttachedPost_es5(author, text, date, highlighted = false) {
    Post_es5.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost_es5.prototype = Object.create(Post_es5.prototype);
AttachedPost_es5.prototype.constructor = AttachedPost_es5;


AttachedPost_es5.prototype.makeTextHighlighted = function(param1) {
    if (param1) {
        this.highlighted = true
    }
}

let post1 = new Post_es5('autor1', 'Lorem', '12.12.21');
console.log(post1);

let attachedPost1 = new AttachedPost_es5('autor2', 'Lorem Lorem', '21.12.12');
attachedPost1.edit('LORIME')
console.log(attachedPost1);
console.log(attachedPost1.highlighted);
attachedPost1.makeTextHighlighted(true);
console.log(attachedPost1.highlighted);
//////////////////////////////////////////////////////////////////////

class Post_es6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text1) {
        if (text1 != '') {
            this.text = text1;
        }
    }
}

class AttachedPost_es6 extends Post_es6 {
    constructor(author, text, date, highlighted = false) {
        super(author, text, date);
        this.highlighted = highlighted;
    }

    makeTextHighlighted(param1) {
        if (param1) {
            this.highlighted = true
        }
    }
}

let post2 = new Post_es6('autor34', 'Lorem34', '15.12.15');
console.log(post2);

let attachedPost2 = new AttachedPost_es5('autor43', 'Lorem43Lorem', '08.08.08');
attachedPost2.edit('43')
console.log(attachedPost2);
console.log(attachedPost2.highlighted);
attachedPost2.makeTextHighlighted(true);
console.log(attachedPost2.highlighted);
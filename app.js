let number = 20

const id = 10

let number1 = 40
let number2 = 60

let result = number1 * number2

let amir = "amir"
let ali = 'ali'
let validuser = true

let moh

// const bahar = amir + ' is ' + ali  //این رو می‌شه به شکل بهتر نوشت


const bahar = '${amir} is ${ali}'

console.log(result)
console.log(typeof ali)

const array = ['book', 99, true]

// array[1] = 99

array[3] = 89

array.push('seda')
array.unshift('saha') 

array.pop()

console.log(array, length)

//distructing

const [title1, price] = array

//تایتل به خونه اول آرایه اشاره می‌کند
const [rate, ...other] = array

const product12 = {
    title: 'salam',
    price: 17,
    exists: true,
}

const { title } = product12
console.log(title)

const products = [
    {
        id: 1,
        title: 'salam',
        price: 17,
        exists: true,
    },
    {
        id: 2,
        title: 'salam',
        price: 17,
        exists: true,
    },
    {
        id: 3,
        title: 'salam',
        price: 17,
        exists: true,
    }
]


for (let item = 0; item < products.length; item++) {
    console.log(products[item].title)
}
const data = JSON.stringify(products) //برای ارسال به بک اند تبدیل دیتا به رشته
console.log(data)

const response = JSON.parse(data) //برای دریافت از بک اند تبدیل رشته به دیتا

const price1 = 99
const newprice = 109

if (newprice < price) {
    console.log('discount added!')
} else if (newprice < price) {
    console.log('price: ${newprice}')
} else {
    console.log('same price')
}


function productme() {
    console.log('product name')
}

productme()

function productyou(title , price) {
    console.log('title: ${title} - price: ${price}')
}

productyou('book', 99)

function productus(title = 'book' , price = 99) {
    return ('title: ${title} - price: ${price}')
}

const resultyou = productus('book', 99)
console.log(resultyou)

const productyours = (title = 'book' , price = 99) => {
    return ('title: ${title} - price: ${price}')
}

const resultyourss = productus('book', 99)
console.log(resultyourss)

//اگر فانکشن ما یک خطی بود می‌شه اینجوری نوشت

const resultyoursss = (title = 'book' , price = 99) => 'title: ${title} - price: ${price}'

//متدهای آرایه

products.forEach((item) => {
    console.log(item.title)
})

const productTiltle = products.map((item) => {
    return item.title
})

const itemexist = products.filter((item)=> {
    return item.exists === true
})

//شی گرایی

function product (title, price) {
    this.title = title
    this.price = price

    this.productInfo = function () {
        return 'title: ${this.title} - price: ${this.price}'
    }
}

const product1 = new product('book1', 99)
const product2 = new product('book2', 89)

console.log(product1.productInfo)
console.log(product2.productInfo)

class Product {
    constructor(title, price) {
        this.title = title
        this.price = price
    }

    productInfo () {
        return 'title: ${this.title} - price: ${this.price}'
    }
}

const product3 = new product('book1', 99)
const product4 = new product('book2', 89)

console.log(product1.productInfo)
console.log(product2.productInfo)


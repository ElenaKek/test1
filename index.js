let pizza = {
    name: 'pizza',
    price: 400,
    ingredient1: 'sausage',
    ingredient2: 'tomato',
    ingredient3: 'dough',
    form: 'circle',
    cookingTime: 30
};

let burger = {
    price: 250,
    ingredient1: 'meat',
    ingredient2: 'bun',
    ingredient3: 'onion',
    form: 'circle',
    cookingTime: 15
};

let frenchFries = {
    price: 150,
    ingredient1: 'potato',
    ingredient2: 'salt',
    ingredient3: 'oil',
    form: 'parallelepiped',
    cookingTime: 10
};

let adsa = frenchFries;

let myFavoritFood = [pizza, burger, frenchFries];

console.log(myFavoritFood);

myFavoritFood.pop();

console.log("delete frenchFries in arrey: ",myFavoritFood);

myFavoritFood.unshift(frenchFries);

delete frenchFries.ingredient1;

console.log("delete ingredient1 in object: ",myFavoritFood);

let amountOfProceeds = 0;

myFavoritFood.forEach ((obj) => {
    console.log("Время приготовления: ", amountOfProceeds, "мин."),
    console.log("Цена: ", obj.price, "руб."),
    amountOfProceeds += obj.price
});
console.log("Cумма выручки: ",amountOfProceeds);

let newArray = [];

newArray.push(myFavoritFood[0]);




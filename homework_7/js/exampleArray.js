let pizza = {
    name: 'pizza',
    price: 400,
    ingredients: ['sausage','tomato','dough'],
    form: 'circle',
    cookingTime: 30
};

let burger = {
    price: 250,
    ingredients: ['meat', 'bun', 'onion'],
    form: 'circle',
    cookingTime: 15
};

let frenchFries = {
    price: 150,
    ingredients: ['potato', 'salt', 'oil'],
    form: 'parallelepiped',
    cookingTime: 10
};

let myFavoritFood = [pizza, burger, frenchFries];

console.log(myFavoritFood);

myFavoritFood.pop();

console.log("delete frenchFries in arrey: ",myFavoritFood);

myFavoritFood.unshift(frenchFries);

delete frenchFries.ingredients[0];

console.log("delete ingredient in object: ",myFavoritFood);

let amountOfProceeds = 0;

myFavoritFood.forEach ((obj) => {
    console.log("Время приготовления: ", amountOfProceeds, "мин.");
    console.log("Цена: ", obj.price, "руб.");
    amountOfProceeds += obj.price
});
console.log("Cумма выручки: ",amountOfProceeds);

let newArray = [];

newArray.push(myFavoritFood[0]);




let pizzas = [
    {id:1, nombre:"muzarella", ingredientes:["salsa", "muzarrella", "aceitunas"], Precio:500},
    {id:2, nombre:"fugazeta", ingredientes:["cebolla", "salsa", "muzarella", "aceitunas"], Precio:600},
    {id:3, nombre:"calabreza", ingredientes:["longaniza", "salsa", "muzarrella", "aceitunas"], Precio:700},
    {id:4, nombre:"anchoas", ingredientes:["salsa", "muzarrella", "aceitunas", "anchoas"], Precio:600},
    {id:5, nombre:"napolitana", ingredientes:["salsa", "muzarrella", "aceitunas", "ajo", "tomate"], Precio:700},
    {id:6, nombre:"provolone", ingredientes:["salsa", "provolone", "aceitunas"], Precio:750},
];


pizzas.forEach((pizza) => {if (pizza.id % 2 !== 0) {console.log(pizza);} })
pizzas;

let economica = pizzas.some((pizza)=> pizza.Precio < 600 )

if(economica) {
    console.log("tenemos pizzas economicas")
}


let sabores = []

pizzas.forEach((pizza) => sabores.push(pizza.nombre))

console.log(`los sabores de nuestras pizzas son : ${sabores}`)


let precios = []

pizzas.forEach((pizza) => precios.push(pizza.Precio))

console.log(`los sabores precios de nuestras pizzas son : ${precios}`)


pizzas.forEach((pizza) => console.log(`nuestra ${pizza.nombre} sale ${pizza.Precio}`))

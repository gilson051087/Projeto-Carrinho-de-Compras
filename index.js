import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];


console.log("welcome to the your shopee cart. ")


//Criando dois itens ao carrinho
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwhells lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);



await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);


//deletei dois itens do carrinho de compras
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);


await cartService.calculateTotal(myCart);

// Começar a partir do "display cart"
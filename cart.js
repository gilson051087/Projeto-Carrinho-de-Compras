// quais açoes meu carrinho pode fazer?


// adiciona item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\nshopee cart total is! ");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
}


// deleta o item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    
    if (index !== -1){
        userCart.splice(index, 1)
    } else {
        console.log(`Item ${name} não encontrado no carrinho.`)
    }
}

// remove um item - diminui um item
async function removeItem(userCart, item) {

    // 1 encontrar um indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
   
    //2 caso não encontre o item

    if(indexFound == -1) {
        console.log("item não encontrado");
        return;
    }

    //3 item maior que 1 subtrair um item, item =1 deletar o item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    // 4 caso o item = 1 deletar o item

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}    

async function displayCart(userCart) {
    console.log("Shopee cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}
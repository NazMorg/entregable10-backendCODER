const addToCartForm = document.getElementById('addToCartForm')
const productId = document.getElementById('productId').value;
const quantity = document.getElementById('quantity');
const userCart = document.getElementById('cartId').value;


addToCartForm.onsubmit = async (e) => {
    
    if (quantity.value >= 1) {
        const productData = { products: [{ product: productId, quantity: +quantity.value }] }
        await addToCart(userCart, productData);
    } else {
        alert("La cantidad debe ser 1 o mayor");
    }

    e.preventDefault();
}

async function addToCart(userCart, productData) {
    try {
        const result = await fetch(`http://localhost:8080/api/carts/${userCart}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(productData)
        });
        console.log("result: ", result);
        if (result) {
            alert(`Producto ${productId} añadido al carrito`);
        }
    } catch (error) {
        alert(`Error: ${error}`)
    }
}
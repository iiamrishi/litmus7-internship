// create products to dynamicaly use, by creating  array of product details
const products = [
    {
        "product": "Samsung Galaxy S23",
        "image": "../img/s23.jpg",
        "price": {
            "symbol": "₹",
            "basePrice": 2,
            "updatePrice": 0
        }
    },
    {
        "product": "Bose QuietComfort Ultra earbuds",
        "image": "../img/earbuds.jpg",
        "price": {
            "symbol": "₹",
            "basePrice": 5,
            "updatePrice": 0
        }
    },
    {
        "product": "Galaxy Watch5 Bluetooth (40mm)",
        "image": "../img/watch.jpg",
        "price": {
            "symbol": "₹",
            "basePrice": 3,
            "updatePrice": 0
        }
    }
];


document.addEventListener('DOMContentLoaded', function () {
    function processProductData(products) { //this function is used to process the product data given in the array of products
        function generateProductHTML(product) {//this function used to generate the dynamically created array of products
            return `
            <div class="product-desc-box">
            <div class="wrap">
            <div class="imgborder">
                <img src="${product.image}" alt="${product.product}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.product}</div>
                <div class="product-price">
                    <div class="symbol">${product.price.symbol}
                        <div class="updatePrice" data-price="${product.price.basePrice}">${product.price.basePrice}</div>
                    </div>
                </div>
                </div>
            </div>
            <div class="product-price-box">
                <div class="buttongroup">
                    <button class="minus" onclick="updateValue('${product.product}', -1)"><b>-</b></button>
                    <input class="textbox" id="${product.product}" type="text" readonly>
                    <button class="plus" onclick="updateValue('${product.product}', 1)"><b>+</b></button>
                </div>
                <div>
                    <div class="symbol">${product.price.symbol}
                        <div class="updatingprice" data-updatingPriceId="${product.product}" data-price="${product.price.basePrice}">0</div>
                    </div>
                </div>
            </div>
        </div>`;

        }

        function displayProducts() {
            const productContainer = document.getElementById('productContainer');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'boxflex';
                productDiv.innerHTML = generateProductHTML(product);
                productContainer.appendChild(productDiv);
            });
        }

        displayProducts();
    }

    processProductData(products);
});

function updateValue(id, change) {
    let valueElement = document.querySelector(`[data-updatingPriceId="${id}"]`);
    let tempnum = parseInt(document.getElementById(`${id}`).value, 10) || 0;

    // Use Number() instead of Number.parseFloat() for simplicity
    let temprice = Number(valueElement.getAttribute('data-price'));

    // Check if temprice is NaN or not a number
    temprice = isNaN(temprice) ? 0 : temprice;

    console.log(`Before update - tempnum: ${tempnum}, temprice: ${temprice}`);

    tempnum += change;

    if (tempnum < 0) {
        tempnum = 0;
    } else if (tempnum > 5) {
        tempnum = 5;
    }
    console.log(`Value element:`, valueElement);
    console.log(`data-price attribute:`, valueElement.getAttribute('data-price'));
    temprice = tempnum * temprice;
    document.getElementById(`${id}`).value = tempnum;
    valueElement.textContent = temprice;

    let totalPrice = total(['Samsung Galaxy S23', 'Bose QuietComfort Ultra earbuds', 'Galaxy Watch5 Bluetooth (40mm)']);
    document.getElementById('totalPrice').textContent = totalPrice;
}


function total(productIds) {
    let totalPrice = 0;

    for (let i = 0; i < productIds.length; i++) {
        let productId = productIds[i];
        let updatingPriceElement = document.querySelector(`[data-updatingPriceId="${productId}"]`);
        let updatingPrice = parseFloat(updatingPriceElement.textContent) || 0;

        if (!isNaN(updatingPrice)) {
            console.log(`Updating Price for ${productId}:`, updatingPrice);
            totalPrice += updatingPrice;
        } else {
            console.error(`Invalid updating price for ${productId}.`);
        }
    }

    // Ensure totalPrice is a number and not NaN
    totalPrice = isNaN(totalPrice) ? 0 : totalPrice;

    return totalPrice;
}


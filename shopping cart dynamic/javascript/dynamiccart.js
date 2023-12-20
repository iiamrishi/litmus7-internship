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

function processProductData(products) {
    function generateProductHTML(product) {
        return `
            <div class="product-desc-box">
                <div class="imgborder">
                    <img src="${product.image}" alt="${product.product}">
                </div>
                <div>
                    <div>
                        <div class="symbol" >${product.price.symbol}
                            <div class="updatePrice">${product.price.basePrice}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-price-box">
                <div class="buttongroup">
                    <button class="minus" onclick="minus('${product.product}','updatePrice','updatingPrice')"><b>-</b></button>
                    <input class="textbox" id="${product.product}" type="text" readonly>
                    <button class="plus" onclick="plus('${product.product}','updatePrice','updatingPrice')"><b>+</b></button>
                </div>
                <div>
                    <div class="symbol">${product.price.symbol}
                        <div class="updatingprice" id="updatingPrice">0</div>
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

function minus(id, price, updatingPriceId) {
    let value = document.getElementById(price);
    let temprice = parseFloat(value.textContent);
    let tempnum = parseInt(document.getElementById(id).value, 10);
    tempnum--;

    if (tempnum >= 0) {
        temprice = tempnum * parseFloat(value.textContent);
    }

    if (tempnum <= 0) {
        tempnum = 0;
    }

    displayValue(id, tempnum, temprice, updatingPriceId);
}

function plus(id, price, updatingPriceId) {
    let value = document.getElementById(price);
    let tempnum = parseInt(document.getElementById(id).value, 10);
    let temprice = parseFloat(value.textContent);
    tempnum++;

    if (tempnum > 5) {
        tempnum = 5;
    }

    if (tempnum >= 1) {
        temprice = temprice * tempnum;
    }

    displayValue(id, tempnum, temprice, updatingPriceId);
}

function displayValue(id, tempnum, temprice, updatingPriceId) {
    document.getElementById(id).value = tempnum;
    document.getElementById(updatingPriceId).textContent = temprice;
    let totalPrice = total(['updatingPrice', 'updatingPriceTwo', 'updatingPriceThree']);
    document.getElementById('totalPrice').textContent = totalPrice;
}

function total(updatingPriceIds) {
    let totalPrice = 0;
    for (let i = 0; i < updatingPriceIds.length; i++) {
        let updatingPriceId = updatingPriceIds[i];
        let updatingPrice = parseFloat(document.getElementById(updatingPriceId).textContent) || 0;
        totalPrice += updatingPrice;
    }

    return totalPrice;
}

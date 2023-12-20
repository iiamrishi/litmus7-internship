if (typeof products === 'undefined') {
    // Initialize products only if it's not defined
    var products = [
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
}

document.addEventListener('DOMContentLoaded', function () {
    function processProductData(products) {
        function generateProductHTML(product) {
            return `
                <div class="product-desc-box">
                    <div class="imgborder">
                        <img src="${product.image}" alt="${product.product}">
                    </div>
                    <div>
                        <div>
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
                        <button class="plus" onclick="updateValue('${product.product}', 1)"><b>+</b></button
                    </div>
                    <div>
                        <div class="symbol">${product.price.symbol}
                            <div class="updatingprice" data-updatingPriceId="${product.product}">0</div>
                        </div>
                    </div>
                </div>`;
            return `       
            <div class="product-desc-box">
                <div class="imgborder">
                 <img src="${product.image}" alt="${product.product}">
                </div>
                <div>
                <div> Samsung Galaxy S23
                    <div class="symbol" >&#8377;
            <div id="updatePrice"> 2</div>
                    </div>
        </div>
        </div>
        </div>

            <div class="product-price-box">
                <div class="buttongroup">
                    <button id="minus" onclick="minus('textboxOne','updatePrice','updatingPrice')"><b>-</b></button>
                    <input class="textbox" id="textboxOne" type="text" readonly>
                    <button id="plus" onclick="plus('textboxOne','updatePrice','updatingPrice')"><b>+</b></button>
                </div>
                <div>
                    <div class="symbol"> &#8377;
                    <div class="updatingprice" id="updatingPrice"> </div>
                </div>
                </div>
            </div>`


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
    let temprice = parseFloat(valueElement.getAttribute('data-price')) || 0;
    console.log(valueElement,tempnum,temprice)

    tempnum += change;

    if (tempnum < 0) {
        tempnum = 0;
    } else if (tempnum > 5) {
        tempnum = 5;
    }

    temprice = tempnum * parseFloat(valueElement.getAttribute('data-price'));
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
        let updatingPrice = parseFloat(updatingPriceElement.getAttribute('data-price')) || 0;

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


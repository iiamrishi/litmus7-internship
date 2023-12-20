const mockdata = [{productName: 'phone', price: 2, imgUrl: 'angamly' },
{ name: 'buds', price: 5, imgUrl: 'imgurl' }
    , { name: 'watch', price: 3, imgUrl: 'image' }]


function minus(id, price, updatingPriceId) {//passing unique id as referance to this function
    // alert(price)
    // alert(id)
    // console.log(document.getElementById(price))
    let value = document.getElementById(price)
    let temprice = value.textContent;
    console.log(temprice)
    let tempnum = document.getElementById(id).value //we are fetching the value inside a particular id
    tempnum--;
    if (tempnum >= 0) {
        temprice = tempnum * temprice;
    }
    // alert(temprice)

    if (tempnum <= 0) {
        tempnum = 0;
    }
    displayValue(id, tempnum, temprice, updatingPriceId);
}

// let temp = 79999;
function plus(id, price, updatingPriceId) {
    // alert(price)
    // alert(id)
    let value = document.getElementById(price)
    // console.log(value)
    let tempnum = document.getElementById(id).value
    // let temprice= document.getElementById('updatePrice').getAttribute('value')
    let temprice = value.textContent;
    //  console.log(temprice)


    tempnum++;
    if (tempnum > 5) {
        tempnum = 5;
    }
    if (tempnum >= 1) {

        temprice = temprice * tempnum;

        //console.log(temprice)

    }

    console.log(temprice)
    displayValue(id, tempnum, temprice, updatingPriceId);

}







function displayValue(id, tempnum, temprice, updatingPriceId) {
    document.getElementById(id).value = tempnum;
    // alert(updatingPriceId)
    //  let updatingPriceElement = document.getElementById(updatingPriceId);
    // console.log(updatingPriceId)
    document.getElementById(updatingPriceId).textContent = temprice;
    // console.log(updatingPriceElement)
    // document.getElementById(updatingPriceElement).textContent= temprice
    // document.getElementById('updatingPrice').textContent = temprice;
    // document.getElementById('updatingPriceTwo').textContent = temprice;
    // document.getElementById('updatingPriceThree').textContent = temprice;
    //  document.getElementById('totalPrice').textContent = temprice;
    let totalPrice = total(['updatingPrice', 'updatingPriceTwo', 'updatingPriceThree']);
    document.getElementById('totalPrice').textContent = totalPrice;
}




function total(updatingPriceIds) {
    let totalPrice = 0;
    for (let i = 0; i < updatingPriceIds.length; i++) {
        let updatingPriceId = updatingPriceIds[i];
        let updatingPrice = parseFloat(document.getElementById(updatingPriceId).textContent);
        totalPrice += updatingPrice;
    }

    // let updatingPriceOne = parseFloat(document.getElementById('updatingPrice').textContent);
    // let updatingPriceTwo = parseFloat(document.getElementById('updatingPriceTwo').textContent);
    // let updatingPriceThree = parseFloat(document.getElementById('updatingPriceThree').textContent);

    // // let totalPrice=  parseFloat(document.getElementById(updatingPriceId).textContent);
    // let totalPrice = updatingPriceOne + updatingPriceTwo + updatingPriceThree;

    return totalPrice;
}

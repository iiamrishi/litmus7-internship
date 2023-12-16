
function minus(id, price,) {//passing unique id as referance to this function
    alert(price)
    alert(id)
    // console.log(document.getElementById(price))
    let value = document.getElementById(price)
    let temprice = value.textContent;
    console.log(temprice)
    let tempnum = document.getElementById(id).value //we are fetching the value inside a particular id

    if (tempnum > 1) {
        tempnum--;
    }
    // alert(temprice)

    if (tempnum < 1) {
        tempnum = 1;
    }
    displayValue(id, tempnum, temprice);
}

// let temp = 79999;
function plus(id, price) {
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
    displayValue(id, tempnum, temprice);

}



function displayValue(id, tempnum, temprice) {
    document.getElementById(id).value = tempnum;
    // alert(tempnum)
    document.getElementById('updatingPrice').textContent = temprice;
    document.getElementById('updatingPriceTwo').textContent = temprice;
    document.getElementById('updatingPriceThree').textContent = temprice;

}




function minus(id, price) {//passing unique id as referance to this function
    // console.log(document.getElementById(price))
    let value = document.getElementById(price)
    let temprice = value.textContent;
    console.log(temprice)
    let tempnum = document.getElementById(id).value //we are fetching the value inside a particular id

    tempnum--;
    // alert(temprice)

    if (tempnum < 1) {
        tempnum = 1;
    }
    displayValue(id, tempnum);
}

// let temp = 79999;
function plus(id, price) {

    //  alert(price)
    let value = document.getElementById(price)

    let tempnum = document.getElementById(id).value
    // let temprice= document.getElementById('updatePrice').getAttribute('value')
    let temprice = value.textContent;
    //  console.log(temprice)
    let temp= temprice;
    
    if(tempnum >= 1) {
        
        temprice = temp * 2;
        temp = temp * 2;
       
          //console.log(temprice)
       
    }
    
    tempnum++;
    
    if (tempnum > 5) {
        tempnum = 5;
    }
    console.log(temprice)
    displayValue(id, tempnum, temprice);

}



function displayValue(id, tempnum, temprice) {
    document.getElementById(id).value = tempnum;
    document.getElementById('updatingPrice').textContent = temprice;

}



function minus(id,price){//passing unique id as referance to this function
    // console.log(document.getElementById(price))
    let value= document.getElementById(price)
    let temprice =value.textContent;
    console.log(temprice)
    let tempnum= document.getElementById(id).value //we are fetching the value inside a particular id
 
    tempnum--;
    
    if(tempnum<1){
        tempnum=1;
    }
    displayValue(id,tempnum);
}

function plus(id,price){
    alert(price)
    let tempnum= document.getElementById(id).value 
    let temprice= document.getElementById('updatePrice').getAttribute('value')
    // console.log(temprice)
    tempnum++;

    temprice= temprice*2;
     console.log(temprice)
        if(tempnum>5){
        tempnum=5;
    }
    displayValue(id,tempnum,temprice);
}


function displayValue(id,tempnum,temprice){
    document.getElementById(id).value = tempnum;
    //document.getElementById('updatePrice').value= temprice;
    document.getElementById('updatingPrice').getAttribute(id)= temprice;

}


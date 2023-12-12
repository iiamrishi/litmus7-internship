
function minus(id){//passing unique id as referance to this function
    let tempnum= document.getElementById(id).value //we are fetching the value inside a particular id
 
    tempnum--;
    
    if(tempnum<1){
        tempnum=1;
    }
    displayValue(id,tempnum);
}

function plus(id){
    let tempnum= document.getElementById(id).value 
    tempnum++;
    if(tempnum>5){
        tempnum=5;
    }
    displayValue(id,tempnum);
}


function displayValue(id,tempnum){
    document.getElementById(id).value = tempnum;

}


let number=0;

function plus(){
    number++;//1
    update();
}
function minus(){
    number--;//-1
   
    if(number<0){
        number=0;
    }
    update();   


}
function update(){
    document.getElementById('text').value= number
}

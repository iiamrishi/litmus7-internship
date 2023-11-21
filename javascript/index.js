
///prototype example

let arr=["rishi" ,"danush"];


let object={
    name:"rishi",
    city:"angamaly",
    getInfo: function(){
        console.log(this.name + "from"+ " "+this.city)
    }
    
}

let object2={
    //name:"danush",
}

//for demo only because it cause performance issue
//object2.__proto__= object;

setTimeout(() => {
    console.log("hi1")

})

const value= fetch('https://fakestoreapi.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
console.log(value)


setTimeout(() => {
    console.log("hi2")

})


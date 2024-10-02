
// firth task 👇

// function mergeObjects(...objects){
//     return {...objects[0],...objects[1],...objects[2]}
// }
// const obj1 = {a:1, b:2};
// const obj2 = {b:3, c:5};
// const obj3 = {c:6, d:7};
// console.log(mergeObjects(obj1,obj2,obj3));



// second task 👇
// function deleteKey(obj,key){
//     if(key in obj){
//         delete obj[key]
//     }
// }
// const myObject = {
//     name:"giorgi",
//     surname:"nadiradze",
//     age:17
// }
// console.log("before delete", myObject);
// deleteKey(myObject, "age")
// console.log("after delete", myObject);


// third task 👇
// const car = {
//     make:"BMW",
//     model:"F30",
//     year:2016,
//     getdiscription(){
//         return ` ${this.year} ${this.make} ${this.model}`
//     }
// }
// console.log(car.getdiscription());


// fourth task 👇
// const shoppingCard = {
//     products : [
//         {id:1, name: 'Apple', price:2 }
//     ],
//     add: function({name,price}){
//         const lastId = this.products[this.products.length-1]?.id+1 || 1
//         console.log(lastId, "lastI");
        
//         const newProduct = {
//             id: lastId,
//             name,
//             price
//         }
//         this.products.push(newProduct)
//     },
//     getAllProducts : function(){
//         console.log(this.products);
//     },
//     deleteProduct: function(id){
//         const index = this.products.findIndex(el => el.id == id)
//         if(index === -1 ) return
//         const deleted = this.products.splice(index,1);
//         console.log(deleted);
//     }
// }
// shoppingCard.add({name: "banana", price: 3});
// shoppingCard.add({name: "pear", price: 4 });
// shoppingCard.getAllProducts()
// shoppingCard.deleteProduct(1);
// shoppingCard.getAllProducts()





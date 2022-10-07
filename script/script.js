let btn1=document.getElementById('shop'),
    btn2=document.getElementById('add'),
    increaseEle=document.getElementById('increase'),
    decreaseEle=document.getElementById('decrease'),
    deleteEle=document.getElementById('delete');

let products=[
    {productName:"tv",price:10000,id:1,qty:0},
    {productName:"wm",price:20000,id:2,qty:0},
    {productName:"ac",price:30000,id:3,qty:0}
]
let wishlist=[];
// let addqty=[0];

function reset(){
    wishlist=[];
}
var x;
function some(){

    
     x = parseInt(prompt());
    

    let result=products.find(function(order){
        return order.id==x;
    });
    wishlist.push(result);
    console.log(wishlist);


}btn2.addEventListener('click',some);

function add(){
    let y = products.find(function(s){
        if(s.id===x){
            return s.qty+=1;
        }else{
            return s.id === x ;
        }
    
    });
    // console.log(y)
    reset();
    wishlist.push(y);
    console.log(wishlist);
    

}btn1.addEventListener('click',add);



// {
//     function greeting(y) {
//         alert(`Hello, ${y}`);
//       }
      
//       function processUserInput() {
//         const name = prompt("Please enter your name.");
//         greeting(name);
//       }
      
//       processUserInput();



//       let a="Mohamed";
//       let b="Shajith";

//       let x= `i'm ${a} ${b}`;

//       console.log(x)

//       //promises
//       let x=5;
//       let p=new Promise(function(resolve,reject){

//         if(x>3){
//             resolve("success");
//         }else{
//             reject("failed");
//         }
//       })
//       p.then(function(message){
//         console.log("then "+ message);
//       }).catch(function(message){
//         console.log("catch "+message)
//       })



//       //which word has more letters

//       let a='bike';
//       let b='car';

//       let p=new Promise(function(resolve,reject){
//         if(a.length>b.length){
//             resolve("bike");
//         }else{
//             reject("car");
//         }
//       })
//       p.then(function(answer){
//         console.log('B '+answer);
//       }).catch(function(ans){
//         console.log('C '+ans);
//       })
// }
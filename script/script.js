let btn1=document.getElementById('shop'),
    btn2=document.getElementById('add');
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


function some(){

    
    let x = parseInt(prompt());


    

    let result=products.find(function(order){
        return order.id==x;
    });
    wishlist.push(result);
    console.log(wishlist);

function add(){
    let y = products.find(function(s){
        if(s.id==x){
            return s.qty+=1;
        }else{
            return s.id == x ;
        }
    
    });
    console.log(y)
    reset();
    wishlist.push(y);
    console.log(wishlist);
    

}btn1.addEventListener('click',add);

}btn2.addEventListener('click',some);
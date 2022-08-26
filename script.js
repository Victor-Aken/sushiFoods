

let icons_container = document.getElementsByClassName('icon');



//side Bar

for(let i = 0; i < icons_container.length; i++ ){

    let each_icon_container = icons_container[i];

    each_icon_container.addEventListener( 'mouseover', function(){
      
        let seenIcon = each_icon_container.children[0].children[0];  
        seenIcon.style.display = "none";

        let hiddenIcon = each_icon_container.children[0].children[1];  
        hiddenIcon.style.display = "block";
    })


    each_icon_container.addEventListener( 'mouseleave', () =>{

        let seenIcon = icons_container[i].children[0].children[0];
        seenIcon.style.display = "block";

        let hiddenIcon = icons_container[i].children[0].children[1];
        hiddenIcon.style.display = "none";
    })

}


//Total Price Code

let itemPrice = document.getElementsByClassName('item_price');
let itemQuantity = document.getElementsByClassName('quantiy');
let incrementBtns  = document.getElementsByClassName('increment');
let decrementBtns = document.getElementsByClassName('decrement');
let subTotal = document.getElementById('subtotal');

//Update total function
function updateTotal(){

    let total = 0;

    for(let i = 0; i < itemPrice.length; i++){

    let each_item_price = itemPrice[i];
    let each_item_quantity = each_item_price.parentElement.parentElement.parentElement.children[2].children[1].children[0].value;

    total = total + (each_item_quantity * each_item_price.innerText);
    
   

}
    subTotal.innerText = "$" + total + ".00";

}


//increment
for(let i = 0; i < incrementBtns.length; i++){
    incrementBtns[i].addEventListener( 'click', function(){
         
        updateTotal();
    })

};

//decrement
for(let i = 0; i < decrementBtns.length; i++){
    decrementBtns[i].addEventListener( 'click', function(){
         
        updateTotal();
    })

};


//Home Button Code
let homePageBtns = document.getElementsByClassName('button');

for( let i = 0; i < homePageBtns.length; i++){
    homePageBtns[i].addEventListener( "mouseover", () =>{
        let homeBtn = homePageBtns[i];
        let homeBtnChild = homeBtn.children[0];
        homeBtnChild.style.color = "white";
    })
}

for( let i = 0; i < homePageBtns.length; i++){
    homePageBtns[i].addEventListener( "mouseleave", () =>{
        let homeBtn = homePageBtns[i];
        let homeBtnChild = homeBtn.children[0];
        homeBtnChild.style.color = "black";
    })
}

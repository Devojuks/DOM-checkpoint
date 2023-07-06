let addToCartBtn = document.getElementsByClassName('btn-primary');
let mainContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num');
let deleteButton = document.getElementsByClassName('remove');

// targets the add to cart button
for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', addToCart);
}

// function that adds items to the cart
function addToCart(event) {

    let btn = event.target
    let btnParent = btn.parentElement
    let btnGrandParent = btn.parentElement.parentElement
    let itemName = btnParent.children[0].innerText
    let itemPrice = btnParent.children[1].innerText
    let itemImage = btnGrandParent.children[0].src
    
    let itemContainer = document.createElement('tr')
    itemContainer.innerHTML = `<td scope="row"><input class="" type="checkbox"></td>
                    
    <td>
        <img class="" src="${itemImage}" alt="" style="height: 50px; width: 50px;">
    </td>
    <td class="">
        <h3 class="item-name">${itemName}</h3>
    </td>
   
    <td class="item-price">
        <h3>${itemPrice}</h3>
    </td>
    
    <td>
        <input class="num" type="number" value="1" style="width: 50px;">
    </td>
    <td class="total-price">
        <h3>${itemPrice}</h3>
    </td>
    <td>
        <button class="remove btn btn-danger" type="button">REMOVE</button>
    </td>`

    mainContainer.append(itemContainer)
    


    // accessing individual quantity fields
    for (let i = 0; i < quantityFields.length; i++){
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', updateTotal)
    }

     //deleting individual quantity fields
     for (let i = 0; i < deleteButton; i++){
        deleteButton[i].addEventListener('click', removeItem)
    }

   
    grandTotal()
    

    
}


//function that multiplies the quantity and the price
function updateTotal(event){
    numberOfItems = event.target;
    quantityParent = numberOfItems.parentElement.parentElement
    priceField = quantityParent.getElementsByClassName('item-price')[0];
    totalField = quantityParent.getElementsByClassName('total-price')[0];
    priceFieldContent = priceField.innerText.replace('$', ' ');
    totalField.children[0].innerText = '$' + numberOfItems.value * priceFieldContent;
    

    
    if(isNaN(numberOfItems.value)||numberOfItems.value <= 0){
        numberOfItems.value = 1
    }
    

    grandTotal()
}


//function that adds up the total number of items
function grandTotal() {
    let total= 0
    let grandTotal = document.getElementsByClassName('grand-total')[0];
    let totalPrice = document.getElementsByClassName('total-price');
    for (let i = 0; i < totalPrice.length; i++){
        allPrices = Number(totalPrice[i].innerText.replace('$', ' '))
        total += allPrices
        
        
    }
    

    console.log(total)
    grandTotal.children[0].innerText = "$" + total
    grandTotal.children[0].style.fontWeight = 'bold'

}


//function to remove item from cart 
function removeItem(event){
    remove_btn = event.target
    remove_btn_grandparent = remove_btn.parentElement.parentElement
    remove_btn_grandparent.remove()
    //grandTotal()

} 

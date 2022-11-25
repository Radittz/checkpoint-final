
// plus quantity
let plusBtn = document.getElementsByClassName('plus');
console.log('test1')
for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
    UpdateCardTotal();
    console.log('test2')
  });
}


// moins quantity
let minusBtn = document.getElementsByClassName('moins');
for (let minus of minusBtn) {
  minus.addEventListener('click', function () {
    if (minus.nextElementSibling.innerText > 0) {
      minus.nextElementSibling.innerText--; 
    }
    UpdateCardTotal();
  });
}


function UpdateCardTotal(){
  let cardPrice = document.getElementsByClassName('price');
  console.log(cardPrice);
  let cardQuantity = document.getElementsByClassName('total_article');
  console.log(cardQuantity);
  let sum = 0
  for (let i=0; i < cardPrice.length; i++) {  
  sum += cardPrice[i].innerText * cardQuantity[i].innerText;
 }
  document.getElementById('price_total').innerText = sum;
}

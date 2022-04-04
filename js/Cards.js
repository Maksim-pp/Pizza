var cardsData = [
{
    imgUrl: "images/pizza-1.jpg",
    price: 450,
    text: "Итальянская Пицца",

},

{
    imgUrl: "images/pizza-2.jpg",
    price: 500,
    text: "Гавайская Пицца",

},

{
    imgUrl: "images/pizza-8.jpg",
    price: 400,
    text: "Греческая Пицца",

},

{
    imgUrl: "images/pizza-4.jpg",
    price: 420,
    text: "Хрустящий Бекон",

},

{
    imgUrl: "images/pizza-5.jpg",
    price: 720,
    text: "Гавайская Специальная",

},

{
    imgUrl: "images/pizza-7.jpg",
    price: 450,
    text: "Бекон Пицца",

}
];

  
let makeElement = function (tagName, className, text) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text;
    }
    return element;
}
  
let cardList = document.querySelector('.goods');  

let  renderCards= function (product) {
    for (let i = 0; i< product.length; i++){
        let ListItem = makeElement('li', 'good');
        let title = makeElement ('h2', 'good__description', product[i].text);
        ListItem.appendChild(title);
    
        let picture = makeElement ('img', 'good__image');
        picture.src = product[i].imgUrl;
        ListItem.appendChild(picture);
    
        let price = makeElement('p', 'good__price', product[i].price,)
        ListItem.appendChild(price);

        cardList.appendChild(ListItem);
    }
}
  
  
let goodList = renderCards(cardsData)
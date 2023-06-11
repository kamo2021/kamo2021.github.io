// shopping-card
const shoppingCard = document.querySelector('.shopping-card');
const closeSpan = document.querySelector('.close-span');
const card = document.querySelector('.card');

card.addEventListener('click', function () {
    shoppingCard.style.display = 'block'
});
closeSpan.addEventListener('click', function () {
    shoppingCard.style.display = 'none'
});

document.addEventListener('click', function () {
    const shop = document.querySelector('.card');
    const shopping = document.querySelector('.shopping')
    let cardProduct = document.getElementsByClassName('shop');

    const buyproduct = [...cardProduct];
    console.log(buyproduct);

    buyproduct.forEach(function (val) {
        let buyproductchild = Array.from(val.children);
        console.log(buyproductchild);
        let productItem = document.createElement('div');
        shopping.innerHTML += `
        <div class='buyitem'>
            <img src='${buyproductchild[0].currentSrc}' class='shop-img' />
            <p class='shop-price'>${buyproductchild[2].innerHTML}</p>
            <p class='shop-title'>${buyproductchild[1].innerHTML}</p>
            <button class='del'>Delete</button>
        </div>
        `
        shoppingCard.appendChild(productItem);
        
    })

    buyproduct[0].classList.remove('shop');
    let shopPrice = document.getElementsByClassName('shop-price');
    let cardPrice = [...shopPrice];
    console.log(cardPrice);

    // delete 
    let dele = document.getElementsByClassName('del');
    let delet = [...dele]
    console.log(delet)
    delet.forEach(function (val) {
        val.addEventListener('click', () => {
            val.parentElement.remove();
        })
    });

    let buyitem = document.getElementsByClassName('buyitem');
    let buyitemarr = [...buyitem];
    for(let i = 0; i < buyitemarr.length; i++){
        let it = buyitemarr[i].childNodes[5].innerHTML;
        its = [...it]
        console.log(its);
        console.log(its.toString());
        let mes = document.getElementById('message');
        mes.innerHTML = `<div>${shopping.innerHTML}</div>`
    }
});

console.log(shoppingCard);

const buyBtn = document.getElementById('buy-btn')
buyBtn.addEventListener('click', () => {
    pay.style.display = 'block'
});

const payClose = document.getElementById('pay-close');
payClose.addEventListener('click',() => {
    const pay = document.getElementById('pay');
    pay.style.display = 'none';
});


// shop-card-add
fetch('https://fakestoreapi.com/products')
    .then((data) => {
        return data.json()
    })
    .then((response) => {
        let main = document.querySelector('main');
        let productItem = document.createElement('div');
        productItem.classList.add('product-item')
        response.forEach((val) => {
            productItem.innerHTML += `
            <div class='item'>
                <img src='${val.image}' />
                <p>${val.title.substring(0, 5) + '...'}</p>
                <p>${val.price}</p>
                <p>$</p>
                <button>Add</button>
            </div>
            `
        });
        main.appendChild(productItem);
        var batn = document.getElementsByTagName('button');
        let a = [...batn];
        a.forEach(function (val) {
            val.addEventListener('click', function (event) {
                const item1 = document.getElementsByClassName('item')
                let y = [...item1];
                y.forEach((val) => {
                    val.addEventListener('click', () => {
                        val.classList.add('shop')
                    })
                })
            })
        })
    })
    .catch((error) => {
        console.log(error)
    });
function hideAnimation(){
  document.getElementsByClassName('windowPreloader')[0].style.display = 'none';
}

function showAll(){
  document.getElementsByClassName('wrapperPre')[0].style.display = 'block';
}

setTimeout(hideAnimation, 500);
setTimeout(showAll, 500);

let im1 = 'url(images/11.jpg)';
let n1 = 'Goncearu Igorita';
let im2 = 'url(images/12.jpg)';
let n2 = 'Albot Igor';
let im3 = 'url(images/13.jpg)';
let n3 = 'Kornievski Bogdan';
let im4 = 'url(images/14.jpg)';
let n4 = 'Buga Dumitru';

let mainImg = document.getElementsByClassName('mainImgIm')[0];
let inner = document.getElementsByClassName('inner');
let changeH = document.getElementById('changeH');

for(let i = 0; i < inner.length; i++){
   inner[i].addEventListener('click', e=>{
    if(i==0){
           mainImg.style.backgroundImage = im1;
           changeH.innerHTML = n1;
       }
    if(i==1){
        mainImg.style.backgroundImage = im2;    
        changeH.innerHTML = n2;
    }
    if(i==2){
        mainImg.style.backgroundImage = im3;
        changeH.innerHTML = n3;
    }
    if(i==3){
        mainImg.style.backgroundImage = im4;
        changeH.innerHTML = n4;
    }
   })
}

let ro = document.getElementById('ro');
let en = document.getElementById('en');

ro.addEventListener('click', e=>{
    localStorage.setItem('lang', 'ro');
    location.reload();
})

en.addEventListener('click', e=>{
    localStorage.setItem('lang', 'en');
    location.reload();
})

let show1 = document.getElementById('show1');
let show2 = document.getElementById('show2');

if(localStorage.lang == 'en'){
    let en = document.getElementById('en');
    let ro = document.getElementById('ro');
    let imp= document.getElementsByClassName('imp');
    imp[0].appendChild(en);
    imp[1].appendChild(ro);
    document.getElementById('despreNoi').innerHTML = 'ABOUT US';
    let sp = document.getElementsByClassName('sp');
    sp[0].innerHTML = `<a href="#">PREPARED MEALS</a>`;
    sp[1].innerHTML = `<a href="#">INGREDIENTS</a>`;

    show1.innerHTML = `<ul>
    <li><a href="../burgeri/index.html">Burgeri</a></li>
    <li><a href="../sushi/index.html">Sushi</a></li>
    <li><a href="../pizza/index.html">Pizza</a></li>
    <li><a href="../salads/index.html">Salads</a></li>
    <i class="fas fa-times cross"></i>
  </ul>`;
    show2.innerHTML = ` <ul>
    <li><a href="#">Cheese</a></li>
    <li><a href="#">Fruits</a></li>
    <li><a href="#">Vegetables</a></li>
    <i class="fas fa-times cross"></i>
  </ul>`

  document.getElementsByClassName('finalButton')[0].innerHTML = 'BUY';


    document.getElementsByClassName('despreComp')[0].innerHTML = 'About our company';
    document.getElementsByClassName('withText')[0].innerHTML = 'As our main goal we see not only the most fastest delivery, but also to be able to offer fresh and exclusive meals. In our team work only the best chiefs, therefore, we want all our clients to be happy and satisfied!'
    document.getElementsByClassName('despreComp')[1].innerHTML = 'The best month workers';

    let telText = document.getElementsByClassName('telText');
    telText[0].innerHTML = `<h4>Phone: 078645858</h4><h4>Fax: (022)64-58-58</h4>`;
    telText[1].innerHTML = `<h4>Address: Riga 33</h4>`;
    telText[2].innerHTML = `<h4>We work: 24/7</h4>`
}

let cross = document.getElementsByClassName('cross');
let sp = document.getElementsByClassName('sp');
let check1 = 0;
let check2 = 0;



sp[0].addEventListener('click', e=>{
  show1.style.display = 'flex';
  show2.style.display = 'none';
})

sp[1].addEventListener('click', e=>{
  show2.style.display = 'flex';
  show1.style.display = 'none';
})

cross[0].addEventListener('click', e=>{
  show1.style.display = 'none';
})

cross[1].addEventListener('click', e=>{
  show2.style.display = 'none';
})

const bagQuantity = document.getElementsByClassName('indicator')[0];
const totalBagPrice = document.querySelector('.totalBagPrice');
let price = 0;
let n = 0;
let verify = 0;
const bag = document.getElementsByClassName('bag')[0];
let bagProduse = {

};

bag.addEventListener('click', e=>{

  while(true){
  if(n>0 && verify%2==0){
    document.querySelector('.bag-window').style.display = 'block';
    verify++;
    break;
  }

  if(verify%2==1){
    document.querySelector('.bag-window').style.display = 'none';
    verify++;
    break;
  }

}
})


const generateProduct = (urlImg, title, price, id, quantity) =>{
  return `
  <div class="cart" data-id='${id}'>
  <div class="cartInnerImg" style='${urlImg}'>
  </div>
  <div class="cartInnerText">
      <h5 class = 'cartName'>${title}</h3>
      <h5 class = 'cartPrice'>${normalPrice(price)} lei</h3>
  </div>
  <div>
  <i class="fas fa-times cross2"></i>
  <h5 class='colvo'>x${quantity}</h5>
</div>
</div>
  `
};

const printFullPrice = ()=>{
  totalBagPrice.textContent = `Total: ${normalPrice(price)} lei`;
}

const printQuantity = ()=>{
  bagQuantity.textContent = n;
  n>0? bag.classList.add('dop') :  bag.classList.remove('dop');
}

const deleteProducts = (product)=>{
  price-= parseInt(product.querySelector('.cartPrice').textContent);
  printFullPrice();
  product.remove();
  n -= parseInt(product.querySelector('.colvo').textContent[1]);
  localStorage.setItem('quantityTotal', n);
  printQuantity();
  delete bagProduse[`${product.dataset.id}`];
  localStorage.setItem('bagProduse', JSON.stringify(bagProduse));
  localStorage.setItem('priceTotal', price);
  if(!document.querySelector('.purchased').children.length){
    document.querySelector('.bag-window').style.display = 'none';
  }
}   

const priceWithoutSpaces = str=>{
  return str.replace(/\s/g, '');
}

const normalPrice = str=>{
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

document.querySelector('.purchased').addEventListener('click', e=>{
  if(e.target.classList.contains('cross2')){
    console.log(e.target.closest('.cart'));
    deleteProducts(e.target.closest('.cart'));
  }
})

if(parseInt(localStorage.getItem('quantityTotal'))>0){
  let obj = JSON.parse(localStorage.getItem('bagProduse'));
  bagProduse = obj;
  price = parseInt(localStorage.getItem('priceTotal'));
  n = parseInt(localStorage.getItem('quantityTotal'));
  printFullPrice();
  bagQuantity.textContent = parseInt(localStorage.getItem('quantityTotal'));
  bag.classList.add('dop');
  for(let fee in obj){
    document.querySelector('.purchased').insertAdjacentHTML('afterbegin', generateProduct(obj[fee].linkUrl, obj[fee].name, obj[fee].productPrice, fee, obj[fee].quantity));
  }
}
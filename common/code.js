

function hideAnimation(){
  document.getElementsByClassName('windowPreloader')[0].remove();
}

setTimeout(hideAnimation, 500);


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

let cross = document.getElementsByClassName('cross');
let show1 = document.getElementById('show1');
let show2 = document.getElementById('show2');
let sp = document.getElementsByClassName('sp');
let check1 = 0;
let check2 = 0;
ro.addEventListener('click', e=>{
    localStorage.setItem('lang', 'ro');
    location.reload();
  
  })
  
  en.addEventListener('click', e=>{
    localStorage.setItem('lang', 'en');
    location.reload();
  
  })

  if(localStorage.getItem('lang') == 'en'){
    let en = document.getElementById('en');
    let ro = document.getElementById('ro');
    let imp= document.getElementsByClassName('imp');
    imp[0].appendChild(en);
    imp[1].appendChild(ro);
    document.getElementById('despreNoi').innerHTML = 'ABOUT US';
    sp[0].innerHTML = '<a href="#">PREPARED MEALS</a>';
    sp[1].innerHTML = '<a href="#">INGREDIENTS</a>';
    show1.innerHTML = `<ul>
    <li><a href="../burgeri/index.html">Burgers</a></li>
    <li><a href="../sushi/index.html">Sushi</a></li>
    <li><a href="../pizza/index.html">Pizza</a></li>
    <li><a href="../salads/index.html">Salads</a></li>
    <i class="fas fa-times cross"></i>
  </ul>`; 
    show2.innerHTML = ` <ul>
    <li><a href="../cheese/index.html">Cheese</a></li>
    <li><a href="../fruits/index.html">Fruits</a></li>
    <li><a href="../vegetables/index.html">Vegetables</a></li>
    <i class="fas fa-times cross"></i>
  </ul>`

  document.getElementsByClassName('finalButton')[0].innerHTML = 'BUY';

  const innerCumpara = document.getElementsByClassName('innerCumpara');
  for(let i = 0; i < innerCumpara.length; i++){
      innerCumpara[i].innerHTML = 'BUY';  
  }

  let telText = document.getElementsByClassName('telText');
  telText[0].innerHTML = `<h4>Phone: 078645858</h4><h4>Fax: (022)64-58-58</h4>`;
  telText[1].innerHTML = `<h4>Address: Riga 33</h4>`;
  telText[2].innerHTML = `<h4>We work: 24/7</h4>`;

  }

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
  

  const innerCumpara = document.querySelectorAll('.innerCumpara');
  const innerProduct = document.querySelectorAll('.innerProduct');
  const bag = document.getElementsByClassName('bag')[0];
  const bagQuantity = document.getElementsByClassName('indicator')[0];
  const totalBagPrice = document.querySelector('.totalBagPrice');
  let price = 0;
  
  const randomId = () =>{
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
  }

  const priceWithoutSpaces = str=>{
    return str.replace(/\s/g, '');
  }

  const normalPrice = str=>{
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }

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

  let n = 0;
  let verify = 0;
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

  const plusFullPrice = (currentPrice)=>{
    return price+=currentPrice;
  };

  const minusFullPrice = (currentPrice) =>{
    return price-=currentPrice;
  }

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
    if(n == 0){
      bagQuantity.style.display = 'none';
    }
  }                                           

  innerCumpara.forEach(el=>{                                
    el.addEventListener('click', e=>{
      let self = e.currentTarget;
      let parent = self.closest('.innerProduct');
      let id = parent.dataset.id;
      let imgURL = parent.querySelector('.asImg').getAttribute('style');
      let productPrice = parent.querySelector('.productPrice').textContent;
      let productTitle = parent.querySelector('.productTitle').textContent;
      let priceNumber = parseInt(priceWithoutSpaces( parent.querySelector('.productPrice').textContent));
      bagQuantity.style.display = 'block';

      if(document.querySelector('.purchased').querySelector(`.cart[data-id='${id}']`)){
        document.querySelector('.purchased').querySelector(`.cart[data-id='${id}']`).querySelector('.cartPrice').textContent = `${normalPrice(parseInt(document.querySelector('.purchased').querySelector(`.cart[data-id='${id}']`).querySelector('.cartPrice').textContent) + priceNumber)} lei`;
        document.querySelector('.purchased').querySelector(`.cart[data-id='${id}']`).querySelector('.colvo').textContent = `x${parseInt(document.querySelector('.purchased').querySelector(`.cart[data-id='${id}']`).querySelector('.colvo').textContent[1])+1}`;
        plusFullPrice(priceNumber);
        printFullPrice();
        n++;
        localStorage.setItem('quantityTotal', n);
        printQuantity();
        bagProduse[`${id}`].quantity+=1;
        bagProduse[`${id}`].productPrice+=priceNumber;
        localStorage.setItem('bagProduse', JSON.stringify(bagProduse));
        localStorage.setItem('priceTotal', price);
      }
      else{
      plusFullPrice(priceNumber);
      printFullPrice();
      document.querySelector('.purchased').insertAdjacentHTML('afterbegin', generateProduct(imgURL, productTitle, priceNumber, id, 1));
      bagProduse[`${id}`] = {
        linkUrl: imgURL,
        name: productTitle,
        quantity: 1,
        productPrice: priceNumber
      }
      localStorage.setItem('bagProduse', JSON.stringify(bagProduse));
      localStorage.setItem('priceTotal', price);
      n++;
      localStorage.setItem('quantityTotal', n);
      printQuantity();
    }
    });
  });

  document.querySelector('.purchased').addEventListener('click', e=>{
    if(e.target.classList.contains('cross2')){
      deleteProducts(e.target.closest('.cart'));
    }
  })

  if(parseInt(localStorage.getItem('quantityTotal'))>0){
    let obj = JSON.parse(localStorage.getItem('bagProduse'));
    bagProduse = obj;
    price = parseInt(localStorage.getItem('priceTotal'));
    n = parseInt(localStorage.getItem('quantityTotal'));
    if(n>0){
      bagQuantity.style.display = 'block';
    }
    printFullPrice();
    bagQuantity.textContent = parseInt(localStorage.getItem('quantityTotal'));
    bag.classList.add('dop');
    for(let fee in obj){
      document.querySelector('.purchased').insertAdjacentHTML('afterbegin', generateProduct(obj[fee].linkUrl, obj[fee].name, obj[fee].productPrice, fee, obj[fee].quantity));
    }
  }


let x, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("customSelect");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


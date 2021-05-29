function hideAnimation(){
    document.getElementsByClassName('windowPreloader')[0].style.display = 'none';
  }
  
  function showAll(){
    document.getElementsByClassName('wrapperPre')[0].style.display = 'block';
  }
  
  setTimeout(hideAnimation, 500);
  setTimeout(showAll, 500);
let btn = document.getElementsByClassName('btn')[0];
let inputPhone = document.getElementById('inputPhone');
let inputName = document.getElementById('inputName');
let inputAddress = document.getElementById('inputAddress');

const randomId = () =>{
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
  }

if(localStorage.getItem('lang') == 'en')
document.getElementsByTagName('h4')[0].innerHTML = 'Fill in data for your order'

btn.addEventListener('click', e=>{
    let ver = 0;
    let name = inputName.value.replace(/\s/g, '').trim();
    for(let i = 0; i < name.length; i++){
        if(!isNaN(parseInt(name[i]))){
            ver = 1;
            if(localStorage.getItem('lang') == 'ro')
            alert('Ati intrdus cifra in nume');
            else
            alert(`You've introduced number in name's field`)
            break;
        }
    }
    let phone = inputPhone.value.replace(/\s+/g, '').trim();
    if(phone.length>0){
    if(isNaN(parseInt(phone)) || (phone.length!=8 && phone.length!=9)){
        if(localStorage.getItem('lang') == 'ro')
        alert('Ati introdus caractere la numar sau numarul nu e de lungime adecvata');
        alert(`You've put in letters in phonenumber's field or phonenumber contains wrong number of characters`);
        ver = 1;
    }
    }

    if(ver!=1 && name!='' && phone!='' && inputAddress.value!='' && localStorage.getItem('bagProduse')){
        let bag = JSON.parse(localStorage.getItem('bagProduse'));
        let priceTotal = localStorage.getItem('priceTotal');
        let quantityTotal = localStorage.getItem('quantityTotal');

        let client = {

        };
    
        for(let produs in bag){
            client.name = inputName.value;
            client.phoneNumber = phone;
            client.address = inputAddress.value;
            client[`${produs}`] = bag[produs].quantity;
            client.priceTotal = priceTotal;
            client.quantityTotal = quantityTotal;
        }

        localStorage.setItem(`client${randomId()}`, JSON.stringify(client));

        localStorage.removeItem('bagProduse');
        localStorage.removeItem('priceTotal');
        localStorage.removeItem('quantityTotal');

        if(localStorage.getItem('lang') == 'ro')
        alert('Ați făcut comanda cu succes!')
        else
        alert(`Your order is received successfully!`)
    }
    else{
        if(localStorage.getItem('lang') == 'ro')
        alert('Verificați datele inca o data\nFiti sigur că in coș sunt produse');
        else
        alert('Verify introduced data one more time\nBe sure that basket has some products')
    }


})
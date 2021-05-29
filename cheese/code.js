    let seli = document.getElementById('seli'); 
    let sameAsSelected = document.getElementsByClassName('select-items')[0].getElementsByTagName('div');
    let allStuff = document.getElementsByClassName('allStuff')[0];
    
    function insertAfter(elem, refElem){
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }
    
    function nameAZ(){
        for(let i = 0; i < allStuff.children.length; i++){
            for(let j = i; j < allStuff.children.length; j++){
                if(allStuff.children[i].getAttribute('data-id')[0] > allStuff.children[j].getAttribute('data-id')[0]){
                    replacedNode = allStuff.replaceChild(allStuff.children[j], allStuff.children[i]);
                    insertAfter(replacedNode, allStuff.children[i]);
                }
            }
        }
    }
    
    window.addEventListener('click', e=>{
    
        if(e.target == sameAsSelected[0]){
          nameAZ();
        }
        if(e.target == sameAsSelected[1]){
          for(let i = 0; i < allStuff.children.length; i++){
            for(let j = i; j < allStuff.children.length; j++){
                if(allStuff.children[i].getAttribute('data-id')[0] < allStuff.children[j].getAttribute('data-id')[0]){
                    replacedNode = allStuff.replaceChild(allStuff.children[j], allStuff.children[i]);
                    insertAfter(replacedNode, allStuff.children[i]);
                }
            }
        }
        }
        if(e.target == sameAsSelected[2]){
          for(let i = 0; i < allStuff.children.length; i++){
            for(let j = i; j < allStuff.children.length; j++){
                if(parseInt(allStuff.children[i].getAttribute('data-price')) > parseInt(allStuff.children[j].getAttribute('data-price'))){
                    replacedNode = allStuff.replaceChild(allStuff.children[j], allStuff.children[i]);
                    insertAfter(replacedNode, allStuff.children[i]);
                }
            }
        }
        }
        if(e.target == sameAsSelected[3]){
          for(let i = 0; i < allStuff.children.length; i++){
            for(let j = i; j < allStuff.children.length; j++){
                if(parseInt(allStuff.children[i].getAttribute('data-price')) < parseInt(allStuff.children[j].getAttribute('data-price'))){
                    replacedNode = allStuff.replaceChild(allStuff.children[j], allStuff.children[i]);
                    insertAfter(replacedNode, allStuff.children[i]);
                }
            }
        }
        }
    })

    if(localStorage.lang == 'en'){
        const ceiGustosi = document.getElementsByClassName('ceiGustosi')[0];
        ceiGustosi.innerHTML = 'Cheese for exquisite people';
    }
//SELECIONA A UL
const ulList = document.querySelector('.itensList');

//CRIA LI 
function creatLI(element){
    const li = document.createElement('li');
    li.innerHTML = `${element}`;
    return li;
}

//CRIA O HTML DOS INTES DA LOJA;
function creatElementHTMLStore(produtoImg, produtoCategoria, produtoNome, produtoDescricao, produtoPreco, produtoID){

    const element  = `
            <div class="imgProduct">
                <img src="${produtoImg}" alt="${produtoNome}">
            </div>   
            <div class="descriptionCard">
                <span id="productCategory">${produtoCategoria}</span>
                <h2 id="productName">${produtoNome}</h2>
                <p id="productDescription">${produtoDescricao}</p>
                <span id="productPrice">R$${produtoPreco},00</span>
                <p id=" ${produtoID}" class="addCart">Adicionar ao carrinho</p>
            </div>
        `
    return element;
}

//LOOP PARA ADICIONAR OS ELEMENTOS NA LOJA
function addElemenStoreInDoom(){
    for(let obeject of data){
        ulList.appendChild(creatLI(creatElementHTMLStore(obeject.img, obeject.tag, obeject.nameItem, obeject.description, obeject.value, obeject.id)))
    }
}
addElemenStoreInDoom();




//ADICIONAR ITENS AO CARRINHO
//SELECIONA UL DO CARRINHO 
const ulCart = document.querySelector('.cartList');

//INICIA O ARRAY DO CARRINHO
const carArray = [];

//SELECIONA O BTN "ADICIONAR NO CARRINHO"
const btnAddToCart = ulList.querySelectorAll(".addCart");

//ADCIONA O EVENTO DE CLIQUE NO BTN
function eventAddItemOnCart(){

    btnAddToCart.forEach((element, i) => {

        element.addEventListener('click', (el)=>{
            const indice = Number(el.target.id) - 1;
            addItemArrayCart(indice);
            ulCart.appendChild(creatLIFromCart(creatElementHTMLCart(data[indice].img, data[indice].nameItem, data[indice].value)));
            cartWithItemOrNoteItem();
        })
    });
    
}

eventAddItemOnCart();

function addItemArrayCart(el){
    carArray.push(data[el]);
}

//FUNÇÃO PARA CRIAR O HTML DO ITEM DO CARRINHO 
function creatElementHTMLCart(productImg, productName, productPrice){
    
    const element = `<div class="imgItemCart">
                        <img src="${productImg}" alt="${productName}">
                    </div>
                    <div class="infoItemCart">
                        <h4 id="nameProductCart">${productName}</h4>
                        <p id="priceProductCart">R$${productPrice},00</p>
                        <p id="removeProductCart">Remover produto</p>
                    </div>
                    <div class="quantyCartItens">
                        <button id="more">+</button>
                        <p id="quantyNumber">1</p>
                        <button id="sub">-</button>
                    </div> `
    return element;
}

function creatLIFromCart(element){
    const li = document.createElement('li');
    li.classList.add("itemCart");
    li.innerHTML = `${element}`;
    return li;
}

//REMOVE O SPAN CASO O CARINHO TENHA ALGUM ITEM;
function cartWithItemOrNoteItem(){
    const li = ulCart.querySelectorAll('li');
    const emptyDiv = ulCart.querySelector('#emptyDiv');
    if(li.length !== 0){
        emptyDiv.style.display = 'none';
    }else{
        emptyDiv.style.display = 'block'
    }
};



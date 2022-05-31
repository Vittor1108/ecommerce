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
let  carArray = [];

//SELECIONA O BTN "ADICIONAR NO CARRINHO"
const btnAddToCart = ulList.querySelectorAll(".addCart");

//ADCIONA O EVENTO DE CLIQUE NO BTN
function eventAddItemOnCart(){
    btnAddToCart.forEach(element => {
        element.addEventListener('click', (el)=>{
            addItemArrayCart(el);
            addItemInUlCart(el);
            cartWithItemOrNoteItem();
            addValueInHTML();
            addQtdInHTML();
            btnMore(el);
        })
    });
    
}

eventAddItemOnCart();

function addItemArrayCart(el){
    const indice = Number(el.target.id) - 1;
    carArray.push(data[indice]);
}

function addItemInUlCart(el){
    const indice = Number(el.target.id) - 1;
    ulCart.appendChild(creatLIFromCart(creatElementHTMLCart(data[indice].img, data[indice].nameItem, data[indice].value, data[indice].id)));
}

//IMPEDIR QUE O MESMO ELEMENTO SEJA ADICIONADO NO CARRINHO


//FUNÇÃO PARA CRIAR O HTML DO ITEM DO CARRINHO 
function creatElementHTMLCart(productImg, productName, productPrice, productId){
    
    const element = `<div class="imgItemCart">
                        <img src="${productImg}" alt="${productName}">
                    </div>
                    <div class="infoItemCart">
                        <h4 id="nameProductCart">${productName}</h4>
                        <p id="priceProductCart">R$${productPrice},00</p>
                        <p class="removeProductCart" id="${productId}">Remover produto</p>
                    </div>`
    return element;
}

function creatLIFromCart(element){
    const li = document.createElement('li');
    li.classList.add("itemCart");
    li.innerHTML = `${element}`;
    return li;
}


//FUNÇÕES PARA REMOVAR O ITEM DO CARRINHO 
document.body.addEventListener('click', e=>{  
    if(e.target.className === "removeProductCart"){
        carArray = removeProductWithCart(carArray, "id", Number(e.target.id));
        removeLICart(e);
        addQtdInHTML();
        addValueInHTML();
        cartWithItemOrNoteItem();
    }
})

function removeLICart(event){
    const elFilho = event.target.parentNode;
    const elPai = elFilho.parentNode;
    return elPai.remove();
}

function removeProductWithCart(arr, prop, value){
    return arr.filter(function(i) { return i[prop] !== value; });
}

//REMOVE O SPAN CASO O CARINHO TENHA ALGUM ITEM;
function cartWithItemOrNoteItem(){
    const li = ulCart.querySelectorAll('li');
    const emptyDiv = ulCart.querySelector('#emptyDiv');
    const qtdUl = document.querySelector('.qtdTotal');
    if(li.length !== 0){
        emptyDiv.style.display = 'none';
        qtdUl.style.display = 'block';
    }else{
        emptyDiv.style.display = 'block';
        qtdUl.style.display = 'none';
    }
}

//FUNÇÕES PARA CALCULAR O PREÇO DO CARRINHO 
function calcValueCart(){
    const total = carArray.reduce((acumulador, valor)=>{
        acumulador += valor.value;
        return acumulador;
    }, 0);

    return total;
}

//ADICIONA O TOTAL NO HTML 
function addValueInHTML(){
    const value = document.querySelector('#valor');
    return value.innerHTML = `R$${calcValueCart()},00`;
}

function addQtdInHTML(){
    const qtd = document.querySelector("#qtd");
    return qtd.innerHTML = `${calcQtdCart()}`;
}

//FUNÇÕES PARA CALCULAR A QUANTIDADE DE ITENS NO CARRINHO 
function calcQtdCart(){
    const total = carArray.reduce((acumulador, valor)=>{
        acumulador += 1;
        return acumulador;
    }, 0);

    return total;
} 

//Botões mais e menos 
function btnMore(element){
    const more = document.querySelectorAll("#more");
    const qtd = document.querySelector("#qtd");
    more.forEach(element =>{
        element.addEventListener("click", ()=>{
            
        })
    })
}
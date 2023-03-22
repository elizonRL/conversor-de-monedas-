/*
    Tomando los Datos Del DOM 
*/ 
const formInput = document.getElementById('form');
const euro = document.getElementById('euro');
const td1 = document.getElementById('td1');
const td2 = document.getElementById('td2');
const td3 = document.getElementById('td3');
const error = document.getElementById('error');


function convertirMonedas(event){
    
    if(euro.value.length <= 0){
        error.innerText= "Ingrese La CANTIDAD DE NOMENDAS";
        //euro.focus()
        euro.className = 'errorBorde'
    }else{
        const euroFloat = parseFloat(euro.value);
        td1.innerText = euroDolar(euroFloat);
        td2.innerText = euroDom(euroFloat);
        td3.innerText = euroMx(euroFloat);
    }
    
    event.preventDefault();
    
}
function euroDolar(euroFloat){
    let dolar = euroFloat * 1.07362;
    return dolar
}
function euroDom(euroFloat){
    let pesoDom = euroFloat * 59.0295;
    return pesoDom
}
function euroMx(euroFloat){
    let pesoMX = euroFloat * 19.9664;
    return pesoMX
}

formInput.addEventListener('submit', convertirMonedas);

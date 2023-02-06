//nimbre
let nombre=document.querySelector("#name")
let nombreCard=document.querySelector("#nombreCard")

nombre.addEventListener("input",()=>{
    if(nombre.value!=""){
        nombreCard.textContent=nombre.value
    }
    else{
        nombreCard.textContent="Jane Appleseed"
    }
})

//numero

let numerosCard=document.querySelector("#numerosCard")
let numeros=document.querySelector("#cardNumber")

numeros.addEventListener("input",()=>{
    if(numeros.value!=""){
        let numerosFinal=numeros.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
        numerosCard.textContent=numerosFinal
    }
    else{
        numerosCard.textContent="0000 0000 0000"
    }
})

//exp date

let mes=document.querySelector("#mes")
let mesCard=document.querySelector("#mesCard")

mes.addEventListener("input",()=>{
    if(mes.value!=""){
        mesCard.textContent=mes.value
    }
    else{
        mesCard.textContent="00"
    }
})

let anio=document.querySelector("#anio")
let anioCard=document.querySelector("#anioCard")


anio.addEventListener("input",()=>{
    if(anio.value!=""){
        anioCard.textContent=anio.value
    }
    else{
        anioCard.textContent="00"
    }
})

//cvc
let cvc=document.querySelector("#cvc")
let cvcCard=document.querySelector("#cvcCard")

cvc.addEventListener("input",()=>{
    if(cvc.value!=""){
        cvcCard.textContent=cvc.value
    }
    else{
        cvcCard.textContent="000"
    }
})

//confirm

let btn=document.querySelector("#btn-form")

btn.addEventListener("click",(event)=>{
    event.preventDefault() 
    let error=0
    if (nombre.value===""){
        document.querySelector("#errorName").textContent="Can't be blank"
        error++
    }
    if(parseInt(numeros.value)){
        document.querySelector("#errorNumber").textContent=""
    }
    else{
        document.querySelector("#errorNumber").textContent="Wrong format, numbers only"
        error++
    } 
    if(numeros.value.length!==16){
        document.querySelector("#errorNumber").textContent="Must be 16 digits"
        error++
    }
    
    if(numeros.value===""){
        document.querySelector("#errorNumber").textContent="Can't be blank"
        error++
    }
   
    if (mes.value===""){
        document.querySelector("#errorMes").textContent="Can't be blank"
        error++
    }
    if (anio.value===""){
        document.querySelector("#errorAnio").textContent="Can't be blank"
        error++
    }
    if (cvc.value===""){
        document.querySelector("#errorCvc").textContent="Can't be blank"
        error++
    }
    if (error===0){
        document.querySelector("#resp").innerHTML=`
        <img class="tksImg" src="./assets/images/icon-complete.svg" alt="tks">
        <h2 class="tks">THANK YOU!</h2>
        <p class="subTks">We've added your card details</p>
        <input id="btn-continue" class="btn-form" type="submit" value="Continue" />
        
        `
    }
    console.log(error)
    
})
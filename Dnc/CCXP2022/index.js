const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');


const lancamento = "31 dec 2023"

function countDown(){
    const dataLanc = new Date(lancamento);
    const hoje = new Date()

    const segTotal = (dataLanc - hoje) / 1000;

    const dias = Math.floor((segTotal / 3600 / 24));
    const horas = Math.floor((segTotal / 3600) % 24);
    const minutos = Math.floor(segTotal / 60) % 60;
    const segundos = Math.floor(segTotal % 60);

    dia.innerHTML = `<strong>${dias}D</strong>`
    hora.innerHTML = `<strong>${horas}M</strong>`
    minuto.innerHTML = `<strong> ${minutos}H</strong>`
    segundo.innerHTML = `<strong>${segundos}S</strong>`


}
countDown();
setInterval(countDown, 1000);


function highlightCard(selector)
{
    var Element =  document.querySelector(selector);
    Element.classList.toggle("card-highlight");
}


function addKey()
{
    document.addEventListener('keydown', (event) => {
    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");

    var code = event.code;
    if (code == 'Digit1'){
        ingresso1.classList.toggle("card-highlight")
        ingresso2.classList.remove("card-highlight")
        ingresso3.classList.remove("card-highlight")
        ingresso4.classList.remove("card-highlight")
    }

     if (code == 'Digit2'){
        ingresso1.classList.remove("card-highlight")
        ingresso2.classList.toggle("card-highlight")
        ingresso3.classList.remove("card-highlight")
        ingresso4.classList.remove("card-highlight")
    }

     if (code == 'Digit3'){
        ingresso1.classList.remove("card-highlight")
        ingresso2.classList.remove("card-highlight")
        ingresso3.classList.toggle("card-highlight")
        ingresso4.classList.remove("card-highlight")
    }

     if (code == 'Digit4'){
        ingresso1.classList.remove("card-highlight")
        ingresso2.classList.remove("card-highlight")
        ingresso3.classList.remove("card-highlight")
        ingresso4.classList.toggle("card-highlight")
    }
},false)
}

addKey();
const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');


const lancamento = "31 dec 2023"

function countDown(){
    const dataLanc = new Date(lancamento);
    const hoje = new Data();

    const segTotal = (dataLanc - hoje) / 1000;

    const dias = Math.floor(segTotal / 3600 / 24);
    const horas = Math.floor((segTotal / 3600) % 24);
    const minutos = Math.floor((segTotal / 60) % 60);
    const segundos = Math.floor(segTotal % 60);


}

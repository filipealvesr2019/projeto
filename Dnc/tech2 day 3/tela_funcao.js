var maioridade 
function maioridade(){
    var sim = document.getElementById('Sim')
    var nao = document.getElementById('Nao')

   
   
    if (sim !== nao){
        var sim = document.getElementById('sim')
        sim.src = "tela_escolha.html"

    }else{
        var maioridade = document.getElementById('nao')
        nao.src = "resultado.html"
    }



}
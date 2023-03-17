function maioridade(){
    var sim = document.getElementById('Sim')
    var nao = document.getElementById('Nao')

   
   
    if (nao !== sim){
        var sim = document.getElementById('pagina2')
        sim.src = "tela_escolha.html"

    }else{
        var maioridade = document.getElementById('nao')
        nao.src = "resultado.html"
    }



}
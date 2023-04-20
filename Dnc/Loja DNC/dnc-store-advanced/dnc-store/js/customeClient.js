function alterarCards(){
    var cards = document.getElementsByClassName("card-produto")
    cards = Array.from(cards);

    for(let i = 0; i < cards.length; i++){
        cards[i].classList.toggle('card-produto-destaque');
    }
}


setInterval(alterarCards, 1500);
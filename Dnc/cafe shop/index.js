function showButton(card){
    var button = card.querySelector("button");
    button.classList.remove('hidden');
}


function hideButton(card){
    var button = card.querySelector("button");
    button.classList.add('hidden');
}
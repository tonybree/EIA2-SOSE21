const signs: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y']; 

window.addEventListener('load', e => {
    handleLoad();
});

function handleLoad() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let cardAmount = urlParams.get('cardAmount');
    processCardAmount(cardAmount);
    setCardSigns(cardAmount);

    let cardSize = urlParams.get('cardSize');
    let cardColor = urlParams.get('cardColor');
    let fieldColor = urlParams.get('fieldColor');
    let fontColor = urlParams.get('fontColor');
    let font = urlParams.get('font');

}

function processCardAmount(_cardAmount:number){
    let cards = document.getElementsByClassName('card');
    while (cards.length != _cardAmount) {
        cards[cards.length - 1].remove();
    }
}

function setCardSigns(_cardAmount:number) {
    let reducedSigns = signs;
    while(reducedSigns.length != _cardAmount / 2) {
        reducedSigns.splice(randomIndex(reducedSigns.length),1);
    }
    let doubledSigns = reducedSigns.concat(reducedSigns);
    console.log(doubledSigns);
    for (let i=0; i<doubledSigns.length; i++){
        let newIndex = randomIndex(doubledSigns.length);
        let valueNewIndex = doubledSigns[newIndex];
        doubledSigns[newIndex] = doubledSigns[i];
        doubledSigns[i] = valueNewIndex;
    }
    let cards = document.getElementsByClassName('card');
    for (let i=0; i<cards.length; i++){
        cards[i].firstElementChild!.innerHTML = doubledSigns[i];
    }
}

function randomIndex(_arrayLength:number){
    return Math.trunc(Math.random() * _arrayLength);
}




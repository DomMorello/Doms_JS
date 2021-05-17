var rivalHero = document.getElementById('rival-hero');
var myHero = document.getElementById('my-hero');
var rivalDeck = document.getElementById('rival-deck');
var myDeck = document.getElementById('my-deck');
var rivalDeckData = [];
var myDeckData = [];
var rivalHeroData;
var myHeroData;

function rivalDeckCreate(cnt) {
    for (var i = 0; i < cnt; i++) {
        rivalDeckData.push(cardFactory());
    }
    rivalDeckData.forEach(function(data) {
        var card = document.querySelector('.class-hidden .card').cloneNode(true);
        card.querySelector('.card-cost').textContent = data.cost;
        card.querySelector('.card-att').textContent = data.att;
        card.querySelector('.card-hp').textContent = data.hp;
        rivalDeck.appendChild(card);
    });
}

function myDeckCreate(cnt) {
    for (var i = 0; i < cnt; i++) {
        myDeckData.push(cardFactory());
    }
}

function rivalHeroCreate() {
    rivalHeroData = cardFactory(true);
    var card = document.querySelector('.class-hidden .card').cloneNode(true);
    card.querySelector('.card-cost').textContent = rivalHeroData.cost;
    card.querySelector('.card-att').textContent = rivalHeroData.att;
    card.querySelector('.card-hp').textContent = rivalHeroData.hp;
    rivalHero.appendChild(card);
}

function myHeroCreate() {
    myHeroData = cardFactory(true);
    var card = document.querySelector('.class-hidden .card').cloneNode(true);
    card.querySelector('.card-cost').textContent = myHeroData.cost;
    card.querySelector('.card-att').textContent = myHeroData.att;
    card.querySelector('.card-hp').textContent = myHeroData.hp;
    myHero.appendChild(card);
}

function setting() {
    rivalDeckCreate(5);
    myDeckCreate(5);
    rivalHeroCreate();
    myHeroCreate();
}

function Card() {
    this.att = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = Math.floor((this.att + this.hp) / 2);
}

function cardFactory() {

    return new Card();
}

setting();
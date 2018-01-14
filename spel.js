var modal = document.getElementById('simpleModal');

/*Loops through all elements with same class and prompts function if mouseover*/
var map = document.getElementsByClassName('cls-1');

for (var i = 0; i < map.length; i++){
    var item = map[i];
    item.addEventListener('mouseover', openModal);
}
/*Temporary function to close modal and opacity background*/
var playAgainBtn = document.getElementById('playAgainBtn');
var quitBtn = document.getElementById('quitBtn');

playAgainBtn.addEventListener('click', closeModal);
quitBtn.addEventListener('click', closeModal);


/*Open modal function*/
function openModal(){
    modal.style.display = 'flex';
}

/*Close modal function*/
function closeModal() {
    modal.style.display = 'none';
    location.reload();
}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
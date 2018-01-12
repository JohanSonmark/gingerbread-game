var modal = document.getElementById('simpleModal');
var map = document.getElementsByClassName('map')[0];
var playAgainBtn = document.getElementById('playAgainBtn');
var quitBtn = document.getElementById('quitBtn');


/*Temporary button to open modal and opacity background*/
map.addEventListener('mouseover', openModal);

/*Temporary function to close modal and opacity background*/
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
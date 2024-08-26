const userId=localStorage.getItem('userChoice');
const compId=localStorage.getItem('computerChoice');

const store={
    Paper:'Img/paper.png',
    Scissor: 'Img/scissors.png',
    Stone:'Img/stone.png',
}
// ------------changing the buttons inside image---------------------

// document.getElementById('userChoose').src=store[userId];
// document.getElementById('compChoose').src=store[compId];
if (userId  ==='Paper'){
    document.getElementById('userChoose').src=store[userId];
    document.getElementById('userChoose').style.width = '3rem'
    document.getElementById('userChoose').style.height = '3rem'
    document.getElementById('btnUserChoose').style.border = '14px solid #ffa943'

}
else if (userId  ==='Scissor'){
    document.getElementById('userChoose').src=store[userId];
    document.getElementById('userChoose').style.width = '1.9rem'
    document.getElementById('userChoose').style.height = '2.4rem'
    document.getElementById('btnUserChoose').style.border = '14px solid #bd00ff'

}
else{
    document.getElementById('userChoose').src=store[userId];
    document.getElementById('userChoose').style.width = '2.9rem'
    document.getElementById('userChoose').style.height = '2.4rem'
    document.getElementById('btnUserChoose').style.border = '14px solid #0074b6'

}
if (compId ==='Paper'){
    document.getElementById('compChoose').src=store[compId];
    document.getElementById('compChoose').style.width = '3rem'
    document.getElementById('compChoose').style.height = '3rem'
    document.getElementById('btnCompChoose').style.border = '14px solid #ffa943'
}
else if (compId ==='Scissor'){
    document.getElementById('compChoose').src=store[compId];
    document.getElementById('compChoose').style.width = '1.9rem'
    document.getElementById('compChoose').style.height = '2.4rem'
    document.getElementById('btnCompChoose').style.border = '14px solid #bd00ff'
}
else{
    document.getElementById('compChoose').src=store[compId];
    document.getElementById('compChoose').style.width = '3rem'
    document.getElementById('compChoose').style.height = '2.4rem'
    document.getElementById('btnCompChoose').style.border = '14px solid #0074b6'
}
// ------------------------functionality to the replay button ----------------------

// const playAgaing=document.getElementsByClassName('playAgain');
function openNewPage() {
    window.close();
    window.location.href="index.html";
}

// -------------------------------Function to move to Hyrray Page------------------------
function openHurrayPage() {
    // window.close();

    window.location.href="hurray.html";
}
function showRules(){
    console.log('button clicked')
    document.getElementById('imgRules').style.display="block";
    document.getElementById('cross').style.display="block";
}
function hideRules(){
    document.getElementById('cross').style.display="none";
    document.getElementById('imgRules').style.display="none";
}
//----------- To change the scoreBoard of playerWin---------------
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('playerwinUser').innerHTML=sessionStorage.getItem('userScore');
    document.getElementById('playerWinComp').innerHTML=sessionStorage.getItem('compScore');
})

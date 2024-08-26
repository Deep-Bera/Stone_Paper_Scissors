const   choicebtn = document.querySelectorAll(".btn")
   let userChoice;
   let computerChoice;
   if (sessionStorage.getItem('userScore')===null){
      sessionStorage.setItem('userScore',0)
   }
   if (sessionStorage.getItem('compScore')===null){
      sessionStorage.setItem('compScore',0)
   }
   let userScore=Number(sessionStorage.getItem('userScore'));
   let compScore=Number(sessionStorage.getItem('compScore'));
   let check1;
   // ------------------------Storing the User Choice -------------------------
   choicebtn.forEach((choice)=>{
       choice.addEventListener('click',()=>{
           userChoice=choice.getAttribute("id"); 
           localStorage.setItem('userChoice', userChoice)
           console.log(userChoice);
           compChoice();
           result(userChoice,computerChoice)
       })
   })
// ----------------------------generating a random choice of the computer--------------------------------
 const compChoice=()=>{
    const compOption=['Stone','Paper','Scissor'];
    computerChoice=compOption[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    localStorage.setItem('computerChoice', computerChoice)   
 }
//  --------------------------Checking the condition to know who wins--------------------------------
const result=(userChoice,computerChoice)=>{
 if (userChoice === computerChoice){
   window.open('matchTie.html');
 }
 else if(userChoice==="Paper"&& computerChoice==="Stone"){
    console.log('you win');
    userScore=userScore+1;
    sessionStorage.setItem('userScore',userScore);
    document.getElementById('userScore').innerText=sessionStorage.getItem('userScore');
    window.open('playerWin.html');
   //  console.log(sessionStorage.getItem('userScore'))
 }
 else if(userChoice==="Scissor"&& computerChoice==="Paper"){
    console.log('you win');
    userScore=userScore+1;
    sessionStorage.setItem('userScore',userScore);
    document.getElementById('userScore').innerText=sessionStorage.getItem('userScore');
    window.open('playerWin.html','_blank');
   //  console.log(sessionStorage.getItem('userScore'));
 }
 else if(userChoice==="Stone"&& computerChoice==="Scissor"){
    console.log('you win');
    userScore=userScore+1;
    sessionStorage.setItem('userScore',userScore);
    document.getElementById('userScore').innerText=sessionStorage.getItem('userScore');
    window.open('playerWin.html','_blank');
 }
 else if(userChoice==="Paper"&& computerChoice==="Scissor"){
    console.log('you Lose');
    compScore=compScore+1;
    sessionStorage.setItem('compScore',compScore);
    document.getElementById('compScore').innerText=sessionStorage.getItem('compScore');
    console.log(sessionStorage.getItem('compScore'));
    window.open('cpuWin.html','_blank');
 }
 else if(userChoice==="Scissor"&& computerChoice==="Stone"){
    console.log('you Lose');
    compScore=compScore+1;
    sessionStorage.setItem('compScore',compScore);
    document.getElementById('compScore').innerText=sessionStorage.getItem('compScore');
    console.log(sessionStorage.getItem('compScore'));
    window.open('cpuWin.html','_blank');
    
 }
 else{
   compScore=compScore+1;
   sessionStorage.setItem('compScore',compScore);
    document.getElementById('compScore').innerText=sessionStorage.getItem('compScore');
    console.log(sessionStorage.getItem('compScore'));
    window.open('cpuWin.html','_blank');
   // console.log(sessionStorage.getItem('compScore'))

 }
}
// ------------------ to show the value even after refresh the page------------
window.onload=()=>{ 

   document.getElementById('userScore').innerText=sessionStorage.getItem('userScore');
   // console.log('user score now is : ',sessionStorage.getItem('userScore'));
   document.getElementById('compScore').innerText=sessionStorage.getItem('compScore');
   // console.log('computer score now : ',sessionStorage.getItem('compScore'));

}

function hideRules(){
   document.getElementById('cross').style.display="none";
   document.getElementById('imgRules').style.display="none";
}

function showRules(){
   document.getElementById('imgRules').style.display="block";
   document.getElementById('cross').style.display="block";
}
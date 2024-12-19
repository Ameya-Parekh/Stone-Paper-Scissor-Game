let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const finaluserscore = document.querySelector('#user-score');
const finalcomputerscore = document.querySelector('#computer-score');

const gencompchoice=()=>{
    const options = ["rock","paper","scissors"]; 
    const randomindx = Math.floor(Math.random()*3);
    return options[randomindx];
}

const DrawGame=()=>{
    msg.innerText="Draw!!"
    msg.style.backgroundColor="yellow";
    msg.style.color="red";
}

const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++
        finaluserscore.innerHTML=userscore;
        msg.innerText=`Congratulations you won!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        
    }else{
        computerscore++
        finalcomputerscore.innerHTML=computerscore
        msg.innerText=`Oops! you lose Try Again!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}

const playGame = (userChoice)=>{
    console.log("User choice = ",userChoice); 
    const compChoice = gencompchoice();
    console.log("Computer choice = ",compChoice)

    if(userChoice===compChoice){
        DrawGame()
    }else{
        let userwin = true;
        if(userChoice=='rock'){
            userwin = compChoice=="paper"? false:true
        }else if(userChoice=='paper'){
            userwin = compChoice==="scissors"? false:true

        }else{
            userwin = compChoice==="rock"? true:false
        }
        showwinner(userwin,userChoice,compChoice)
        }

    }


choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const id = choice.getAttribute("id")
        //console.log("choice was clicked",id,"!!")
        playGame(id)
    })
})
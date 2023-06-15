const calculate=document.querySelector('#calculate');
const resultReset=document.querySelector('#reset');

calculate.addEventListener('click', calculateBmi);
resultReset.addEventListener('click',reset);

function calculateBmi(){
    let weight = document.querySelector("#weight").value;
    let height= document.querySelector("#height").value;
    let result=weight/Math.pow(height,2);

    document.querySelector("#result").innerText=result.toFixed(2);

    if(result<18.5){
        document.querySelector("#result-status").innerText="Under Weight";
        document.querySelector("#result-status").style.color='#2196f3';
    }
    else if(result>=18.5 && result<25){
        document.querySelector("#result-status").innerText="Normal Weihgt";
        document.querySelector("#result-status").style.color='#43a047';
    }
    else if(result>=25 && result<30){
        document.querySelector("#result-status").innerText="Over Weihgt";
        document.querySelector("#result-status").style.color='#fb8c00';
    }
    else if(result>=30){
        document.querySelector("#result-status").innerText="Obese";
        document.querySelector("#result-status").style.color='#c62828';
    }  
};

function reset() {
    document.querySelector("#weight").value="";
    document.querySelector("#height").value="";
    document.querySelector("#result").innerText='';
    document.querySelector("#result-status").innerText='';  
};


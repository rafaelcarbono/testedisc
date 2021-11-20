let question = document.querySelectorAll(".question");
let questions = [];
let answers = [];
let options = [];
let showq;
let count = 0;
let atual = 1;
let trocar = document.getElementById("trocar");
let iniciar = document.getElementById("iniciar");
let contagem = document.getElementById("count");

while (question[count] != undefined) {
    questions.push(question[count]);
        if(questions[count].hasChildNodes()){
            let qoptions = questions[count].children;
                for (var i = 0; i < qoptions.length; i++) {
                    let option = qoptions[i].firstElementChild;
                    options.push(option);
                }count +=1;
        }
}

function randomQ (min, max){
    contagem.innerHTML = "Questão " + atual + " de 4";
    min = Math.ceil(0);
    max = Math.floor(questions.length);
    showq = Math.floor(Math.random() * (max - min)) + min;
}

function start(){
    randomQ();
    questions[showq].classList.remove("hidden");
    iniciar.classList.remove("iniciar");
    iniciar.classList.add("hidden");
    trocar.classList.remove("hidden");
    trocar.classList.add("trocar");
}

function changeQuestion() {
    atual++;
    questions[showq].classList.add("hidden");
        answers.push(questions[showq]);
        questions.splice(showq, 1);
        randomQ();
        console.log(answers, questions);
        
    if(questions.length > 0){
        questions[showq].classList.remove("hidden");
    }else{
        console.log("finish");
            trocar.classList.remove("trocar");
            trocar.classList.add("hidden");
            contagem.innerHTML = "Acabou!!!";
    }
  }
 
iniciar.onclick = () => {
    start();
}

trocar.onclick = () => {
    changeQuestion();
};

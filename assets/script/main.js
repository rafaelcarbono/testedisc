let question = document.querySelectorAll(".question");
let questions = [];
let answers = [];
let options = [];
let showq;
let count = 0;
let trocar = document.getElementById("trocar");
let iniciar = document.getElementById("iniciar");
let contagem = document.getElementById("count");

class CreatePerfil {
    constructor(name, description, valor) {
        this.name = name;
        this.description = description;
        this.valor = valor;
        this.incre = function(){
            valor = valor + 4;
        }
    }
}

let perfil1 = new CreatePerfil("Diretivo","descrição",0);
let perfil2 = new CreatePerfil("Interativo","descrição",0);
let perfil3 = new CreatePerfil("Social","descrição",0);
let perfil4 = new CreatePerfil("Calculista","descrição",0);

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

    if(questions.length > 1){
        contagem.innerHTML = "Faltam " + questions.length + " questões.";

    }else{
        contagem.innerHTML = "Falta " + questions.length + " questão.";
    }
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

function addPerfil(){
    let nameChoice = questions[showq].id;
    let choice = questions[showq].querySelector('input[name='+ nameChoice + ']:checked');


    perfil1.valor+=1;
    perfil2.valor+=1;
    perfil3.valor+=1;
    perfil4.valor+=1;

    if(choice.value == "option1"){

        perfil1.valor+=4;

    }else if(choice.value == "option2"){
 
        perfil2.valor+=4;


    }else if(choice.value == "option3"){
 
        perfil3.valor+=4;

    }else{
        perfil4.valor+=4;
    }
    
    console.log(perfil1.name, perfil1.valor, perfil2.name, perfil2.valor, perfil3.name, perfil3.valor, perfil4.name, perfil4.valor);

}

function changeQuestion() {

    addPerfil();
    
    questions[showq].classList.add("hidden");
        answers.push(questions[showq]);
        questions.splice(showq, 1);
        randomQ();
        console.log(answers, questions);
        
    if(questions.length > 0){
        questions[showq].classList.remove("hidden");
    }else{

        if(perfil1.valor > Math.max(perfil2.valor,perfil3.valor,perfil4.valor)){
            console.log("Você tem o Perfil " + perfil1.name);
        }else if(perfil2.valor > Math.max(perfil1.valor,perfil3.valor,perfil4.valor)){
            console.log("Você tem o Perfil " + perfil2.name);
        }else if(perfil3.valor > Math.max(perfil1.valor,perfil2.valor,perfil4.valor)){
            console.log("Você tem o Perfil " + perfil3.name);
        }else if(perfil4.valor > Math.max(perfil1.valor,perfil2.valor,perfil3.valor)){
            console.log("Você tem o Perfil " + perfil4.name);
        }

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
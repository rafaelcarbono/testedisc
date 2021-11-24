let questionList = document.querySelectorAll(".question");
let questions = [];
let answers = [];
let showq;
let count = 0;
let choice = null;
let nameChoice = null;

class CreatePerfil {

    constructor(name, description, valor) {

        this.name = name;

        this.description = description;

        this.valor = valor;
    }
}

    let perfil1 = new CreatePerfil("Diretivo","descrição",0);

    let perfil2 = new CreatePerfil("Interativo","descrição",0);

    let perfil3 = new CreatePerfil("Social","descrição",0);

    let perfil4 = new CreatePerfil("Calculista","descrição",0);


while (questionList[count] != undefined) {

    questions.push(questionList[count]);
    count +=1;
    
}

function randomQ (min, max){

    while (question[count] != undefined) {
        questions.push(question[count]);
          count +=1;  
    }
    min = Math.ceil(0);
    max = Math.floor(questions.length);
    showq = Math.floor(Math.random() * (max - min)) + min;
}

function start(){
    randomQ();
    questions[showq].classList.remove("hidden");
}

function addPerfil(){
    nameChoice = questions[showq].id;
    choice = questions[showq].querySelector('input[name='+ nameChoice + ']:checked').value;

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
    }
    else{
        if(perfil1.valor > Math.max(perfil2.valor,perfil3.valor,perfil4.valor)){
            console.log("Você tem o Perfil " + perfil1.name);

        }else if(perfil2.valor > Math.max(perfil1.valor,perfil3.valor,perfil4.valor)){
            console.log("Você tem o Perfil " + perfil2.name);

        }else if(perfil3.valor > Math.max(perfil1.valor,perfil2.valor,perfil4.valor)){
            console.log("Você tem o Perfil " + perfil3.name);

        }else if(perfil4.valor > Math.max(perfil1.valor,perfil2.valor,perfil3.valor)){
            console.log("Você tem o Perfil " + perfil4.name);
        }
        trocar.classList.remove("trocar");
        trocar.classList.add("hidden");
        contagem.innerHTML = "Acabou!!!";
    }

    
  }
    starter();
    change();

function starter() {
    iniciar.onclick = () => {
        start();
    };
}

function change() {
    document.onclick = () => {
        changeQuestion();
    };
}

        if(questions.length != 0){
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
        console.log("finish");
    }
        }

        }


iniciar.onclick = () => {
    start();
}


area.onclick = () => {
    changeQuestion();

}


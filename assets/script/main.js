let question = document.querySelectorAll(".question");
let area = document.getElementById("quiz");
let questions = [];
let answers = [];
let showq;
let count = 0;

class CreatePerfil {
    constructor(name, description, valor) {
        this.name = name;
        this.description = description;
        this.valor = valor;
    }
}

let perfis = [
    new CreatePerfil("Diretivo","descrição",0), 
    new CreatePerfil("Interativo","descrição",0), 
    new CreatePerfil("Social","descrição",0), 
    new CreatePerfil("Calculista","descrição",0)
]

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
    document.getElementById("container").classList.remove("hidden");
    document.getElementById("init").classList.add("hidden");

}

function addPerfil(){

    let nameChoice = questions[showq].id;
    let choice = questions[showq].querySelector('input[name='+ nameChoice + ']:checked').value;
    let incre;
    let incretwo;

    if (questions.length > 1){
        incre = 1;
        incretwo = 4;
    }else{
        incre = 2;
        incretwo = 5 * incre;
    }

    for(i = 0; i < 4; i++){
        perfis[i].valor = perfis[i].valor + incre;
    }
    
    switch(choice){
        case choice = "option1":
            perfis[0].valor = perfis[0].valor + incretwo;
        break;
        case choice = "option2":
            perfis[1].valor = perfis[1].valor + incretwo;
        break;
        case choice = "option3":
            perfis[2].valor = perfis[2].valor + incretwo;
        break;
        case choice = "option4":
            perfis[3].valor = perfis[3].valor + incretwo;
        break;
    }
    console.log(perfis[0].valor, perfis[1].valor, perfis[2].valor, perfis[3].valor);

}

function calPerfil(){



    if(questions.length != 0){
        questions[showq].classList.remove("hidden");

    }   else{
            document.getElementById("container").classList.add("hidden");

                let res = Math.max(perfis[0].valor, perfis[1].valor, perfis[2].valor, perfis[3].valor);

                switch(res){
                    case res = perfis[0].valor:
                        document.getElementById("p01").classList.remove("hidden");
                    break;
                    case res = perfis[1].valor:
                        document.getElementById("p02").classList.remove("hidden");
                    break;
                    case res = perfis[2].valor:
                        document.getElementById("p03").classList.remove("hidden");
                    break;
                    case res = perfis[3].valor:
                        document.getElementById("p04").classList.remove("hidden");
                    break;
                }

    }    
}

function changeQuestion() {
    
    addPerfil();
    
    questions[showq].classList.add("hidden");
    answers.push(questions[showq]);
    questions.splice(showq, 1);
    
    randomQ();
    calPerfil()

        }
        
iniciar.onclick = () => {
    start();
}

area.onclick = () => {
    changeQuestion();
}
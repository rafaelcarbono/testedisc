let question = document.querySelectorAll(".question");
let questions = [];
let options = [];
let count = 0;
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
console.log(questions);
console.log(options);
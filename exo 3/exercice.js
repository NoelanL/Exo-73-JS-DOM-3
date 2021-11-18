let answers = document.querySelectorAll('#answers li');
let rightAnswer = answers[0];
let wrongAnswer1 = answers[1];
let wrongAnswer2 = answers[2];
let rightAnswer1 = "est une bonne réponse";
let wrongAnswer3 = "est une mauvaise réponse";
let wrongAnswer4 = "est une mauvaise réponse";

//Votre code commence ci dessous
for(let i = 0; i < answers.length; i++){
    if (i === 1){
        rightAnswer.innerHTML = "Mamalia " + rightAnswer1;
        wrongAnswer1.innerHTML = "Ascidiacea " + wrongAnswer3;
        wrongAnswer2.innerHTML = "Reprilia " + wrongAnswer4;
    }
}








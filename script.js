// question and answer
let question = ["hello", "What's your name?", "Who is your creator?", "Does your creator have instagram?","Does you creator have github?", "How many question do you have?", "Are you a girl or a boy?", "In which language you are programmed?", "what do you eat?", "Can you give me money?",
 "Did you married?","Where is your home?", "Do you have a friend?", "Are you angry with me?", "What you think about your creator?", "what work do you do?", "Are you with me?", "I didn't like you?", "You don't have common sense?", "Chalo maaf kiya?",
  "Where did statue of Liberty situated?", "Who was the first Man to Climb Mount Everest Without Oxygen?", "Who was the first Indian Scientist to win a Nobel Prize?", " Who was the first Indian to win the Booker Prize?", "Which is the most sensitive organ in our body?", "1024 Kilobytes is equal to?", "Which country are the Giza Pyramids in?", "Highest dam of India is?", "Most widely spoken language in the world is?", "Who wrote Romeo and Juliet?",
   "what i do if i change your code", "Can i programme you in different language", "Can i change your theme", "What happen if i still your code", "Did you can do any physical work", "Can you save my data in local storage", "I don't like your green theme", "Your answer is not correct", "Does you are responsive", "Thanks for this information",
    "Nice to talk you", "Bye", "Meet you later", "What a lovely day", "have you ever seen me", "But you don't have enough question that i expected", "you have to talk  with me not to chat", "can i save you in my local device", "You make my day", "You are so amazing"];
let answer = ["hi", "My name is robotic.", "I am created by Tarun Yadav", "Yes, it is @code_creator1", "Yes, it is @codecreator01", "50 question have been put in me", "I am neither a boy or a girl, I am your robotic", "javascript", "I eat emoji burger &#127828; and emoji pizza &#127829;", "I have this money &#128176; do you want.",
    "I am good the way I am", "I am live in your device.", "I have no other friend than you", "No you are so great for me", "He will programmed me  very well and he will soon send more question to me", "I talk to you whenever you want", "Always", "Excuse me if i said something wrong.", "Sorry, I send your feedback to my developer", "Thanks",
     "On Liberty island in New york harbor", "Phu Dorji", "CV Raman", "Nirad C. Chaudhuri", "Skin", "1 Megabyte (MB)", "The Giza Pyramids are in Egypt.", "Tehri Dam", "Mandarin (Chinese)", "William Shakespeare wrote Romeo and Juliet.",
    "If you are good proarammer you can change my code but if you are beginner than i will crashed", "ofcourse", "yes you can change my theme in css code", "You can make a clone and add more function to me but please don't steel full code as it is or give credit to my creator", "have you seen a website doing physical work", "I have no information so what can i save.", "you can change me theme by css code.", "sorry for wrong information", "yes", "welcome",
     "my pleasure", "bye.", "I am waiting for you", "Yes, when i meet to you you make my day.","No, but i feel that you are so beautiful", "I can understand but what can i do", "developer can add me voice function in next time", "ofcourse", "and also you make my day", "Thanks"];
// main function formula and used for first time   
let number1 = Math.ceil(Math.random() * 10 - 1);
let number2 = Math.ceil(Math.random() * 10 - 1 + 10);
let number3 = Math.ceil(Math.random() * 10 - 1 + 20);
let number4 = Math.ceil(Math.random() * 10 - 1 + 30);
let number5 = Math.ceil(Math.random() * 10 - 1 + 40);
let previousQuestion1 = [number1];
let previousQuestion2 = [number2];
let previousQuestion3 = [number3];
let previousQuestion4 = [number4];
let previousQuestion5 = [number5];
//main function
function main(btn) {
    //asidebar question display
    document.querySelector('#question1').innerHTML = question[number1];
    document.querySelector('#question2').innerHTML = question[number2];
    document.querySelector('#question3').innerHTML = question[number3];
    document.querySelector('#question4').innerHTML = question[number4];
    document.querySelector('#question5').innerHTML = question[number5];

 // taking id with "this" keyword
    let index = btn.id;
    let value;
    let values;
 //check the button that user click
    switch (index) {
        case "question1":
            value = number1;
            values = previousQuestion1[0];
            checkFunc();
            backslide();
            // console.log(value);
            break;
        case "question2":
            value = number2;
            values = previousQuestion2[0];
            checkFunc();
            backslide();
            // console.log(value);
            break;
        case "question3":
            value = number3;
            values = previousQuestion3[0];
            checkFunc();
            backslide();
            // console.log(value);
            break;
        case "question4":
            value = number4;
            values = previousQuestion4[0];
            checkFunc();
            backslide();
            // console.log(value);
            break;
        case "question5":
            value = number5;
            values = previousQuestion5[0];
            checkFunc();
            backslide();
            break;
        default:
            value = 0;
            values = 0;
            // console.log(value);
            break;
    }



    // making a chat for both user and robo
    let userchat = document.createElement('div');
    userchat.classList.add('userchat');
    let robochat = document.createElement('div');
    robochat.classList.add('robochat');
    userchat.innerHTML = question[values];
    robochat.innerHTML = answer[values];
    document.querySelector('.chatcontainer').appendChild(userchat);
    document.querySelector('.chatcontainer').appendChild(robochat);
}
// function for reload question
function checkFunc(){
    previousQuestion1 = [number1];
            previousQuestion2 = [number2];
            previousQuestion3 = [number3];
            previousQuestion4 = [number4];
            previousQuestion5 = [number5];
            number1 = Math.ceil(Math.random() * 10 - 1);
            number2 = Math.ceil(Math.random() * 10 - 1 + 10);
            number3 = Math.ceil(Math.random() * 10 - 1 + 20);
            number4 = Math.ceil(Math.random() * 10 - 1 + 30);
            number5 = Math.ceil(Math.random() * 10 - 1 + 40);
}
//excution for first time
main(NaN);
// show the option bar in phone
function slide(){
let aside = document.querySelector('.asidebar');
let arrow = document.querySelector('.arrow');
let chatcontainer = document.querySelector('.chatcontainer');
aside.style.display = "block";
arrow.style.display = "none";
chatcontainer.style.display = "none";
}
//hide the option bar in phone
function backslide(){
let width = window.innerWidth;
if(width <= 800){
let aside = document.querySelector('.asidebar');
let arrow = document.querySelector('.arrow');
let chatcontainer = document.querySelector('.chatcontainer');
aside.style.display = "none";
arrow.style.display = "block";
chatcontainer.style.display = "flex";}else{}
}
// Sample questions. DONT touch this data
const questions = [
  {
      text: "Which language is primarily used for web app development?",
      options: ["C#", "Python", "JavaScript", "Swift"],
      correct: 2
  },
  {
      text: "Which of the following is a relational database management system?",
      options: ["Oracle", "Scala", "Perl", "Java"],
      correct: 0
  },
  {
      text: "What does HTML stand for?",
      options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
      correct: 2
  },
  {
      text: "What does CSS stand for?",
      options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
      correct: 0
  },
  {
      text: "Which of the following is not an object-oriented programming language?",
      options: ["Java", "C#", "Scala", "C"],
      correct: 3
  },
  {
      text: "Which tool is used to ensure code quality in JavaScript?",
      options: ["JSLint", "TypeScript", "Babel", "Webpack"],
      correct: 0
  },
  {
      text: "What is the primary use of the Git command 'clone'?",
      options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
      correct: 1
  },
  {
      text: "What does API stand for in the context of programming?",
      options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
      correct: 1
  },
  {
      text: "Javascript is a single threaded programming language",
      options: ["True", "False"],
      correct: 0
  },
  {
      text: "API calls in Javascript can be done using the following method",
      options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
      correct: 2
  },
];

let score = 0;
let quesNo = 0;
let ques = document.getElementById("question")
let options = document.getElementById("answer-list")
let submitButton = document.getElementById("submit")
let nextButton = document.getElementById("next")


function loadQuestion() {
  ques.innerHTML = "";
  options.innerHTML = "";
  const curr_ques = questions[quesNo]
  //add question
  ques.innerText = curr_ques.text

  //create options
  let optNo = 0;
  for(option in curr_ques.options){
      options.innerHTML += 
      `
      <li id="${optNo}">
          <input type="radio"  name="options" value="${optNo}">
          <label for="0">${curr_ques.options[optNo]}</label>
      <li>
      `
      optNo++;
  }
}

submitButton.addEventListener("click", (e) => {
  
  const correct_opt = questions[quesNo].correct
  let marked_opt = null

  // Get all radio buttons with name="options"
  const radios = document.getElementsByName('options');

  // Loop through all radio buttons to find the checked one
  for (const radio of radios) {
      if (radio.checked) {
          marked_opt = radio.value;
          break;
      }
  }

  //highlight correct option
  if(marked_opt === null){
      alert("Please select an answer!")
  }else{
      if(marked_opt == correct_opt) score++;
      document.getElementById(`${correct_opt}`).style.backgroundColor = "lightgreen"
  }

  //hide submit button and show next button
  submitButton.style.display = "none";
  nextButton.style.display = "initial";
});

nextButton.addEventListener("click", () => {
  quesNo++;
  if(quesNo < questions.length){
      //hide next button and show submit button
      submitButton.style.display = "initial";
      nextButton.style.display = "none";
      loadQuestion();
  } else{
      alert(`Quiz finished! Your score is: ${score}/${questions.length}`)
      score = 0;
      quesNo = 0;
      loadQuestion();
  }    
});

// Load the first question on startup
loadQuestion();
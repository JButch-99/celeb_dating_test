window.onload = function() {
  const button1 = document.getElementById("button-1");
  let quiz = document.getElementById("quiz");


  
  button1.onclick = function() {
    quiz.setAttribute("class", "hidden");
    quiz.removeAttribute("class");
    quiz.setAttribute("class", "quiz-body");
  }

  button1.onmouseover = function() {
    button1.style.backgroundColor = "red";
    button1.style.color = "white";
  }

  button1.onmouseleave = function() {
    button1.style.backgroundColor = "white";
    button1.style.color = "black";
  } 
}
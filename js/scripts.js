window.onload = function() {
  const button1 = document.getElementById("button-1");
  let quiz_q1 = document.getElementById("quiz-q1");
  let rules = document.getElementById("rules");
  let joke = document.getElementById("rickRoll");


  
  button1.onclick = function() {
    quiz_q1.setAttribute("class", "hidden");
    quiz_q1.removeAttribute("class");
    quiz_q1.setAttribute("class", "quiz-body");
    rules.setAttribute("class", "hidden");
    rules.removeAttribute("class");
    rules.setAttribute("class", "box");
  }

  joke.onclick = function() {
    location.reload();
  }

  button-Q2 = document.getElementById("button-q2");

  button-Q2.onclick = function() {
    
  }
}
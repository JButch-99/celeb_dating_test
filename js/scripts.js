window.onload = function() {
  const button1 = document.getElementById("button-1");
  const button2 = document.getElementById("button-2");
  const button3 = document.getElementById("button-3")


  
  button1.onclick = function() {
    let quiz_q1 = document.getElementById("quiz-q1");
    let rules = document.getElementById("rules");
    let joke = document.getElementById("rickRoll");

    quiz_q1.setAttribute("class", "hidden");
    quiz_q1.removeAttribute("class");
    quiz_q1.setAttribute("class", "quiz-body");
    rules.setAttribute("class", "hidden");
    rules.removeAttribute("class");
    rules.setAttribute("class", "box");

    joke.onclick = function() {
      location.reload();
    }
  }

  button2.onclick = function() {
    let quiz_q2 = document.getElementById("quiz-q2");
    quiz_q2.setAttribute("class", "hidden");
    quiz_q2.removeAttribute("class");
    quiz_q2.setAttribute("class", "quiz-body");
  }

  button3.onclick = function() {
    let scoreQ1 = document.getElementById("scoreQ1");
    let scoreQ2 = document.getElementById("scoreQ2");
    let num1 = parseInt(scoreQ1.value);
    let num2 = parseInt(scoreQ2.value);
    const sum = num1 + num2;

    if (sum >= 1 && sum <= 5) {
      alert("it works");
    } else if (sum >= 6 && sum <= 10) {
      alert("it don't work");
    }
  }
}
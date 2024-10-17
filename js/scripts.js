window.onload = function() {
  const button1 = document.getElementById("button-1");
  const button2 = document.getElementById("button-2");
  const button3 = document.getElementById("button-3");
  const button4 = document.getElementById("button-4");
  const button5 = document.getElementById("button-5");
  const result = document.getElementById("result");

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
    let quiz_q3 = document.getElementById("quiz-q3");
    quiz_q3.setAttribute("class", "hidden");
    quiz_q3.removeAttribute("class");
    quiz_q3.setAttribute("class", "quiz-body");
  }

  button4.onclick = function() {
    let quiz_q4 = document.getElementById("quiz-q4");
    quiz_q4.setAttribute("class", "hidden");
    quiz_q4.removeAttribute("class");
    quiz_q4.setAttribute("class", "quiz-body");
    alert("I see you :)");
  }

  button5.onclick = function() {
    let quiz_q5 = document.getElementById("quiz-q5");
    quiz_q5.setAttribute("class", "hidden");
    quiz_q5.removeAttribute("class");
    quiz_q5.setAttribute("class", "quiz-body");
  }

  result.onclick = function() {
    let scoreQ1 = document.getElementById("scoreQ1");
    let scoreQ2 = document.getElementById("scoreQ2");
    let scoreQ3 = document.getElementById("scoreQ3");
    let scoreQ4 = document.getElementById("scoreQ4");
    let scoreQ5 = document.getElementById("scoreQ5");

    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");
    const option4 = document.getElementById("option4");
    const option5 = document.getElementById("option5");

    let num1 = parseInt(scoreQ1.value);
    let num2 = parseInt(scoreQ2.value);
    let num3 = parseInt(scoreQ3.value);
    let num4 = parseInt(scoreQ4.value);
    let num5 = parseInt(scoreQ5.value);

    const sum = num1 + num2 + num3 + num4 + num5;

    if (sum >= 1 && 5 >= sum) {
      option1.setAttribute("class", "hidden");
      option1.removeAttribute("class");
      option1.setAttribute("class", "box");
    } else if (sum >= 6 && 10 >= sum) { 
      option2.setAttribute("class", "hidden");
      option2.removeAttribute("class");
      option2.setAttribute("class", "box");
    } else if (sum >= 11 && 15 >= sum) {
      option3.setAttribute("class", "hidden");
      option3.removeAttribute("class");
      option3.setAttribute("class", "box");
    } else if (sum >= 16 && 20 >= sum) {
      option4.setAttribute("class", "hidden");
      option4.removeAttribute("class");
      option4.setAttribute("class", "box");
    } else if (sum >= 21 && 25 >= sum && 25 === sum) {
      option5.setAttribute("class", "hidden");
      option5.removeAttribute("class");
      option5.setAttribute("class", "box");
    }
  }
}
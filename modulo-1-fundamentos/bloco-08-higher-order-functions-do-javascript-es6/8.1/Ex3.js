const countScore = (rightAnswers, studentAnswers, chkAnswers) => {
  console.log(chkAnswers(rightAnswers, studentAnswers));
};

const checkAnswers = (rightAnswers, studentAnswers) => {
  let score = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    if (studentAnswers[i] !== "N.A") {
      if (rightAnswers[i] === studentAnswers[i]) {
        score += 1;
      } else {
        score -= 0.5;
      }
    }
  }
  return score;
};

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

countScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers);

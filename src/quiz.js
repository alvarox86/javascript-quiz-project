class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    (this.questions = questions),
      (this.timeLimit = timeLimit),
      (this.timeRemaining = timeRemaining),
      (this.correctAnswers = 0),
      (this.currentQuestionIndex = 0);
  }
  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }
  // 4. shuffleQuestions()
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[randomIndex]] = [
        this.questions[randomIndex],
        this.questions[i],
      ];
    }
  }
  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    if (answer) {
      this.correctAnswers++;
    }
  }
  // 6. hasEnded()
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
    let filteredQuestions = this.questions.filter((eachQuestion) => {
      if (difficulty === eachQuestion.difficulty) {
        return true;
      } else {
        return false;
      }
    });

    if (difficulty !== 1 && difficulty !== 2 && difficulty !== 3) {
      return;
    }

    this.questions = filteredQuestions;
    return filteredQuestions;
  }

  averageDifficulty(){
    let avgDifficulty = this.questions.reduce((total, eachQuestion) =>{
      return total + eachQuestion.difficulty
    }, 0)
    return avgDifficulty / this.questions.length
  }

}

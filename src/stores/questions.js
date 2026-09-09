import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore('questions', {
  state: () => {
    const questions =
      [
        {
          question: "What Does HTML Stand For ?",
          answers: [
            { answer: "Hyper Trainer Marking Language", isCorrect: false },
            { answer: "Hyper Text Markup Language", isCorrect: true },
            { answer: "Hyper Text Making Language", isCorrect: false },
            { answer: "Home Tool Markup Language", isCorrect: false },
          ]
        },
        {
          question: "Which Tag Is Used To Create A Hyperlink In HTML ?",
          answers: [
            { answer: "<link>", isCorrect: false },
            { answer: "<href>", isCorrect: false },
            { answer: "<a>", isCorrect: true },
            { answer: "<hyper>", isCorrect: false },
          ]
        },
        {
          question: "Which Tag Is Used To Insert An Image In HTML ?",
          answers: [
            { answer: "<image>", isCorrect: false },
            { answer: "<img>", isCorrect: true },
            { answer: "<src>", isCorrect: false },
            { answer: "<picture>", isCorrect: false },
          ]
        },
        {
          question: "What Is The Correct HTML Tag For The Largest Heading ?",
          answers: [
            { answer: "<h6>", isCorrect: false },
            { answer: "<heading>", isCorrect: false },
            { answer: "<head>", isCorrect: false },
            { answer: "<h1>", isCorrect: true },
          ]
        },
        {
          question: "Which Attribute Is Used To Provide An Alternate Text For An Image ?",
          answers: [
            { answer: "title", isCorrect: false },
            { answer: "alt", isCorrect: true },
            { answer: "src", isCorrect: false },
            { answer: "longdesc", isCorrect: false },
          ]
        },
        {
          question: "Which Tag Is Used To Define An Unordered List In HTML ?",
          answers: [
            { answer: "<ol>", isCorrect: false },
            { answer: "<list>", isCorrect: false },
            { answer: "<ul>", isCorrect: true },
            { answer: "<li>", isCorrect: false },
          ]
        },
        {
          question: "Which HTML Element Is Used To Define The Style Of An HTML Document ?",
          answers: [
            { answer: "<script>", isCorrect: false },
            { answer: "<css>", isCorrect: false },
            { answer: "<style>", isCorrect: true },
            { answer: "<link>", isCorrect: false },
          ]
        },
        {
          question: "Which Tag Is Used To Create A Table In HTML ?",
          answers: [
            { answer: "<table>", isCorrect: true },
            { answer: "<tab>", isCorrect: false },
            { answer: "<tr>", isCorrect: false },
            { answer: "<grid>", isCorrect: false },
          ]
        },
        {
          question: "Which Input Type Is Used For A Password Field In HTML Forms ?",
          answers: [
            { answer: "type='text'", isCorrect: false },
            { answer: "type='secure'", isCorrect: false },
            { answer: "type='password'", isCorrect: true },
            { answer: "type='hidden'", isCorrect: false },
          ]
        },
        {
          question: "Which Doctype Declaration Is Correct For HTML5 ?",
          answers: [
            { answer: "<!DOCTYPE HTML5>", isCorrect: false },
            { answer: "<!DOCTYPE html>", isCorrect: true },
            { answer: "<!DOCTYPE HTML PUBLIC>", isCorrect: false },
            { answer: "<DOCTYPE html5>", isCorrect: false },
          ]
        },
      ]

    return {
      questions,
      userAnswers: Array(questions.length).fill(null),
      currentQuestion: 0,
      selectedAnswer: null,
      done: false,
    }
  },

  getters: {
    score(state) {
      let correct = 0
      state.userAnswers.forEach((ans, i) => {
        if (ans !== null && state.questions[i].answers[ans].isCorrect) {
          correct++
        }
      })
      return Math.round((correct / state.questions.length) * 100)
    },
    progress(state) {
      return Math.round(((state.currentQuestion + 1) / state.questions.length) * 100)
    },
  },

  actions: {
    handleBack() {
      this.currentQuestion--
      this.selectedAnswer = this.userAnswers[this.currentQuestion]
    },

    handleSelect() {
      this.userAnswers[this.currentQuestion] = this.selectedAnswer

      if (this.currentQuestion === this.questions.length - 1) {
        this.done = true
        return
      }

      this.currentQuestion++
      this.selectedAnswer = this.userAnswers[this.currentQuestion]
    },
  },
})
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
        {
          question: "Which Form Attribute Specifies How Form Data Is Sent ?",
          answers: [
            { answer: "method", isCorrect: true },
            { answer: "send", isCorrect: false },
            { answer: "request", isCorrect: false },
            { answer: "type", isCorrect: false },
          ]
        },
        {
          question: "You Want Users To Choose Exactly One Option From A Group. Which Input Type Is Most Appropriate ?",
          answers: [
            { answer: "checkbox", isCorrect: false },
            { answer: "radio", isCorrect: true },
            { answer: "multiple", isCorrect: false },
            { answer: "select-one-text", isCorrect: false },
          ]
        },
        {
          question: "You Want Users To Select Any Number Of Independent Preferences. Which Input Type Should You Use ?",
          answers: [
            { answer: "radio", isCorrect: false },
            { answer: "checkbox", isCorrect: true },
            { answer: "choice", isCorrect: false },
            { answer: "options", isCorrect: false },
          ]
        },
        {
          question: "Which Element Provides A Label For A Form Control ?",
          answers: [
            { answer: "<caption>", isCorrect: false },
            { answer: "<label>", isCorrect: true },
            { answer: "<name>", isCorrect: false },
            { answer: "<description>", isCorrect: false },
          ]
        },
        {
          question: "A Label Should Be Connected To An Input With Id='email'. Which Label Attribute Is Needed ?",
          answers: [
            { answer: "id='email'", isCorrect: false },
            { answer: "name='email'", isCorrect: false },
            { answer: "for='email'", isCorrect: true },
            { answer: "input='email'", isCorrect: false },
          ]
        },
        {
          question: "Which Semantic Element Should Wrap The Main Content Of A Page ?",
          answers: [
            { answer: "<content>", isCorrect: false },
            { answer: "<main>", isCorrect: true },
            { answer: "<body-content>", isCorrect: false },
            { answer: "<section-main>", isCorrect: false },
          ]
        },
        {
          question: "Which Element Is Best For A Website's Navigation Links ?",
          answers: [
            { answer: "<navigate>", isCorrect: false },
            { answer: "<links>", isCorrect: false },
            { answer: "<nav>", isCorrect: true },
            { answer: "<menu-links>", isCorrect: false },
          ]
        },
        {
          question: "Which Element Represents A Self-Contained Article Or Blog Post ?",
          answers: [
            { answer: "<post>", isCorrect: false },
            { answer: "<article>", isCorrect: true },
            { answer: "<entry>", isCorrect: false },
            { answer: "<blog>", isCorrect: false },
          ]
        },
        {
          question: "Which Element Should Usually Contain Copyright Or Contact Information At The Bottom Of A Page ?",
          answers: [
            { answer: "<bottom>", isCorrect: false },
            { answer: "<footer>", isCorrect: true },
            { answer: "<end>", isCorrect: false },
            { answer: "<aside>", isCorrect: false },
          ]
        },
        {
          question: "A Table Has A Header Row. Which Element Should Mark A Header Cell ?",
          answers: [
            { answer: "<td>", isCorrect: false },
            { answer: "<thead-cell>", isCorrect: false },
            { answer: "<th>", isCorrect: true },
            { answer: "<header-cell>", isCorrect: false },
          ]
        },
        {
          question: "Which Element Groups A Table's Header Rows ?",
          answers: [
            { answer: "<table-header>", isCorrect: false },
            { answer: "<thead>", isCorrect: true },
            { answer: "<header>", isCorrect: false },
            { answer: "<top>", isCorrect: false },
          ]
        },
        {
          question: "You Need To Embed A Video File With Browser Controls. Which Element Should You Use ?",
          answers: [
            { answer: "<movie>", isCorrect: false },
            { answer: "<media>", isCorrect: false },
            { answer: "<video controls>", isCorrect: true },
            { answer: "<playback>", isCorrect: false },
          ]
        },
        {
          question: "Which Element Adds A Line Break Without Starting A New Paragraph ?",
          answers: [
            { answer: "<lb>", isCorrect: false },
            { answer: "<break>", isCorrect: false },
            { answer: "<br>", isCorrect: true },
            { answer: "<newline>", isCorrect: false },
          ]
        },
        {
          question: "Which Meta Tag Helps A Page Scale Correctly On Mobile Devices ?",
          answers: [
            { answer: "<meta name='mobile'>", isCorrect: false },
            { answer: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", isCorrect: true },
            { answer: "<meta device='responsive'>", isCorrect: false },
            { answer: "<mobile-scale>", isCorrect: false },
          ]
        },
        {
          question: "Which Element Is Used To Connect An External CSS File To An HTML Page ?",
          answers: [
            { answer: "<style src='styles.css'>", isCorrect: false },
            { answer: "<css href='styles.css'>", isCorrect: false },
            { answer: "<link rel='stylesheet' href='styles.css'>", isCorrect: true },
            { answer: "<script src='styles.css'>", isCorrect: false },
          ]
        },
        {
          question: "A Button Should Submit The Form It Is Inside. Which Button Type Is Correct ?",
          answers: [
            { answer: "<button type='send'>", isCorrect: false },
            { answer: "<button type='submit'>", isCorrect: true },
            { answer: "<button action='submit'>", isCorrect: false },
            { answer: "<button form='send'>", isCorrect: false },
          ]
        },
        {
          question: "Which Attribute Makes A Form Field Mandatory Before Submission ?",
          answers: [
            { answer: "needed", isCorrect: false },
            { answer: "must-fill", isCorrect: false },
            { answer: "required", isCorrect: true },
            { answer: "validate", isCorrect: false },
          ]
        },
        {
          question: "Which HTML Element Is Used To Play Audio Content ?",
          answers: [
            { answer: "<sound>", isCorrect: false },
            { answer: "<audio>", isCorrect: true },
            { answer: "<music>", isCorrect: false },
            { answer: "<listen>", isCorrect: false },
          ]
        },
        {
          question: "You Want To Show A Short Hint Inside An Empty Input Field. Which Attribute Should You Use ?",
          answers: [
            { answer: "hint", isCorrect: false },
            { answer: "placeholder", isCorrect: true },
            { answer: "description", isCorrect: false },
            { answer: "prompt", isCorrect: false },
          ]
        },
        {
          question: "Which Element Is Used To Group Related Form Controls With A Visible Caption ?",
          answers: [
            { answer: "<formgroup>", isCorrect: false },
            { answer: "<fieldset>", isCorrect: true },
            { answer: "<group>", isCorrect: false },
            { answer: "<controls>", isCorrect: false },
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

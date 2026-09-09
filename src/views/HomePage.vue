<template>
  <div class="home-page">
    <div class="container">
      <header>
        <h1>Quiz App</h1>
        <div class="contentHeader">
          <span v-if="done === false">{{ score }} % Completed</span>
          <span v-if="done === false">{{ progress }} % Progress </span>
        </div>
      </header>

      <div class="content" v-if="done === false">
        <h3>{{ questions[currentQuestion]?.question }}</h3>
        <ol class="answers">
          <li v-for="(ans, index) in questions[currentQuestion]?.answers" :key="index" @click="selectedAnswer = index"
            :class="{ active: selectedAnswer === index }">
            {{ ans.answer }}
          </li>
        </ol>
      </div>
      <div class="finishedContent" v-if="done">
        <h3 class="question" v-if="done === true">Your Score Is :</h3>
        <h3 class="question" v-if="done === true">{{ score }}%</h3>
        <h3 class="question" v-if="done === true">Your Progress Is :</h3>
        <h3 class="question" v-if="done === true">{{ progress }}%</h3>
      </div>
      <footer v-if="done === false">
        <button class="back" @click.prevent="handleBack()" :disabled="currentQuestion === 0">Back</button>
        <button class="submit" @click.prevent="handleSelect()" :disabled="selectedAnswer === null">Submit</button>
      </footer>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useQuestionsStore } from '@/stores/questions'

const store = useQuestionsStore()

const { currentQuestion, selectedAnswer, done, questions, score, progress } = storeToRefs(store)
const { handleBack, handleSelect } = store
</script>
<style></style>
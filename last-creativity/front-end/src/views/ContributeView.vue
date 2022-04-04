<template>
  <div class="about" style="margin-bottom:18vh">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/leaderboard">Rankings</router-link> | 
      <router-link to="/contribute">Contribute</router-link>
    </nav>
    <br>
    <h1>Contribute A Riddle</h1>
    <br>
    <div>
      <div class="d-flex justify-content-center align-items-center w-75 mx-auto my-3">
        <div>
          <span class="mx-1" style="font-size:1.2em;"><strong>Name</strong></span>
          <input style="width:48vw" v-model="name" placeholder="Enter your Name">
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center w-75 mx-auto my-3">
        <div>
          <span class="mx-1" style="font-size:1.2em;"><strong>Riddle</strong></span>
          <input style="width:47.5vw" v-model="riddle" placeholder="Enter a Riddle">
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center w-75 mx-auto my-3">
        <div>
          <span class="mx-1" style="font-size:1.2em;"><strong>Answer</strong></span>
          <input style="width:46.5vw" v-model="answer" placeholder="Enter the Answer">
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center w-75 mx-auto my-3">
        <button v-on:click="submitQuestion">Submit</button>
      </div>
      
    </div>
    <br><br>
    <div class="container">
      <div class="row p-2">
        <div class="d-flex col-1 align-items-center justify-content-center">
          <h5>Contributor</h5>
        </div>
        <div class="d-flex col-8 align-items-center justify-content-center">
          <h5>Riddle</h5>
        </div>
        <div class="d-flex col align-items-center justify-content-center">
          <h5># Answered</h5>
        </div>
      </div>
    </div>
    <div class="container border-top mb-4" v-for="(question, index) in questions" :key="question.id">
      <div :class="{'light-blue': index % 2 !== 0 }" class="row p-2">
        <div class="d-flex col-1 align-items-center justify-content-center">
          <h5>{{question.contributor}}</h5>
        </div>
        <div class="d-flex col-8 align-items-center justify-content-center">
          <span>{{ question.question }}</span>
        </div>
        <div class="d-flex col align-items-center justify-content-center">
          <span>{{ question.times_answered }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContributionView',
  data() {
    return {
      questions: [],
      count: 1,
      riddle: "",
      answer: "",
      name: ""
    }
  },
  created() {
    this.getQuestions();
  },
  methods: {
    async getQuestions() {
      try {
        let response = await axios.get("/api/questions");
        this.questions = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async submitQuestion() {
      try {
        await axios.post('/api/question/', {
          contributor: this.name,
          question: this.riddle,
          answer: this.answer,
          times_answered: 0
        });
        this.getQuestions();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>

.light-blue{ 
  background-color: lightblue;
}

.vue-typer .custom.caret {
  display: none !important;
}

</style>
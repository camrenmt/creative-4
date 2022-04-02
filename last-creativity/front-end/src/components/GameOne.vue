<template>
  <div class="hello">
    <h1 class="display-2 " v-bind:class="{ timing: isCorrect, running: !isCorrect} " ><strong>{{ timeLimit }}</strong></h1>
    
    <h2>
      <vue-typer
        :text='["Well done " + name + ", I am impressed!"]' :repeat='0' :shuffle='false' initial-action='typing' 
        :pre-type-delay='250' :type-delay='100' 
        :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
        :erase-on-complete='false' caret-animation='blink' 
     ></vue-typer>
    </h2>
    <p>
      You found the secret link! 
      <br>
      You now have <b v-bind:class="{ timing: isCorrect, running: !isCorrect} " >{{ timeLimit }}</b> seconds to diffuse the bomb. 
      <br>
      Good luck! 
      <br><br>
    </p>
    <vue-typer
        :text='["Hint... " + getRandomQuestion()]' :repeat='0' :shuffle='false' initial-action='typing' 
        :pre-type-delay='10000' :type-delay='70' 
        :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
        :erase-on-complete='false' caret-animation='blink' 
    ></vue-typer>

    <div>
      <input class="m-2" v-model="answer" placeholder="Enter Answer" v-on:keyup.enter="checkAnswer"> 
      <button v-on:click="checkAnswer()">Submit</button>
    </div>

    <br><br>
    <vue-typer v-if="isAnswered && !isCorrect"
        :text='["That is not correct...Try again"]' :repeat='0' :shuffle='false' initial-action='typing' 
        :pre-type-delay='1000' :type-delay='70' 
        :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
        :erase-on-complete='false' caret-animation='blink' 
    ></vue-typer>
    <vue-typer v-if="isAnswered && isCorrect"
        :text='["Well done...I guess you passed this time"]' :repeat='0' :shuffle='false' initial-action='typing' 
        :pre-type-delay='1000' :type-delay='70' 
        :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
        :erase-on-complete='false' caret-animation='blink' 
    ></vue-typer>

     <br><br>

    <button v-if="isCorrect" @click="nextGame">Continue</button>
  </div>
</template>

<script>
import axios from 'axios';
import { VueTyper } from 'vue-typer'

export default {
  name: 'FirstPage',
  props: {
    msg: String,
    name: String
  },
  components: {
    VueTyper
  },
  data() {
    return {
      timeLimit: 120,
      maxTime: 120,
      timer: "", 
      questions: [],
      currentquestion: 0,
      answer: "",
      isAnswered: false,
      isCorrect: false
    }
  },
  mounted() {
    this.startTimer(),
    this.getQuestions()
  },
  methods: {
    startTimer() {
      let vm = this;
      this.timer = setInterval(function() {
          vm.timeLimit -= 1;
          if (vm.value <= 0) clearInterval(this.timer);
      }, 1000);
    },
    async getQuestions() {
      try {
        let response = await axios.get("/api/question");
        this.questions = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    getRandomQuestion() {
      let i = Math.random() * this.questions.length;
      this.currentquestion = this.questions[Math.floor(i)];
      return this.questions[Math.floor(i)].question;
    },
    checkAnswer() {
      this.isAnswered = true;
      if (this.answer.toLowerCase() === this.currentquestion.answer.toLowerCase()) {
        this.isCorrect = true;
        clearInterval(this.timer);
      } else {
        this.isCorrect = false;
      }
    },
    nextGame() {
      console.log("emitting");
      this.$emit("update:gameone", true);
    }
  },
  computed: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.timing {
  color: green;
}

.running {
  color: red;
}
</style>

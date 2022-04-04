<template>
  <div class="home">
    <div v-if="!found" class="d-flex flex-column align-items-center justify-content-center" style="margin: 25vh 0">
      <a v-on:click="endTimer()" class="text-decoration-none text-reset" href="javascript:void">
        <h2>Welcome to <i style="color: darkgrey"> THE GAME </i></h2> <br>
        <h3>
            Loading Content
            <span v-if="value >= 90" >in {{100 - Math.floor(value)}} </span>
        </h3>
      </a>
      <b-progress :value="value" :max="max" variant="info" class="w-75" show-progress animated ></b-progress>
      <br>
      <input v-model="name" placeholder="Enter Your Name"/>
      <br>
      <vue-typer v-if="value >= 101"
        :text='["Wait...thats not right...", "This isnt supposed to happen...", "Okay...theres actually a secret button..."]' :repeat='0' :shuffle='false' initial-action='typing' 
        :pre-type-delay='0' :type-delay='50' 
        :pre-erase-delay='2000' :erase-delay='250' erase-style='clear' 
        :erase-on-complete='false' caret-animation='blink' 
      ></vue-typer>
      <vue-typer v-if="value >= 110"
        :text='["You have to find it hehe"]' :repeat='0' :shuffle='false' initial-action='typing' 
        :pre-type-delay='100' :type-delay='70' 
        :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
        :erase-on-complete='false' caret-animation='blink' 
      ></vue-typer>


      <br>
      <div id="buttons" v-if="value > 110">
        <div class="container w-100">
          <div class="row my-4">
            <div class="col-4">
              <button>Click me!</button>
            </div>
            <div class="col-4">
              <button>Hi :)</button>
            </div>
            <div class="col-4">
              <button>No Me!</button>
            </div>
          </div>   
          <div class="row my-4">
            <div class="col-4">
              <button>Is it I?</button>
            </div>
            <div class="col-4">
              <button>You wouldn't</button>
            </div>
            <div class="col-4">
              <button>Could be..</button>
            </div>
          </div>   
          <div class="row my-4">
            <div class="col-4">
              <button>Don't you dare</button>
            </div>
            <div class="col-4">
              <button>Choose me</button>
            </div>
            <div class="col-4">
              <button>Squirrel!</button>
            </div>
          </div>   
          <div class="row my-4">
            <div class="col-4">
              <button>Poke me</button>
            </div>
            <div class="col-4">
              <button>That tickles!</button>
            </div>
            <div class="col-4">s
              <button>Tis I</button>
            </div>
          </div>     
        </div> 
      </div>
    </div>

    <div v-if="found">
      <nav v-if="gameComplete" >
        <router-link to="/">Home</router-link> |
        <router-link to="/leaderboard">Rankings</router-link> | 
        <router-link to="/contribute">Contribute</router-link>
      </nav>
      
      <GameOne class="mt-4" v-if="!gameone" v-bind:name="name" v-bind:gameone.sync="gameone"/>
  
      <div v-if="gameComplete">
        <vue-typer
          :text='["Congrats on completing the game!"]' :repeat='0' :shuffle='false' initial-action='typing' 
          :pre-type-delay='100' :type-delay='70' 
          :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
          :erase-on-complete='false' caret-animation='blink' 
        ></vue-typer>
        <br>
        <vue-typer
          :text='["Your total time was"]' :repeat='0' :shuffle='false' initial-action='typing' 
          :pre-type-delay='3000' :type-delay='70' 
          :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
          :erase-on-complete='false' caret-animation='blink' 
        ></vue-typer>
        <h1>
          <vue-typer
            :text='[`${t_time / 1000}`]' :repeat='0' :shuffle='false' initial-action='typing' 
            :pre-type-delay='4500' :type-delay='70' 
            :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
            :erase-on-complete='false' caret-animation='blink' 
          ></vue-typer>
        </h1>
        <vue-typer
          :text='["seconds"]' :repeat='0' :shuffle='false' initial-action='typing' 
          :pre-type-delay='5000' :type-delay='70' 
          :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
          :erase-on-complete='false' caret-animation='blink' 
        ></vue-typer>
        <br><br>
        <vue-typer
          :text='["Check out your score in the Rankings tab!\nTo play again, just refresh the page"]' :repeat='0' :shuffle='false' initial-action='typing' 
          :pre-type-delay='5000' :type-delay='70' 
          :pre-erase-delay='2000' :erase-delay='250' erase-style='select-all' 
          :erase-on-complete='false' caret-animation='blink' 
        ></vue-typer>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import GameOne from '@/components/GameOne.vue';
import { VueTyper } from 'vue-typer';

export default {
  name: 'HomeView',
  data() {
    return {
      max: 100,
      value: 0,
      found: false,
      name: "",
      gameone: false,
      gameComplete: false,
      start: 0,
      end: 0,
    }
  },
  components: {
    GameOne,
    VueTyper
  },
  mounted() {
      this.start = new Date().getTime();
      this.startTimer();
  },
  methods: {
    startTimer() {
      let vm = this;
      let timer = setInterval(function() {
          vm.value += Math.random() * 2;
          if (vm.value >= 90 && !this.found) clearInterval(timer);
      }, 80);

      let atimer = setInterval(function() {
          vm.value += 1;
          if (vm.value >= 110 && !this.found) {
            clearInterval(atimer);
          }
      }, 1000);
    },
    endTimer() {
      this.found = true;
      this.end = new Date().getTime();
    },
    endGame() {
      this.postRating();
    },
    async postRating() {
      let date = new Date();

      try {
        await axios.post('/api/ranking', {
          name: this.name,
          time: this.t_time,
          date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
        });
        } catch (error) {
          console.log(error);
        }
      }
  },
  computed: {
    t_time: function() {
      return this.end - this.start;
    }
  },
  watch: {
    gameone: function() {
      this.gameComplete = true;
      this.endGame();
    }
  }
}
</script>

<style scoped>

button {
  width: 8em;
  opacity: 0;
  transition: opacity 0.3s;
}

button:hover {
  opacity: 100;
  transition: opacity 0.3s;
}

</style>

<template>
  <div class="about">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/leaderboard">Rankings</router-link> | 
      <router-link to="/contribute">Contribute</router-link>
    </nav>
    <br><br>
      <h1>Rankings</h1>
      <br><br>
      <div class="container">
        <div class="row p-2">
          <div class="d-flex col-1 align-items-center justify-content-center">
            <h3>Rank</h3>
          </div>
          <div class="d-flex col-5 align-items-center justify-content-center">
            <h3>Name</h3>
          </div>
          <div class="d-flex col align-items-center justify-content-center">
            <h3>Time</h3>
          </div>
          <div class="d-flex col align-items-center justify-content-center">
            <h3>Date</h3>
          </div>
        </div>
      </div>
      <div class="container border-top" v-for="(ranking, index) in sortRankings()" :key="ranking.id">
        <div :class="{'light-blue': index % 2 !== 0 }" class="row p-2">
          <div class="d-flex col-1 align-items-center justify-content-center">
            <h3>{{index + 1}}</h3>
          </div>
          <div class="d-flex col-5 align-items-center justify-content-center">
            <h4>{{ ranking.name }}</h4>
          </div>
          <div class="d-flex col align-items-center justify-content-center">
            <span>{{ ranking.time / 1000 }} seconds </span>
          </div>
          <div class="d-flex col align-items-center justify-content-center">
            <span>{{ ranking.date }} </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RankingsView',
  data() {
    return {
      rankings: [],
      count: 1
    }
  },
  created() {
    this.getRankings();
  },
  methods: {
    async getRankings() {
      try {
        let response = await axios.get("/api/rankings");
        this.rankings = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    nextCount() {
      let t = this.count;
      this.count += 1; 
      return t;
    },
    sortRankings() {
      return this.rankings.sort( function(a, b) {
        return a.time - b.time
      });
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
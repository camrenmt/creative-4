<template>
  <div class="d-flex flex-column align-items-center justify-content-center" style="margin: 25vh 0">
    <h2>
        Loading Content
        <span v-if="value >= 93" >in {{100 - Math.floor(value)}} </span>
    </h2>
    <b-progress :value="value" :max="max" variant="info" class="w-75" show-progress animated ></b-progress>
    <br>
    <div v-if="value >= 103" >Wait....what??</div>
    <div v-if="value >= 105" >This isn't supposed to happen...</div>
    <div v-if="value >= 108" >Okay...that's enough...</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        max: 100,
        value: 0
      }
    },
    mounted() {
        this.startTimer();
    },
    methods: {
      startTimer() {
        let vm = this;
        let timer = setInterval(function() {
            vm.value += Math.random() * 2;
            if (vm.value >= 93) clearInterval(timer);
        }, 100);

        let atimer = setInterval(function() {
            vm.value += 1;
            if (vm.value >= 110) {
              clearInterval(atimer);
              this.$emit('loaded', true)
            }
        }, 1000);
        
        if (this.value >= 110) {
          console.log("emitted")
          this.$emit('loaded', true)
        } else {
          console.log("not emitted")
          this.$emit('loaded', false)
        }
      }
    }
  }
</script>
import Vue from 'vue'

let Vue = new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch() {
      console.log('punching');
      this.health -= 10;
      console.log(this.health);
      if (this.health === 0) {
        this.ended = true;
      }
    },
    reset() {
      this.health = 100;
      this.ended = false;
    }
  }
});

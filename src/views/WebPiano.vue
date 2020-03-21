<template>
  <div class="piano-container">
    <div id="piano">
      <div v-for="(high, index) in [1,2,3,4,5,6]" :key="index">
        <span class="keyboard"></span>
        <span class="keyboard sharp"></span>
        <span class="keyboard"></span>
        <span class="keyboard sharp"></span>
        <span class="keyboard"></span>
        <span class="keyboard"></span>
        <span class="keyboard sharp"></span>
        <span class="keyboard"></span>
        <span class="keyboard sharp"></span>
        <span class="keyboard"></span>
        <span class="keyboard sharp"></span>
        <span class="keyboard"></span>
        <span class="keyboard"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class WebPiano extends Vue {
    audio = null;
    gainOscillators: GainOscillator[] = [];

    mounted() {
      const audio = new AudioContext();

      for (let i = -36; i < 36; i++) {
        const gain = audio.createGain();
        const oscillator = audio.createOscillator();

        oscillator.connect(gain);
        gain.connect(audio.destination);
        gain.gain.value = 0.5;

        oscillator.frequency.value = 440 * Math.pow(Math.pow(2, 1 / 12), i);

        this.gainOscillators.push(
          {
            gain: gain,
            oscillator: oscillator
          }
        );
      }

      this.gainOscillators[36].oscillator.start();
      this.gainOscillators[38].oscillator.start();
    }
  }
</script>

<style scoped>
  .piano-container {
    background: white;
    padding-top: 1%;
    padding-bottom: 1%;
  }

  .keyboard {
    border: 1px solid #999;
    background-color: white;
    cursor: pointer;
    display: inline-block;
    height: 200px;
    width: calc(100% / 8 - 2px);
    width: -webkit-calc(100% / 8 - 2px);
  }

  .sharp {
    background-color: black;
    height: 120px;
    margin-left: -4%;
    position: absolute;
    width: 8%;
  }

  #piano {
    margin: 50px auto;
    max-width: 420px;
    position: relative;
  }
</style>

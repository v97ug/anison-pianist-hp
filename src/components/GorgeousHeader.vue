<template>
  <div class="nav-container">
    <img height="60" src="../assets/frame_left.png">
    <nav class="navigation">
      <div class="col-md text-center">トップ</div>
      <div class="col-md text-center">プロフィール</div>
      <div class="col-md text-center">ライブ</div>
      <div class="col-md text-center">YouTube</div>
      <div class="col-md text-center">お問い合わせ</div>
    </nav>
    <img height="60" src="../assets/frame_right.png">
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class GorgeousHeader extends Vue {
    }
</script>

<style scoped>
  nav.navigation {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background: url('../assets/frame_center.png') repeat-x center;
    background-size: contain;
  }

  .nav-container {
    display: flex;
    margin: 0 auto 15px;
    padding-top: 15px;
    width: 80%;
    /*background: #fffcf5;*/
    /*color: #414140;*/
    color: white;
  }
</style>

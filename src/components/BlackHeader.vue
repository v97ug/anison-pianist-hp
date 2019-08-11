<template>
  <div class="nav-container">
    <nav class="navigation">
      <router-link to="/" class="col-md text-center">トップ</router-link>
      <router-link to="/" class="col-md text-center">プロフィール</router-link>
      <router-link to="/" class="col-md text-center">ライブ</router-link>
      <router-link to="/" class="col-md text-center">YouTube</router-link>
      <router-link to="/" class="col-md text-center">お問い合わせ</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class BlackHeader extends Vue {
  }
</script>

<style scoped>
  .nav-container {
    position: fixed;
    z-index: 2147483647;
    display: flex;
    padding-top: 15px;
    width: 100%;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    font-size: 21px;
  }

  nav.navigation {
    margin: 0 auto 15px;
    width: 80%;
    height: 50px;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: none;
    color: white;
    opacity: 0.7;
  }

  a::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: white;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform .3s;
  }
  a:hover::after {
    transform: scale(1, 1);
  }

</style>

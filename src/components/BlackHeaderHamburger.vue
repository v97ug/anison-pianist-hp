<template>
  <nav class="nav-container navbar d-flex">
    <div>
      Anision Pianist
    </div>
    <div class="menu-button">
      <div class="navbar-toggler" data-toggle="collapse" data-target="#navmenu1">Menu</div>
    </div>
    <div id="navmenu1" class="collapse navbar-collapse navigation">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">トップ</router-link>
        <router-link to="/" class="nav-item nav-link">プロフィール</router-link>
        <router-link to="/" class="nav-item nav-link">ライブ</router-link>
        <router-link to="/" class="nav-item nav-link">YouTube</router-link>
        <router-link to="/" class="nav-item nav-link">お問い合わせ</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class BlackHeaderHamburger extends Vue {
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
    font-size: 22px;
    font-weight: 500;
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

  .menu-button {
    border: 1px solid white;
  }
</style>

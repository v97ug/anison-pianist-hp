<template>
  <div>
    <black-header v-if="!isSmartPhoneWidth"></black-header>
    <black-header-hamburger v-if="isSmartPhoneWidth"></black-header-hamburger>

    <div class="top-container">
      <div class="container">
        <div class="text-center">
          <!--          <img class="anison-pianist-text-img" -->
          <!--               src="../assets/anison_pianist_takechan.png"-->
          <!--               height="240"-->
          <!--               alt="Anision pianist TAKECHANのテキスト画像">-->
          <img class="anison-pianist-text-img"
               src="../assets/anison_pianist_takechan.png"
               width="85%"
               alt="Anision pianist TAKECHANのテキスト画像"
               v-if="!isSmartPhoneWidth">

          <img class="anison-pianist-text-img"
               src="../assets/anison_pianist_takechan_sp.png"
               width="100%"
               alt="Anision pianist TAKECHANのテキスト画像"
               v-if="isSmartPhoneWidth">
        </div>

        <div class="video-container">
          <div class="video">
            <iframe src="https://www.youtube.com/embed/4NjXeMkli1c" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
        </div>

        <div class="concept-container">
          大好きなピアノで感情をゆさぶるような曲を自分の表現で届ける、アニソンピアニスト「TAKECHAN(たけちゃん)」。
          聴く人の魂を揺さぶり心の底から元気にしたいという想いからアニソンをピアノで弾いています。
          YouTubeでピアノ動画を配信してますのでぜひお聴きください！
        </div>

        <div class="button-container">
          <!--          <button class="btn btn-primary">YouTubeはこちら</button>-->
          <a href="https://www.youtube.com/channel/UCavjtKPARTVL0JXBrFvaZFw">
            <img src="../assets/youtube_here.png" alt="YouTubeはこちらのボタン" v-if="!isSmartPhoneWidth">
            <img src="../assets/youtube_here_sp.png" alt="YouTubeはこちらのボタン" v-if="isSmartPhoneWidth" width="100%">
          </a>
        </div>
      </div>
    </div>

    <section class="profile-section">
      <div class="profile-container">
        <!--      <h1>Profile</h1>-->
        <div class="text-center">
          <img src="../assets/profile_header.png" alt="プロフィールのヘッダー" width="78%" v-if="!isSmartPhoneWidth">
          <img src="../assets/profile_header_sp.png" alt="プロフィールのヘッダー" width="100%" v-if="isSmartPhoneWidth">
        </div>

        <div class="profile-contents">
          <div class="profile-img">
            <img class="profile-img-border" src="../assets/profile_img2.png" alt="TAKECHANのプロフィール画像" width="300px">
          </div>
          <div class="profile-text">
            <div>名前：TAKECHAN(たけちゃん)</div>
            <div>
              6歳から15歳までクラシックのピアノを習う。大学の頃に親友にアニメを勧められ、そのアニメのオープニングに流れていた曲に心を惹かれ、
              アニソンの世界に没頭し始める。
              以来、アニソンをピアノで弾くライブを開催したりYouTubeに動画投稿したりするなど、聴く人を心から感動させるピアノを弾いている。
            </div>
            <div class="text-right">
              >もっと見る
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="container">
      <a href="https://jp.freepik.com/free-photos-vectors/background">Freepik - jp.freepik.com によって作成された background
        ベクトル</a>

      <div>
        COPYRIGHT ©アニソンピアニスト TAKECHAN ALL RIGHT RESERVED.
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import HelloWorld from '@/components/HelloWorld.vue'
  import GorgeousHeader from '@/components/GorgeousHeader.vue'
  import BlackHeader from '@/components/BlackHeader.vue'
  import BlackHeaderHamburger from '@/components/BlackHeaderHamburger.vue' // @ is an alias to /src

  @Component({
    components: {
      BlackHeaderHamburger,
      BlackHeader,
      GorgeousHeader,
      HelloWorld
    }
  })
  export default class Home extends Vue {
    isSmartPhoneWidth = window.innerWidth <= 768
  }
</script>


<style>
  body {
    background: #000000 !important;
    color: white !important;
    font-family: serif !important;
  }

  .top-container {
    background: url('../assets/hp_header_bg.png');
    background-size: cover;
    height: 100%;
    padding-bottom: 70px;
  }

  /* height 100%にする方法 https://qiita.com/FJHoshi/items/11684c352aebc8d4f87b*/
  .video {
    width: 100%;
    padding-bottom: 56.25%;
    position: relative;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.4);
  }

  .video iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .concept-container {
    margin: 20px auto;
    font-size: 22px;
  }

  .video-container {
    margin-bottom: 60px;
    /*background: black;*/
  }

  .button-container {
    margin: 30px auto;
    text-align: center;
  }

  .profile-section {
    width: 100%;
    background: #282828;
    padding-bottom: 2px;
  }

  .profile-container {
    width: 80%;
    /*margin-top: 100px;*/
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    font-size: 22px;
  }

  .profile-contents {
    margin: 60px auto;
    display: flex;
  }

  @media screen and (min-width: 769px) {
    .top-container {
      padding-bottom: 70px;
    }

    .anison-pianist-text-img {
      margin: 120px auto 40px;
    }

    .profile-section {
      padding-top: 100px;
    }

    .profile-text {
      margin-left: 50px;
    }

    .concept-container {
      width: 80%;
    }
  }

  @media screen and (max-width: 768px) {
    .top-container {
      padding-bottom: 50px;
    }

    .anison-pianist-text-img {
      margin: 100px auto 40px;
    }

    .concept-container {
      width: 100%;
      background: rgba(0, 0, 0, 0.35);
      padding: 12px;
    }

    .profile-section {
      padding-top: 65px;
    }

    .profile-container {
      width: 100%;
    }

    .profile-contents {
      flex-direction: column;
      align-items: center;
    }

    .profile-text {
      margin-top: 40px;
      width: 95%;
    }
  }

  .profile-img-border {
    border: 5px solid #571616;
    box-shadow: 10px 10px 10px rgba(192, 156, 161, 0.3);
  }

  .profile-img {
    border: 1px solid #535353;
  }

  a {
    transition: all 0.2s 0s ease;
  }

  a:hover {
    opacity: 0.8;
  }
</style>

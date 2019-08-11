<template>
  <div>
    <black-header></black-header>
    <div class="top-container">
      <div class="container">
        <div class="text-center">
          <img class="anison-pianist-text-img" src="../assets/anison_pianist_takechan.png" height="240"
               alt="Anision pianist TAKECHANのテキスト画像">
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
            <img src="../assets/youtube_here.png" alt="YouTubeはこちらのボタン">
          </a>
        </div>
      </div>
    </div>

    <div class="profile-container">
      <!--      <h1>Profile</h1>-->
      <div class="text-center">
        <img src="../assets/profile_header.png" alt="プロフィールのヘッダー" height="120">
      </div>

      <div class="profile-contents">
        <div class="profile-img">
          <img class="profile-img-border" src="../assets/profile_img2.png" alt="TAKECHANのプロフィール画像" width="300">
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
  import BlackHeader from '@/components/BlackHeader.vue' // @ is an alias to /src

  @Component({
    components: {
      BlackHeader,
      GorgeousHeader,
      HelloWorld
    }
  })
  export default class Home extends Vue {
  }
</script>

<style>
  body {
    background: #000000 !important;
    color: white !important;
    font-family: serif !important;
  }

  .top-container {
    /*background: url('../assets/piano_sky.png');*/
    background: url('../assets/hp_header_bg.png');
    background-size: cover;
    height: 100%;
    /*background-position-x: center;*/
  }

  .anison-pianist-text-img {
    margin: 120px auto 40px;

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
    width: 80%;
    margin: 20px auto;
    font-size: 22px;
  }

  .video-container {
    margin-bottom: 60px;
    /*background: black;*/
  }

  .button-container {
    margin: 30px auto 100px;
    text-align: center;
  }

  .profile-container {
    width: 80%;
    margin-top: 100px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    font-size: 22px;
    background: #282828;
  }

  .profile-contents {
    margin: 60px auto;
    display: flex;
  }

  .profile-img-border {
    border: 5px solid #571616;
    box-shadow: 10px 10px 10px rgba(192, 156, 161, 0.3);
  }

  .profile-img {
    border: 1px solid #535353;
  }

  .profile-text {
    margin-left: 50px;
  }
</style>

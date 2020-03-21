<template>
  <div class="chat-bot">
    <div class="title-bar" @click="toggle">▼チャットはこちらをクリック</div>
    <div class="chat-container" v-show="isOpened">
      <div v-for="(c, index) in chats" :key="index">
        <div v-if="c.isBot" class="message-container">
          <div>
            <img src="@/assets/profile_img.png" class="bot-icon" width="30" alt="チャットボットの画像">
          </div>
          <div class="tirangle ml-1"></div>
          <div class="chat-message">
            <div>
              <div class="bot-name mb-1">たけちゃん@アニソンピアニスト</div>
              <div class="message" v-html="c.message "></div>
              <div v-if="c.messageType === MessageType.Radio">
                <div v-for="(button, index) in c.radio.buttons" :key="index">
                  <div v-if="button.isSelected">
                    <span class="submitted-answer">{{ button.contents }}</span>
                  </div>
                  <button v-else-if="!button.isSelected && !c.radio.isSubmitted"
                          class="form-control"
                          @click="submitRadioAnswer(c.radio, button)"
                  >
                    {{ button.contents }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-time ml-2">{{ c.time }}</div>
        </div>

        <div v-else class="user-container">
          <div class="chat-message">
            <div>
              <div class="bot-name mb-1">あなた</div>
              <div class="message">{{ c.message }}</div>
            </div>
          </div>
          <div class="tirangle-right"></div>
          <div class="chat-time ml-2">{{ c.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {MessageType} from '@/type/chat-bot/message-type'
  import Moment from 'moment';
  import {Chat} from '@/type/chat-bot/chat'
  import {Radio} from '@/type/chat-bot/radio'
  import {RadioButton} from '@/type/chat-bot/radio-button'

  @Component
  export default class ChatBot extends Vue {
    isOpened = false;

    MessageType = MessageType;

    chats: Chat[] = [];

    mounted() {
      this.chats.push({
        messageType: MessageType.Message,
        isBot: true,
        message: `こんにちは！
              こちらはたけちゃんのチャットボットです。
              あなたに合ったオススメのコンテンツを表示します。`,
        time: Moment().format('HH:mm')
      });

      this.chats.push({
        messageType: MessageType.Radio,
        isBot: true,
        message: `何をしたいですか？`,
        time: Moment().format('HH:mm'),
        radio: {
          isSubmitted: false,
          buttons: [
            {id: 1, isSelected: false, contents: '楽譜を見たい'},
            {id: 2, isSelected: false, contents: 'ピアノの演奏を聞きたい'},
            {id: 3, isSelected: false, contents: 'ピアノの動画を見たい'},
            {id: 4, isSelected: false, contents: '日々の投稿を見たい'},
            {id: 5, isSelected: false, contents: 'お仕事を依頼したい'}
          ]
        }
      });
    }

    toggle() {
      this.isOpened = !this.isOpened;
      console.log(this.isOpened);
    }

    submitRadioAnswer(radio: Radio, button: RadioButton) {
      radio.isSubmitted = true;
      button.isSelected = true;

      this.addMessage(button.contents, false);

      if (button.id === 1) {
        const contents = `楽譜は以下のページから購入できます！
        ${this.showUrlPreview('https://store.piascore.com/search?c=898')}`;
        this.addMessage(contents, true);
      } else if (button.id === 2) {
        const contents = `毎週木曜と土曜日にピアノ音源をアップ、そして毎週土曜日にピアノラジオのライブ配信をしております！
        ${this.showUrlPreview('https://www.spooncast.net/jp/profile/310937805/cast?t=upload')}`;
        this.addMessage(contents, true);
      } else if (button.id === 3) {
        const contents = `YouTubeでピアノ動画を公開しています！ぜひご覧ください。
        ${this.showUrlPreview('https://www.youtube.com/channel/UCavjtKPARTVL0JXBrFvaZFw?sub_confirmation=1')}`;
        this.addMessage(contents, true);
      } else if (button.id === 4) {
        const contents = `たけちゃんが日々やっていることや日常を投稿しています。お知らせをチェックしたい！という方にはオススメです。
        ${this.showUrlPreview('https://twitter.com/takechan_piano')}`;
        this.addMessage(contents, true);
        this.addMessage(`facebookページで発信しています。
        ${this.showUrlPreview('https://www.facebook.com/takechan.pianist')}
        `, true);
        this.addMessage(`LINE公式アカウントもやってますので、ぜひ友達追加よろしくお願いします。
        ${this.showUrlPreview('https://lin.ee/tmJpDYi')}
        `, true);
      } else if (button.id === 5) {
        const contents = `ココナラでサービスを出品しているので、ぜひご検討ください。ピアノをお仕事だけでなく、Webデザインのお仕事も募集中です。
        ${this.showUrlPreview('https://profile.coconala.com/users/1150591')}`;
        this.addMessage(contents, true);
        this.addMessage(`メールでのお問い合わせはこちら！
        <a href="mailto:takechan@anison-pianist.com">takechan@anison-pianist.com</a>`, true);
      }
    }

    showUrlPreview(url: string) {
      return `<a href="${url}">${url}</a>
<iframe src="//cdn.iframe.ly/api/iframe?app=1&api_key=1fcbe0e21215dcd3532f84&url=${url}" 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="border: solid 2px white;"></iframe>`
    }

    addMessage(text: string, isBot: boolean) {
      this.chats.push({
        messageType: MessageType.Message,
        isBot: isBot,
        message: text,
        time: Moment().format('HH:mm')
      });
    }
  }
</script>

<style scoped>
  .chat-bot {
    width: 33%;
    position: fixed;
    bottom: 0;
    z-index: 2020;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.4);
  }

  .title-bar {
    background: #12a151;
    padding-left: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .chat-container {
    background: white;
    color: #535353;
    padding-bottom: 15px;
    max-height: 500px;
    overflow-y: scroll;
  }

  .message {
    white-space: pre-line;
    word-break: break-all;
  }

  .message-container, .user-container {
    display: flex;
    align-items: flex-end;
    padding: 18px 10px 5px;
  }

  .user-container {
    justify-content: flex-end;
  }

  .bot-icon {
    border-radius: 50%
  }

  .chat-message {
    background: #ededed;
    color: black;
    padding: 10px;
    font-size: 14px;
    font-weight: normal;
  }

  .tirangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 13px 10px;
    border-color: transparent transparent #ededed transparent;
  }

  .tirangle-right {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 13px 0 0 10px;
    border-color: transparent transparent transparent #ededed;
  }

  .bot-name, .chat-time {
    color: #6e6e6e;
    font-size: 12px;
  }

  .submitted-answer {
    font-size: 17px;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .chat-bot {
      width: 100%;
    }
  }

  @media screen and (min-width: 769px) {
    .chat-bot {
      width: 33%;
      right: 10px;
    }
  }
</style>

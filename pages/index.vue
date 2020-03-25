<template>
  <main class="content">
    <section class="mainVisual">
      <h1 class="title">
        <img
          src="@/assets/img/top/mv_text.svg"
          alt="仲間と一緒にバンドを楽しみたい Light.Music.Org. 社会人軽音サークル L.M.O."
        />
      </h1>
      <div class="illust">
        <img src="@/assets/img/top/mv_illust.svg" alt />
      </div>
    </section>
    <section class="c-section info">
      <div class="c-sectionInner">
        <h2 class="c-sectionTitle">
          <span class="c-sectionTitleEn">Information</span>
          イベント情報
        </h2>
        <ul class="infoList c-sectionInner">
          <li>
            <a href="null">
              <div class="date">2019.08.01</div>
              <p class="text">11/9 くじ引きライブ</p>
              <div class="tag tag-m">Team:M</div>
            </a>
          </li>
          <li>
            <a href="null">
              <div class="date">2019.08.01</div>
              <p class="text">11/9 くじ引きライブ</p>
              <div class="tag tag-l">Team:L</div>
            </a>
          </li>
          <li>
            <a href="null">
              <div class="date">2019.08.01</div>
              <p class="text">11/9 くじ引きライブ</p>
              <div class="tag tag-o">Team:O</div>
            </a>
          </li>
        </ul>
        <div class="btnArea">
          <a href="null" class="c-btn">イベント一覧を見る</a>
        </div>
      </div>
    </section>
    <section class="c-section about">
      <div class="c-sectionInner">
        <h2 class="c-sectionTitle">
          <span class="c-sectionTitleEn">About</span>
          L.M.O.について
        </h2>
        <div class="content">
          <h3 class="title">
            <span class="firstLine">バンドがやりたいじゃない</span>
            <br />仲間と一緒に
            <br />バンドを楽しみたい
          </h3>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '~@/assets/css/Project/_top.scss';
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
  public hogehoge: string = 'hogehogeee'
}
</script>

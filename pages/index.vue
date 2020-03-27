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
      <div class="c-sectionInner inner">
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
          <p class="readText">
            これをモットーに活動する
            <strong>社会人軽音サークルグループ</strong>です。
            <br />現在「Team:L（入部者募集一時中止）」「Team:M
            」の2サークルの管理/運営してます。
            <br />それぞれ独立したサークルではありますが、コンセプトや活動内容はほとんど同じです。
            <br />年に数回、L.M.O.全体で交流会も行っています。
          </p>
          <div class="detail">
            <div class="item">
              <h4 class="detailTitle">拠点</h4>
              <p class="detailText">飲み会会場を五反田とし、ライブや行事ごとに様々な場所で活動中</p>
            </div>
            <div class="item">
              <h4 class="detailTitle">具体的な活動内容</h4>
              <p class="detailText col2">
                <span>
                  ・定例飲み会(毎月第二土曜日)
                  <br />・平日飲み会(不定期)
                  <br />・２種類のライブ（4.5回/年）
                  <span class="line">
                    - くじ引きスタジオライブ
                    <br />- ライブハウスでのライブ
                  </span>
                </span>
                <span>
                  ・季節毎のイベント（花見、BBQ、etc…）
                  <br />・初心者向け楽器講習会
                  <br />・L.M.O.合同ライブ(1,2回/年)
                </span>
              </p>
            </div>
          </div>
          <div class="btnArea">
            <a href="null" class="c-btn">もっと知る</a>
          </div>
        </div>
      </div>
    </section>
    <section class="c-section join">
      <div class="c-sectionInner">
        <h2 class="c-sectionTitle">
          <span class="c-sectionTitleEn">Join</span>
          入部について
        </h2>
        <p class="readText">社会人軽音サークルL.M.O.では、バンドだけでなく様々な活動を一緒に楽しんでくれる仲間を募集しています！</p>
        <div class="content">
          <figure class="illust">
            <img src="@/assets/img/top/join_illust.png" alt />
          </figure>
          <div class="textArea">
            <h3 class="title">入部必須条件</h3>
            <ul class="list">
              <li>毎月第2土曜の定例飲み会に参加できる方</li>
              <li>積極的に部員と会話しようと努力できる方</li>
              <li>ライブだけでなく、他のイベントにも積極的に参加できる方</li>
              <li>バンドがやりたいだけというわけではなく、新しい仲間と音楽が楽しみたい方</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="c-section guide">
      <p class="text">
        入部を希望される場合、
        <br />入部案内より手順を必ずご覧いただいた上でお申し込みください。
      </p>
      <div class="btnArea">
        <a href="null" class="c-btn c-btn--lerge">入部案内はこちら</a>
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

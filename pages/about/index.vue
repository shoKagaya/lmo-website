<template>
  <main class="wrapper">
    <header class="c-contentsHeader">
      <h1 class="c-pageTitle">L.M.O.について</h1>
    </header>
    <div class="contents">
      <section class="c-section section c-sectionInner">
        <header class="contentsHeader">
          <h2 class="title">
            <span class="firstLine">バンドがやりたいじゃない</span>仲間と一緒に
            <br />バンドを楽しみたい
          </h2>
          <p class="readText">
            これをモットーに活動する
            <strong>社会人軽音サークルグループ</strong>です。
            <br />現在「Team:L（入部者募集一時中止）」「Team:M
            」の2サークルの管理/運営してます。
            <br />それぞれ独立したサークルではありますが、コンセプトや活動内容はほとんど同じです。
            <br />年に数回、L.M.O.全体で交流会も行っています。
          </p>
        </header>
        <ul class="detail">
          <li class="item">
            <h4 class="detailTitle">各チーム</h4>
            <p class="detailText">
              ・
              <strong>Team:L</strong> 2016年4月発足、部員数約200名。現在入部者一時中止
              <br />・
              <strong>Team:M</strong> 2018年12月発足、部員数約120名。入部者募集中
            </p>
          </li>
          <li class="item">
            <h4 class="detailTitle">コンセプト</h4>
            <p class="detailText">
              ・大学の軽音サークルのようなイメージです
              <br />・サークル内に部活があり、音楽以外でも楽しむことができます
              <br />・初心者も経験者も、分け隔てなく仲良しです
              <br />・演奏力より、仲間になろうとする想いを一番大事にしています
            </p>
          </li>
          <li class="item">
            <h4 class="detailTitle">拠点</h4>
            <p class="detailText">飲み会会場を五反田とし、ライブや行事ごとに様々な場所で活動中</p>
          </li>
          <li class="item">
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
          </li>
          <li class="item">
            <h4 class="detailTitle">拠点</h4>
            <p class="detailText">飲み会会場を五反田とし、ライブや行事ごとに様々な場所で活動中</p>
          </li>
        </ul>
        <div class="btnArea">
          <a href="null" class="c-btn">もっと知る</a>
        </div>
      </section>
      <section class="c-section section c-sectionInner">
        <header class="contentsHeader">
          <h2 class="title">運営体制</h2>
        </header>
        <p class="readText">
          『管理本部』
          作業内容：年間スケジュール管理/会計/現場補助
          メンバー：現在7名
          『講習会運営』
          作業内容：初心者楽器講習会の企画、運営
          メンバー：現在1名＋各パートの講師
          『ホームページ委員会』
          作業内容：当ホームページの管理
          メンバー：複数名
          『SNS向上委員会』
          作業内容：Twitter、Facebookなどの管理、運営
          メンバー：現在2名
        </p>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
//@import '~@/assets/css/Project/_top.scss';
.contents {
  background-color: #fcf5ef;
}

.section {
  background-color: #fff;
  border: $border;
  border-radius: 20px;
  margin-bottom: 40px;
  padding: 40px 86px;
  position: relative;
  top: -80px;

  .readText {
    line-height: 2;
    text-align: center;
  }

  .contentsHeader {
    border-radius: 16px;
    margin-bottom: 40px;
  }

  .title {
    background: url(~assets/img/top/about_title.svg) no-repeat;
    background-color: #fff;
    background-position: center;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 40px;
    text-align: center;

    .firstLine {
      display: block;
      font-size: 2.4rem;
      margin-bottom: 8px;
    }
  }

  .detail {
    margin-bottom: 40px;

    .item {
      background-color: #f3eedb;
      border-radius: 16px;
      margin-bottom: 24px;
      padding: 24px 32px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .detailTitle {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .detailText {
      line-height: 2;

      &.col2 {
        align-items: flex-start;
        display: flex;
        justify-content: flex-start;

        > span {
          width: 50%;
        }

        .line {
          display: block;
          padding-left: 1.4rem;
        }
      }
    }
  }
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {
  public hogehoge: string = 'hogehogeee'
}
</script>

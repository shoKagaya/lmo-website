<template>
  <footer class="l-footer">
    <div class="c-sectionInner">
      <div class="footerNav">
        <div class="logo">
          <a href="/">
            <img src="@/assets/img/common/logo.svg" alt="社会人軽音サークルLMO" />
          </a>
        </div>
        <nav class="nav">
          <ul>
            <li>
              <a href="null">L.M.O.について</a>
            </li>
            <li>
              <a href="null">イベント情報</a>
            </li>
            <li>
              <a href="null">ブログ</a>
            </li>
            <li>
              <a href="null">代表より</a>
            </li>
            <li>
              <a href="null">サークル規約</a>
            </li>
            <li>
              <a href="null">お問い合わせ</a>
            </li>
            <li>
              <a href="null">入部案内</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footerShare">
        <div class="contact">
          <a href="null" class="c-btn c-btn--ghostBtn">
            <img src="@/assets/img/common/mail_icon.svg" alt="icon" class="c-btn_icon" />メールで問い合わせ
          </a>
        </div>
        <ul class="share">
          <li>
            <a href="null">SHARE!!</a>
          </li>
          <li>
            <a href="null">
              <img src="@/assets/img/common/snsicon-fb.svg" alt />
            </a>
          </li>
          <li>
            <a href="null">
              <img src="@/assets/img/common/snsicon-tw.svg" alt />
            </a>
          </li>
          <li>
            <a href="null">
              <img src="@/assets/img/common/snsicon-line.svg" alt />
            </a>
          </li>
        </ul>
      </div>
      <div class="copyright">© L.M.O</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.l-footer {
  background-color: #fff;
  padding: 40px 0;

  .footerNav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .nav {
    ul {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    li {
      a {
        font-weight: bold;
        margin: 0 16px;
      }
    }
  }

  .footerShare {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .share {
      align-items: center;
      display: flex;

      li {
        margin: 0 6px;
      }
    }
  }

  .copyright {
    text-align: center;
  }
}
</style>

<script>
export default {
  name: 'Footer'
}
</script>

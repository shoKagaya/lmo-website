<template>
  <header class="l-header">
    <div class="logo">
      <a href="/">
        <img src="@/assets/img/common/logo.svg" alt="社会人軽音サークルLMO" />
      </a>
    </div>
    <div class="nav">
      <nav>
        <ul class="navList">
          <li>
            <nuxt-link to="/about">L.M.O.について</nuxt-link>
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
        </ul>
      </nav>
      <a href="null" class="btn">入部案内</a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.l-header {
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  left: 0;
  padding: 12px 40px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;

  .nav {
    align-items: center;
    display: flex;
  }

  .navList {
    align-items: center;
    display: flex;

    li {
      margin: 0 16px;

      a {
        align-items: center;
        display: flex;
        font-weight: bold;
        height: 52px;
      }
    }
  }

  .btn {
    align-items: center;
    background-color: #de5d0b;
    border-radius: 50px;
    color: #fff;
    display: flex;
    font-weight: bold;
    height: 52px;
    justify-content: center;
    margin-left: 20px;
    width: 136px;
  }
}
</style>

<script>
export default {
  name: 'Header'
}
</script>

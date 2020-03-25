<template>
  <header class="l-header">
    <div class="logo">
      <img src="@/assets/img/top/logo.svg" alt />
    </div>
    <div class="nav">
      <nav>
        <ul class="navList">
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
        </ul>
      </nav>
      <a href="null" class="btn">入部案内</a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.l-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;

  .nav {
    display: flex;
    align-items: center;
  }

  .navList {
    display: flex;
    align-items: center;

    li {
      margin: 0 20px;

      a {
        font-weight: bold;
      }
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 136px;
    height: 52px;
    background-color: #de5d0b;
    border-radius: 50px;
    margin-left: 20px;
    color: #fff;
    font-weight: bold;
  }
}
</style>

<script>
export default {
  name: 'Header'
}
</script>

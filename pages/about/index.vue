<template>
  <main class="wrapper">
    <header class="c-contentsHeader">
      <h1 class="c-pageTitle">入部の流れ</h1>
    </header>
    <div class="contents">
      <section class="c-section section c-sectionInner">
        <p class="readText">※現在入部希望可能なのは『Team:M』のみとなっております。</p>
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
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {
  public hogehoge: string = 'hogehogeee'
}
</script>

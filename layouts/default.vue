<template>
  <div>
    <div class="animationBackground"></div>
    <div class="wrapper">
      <LayoutHeader />
      <top-page />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animationBackground {
  background-color: #f3eedb;
  background-image: url('~assets/img/common/bg_pattern.png');
  background-position: 95px 10px;
  background-repeat: repeat;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: all 0.1s linear;
  width: 100%;
  z-index: 0;
}

.wrapper {
  position: relative;
}
</style>

<style lang="scss">
@import '~@/assets/css/style.scss';
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LayoutHeader from '@/components/organisms/header.vue'
import TopPage from '@/pages/index.vue'

@Component({
  components: {
    LayoutHeader,
    TopPage
  }
})
export default class Home extends Vue {
  public hogehoge: string = 'hogehogeee'
}
</script>

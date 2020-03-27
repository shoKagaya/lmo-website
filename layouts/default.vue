<template>
  <div>
    <div class="animationBackground"></div>
    <div class="wrapper">
      <LayoutHeader />
      <top-page />
      <LayoutFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animationBackground {
  animation: translate 6s linear infinite;
  background-color: #f3eedb;
  background-image: url('~assets/img/common/bg_pattern.png');
  background-position: 0;
  background-repeat: repeat;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;
}

@keyframes translate {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -360px -360px;
  }
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
import LayoutFooter from '@/components/organisms/footer.vue'
import TopPage from '@/pages/index.vue'

@Component({
  components: {
    LayoutHeader,
    LayoutFooter,
    TopPage
  }
})
export default class Home extends Vue {
  public hogehoge: string = 'hogehogeee'
}
</script>

<template>
  <div>
    <top-page></top-page>
  </div>
</template>

<style lang="scss">
@import '~@/assets/css/common.scss';
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopPage from '@/pages/index.vue'

@Component({
  components: {
    TopPage
  }
})
export default class Home extends Vue {
  public hogehoge: string = 'hogehogeee'
}
</script>

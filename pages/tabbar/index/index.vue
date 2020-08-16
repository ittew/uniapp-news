<template>
  <view class="content">
    <navbar />
    <tab v-if="tabList" :list="tabList" @tabHandle="tabHandle" />
  </view>
</template>

<script>
import {get_label} from '../../../common/api/index.js'
export default {
  data() {
    return {
      title: 'Hello11',
      tabList: []
    }
  },
  onLoad() {
    this.getLabel()
  },
  methods: {
    getLabel(){
      // 调用云函数方法
      this.$api.get_label().then((res) => {
      	const { data } = res
        console.log('标签 ', data);
        //用代码在所有项目前插入  ‘全部‘
        data.unshift({ name: '全部' })
        this.tabList = data
      })
    },
    tabHandle ({data, index}) {
      console.log(data, index)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

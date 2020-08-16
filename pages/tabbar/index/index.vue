<template>
  <view class="content">
    <navbar />
    <tab v-if="tabList" :list="tabList" />
  </view>
</template>

<script>
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
      uniCloud.callFunction({
        name:"get_label"
      }).then(res=>{
        const {result} = res
        this.tabList = result.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <view class="navbar">
     <view class="navbar-fixed">
       <!-- 状态栏 -->
       <view :style="{height:statusBarHeight+'px'}"></view>
       <view class="navbar-content" :style="{height:navBarHeight+'px', width: navBarWidth+'px'}">
        <view class="navbar-search">
          <!-- 搜索页显示  -->
          <uni-icons type="search" size="16" color="#999"></uni-icons>
          <input class="navbar-search_text" type="text" placeholder="请输入您要搜索的内容" />
        </view>
       </view>
     </view>
     <view :style="{height: statusBarHeight+navBarHeight+'px'}"></view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        statusBarHeight: 20,
        navBarHeight: 45,
        navBarWidth: 375
      }
    },
    created() {
      // 获取手机系统信息
      const info = uni.getSystemInfoSync()
      // 设置状态栏高度
      this.statusBarHeight = info.statusBarHeight
      this.navBarWidth = info.windowWidth
      console.log(info)
      // H5 app mp-alipay
      // #ifndef H5 || APP-PLUS || MP-ALIPAY
      // 获取胶囊位置
      const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
      console.log(menuButtonInfo)
      // (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
      this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
      this.navBarWidth = menuButtonInfo.left
      // #endif
    }
  }
</script>

<style lang="scss">
  .navbar {
    .navbar-fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      width: 100%;
      background-color: $mk-base-color;

      .navbar-content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
        height: 45px;
        box-sizing: border-box;

        .navbar-search {
          display: flex;
          align-items: center;
          padding: 0 10px;
          width: 100%;
          height: 30px;
          border-radius: 30px;
          background-color: #fff;

          .navbar-search_icon {
            // width: 10px;
            // height: 10px;
            margin-right: 10px;
          }

          .navbar-search_text {
            width: 100%;
            font-size: 14px;
            color: #999;
          }
        }

        &.search {
          padding-left: 0;

          .navbar-content__search-icons {
            margin-left: 10px;
            margin-right: 10px;
          }

          .navbar-search {
            border-radius: 5px;
          }
        }
      }

    }

  }
</style>

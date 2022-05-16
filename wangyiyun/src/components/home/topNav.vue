<template>
  <div class="topNav">
      <div class="listIcon">
          <p class="iconfont icon-liebiao2"></p>
      </div>
      <div class="topContent">
          <span>我的</span>
          <span class="active">发现</span>
          <span>云村</span>
          <span>视频</span>
      </div>
      <div class="searchIcon">
          <p class="iconfont icon-a-ziyuan7"></p>
      </div>
  </div>
</template>

<script>
export default {
    name:"topNav"
}
</script>

<style lang="less" scoped>
    .topNav{
        width: 100%;
        height: 1rem;
        padding: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .topContent{
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: .32rem;
        }
        .active{
            font-weight: 900;
        }

    }
</style>
<template>
  <div class="content">
    <div class="sub-title">尽情体验</div>
    <div class="title">通用后台管理系统</div>
    <div class="desc">
      - Vite + Vue3.0 + ElementPlus + Node + Mongo 打造通用后台管理系统
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // bottom: 40px;
  .sub-title {
    font-size: 30px;
    line-height: 42px;
    color: #333;
  }
  .title {
    font-size: 40px;
    line-height: 62px;
    color: #409eff;
  }
  .desc {
    text-align: right;
    font-size: 14px;
    color: #999;
  }
}
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;

  .img {
    margin-left: 105px;
    background-image: url('./../assets/images/welcome.png');
    width: 371px;
    height: 438px;
  }
}
</style>

<template>
  <div class="content">
    <div class="sub-title">尽情体验</div>
    <div class="title">通用后台管理系统</div>
    <div class="desc">
      - Vite + Vue3.0 + ElementPlus + Node + Mongo 打造通用后台管理系统
    </div>

    <el-upload
      action=""
      type="file"
      name="file"
      accept="*/*"
      :on-change="changeUpload"
    >
      <el-button size="mini" type="primary"
        ><i class="el-icon-upload el-icon--right"></i> 点击上传</el-button
      >
    </el-upload>

    <input type="file" name="file" id="file" value="" />
    <button id="submit" @click="aa">上传</button>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
export default {
  name: 'welcome',
  methods: {
    aa() {
      var file = document.getElementById('file').files[0];
      
      if (!file) {
        alert('请上传文件');
        return;
      }
      console.log(file);

      var formdata = new FormData();
      formdata.append('file', file);

      var xhr = new XMLHttpRequest();
      xhr.open('post', '/api/leave/upload');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const result = JSON.parse(xhr.response);
          console.log(result);
        }
      };
      xhr.send(formdata);
    },
    changeUpload(file, fileList) {
      console.log('上传文件:', file.raw);

      let formData = new FormData();
      formData.append('file', file.raw);

      this.$api
        .uploadPicApi(formData)
        .then((res) => {
          console.log('接口返回数据:', res);
        })
        .catch((e) => {
          console.log('上传失败', e);
        });
    },
  },
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

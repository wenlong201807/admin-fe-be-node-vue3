<template>
  <div class="content">
    <el-upload
      ref="uploadRef"
      :auto-upload="false"
      accept="*/*"
      :on-change="changeUpload"
    >
      <el-button size="mini" type="primary"
        ><i class="el-icon-upload el-icon--right"></i> 点击上传</el-button
      >
    </el-upload>
    <img class="img_cls" v-show="filepath" :src="fullpath" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  name: 'upload',
  data() {
    return {
      filepath: '',
      fullpath: '',
    };
  },
  methods: {
    changeUpload(file, fileList) {
      console.log('上传文件:', file.raw);

      let formData = new FormData();
      formData.append('file', file.raw);

      this.$api
        .uploadPicApi(formData)
        .then((res) => {
          // console.log('接口返回数据:', res, import.meta.env);
          this.filepath = res.url;
          this.fullpath = `${import.meta.env.VITE_API_ADDRESS}${res.url}`;
        })
        .catch((e) => {
          console.log('上传失败', e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.img_cls {
  height: 100px;
  width: 100%;
  object-fit: contain;
}
</style>

<template>
  <div class="basic-layout">
    <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
      <!-- 系统LOGO -->
      <div class="logo">
        <!-- <img src="./../assets/logo.png" /> -->
        <span>通用后台系统</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu
        :default-active="activeMenu"
        background-color="#001529"
        text-color="#fff"
        router
        :collapse="isCollapse"
        class="nav-menu"
      >
        <tree-menu :userMenu="userMenu" />
      </el-menu>
    </div>
    <div :class="['content-right', isCollapse ? 'fold' : 'unfold']">
      <div :class="['nav-top', isCollapse ? 'fold' : 'unfold']">
        <div class="nav-left">
          <!-- <div class="menu-fold" @click="toggle">
            <i class="el-icon-s-fold"></i>
          </div> -->
          <div class="bread">
            <BreadCrumb />
          </div>
        </div>
        <div class="user-info">
          <el-badge
            :is-dot="noticeCount > 0 ? true : false"
            class="notice"
            type="danger"
            @click="
              () => {
                $router.push('/audit/approve');
                activeMenu = '/audit/approve';
              }
            "
          >
            <i class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown>
            <span class="user-link">
              {{ userInfo.userName }}
              <i class="el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  >邮箱：{{ userInfo.userEmail }}</el-dropdown-item
                >
                <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TreeMenu from './TreeMenu.vue';
import BreadCrumb from './BreadCrumb.vue';
export default {
  name: 'Home',
  components: { TreeMenu, BreadCrumb },
  data() {
    return {
      isCollapse: false,
      userInfo: this.$store.state.userInfo,
      noticeCount: 0,
      userMenu: [],
      activeMenu: location.hash.slice(1),
    };
  },
  computed: {
    noticeCount() {
      return this.$store.state.noticeCount;
    },
  },
  mounted() {
    this.getNoticeCount();
    this.getMenuList();
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse;
    },
    handleLogout(key) {
      if (key == 'email') return;
      this.$store.commit('saveUserInfo', '');
      this.userInfo = {};
      this.$router.push('/login');
    },
    async getNoticeCount() {
      try {
        const count = await this.$api.noticeCount();
        this.$store.commit('saveNoticeCount', count);
      } catch (error) {
        console.error(error);
      }
    },
    async getMenuList() {
      try {
        const { menuList, actionList } = await this.$api.getPermissionList();
        this.$store.commit('saveMenuList', menuList);
        this.$store.commit('saveActionList', actionList);
        this.userMenu = menuList;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
    z-index: 2;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      height: 50px;
      img {
        margin: 0 16px;
        width: 32px;
        height: 32px;
      }
    }
    .nav-menu {
      height: calc(100% - 50px);
      border-right: none;
    }
    // 合并
    &.fold {
      width: 64px;
    }
    // 展开
    &.unfold {
      width: 200px;
    }
  }
  .content-right {
    margin-left: 200px;
    padding-top: 50px; // 顶部固定定位
    // 合并
    &.fold {
      margin-left: 64px;
    }
    // 展开
    &.unfold {
      margin-left: 200px;
    }
    .nav-top {
      position: fixed;
      top: 0;
      z-index: 10;
      // width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      background: #fff;
      // transition: all ease 1s;
      // // 合并
      // &.fold {
      //   width: calc(100% - 64px);
      // }
      // // 展开
      &.unfold {
        width: calc(100% - 200px);
      }

      .nav-left {
        display: flex;
        align-items: center;
        .menu-fold {
          margin-right: 15px;
          font-size: 18px;
        }
      }
      .user-info {
        .notice {
          line-height: 30px;
          margin-right: 15px;
          cursor: pointer;
        }
        .user-link {
          cursor: pointer;
          color: #409eff;
        }
      }
    }
    .wrapper {
      box-sizing: border-box;
      background: #eef0f3;
      padding: 20px;
      min-height: calc(100vh - 50px);
      height: calc(100% - 50px);
      .main-page {
        background: #fff;
        height: 100%;
      }
    }
  }
}
</style>

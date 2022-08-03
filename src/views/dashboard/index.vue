<template>
  <div class="dashboard">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <el-button size="small">工作台</el-button>
        <!-- 下拉菜单 -->
        <el-dropdown>
          <span class="xiala">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <template><i class="el-icon-back"></i> </template>
              关闭左侧</el-dropdown-item
            >
            <el-dropdown-item>
              <template><i class="el-icon-right"></i></template>
              关闭右侧</el-dropdown-item
            >
            <el-dropdown-item>
              <template><i class="el-icon-close"></i></template>
              关闭其他</el-dropdown-item
            >
            <el-dropdown-item>
              <template><i class="el-icon-error"></i></template>
              关闭全部</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <!-- 左侧区域 -->
        <el-aside>
          <!-- 左侧图片 -->
          <div class="left-top">
            <img src="@/assets/zuo.png" alt="" />
          </div>
          <!-- 左侧列表 -->
          <el-menu
            :collapse="isshowcollapse"
            text-color="#333"
            active-text-color="#ffd04b"
            :unique-opened="true"
            :collapse-transition="false"
            router
            :default-active="activepath"
          >
            <el-menu-item index="/dashboard" @click="changCountVal(0)">
              <i class="el-icon-menu"></i>
              <span slot="title">工作台</span>
            </el-menu-item>
            <!-- 一级菜单 -->
            <el-submenu
              :index="index"
              v-for="(item, index) in menuList"
              :key="index"
              :open="onedas"
            >
              <template slot="title">
                <i :class="iconsObj[index]"></i>
                <span>{{ item.name }}</span>
              </template>
              <!-- 二级菜单 -->
              <!-- <el-menu-item-group v-for="(str, i) in item.children" :key="i">
                <i class="el-icon-menu"></i>
                <el-menu-item index="1-1">{{ str.name }}</el-menu-item>
              </el-menu-item-group> -->
              <el-menu-item
                v-for="(str, i) in item.children"
                :key="i"
                :index="i"
                @click="activeList(str)"
              >
                <!-- 二级菜单区域 -->
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>{{ str.name }}</span>
                </template></el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧区域 -->
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import Main from "./main";
export default {
  nama: "Dashboard",
  components: {},
  props: {},
  data() {
    return {
      // 左侧一级菜单
      menuList: [
        {
          name: "基础信息管理",
          children: [
            { name: "仓库管理" },
            { name: "库区管理" },
            { name: "库位管理" },
            { name: "库位视图" },
            { name: "货品管理" },
            { name: "货品类型管理" },
          ],
        },

        {
          name: "商务管理",
          children: [{ name: "货主管理" }, { name: "承运商管理" }],
        },

        {
          name: "库内管理",
          children: [
            { name: "盘点单" },
            { name: "盘点任务" },
            { name: "库存损益" },
            { name: "实时库存" },
          ],
        },

        {
          name: "入库管理",
          children: [
            { name: "入库单" },
            { name: "收货任务" },
            { name: "上架任务" },
          ],
        },

        {
          name: "出库管理",
          children: [
            { name: "出库单" },
            { name: "拣货任务" },
            { name: "交接任务" },
          ],
        },
      ],
      iconsObj: {
        0: "el-icon-menu",
        1: "el-icon-document-copy",
        2: "el-icon-suitcase",
        3: "el-icon-s-order",
        4: "el-icon-sell",
        5: "el-icon-sold-out",
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 跳转路由
    activeList(str) {
      if (str.name === "仓库管理") {
        // 跳转到仓库管理
        this.$router.push("/depot");
        // console.log(i);
      }
      if (str.name === "库区管理") {
        this.$router.push("/kuqu");
      }
      if (str.name === "库位视图") {
        this.$router.push("/location");
      }
    },
  },
};
</script>

<style scoped lang='less'>
.dashboard {
  width: 100%;
  height: 100%;
  background-color: #fbf8f8;

  .el-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #f5f1f1;
    .el-button {
      margin: 15px 0 15px 230px;
      color: gold;
    }
    .xiala {
      text-align: center;
      line-height: 36px;
      display: block;

      margin-top: 10px;
      width: 36px;
      height: 36px;
      background: #fff;
      border-radius: 6px;
      i {
        font-weight: 700;
      }
    }
  }
  // 左侧区域
  .el-aside {
    transition: width 0.28s;
    width: 226px !important;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    background: #fff;
    box-shadow: 2px 0 6px 0 rgb(144 142 142 / 13%);
    .left-top {
      width: 226px;
      height: 100px;
      // background-color: red;
      img {
        width: 150px;
        height: 64px;
        margin-top: 20px;
        margin-left: 30px;
      }
    }
  }
  .el-main {
    height: 100%;
    width: 100%;
  }
}
</style>

<template>
  <div class="login">
    <!-- 登录盒子 -->
    <div class="login-but">
      <!-- 登录左边的盒子 -->
      <div class="login-left">
        <div class="login-top">
          <img src="@/assets/zuo.png" alt="" />
        </div>
        <!-- 登录表单 -->
        <el-form
          :model="loginForm"
          status-icon
          :rules="loginFormRules"
          ref="loginFormRef"
          label-width="100px"
        >
          <div class="login-mobil">
            <el-form-item prop="mobil">
              <el-input
                class="form-mobil"
                v-model="loginForm.mobil"
                placeholder="请输入内容"
              >
              </el-input>
              <div class="form-zhanghu">
                <img src="@/assets/zhanghu.png" alt="" />
              </div>
            </el-form-item>
          </div>
          <div class="login-pass">
            <el-form-item prop="password">
              <el-input
                class="form-password"
                type="password"
                v-model="loginForm.password"
                placeholder="请输入密码"
              >
                ></el-input
              >
              <div class="form-mima">
                <img src="@/assets/mima.png" alt="" />
              </div>
            </el-form-item>
          </div>
        </el-form>
        <!-- 记住密码 -->
        <div class="login-password">
          <input type="checkbox" />
          <span>记住密码</span>
        </div>
        <!-- 登录按钮 -->
        <el-button @click="loginBtn">立即登录</el-button>
      </div>
      <!-- 登录右边的盒子 -->
      <div class="login-right">
        <img src="@/assets/you.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  nama: "Login",
  components: {},
  props: {},
  data() {
    return {
      // 登录表单数据
      loginForm: {
        mobil: "admin",
        password: "111111",
      },
      loginFormRules: {
        mobil: [{ required: true, message: "请输入账户", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 登录请求
    loginBtn() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped lang='less'>
.login {
  position: relative;
  width: 100%;
  height: 100px;
  // 登录盒子
  .login-but {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 25%);
    width: 958px;
    height: 516px;
    background-color: pink;
    border-radius: 40px;
    box-shadow: 0 0 20px rgb(93 93 93 / 33%);
    // 登录右边的盒子
    .login-right {
      width: 560px;
      height: 516px;
      background-color: #fff;
      border-radius: 40px;
      img {
        width: 100%;
      }
    }
    // 登录左边的盒子
    .login-left {
      position: relative;
      width: 398px;
      height: 516px;
      background: #fff;
      border-radius: 34px 0 0 34px;
      .login-top {
        position: relative;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, 90%);
          width: 150px;
          height: 64px;
        }
      }
      // 登录表单
      .el-form {
        position: absolute;
        top: 185px;
        left: -40px;
        .login-mobil {
          width: 380px;
          height: 50px;
          margin-bottom: 30px;
          .form-mobil {
            float: right;
            width: 230px;
            height: 50px;
            border: 0px solid #ccc;

            padding: 0;
            /deep/.el-input__inner {
              height: 50px;
              background-color: #eee;
            }
          }
          .form-zhanghu {
            float: left;
            width: 50px;
            height: 50px;
            padding: 0;
            background: #eae7e7;
            border-radius: 8px 0 0 8px;
            img {
              width: 25px;
              height: 24px;
              margin: 12px 13px;
            }
          }
        }
        // 登录密码
        .login-pass {
          width: 380px;
          height: 50px;
          .form-password {
            float: right;
            width: 230px;
            height: 50px;
            border: 0px solid #ccc;
            background-color: #eee;
            /deep/.el-input__inner {
              height: 50px;
              background-color: #eee;
            }
          }
          .form-mima {
            float: left;
            width: 50px;
            height: 50px;
            padding: 0;
            background: #eae7e7;
            border-radius: 8px 0 0 8px;
            img {
              width: 25px;
              height: 24px;
              margin: 12px 13px;
            }
          }
        }
      }
      // 记住密码
      .login-password {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 140px;
        left: 60px;
        text-align: center;
        input {
          white-space: nowrap;
          cursor: pointer;
          outline: none;
          vertical-align: middle;
        }
        span {
          display: inline-block;
          font-weight: 400;
          font-size: 14px;
          margin-left: 5px;
        }
      }
      // 立即登录
      .el-button {
        position: absolute;
        bottom: 70px;
        left: 58px;
        width: 280px;
        height: 50px;
        background: #ffb200;
        border-radius: 8px;
        box-shadow: 0 2px 9px 1px rgb(255 178 0 / 47%);
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        color: #332929;
        line-height: 22px;
      }
    }
  }
}
</style>

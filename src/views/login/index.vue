<template>
  <div class="login">
    <div class="divLogin">
      <span></span>
      <span>
        <img src="@/assets/semi.png" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  nama: "Login",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang='less'>
.login {
  width: 100%;
  height: 100%;
  .divLogin {
    width: 958px;
    height: 516px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px rgb(93 93 93 / 33%);
    background-color: #fff;
    border-radius: 40px;
  }
}
</style>

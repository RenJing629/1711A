<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  mpType: "app",
  methods: {
    ...mapActions({
      login: "user/login",
    }),
  },
  onLaunch() {
    wx.login({
      complete: (res) => {
        if (res.errMsg === "login:ok") {
            this.login((res as any).code);
        } else {
          wx.showToast({
            title: "获取code失败", //提示的内容,
            icon: "none", //图标,
          });
        }
      },
    });
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
});
</script>

<style>
/*每个页面公共css */
page {
  height: 100%;
}
</style>

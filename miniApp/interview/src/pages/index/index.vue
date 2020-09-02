<template>
  <div class="container">
    <map :longitude="longitude" :latitude="latitude" :show-location="showLocation">
			<span>定位</span>
			<span>我的</span>
    </map>
    <button>添加面试</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      longitude: 116.41,
      latitude: 39.9,
      showLocation: true,
    };
  },
	onLoad() {},
	onShow() {
		this.getLocation();
	},
  methods: {
		getLocation(){
			wx.getLocation({
				type: 'gcj02', //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标,
				success: res => {
					this.latitude = res.latitude
					this.longitude = res.longitude
				},
				fail: () => {
					console.log("getLocation failed")
				}
			});
		}
	},
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
map {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 100rpx;
}
button {
  width: 100%;
  height: 100rpx;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>

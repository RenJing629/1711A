<template>
    <div class="loading" v-if="visible">
        <div>
            <img src="//h5.chelun.com/2017/official/img/loading.gif" alt="">
            <p>加载中...</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  &>div{
    position: relative;
    top: 50%;
    left: 2.65rem;
    -webkit-transform: translate3d(0,-50%,0);
    transform: translate3d(0,-50%,0);
    width: 2.2rem;
    height: 2.2rem;
    background: #000;
    border-radius: .2rem;
    text-align: center;
  }
  img{
    width: 1rem;
    margin-top: .35rem;
  }
  p{
    font-size: .3rem;
    color: silver;
    margin-top: .3rem;
  }
}

</style>
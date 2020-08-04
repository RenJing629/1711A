<template>
  <div>
    <div class="swiper" @click.self="closeSwiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item) in categoryImgList" :key="item.Url">
          <img :src="item.Url.replace('{0}', item.LowSize)" class="swiper-lazy" />
           <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
      </swiper>
    </div>
    <footer>
      <p>{{`${curSwiperIndex}/${count}`}}</p>
      <button>询问底价</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "@vue/composition-api";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper.scss";
import useImg from "@/hooks/useImg";
import Vue from 'vue';

interface IProps {
  imageID: number;
  SerialID: string;
  page: number;
  swiperIndex: number;
}
export default defineComponent({
  props: ["imageID", "SerialID", "page", "swiperIndex"],
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  setup(props: IProps, context) {
    const {
      page,
      count,
      categoryImgList,
      getCategoryImageListAction,
    } = useImg();
    const curSwiperIndex = ref(props.swiperIndex);
    const mySwiper = ref();
    const swiper: any = computed(() => {
        if (mySwiper.value) {
            return (mySwiper.value as any).$swiper
        }
        return {};
    })
    const swiperOptions = {
        lazy: {
            loadPrevNext: true,
        },
        on: {
            slideChange() {
                console.log('改变了，activeIndex为', swiper.value.activeIndex);
                curSwiperIndex.value = swiper.value.activeIndex + 1;
            },
        },
    };

    onMounted(async () => {
      await getCategoryImageListAction(props.SerialID, props.imageID, props.page);
      Vue.nextTick(() => {
        swiper.value.slideTo(props.swiperIndex);
      })
    });

    function closeSwiper() {
        context.emit('close');
    }

    return {
      count,
      swiper,
      mySwiper,
      closeSwiper,
      categoryImgList,
      swiperOptions,
      curSwiperIndex
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/_mixin.scss";

.swiper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  z-index: 1000;
  background: #000;
  @include flex(row, center, center);
  img {
    width: 100%;
  }
}
footer {
  position: fixed;
  z-index: 1000;
  bottom: 0.5rem;
  color: #fff;
  button {
    font-size: 0.24rem;
    padding: 0.08rem 0.15rem;
    right: 0.1rem;
    bottom: 0.1rem;
    background-color: #3aacff;
    border: none;
  }
}
</style>
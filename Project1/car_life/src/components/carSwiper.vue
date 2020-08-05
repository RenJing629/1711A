<template>
  <div>
    <div class="swiper" @click.self="closeSwiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item) in categoryImgList" :key="item.Url">
          <div class="swiper-zoom-container">
           <img :src="item.Url.replace('{0}', item.LowSize)" class="swiper-lazy" />
          </div>
           <!-- <div class="swiper-lazy-preloader"></div> -->
        </swiper-slide>
      </swiper>
    </div>
    <footer>
      <p>{{`${curSwiperIndex}/${count}`}}</p>
      <button @click="goDealer">询问底价</button>
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
      CarId
    } = useImg;
    const curSwiperIndex = ref(props.swiperIndex);
    const mySwiper = ref();
    const swiper: any = computed(() => {
        if (mySwiper.value) {
            return (mySwiper.value as any).$swiper
        }
        return {};
    })
    const swiperOptions = {
        on: {
            slideChange() {
                console.log('改变了，activeIndex为', categoryImgList);
                curSwiperIndex.value = swiper.value.activeIndex + 1;
                // 预加载下一页图片
                if (curSwiperIndex.value > categoryImgList.value.length - 2) {
                  getCategoryImageListAction(props.SerialID, props.imageID)
                }
            },
        },
    };

    onMounted(async () => {
      // await getCategoryImageListAction(props.SerialID, props.imageID, props.page);
      setTimeout(() => {
        swiper.value.slideTo(props.swiperIndex, 0);
      }, 0);
    });

    function closeSwiper() {
        context.emit('close');
    }

    function goDealer() {
      if (CarId.value) {
        context.root.$router.push(`/dealer/${CarId.value}`)
      } else {
        let serialData: any = window.sessionStorage.getItem('serialData');

        if (serialData) {
          serialData = JSON.parse(serialData);
          context.root.$router.push(`/dealer/${serialData?.list[0].car_id}`)
        }
      }
    }

    return {
      count,
      swiper,
      CarId,
      mySwiper,
      closeSwiper,
      categoryImgList,
      swiperOptions,
      curSwiperIndex,
      goDealer
    };
  },
});
</script>

<style lang="scss">
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
    width: 7.5rem;
    height: 5rem;
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
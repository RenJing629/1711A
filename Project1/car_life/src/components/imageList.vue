<template>
  <div class="wrap" @scroll="scroll" ref="scrollContaier">
    <ul ref="scrollElement">
      <li
        v-for="(item) in categoryImgList"
        :key="item.Url"
        :style="{backgroundImage: `url(${item.Url.replace('{0}', item.LowSize)})`}"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import useImg from "@/hooks/useImg";

interface IProps {
  imageID: number;
  SerialID: string;
}
export default defineComponent({
  props: {
    imageID: {
      type: Number,
      value: "",
    },
    SerialID: {
      type: String,
      value: "",
    },
  },
  setup(props: IProps, context) {
    const { page, categoryImgList, getCategoryImageListAction } = useImg();
    const scrollContaier = ref();
    const scrollElement = ref();

    let flag = false;

    onMounted(() => {
      getCategoryImageListAction(props.SerialID, props.imageID, page.value);
    });

    async function scroll(e: Event) {
      if (flag) {
        return;
      }
      const container = scrollContaier.value as HTMLDivElement;
      const ele = scrollElement.value as HTMLUListElement;

      const bottomDistance =
        ele.clientHeight - (container.scrollTop + container.clientHeight);

      if (bottomDistance < 20) {
        flag = true;
        await getCategoryImageListAction(
          props.SerialID,
          props.imageID,
          page.value
        );
        flag = false;
      }
    }

    return {
      categoryImgList,
      scroll,
      scrollContaier,
      scrollElement,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/_mixin.scss";

.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  z-index: 1000;
}
ul {
  @include flex(row, space-between, center);
  flex-wrap: wrap;
}
li {
  width: 2.46rem;
  height: 2.46rem;
  background-position: center;
  background-size: cover;
  margin-bottom: 0.06rem;
}
</style>
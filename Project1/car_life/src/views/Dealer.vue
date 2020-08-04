<template>
  <div>
    <header>
      <p>
       可向多个商家咨询最低价，商家及时回复</p>
       <img src="//h5.chelun.com/2017/official/img/icon-help.png" />
    </header>
    <section class="header" @click="showSelectCar">
      <img :src="serialDetail.Picture" alt />
      <div class="carname">
        <p>{{car.AliasName?car.AliasName: serialDetail.AliasName}}</p>
        <p>{{car.car_name?car.car_name: carDetail.car_name}}</p>
      </div>
      <span></span>
    </section>
    <!-- 车型选择组件 -->
    <transition name="slideup">
      <car-type v-if="showCarType" :selectCar="selectCar"></car-type>
      <!-- 输入信息 -->
    <span class="spantitle">个人信息</span>
    </transition>
    <div class="message">
          <p><span>姓名</span><input type="text" placeholder="输入你的真实姓名" name="" id=""></p>
          <p><span>手机</span><input type="text" placeholder="输入你的真实手机号码" name="" id=""></p>
          <p><span>城市</span><span @click="showLocation=true">{{city.CityName?city.CityName: '上海'}}</span></p>  
    </div>
      <div class="quotion"><button>资讯最低价</button></div>
      <span class="spantitle">选择保价经销商</span>
    <!-- 城市选择组件 -->
    <transition name="slideup">
      <location v-if="showLocation" @select="selectCity"></location>
    </transition>
    <!-- 经销商列表 -->
      <CarShopping :dealerList="dealerList&&dealerList"></CarShopping>
  </div>

</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  Ref,
  reactive,
  toRef,
  toRefs,
  watch,
} from "@vue/composition-api";
import useSerial from "@/hooks/useSerial";
import useLocation from "@/hooks/useLocation";
import useDealer from "@/hooks/useDealer";

import CarType from "@/components/carType.vue";
import Location from "@/components/location.vue";
import CarShopping from '@/components/carshopping.vue'
export default defineComponent({
  components: {
    CarType,
    Location,
    CarShopping, // 经销商列表组件
  },
  setup(props, { root }) {
    const {
      $route: {
        params: { id },
      },
    } = root;
    // 获取车系数据
    const { getCarDetailAction, carDetail, serialDetail } = useSerial();
   // 获取经销商列表
    const { getDealerListAction, dealerList} = useDealer();
    // 获取定位
    const { getLocationAction, current} = useLocation();
    const showCarType: Ref<boolean> = ref(false);
    const showLocation: Ref<boolean> = ref(false);
    const data = reactive({
      car: carDetail,
      city: current,
      dealerList,
      CityID : localStorage.getItem('cityid'),
    });
    onMounted(() => {
       getCarDetailAction(id);
       getLocationAction(); // 获取定位的信息
       getDealerListAction((data.car as any).car_id, (data.CityID as any)); // 默认渲染定位的数据
    });
    // 实时获取经销商的列表
    watch([() => data.car, () => data.city, () => data.dealerList], async () => {
       // getDealerListAction((data.car as any).car_id, (data.city as any).CityID); // 监听数据
    });

    function showSelectCar() {
      showCarType.value = true;
    }

    function selectCar(item: any) {
      showCarType.value = false;

      if (item.car_id === (data.car as any).car_id) {
        return;
      }
      data.car = item;
    }

    function selectCity(city: any) {
        showLocation.value = false;
        if (city.CityID === (data.city as any).CityID) {
        return;
      }
        data.city = city; // 更改数据
        data.CityID = city.CityID // 更改定位的信息
        getDealerListAction((data.car as any).car_id, (data.CityID as any)); // 点击的时候获取底部列表的数据
    }

    return {
      ...toRefs(data),
      getDealerListAction, // 获取经销商列表
      carDetail,
      serialDetail,
      showSelectCar,
      selectCar,
      selectCity,
      showCarType,
      showLocation,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/_mixin.scss";
.carname{
      margin-left: .6rem;
      width: 4.3rem;
    p:nth-child(1){
      font-size: .36rem;
      line-height: 2.2;
    }
    p:nth-child(2){
        font-size: .32rem;
        line-height: 1.2;
        color: #333;
    }
}
.message{
        background: #fff;
        padding: 0 .2rem;
    P{
            font-size: .32rem;
            height: .88rem;
            line-height: .88rem;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            color: #000;
            span{
                font-size: .32rem;
                height: .88rem;
                line-height: .88rem;
                border-bottom: 1px solid #eee;
                box-sizing: border-box;
                color: #000;
            }
            input{
                border: 0;
                height: 23px;
                font-size: .32rem;
                padding-right: .2rem;
                width: 88%;
                text-align: right;
                box-sizing: border-box;
                color: #555;
            }
    }
    
}
.message p:nth-child(3) span:nth-child(2){
  float: right;
  padding: 0px 10px;
}
 .quotion{
        background: #fff;
        text-align: center;
        padding-top: .3rem;
        padding-bottom: .28rem;
        button{
            font-size: .32rem;
            color: #fff;
            width: 80%;
            background: #3aacff;
            height: .7rem;
            border: 0;
            border-radius: .1rem;
        }
    }
    .spantitle{
    width: 100%;
   height: .5rem;
    line-height: .5rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
    display: block;
  
}
.header img {
  width: 2.3rem;
  height: 1.41rem;
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 5px;
}
.header{
  padding: 10px 20px;
}
header {
      height: .6rem;
    line-height: .6rem;
    width: 100%;
    background: #79cd92;
    text-align: center;
    z-index: 99;
  p{
    color: #fff;
    font-size: .3rem;
    display: inline-block;
  }
  img{
      width: .3rem;
    margin-left: .1rem;
    vertical-align: -9%;
    }
}
.header {
  @include flex(row, space-between, center);
  span {
    @include arrow(right, 0.3rem, #ccc);
  }
}
</style>
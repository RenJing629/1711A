<template>
    <div class="bottombox">

            <div v-for="(item,index) in dealerList.list" :key="index" class="bottomitem">
                <input type="checkbox" :checked="checked" name="">
                <p class="pl">
                    <span>{{item.dealerShortName}}</span>
                   <span>{{item.promotePrice}}</span>
                </p>
               <p class="p2"> 
                   <span>{{item.address}}</span>
                    <span>{{item.saleRange}}</span>
               </p>
            </div>
        </div>
</template>
<script>
import {defineComponent, reactive, toRefs} from '@vue/composition-api'
export default defineComponent({
    name: 'carshopping',
    props: ['dealerList'],
    setup(props, context) {
         const data = reactive ({
            checked: false
        })
         return {
            ...toRefs(data)
        }
    }
})
</script>
<style lang="scss" scoped>
.bottomitem {
    width: 100%;
 padding:15px 10px 5px 10px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
   height: 1.40rem;
    p{
        width: 80%;
        float: right;
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
    }
}
.pl span:nth-child(1){
      font-size: .3rem;
}
.pl span:nth-child(2){
       font-size: .24rem;
       color: red;
}
.p2{
    margin-top: .133333rem;
}
.p2 span:nth-child(1){
    font-size: .24rem;
    color: #a2a2a2;
    display: inline-block;
    max-width: 4.6rem;
}
.p2 span:nth-child(2){
    font-size: .24rem;
    color: #a2a2a2;
    display: inline-block;
    max-width: 4.6rem;
}
.bottombox{
    width: 100%;
    height: auto;
    .van-checkbox{
        display: inline-block;
        padding: 5px;
    }
}
</style>
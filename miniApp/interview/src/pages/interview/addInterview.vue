<template>
    <section>
        <picker @change="bindChange"  @columnchange="columnChange" :value="time" :range="[formatDays, formatHours, formatMins]" mode="multiSelector">
             <view class="picker">
                面试时间{{formatTime}}
            </view>
        </picker>
    </section>
</template>

<script lang="ts">
import moment from 'moment'
const days = [0, 1, 2, 3, 4 ,5, 6];
const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const mins = ['00', 10, 20, 30, 40, 50]
export default {
    data(){
        return {
            time: [0, 0, 0]
        }
    },
    computed: {
        formatDays(){
            return days.map(item=>{
                return moment().add(item, 'd').date()+'号'
            })
        },
        formatHours(){
            if (this.time[0] === 0){
                return hours.filter(item=>item>moment().hour()).map(item=>item+'点')
            }else{
                return hours.map(item=>item+'点')
            }
        },
        formatMins(){
             return mins.map(item=>item+'分')
        },
        formatTime(){
            let time = this.time as number[];
            return moment({hour: 0, minute:0}).add(time[0], 'd').add(time[1], 'h').add(time[2]*10, 'm').format('YYYY-MM-DD HH:mm');
        }
    },
    methods: {
        bindChange(e: any){
            // let values = e.detail.value
            // this.time = values;
        },
        columnChange(e: any){
            let {column, value} = e.detail;
            this.time[column] = value;
            
            this.time = [...this.time]
            console.log(this.time, value);
        }
    },
    created(){
        if (this.time[0] === 0){
            this.time[1] = moment().hour()+1;
        }
    }
}
</script>

<style lang="scss" scoped>
    section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        picker{
            flex: 1;
            height: 100%;
        }
    }
</style>
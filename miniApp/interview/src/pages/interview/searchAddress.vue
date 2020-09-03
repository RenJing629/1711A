<template>
    <section>
        <input type="text" @input="search">
    </section>
</template>

<script lang="ts">
import QQMapWX from '@/utils/QQMap'

export default {
    data(){
        return {
            qqmapsdk: new QQMapWX({
                key: 'B46BZ-TDXKW-Q5WRQ-OIKGT-UCW4K-6QBXD'
            })
        }
    },
    methods: {
        search(e: InputEvent){
            console.log('e...', e);
            let value = (e.target as any).value;
            // 调用接口
            this.qqmapsdk.search({
                keyword: value,
                complete: function (res: any) {
                    console.log(res);
                }
            })
        }
    }
}
</script>
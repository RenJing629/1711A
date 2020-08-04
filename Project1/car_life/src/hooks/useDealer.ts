import {reactive, UnwrapRef, toRefs} from '@vue/composition-api'
import { IBrandItem, ISerialItem } from '@/util/interface'
import {getDealerList} from '@/api/index'

export default () => {
    const data = reactive({
        dealerList: [],
    })
    // 获取经销商列表
    async function getDealerListAction(carId: string, cityId: string) {
        console.log(carId, cityId)
        const result = await getDealerList(carId, cityId);
        if (result.data) {
            data.dealerList = result.data
        }
    }


    return {
        ...toRefs(data),
        getDealerListAction,
    }
}

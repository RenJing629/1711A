import { reactive, toRefs, watch } from '@vue/composition-api';
import { getImageList, getModelImageYearColor, getCategoryImageList } from '@/api';
import Vue from 'vue';
// 引入composition-api
import CompositionApi from '@vue/composition-api'
Vue.use(CompositionApi)

export default (() => {
    const data = reactive({
        SerialID: '',
        CarId: '',
        ColorID: '',
        img_id: '',
        colorList: [],
        imgList: [],
        categoryImgList: [],
        page: 1,
        pageSize: 30,
        count: 0
    })

    function setSerialID(SerialID: string) {
        data.SerialID = SerialID;
    }

    function setColorID(ColorID: string) {
        data.ColorID = ColorID;
    }

    function setCarID(CarID: string) {
        data.CarId = CarID;
    }

    watch([() => data.ColorID, () => data.CarId], () => {
        console.log('data...', data);
        getImageListAction();
    })

    async function getImageListAction() {
        const params: any = {SerialID: data.SerialID};
        if (data.CarId) {
            params.CarID = data.CarId;
        }
        if (data.ColorID) {
            params.ColorID = data.ColorID;
        }
        const result = await getImageList(params);
        if (result.data) {
            data.imgList = result.data;
        }
    }

    async function getModelImageYearColorAction(SerialId: string) {
        const result = await getModelImageYearColor(SerialId);
        if (result.data) {
            data.colorList = result.data;
        }
    }

    async function getCategoryImageListAction(SerialID: string, ImageID: number, page?: number) {
        console.log('data...', data);
        page = page ? page : data.page;
        const result = await getCategoryImageList(SerialID, ImageID, page);
        if (result.data) {
            data.categoryImgList = data.categoryImgList.concat(result.data.List);
            data.page = result.data.Page;
            data.count = result.data.Count;
        }
    }


    return {
        ...toRefs(data),
        setSerialID,
        setColorID,
        setCarID,
        getImageListAction,
        getModelImageYearColorAction,
        getCategoryImageListAction
    }
})()

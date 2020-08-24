export interface IMenuItem{
    name: string,
    meta?: {
        icon: any,
        title: string,
        show: boolean
    },
    children: Array<{
        path: string,
        name: string,
        component?: any,
        meta: {
            title: string,
            show: boolean,
            component: any,
            view_id: string
        }
    }>
}

export interface IRouterItem{
    path: string,
    name: string,
    redirect?: string,
    component?: any,
    children: IRouterItem[],
    meta: {
        title: string,
        show: boolean,
        component: any,
    }
}

export interface ITag{
    name: string,
    path: string
}
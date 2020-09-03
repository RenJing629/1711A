declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
}

interface Vue{
    [key:string]: any
}
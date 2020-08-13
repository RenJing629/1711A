import Mock from 'mockjs'


const {list} = Mock.mock({
    "list|10-20": [{
        "id|+1": 1,
        "name": "@cname",
        "num": "@integer(10, 100)",
        "price": "@natural(10, 1000)",
        "desc": "@cparagraph(1, 3)" ,
        "checked|1-2": true,
        "img": Mock.Random.image('100x100', "@color")
    }]
})

console.log('list...', list);

Mock.mock('/list', 'get', ()=>{
    return {list};
})

Mock.mock('*', 'GET', function(){
    console.log('arguments...', arguments)
})
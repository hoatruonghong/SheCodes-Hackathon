const { getAccount } = require('./model.js')

const model = require('./model.js')
async function test(){

    const account = await model.getAccount()
    /*for( i = 0; i<account[0].length; i++){
        console.log(account[0][i].fullname)
    }*/
    //console.log(account[0])
    AAA = account[0]
    console.log("okey")
}
async function AllPoint(search_type){

    const account = await model.allPoint(search_type)
    for( i = 0; i<account[0].length; i++){
        console.log(account[0][i].id_point)
    }
    return account[0]
}
Points=AllPoint(search_type,TenMatHang) {
    const account = await model.allPoint(search_type,TenMatHang)
    for( i = 0; i<account[0].length; i++){
        console.log(account[0][i].id_point)
    }
    return account[0]
}
async function AllItem(){

    const account = await model.allItem()
    for( i = 0; i<account[0].length; i++){
        console.log(account[0][i].id_item)
    }
    return account[0]
}
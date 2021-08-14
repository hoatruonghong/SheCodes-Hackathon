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
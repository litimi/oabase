/**
 * Reducer 会接收到action的信息。将会进行状态（数据）的处理，
 * 相当于react中的setState()的功能。如果有多个reducer ，
 * 可以使用combineReducers方法将其合并，并暴露出去
 * **/

//包含n个reducer函数的模块
import {ADDNAME, ADDAGE} from './action-type'
import {combineReducers} from 'redux'
function addName(state='initRedux',action){ //形参默认值
    switch(action.type){
        case ADDNAME:
            return action.data
        default:
            return state
    }
}
function addAge(state=0,action){
    switch(action.type){
        case ADDAGE:
            return action.data
        default:
            return state
    }
}
function addToken(state=null, action) {
    switch(action.type){
        case ADDAGE:
            return action.data
        default:
            return state
    }
}

export const finalReducer = combineReducers({
    addName,addAge,addToken
})
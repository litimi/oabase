/**
 *  （action创建函数）
 *  ActionCreator ，定义了一些操作类型，告诉store自己是干什么的，需要什么样的数据
 *  action创建函数区别与action
 * 
 * **/

import { ADDNAME, ADDAGE,TOKEN } from './actionType';

export const addNameCreater = (name) => ({type: ADDNAME, data: name})
export const addAgeCreater = (age) => ({type: ADDAGE, data: age})
export const addTOKEN = (token) => ({type: TOKEN, data: token})

export const addNameAsync = (name) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addAgeCreater(name))
    }, 2000);
  }
}
/**
 *  路由存储用于路由拦截
 * 
 * **/

import Home from '../pages/Home';
import Login from '../pages/Login';

export default[
  { path: "/", name: "Home", component: Home, auth: true },
  { path: "/login", name: "Login", component: Login },
]
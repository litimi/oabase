/**
 *  组件渲染页面
 * **/

import React from "react";
import ReactDom from "react-dom";
import styles from './index.css'
import Rooter from './routes/index'

const Div = document.createElement("div");
Div.setAttribute("id", "root")
document.body.appendChild(Div)
ReactDom.render(
  <Rooter/>,
  document.getElementById("root")
);

/**
 *  路由拦截页面，将跟据路由跳转至对应页面
 * 
 * **/

import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Routers from './routerMap';
// import Home from '../pages/Home';

class MRoute extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let token = this.props.token
    return (
      <HashRouter>
        <Switch>
          {Routers.map((item, index) => {
          return <Route key={index} path={item.path} exact render={props =>
            (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
              pathname: '/login',
              // state: { from: props.location }
              }} />)
            )} />
          })}
        </Switch>
      </HashRouter>
    );
  }
}
 // redux拿到token并挂载到App的props上面
// const mapStateToProps = (state, ownProps) => {
//   return { token: state.token }
// }
// connect(mapStateToProps)
export default MRoute;
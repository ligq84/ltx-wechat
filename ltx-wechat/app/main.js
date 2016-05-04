import 'babel-core/polyfill';
import React    from 'react';
import {Component} from 'react';
import {render} from "react-dom";
import { Provider, connect } from 'react-redux';
import {Router, Route, Link ,IndexRoute,Redirect} from 'react-router'
import { createStore, compose, combineReducers ,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createHistory } from 'history';
import createHistory from 'history/lib/createHashHistory'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
import {
  fetchBuildingMiddleware,
  fetchRentMiddleware,
  releaseUnitMiddleware,
  fetchBuildingImagesMiddleware
} from './middleware'
import building from './reducers/building'
import rent from './reducers/rent'
import release from './reducers/release'
import query from './reducers/query';

import app from './components/App.js'
import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  pushState
} from 'redux-router';
import HouseDetailRoute from './routes/HouseDetailRoute';
import EntrustRoute from './routes/EntrustRoute';
import ReleaseRoute from './routes/ReleaseRoute';
import BuildingListRoute from './routes/BuildingListRoute';
import SearchBuildingRoute from './routes/SearchBuildingRoute'
import wechat from './wechat'
import EventRoute from './routes/EventRoute'
import MapRoute from './routes/MapRoute'
import ServiceRoute from './routes/ServiceRoute'











const reducer = combineReducers({
  router: routerStateReducer,
  building:building,
  rent :rent,
  release:release,
  query:query
});

const store = compose(

  applyMiddleware(
  thunkMiddleware,
  fetchBuildingMiddleware,
  fetchRentMiddleware,
  releaseUnitMiddleware,
  fetchBuildingImagesMiddleware
),
  reduxReactRouter({createHistory})
)(createStore)(reducer);



const rootRoute = {
  component: 'div',
  childRoutes: [
    {
     path: '/',
     component: app,
     childRoutes: [
       HouseDetailRoute,
       EntrustRoute,
       ReleaseRoute,
       BuildingListRoute,
       SearchBuildingRoute,
       EventRoute,
       MapRoute,
       ...ServiceRoute
     ],
     onEnter:function(nextState, replaceState){
       if(nextState.location.pathname=="/"){
         replaceState(null, '/buildingList')
       }

     }
    }
  ]
}

class Root extends Component {
  constructor(...argum){
    super(argum)
     wechat()
  }


  render() {
    return (
        <Provider store={store}>
          <ReduxRouter  routes={rootRoute}></ReduxRouter>
        </Provider>
    );
  }
}
render(<Root />, document.getElementById('root'));

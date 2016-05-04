import React from 'react'
import Tappable from "react-tappable"
import './SearchBuilding.less'
import equal from 'deep-equal'
import mapImg from "../../../img/map-xiangqing.png";
import { connect } from 'react-redux';
import {setKeyword,searchKeyword,setCurrentCity,resetQuery}  from '../../../actions'


import {
  pushState
} from 'redux-router';
import arrow from "../../../img/arrow.png";
@connect((state)=>{
  return {
    options:state.query.options,
    keyword:state.query.keyword,
    cityId : state.query.city.id
  }
  },
  (dispatch)=>{
  return {
    searchKeyword:()=>dispatch(searchKeyword()),
    setKeyword:(keyword)=>dispatch(setKeyword(keyword)),
    setCurrentCity:(id)=>dispatch(setCurrentCity(id)),
    resetQuery:()=>dispatch(resetQuery()),
    redirect2List:(cityId)=>dispatch(pushState(null, `/buildingList?cityId=${cityId}`))
  }})

export default  class SearchBuilding extends React.Component {

  constructor(props){
    super(props)

  }
  componentDidMount() {
    setTimeout(function(){
      this.refs.input.focus();
      this.props.searchKeyword()
    }.bind(this))
  }
  _handleCityChange(event){
    this.props.resetQuery()
    this.props.setCurrentCity(event.target.value)
    // this.props.setKeyword("")
    this.props.searchKeyword()
  }



  render(){

    const {options,keyword,cityId} = this.props;
    return (
    <div className="search-building">
      <header className="building-list-header">
        <select value={cityId} onChange={this._handleCityChange.bind(this)}>
          <option value="" disabled>请选择城市</option>
          <option value="802">上海</option>
          <option value="867">苏州</option>
        </select>
          <img src={arrow}></img>
          <aside className="search-input" >
            <input
            ref="input"
            value={this.props.keyword}
            onChange={this._handleInputChange.bind(this)}>
            </input>
            <Tappable
              component="a"
              onTap={this._handleCloseTap.bind(this)}
              style={{display:keyword==""?"none":"block"}}>x</Tappable>
            <Tappable onTap={this._handleSearchTap.bind(this)} component="div" id="m_search" className="search">搜索</Tappable>
          </aside>
      </header>
       <main >
        <ul>
          {options.map((ele)=><Tappable component="li"
            onTap={this._handleOptionsTap.bind(this,ele.fullName)}
            key={ele.id}
            dangerouslySetInnerHTML={{__html:ele.fullName.replace(new RegExp(keyword, "g"),"<m>"+keyword+"</m>")}}
            ></Tappable>)}
        </ul>
      </main>

    </div>
    )
  }
  _handleInputChange(event){
    this.props.setKeyword(event.target.value)
    this.props.searchKeyword()
  }

  _handleCloseTap(){
    this.props.setKeyword("")
    this.props.searchKeyword()
  }
  _handleOptionsTap(name){
    this.props.setKeyword(name)
      this.props.redirect2List(this.props.cityId)
  }
  _handleSearchTap(){
    this.props.redirect2List(this.props.cityId)
  }
  componentWillUnmount() {
    this.refs.input.blur();
  }

}

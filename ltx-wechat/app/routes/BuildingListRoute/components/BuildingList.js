import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import defaultImg from '../../../img/default_bb.png';
import ImageLoader from 'react-imageloader'
import {resetQuery,fetchBuildings,setArea,setPrice,setKeyword,setCurrentComm,setCurrentDistrict,refetchBuildings,addBuildings,setCurrentCity,fetchDistrictsAndComms,searchKeyword}  from '../../../actions'
import Tappable from "react-tappable"

import {Link} from 'react-router';
import mapImg from "../../../img/map-xiangqing.png";
import loading from "../../../img/loading.gif";
import MutiSelect from "./MutiSelect";
import BuildingItemList from "./BuildingItemList"
import arrow from "../../../img/arrow.png";
import {
  pushState
} from 'redux-router';
import rukou from "../../../img/rukou.png"


@connect((state)=>{
  return {
    router:state.router,
    districts:state.query.city.districts,
    options:state.query.options,
    keyword:state.query.keyword,
    cityId:state.query.city.id
  }
  },
  (dispatch)=>{
  return {
    refetchBuildings  :()=>dispatch(refetchBuildings()),
    fetchDistrictsAndComms:(id)=>dispatch(fetchDistrictsAndComms(id)),
    setArea:(min,max)=>dispatch(setArea(min,max)),
    setPrice:(min,max)=>dispatch(setPrice(min,max)),
    setCurrentCity:(id)=>dispatch(setCurrentCity(id)),
    setCurrentDistrict:(id)=>dispatch(setCurrentDistrict(id)),
    setCurrentComm:(id)=>dispatch(setCurrentComm(id)),
    redirect2Search:()=>dispatch(pushState(null, '/search')),
    setKeyword:(keyword)=>dispatch(setKeyword(keyword)),
    resetQuery:()=>dispatch(resetQuery()),
  }})
export default  class BuildingList extends React.Component {

  constructor(){
    super()
    this.isAdd=true;
    this.state={
      districtName:null,
      areaName:null,
      priceName:null,
      comms:[]
    }
    // console.log(this.router);



    this.areas=[
    {
    min:0,
    max:"不限",
    val:"不限"
    },{
    min:0,
    max:100,
    val:"100㎡以下"
    },
    {
    min:100,
    max:200,
    val:"100-200㎡"
    },
    {
    min:200,
    max:300,
    val:"200-300㎡"
    },
    {
    min:300,
    max:500,
    val:"300-500㎡"
    },
    {
    min:500,
    max:700,
    val:"500-700㎡"
    },
    {
    min:700,
    max:1000,
    val:"700-1000㎡"
    }
    ,
    {
    min:1000,
    max:1500,
    val:"1000-1500㎡"
    },
    {
    min:1500,
    max:2000,
    val:"1500-2000㎡"
    },
    {
    min:2000,
    max:"不限",
    val:"2000㎡+"
    }]
    this.prices=[{
          min:0,
          max:"不限",
          val:"不限"
        },{
        min:0,
        max:1,
        val:"0-1元/㎡.天"
      },
      {
        min:1,
        max:2,
          val:"1-2元/㎡.天"
      },
      {
        min:2,
        max:3,
          val:"2-3元/㎡.天"
      },
      {
        min:3,
        max:4,
          val:"3-4元/㎡.天"
      },
      {
        min:4,
        max:5,
          val:"4-5元/㎡.天"
      },
      {
        min:5,
        max:6,
          val:"5-6元/㎡.天"
      },
      {
        min:6,
        max:7,
          val:"6-7元/㎡.天"
      },
      {
        min:7,
        max:8,
          val:"7-8元/㎡.天"
      },
      {
        min:8,
        max:9,
          val:"8-9元/㎡.天"
      },
      {
        min:9,
        max:'不限',
          val:"9+元/㎡.天"
      }
      ];
  }
  componentDidMount(){

    // //若果是会退回去的
    // if(this.props.buildings.length>0){
    //     this.refs.list.scrollTop=this.refs[this.props.building.id].parentElement.offsetTop;
    // }else {
    //
    //
    // }


    this.props.setCurrentCity(this.props.cityId||this.props.router.location.query.cityId|| 867)
    this.props.fetchDistrictsAndComms(this.props.cityId||this.props.router.location.query.cityId|| 867)
    this.props.refetchBuildings()

  }


  componentWillUnmount(){
    this.props.resetQuery()
  }

  render() {

    const {cityId} = this.props

    return (
      <div className="buildingList">
        <Link to="event"  style={{
            height:140,
            width:100,
            right:20,
            bottom:120,
            position:"fixed",
            zIndex:999,

          }} >
          <img src={rukou} style={{
              height:"100%",
              width:"100%"
            }}></img>
        </Link>
        <header className="building-list-header" ref="header">
          <select value={cityId} onChange={this._handleCityChange.bind(this)}>
            <option value="" disabled>请选择城市</option>
            <option value="802">上海</option>
            <option value="867">苏州</option>
          </select>
          <img src={arrow}></img>
          <aside>
            <Tappable component="div" onTap={this._switch2TrueInput.bind(this)}  className="fork">{this.props.keyword}</Tappable>
              <Tappable
                component="a"
                onTap={this._handleCloseTap.bind(this)}
                style={{display:this.props.keyword==""?"none":"block"}}>x</Tappable>
              <div className="search" id="m_search">搜索</div>
          </aside>
        </header>
        <div className="query" ref="query">
          <MutiSelect ref="districts"
            onTap={this._handleTap.bind(this)}
            placeholder="区域"
            levelOne={this.props.districts}
            levelOneDesc="district"
            levelTwoDesc="comm"
            levelTwo={this.state.comms}
            onLevelTwoChange={this._handleCommsChange.bind(this)}
            onLevelOneChange={this._handleDistrictsChange.bind(this)}>
          </MutiSelect>
          <MutiSelect ref="areas"
            onTap={this._handleTap.bind(this)}
            placeholder="面积"
            levelOneDesc="area"
            levelOne={this.areas}
            onLevelOneChange={this._handleAreasChange.bind(this)}>
          </MutiSelect>
          <MutiSelect ref="prices"
            onTap={this._handleTap.bind(this)}
            placeholder="价格"
            levelOneDesc="price"
            levelOne={this.prices}
            onLevelOneChange={this._handlePricesChange.bind(this)}>
          </MutiSelect>
        </div>
        <BuildingItemList></BuildingItemList>
      </div>

    )
  }

  _handleDistrictsChange(ele){
    this.setState({
      comms:ele.comms
    })
    this.props.setCurrentDistrict(ele.id)
  }
  _handleCommsChange(ele){
    this.props.setCurrentComm(ele.id)
  }
  _handleAreasChange(ele){
    this.props.setArea(ele.min,ele.max=="不限"?"":ele.max)
  }
  _handlePricesChange(ele){
    this.props.setPrice(ele.min,ele.max=="不限"?"":ele.max)
  }
  _handleTap(){
    this.refs.districts.setState({isOpen:false})
    this.refs.areas.setState({isOpen:false})
    this.refs.prices.setState({isOpen:false})
  }
  _switch2TrueInput(){
    const { redirect2Search } = this.props;
    redirect2Search()

  }
  _handleCloseTap(){
    this.props.setKeyword("")
    this.props.refetchBuildings()

  }
  _handleCityChange(event){
        this.props.resetQuery()
    this.props.setCurrentCity(event.target.value)
    this.props.fetchDistrictsAndComms(event.target.value)
    this.props.refetchBuildings()

  }



}

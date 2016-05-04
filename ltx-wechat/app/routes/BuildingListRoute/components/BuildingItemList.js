import React from 'react'
import { connect } from 'react-redux';
import './BuildingList.less';
import defaultImg from '../../../img/default_bb.png';
import ImageLoader from 'react-imageloader'
import {setCurrentBuilding,refetchBuildings,fetchBuildings,addBuildings,setCurrentCity,fetchDistrictsAndComms,searchKeyword}  from '../../../actions'
import Tappable from "react-tappable"
import arrow from "../../../img/arrow.png";
import {Link} from 'react-router';
import mapImg from "../../../img/map-xiangqing.png";
import loading from "../../../img/loading.gif";
import MutiSelect from "./MutiSelect";

import BuildingItemList from "./BuildingItemList.less"
import {
  pushState
} from 'redux-router';


@connect((state)=>{
  return {
    buildings:state.building.buildings,
    router:state.router,
    isBuildingsFetching:state.building.isBuildingsFetching,
    isMore:state.building.isMore,
    isNull:state.building.isNull,

  }
  },
  (dispatch)=>{
  return {
    fetchBuildings:()=>dispatch(fetchBuildings()),
    refetchBuildings  :()=>dispatch(refetchBuildings()),
    setCurrentBuilding:(building)=>dispatch(setCurrentBuilding(building)),
    redirect2House:(buildingId)=>dispatch(pushState(null,`/houseDetail?buildingId=${buildingId}`))
  }})
export default  class extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    // this.props.refetchBuildings()
    window.onscroll=function(){
      if(this.props.isMore&&!this.props.isBuildingsFetching&&(this.refs.ul.offsetHeight-window.scrollY)<1200){
        this.props.fetchBuildings()
      }
    }.bind(this)



  }

  componentWillUnmount(){
    window.onscroll=function(){}
  }

  render(){
    const {buildings} = this.props;
    const config = {
      title: '楼天下写字楼招商 在线精选 真实 在线预约 省事 实地看房 省力 洽谈交易 省钱 一个专属于写字楼的天下 上海 苏州 无锡 均有楼宇推荐 不收取任何费用',
      link: window.location.href,
      imgUrl: buildings&&buildings[0]?buildings[0].buildingImage:"",

    }
    wx.onMenuShareTimeline(config)
    wx.onMenuShareAppMessage(config)

    return (
      <ul ref="ul" className="building-list-item">
        {this.props.buildings.map(ele=>(<Tappable
          onTap={this._handle2House.bind(this,ele)}
          component="a"
          key={ele.buildingId} >
          <ImageLoader
            src={ele.buildingImage}
            wrapper={React.DOM.div}
            preloader={()=><img src={defaultImg}></img>}>
          </ImageLoader>
          <footer>
            <div>
              <span>{ele.buildingName}</span>
              <span className="fr sm">套房源</span>
              <span className="fr">{ele.suitableNum}</span>
            </div>
            <div>
              <span className="sm">{ele.buildingAddress}</span>
              <span className="fr sm">元/m<sup>2</sup>.天</span>
              <span className="fr">{ele.averageRent}</span>
            </div>
          </footer>
        </Tappable>))}
        <footer style={{display:!this.props.isNull&&!this.props.isMore&&!this.props.isBuildingsFetching?"block":"none"}}>Oops,页面到底了！</footer>
        <footer style={{display:this.props.isMore?"block":"none"}}>
          <div id="cercle"><div id="cercleCache"/></div>
        </footer>
        <section style={{display:this.props.isNull?"block":"none"}}>
          <span>很抱歉，没有找到符合条件的房源，您还可以委托楼天下帮您找房</span>
          <Link id="m_entrust" to={`/entrust?cityId=${this.props.router.location.query.cityId}`} >委托找房</Link>
        </section>
      </ul>
    )
  }
  _handle2House(ele){
    this.props.setCurrentBuilding({
      id:ele.buildingId,
      address:ele.buildingAddress,
      propertyFee:ele.propertyFee,
      buildingImage:ele.buildingImage,
      fullName:ele.buildingName
    })
    this.props.redirect2House(ele.buildingId)
  }
}

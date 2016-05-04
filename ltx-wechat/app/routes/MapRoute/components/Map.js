import React from 'react'
import defaultImg from '../../../img/default_bb.png'
import {fetchBuilding,setCurrentBuilding,clearBuilding,fetchBuildingImages} from '../../../actions'
import { connect } from 'react-redux';
import Tappable from "react-tappable"
import {Link} from 'react-router';
import rukou from "../../../img/rukou.png"
import "./Map.less";
import reqwest from "reqwest"

@connect((state)=>{

  return {

    router:state.router,

  }
  },
  (dispatch)=>{
  return {

  }})
export default  class  extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      buildings:[]
    }
  }


  initialize(){
    BMap.Map.prototype.getXY=function(){
      return {
        maxx:this.getBounds().getNorthEast().lng,
        maxy:this.getBounds().getNorthEast().lat,
        minx:this.getBounds().getSouthWest().lng,
        miny:this.getBounds().getSouthWest().lat
      }
    }

    this.map=new BMap.Map("map");


    const that = this
    //
    // that.map.centerAndZoom(new BMap.Point("121.48", "31.22"), 16);
    // that._fetchBuilding();
    // that.map.addEventListener("zoomend",()=>that._fetchBuilding())
    // this.map.addEventListener("moveend",()=>that._fetchBuilding())
       // console.log(899,window)



      wx.ready(function(){
            alert(999)
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
          alert(998)
          that.map.centerAndZoom(new BMap.Point(latitude, longitude), 17);
          that._fetchBuilding();
          that.map.addEventListener("zoomend",()=>that._fetchBuilding())
          this.map.addEventListener("moveend",()=>that._fetchBuilding())
          }
        });



      })







    //
    // this.map.centerAndZoom(new BMap.Point("121.50952", 31.21), 18);
    //
    // this._fetchBuilding();
    //
    // this.map.addEventListener("zoomend",()=>{
    //   this._fetchBuilding();
    // })
    // this.map.addEventListener("moveend",()=>{
    //   this._fetchBuilding();
    // })



  }
  _fetchBuilding(){
    const scope = this.map.getXY()

    reqwest({
      url:"api/building/list",
      method:"get",
      data:{
        ...scope
      }
    }).then(data=>{
      this.setState({
        buildings:data
      })
    }.bind(this))
  }

  componentDidMount(){
    const self = this
    if(window.BMap===undefined){
      window.initialize=function(){

        this.initialize();
      }.bind(this)
      const script = document.createElement("script");
      script.src = "http://api.map.baidu.com/api?type=quick&v=1.0&ak=37fQZDRYjBGdpbM3zXe1YNEK&callback=initialize";
      document.body.appendChild(script);
    }
  }
  componentWillUnmount(){

  }

  render() {
    if(this.map){
      this.map.clearOverlays()
    }


    this.state.buildings.forEach((building)=>{
      const buildingEle = new BMap.Marker(new BMap.Point(building.x,building.y));
      this.map.addOverlay(buildingEle)
    }.bind(this))


    return (
      <div className="map">
          <div id="map"></div>
      </div>
    )
  }


}

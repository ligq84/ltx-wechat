import React from 'react'
import './HouseDetail.less'
import ImageLoader from 'react-imageloader'
import defaultImg from '../../../img/default_bb.png'
import SmallImg from './SmallImg.js'
import price from '../../../img/price.png'
import position from '../../../img/map-xiangqing.png'
import more from '../../../img/more.png'
import phoneRed from '../../../img/phone.png'
import phoneWhite from '../../../img/phone-white.png'
import {fetchBuilding,setCurrentBuilding,clearBuilding,fetchBuildingImages} from '../../../actions'
import { connect } from 'react-redux';
import Rent from './Rent';
import Tappable from "react-tappable"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Link} from 'react-router';
import rukou from "../../../img/rukou.png"
@connect((state)=>{

  return {
    building:state.building.building,
    router:state.router,
    images:state.building.images,
    query:state.query
  }
  },
  (dispatch)=>{
  return {
    fetchBuilding: () => dispatch(fetchBuilding()),
    setCurrentBuilding:(id)=> dispatch(setCurrentBuilding(id)),
    clearBuilding:()=>dispatch(clearBuilding()),
    fetchBuildingImages:()=>dispatch(fetchBuildingImages())
  }})
export default  class HouseDetail  extends React.Component {



  componentDidMount(){

    this.props.setCurrentBuilding({id:this.props.router.location.query.buildingId})
    this.props.fetchBuilding()
    this.props.fetchBuildingImages()
    scroll(0,0)
    const {building,images,query} = this.props;


  }
  componentWillUnmount(){
    this.props.clearBuilding()
  }

  render() {
    const {building,images} = this.props;
    const config = {
      title:building.cityName+building.districtName+building.commName+building.fullName+"房源出租", // 分享标题
      link: window.location.href, // 分享链接
      imgUrl: building.buildingImage, // 分享图标
    }
    wx.onMenuShareTimeline(config);
    wx.onMenuShareAppMessage(config);

    return (
      <ReactCSSTransitionGroup component="div"  transitionName="example" transitionLeaveTimeout={300} transitionEnterTimeout={1500}  className="house-detail">
        <Link to="event"  style={{
            height:140,
            width:100,
            right:20,
            bottom:120,
            position:"fixed",
            display:"block",
            left:"auto",
            zIndex:999,}} >
            <img src={rukou} style={{
                height:"100%",
                width:"100%"
              }}></img>
          </Link>

        <Tappable component="div" onTap={this._handleImgTap.bind(this)} className="big-img">
          <ImageLoader
            src={building.buildingImage||images[0]}
            wrapper={React.DOM.div}
            preloader={()=>{
              return <img src={defaultImg}></img>
            }}>
          </ImageLoader>
          <div className="num">{this.props.images.length}</div>
        </Tappable>
        <div className="detail">
          <span>{building.fullName}</span>
          <div>
            <img src={price}/>
            <span className="first">物业费</span>
            <span>{building.propertyFee}元/m<sup>2</sup>.月</span>
          </div>
          <Tappable component="div"  onTap={this._handleLocation.bind(this,building)}>
            <img src={position}/>
            <span className="first">{building.districtName}</span>
            <span>{building.address}</span>
            <img  className="more" src={more}/>
          </Tappable >
        </div>
        <Rent />
        <section>
          <h3>项目描述</h3>
          <div>
            <span dangerouslySetInnerHTML={{__html:building.description}} ></span>
          </div>
        </section>
        <section>
          <h3>项目参数</h3>
          <ul>
            <li>
              <span>得房率:</span><span>{building.roomRate}</span>
            </li>
            <li>
              <span>总高:</span><span>{building.maxFloorCount}</span>
            </li>
            <li>
              <span>年代:</span><span>{building.buildYears}</span>
            </li>
            <li>
              <span>写字楼体量:</span><span>{building.officeVolume}</span>
            </li>
            <li>
              <span>开发商:</span><span>{building.developers}</span>
            </li>
            <li>
              <span>空调系统:</span><span>{building.aircondition}</span>
            </li>
            <li>
              <span>货梯:</span><span>{building.goodLiftCount}</span>
            </li>
            <li>
              <span>电梯:</span><span>{building.passengerLiftCount}</span>
            </li>
            <li>
              <span>地上停车位:</span><span>{building.parkingSpaceUp}</span>
            </li>
            <li>
              <span>地下停车位:</span><span>{building.parkingSpaceDown}</span>
            </li>
          </ul>
        </section>
        <a href={"tel:"+building.contactMobile} id="m_appointment">
          <img src={phoneWhite}/><span>预约电话</span><span className="tel">{building.contactMobile}</span>
        </a>

      </ReactCSSTransitionGroup>
    )
  }

  _handleImgTap(){
      const {building,images} = this.props;
      // alert(images )
    wx.previewImage({
    current: building.buildingImage, // 当前显示图片的http链接
    urls: images // 需要预览的图片http链接列表
    });
  }
  _handleLocation(building){
    const {xPoint,yPoint} = building
    wx.openLocation({
    latitude: building.yPoint, // 纬度，浮点数，范围为90 ~ -90
    longitude: building.xPoint, // 经度，浮点数，范围为180 ~ -180。
    name: building.fullName, // 位置名
    address:building.address, // 地址详情说明
    scale: 22, // 地图缩放级别,整形值,范围从1~28。默认为最大
    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
    });

  }

}

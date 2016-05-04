import React from 'react'
import SmallImg from './SmallImg.js'
import {fetchBuilding} from '../../../actions'
import { connect } from 'react-redux';
import defaultImg from '../../../img/default_bb.png';
import more from '../../../img/more.png';
import {fetchRent,clearRent} from '../../../actions';
import Tappable from "react-tappable"
import reqwest from 'reqwest';
@connect((state)=>{
  return {rent:state.rent}
  },
  (dispatch)=>{
  return {
    fetchRent: () => dispatch(fetchRent()),
    clearRent:()=>dispatch(clearRent())
  }})
export default  class Rent  extends React.Component {

  fetchRent(){
    this.props.fetchRent()
  }

  componentDidMount(){
    this.fetchRent()

  }
  componentWillUnmount(){

    this.props.clearRent()
  }

  render() {


    const {rent} = this.props

    const rents = rent.rents.map((e)=>{

      return (
        <Tappable component="div" onTap={this._handleTap.bind(this,e)} key={e.groupId} className="rent-item">
          <SmallImg src={e.unitImage||defaultImg} num={e.imageCount}/>
          <div className="data area">
            <span>{e.unitArea}</span>
            <span>m <sup>2</sup></span>
          </div>
          <div className="data price">
            <span>{e.rent}</span>元/
            <span>m<sup>2</sup>.天</span>
          </div>
          {e.imageCount>0?<img src={more}/>:""}
        </Tappable>)
    })

    return (
        <div className="rent">
          <span>
            共{rent.totalCount}套在租房源
          </span>
          {rents}
          <div  style={{display:rent.isMore?"block":"none"}}
          className="more" onClick={this.fetchRent.bind(this)}>
            查看更多
          </div>
        </div>

    )
  }

  _handleTap(rent){
    if(rent.imageCount>0){

      reqwest({
        url: "api/unit/info/"+rent.groupId,
        method: 'get'
      }).then(function(data){

          wx.previewImage({
          current: data.data.imageList[0], // 当前显示图片的http链接
          urls: data.data.imageList // 需要预览的图片http链接列表
          });
      })

    }

  }

}

import React from 'react'
import Tappable from "react-tappable"
import './ServiceMain.less'
import { connect } from 'react-redux';
import title from '../../../img/service/tittle.png'
import gzhwy from '../../../img/service/gzhwy.jpg'
import huiyubiaoju from '../../../img/service/huiyubiaoju.png'
import oulin from '../../../img/service/oulin.png'
import ruici from '../../../img/service/ruici.png'
import xuwei from '../../../img/service/xuwei.png'
import yidianzu from '../../../img/service/yidianzu.png'
import lvshijia from '../../../img/service/lvshijia.png'
import {pushState} from 'redux-router'


@connect((state)=>{
  return {

  }
  },
  (dispatch)=>{
  return {
    to:(route)=>dispatch(pushState(null,route))
    }})

export default  class SearchBuilding extends React.Component {

  constructor(props){
    super(props)

  }



  render(){

    return (
    <div className="service-main">
      <header>
        <img src={title}></img>

      </header>
        <Tappable component="section" onTap={this._handleTap.bind(this,"Huiyubiaoju")}>
          <main>
            <img src={huiyubiaoju}></img>
          </main>
          <span className="sm">搬迁安置</span><br/>
          <span className="bg">尊享<span className="red">8折</span>优惠</span>
        </Tappable>
        <Tappable component="section" onTap={this._handleTap.bind(this,"Lvshijia")}>
        <main>
          <img src={lvshijia}></img>
        </main>
          <span className="sm">办公家具</span><br/>
          <span className="bg">尊享<span className="red">9.5折</span>优惠</span>
        </Tappable>
        <Tappable component="section" onTap={this._handleTap.bind(this,"Ruici")}>
        <main>
          <img src={ruici}></img>
        </main>
          <span className="sm">员工体检 </span><br/>
          <span className="bg">尊享<span className="red">6折</span>优惠</span>
        </Tappable>
        <Tappable component="section" onTap={this._handleTap.bind(this,"Yidianzu")}>
        <main>
          <img src={yidianzu}></img>
        </main>
          <span className="sm">办公设备</span><br/>
          <span className="bg">尊享<span className="red">1+6+1月</span>服务 </span>
        </Tappable>
        <Tappable component="section" onTap={this._handleTap.bind(this,"Oulin")}>
        <main>
          <img src={oulin}></img>
        </main>
          <span className="sm">绿植服务</span><br/>
          <span className="bg">享<span className="red">12+1月</span>优惠 </span>
        </Tappable>
        <Tappable component="section" onTap={this._handleTap.bind(this,"Gzhwy")}>
        <main>
          <img src={gzhwy}></img>
        </main>
          <span className="sm">办公装修 </span><br/>
          <span className="bg"><span className="red">三重装修大礼包</span></span>
        </Tappable>
        <Tappable component="section">
        <main>
          <img src={xuwei}></img>
        </main>
          <span className="sm">合作热线</span><br/>
          <span className="bg"><span className="red">400-996-5583</span></span>
        </Tappable>

    </div>
    )
  }
  _handleTap(route){
    this.props.to("/"+route)
  }


}

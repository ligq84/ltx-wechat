import React from 'react'
import { connect } from 'react-redux';
import Tappable from "react-tappable"
import api from "../../../api"
import "./Event.less"
import banner from "../../../img/banner.png"
import watch from "../../../img/watch.png"
import iphone from "../../../img/iphone.png"
import mac from "../../../img/mac.png"
import macair from "../../../img/macair.png"
import macpro from "../../../img/macpro.png"
import reqwest from "reqwest"
import {Link} from 'react-router';
@connect((state)=>{
  return {
    router:state.router,
  }
  },
  (dispatch)=>{
  return {

  }})
export  default class Event  extends React.Component {


  constructor(props){
    super(props)
    this.state={
      cusCompany:"",
      position:"",
      name:"",
      tel:"",
      referName:"",
      referPhone:"",
    }
  }


  componentDidMount(){
    const config = {
      title: '楼天下上线感恩季节，成交立享Apple大礼包',
      link: window.location.href,
      imgUrl: "www.loutianxia.cn/img/event/rukou.png",

      }
    wx.onMenuShareTimeline(config)
    wx.onMenuShareAppMessage(config)


    }

  render() {
    return (
      <div className="event">
        <img src={banner}></img>
        <header>
          <span>活动期限：2015年12月18日-2016年02月08日</span><br/>
          <span>(活动仅限于上海地区)</span>
        </header>
        <section>
          <header>
            活动流程
          </header>
          <main className="process">
            <header>1.推荐客户</header>
            <footer>提交“客户推荐单”，楼天下客服来电确认后生效</footer>
            <header>2.租赁成交</header>
            <footer>客户经由楼天下平台租赁成交</footer>
            <header>3.信息确认</header>
            <footer>客服与推荐人核实身份信息（推荐人身份证，邮寄地址，接受人必须为推荐人）</footer>
            <header>4.礼品发放</header>
            <footer>按租赁合同约定首期款项支付20个工作日后邮寄礼品</footer>
          </main>
        </section>
        <section>
          <header>
            成交有礼
          </header>
          <main className="gift">
            <img src={watch}></img>
            <div>
              <span>实得业主佣金</span><br/>
              <span className="red">20000-39999</span><br/>
              <span>Apple Watch Sport</span><br/>
              <span>(运动款38mm)</span><br/>
            </div>

            <div  className="right">
              <span>实得业主佣金</span><br/>
              <span className="red">40000-59999</span><br/>
                <span>iPhone6s</span><br/>
                <span>(A1688)LL/A</span><br/>
            </div>
            <img src={iphone}></img>
            <img src={macair}></img>
            <div>
              <span>实得业主佣金</span><br/>
              <span className="red">60000-79999</span><br/>
                <span>MacBook Air</span><br/>
                <span>MJVE2ZP/A (2015新款)</span><br/>
            </div>
            <div className="right">
              <span>实得业主佣金</span><br/>
              <span className="red">80000-99999</span><br/>
                <span>MacBook (12英寸)</span><br/>

            </div>
            <img src={mac}></img>
            <img src={macpro}></img>
            <div>
              <span>实得业主佣金</span><br/>
              <span className="red">100000-199999</span><br/>
              <span>MacBook Pro</span><br/>
              <span>MJLQ2ZP/A(15英寸)</span><br/>
            </div>
          </main>
        </section>
        <section>
          <header>
            公司介绍
          </header>
          <main className="introduce">
            <span>一个专为写字楼业主与企业客户之间</span><br/>
            <span>提供专业写字楼信息和服务的O2O平台</span><br/>
            <span className="bold">虚假信息？这里没有；</span><br/>
            <span className="bold">重复信息？这里没有；</span><br/>
            <span className="bold">响应时间？立刻马上！</span>
            <span>我们有</span><br/>
            <span className="bold">丰富的写楼资源</span><br/>
            <span className="bold">供您随时在线预约</span><br/>
            <span className="bold">专业顾问全程陪同</span><br/>
            <span className="bold">一对一专属服务，让您轻松找到满意的写字楼！</span><br/>

            <Link  to="buildingList">马上找楼</Link>
          </main>
        </section>
        <section>
          <header>
            客户推荐
          </header>
          <main className="recommend">
            <input placeholder="公司"
              name="cusCompany"
              onChange={this._handleChange.bind(this)}
              value={this.state.cusCompany}></input>
            <input placeholder="职位"
              name="position"
              onChange={this._handleChange.bind(this)}
              value={this.state.position}></input>
            <input placeholder="姓名"
              name="name"
              onChange={this._handleChange.bind(this)}
              value={this.state.name}></input>
            <input placeholder="电话"
              name="tel"
              onChange={this._handleChange.bind(this)}
              value={this.state.tel}></input>
            <input placeholder="推荐人姓名"
              name="referName"
              onChange={this._handleChange.bind(this)}
              value={this.state.referName}></input>
            <input placeholder="推荐人电话"
              name="referPhone"
              onChange={this._handleChange.bind(this)}
              value={this.state.referPhone}></input>
            <Tappable component="div" onTap={this._handleTap.bind(this)}>提交</Tappable>
          </main>
        </section>
      </div>
    )
  }
  _handleTap(){
    const query = this.state;
    query.source=3;
    query.type=1;
     reqwest({
      url: "api/entrust/add",
      method: 'get',
      data:query,
    }).then(data=>{
      alert("恭喜您，推荐成功，稍后将有客服联系您")
    });

  }
  _handleChange(event){
    const temp ={}
    temp[event.target.name]=event.target.value
    this.setState(temp)
  }


}

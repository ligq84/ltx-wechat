import React from 'react'
import Tappable from "react-tappable"
import './ServiceMain.less'
import { connect } from 'react-redux';
import gzhwy from '../../../img/service/gzhwy.jpg'
import {
  pushState
} from 'redux-router';


@connect((state)=>{
  return {

  }
  },
  (dispatch)=>{
  return {
    toApply:(companyName,companyService)=>dispatch(pushState(null,"serviceApply?companyName="+companyName+"&companyService="+companyService))
    }})

export default  class  extends React.Component {

  constructor(props){
    super(props)

  }



  render(){

    return (
    <div className="service-item">
      <header>
        <main>
          <img src={gzhwy}></img>
          <span>公装无忧</span>
        </main>
      </header>
      <h1>办公装修  <span className="red">三重装修大礼包</span></h1>
      <section>
        <h2>服务介绍</h2>
        <p>凡通过楼天下成交写字楼租赁公司。拿合同附件，可享受公装无忧三重装修大礼包</p>
        <p>礼包一：赠送六个月绿植，环保健康。（最高价值5000元）</p>
        <p>礼包二：赠送六个月施工安全保险及价值10万元第三方责任险。（价值500元）</p>
        <p>礼包三：赠送免费开荒保洁一次。（价值300-1000元不等）</p>
      </section>
      <section>
        <h2>公司介绍</h2>
        <p>公装无忧是上海德渡网络科技有限公司旗下的线上平台，致力于打造互联网+办公装修平台，致力于解决办公装修过程中用户体验和行业的痛点。我们的“标准化、去中介化、一体化”服务模式将彻底颠覆传统的游击式装修，以极致的价格、极致的品质、极致的服务，打造一个信息透明、价格低廉、工期保障的高效和重度垂直的O2O平台，让办公装修简单无忧。 公装无忧的创新思维和理念，获得新浪家居的高度认同，是新浪家居办公装修唯一战略合作伙伴。 </p>
        <p>与此同时，公装无忧和新浪家居共建的“办公装修”频道，充分利用新浪家居日均百万级流量，将打造成全面覆盖整个办公领域，包括办公租赁、办公装修、孵化器和众创空间的信息对接。在整个生态链中的供应商、设计师、施工团队以及各战略合作伙伴等相关信息均可查找和展现。该频道能够为用户提供一体化解决方案和全新的消费体验。</p>
      </section>


      <Tappable component="footer" onTap={this._handleTap.bind(this)}>立即申请</Tappable>

    </div>
    )
  }
  _handleTap(){

    this.props.toApply("公装无忧","办公装修")
  }


}

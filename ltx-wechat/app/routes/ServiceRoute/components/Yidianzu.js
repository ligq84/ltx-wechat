import React from 'react'
import Tappable from "react-tappable"
import './ServiceMain.less'
import { connect } from 'react-redux';
import yidianzu from '../../../img/service/yidianzu.png'
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
          <img src={yidianzu}></img>
          <span>易点租</span>
        </main>
      </header>
      <h1>办公设备  尊享<span className="red"> 1+6+1月</span>服务</h1>
      <section>
        <h2>服务介绍</h2>
        <p>凡通过楼天下成交写字楼租赁公司。拿合同附件，可享受易点租合同期第一月免费试用，合同期结束附加1月免费用。（提前技术合同视为放弃最后1月免费用。）</p>
      </section>
      <section>
        <h2>公司介绍</h2>
        <p>易点租是首家办公IT设备免押金租赁电商，服务中小微企业、初创企业。省去企业一次性大笔投入，节约企业资产管理成本和人力成本，实现企业轻资产运营。无需押金，随租随还，价格便宜，全面保修，在线即时授信，闪电下单，轻松实现轻办公。</p>
        <p>易点租引入对中小微企业的授信模式，根据企业的各类信息授予企业“免押金额度”，使企业无需支付押金也可租赁电脑等IT设备，按月付租金，随租随还，设备享受全面免费维护，极大降低了企业对于设备的一次性支出及资产处置的成本，提高了企业抗经营风险能力。 将来，易点租还将为信用优质的企业客户提供更多更大型设备的免押金租赁服务。</p>


      </section>


      <Tappable component="footer" onTap={this._handleTap.bind(this)}>立即申请</Tappable>

    </div>
    )
  }
  _handleTap(){

    this.props.toApply("易点租","办公设备")
  }


}

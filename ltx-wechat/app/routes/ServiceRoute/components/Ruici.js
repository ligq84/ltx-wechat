import React from 'react'
import Tappable from "react-tappable"
import './ServiceMain.less'
import { connect } from 'react-redux';
import ruici from '../../../img/service/ruici.png'
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
          <img src={ruici}></img>
          <span>瑞慈体检</span>
        </main>
      </header>
      <h1>员工体检  尊享<span className="red">6折</span>优惠</h1>
      <section>
        <h2>服务介绍</h2>
        <p>凡通过楼天下成交写字楼租赁公司。拿合同附件，可享受瑞慈体检标准价的
<span className="red">6折</span>的优惠</p>
      </section>
      <section>
        <h2>公司介绍</h2>
        <p>瑞慈体检是中国最具影响力的健康体检连锁机构之一，是中华医学会健康管理分会首批健康管理示范基地之一。2006年，瑞慈体检在上海陆家嘴成立第一家机构，以直营连锁的形式，在上海、北京、深圳、广州、南京、苏州、南通、常州、成都、武汉、合肥等经济发达地区开设25家机构；作为“深度体检”的倡导者和实践者，瑞慈体检始终坚持整合国际尖端设备、医界顶尖专家、前沿医疗技术等优势资源，最大程度提升癌症及心脑血管疾病的早期检测准确率，每年为超百万的高端客户提供深度健康管理服务，帮助中国精英全力构筑健康资产。</p>
        <p>瑞慈养老业务针对中国老龄化现状与养老机构稀缺的背景，与日本运营养老机构最多的上市公司——MCS公司合作，开办大型高端养老社区。瑞慈养老社区以三级综合医院的医疗技术为坚强后盾，打造集居家养老、介护养老、嵌入式养老、劳务输出、职业技能培训为一体的完整产业链，成为国内一流、与国际接轨的老年服务管理供应商。</p>
        <p>互联网医疗基于互联网的便利性和庞大的数据库，针对个人客户和企业客户，打造专业级健康管理产品和高端医疗服务，为客户提供私人医生、健康评估、慢病管理、癌症诊疗、运动康复、健康商城等服务项目，力争成为从传统医疗到互联网医疗转变的引领者。</p>
        <p>连锁诊所联袂国际知名诊所连锁医疗机构，签约国内三甲医院著名专家，引进先进的医学理念、顶尖的医疗技术、现代的管理模式，为互联网客户、体检客户以及高端社区居民提供高端诊疗服务，实现瑞慈互联网医疗的线下落地。</p>

      </section>


      <Tappable component="footer" onTap={this._handleTap.bind(this)}>立即申请</Tappable>

    </div>
    )
  }
  _handleTap(){

    this.props.toApply("瑞慈体检","员工体检")
  }


}

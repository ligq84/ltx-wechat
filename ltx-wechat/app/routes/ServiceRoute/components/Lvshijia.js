import React from 'react'
import Tappable from "react-tappable"
import './ServiceMain.less'
import { connect } from 'react-redux';
import lvshijia from '../../../img/service/lvshijia.png'
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
          <img src={lvshijia}></img>
          <span>上海华友园艺</span>
        </main>
      </header>
      <h1>绿植服务 尊享<span className="red">12+1月</span>服务</h1>
      <section>
        <h2>服务介绍</h2>
        <p>凡通过楼天下成交写字楼租赁公司。拿合同附件，可享受绿饰家合同期加<span className="red">1月</span>免租期优惠</p>
      </section>
      <section>
        <h2>公司介绍</h2>
        <p>绿饰家是上海华友园艺有限公司旗下的一个绿化服务品牌。创建于2000年7月，是专业的一站式绿化服务供应商。致力于为各行各业提供室内绿化装饰、园林施工养护、花艺设计制作、绿植花卉销售等服务。2012年底开始发展绿化服务加盟经营。</p>
        <p>公司经过十三年的发展，已成为上海绿化服务行业的知名品牌。已具备了强大的管理优势及资源整合能力，致力成为中国最大的绿化服务供应商。
</p>
        <p>作为绿化服务行业领导者，目前绿饰家在中国大陆22个大中城市设有绿化服务中心，分别是上海、北京、天津、大连、青岛、广州、深圳、厦门、福州、杭州、宁波、慈溪、南京、苏州、南昌、武汉、重庆、成都、合肥、长沙、郑州、呼和浩特。
 
</p>
        <p>绿饰家绿化服务的经营理念：优质、超值、省心。绿饰家服务到家更是对客户的庄严诚恳的承诺。
 
</p>
        <p>绿饰家要求每一位员工都按照绿饰家品牌绿化服务流程标准为客户提供服务，为绿饰家的成功作出自己重要的贡献，从而使绿饰家的绿化服务凭借着专业和卓越而闻名全国。
 
</p>
      </section>


      <Tappable component="footer" onTap={this._handleTap.bind(this)}>立即申请</Tappable>

    </div>
    )
  }
  _handleTap(){

    this.props.toApply("上海华友园艺","绿植服务")
  }


}

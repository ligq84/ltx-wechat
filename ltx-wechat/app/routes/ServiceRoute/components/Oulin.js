import React from 'react'
import Tappable from "react-tappable"
import './ServiceMain.less'
import { connect } from 'react-redux';
import oulin from '../../../img/service/oulin.png'
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
          <img src={oulin}></img>
          <span>欧林</span>
        </main>
      </header>
      <h1>办公家具  尊享<span className="red">9.5折</span>优惠</h1>
      <section>
        <h2>服务介绍</h2>
        <p>凡通过楼天下成交写字楼租赁公司。拿合同附件，可享受欧林办公家具采购合同额
<span className="red">9.5折</span>的优惠</p>
      </section>
      <section>
        <h2>公司介绍</h2>
        <p>广州市欧林（ONLEAD）家具有限公司成立于1996年6月28日，位于广州新白云国际机场东侧欧林工业园区，占地约80000平方米，主要生产设备来自德国、意大利、日本。 ONLEAD始终致力于专业办公家具的研发、生产、销售与服务，产品以欧陆现代简约风格为主，分有五大系列产品：行政桌组、工作站、实木班台、座椅、沙发屏风系列,营业年均增长率30%以上。
</p>
        <p>ONLEAD在北京、上海等全国四十多个大中城市建立了分支机构，服务网络覆盖整个中国市场。07年后ONLEAD海外业务飞速发展，国际部及香港分公司专门处理海外事务，产品远销世界各地。
</p>
        <p>ONLEAD现已成为办公家具行业知名品牌，并先后成为中国家具协会副理事长单位、广东省家协副会长单位、广州市家协副会长单位以及中国企业家理事单位。
 
</p>
        <p>ONLEAD于1999年率先通过ISO9001质量体系和ISO14001环境体系认证，所有产品均已获得广州市产品质量监督检验所“产品合格证书”，并已通过中国环境标志（十环）的认证要求，被广州市工商管理局评为“重合同守信单位”，所有产品均投保中国人民保险公司产品质量信誉保险。同时ONLEAD还是家具行业首批获得中国CTA认证的生产企业。
 
</p>

      </section>


      <Tappable component="footer" onTap={this._handleTap.bind(this)}>立即申请</Tappable>

    </div>
    )
  }
  _handleTap(){

    this.props.toApply("欧林","办公家具")
  }


}

import React from 'react'
import Tappable from "react-tappable"
import './ServiceMain.less'
import { connect } from 'react-redux';

import huiyubiaoju from '../../../img/service/huiyubiaoju.png'

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
          <img src={huiyubiaoju}></img>
          <span>徽誉镖局</span>
        </main>
      </header>
      <h1>办公设备 尊享<span className="red">1+6+1月</span>服务</h1>
      <section>
        <h2>服务介绍</h2>
        <p>凡通过楼天下成交写字楼租赁公司。拿合同附件，可享受徽誉镖局安置服务的合同额<span className="red">8折</span>优惠</p>
      </section>
      <section>
        <h2>公司介绍</h2>
        <p>徽誉服务是一家专业从事商业空间整体搬迁及保洁绿化，空气治理的公司。</p>
        <p>徽誉服务拥有丰富的搬迁管理经验，依托多年高效完善的服务经验、优秀的服务队伍、完善的服务网络及强大的合作伙伴，徽誉已成为行业内领先的专业搬迁服务提供商，为国内外客户提供着优质的服务，并赢得了广大用户的信赖和好评。
</p>
        <p>徽誉的服务范围包括从办公室搬迁，到办公室立体清洁、空气检测治理、家具回收、出租，办公室迁移打包的整合式服务，使客户只需花费少量费用即可获得从设计、拆装、搬运到清洁的一条龙服务，彻底扫除客户的种种不便。 
</p>
        <p>徽誉拥有一支高效的作业团队，拥有各种大小厢式货车、吊车、叉车、平板车等专业搬迁车辆，员工经过严格的专业培训，熟练掌握物品的包装、拆卸及搬运的技能，让客户在搬迁时省心、放心。 
</p>
        <p>徽誉拥有完善的服务流程，本着控制过程、满足需要、不断开拓、行业领先的经营方针，积极推进办公室搬迁信息系统的建设，并建立以人为本的企业文化。 
</p>
      </section>


      <Tappable component="footer" onTap={this._handleTap.bind(this)}>立即申请</Tappable>

    </div>
    )
  }
  _handleTap(){

    this.props.toApply("徽誉镖局","办公设备")
  }


}

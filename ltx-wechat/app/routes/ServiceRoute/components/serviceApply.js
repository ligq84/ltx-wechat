import React from 'react'
import Tappable from "react-tappable"
import './ServiceMain.less'
import { connect } from 'react-redux';
import reqwest from 'reqwest';
import title from '../../../img/service/tittle.png'
import gzhwy from '../../../img/service/gzhwy.jpg'
import huiyubiaoju from '../../../img/service/huiyubiaoju.png'
import oulin from '../../../img/service/oulin.png'
import ruici from '../../../img/service/ruici.png'
import xuwei from '../../../img/service/xuwei.png'
import yidianzu from '../../../img/service/yidianzu.png'
import lvshijia from '../../../img/service/lvshijia.png'
import {
  pushState
} from 'redux-router';
import Tip from "../../../components/Tip"

@connect((state)=>{
  return {
      router:state.router,


  }
  },
  (dispatch)=>{
  return {
    toService:()=>dispatch(pushState(null,"service"))
    }})

export default  class SearchBuilding extends React.Component {

  constructor(props){
    super(props)
    this.state={
      isSuccess:false,
          name:"",
          tel:""
    }

  }



  render(){

    return (
    <div className="service-apply">

      <input placeholder="称呼" name="name" value={this.state.name} onChange={this._handleChange.bind(this)}></input>
      <input placeholder="手机/座机" name="tel" value={this.state.tel} onChange={this._handleChange.bind(this)}></input>
      <Tappable component="footer" onTap={this._handleTap.bind(this)}>立即申请</Tappable>
      <Tip style={{display:this.state.isSuccess?"block":"none"}}>申请成功</Tip>
    </div>
    )
  }

  _handleChange(event){
    console.log(88);
    this.setState( {
        [event.target.name]:event.target.value
      })


  }
  _handleTap(){

    console.log(this.state);
    const {query} = this.props.router.location


    reqwest({
      url:"api/entrust/add?",
      method: 'get',
      data:{
        ...query,
        type:3,
        source:2,
        tel:this.state.tel,
        name:this.state.name
      }
    }).then(()=>{
        this.setState({
          isSuccess:true
        })

        setTimeout(()=>{
          this.setState({
            isSuccess:false
          })
          this.props.toService()
        }.bind(this),2000)

    }.bind(this))








  }


}

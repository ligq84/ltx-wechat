import React from 'react'
import { connect } from 'react-redux';
import Tappable from "react-tappable"
import api from "../../../api"
import Tip from "../../../components/Tip"
@connect((state)=>{
  return {
    router:state.router,
  }
  },
  (dispatch)=>{
  return {
  }})
export  default class Entrust  extends React.Component {


  constructor(props){
    super(props)
    this.query={

      source:1,
      type:1
    }
    this.state={
      error:false,
      errorContent:"",
      isSuccess:false
    }
  }

  render() {
    return (
      <div className="entrust">
        <label className="two">城市</label>
        <select id="m_entrust_city" name="cityId" onChange={this._handleChange.bind(this)}>
        <option value="">请选择</option>
        <option value="802">上海</option>
        <option value="867">苏州</option>
        </select>
        <label className="two">面积</label>
        <input id="m_entrust_area" name="area"  onChange={this._handleChange.bind(this)}></input>
        <label  className="two">租金</label>
        <input id="m_entrust_rent"  name="rent" onChange={this._handleChange.bind(this)}></input>
        <label>需求描述</label>
        <textarea  id="m_entrust_describe" onChange={this._handleChange.bind(this)} name="des" placeholder="如：陆家嘴，带装修，进地铁"></textarea>
        <label className="two">称呼</label>
        <input id="m_entrust_name" name="name" onChange={this._handleChange.bind(this)}></input>
        <label>手机/座机</label>
        <input id="m_entrust_tel" name="tel" onChange={this._handleChange.bind(this)}></input>
          <div className="error">
            {this.state.error?<span>{this.state.errorContent}</span>:""}
          </div>
        <Tappable  id="m_entrust_submit"  component="div" className="button" onTap={this._handleCommit.bind(this)} >提交需求</Tappable>
        <Tip style={{display:this.state.isSuccess?"block":"none"}}>委托成功</Tip>

      </div>
    )
  }
  _handleChange(event){

    this.query[event.target.name]=event.target.value

    if(event.target.name=="tel"){
      if(this.query.tel==null||this.query.tel==""){
        this.setState({
          error:true,
          errorContent:"请填写您的联系方式"
        })
      }else {
        this.setState({
          error:false,
          errorContent:""
        })
      }
    }
  }
  _handleCommit(){

    if(this.query.tel==null||this.query.tel==""){
      this.setState({
        error:true,
        errorContent:"请填写您的联系方式"
      })
    }else{
      this.setState({
        error:false,
        errorContent:""
      })

      api.entrustAdd(this.query,1).then(value => {
        this.setState({
          isSuccess:true
        })
        setTimeout(()=>{
          this.setState({
            isSuccess:false
          })
        }.bind(this),3000)
      })

    }

  }

}

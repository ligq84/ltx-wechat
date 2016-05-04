import React from 'react'
import { connect } from 'react-redux';
import {releaseUnit} from '../../../actions'
import Tappable from "react-tappable"
import api from "../../../api"
import Tip from "../../../components/Tip"
@connect((state)=>{
  return {}
  },
  (dispatch)=>{

  return {
    releaseUnit: (query) => dispatch(releaseUnit(query))
  }})
export default class Relaese extends React.Component {
  constructor(props){
    super(props)
    this.state={
      error:false,
      errorContent:"",
      sSuccess:false
    }
    this.query={
      source:1,
      type:2
    }
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
  handleSave(e){
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
      api.entrustAdd(this.query,2).then(value => {
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



  render() {
    const {building} = this.props;

    return (
      <div className="release">
      <label className="two">城市</label>
      <select  onChange={this._handleChange.bind(this)} name="cityId" >
        <option value="">请选择</option>
        <option value="802">上海</option>
        <option value="867">苏州</option>
      </select>
      <label>楼盘名称</label>
      <input onChange={this._handleChange.bind(this)} name="buildingName" ></input>
      <label className="two">面积</label>
      <input onChange={this._handleChange.bind(this)} name="area"></input>
      <label className="two">租金</label>
      <input onChange={this._handleChange.bind(this)} name="price" ></input>
      <label>需求描述</label>
      <textarea onChange={this._handleChange.bind(this)} name="des"  placeholder="如：陆家嘴，带装修，进地铁"></textarea>
      <label className="two">称呼</label>
      <input onChange={this._handleChange.bind(this)} name="name" ></input>
      <label>手机/座机</label>
      <input onChange={this._handleChange.bind(this)} name="tel" ></input>
      <div className="error">
        {this.state.error?<span>{this.state.errorContent}</span>:""}
      </div>
      <div className="button" onTouchEnd={this.handleSave.bind(this)}>确定</div>
        <Tip style={{display:this.state.isSuccess?"block":"none"}}>发布成功</Tip>
      </div>
    )
  }

}

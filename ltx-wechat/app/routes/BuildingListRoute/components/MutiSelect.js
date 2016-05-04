import React from 'react'
import Tappable from "react-tappable"
import './MutiSelect.less'
import arrow from "../../../img/arrow.png";
export default  class MutiSelect extends React.Component {



  constructor(props){
    super(props)
    this.state={
      isOpen:false,
      value:this.props.placeholder,
      isFixed:false,
      isAndroid:window.navigator.appVersion.match(/Android/g)&&window.navigator.appVersion.match(/Android/g).length>0
    }
    this.ele={
      min:0,
      max:"不限",
      val:"不限"
    }
    if(this.state.isAndroid){
      //如果是 安卓的话

    }


  }
  _isLevelTwo(){
    if(!(this.props.levelTwo&&this.props.levelTwo.length>0)){
      return (
        <section style={{height:this.props.levelTwo?480/64+"rem":400/64+"rem"}}>
        <ul style={{height:this.props.levelTwo?480/64+"rem":400/64+"rem"}}>
          {this.props.levelOne.map((ele,i) => (<Tappable key={i} id={this.props.levelOneDesc=="district"?"m_"+this.props.levelOneDesc+"_"+ele.id:"m_"+this.props.levelOneDesc+"_"+ele.min+"_"+ele.max}  component="li" className={this.state.value==ele.val?"active":"" }   onTap={this._handleChange.bind(this,ele)}>{ele.val}</Tappable>))  }
        </ul>
        </section>
      )
    }
    else {

      return (

        <section style={{height:480/64+"rem"}}>
        <ul className="level-one" style={{height:480/64+"rem"}}>
          {this.props.levelOne.map((ele,i) => (<Tappable key={i} id={"m_"+this.props.levelOneDesc+"_"+ele.id}   component="li" className={this.state.value==ele.val?"active":"" }  onTap={this._handleChange.bind(this,ele)}>{ele.val}</Tappable>))  }
        </ul>
        <ul className="level-two" style={{height:480/64+"rem"}}>
          {this.props.levelTwo.map((ele,i) => (<Tappable key={i} id={"m_"+this.props.levelTwoDesc+"_"+(ele.id==null?this.state.selectedId:ele.id)}  component="li" className={this.state.value==ele.val?"active":"" }  onTap={this._handleLevelTwoChange.bind(this,ele)}>{ele.val}</Tappable>))  }
        </ul>
        </section>
      )
    }
  }

  _handleChange(ele,event){
    if(ele.val=="不限"){

      this.setState({
        value:ele.val,
        isOpen:false,
        selectedId:0
      })
    }else {

      this.setState({
        value:ele.val,
        isOpen:this.props.levelTwo?true:false,
        selectedId:ele.id


      })
    }



    this.props.onLevelOneChange(ele)
  }
  _handleLevelTwoChange(ele){

    this.setState({
      value:ele.val,
      isOpen:false
    })
    document.documentElement.classList.remove("fixed")
    this.props.onLevelTwoChange(ele)
  }
  _handleDropDown(){

    // Array.prototype.forEach.call(document.querySelectorAll("div.muti-seletct>main"),ele=>ele.style.display="none")
    // this.close()
    this.props.onTap()
    this.setState({
      isOpen:true
    })

//     document.querySelector('.el').classList.add('class');
// document.querySelector('.el').classList.remove('class');
    document.documentElement.classList.add("fixed")


  }
  _handleMainTap(){
    this.setState({
      isOpen:false
    })
    document.documentElement.classList.remove("fixed")
  }
  render(){

    return (
      <div className="muti-seletct">
        <Tappable component="span" onTap={this._handleDropDown.bind(this)}>{this.state.value}<img src={arrow}></img></Tappable>


        <main component="main" onClick={this._handleMainTap.bind(this)} style={{display:this.state.isOpen?"block":"none"}}>
             {this._isLevelTwo()}
             {this.state.isAndroid?<footer className={this.state.isFixed?"fixed":""}  style={{display:this.props.levelTwo?"none":"block"}} component="footer" onClick={event=>event.stopPropagation()}>
               <span>自定义{this.levelOneDesc=="area"?"面积":"价格"}</span>
               <input type="number" placeholder="最小" name="min"
                 onFocus={this._handleInputFocus.bind(this)}
                 onBlur ={this._handleInputBlur.bind(this)}
                 onChange={this._handleInputChange.bind(this)}></input>
               <div className="line"></div>
               <input type="number" placeholder="最大" name="max"
                 onFocus={this._handleInputFocus.bind(this)}
                 onBlur ={this._handleInputBlur.bind(this)}
                 onChange={this._handleInputChange.bind(this)}></input>
               <Tappable component="div"  className="button" onTap={this._handleSure.bind(this)} >确定</Tappable>
             </footer>:""}
        </main>
      </div>
    )

  }
  _handleSure(){

    this.setState({
      value:this.ele.val,
      isOpen:false
    })
    this.props.onLevelOneChange(this.ele)
    document.documentElement.classList.remove("fixed")
  }
  _handleInputChange(event){
    this.ele[event.target.name] =event.target.value
    this.ele.val=this.ele.min+"-"+this.ele.max
  }
  _handleInputBlur(){
    this.clearBlur=setTimeout(()=>{
      if(this.state.isFixed){
        this.setState({
          isFixed:false
        })

      }
    },300)
  }
  _handleInputFocus(){
    clearTimeout(this.clearBlur)
    if(!this.state.isFixed){
      this.setState({
        isFixed:true
      })
    }
  }


}

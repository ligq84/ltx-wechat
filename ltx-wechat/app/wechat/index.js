import reqwest from 'reqwest'

export default function (nextState, replaceState){

  reqwest({
    url:"/api/wx/jssdkconfig?url="+window.location.origin+window.location.pathname,
    method: 'get'
  }).then(data=>wx.config({
    ...data,
    debug: false,
    jsApiList: ["previewImage","onMenuShareTimeline","onMenuShareAppMessage","getLocation","openLocation"]
  }))
}

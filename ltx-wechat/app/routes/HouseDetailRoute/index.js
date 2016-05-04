import wechat from '../../wechat'
module.exports = {
  path: 'houseDetail',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/HouseDetail'))
    })
  },
  // onEnter:wechat
    // component:require('./components/HouseDetail')
}

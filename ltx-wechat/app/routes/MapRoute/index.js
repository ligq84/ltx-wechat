
module.exports = {
  path: 'map',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Map'))
    })
  },
  // onEnter:wechat
    // component:require('./components/HouseDetail')
}

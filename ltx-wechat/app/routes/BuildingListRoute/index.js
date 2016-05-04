import wechat from '../../wechat'


module.exports = {
  path: 'buildingList',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/BuildingList'))
    })
  },
  // component:require('./components/BuildingList')
  // onEnter:wechat


}

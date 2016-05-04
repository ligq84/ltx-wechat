module.exports = {
  path: 'release',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Release'))
    })
  }
  // component:require('./components/Release')
}

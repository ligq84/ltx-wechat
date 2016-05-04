module.exports = {
  path: 'event',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Event'))
    })
  }
}

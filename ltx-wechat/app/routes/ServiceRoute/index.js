module.exports = [{
  path: 'service',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/ServiceMain'))
    })
  },

},{
  path: 'huiyubiaoju',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Huiyubiaoju'))
    })
  },


},{
  path: 'lvshijia',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Lvshijia'))
    })
  },

},{
  path: 'ruici',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Ruici'))
    })
  },

},{
  path: 'yidianzu',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Yidianzu'))
    })
  },

},{
  path: 'oulin',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Oulin'))
    })
  },

},{
  path: 'gzhwy',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Gzhwy'))
    })
  },

},{
  path: 'serviceApply',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/serviceApply'))
    })
  },
}]

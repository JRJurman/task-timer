const Tram = require('tram-one')

const app = new Tram({webStorage: localStorage})
app.addRoute('/', require('./pages/home'))
app.addRoute('/log', require('./pages/log'))
app.addRoute('/404', require('./pages/404'))
app.addActions({
  timer: require('./actions/timer'),
  log: require('./actions/log')
})
app.start('.main')

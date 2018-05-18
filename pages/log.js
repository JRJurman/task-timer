const Tram = require('tram-one')
const html = Tram.html({
  'single-log': require('../elements/single-log')
})

module.exports = (store, _, path) => {
  const logs = store.log.map((log, index) =>
    html`<single-log  action=${log.action}
                      style="background: ${index % 2 ? '#91c5d2' : 'inherit'}"
                      time=${(new Date(log.time)).toLocaleTimeString()} />`
  )
  return html`
    <div>
      <h1>Log</h1>
      ${logs}
    </div>
  `
}

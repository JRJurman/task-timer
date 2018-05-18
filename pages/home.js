const Tram = require('tram-one')
const html = Tram.html({
  'task': require('../elements/task')
})
const {calculateNewTime} = require('../actions/log')


module.exports = (store, actions) => {
  const lastLog = store.log.slice(-1)[0] || {}
  const running = lastLog.action === 'start'
  const runningLog = store.log.concat({action: 'running', time: new Date()})
  const currentValue = runningLog.reduce(calculateNewTime, 0)
  const start = () => {
    console.log('start')
    actions.start()
  }
  const stop = () => {
    console.log('stop')
    actions.stop()
  }
  return html`
    <div>
      <task title="Break" value=${currentValue} onclick=${running ? stop : start} />
    </div>
  `
}

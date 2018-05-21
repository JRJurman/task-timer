const Tram = require('tram-one')
const html = Tram.html({
  'task': require('../elements/task')
})
const {calculateNewTime} = require('../actions/log')

module.exports = (store, actions) => {
  const runningLog = store.log.concat({action: 'running', time: new Date()})
  const currentValue = runningLog.reduce(calculateNewTime, 0)

  const onToggleTimer = () => {
    const lastLog = store.log.slice(-1)[0] || {}
    const isRunning = lastLog.action === 'start'
    if (isRunning) {
      actions.stop()
    } else {
      actions.start()
    }
  }
  return html`
    <div>
      <task title="Break" value=${currentValue} onclick=${onToggleTimer} />
    </div>
  `
}

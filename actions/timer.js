module.exports = {
  init: () => null,
  start: (timer, _, actions) => setInterval(actions.tick, 50),
  tick: (timer) => timer,
  stop: (timer) => clearInterval(timer),
}

module.exports = {
  init: () => [],
  start: (log) => log.concat({action: 'start', time: new Date()}),
  stop: (log) => log.concat({action: 'stop', time: new Date()}),
}

module.exports.calculateNewTime = (totalTime, newLog, logIndex, allLogs) => {
  if (logIndex == 0) return totalTime
  if (allLogs[logIndex - 1].action === 'start') return totalTime + (new Date(allLogs[logIndex].time) - new Date(allLogs[logIndex - 1].time))
  return totalTime
}

const Tram = require('tram-one')
const html = Tram.html()

const taskStyle = `
  font-size: 6em;
  text-align: center;
`

const titleStyle = `
  font-size: 1.5em;
`

module.exports = (attrs) => {
  return html`
    <button style=${taskStyle} onclick=${attrs.onclick}>
      <div style=${titleStyle}>${attrs.title}</div>
      ${(attrs.value/1000).toFixed(1)}
    </button>
  `
}

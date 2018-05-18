const Tram = require('tram-one')
const html = Tram.html()

const logStyle = `
  font-size: 1.5em;
  display: flex;
  justify-content: space-between;
`

module.exports = (attrs) => {
  return html`
    <div style="${logStyle}${attrs.style}">
      <div>${attrs.action}</div>
      <div>${attrs.time}</div>
    </div>
  `
}

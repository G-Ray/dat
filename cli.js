var args = require('minimist')(process.argv.splice(2))
var usage = require('./usage')('root.txt')
var dat = require('./')

var cmd = args._[0]
if (cmd === 'publish') {
  var loc = args._[1] || process.cwd()
  var db = dat(loc)
  db.createHashThing()
}
if (cmd) {

} else {
  usage()
}

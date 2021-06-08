const BandList = require('./band-list')

class Sockets {
  constructor(io) {
    this.io = io
    this.bandlist = new BandList()
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', socket => {
      console.log('Connected client')
      socket.emit('current-bands', this.bandlist.getBands())
    })
  }
}

module.exports = Sockets

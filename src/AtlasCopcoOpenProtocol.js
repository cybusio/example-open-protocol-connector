const { EventEmitter } = require('events')
const openProtocol = require('node-open-protocol')

class AtlasCopcoOpenProtocol extends EventEmitter {
  constructor(params) {
    super()

    const defaultOptions = {
      linkLayerActivate: undefined,
      genericMode: undefined,
      keepAlive: 10000,
      rawData: false,
      timeOut: 3000,
      retryTimes: 3,
      disableMidParsing: {}
    }

    this._connection = {
      host: params.host,
      port: params.port || 4545
    }

    this._options = Object.assign(defaultOptions, params.options)
  }

  async connect() {
    await new Promise(resolve => {
      this._client = openProtocol.createClient(this._connection.port,
        this._connection.host, this._options, (data) => {
          resolve(data)
        })
    })
    this.emit('connected')
  }

  async disconnect() {
    this._client.close()
    this._client = undefined
    this.emit('disconnected')
  }

  async subscribe(address, callback) {
    this._client.on(address.name, callback)
    return this._client.subscribe(address.name)
  }

  async unsubscribe(address) {
    this._client.removeAllListeners(address.name)
    return this._client.unsubscribe(address.name)
  }

  async read(address) {
    throw new Error('read() not implemented here so far')
  }

  async write(address, data) {
    throw new Error('write() not implemented here so far')
  }
}

module.exports = AtlasCopcoOpenProtocol
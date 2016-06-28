class Logger {
  constructor (prefix = 'APP') {
    this.prefix = prefix
  }

  init () {
    this.start = Date.now()
  }

  log (message) {
    console.log(`[${this.prefix}]  ✔ ${message} - ${this.getTime()} ms`)
  }

  getTime () {
    return Date.now() - this.start
  }
}

export default new Logger()

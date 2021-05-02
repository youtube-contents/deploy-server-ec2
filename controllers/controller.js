class Controller {
  static checkConnection(req, res, next) {
    res.status(200).send('<h1>Server Connected</h1>')
  }
}

module.exports = Controller
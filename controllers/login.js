const EVENTS = global.EVENTS
const storage = require('../storage')

module.exports = () => {
    EVENTS.on('controllers/showLogin', () => {
        EVENTS.emit('store/setPage', 'login')
        EVENTS.emit('login/render')
    })
}
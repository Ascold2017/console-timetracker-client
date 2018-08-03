const EVENTS = global.EVENTS
const storage = require('../storage')

module.exports = () => {
    EVENTS.on('controllers/startTask', () => {
        EVENTS.emit('store/setPage', 'task')
        EVENTS.emit('socket/startTask')
    })
    
    EVENTS.on('controllers/taskEnter', () => {
        EVENTS.emit('socket/stopTask')
    })
}

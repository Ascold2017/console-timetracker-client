const EVENTS = global.EVENTS
const storage = require('../storage')

module.exports = () => {
    EVENTS.on('controllers/showStat', () => {
        EVENTS.emit('store/setPage', 'stat')
        EVENTS.emit('/api/getStat')
    })
    
    EVENTS.on('controllers/showUserStat', (data) => {
        EVENTS.emit('stat/render', data)
    })
}
const EVENTS = global.EVENTS
const storage = require('../storage')

module.exports = () => {
    EVENTS.on('controllers/showStart', () => {
        EVENTS.emit('store/setPage', 'start')
        EVENTS.emit('start/render')
    })
    
    EVENTS.on('controllers/startDown', () => {
        const active = storage.start === 1 ? 1 : storage.start + 1
        
        EVENTS.emit('store/setStart', active)
        EVENTS.emit('start/render')
    })
    
    EVENTS.on('controllers/startUp', () => {
        const active = storage.start === 0  ? 0 : storage.start - 1
        
        EVENTS.emit('store/setStart', active)
        EVENTS.emit('start/render')
    })
    
    EVENTS.on('controllers/startEnter', () => {
        switch (storage.start) {
            case 0: {
                EVENTS.emit('controllers/showTasks')
                break
            }
            case 1: {
                EVENTS.emit('controllers/showStat')
                break
            }
            default: return
        }
    })
    
}
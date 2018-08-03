const EVENTS = global.EVENTS
const storage = require('../storage')

module.exports = () => {
    EVENTS.on('controllers/showActions', () => {
        EVENTS.emit('store/setPage', 'actions')
        EVENTS.emit('actions/render')
    })
    
    EVENTS.on('controllers/actionUp', () => {
        const activeAction = storage.activeAction === 0 ? 0 : storage.activeAction - 1
        EVENTS.emit('store/setActiveAction', activeAction)
        EVENTS.emit('actions/render')
    })
    
    EVENTS.on('controllers/actionDown', () => {
        const activeAction = storage.activeAction === 1 ? 1 : storage.activeAction + 1
        EVENTS.emit('store/setActiveAction', activeAction)
        EVENTS.emit('actions/render')
    })
    
    EVENTS.on('controllers/actionEnter', () => {
        switch(storage.activeAction) {
            case 0: {
                EVENTS.emit('controllers/startTask')
                break
            }
            case 1: {
                EVENTS.emit('controllers/showStart')
                break
            }
            default: return
        }
    })
}
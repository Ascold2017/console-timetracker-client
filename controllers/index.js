const EVENTS = global.EVENTS
const storage = require('../storage')

EVENTS.on('controllers/showLogin', () => {
    EVENTS.emit('store/setPage', 'login')
    EVENTS.emit('login/render')
})

EVENTS.on('controllers/showTasks', () => {
    EVENTS.emit('store/setPage', 'tasks')
    EVENTS.emit('api/getTasks') // render in api
})

EVENTS.on('controllers/taskDown', () => {
    const activeTask = storage.activeShowTask + 1 < storage.tasks.length ? storage.activeShowTask + 1 : storage.tasks.length - 1
    
    EVENTS.emit('store/activeShowTask', activeTask)
    EVENTS.emit('tasks/render')
})

EVENTS.on('controllers/taskUp', () => {
    const activeTask = storage.activeShowTask - 1 >= 0 ? storage.activeShowTask - 1 : 0
    
    EVENTS.emit('store/activeShowTask', activeTask)
    EVENTS.emit('tasks/render')
})

EVENTS.on('controllers/tasksEnter', () => {
    EVENTS.emit('store/setActiveTask', storage.tasks[storage.activeShowTask])
    EVENTS.emit('controllers/showActions')
})

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
            EVENTS.emit('controllers/showTasks')
            break
        }
        default: return
    }
})

EVENTS.on('controllers/startTask', () => {
    EVENTS.emit('store/setPage', 'task')
    EVENTS.emit('socket/startTask')
})

EVENTS.on('controllers/taskEnter', () => {
    EVENTS.emit('socket/stopTask')
})

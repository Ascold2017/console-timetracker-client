const EVENTS = global.EVENTS
const storage = require('../storage')

module.exports = () => {
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
}
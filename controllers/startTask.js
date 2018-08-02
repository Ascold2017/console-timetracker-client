const EVENTS = global.EVENTS
const storage = require('./storage')
const socket = global.SOCKET

EVENTS.on('startTask', () => {
    
    console.log('Запуск ' + storage.selectedTask.name, storage.selectedTask._id)
    socket.emit('startTask', { token: storage.token, taskId: storage.selectedTask._id })
})

const EVENTS = global.EVENTS
const storage = require('./storage')
const socket = global.SOCKET

EVENTS.on('stopTask', () => {
    socket.emit('stopTask', { token: storage.token, taskId: storage.selectedTask._id })  
})
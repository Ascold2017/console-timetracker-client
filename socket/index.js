const EVENTS = global.EVENTS
const storage = require('../storage')
const io = require('socket.io-client')

global.SOCKET = io('http://localhost:3001', { path: '/timetracker'})

global.SOCKET.on('connect', () => {})
global.SOCKET.on('close', (e) => { console.log('Disconnect', e) })
global.SOCKET.on('error', error => console.log("Ошибка " + error.message))

global.SOCKET.on('task_started', (msg) => {
  EVENTS.emit('task-started/render')
})

global.SOCKET.on('task_stopped', () => {
  EVENTS.emit('task-stopped/render')
})

EVENTS.on('socket/startTask', () => {
    console.log('Запуск ' + storage.selectedTask.name, storage.selectedTask._id)
    global.SOCKET.emit('startTask', { token: storage.token, taskId: storage.selectedTask._id })
})

EVENTS.on('socket/stopTask', () => {
  global.SOCKET.emit('stopTask', { token: storage.token, taskId: storage.selectedTask._id })  
})
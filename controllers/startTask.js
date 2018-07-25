const EVENTS = global.EVENTS
const storage = require('./storage')

EVENTS.on('startTask', () => {
    console.log('Запуск ' + storage.selectedTask.name)
})
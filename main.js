const EventEmitter = require('events').EventEmitter
global.EVENTS = new EventEmitter()
const keypress = require('keypress')
const storage = require('./storage')
require('./api')
require('./socket')
require('./controllers')
require('./views/login')
require('./views/tasks')
require('./views/actions')
require('./views/task')
require('./views/start')
require('./views/userStat')

global.EVENTS.emit('controllers/showLogin')
process.stdin.on('keypress', (ch, key) => {

    switch (key.name) {
        case 'up': {
            if (storage.page === 'tasks') {
                global.EVENTS.emit('controllers/taskUp')
            }
            
            else if (storage.page === 'actions') {
                global.EVENTS.emit('controllers/actionUp')
            }
            else if (storage.page === 'start') {
                global.EVENTS.emit('controllers/startUp')
            }
            break
        }
        case 'down': {
            if (storage.page === 'tasks') {
                global.EVENTS.emit('controllers/taskDown')
            }

            else if (storage.page === 'actions') {
                global.EVENTS.emit('controllers/actionDown')
            }

            else if (storage.page === 'start') {
                global.EVENTS.emit('controllers/startDown')
            }
            break
        }

        case 'return': {
            if (storage.page === 'tasks') {
                global.EVENTS.emit('controllers/tasksEnter')
            }

            else if (storage.page === 'actions') {
                global.EVENTS.emit('controllers/actionEnter')
            }

            else if (storage.page === 'task') {
                global.EVENTS.emit('controllers/taskEnter')
            }

            else if (storage.page === 'start') {
                global.EVENTS.emit('controllers/startEnter')
            }
            break
        }

        case 'escape': {
            if (storage.page === 'task') {
                global.EVENTS.emit('controllers/showTasks')
            }
            else if (storage.page === 'stat') {
                global.EVENTS.emit('controllers/showStart')
            }
            break
        }

        default: return

    }
    
})



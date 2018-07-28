
const io = require('socket.io-client')
const readline = require('readline')
const EventEmitter = require('events').EventEmitter
global.EVENTS = new EventEmitter()
const keypress = require('keypress');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let email
let password

console.log('Здравствуйте! Авторизуйтесь, пожалуйста!')

rl.question('Email: ', answer => {
    email = answer
    rl.question('Password: ', answer => {
        password = answer
        global.EVENTS.emit('login', { email, password })
        // rl.close()
    })
})



const storage = require('./controllers/storage')
require('./controllers/login')
require('./controllers/getTasks')
require('./controllers/showTaskList')
require('./controllers/chooseTaskAction')
require('./controllers/startTask')

process.stdin.on('keypress', (ch, key) => {

    switch (key.name) {
        case 'up': {
            if (storage.page === 'taskList') {
                storage.activeShowTask > 0 ? storage.activeShowTask-- : null
                global.EVENTS.emit('showTaskList')
            }

            if (storage.page === 'actionList') {
                storage.activeAction > 0 ? storage.activeAction-- : null
                global.EVENTS.emit('selectTaskAction')
            }
            break;
        }
        case 'down': {
            if (storage.page === 'taskList') {
                storage.activeShowTask < storage.tasks.length - 1 ? storage.activeShowTask++ : null
           
                global.EVENTS.emit('showTaskList')
            }

            if (storage.page === 'actionList') {
                storage.activeAction < 1? storage.activeAction++ : null
                global.EVENTS.emit('selectTaskAction')
            }
            break;
        }

        case 'return': {
            if (storage.page === 'taskList') {
                console.clear()
                global.EVENTS.emit('setActiveTask', storage.tasks[storage.activeShowTask])
                global.EVENTS.emit('selectTaskAction')
            } 

            if (storage.page === 'actionList') {
                console.clear()

                if (storage.activeAction === 0) {
                    global.EVENTS.emit('startTask')
                }

                if (storage.activeAction === 1) {
                    
                    global.EVENTS.emit('getTasks')
                    console.log('getTasks')
                
                }
            }
        }

    }
    
})



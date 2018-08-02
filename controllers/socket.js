const EVENTS = global.EVENTS
const storage = require('./storage')
const io = require('socket.io-client')

global.SOCKET = io('http://localhost:3001', { path: '/timetracker'})

global.SOCKET.on('connect', () => {})
global.SOCKET.on('close', (e) => { console.log('Disconnect', e) })
global.SOCKET.on('error', error => console.log("Ошибка " + error.message))

// convert seconds to format hh:mm:ss
const toTime = (val) => {
    const sec_num = parseInt(val, 10) // don't forget the second param
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60)
    var seconds = sec_num - (hours * 3600) - (minutes * 60)

    if (hours   < 10) { hours   = "0" + hours }
    if (minutes < 10) { minutes = "0" + minutes }
    if (seconds < 10) { seconds = "0" + seconds }

    return hours + ':' + minutes + ':' + seconds
}

// console render function
const renderTaskIdle = (time) => {
    console.clear()
    const timeString = toTime(time)
    console.log('Вы работаете над таском: '+ storage.selectedTask.name + ' ' + timeString, storage.page)
    console.log('Нажмите enter для завершения....')
}


let intrval
let time = 1

global.SOCKET.on('task_started', (msg) => {
  console.log('Таск ' + storage.selectedTask.name + ' запущен!')

  // start display work time after 1 second
  setTimeout(() => {

    // re-render every second work time
    intrval = setInterval(() => {
        renderTaskIdle(time)
        time++
    }, 1000)

  }, 1000)
  
})

global.SOCKET.on('task_stopped', () => {
  clearInterval(intrval)
  time = 1
  console.log('Таск остановлен!')
  setTimeout(() => {
    EVENTS.emit('getTasks')
  }, 2000)
})


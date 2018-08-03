const EVENTS = global.EVENTS
const storage = require('../../storage')
const toTime = require('../../libs/toTime')

// console render function
const renderTaskIdle = (time) => {
    console.clear()
    const timeString = toTime(time)
    console.log('Вы работаете над таском: '+ storage.selectedTask.name + ' '+ timeString)
    console.log('Нажмите enter для завершения....')
}

let intrval
let time = 1

EVENTS.on('task-started/render', () => {

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

EVENTS.on('task-stopped/render', () => {
    clearInterval(intrval)
    time = 1
    console.clear()
    console.log('Таск остановлен!')
    console.log('Нажмите \'esc\' чтобы вернуться к списку тасков')
})

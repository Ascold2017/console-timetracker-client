const EVENTS = global.EVENTS
const storage = require('../../storage')

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
    console.log('Вы работаете над таском: '+ storage.selectedTask.name + ' '+ timeString + ' ' + storage.page)
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
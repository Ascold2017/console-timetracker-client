const EVENTS = global.EVENTS
const storage = require('./storage')

EVENTS.on('showTaskList', () => {
    global.EVENTS.emit('setPage', 'taskList')

    console.clear()

    let activeId = storage.activeShowTask

    const tasks = storage.tasks
    if (tasks.length === 0) {
        console.log('Доступных тасков нет')
    } else {

        tasks.map((task, i) => {
            i === activeId ? console.log(task.name + ' <', storage.page) : console.log(task.name)
        })
    }
})

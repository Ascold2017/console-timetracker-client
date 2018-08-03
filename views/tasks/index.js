const EVENTS = global.EVENTS
const storage = require('../../storage')

EVENTS.on('tasks/render', () => {

    console.clear()

    const activeId = storage.activeShowTask
    const tasks = storage.tasks

    if (tasks.length === 0) {
        console.log('Доступных тасков нет')
    } else {
        tasks.map((task, i) => {
            i === activeId ? console.log(task.name + ' <') : console.log(task.name)
        })
    }
})


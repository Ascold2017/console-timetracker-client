const EVENTS = global.EVENTS
const storage = require('../../storage')

EVENTS.on('actions/render', () => {
    const task = storage.selectedTask
    let selected = storage.activeAction

    console.clear()
    console.log('Выбран таск: ', task.name)
    console.log('Выберите действие:')
    selected === 0 ? console.log('Запустить <') : console.log('Запустить')
    selected === 1 ? console.log('К списку тасков <') : console.log('К списку тасков')
})

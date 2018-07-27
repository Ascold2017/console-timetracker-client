const EVENTS = global.EVENTS
const storage = require('./storage')

EVENTS.on('selectTaskAction', () => {
    const task = storage.selectedTask
    let selected = storage.activeAction
    console.clear()
    EVENTS.emit('setPage', 'actionList', 'chooseTaskAction')
    console.log('Выбран таск: ', task.name)
    console.log('Выберите действие:')
    selected === 0 ? console.log('Запустить <') : console.log('Запустить')
    selected === 1 ? console.log('К списку тасков <') : console.log('К списку тасков')

    console.log('selectTaskAction')

})
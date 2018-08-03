const EVENTS = global.EVENTS
const storage = require('../../storage')

EVENTS.on('start/render', () => {

    console.clear()
    switch (storage.start) {
        case 0: {
            console.log('Выбрать таски <')
            console.log('Получить статистику')
            break
        }
        case 1: {
            console.log('Выбрать таски')
            console.log('Получить статистику <')
            break
        }
        default: return
    }
})
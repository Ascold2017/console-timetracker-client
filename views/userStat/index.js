const EVENTS = global.EVENTS
const storage = require('../../storage')
const toTime = require('../../libs/toTime')
const moment = require('moment')

EVENTS.on('stat/render', (stat) => {
    console.clear()

    stat.forEach(task => {
        console.log('-------------------------------------------------------')
        console.log(task.name)
        console.log('Отработано всего по таску: ', toTime(task.total))
        task.tracks.forEach(track => {
            console.log('   ' + moment(track.start).format('lll') + ' - ' + moment(track.end).format('lll'))
        })
        console.log('--------------------------------------------------------')
    })

    const summary = stat.reduce((prev, next) => prev + next.total, 0)
    console.log('------------------------------------------------------------')
    console.log('Всего отработано: ', toTime(summary))
    console.log('Нажмите \'esc\' для выхода')
})
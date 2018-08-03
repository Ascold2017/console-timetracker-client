const EVENTS = global.EVENTS

let storage = {
    token: '',
    profile: {
        username: '',
        companyName: ''
    },
    tasks: [],
    selectedTask: {},
    page: -1,
    start: 0,
    activeShowTask: 0,
    activeAction: 0,
}

EVENTS.on('store/setAuth', authData => {
    storage.token = authData.token
    storage.profile = authData.profile
})

EVENTS.on('store/setTasks', tasks => {
    storage.tasks = tasks
})

EVENTS.on('store/activeShowTask', activeId => {
    storage.activeShowTask = activeId
})

EVENTS.on('store/setActiveTask', task => {
    storage.selectedTask = task
})

EVENTS.on('store/setActiveAction', action => {
    storage.activeAction = action
})

EVENTS.on('store/setStart', start => {
    storage.start = start
})

EVENTS.on('store/setPage', (page) => {
    storage.page = page
})


module.exports = storage
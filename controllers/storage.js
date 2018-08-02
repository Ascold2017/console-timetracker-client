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
    activeShowTask: 0,
    activeAction: 0,
}

EVENTS.on('setAuth', authData => {
    storage.token = authData.token
    storage.profile = authData.profile
})

EVENTS.on('setTasks', tasks => {
    storage.tasks = tasks
})

EVENTS.on('setActiveTask', task => {
    storage.selectedTask = task
})

EVENTS.on('setPage', (page) => {
    storage.page = page
})


module.exports = storage
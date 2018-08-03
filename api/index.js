const axios = require('axios')
const EVENTS = global.EVENTS
const storage = require('../storage')

EVENTS.on('api/login', (data) => {
    return axios.post('http://localhost:3000/api/login', data)
    .then(response => {
        const result = response.data.result
       
        // save auth data in storage
        EVENTS.emit('store/setAuth', { token: result.token, profile: result.profile })
        EVENTS.emit('login_success', result)
    })
    .catch(e => EVENTS.emit('login_fail', e.response.data.result))
})

EVENTS.on('api/getTasks', () => {

    axios.get('http://localhost:3000/api/findTasksByCompany', { headers: { token: storage.token }})
    .then(response => {
        
        EVENTS.emit('store/setTasks', response.data.result)
        EVENTS.emit('tasks/render')
       
    })
    .catch(e => console.log(e.response.data))
})

EVENTS.on('/api/getStat', () => {
    axios.get('http://localhost:3000/api/getTimetrackerStat', { headers: { token: storage.token }})
    .then(response => {
        EVENTS.emit('controllers/showUserStat', response.data.result)
    })
    .catch(e => console.log(e.response.data))
    
})
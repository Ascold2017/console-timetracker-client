const axios = require('axios')
const EVENTS = global.EVENTS
const storage = require('./storage')

EVENTS.on('getTasks', () => {
    
    axios.get('http://localhost:3000/api/findTasksByCompany', { headers: { token: storage.token }})
    .then(response => {
        
        EVENTS.emit('setTasks', response.data.result)
        EVENTS.emit('showTaskList')
       
    })
    .catch(e => console.log(e.response.data))
})
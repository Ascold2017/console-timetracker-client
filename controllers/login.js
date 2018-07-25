const axios = require('axios')
const EVENTS = global.EVENTS

EVENTS.on('login', (data) => {
    return axios.post('http://localhost:3000/api/login', data)
    .then(response => {
        const result = response.data.result
        console.log(result.message)
        console.log('Вы вошли как ' + result.profile.username + '. Добро пожаловать в ' + result.profile.companyName)
        // save auth data in storage
        EVENTS.emit('setAuth', { token: result.token, profile: result.profile })

        setTimeout(() => {
            EVENTS.emit('getTasks')
        }, 3000)
    })
    .catch(e => console.log('Ошибка: ', e.response.data.result))
})


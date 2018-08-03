const readline = require('readline')
const EVENTS = global.EVENTS

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let email
let password

EVENTS.on('login/render', () => {
    
    console.log('Здравствуйте! Авторизуйтесь, пожалуйста!')

    rl.question('Email: ', answer => {
        email = answer
        rl.question('Password: ', answer => {
            password = answer
            global.EVENTS.emit('api/login', { email, password })
            rl.removeAllListeners()
            email = null
            password = null
        })
    })
})

EVENTS.on('login_success', response => {
    console.log(response.message)
    console.log('Вы вошли как ' + response.profile.username + '. Добро пожаловать в ' + response.profile.companyName)
    EVENTS.emit('controllers/showStart')
})

EVENTS.on('login_fail', response => {
    console.log('Ошибка: ', response)
})

import { users } from "./usersService.js"

users.then(res => createDivs(res))
const body = document.querySelector('body')
function createDivs(usersArray){
    usersArray.forEach(user => {
        const div = document.createElement('div')
        div.textContent = user.name
        body.appendChild(div)
    })
}

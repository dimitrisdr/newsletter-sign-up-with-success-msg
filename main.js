let myForm = document.querySelector('.form')
let main = document.querySelector('.wraper')
let success = document.querySelector('.form-success')
let formItem = document.querySelector('.form-item')
let email = document.querySelector('#email')

email.addEventListener('click', ()=> {
    formItem.classList.remove('error')
})

myForm.addEventListener('submit', (e)=> {
    e.preventDefault(e)
    const data = Object.fromEntries(new FormData(e.target))
    const properEmail = /^\S+@\S+$/g
    let isValidEmail = properEmail.test(data.email)
    if (isValidEmail){
        main.classList.add('hidden')
        success.classList.remove('hidden')
    }else {
        formItem.classList.add('error')
    }
})

# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](screenshot.jpeg)


### Links

- Solution URL: [Add solution URL here](https://github.com/dimitrisdr/newsletter-sign-up-with-success-msg.git)
- Live Site URL: [Add live site URL here](https://dimitrisdr.github.io/newsletter-sign-up-with-success-msg/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned


To see how you can add code snippets, see below:


```js
myForm.addEventListener('submit', (e)=> {
    e.preventDefault(e)
    const data = Object.fromEntries(new FormData(e.target))
    const properEmail = /^\S+@\S+$/g
    let isValidEmail = properEmail.test(data.email)
})
```

## Author

- Frontend Mentor - [@dimitrisdr](https://www.frontendmentor.io/profile/dimitrisdr)




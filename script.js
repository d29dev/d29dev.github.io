const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    avatar: "",
    name: "",
    about: "",
    socialMedia: [],
    support: [],
    affiliate: []
}

const contactBtn = $(".box-contact button")
contactBtn.onclick = function ()
{
    let a = document.createElement("a")
    a.href = `mailto:duyvuhoang288@gmail.com?subject=${$(".box-contact input").value}&body=${$(".box-contact textarea").value}`
    a.click()
}

console.log('%c Disclaimer %c Please don\'t paste any code here!', 'font-size: 30px; font-weight: bold; color: red;',
    'font-size: 20px; color: White;',);
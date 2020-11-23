window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('resize', () => {
        console.log('hey')
    })


    const mylogo = document.getElementById('myLogo');

    mylogo.onclick = function () {
        mylogo.classList.toggle('active')
    }
})

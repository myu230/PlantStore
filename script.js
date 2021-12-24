
const navBar = document.getElementById('nav');
const navHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if (window.scrollY > navHeight){
        navBar.classList.add('nav-colour');
    }else{
        navBar.classList.remove('nav-colour');
    }
})


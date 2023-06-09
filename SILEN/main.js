    // navbar start
const navLinks = document.querySelector('.navLinks');
const navTog = document.querySelector('.fa-bars');
navTog.addEventListener('click',()=>{
    if(navLinks.classList.contains('showNab')){
        navLinks.classList.remove('showNab');
    }else{
        navLinks.classList.add('showNab');
    }
    console.log("clicked");
})
const setTog = ()=>{
    
}
setTog();
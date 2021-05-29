
window.addEventListener("load", ()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home").classList.add("active");
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display ="none"; 
    }, 600);
})

const tabscontainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-sec");

tabscontainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabscontainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});
// Navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
    hideSection();
    toggleNavBar();
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavBar(){
    document.querySelector(".header").classList.toggle("active");
}

// active
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        const hash = e.target.hash;
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavBar();
        }
        else{
            hideSection();
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            navToggler.classList.remove("hide");
        },500);
    }
})
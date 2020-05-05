window.addEventListener('scroll', onload);

function onload (e){
    onscroll(null);
    window.addEventListener('scroll', onscroll);
}

function onscroll (e){
    var sy = window.scrollY;
    var topbar = document.getElementById('topbar');
    var topbar_rect = topbar.getBoundingClientRect();
    var content = document.getElementById('content');

    if(sy>=content.offsetTop-topbar_rect.height){
        topbar.classList.add("fixed");
    }
    else{
        topbar.classList.remove("fixed");
    }
}
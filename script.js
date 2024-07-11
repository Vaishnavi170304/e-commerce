function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}

document.getElementById('menu-toggle').addEventListener('click',function (){
    var nav = document.getElementById('menu');
    if (nav.classList.contains('hidden')){
        nav.classList.remove('hidden');
        nav.style.display = 'block';
        disableScroll();
    }
    else{
        nav.classList.add('hidden');
        nav.style.display = 'none';
        enableScroll();
    }
});

var pro = document.getElementById('profile');

var icon = document.getElementById('user');

var span = document.querySelectorAll('.close');

icon.onclick = function() {
    pro.style.display = "block";
    disableScroll()
}

span.forEach(function(span) {
    span.addEventListener('click',function(){
        span.closest('#profile').style.display = 'none';
        enableScroll();
    });
});

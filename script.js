$(function() {
    $(document).scroll(function() {
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


let menu = document.getElementById('bar')

let item = document.getElementById('items')

item.style.right = "-360px"

menu.onclick  = function() {
    if(item.style.right === "-360px") {
        item.style.right = "0"
    }
    else {
        item.style.right = "-360px"
    }
}
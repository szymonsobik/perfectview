$(document).ready(function() {
    
    navBar();

});

function navBar() {
    $('body').on('click', '.menuBtn', function() {
        $('.navBox').removeClass('hide');
    });
    
    $('body').on('click', '.menuBtnHide', function() {
        $('.navBox').addClass('hide');
    });
}
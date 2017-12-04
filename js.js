$(document).ready(() => {
  $('.login').on('click', () => {
    $('.login-ting').slideToggle('fast');
    $(event.currentTarget).toggleClass('navselected');
    $('.signup').removeClass('navselected');
    $('.signup-ting').slideUp('fast');
  });
  
  $('.signup').on('click', () => {
    $('.signup-ting').slideToggle('fast');
    $(event.currentTarget).toggleClass('navselected');
    $('.login').removeClass('navselected');
    $('.login-ting').slideUp('fast');
  });
  
  $('.main').fadeIn(1300);
  
  setTimeout(function(){
       $('.titl').addClass('vis');
   }, 1000);
  
  
    }); 
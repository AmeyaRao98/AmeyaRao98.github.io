$(document).ready(() => {
  $('.login').on('click', () => {
    $('.login-ting').toggle();
    $(event.currentTarget).toggleClass('navselected');
    $('.signup').removeClass('navselected');
    $('.signup-ting').hide();
  });
  
  $('.signup').on('click', () => {
    $('.signup-ting').toggle();
    $(event.currentTarget).toggleClass('navselected');
    $('.login').removeClass('navselected');
    $('.login-ting').hide();
  });
  
  $('.main').fadeIn(1300);
  
  
    }); 
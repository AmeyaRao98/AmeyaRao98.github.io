$(document).ready(() => {
  $('.login').on('click', () => {
    $('.login-ting').toggle();
    $('.signup-ting').hide();
  });
  
  $('.signup').on('click', () => {
    $('.signup-ting').toggle();
    $('.login-ting').hide();
  });
  
  $('.main').fadeIn(1300);
  
  
    }); 
$(document).ready(() => {

  $('.movielist').fadeIn(1300);//movie list fades in
  setTimeout(function(){
    $('.titl').addClass('vis');//heading appears after a delay
  }, 1000);

  $('.login').on('click', () => {//login form slides down when login is clicked in the topnav and makes other forms slide up
    $('.login-ting').slideToggle('fast');
    $(event.currentTarget).toggleClass('navselected');
    $('.signup').removeClass('navselected');
    $('.signup-ting').slideUp('fast');
  });

  $('.signup').on('click', () => {//signup form slides down when login is clicked in the topnav and makes other forms slide up
    $('.signup-ting').slideToggle('fast');
    $(event.currentTarget).toggleClass('navselected');
    $('.login').removeClass('navselected');
    $('.login-ting').slideUp('fast');
  });

  $('.box').on('click', () => {//movie info appears and covers the screen when a box is clicked
    $('.info').slideDown('fast');
    $('.main').hide();
    $(document.body).css('overflow', 'hidden');
  });

  $('.random').on('click', () => {//random opens a random movie
    $('.info').slideDown('fast');
    $('.main').hide();
    $(document.body).css('overflow', 'hidden');
  });

  $('#back').on('click', () => {//back removes the information overlay
    $('.info').slideUp('fast');
    $('.main').show();
    $(document.body).css('overflow', 'visible');
  });
});

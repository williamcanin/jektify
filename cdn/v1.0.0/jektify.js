/*!
  * Jektify v1.0.0 (https://williamcanin.me/jektify/)
  * Copyright 2018
  * Licensed under MIT (https://github.com/williamcanin/jektify/blob/master/LICENSE.txt)
  */
$(document).ready(function(){
  $(".jektify__button").click(function(){
    $(this).parent().next().slideToggle();
    $(this).removeClass('jektify__button--closed');
    $(this).toggleClass("jektify__button--open");
  });
});

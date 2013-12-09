$('document').ready(function(){
 

  device_height = $( window ).height();
  device_width = $( window ).width();
  set_heights();
  $('#show_container').css({"display": "none"});

  $('.internal_link').click(function(){
    if($('#navigation').data('state') === 1) {
      $('#show_container').css({"display": "inherit"});
      $('header').animate({height: device_height * 0.1});
      $('h1').css({"font-size": "1em", "padding-top": "10px"});
      $('#space_before_nav').slideToggle(900);
      $('#navigation').delay(200).css({'height': "2.3em"});
      $('#navigation').data('state', 2);
  } else {
    
  };
  });


  $('#link_one').click(function(){
    $('#show_container').children().hide();
    load_page('#link_one', '#about_me_container');

  });
  $('#link_two').click(function(){
        $('#show_container').children().hide();

  load_page('#link_two', '#projects_container');
  });
  $('#link_three').click(function(){
        $('#show_container').children().hide();

  load_page('#link_three', '#contact_container');
  });



function load_page(link, content){

  $('div[data-active="true"]').first().data('active', 'false').hide(300);
  $(link).data('active', 'true');
  $(content).show(200);
}



});

function set_heights(){
  $('body').css({"height": (device_height) + "px"});
  $('#container').css({"height": (device_height)});
  $('#space_before_nav').css({"padding-bottom": device_height * (1 / 5)});
  $('#navigation').css({"height": device_height * (2 / 5)});
  $('header').css({"height": device_height * (2/5)})


  $('#about_me_container, #nav_wrapper, #navigation, header, #space_before_nav, h1, #contact_container, #projects_container').hide().delay(100);
 
  $('header').show(500);
  $('h1').show(300).delay(10);
  $('#space_before_nav').show(500);
  $("#navigation, #nav_wrapper").show(10);
  $("#navigation li").css({ "width": device_width * (1 / 5) })

};




 
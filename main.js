jQuery(document).ready(function(){

  // Window Normal State
  screenWidth = jQuery(window).width();
  if(screenWidth <= 418){
    jQuery('.brand img').attr({width:46, height:46});
  }else{
    jQuery('.brand img').attr({width:60, height:60});
  }

  // Window Resize State
  jQuery(window).resize(function(){
    screenWidth = jQuery(window).width();
    jQuery('.rendom').text(screenWidth);

    if(screenWidth <= 418){
      jQuery('.brand img').attr({width:46, height:46});
    }else{
      jQuery('.brand img').attr({width:60, height:60});
    }

    if(screenWidth <= 418){
      jQuery('#gutter').removeClass('header-gutter');
    }else{
      jQuery('#gutter').addClass('header-gutter');
    }
  });

  // Add & Remove 'header-gutter' Class
  if(screenWidth <= 418){
    jQuery('#gutter').removeClass('header-gutter');
  }else{
    jQuery('#gutter').addClass('header-gutter');
  }



});

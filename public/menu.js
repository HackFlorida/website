// $(function() {
//   // setTimeout(function() {
//   //   $('.container').addClass('snap-black');
//   //   $('.container').find('.heading').text('Reorganized from the bottom up.');
//   // }, 1000);
//   var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
//   $('.container').bind(mousewheelevt, function(e){
//     // e.preventDefault();
//     var evt = window.event || e;//equalize event object
//     evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
//     var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF
//
//     if(delta > 0) {
//       $('.container').removeClass('snap-black').addClass('snap-white');
//       $('.container').find('.heading').text('We\'re changing everything.');
//     }
//     else if (delta < 0){
//       //scroll down
//       $('.container').removeClass('snap-white').addClass('snap-black');
//       $('.container').find('.heading').text('Reorganized from the bottom up.');
//     }
//   });
// });
$(function() {
  var colorIndex = 0;
  var colors = [ '#d93992', '#30abf1', '#eb7748', '#ae3caa', '#ee213d' ];
  var prevTab = $('#default');
  var firstClick = true;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  $(document).bind('keyup', 'esc', function() {
    prevTab.removeClass('slide-in').addClass('slide-out');
    prevTab = $('#default');
    firstClick = true;
    setTimeout(function() {
      $('.bottom').removeClass('up');
      $('.top').removeClass('down');
      $('.bottom').addClass('up-return');
      $('.top').addClass('down-return');
    }, 750);
  });

  // Color switcher
  // setInterval(function() {
  //   if (colorIndex >= colors.length) {
  //     colorIndex = 0;
  //   }
  //
  //   console.log(colors[colorIndex]);
  //   $('#fl').css('color', colors[colorIndex]);
  //   colorIndex++;
  // }, 1500);

  // Menu effect
  $('#menu').click(function(e) {
    $('.bottom').removeClass('up-return');
    $('.top').removeClass('down-return');
    $('.bottom').addClass('up');
    $('.top').addClass('down');
  });
  $('#close').hover(function() {
    colorIndex = getRandomInt(0, 4);
    $(this).addClass('color' + colorIndex);
  }, function() {
    $(this).removeClass('color' + colorIndex);
  });
  $('#close').click(function(e) {
    prevTab.removeClass('slide-in').addClass('slide-out');
    prevTab = $('#default');
    firstClick = true;
    setTimeout(function() {
      $('.bottom').removeClass('up');
      $('.top').removeClass('down');
      $('.bottom').addClass('up-return');
      $('.top').addClass('down-return');
    }, 750);
  });

  // Sections
  $('#who').click(function(e) {
    if(firstClick == true) {
      $('#who-content').removeClass('slide-out').addClass('slide-in');
      prevTab = $('#who-content');
      firstClick = false;
    }else{
      prevTab.removeClass('slide-in').addClass('slide-out');
      setTimeout(function() {
        $('#who-content').removeClass('slide-out').addClass('slide-in');
      }, 750);
      prevTab = $('#who-content');
    }
  });
  $('#what').click(function(e) {
    if(firstClick == true) {
      $('#what-content').removeClass('slide-out').addClass('slide-in');
      prevTab = $('#what-content');
      firstClick = false;
    }else{
      prevTab.removeClass('slide-in').addClass('slide-out');
      setTimeout(function() {
        $('#what-content').removeClass('slide-out').addClass('slide-in');
      }, 750);
      prevTab = $('#what-content');
    }
  });
  $('#when').click(function(e) {
    if(firstClick == true) {
      $('#when-content').removeClass('slide-out').addClass('slide-in');
      prevTab = $('#when-content');
      firstClick = false;
    }else{
      prevTab.removeClass('slide-in').addClass('slide-out');
      setTimeout(function() {
        $('#when-content').removeClass('slide-out').addClass('slide-in');
      }, 750);
      prevTab = $('#when-content');
  }
  });
  $('#where').click(function(e) {
    if(firstClick == true) {
      $('#where-content').removeClass('slide-out').addClass('slide-in');
      prevTab = $('#where-content');
      firstClick = false;
    }else{
      prevTab.removeClass('slide-in').addClass('slide-out');
      setTimeout(function() {
        $('#where-content').removeClass('slide-out').addClass('slide-in');
      }, 750);
      prevTab = $('#where-content');
  }
  });
  $('#why').click(function(e) {
    if(firstClick == true) {
      $('#why-content').removeClass('slide-out').addClass('slide-in');
      prevTab = $('#why-content');
      firstClick = false;
    }else{
      prevTab.removeClass('slide-in').addClass('slide-out');
      setTimeout(function() {
        $('#why-content').removeClass('slide-out').addClass('slide-in');
      }, 750);
      prevTab = $('#why-content');
  }
  });

});

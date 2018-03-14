$(function(){
  $('#slideshow').cycle({fx: 'fade'});
  setupButtons();
});

var setupButtons = function(){
  var slideShow = $('#slideshow');

  var pause = $('<span id="pause"></span>');
  pause.click(function(){
    slideShow.cycle('pause');
    toggleControls();
  }).insertAfter(slideShow);

  var resume = $('<span id="resume"></span>');
  resume.click(function(){
    slideShow.cycle('resume');
    toggleControls();
  }).insertAfter(slideShow);

  resume.toggle();
};

var toggleControls = function(){
  $('#pause').toggle();
  $('#resume').toggle();
};

$("#draggable0").draggable({ containment: '.container', scroll: false });
$('#container').click(function() {
  $('#draggable0').remove();
})

$(document).ready(function() {
  let _divs = $('#draggable0');
  if (_divs.length > 1)
    _divs[1].remove();
});

$('#vid').click(function() {
  $("#container").append('<div id="draggable1" class="draggy"><a href="#" class="close1"><a><video class="ui-widget-content" autoPlay loop muted preload="auto"><source src="../video/leaves.mp4" type="video/mp4"/><source src="../video/leaves.webm" type="video/webm"/></video></div>');
  $("#draggable1").draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
  $('#draggable1').remove();
})

$(document).ready(function() {
  let _divs = $('#draggable1');
  if (_divs.length > 1)
    _divs[1].remove();
});


$(document).ready(function() {
$('#aboutBtn').click(function(e) {
    $("#container").append('<div id="draggable2" class="draggy" class="module_holder"><div id="about" class="module_item"><a href="#" class="close2"></a>software developer and music producer based in nyc. deeply passionate about sound and technology.<br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>itsryanmclaughlin@gmail.com</div>');
    e.preventDefault();
    $('#draggable2').unbind('click');
    $('#draggable2').draggable({ containment: '.container', scroll: false });
  });
});
$('#container').click(function() {
  $('#draggable2').remove();
  console.log('closed')
})

// $(document).ready(function() {
//   $('#draggable2').not(':first').remove();
//  });


$('#plantedBtn').click(function() {
  $('#container').append('<div id="draggable3" class="draggy"><a href="https://whosthatryan.github.io/Portfolio_8-20/plant_game/" target="_blank"}}><img src="https://i.imgur.com/OpzOEfl.png" alt="planted game" /></a><a href="#" class="close3"></a></div>');
  $("#draggable3").draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
  $('#draggable3').remove();
})

$(document).ready(function() {
  let _divs = $('#draggable3');
  if (_divs.length > 1)
    _divs[1].remove();
});

$('#bowlBtn').click(function() {
  $('#container').append('<div id="draggable4" class="draggy"><a href="https://better-bowl-front.herokuapp.com/home" target="_blank"><img src="https://i.imgur.com/v6uqnRR.png" alt="better bowl"</a><a href="#" class="close4"></a></div>');
  $("#draggable4").draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
  $('#draggable4').remove();
})

$(document).ready(function() {
  let _divs = $('#draggable4');
  if (_divs.length > 1)
    _divs[1].remove();
});

$('#effexor').click(function() {
  $('#container').append('<div id="draggable5" class="ui-widget-content" class="draggy">____<a href="#" class="close5"></a><iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1510598295/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://airvolee.bandcamp.com/album/effexor-ep">effexor EP by air volee</a></iframe></div>');
  $("#draggable5").draggable({ containment: '.container', scroll: false });
  $("#draggable5").resizable();
});
$('#container').click(function() {
  $('#draggable5').remove();
})

$(document).ready(function() {
  let _divs = $('#draggable5');
  if (_divs.length > 1)
    _divs[1].remove();
});

$('#selfTitled').click(function() {
  $('#container').append('<div id="draggable6" class="ui-widget-content" class="draggy">____<a href="#" class="close6"></a><iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=2309891453/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://airvolee.bandcamp.com/album/air-volee">air volee by air volee</a></iframe></div>');
  $("#draggable6").draggable({ containment: '.container', scroll: false });
  $("#draggable6").resizable();
});
$('#container').click(function() {
  $('#draggable6').remove();
})

$(document).ready(function() {
  let _divs = $('#draggable6');
  if (_divs.length > 1)
    _divs[1].remove();
});

$('#ryPic').click(function() {
  $("#container").append('<div id="draggable7" class="module_holder" class="draggy"><div id="about" class="module_item"><a href="#" class="close7"></a></div>');
  $('#draggable7').draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
$('#draggable7').remove();
console.log('closed')
})

$(document).ready(function() {
  let _divs = $('#draggable7');
  if (_divs.length > 1)
    _divs[1].remove();
});

$('#resume').click(function() {
  $("#container").append('<div id="draggable8" class="resume" class="draggy"><img src="https://i.imgur.com/isi2pqW.png" alt="resume"/></div><a href="#" class="close7"></a>');
  $('#draggable8').draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
$('#draggable8').remove();
});

$(document).ready(function() {
  let _divs = $('#draggable8');
  if (_divs.length > 1)
    _divs[1].remove();
});

$('#ready').click(function() {
  $('#container').append('<div id="draggable9" class="ui-widget-content" class="draggy">____<a href="#" class="close9"></a><iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/track=1439905006/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://airvolee.bandcamp.com/track/ready">ready by air volee</a></iframe></div>');
  $("#draggable9").draggable({ containment: '.container', scroll: false });
  $("#draggable9").resizable();
});
$('#container').click(function() {
  $('#draggable9').remove();
})

$(document).ready(function() {
  let _divs = $('#draggable9');
  if (_divs.length > 1)
    _divs[1].remove();
});
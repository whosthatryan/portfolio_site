$("#draggable1").draggable({ containment: '.container', scroll: false });
$('#vid').click(function() {
  $("#container").append('<div id="draggable1"><a href="#" className="close1"><a><video className="ui-widget-content" autoPlay loop muted preload="auto"><source src="../video/leaves.mp4" type="video/mp4"/><source src="../video/leaves.webm" type="video/webm"/></video></div>');
  $("#draggable1").draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
  $('#draggable1').remove();
})


$('#aboutBtn').click(function() {
    $("#container").append('<div id="draggable2" class="module_holder"><div id="about" class="module_item"><a href="#" class="close2"></a>software developer and music producer based in nyc. deeply passionate about sound and technology.<br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>itsryanmclaughlin@gmail.com</div>');
    $('#draggable2').draggable({ containment: '.container', scroll: false });
  });
$('#container').click(function() {
  $('#draggable2').remove();
  console.log('closed')
})


$('#plantedBtn').click(function() {
  $('#container').append('<div id="draggable3"><a href="https://whosthatryan.github.io/Portfolio_8-20/plant_game/"</a><a href="#" class="close3"></a></div>');
  $("#draggable3").draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
  $('#draggable3').remove();
})


$('#bowlBtn').click(function() {
  $('#container').append('<div id="draggable4"><a href="https://better-bowl-front.herokuapp.com/home"</a><a href="#" class="close4"></a></div>');
  $("#draggable4").draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
  $('#draggable4').remove();
})

$('#effexor').click(function() {
  $('#container').append('<div id="draggable5" class="ui-widget-content">____<a href="#" class="close5"></a><iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1510598295/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://airvolee.bandcamp.com/album/effexor-ep">effexor EP by air volee</a></iframe></div>');
  $("#draggable5").draggable({ containment: '.container', scroll: false });
  $("#draggable5").resizable();
});
$('#container').click(function() {
  $('#draggable5').remove();
})

$('#selfTitled').click(function() {
  $('#container').append('<div id="draggable6" class="ui-widget-content">____<a href="#" class="close6"></a><iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=2309891453/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://airvolee.bandcamp.com/album/air-volee">air volee by air volee</a></iframe></div>');
  $("#draggable6").draggable({ containment: '.container', scroll: false });
  $("#draggable6").resizable();
});
$('#container').click(function() {
  $('#draggable6').remove();
})

$('#ryPic').click(function() {
  $("#container").append('<div id="draggable7" class="module_holder"><div id="about" class="module_item"><a href="#" class="close7"></a></div>');
  $('#draggable7').draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
$('#draggable7').remove();
console.log('closed')
})

$('#resume').click(function() {
  $("#container").append('<div id="draggable8" class="resume"><img src="https://i.imgur.com/isi2pqW.png" alt="resume"/></div><a href="#" class="close7"></a>');
  $('#draggable8').draggable({ containment: '.container', scroll: false });
});
$('#container').click(function() {
$('#draggable8').remove();
});

$('#ready').click(function() {
  $('#container').append('<div id="draggable9" class="ui-widget-content">____<a href="#" class="close9"></a><iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/track=1439905006/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://airvolee.bandcamp.com/track/ready">ready by air volee</a></iframe></div>');
  $("#draggable9").draggable({ containment: '.container', scroll: false });
  $("#draggable9").resizable();
});
$('#container').click(function() {
  $('#draggable9').remove();
})
console.log("Enabling draggable");
$("#about-button").click(function () {
    $("#container").append('<div id="draggable5" className="module_holder"><div id="about" className="module_item"><a href="#" className="close1"></a>software engineer and music producer based in nyc. deeply passionate about sound and technology.<br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>itsryanmclaughlin@gmail.com</div>');
    $("#draggable5").draggable({ containment: '.container', scroll: false });
  });

$('#container').click(function () {
  $('#draggable5').remove();
})

// $('#main-body').click(function () {
//   $('draggable2').remove();
// })

$("#planted").click(function () {
  $("#container").append('<div id="draggable16"><a href="https://whosthatryan.github.io/Portfolio_8-20/plant_game/"</a><a href="#" className="close2"></a></div>');
  $("#draggable16").draggable({ containment: '.container', scroll: false });
});
$('#container').click(function () {
  $('#draggable16').remove();
})

$("#draggable").draggable({ containment: '.container', scroll: false });
$('#container').click(function () {
  $('#draggable').remove();
})




$("#draggable2").draggable({ containment: '.container', scroll: false });
$("#draggable3").draggable();
$("#draggable4").draggable({ containment: '.container', scroll: false });
$("#draggable7").draggable({ containment: '.container', scroll: false });
$("#draggable8").draggable({ containment: '.container', scroll: false });
$(".draggable9").draggable({ containment: '.container', scroll: false });
$(".draggable10").draggable({scroll: false});
$("#draggable11").draggable({ containment: '.container', scroll: false });
$("#draggable12").draggable({ containment: '.container', scroll: false });
$("#draggable13").draggable({ containment: '.container', scroll: false });
$("#draggable14").draggable({ containment: '.container', scroll: false });
$("#draggable15").draggable({ containment: '.container', scroll: false });
// $("#draggable16").draggable({ containment: '.container', scroll: false });
$("#draggable17").draggable({ containment: '.container', scroll: false });

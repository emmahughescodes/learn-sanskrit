$(function() {
  $(".drag").draggable({
    drag: function(ev, ui) {
      console.log("dataAns", $(ev.target).attr("data-ans"));
      $('li').each(function () {
        if ($(this).hasClass("highlight")) {
          null;
        } else {
          $(this).removeAttr("data-question");
        }
      });
    },
    revert: function (event, ui) {
      $(this).data("uiDraggable").originalPosition = {
        top: 0,
        left: 0
      };
      return !event;
    }
  });

  $(".drop").droppable({
    hoverClass: "highlight",
    tolerance: "intersect",
    drop: function(ev, ui) {
      console.log("dataS", $(ev.target).attr("data-soln"));
      var drop_p = $(this).offset();
      var drag_p = ui.draggable.offset();
      var left_end = drop_p.left - drag_p.left + 10;
      var top_end = drop_p.top - drag_p.top + 10;
      ui.draggable.animate({ top: "+=" + top_end, left: "+=" + left_end });
      $("highlight").removeClass("highlight");
      $(this).addClass("highlight");
      $(this).attr("data-question", $(ui.draggable).attr("data-ans"));
    }
  });
});


function myFunction() {
 
    let correctAns = 0;
    let wrongAns = 0;
    
    $('.questions li').each(function () {

      if ($(this).attr("data-soln") == $(this).attr("data-question")) {
        // alert("you're great");
        correctAns++;
      } else {
        // alert("you need to do more studying boiii!");
        wrongAns++;
      }    
    });
    let totalAns = correctAns + wrongAns;
    alert("Your score is " + correctAns + "/" + totalAns);
  location.reload();

  };


(function () {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function (e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function (e) { hamburger.doToggle(e); });

}());




//the nav bar changes colour when it passes the hero component
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var height = $("#homeSection").height() - 50;
  if(scroll > height){
      $('.fixed-top').css('background', 'rgba(96, 128, 128, 0.9)');
  } else{
    $('.fixed-top').css('background', 'transparent');
  }
});


//opens contact modal
$('#exampleModal').on('show.bs.modal', function (event) {
    var modal = $(this)
    modal.find('.modal-title').text('Send me an email')
  })

  //hide design skills on load
  $(document).ready(function(){    
    $('#designSkills').hide(); 
});

  //hides skills
  function myFunction() {
    var x = document.getElementById("codeSkills");
    var y = document.getElementById("designSkills");
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
    } else{
      x.style.display = "block";
      y.style.display = "none";
    }
  }


// dropdown
$(".parent-dropdown").mouseenter(function(){
  //console.log('mouseenter su parent');
  $(".dropdown").removeClass("active");
  $(this).children(".dropdown").addClass("active");
});


$(".parent-dropdown").click(function(){
  //console.log('mouseenter su parent');
  $(this).children(".dropdown").toggleClass("active");
});









// sezione lingua
$(".arrow").mouseenter(function(){
  //console.log('mouseenter su arrow');
  $(".fas").removeClass("fa-chevron-down").addClass("fa-chevron-up");
});

$(".arrow").mouseleave(function(){
  //console.log('mouseleave su arrow');
  $(".fas").removeClass("fa-chevron-up").addClass("fa-chevron-down");
});
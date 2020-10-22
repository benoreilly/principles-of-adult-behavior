$(document).ready(function () {
  $(".list-view").hide();
});

$(".viewBtn-list").click(function () {
  $(".grid-view").hide();
  $(".list-view").show();
  $(this).css("opacity", "1");
  $(".viewBtn-grid").css("opacity", ".5");
});

$(".viewBtn-grid").click(function () {
  $(".list-view").hide();
  $(".grid-view").show();
  $(this).css("opacity", "1");
  $(".viewBtn-list").css("opacity", ".5");
});

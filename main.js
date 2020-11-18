$(".viewBtn-list").click(function () {
  $(".view").removeClass("grid-view");
  $(this).css("opacity", "1");
  $(".viewBtn-grid").css("opacity", ".5");
});

$(".viewBtn-grid").click(function () {
  $(".view").addClass("grid-view");
  $(this).css("opacity", "1");
  $(".viewBtn-list").css("opacity", ".5");
});

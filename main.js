$(document).ready(function() {
    $(".list-view").hide();
})

$(".viewBtn-list").click(function() {
    $(".grid-view").hide();
    $(".list-view").show();
});

$(".viewBtn-grid").click(function() {
    $(".list-view").hide();
    $(".grid-view").show();
});
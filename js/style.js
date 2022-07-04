// タグ実装
$(".c-tab-toggle").on("click", function () {
  $(this)
    .closest(".c-tab-container")
    .find(".c-tab-content")
    .removeClass("show");
  $(this)
    .closest(".c-tab-container")
    .find(".c-tab-content")
    .eq($(this).index())
    .addClass("show");
  $(this).closest(".c-tab-container").find(".c-tab-toggle").removeClass("on");
  $(this).addClass("on");
});

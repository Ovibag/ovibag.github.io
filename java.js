$(document).ready (function () {
    $("*[data-store]").each(function () {
      $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
    });
  
    $("*[data-store]").on("keyup", function (itm) {
      localStorage.setItem ("item-" + $(this).attr("data-store"), $(this).val());
    })
  })
document.getElementById("crusadeUnit1NameDisplay").innerHTML = localStorage.getItem("item-unit1Name");
document.getElementById("crusadeUnit1PowerRating").innerHTML = localStorage.getItem("item-unit1PowerRating");
document.getElementById("crusadeUnit1CrusadePoints").innerHTML = localStorage.getItem("item-unit1CrusadePoints");
$(window).load((function(){$(".flexslider").flexslider({animation:"slide",directionNav:!1,controlNav:!0})})),$(window).load((function(){$((function(){var e=$("#pull"),n=$("nav ul");$(e).on("click",(function(e){e.preventDefault(),n.slideToggle()}))})),$(window).resize((function(){var e=$("nav ul");$(window).width()>320&&e.is(":hidden")&&e.removeAttr("style")}))})),$(document).ready((function(){Modernizr.touch?($(".close-overlay").removeClass("hidden"),$(".effects .img").click((function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")||$(this).addClass("hover")})),$(".close-overlay").click((function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".img").hasClass("hover")&&$(this).closest(".img").removeClass("hover")}))):$(".effects .img").mouseenter((function(){$(this).addClass("hover")})).mouseleave((function(){$(this).removeClass("hover")}))})),$((function(){$("a[href*=#]:not([href=#])").click((function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if((e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:e.offset().top},2e3),!1}}))})),$((function(){$(".wp1").waypoint((function(){$(".wp1").addClass("animated bounceInLeft")}),{offset:"85%"}),$(".wp2").waypoint((function(){$(".wp2").addClass("animated bounceInRight")}),{offset:"85%"}),$(".wp3").waypoint((function(){$(".wp3").addClass("animated bounceInLeft")}),{offset:"85%"}),$(".wp4").waypoint((function(){$(".wp4").addClass("animated fadeInUp")}),{offset:"85%"}),$(".wp5").waypoint((function(){$(".wp5").addClass("animated fadeInUp")}),{offset:"85%"}),$(".wp6").waypoint((function(){$(".wp6").addClass("animated fadeInUp")}),{offset:"85%"})}));
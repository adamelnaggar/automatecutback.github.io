function checkSize(){var a=$(window).scrollTop();"none"==$(".mobile").css("display")?$(".navbar").css("background-color","transparent"):"flex"==$(".mobile").css("display")&&a>=.45*$(document).height()?$(".navbar").css("background-color","rgba(69,11,11,0.8)"):$(".navbar").css("background-color","rgba(0,47,47,0.8)")}$(document).ready(function(){var a=$(".me p").html(),b='I have experience working directly with clients, using feedback to develop intuitive solutions for problems. I am self-motivated, and have experience working in small teams, delivering presentations and meeting deadlines. <a href="#connect">Contact me</a> for more information.',c="Comfortable with: <ul><li>HTML5</li><li>CSS3</li><li>jQuery</li><li>Python</li><li>Pelican</li></ul>";$("#skills").on("click",function(){$(".me p").html(b)}),$("#languages").on("click",function(){$(".me p").html(c)}),$("#refresh").on("click",function(){$(".me p").html(a)}),$('a[href^="#"]').on("click",function(a){a.preventDefault();var b=this.hash,c=$(b);$("html, body").stop().animate({scrollTop:c.offset().top},1e3)}),$(window).scroll(function(){var a=$(window).scrollTop();a>=.45*$(document).height()?$(".navbar").css("color","#450B0B"):$(".navbar").css("color","#002F2F")})}),$(document).ready(function(){checkSize(),$(window).resize(checkSize)}),$(document).ready(function(){$("#menu").on("click",function(){$("#menu").hide(),$(".navbar").addClass("open"),$("body").bind("touchmove",function(a){a.preventDefault()})}),$("body").click(function(a){return"menu"==a.target.id?!1:($(".navbar").removeClass("open"),$("body").unbind("touchmove"),$("#menu").show(),void 0)}),$(window).scroll(function(){var a=$(window).scrollTop();a>=.45*$(document).height()?$(".fa-angle-right").css("color","#450B0B"):$(".fa-angle-right").css("color","#002F2F")}),$(window).scroll(function(){var a=$(window).scrollTop();a>=.45*$(document).height()&&"flex"==$(".mobile").css("display")?$(".navbar").css("background-color","rgba(69,11,11,0.8)"):a<.45*$(document).height()&&"flex"==$(".mobile").css("display")?$(".navbar").css("background-color","rgba(0,47,47,0.8)"):$(".navbar").css("background-color","transparent")})});
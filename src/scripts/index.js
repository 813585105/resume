var Swiper=require("./components/swiper/swiper-3.3.1.min");

var SwiperAnimate=require('./components/swiper/swiper.animate1.0.2.min')
 var swiper = new Swiper ('.swiper-container', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
   SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
  });
 	var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
module.exports = $;
$("#asd").hide();
$(".swiper-container").show();
$("#enter").tap(function(){
	$("#asd").show();
$(".swiper-container").hide();
 $.post('/api/skill',{},function(response){
 	console.log(response)
          var html = "";
            for (var i = 0; i < response.length; i++) {
                html += "<li>" + response[i].category + "</li>";
    }
    $("#scroller ul").html(html);
    var IScroll=require("./components/iscroll/iscroll");
	var myScroll;
	myScroll = new IScroll('#wrapper', { mouseWheel: true });

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    })
 

})


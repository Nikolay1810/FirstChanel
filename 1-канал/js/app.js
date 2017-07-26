$(document).ready(function () {
    var div = document.getElementById("data");
function dat(){
    var date = new Date();
//    "<br>Hour: "
//    div.innerHTML=
//        +date.getHours()+":"+date.getMinutes()+", "+date.getDay().toPrecision()+" "+date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear() ;
//       div.getData();
dayarray=new Array("воскресенье","понедельник","вторник","среда","четверг","пятница","суббота")
montharray=new Array ("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря")
currentDate=new Date();
day=dayarray[currentDate.getDay()];
month=montharray[currentDate.getMonth()];
date=currentDate.getDate();
year=currentDate.getFullYear();
hours = currentDate.getHours();
mins = currentDate.getMinutes();
secs = currentDate.getSeconds();
if (hours < 10) {hours = "0" + hours }
if (mins < 10) {mins = "0" + mins }
if (secs < 10) {secs = "0" + secs }
datastr=("Сегодня " + date + " " + month + " " + year + " года, " + day + ", " + hours + ":" + mins )
    div.innerHTML = datastr;
};
dat(); // <-------------------------------  функцию забыл вызвать , она сама невызывается 
$("#show").hide();
    $(function() {
    var fixblock_height = $('.block3').height(); // определяем высоты фиксированного блока
    var fixblock_pos = $('.block3').position().top; ; // определяем его первоначальное положение
    $(window).scroll(function(){
        if ($(window).scrollTop() > fixblock_pos){ // Если страницу прокрутили дальше, чем находится наш блок
            $('.block3').css({'position': 'fixed', 'top':'0', 
'z-index':'10'}); // То мы этот блок фиксируем и отображаем сверху.
            
           // То мы этот блок фиксируем и отображаем сверху.
            $('.logo').css({'display': 'block'});
//            $('.header').css('padding-bottom', fixblock_height+'px'); // А чтобы это было плавно, добавляем отсуп снизу для верхнего блока (как будто этот блок там все еще есть)
        }else{  // Если же позиция скрола меньше (выше), чем наш блок
            $('.block3').css({'position': 'static'}); // то возвращаем все назад
            $('.logo').css({'display': 'none'});
//            $('.header').css('padding-bottom', '0px'); // И убираем отступ
        }
    })
});
    
   

});

 $(function() {
    var fixblock_height = $('.circle').height(); // определяем высоты фиксированного блока
    var fixblock_pos = $('.circle').position().top; ; // определяем его первоначальное положение
    $(window).scroll(function(){
        if ($(window).scrollTop() > "400"){ // Если страницу прокрутили дальше, чем находится наш блок
            $('.circle').css({'display': 'block','position': 'fixed', 'bottom':'0', 'right':'0', 'margin':'20px','z-index':'10'});
//            $('.circle').css({}); // То мы этот блок фиксируем и отображаем сверху.
            
        }else{  // Если же позиция скрола меньше (выше), чем наш блок
            $('.circle').css({'position': 'static'}); // то возвращаем все назад
            
        }
    })
});

$(".circle").click(function(){   
     $("html, body").animate({scrollTop: 0}, "slow");
});
 
            var test = true;
//$("#show_menu").hover(function(){
//    $('#show').css({'position': 'fixed', 'top':'50px', 
//'z-index':'101'}); 
//    if(test == true){
//        $("#show").slideDown(500);
//        test = false;    
//    }
//    else{
//       
//    }
//},function(){
//     $("#show").slideUp(500);
//        test = true;
//        
//    
//    
//});
 $("#show_menu").on("mouseenter",function(){
       $('#show').css({'position': 'fixed', 'top':'50px', 
'z-index':'101'}); 
     $("#show").slideDown(500);
     
 })
  $("#show").on("mouseleave",function(){
      //$('#show').css({'position': 'static'}); 
      $("#show").slideUp(500);
 })
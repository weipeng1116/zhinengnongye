$(function  () {
    $('#son1').mouseenter(function  () {
        $('#son1 ul').slideDown();
    })
    $('#son1').mouseleave(function  () {
        $('#son1 ul').slideUp();
    })
    $('#son2').mouseenter(function  () {
        $('#son2 ul').slideDown();
    })
    $('#son2').mouseleave(function  () {
        $('#son2 ul').slideUp();
    })
    $('#son3').mouseenter(function  () {
        $('#son3 ul').slideDown();
    })
    $('#son3').mouseleave(function  () {
        $('#son3 ul').slideUp();
    })
    $('#son4').mouseenter(function  () {
        $('#son4 ul').slideDown();
    })
    $('#son4').mouseleave(function  () {
        $('#son4 ul').slideUp();
    })
})
var arr=['./img/imga.jpg','./img/imgn.jpg','./img/imgd.jpg','./img/imgf.jpg','./img/imgg.jpg'];
var k=0;
var t;
//每过一秒，将arr中的值赋给img的src属性
function changerSrc(){
    k++;
    if(k>5){
        k=0;
    }
    var path=arr[k];
    $("#imga img").attr('src',path);
    //使用位置选择器改变子div的效果
    $("#imga div").css('background','');
    $("#imga div:eq("+k+")").css('background','#4aee8f')
    t=setTimeout(changerSrc,1000);
}
$(function(){
    t=setTimeout(changerSrc,1000);
    $("#imga").mouseenter(function(){
        clearTimeout(t);
    })
    $("#imga").mouseleave(function(){
        t=setTimeout(changerSrc,1000);
    })
})


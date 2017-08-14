/*
* @Author: yuchunchun
* @Date:   2017-08-14 10:28:08
* @Last Modified by:   yuchunchun
* @Last Modified time: 2017-08-14 10:34:33
*/

'use strict';
var flag = true;
var endPosition = 0;
var currentItem = 0;
var timer = null;
setTimer();
$(function(){
    $(".menu li").mouseenter(function(){
        this.classList.add("active");
        $(this).siblings('li').each(function(index, el) {
            this.classList.remove("active");
        });
    });
    $(".round li").mouseenter(function(){
        clearInterval(timer);
        this.classList.add("checked");
        $(this).siblings('li').each(function(index, el) {
            this.classList.remove("checked");
        });
        var leftPositon = -(this.value)*1250;
        $(".header")[0].style.backgroundPosition = leftPositon + "px";
	});

    $(".round li").mouseleave(function(){
        setTimer();
    });

});
function setTimer(){
    timer = setInterval(function(){
        if(flag){
            endPosition -= 1250;
            currentItem ++;
            if(endPosition == -2500){
                flag = false;
            }
        }else{
            endPosition += 1250;
            currentItem --;
            if(endPosition == 0){
                flag = true;
            }
        }
        $(".header")[0].style.backgroundPosition = endPosition + "px";
        var that = $(".round").find("li")[currentItem];
        that.classList.add('checked');
        $(that).siblings('li').each(function(index, el) {
            this.classList.remove("checked");
        });
    }, 1500);
}
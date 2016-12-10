
var ser =utils.getElesByClass('ser')[0];
var input = ser.getElementsByTagName('input')[0];
var ul = ser.getElementsByTagName('ul')[0];
var lis = ul.getElementsByTagName('li');
input.onfocus = fn;
input.onkeyup = fn;
function fn(){

    var reg = /^\s*$/;
    if(reg.test(this.value)){
        ul.style.display = 'none';
        return;
    }
    ul.style.display = 'block';
}
ul.onclick = function (e){
    e = e || window.event;
    e.target = e.target || e.srcElement;
    if(e.target.nodeName == 'A'){
        input.value = e.target.innerHTML;
        this.style.display = 'none';
    }
};



var banner=document.getElementsByClassName('banner')[0];
new Banner(banner,'dataUrl.txt');

var like=utils.getElesByClass('like')[0];
var ul2=document.getElementById('ul');
var lis1=like.getElementsByTagName('li');
for(var i=0;i<lis1.length;i++){
    var cur=lis1[i];
    cur.onmouseover= function () {
        this.style.border='1px solid #dd2727';
    };
    cur.onmouseout= function () {
        this.style.border='1px solid #fff';
    }
}

var navWrap = document.getElementsByClassName('navWrap')[0];
var headerTop = document.getElementsByClassName('headerTop')[0];
(function () {
    window.onscroll = function () {
        var curScroll = utils.win('scrollTop');
        var speed = 800;
        if (curScroll < speed){
            navWrap.style.display = 'none';
            headerTop.style.display = 'none';
        }else {
            navWrap.style.display = 'block';
            headerTop.style.display = 'block';
        }
    };
})();

var divs = navWrap.getElementsByClassName('div1');
for(var j=0;j<divs.length;j++){
    divs[j].onclick=a1;
    divs[j].t=1760+500*j;
}
function a1(){
    var speed=50;
    var that=this;
    if (this.timer){
        window.clearInterval(that.timer);
    }
    this.timer=window.setInterval(function(){
        var curScrollTop=utils.win('scrollTop');
        if(curScrollTop-speed>that.t){
            curScrollTop-=speed;
        }else if(curScrollTop+speed<that.t){
            curScrollTop+=speed;
        }else{
            curScrollTop=utils.win('scrollTop',that.t);
            window.clearInterval(that.timer);
            return;
        }
        utils.win('scrollTop',curScrollTop);
    },10);
}


var navEnd = navWrap.getElementsByClassName('navEnd')[0];
var speed = 50;
navEnd.onclick = function () {
    console.log('111');
    var that = this;
    this.timer = window.setInterval(function () {
        var curScroll = utils.win('scrollTop');
        console.log(curScroll);
        if (curScroll <=0){
            window.clearInterval(that.timer);
            utils.win('scrollTop',0);
            return;
        }
        curScroll -= speed;
        utils.win('scrollTop',curScroll);
    },10)
};
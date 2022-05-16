function remSize(){
    // 获取设备的宽度
    let deviceWidth = document.documentElement.clientwidth || window.innerWidth
    if(deviceWidth >= 750){
        deviceWidth = 750
    }
    if(deviceWidth <= 320){
        deviceWidth = 320
    }
    // 750px情况下1rem=100px，375px情况下1rem=50px
    document.documentElement.style.fontSize = (deviceWidth/7.5) + 'px'
    //设置字体大小
    document.querySelector('body').style.fontSize = 0.3 + "rem"
}
window.onresize = function(){
    remSize();
}

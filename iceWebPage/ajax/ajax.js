//封装Ajax.js
function ajax(url,fnSuccess,fnFail) {
    //1.创建
    var oAjax = null;
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHttp");
    }
    //2.连接
    oAjax.open('GET',url,true);
    //3.发送
    oAjax.send();
    //4.接收返回
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState == 4) {
            if (oAjax.status == 200) {
                fnSuccess(oAjax.responseText());
            } else {
                alert("文件读取失败");
            }
        }
    }
    
};
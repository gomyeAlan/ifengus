
/*$$('.open-info').on('click', function () {
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid)
    myApp.pickerModal('.picker-info');
	if(isiOS){
		window.location.href="mailto:"+$("#h_sentmail_email").val();
	}
});*/
function sendEmailToAgent(){
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid)
    myApp.pickerModal('.picker-info');
	if(isiOS){
		 myApp.closeModal('.picker-info');
		window.location.href="mailto:"+$("#h_sentmail_email").val();
	}
}
$$('.close-info').on('click', function () {
    myApp.closeModal('.picker-info');
});

$$('.alert-weixin').on('click', function () {
	var wxcode = $("#h_pop_wxqrcode").val();
	if(wxcode==null || wxcode==""){
		return;
	}
    myApp.alert('<img src="/WeChat/imgwxqrcode/'+wxcode+'" width="150" />', '[长按二维码,选择‘识别图中二维码’]');
});
$$('.info-save').on('click', function () {

    var name = $("#ip_name").val();
    var email = $("#ip_email").val();
    var tel = $("#ip_tel").val();
    var msg = $("#ip_msg").val();
    var agentname = $("#h_sentmail_name").val();
    var agentemail =$("#h_sentmail_email").val();
    //var agentemail ='lixiqiang@outlook.com';
    if(name==""){
        myApp.alert("姓名不能为空");
        return;
    }
    if(email==""){
        myApp.alert("邮箱不能为空");
        return;
    }
    if(msg==""){
        myApp.alert("留言不能为空");
        return;
    }
    if(agentemail==""){
        myApp.alert("不能发送邮件");
        return;
    }
    var queryParam ={};
    queryParam.agentname =agentname;
    queryParam.agentmail =agentemail;
    queryParam.name =name;
    queryParam.email =email;
    queryParam.tel =tel;
    queryParam.msg =msg;

    $.post(webroot+'/agent/n/sendmail.wx', queryParam, function(res) {
        var ret = jQuery.parseJSON(res);
        if(ret.r =='f'){
            myApp.alert(ret.msg);
        }else{
            myApp.alert(ret.msg);
            myApp.closeModal('.picker-info');
        }

    });
});

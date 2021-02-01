
function delCookie(name) {
	setCookie(name, "", -1);  
}
function setCookie(name, value, time) {
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec * 1);
	document.cookie = name + "=" + escape(value) + ";expires="
			+ exp.toGMTString()+";path=/";
}
//设置cookie  
/*function setCookie(name, value, seconds) {  
 seconds = seconds || 0;   //seconds有值就直接赋值，没有为0，这个根php不一样。  
 var expires = "";  
 if (seconds != 0 ) {      //设置cookie生存时间  
 var date = new Date();  
 date.setTime(date.getTime()+(seconds*1000));  
 expires = "; expires="+date.toGMTString();  
 }  
 document.cookie = name+"="+escape(value)+expires+"; path=/";   //转码并赋值  
}*/  
function getCookie(name) {  
	 var nameEQ = name + "=";  
	
	 var ca = document.cookie.split(';');    //把cookie分割成组  
	 for(var i=0;i < ca.length;i++) {  
		 
	 var c = ca[i];                      //取得字符串  
	 while (c.charAt(0)==' ') {          //判断一下字符串有没有前导空格  
	 c = c.substring(1,c.length);      //有的话，从第二位开始取  
	 }  
	 if (c.indexOf(nameEQ) == 0) {       //如果含有我们要的name  
	 return unescape(c.substring(nameEQ.length,c.length));    //解码并截取我们要值  
	 }  
	 }  
	 return "";  
	}
function getsec(str) {
	if(str==-1)
		return 0;
	var str1 = str.substring(1, str.length) * 1;
	var str2 = str.substring(0, 1);
	
	var str3 = str.substring(str.length-1,1);
	var str4 = str.substring(0,str.length-1)*1;
	
	if (str2 == "s") {
		return str1 * 1000;
	} else if (str2 == "h") {
		return str1 * 60 * 60 * 1000;
	} else if (str2 == "d") {
		return str1 * 24 * 60 * 60 * 1000;
	}else if(str3 == "s") {
		return str4 * 1000;
	} else if (str3 == "h") {
		return str4 * 60 * 60 * 1000;
	} else if (str3 == "d") {
		return str4 * 24 * 60 * 60 * 1000;
	}
}

//获取rul参数方法
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

$(document).ready(function(){
	
	var para={};
	para.s = getQueryString("s");
	
	$.ajax({
        url: webroot+'/agent/getlogin.wx',
        type: 'POST',
        data: para,
        xhrFields: {
            withCredentials: true // 这里设置了withCredentials
        },
        success: function(res) {
        	
        	if(res!=null && res !="") {
    			var rtobj = jQuery.parseJSON(res);	
    			//当前用户 是agent
    			/*$("#commonHeader").css("display","none");
    			$("#agentHeader").css("display","block");
    			
    			$("#li_remenchengshi").css("display","block");
    			$("#li_fangyuansousuo").css("display","block");
    			$("#li_jingxuanfangyuan").css("display","block");
    			$("#li_fenleiwenzhang").css("display","block");
    			$("#li_ziwojieshao").css("display","block");
    			$("#li_wodezhuye").css("display","block");
    			
    			$("#img_photo").attr("src",$("#img_photo").attr("src")+rtobj.photo+'?s='+Math.random());*/
    			$("#li_pinglunguanli").css("display","block");
    			$("#li_xiaoxizhongxin").css("display","block");
    			$("#li_kehuzhongxin").css("display","block");
    			$("#li_membership").css("display","block");
    			$("#li_createcard").css("display","block");
    		} else {

    			//当前用户不是agent
    			/*$("#commonHeader").css("display","block");
    			$("#agentHeader").css("display","none");*/
    			$("#li_pinglunguanli").css("display","none");
    			$("#li_xiaoxizhongxin").css("display","none");
    			$("#li_kehuzhongxin").css("display","none");
    			$("#li_membership").css("display","none");
    			$("#li_createcard").css("display","none");
    			/*$("#li_remenchengshi").css("display","none");
    			$("#li_fangyuansousuo").css("display","none");
    			$("#li_jingxuanfangyuan").css("display","none");
    			$("#li_fenleiwenzhang").css("display","none");
    			$("#li_ziwojieshao").css("display","none");
    			$("#li_wodezhuye").css("display","none");*/
    		}
        },
        error: function(err) {
            
        }
    })

	
	
	/*$.post(webroot+'/agent/getlogin.wx', function(res) {
		
		if(res!=null && res !="") {
			var rtobj = jQuery.parseJSON(res);	
			//当前用户 是agent
			$("#commonHeader").css("display","none");
			$("#agentHeader").css("display","block");
			
			$("#li_remenchengshi").css("display","block");
			$("#li_fangyuansousuo").css("display","block");
			$("#li_jingxuanfangyuan").css("display","block");
			$("#li_fenleiwenzhang").css("display","block");
			$("#li_ziwojieshao").css("display","block");
			$("#li_wodezhuye").css("display","block");
			
			$("#img_photo").attr("src",$("#img_photo").attr("src")+rtobj.photo+'?s='+Math.random());
			$("#li_pinglunguanli").css("display","block");
			$("#li_xiaoxizhongxin").css("display","block");
			$("#li_kehuzhongxin").css("display","block");
			$("#li_membership").css("display","block");
		} else {

			//当前用户不是agent
			$("#commonHeader").css("display","block");
			$("#agentHeader").css("display","none");
			$("#li_pinglunguanli").css("display","none");
			$("#li_xiaoxizhongxin").css("display","none");
			$("#li_kehuzhongxin").css("display","none");
<<<<<<< HEAD
			$("#li_membership").css("display","none");
			/*$("#li_remenchengshi").css("display","none");
=======
			$("#li_remenchengshi").css("display","none");
>>>>>>> branch 'master' of https://thehouseclub.visualstudio.com/TheHouseClubV2/_git/TheHouseClubV2
			$("#li_fangyuansousuo").css("display","none");
			$("#li_jingxuanfangyuan").css("display","none");
			$("#li_fenleiwenzhang").css("display","none");
			$("#li_ziwojieshao").css("display","none");
			$("#li_wodezhuye").css("display","none");
		}
	});*/
	
	
	var displayvalues =[];
	var values =[];
	displayvalues.push("中文简体");
	displayvalues.push("English");
	displayvalues.push("中文繁体");
	values.push("zh-cn");
	values.push("en");
	values.push("zh-tw");
	  var pickerDeviceMyA = myApp.picker({
	       input: '#picker-langu',
	      // container: '#picker-date-container',
	      
	       formatValue: function (p, values, displayValues) {
	           return displayValues[0];
	       },
	       cols: [
	           {
	               textAlign: 'center',
	               values: values,
	               displayValues:displayvalues
	           }
	       ],
	       onChange: function (picker, value, displayValue) {
	    	   //alert(value);
	       },
	       onClose: function (p) {
	    	   delCookie("UILanguage");
	    	 setCookie("UILanguage",p.value[0],"d30");
	    	 var urladdress =  window.location.href;
	    	 var langindex = urladdress.indexOf("&langcode");
	    	 
	    	 location.href=urladdress.substring(0,langindex);
	       }
	   });
	  
	  var cookielang = getCookie("UILanguage");
	  for(var i =0;i<values.length;i++){
		  if(values[i] == cookielang){
			  $("#picker-langu").val(displayvalues[i]);
		  }
	  }
	  
	  
	/*//语言选择
	  var pickerDeviceL = myApp.picker({
	      input: '#picker-langu',
	      cols: [
	          {
	              textAlign: 'center',
	              values: ['中文简体', '英文', '中文繁体', '西班牙语', '俄语', '韩语', '日语', '法语']
	          }
	      ]
	  });*/
	  
	  
	  
	  console.log({lang:getCookie("UILanguage")});
	  var refer = $("#hid_menu_refer").val();
	  $.post(webroot+'/admin/agent/allCategory.wx',{lang:getCookie("UILanguage"),s:refer},function(data){
		
	    	if(data!=null && data!=""){
	    		var reobj = jQuery.parseJSON(data);
	    		console.log(reobj);
	  	       for(var i=0,l=reobj.length;i<l;i++){
	  	    	   category = reobj[i];
 	    			var submenu = "";
 	    			submenu += "<div class=\"listmore m-l-15 pointer\" onclick=\"window.location.href='"+webroot+"/agent/showAgentArts.wx?s="+refer+"&type="+category.id+"'\">";
 	    			submenu += "<i class=\"fa fa-circle-o font-size-5 p-l-10\"></i>";
 	    			submenu += "<span class=\"p-l-10\">"+category.name+"</span></div>";
 	    			$("#div_mymenu").append(submenu);
 	    			/*$("#div_mymenu").append("<div class=\"listmore m-l-15 pointer\" onclick=\"window.location.href='"+webroot+"/agent/showAgentArts.wx?category_id="+category.id+"&s="+refer+"'\">"
                     +"<i class=\"fa fa-circle-o font-size-5 p-l-10\"></i>"
                     +"<span class=\"p-l-10\">"+category.name+"</span></div>");*/
	    	    }
		    }
	    	
		  	  if(refer !=null && refer !=""){
		  		  $.post(webroot+'/admin/agent/category.wx',{s:refer},function(data){
		  				var displayvalues =[];
		  		    	var values =[];
		  		    	var menuhtml="";
		  		    	if(data!=null && data!=""){
		  		    		var reobj = jQuery.parseJSON(data);
		  		    	       for(var i=0,l=reobj.length;i<l;i++){
		  		    	    		for(var i=0;i<reobj.length; i++){
		  		    	    			category = reobj[i];
		  		    	    			displayvalues.push(category.name);
		  		    	    			values.push("my_"+category.id);
		  		    	    			$("#div_mymenu").append("<div class=\"listmore m-l-15 pointer\" onclick=\"window.location.href='"+webroot+"/agent/showAgentArts.wx?category_id="+category.id+"&s="+refer+"'\">"
		  	                            +"<i class=\"fa fa-circle-o font-size-5 p-l-10\"></i>"
		  	                            +"<span class=\"p-l-10\">"+category.name+"</span></div>");
		  		    	    		}
		  		    	    	}
		  		    	}
		  			}); 
		  	  }
		}); 
});
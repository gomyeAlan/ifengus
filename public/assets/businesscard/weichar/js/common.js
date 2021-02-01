Array.prototype.remove = function(s) {
    for (var i = 0; i < this.length; i++) {
        if (s == this[i])
            this.splice(i, 1);
    }
}

/**
 * Simple Map
 * 
 * 
 * var m = new Map();
 * m.put('key','value');
 * ...
 * var s = "";
 * m.each(function(key,value,index){
 *         s += index+":"+ key+"="+value+"\n";
 * });
 * alert(s);
 * 
 * @author dewitt
 * @date 2008-05-24
 */
function HashMap() {
    /** 存放键的数组(遍历用到) */
    this.keys = new Array();
    /** 存放数据 */
    this.data = new Object();
    
    /**
     * 放入一个键值对
     * @param {String} key
     * @param {Object} value
     */
    this.put = function(key, value) {
        if(this.data[key] == null){
            this.keys.push(key);
        }
        this.data[key] = value;
    };
    
    /**
     * 获取某键对应的值
     * @param {String} key
     * @return {Object} value
     */
    this.get = function(key) {
        return this.data[key];
    };
    
    /**
     * 删除一个键值对
     * @param {String} key
     */
    this.remove = function(key) {
        this.keys.remove(key);
        this.data[key] = null;
    };
    
    /**
     * 遍历Map,执行处理函数
     * 
     * @param {Function} 回调函数 function(key,value,index){..}
     */
    this.each = function(fn){
        if(typeof fn != 'function'){
            return;
        }
        var len = this.keys.length;
        for(var i=0;i<len;i++){
            var k = this.keys[i];
            fn(k,this.data[k],i);
        }
    };
    
    /**
     * 获取键值数组(类似Java的entrySet())
     * @return 键值对象{key,value}的数组
     */
    this.entrys = function() {
        var len = this.keys.length;
        var entrys = new Array(len);
        for (var i = 0; i < len; i++) {
            entrys[i] = {
                key : this.keys[i],
                value : this.data[i]
            };
        }
        return entrys;
    };
    
    /**
     * 判断Map是否为空
     */
    this.isEmpty = function() {
        return this.keys.length == 0;
    };
    
    /**
     * 获取键值对数量
     */
    this.size = function(){
        return this.keys.length;
    };
    
    /**
     * 重写toString 
     */
    this.toString = function(){
        var s = "{";
        for(var i=0;i<this.keys.length;i++,s+=','){
            var k = this.keys[i];
            s += k+"="+this.data[k];
        }
        s+="}";
        return s;
    };
}
var mlanguagelist = new HashMap();
//删除cookie
function delCookie1(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
//设置cookie
function setCookie1(name, value, time) {
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec * 1);
	document.cookie = name + "=" + escape(value) + ";expires="
			+ exp.toGMTString();
}
//获取cookie
function getCookie1(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
//获取时间
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
//格式化数字
function format_number(n) {
	var b = parseInt(n).toString();
	var len = b.length;
	if (len <= 3) {
		return b;
	}
	var r = len % 3;
	return r > 0 ? b.slice(0, r) + ","
			+ b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len)
			.match(/\d{3}/g).join(",");
}
//获取rul参数方法
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

function getLangText(langKey,langArg,arrkey){
	 var para={};
	    para.langKey = langKey;
	    if(langArg)
	    para.langArg = langArg;
	    else
	    	para.langArg = "";
		/*$.post(webroot+'/common/gettext.wx', para, function(res) {
			return res;
		});*/
		
		$.ajax({
			  type: 'POST',
			  url: webroot+'/agent/common/gettext.wx',
			  data: para,
			  async : false,
			  success: function(data){
				  mlanguagelist.put(arrkey,data);
				 // return data;
			  },
			  error:function(data){
				  mlanguagelist.put(arrkey,langKey);
				  //return langKey;
			  },
			  dataType: "json"
			});
}

function getLangText(langKey,langArg){
	 var para={};
	    para.langKey = langKey;
	    if(langArg)
	    para.langArg = langArg;
	    else
	    	para.langArg = "";
		/*$.post(webroot+'/common/gettext.wx', para, function(res) {
			return res;
		});*/
		if(mlanguagelist.get(langKey)){
			return mlanguagelist.get(langKey);
		}
	    
	    
		$.ajax({
			  type: 'POST',
			  url: webroot+'/agent/common/gettext.wx',
			  data: para,
			  async : false,
			  success: function(data){
				  mlanguagelist.put(langKey,data);
				 // return data;
			  },
			  error:function(data){
				  mlanguagelist.put(langKey,langKey);
				  //return langKey;
			  },
			  dataType: "json"
			});
}


function putShareData( type,openid,agentid,agentname,dataid,datatitle,dataurl,apiurl){
	var para=
    '{"type":' + type+','+
    '"openid":"' + openid+'",'+
    '"agentid":' + agentid+','+
    '"agentname":"' + agentname+'",'+
    '"dataid":' + dataid+','+
    '"dataurl":"' + dataurl+'",'+
    '"datatitle":"' + datatitle+'"}';
    
	$.ajax({
		  type: 'POST',
		  url: apiurl,
		 data: para,
		 datType: "JSON",  
		 contentType: "application/json",
		  success: function(ress){
			  
		  },
		  error:function(ee){
			  
		  }
		});
}
var matchText = " 手动录入学区信息";
function frameload(){
	$(".videocon").hide();
	/*$(".videocon").hide();
	$(".videocon").css({"position":"relative"},{"z-index":1},{"width":"100%"});
	*/
	/*$("#ifrvideo").width($("#div_video").width());
	$("#ifrvideo").height($("#div_video").height());*/
	/*if(appendfirst){
		$("#div_video").append($("#ifrvideo"));
		appendfirst=false;
	}*/
	
}

function format_number(n){
	var b=parseInt(n).toString();
	var len=b.length;
	if(len<=3){return b;}
	var r=len%3;
	return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
}

var loading = false;
$(document).ready(function(){
	try{
		calculate_payment();
	}catch(ex){}
	/*var iframe = document.getElementById("ifrvideo");      
    if (iframe.attachEvent) {      
        iframe.attachEvent("onload", function() {      
            //iframe加载完成后你需要进行的操作    
        	$(".videocon").css({"position":"relative"},{"z-index":"0"});
        	$(".videocon").hide();
        	
        	alert(3);
        });      
    } else {      
        iframe.onload = function() {      
                  //iframe加载完成后你需要进行的操作    
        	$(".videocon").css({"position":"relative"},{"z-index":"0"});
        	$(".videocon").hide();
        	alert(4);
        	
        };      
    }    */ 
	
	/*var mySwiper = new Swiper('.swiper-container',{
		autoplay : 5000,
		onTransitionEnd: function(swiper){
			swiper.activeIndex
	    }
		});*/
	var srcList = [];
	
	$.each($('.zoomimg'),function(i,item) { //jquery.each()循环读取所有图片
		 if(item.src){
	    	   var p = $(item).attr("src");
	    	   srcList.push(p);
	       }
	});
	
	function imagePreview(curSrc,srcList) {
	        if(!curSrc || !srcList || srcList.length == 0) {
	            return;
	        }
	        WeixinJSBridge.invoke('imagePreview', {
	            'current' : curSrc,
	            'urls' : srcList
	        });
	    }
	
	$.each($('.zoomimg'),function(i,item) {
		   if(item.src) {
		       //srcList.push(item.src);
		       $(item).click(function(e) {
		           imagePreview(this.src,srcList);
		       });
		   }
		});
	
	var descText =$("#h_description").val();
	var appid =$("#h_appid").val();
	var timestamp =$("#h_timestamp").val();
	var nonceStr =$("#h_nonceStr").val();
	var signature =$("#h_signature").val();
	var artid =$("#h_artid").val();
	var title =$("#h_artname").val();
	var cover =$("#h_artcover").val();
	
	var shorttitle= $("#h_shorttitle").val();
	
	if(shorttitle==null ||shorttitle ==""){
		shorttitle="点击查看最新房源详情";
	}
	/*if(title==null || title==""){
		title="${agentInfo.realName}"+sharetoyou_lang;
	}*/
	
	wx.config({
	    debug: false,
	    appId: appid,
	    timestamp: Number(timestamp),
	    nonceStr: nonceStr,
	    signature: signature,
	    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
	});
	
	wx.ready(function(){
			wx.onMenuShareTimeline({
			    title: descText, // 分享标题
			    link: webroot+'/agent/listDetail.wx?id='+artid+'&langcode='+$("#ip_currentlang").val(), // 分享链接
			    imgUrl: cover, // 分享图标
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			    	hidePop(".mod-pop");
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    	hidePop(".mod-pop");
			    }
			});
			wx.onMenuShareAppMessage({
			    title: descText, // 分享标题
			    desc: shorttitle, // 分享描述
			    link: webroot+'/agent/listDetail.wx?id='+artid+'&langcode='+$("#ip_currentlang").val(), // 分享链接
			    imgUrl: cover, // 分享图标
			    type: 'link', // 分享类型,music、video或link，不填默认为link
			    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			    	hidePop(".mod-pop");
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    	hidePop(".mod-pop");
			    }
			});
		});
	
	wx.error(function(res){
		//alert(res);
	});
	
	
	
	var communitycity = $("#hid_detailcity").val();
	var postalcode= $("#hid_postalcode").val();
	var langcode = $("#ip_currentlang").val();
	  if(!langcode)
		  langcode="zh-cn";
	  
	  var Hispanic="西裔";
		var African ="非裔";
		var Whites="白人";
		var Asian="亚裔";
		var totalrenkou="社区总人口";
		
	  if(langcode=="en"){
		     Hispanic="Hispanic";
			 African ="African";
			 Whites="Whites";
			 Asian="Asian";
			 totalrenkou="Total";
	  }
	
	$.post(jggapiurl+'rest/community/communityinfo/'+encodeURIComponent(communitycity)+'/'+encodeURIComponent(postalcode),null,function(res) {		
		var resObj = JSON.parse(res); 
		if(resObj.respCode=='0'){
			
			$("#chartshequ").show();
			var zrk = Number(resObj.data.population);//总人口
			var brrk = Number(resObj.data.whitealonecount);//白人比例
			var hrrk = Number(resObj.data.blackalonecount);//黑人比例
			var yyrk = Number(resObj.data.asianalonecount);//亚裔比例
			var xyrk = Number(resObj.data.hispaniccount);//西裔比例
			
			var brbl = Number(resObj.data.whitealoneratio);//白人比例
			var hrbl = Number(resObj.data.blackaloneratio);//黑人比例
			var yybl = Number(resObj.data.asianaloneratio);//亚裔比例
			var xybl = Number(resObj.data.hispanicratio);//西裔比例
			brbl = (brbl).toFixed(2);
			hrbl = (hrbl).toFixed(2);
			yybl = (yybl).toFixed(2);
			xybl = (xybl).toFixed(2);
		        var myChart1 = echarts.init(document.getElementById('Chart1'));
				option1 = {
						tooltip: {
							show:false,
							trigger: 'item',
							formatter: "{a} <br/>{b}: {c} ({d}%)"
						},
						legend: {
							orient: 'vertical',	//horizontal
							icon: 'circle',
							//x: 'left',
							//left:0,
							right: 0,	
							top:30,									
							itemWidth:12,
							itemHeight:12,
							itemGap:20,
							//padding: [5,15],
							textStyle:{
								fontSize:14,
							},
												
							formatter: function(name) {
								datearray={"dataname":[Hispanic,African,Whites,Asian],"datavalue":[xybl,hrbl,brbl,yybl]};
								var index = 0;
								datearray.dataname.forEach(function(value,i){
									if(value == name){
										index = i;
									}
								});
								return name + " " + datearray.datavalue[index] +"%";
							},
							
							data:[Hispanic,African,Whites,Asian],
							
							
						},
						
						color:[ '#172a88','#171c60','#2ea7e0','#036fb8',],
						series: [
							{
								name:'族裔比例',						
								type:'pie',
								radius: ['50%', '70%'],						
								avoidLabelOverlap: false,
								hoverAnimation:false,//是否开启 hover 在扇区上的放大动画效果
								itemStyle:{
									normal:{
										borderWidth:2,
										borderColor:'#fff',
										
									},
									
								},
								center: ['25%', '50%'],	
								label: {
									normal: {
										show: false,
										position: 'center',	
									},
									emphasis: {
										show: false,
										textStyle: {
											fontSize: '14',
											fontWeight: 'bold'
										}
									}
								},
								labelLine: {
									normal: {
										show: false
									}
								},
								
								data:[
								
									{value:xybl, name:Hispanic},
									{value:hrbl, name:African},
									{value:brbl, name:Whites},
									{value:yybl, name:Asian}
								],
								
							}, {
							        name: '中间文字',
							        type: 'pie',
							        clockWise: true,
							        hoverAnimation: false,
							        radius: [100, 100],
							        center: ['25%', '50%'],	
							        label: {
							            normal: {
							                position: 'center'
							            }
							        },
							        data: [{
							            value: 1,
							            label: {
							                normal: {
							                    formatter: totalrenkou,
							                    textStyle: {
							                        color: '#221711',
							                        fontSize: 12
							                    }
							                }
							            }
							        }, {
							            tooltip: {
							                show: false
							            },
							            label: {
							                normal: {
							                    formatter: '\n'+zrk+'人',
							                    textStyle: {
							                        color: '#221711',
							                        fontSize: 12
							                    }
							                }
							            }
							        }]
							    }
						]
				};
				// 使用刚指定的配置项和数据显示图表。
		        myChart1.setOption(option1);
		}
	});
	
    /*2018.7.25学区信息 修改学校*/
	try{
		 var pickerEleNames = $("#elementaryNames").val().replace("[","").replace("]","").split(",");
	        var pickerMidNames = $("#middleNames").val().replace("[","").replace("]","").split(",");
	        var pickerHighNames = $("#highNames").val().replace("[","").replace("]","").split(",");
	        var pickerEleDesc = $("#elementaryDesc").val().replace("[","").replace("]","").split(",");
	        var pickerMidDesc = $("#middleDesc").val().replace("[","").replace("]","").split(",");
	        var pickerHighDesc = $("#highDesc").val().replace("[","").replace("]","").split(",");
	        var pickerListxqA1 = myApp.picker({
	            input: '#pickerA-xqname1',
	            toolbarTemplate: 
	                '<div class="toolbar">' +
	                    '<div class="toolbar-inner">' +
		                    '<div class="left">' +
	                            '<a href="#" class="link close-picker" style="color:blue;">取消</a>' +
	                        '</div>' +
	                        '<div class="right">' +
	                            '<a href="#" class="link toolbar-randomize-link" style="color:blue;">确定</a>' +
	                        '</div>' +		                        
	                    '</div>' +
	                '</div>',
	            onChange: function (picker, values, displayValues) {
/*		            	var col = pickerListxqA1.cols[0];
	            	if(pickerEleNames[col.activeIndex] != matchText){
		            	$("#allschool1Desc").html(values + pickerEleDesc[col.activeIndex].split("|")[0]);
		            	$("#allschool1Dis").html(pickerEleDesc[col.activeIndex].split("|")[1] + " Mi");
	            	}*/
	            },
	            onClose: function (picker) {		            	
	            	
	            },
	            onOpen: function (picker) {
	            	 picker.container.find('.toolbar-randomize-link').on('click', function () {
		            	var col = pickerListxqA1.cols[0];
		            	var name = pickerEleNames[col.activeIndex];
		            	if(name != matchText){
			            	myApp.showPreloader('正在更新数据，请稍后...');
			            	var moreParam={};
			    			moreParam.level="elementary";
			    			moreParam.type="public";
			    			moreParam.name=name;
			    			moreParam.mls=$("#h_artno").val();
			            	$.post(webroot+'/agent/updateShowSchool.wx',moreParam, function(res) {
			            		myApp.hidePreloader();
			            		var resObj = JSON.parse(res); 
			            		if(resObj.res=='success'){
			            			//needreloadurl.push(currenturl);
			            			mainView.router.refreshPage();
			            			myApp.alert('更新成功');	            			
			            		}
			            		if(resObj.res=='failed'){
			            			myApp.alert('更新失败');		
			            		}
			            	});
		            	}else{
		            		updateSchool(1,$("#h_artno").val())
		            	}
	            	 });
	            },
	            cols: [
	                {
	                    textAlign: 'center',
	                    values: pickerEleNames
	                }
	            ]
	        });
	        var pickerListxqA2 = myApp.picker({
	            input: '#pickerA-xqname2',
	            toolbarTemplate: 
	                '<div class="toolbar">' +
	                    '<div class="toolbar-inner">' +
		                    '<div class="left">' +
	                            '<a href="#" class="link close-picker" style="color:blue;">取消</a>' +
	                        '</div>' +
	                        '<div class="right">' +
	                            '<a href="#" class="link toolbar-randomize-link" style="color:blue;">确定</a>' +
	                        '</div>' +		                        
	                    '</div>' +
	                '</div>',
	            onChange: function (picker, values, displayValues) {
	            	/*var col = pickerListxqA2.cols[0];
	            	if(pickerMidNames[col.activeIndex] != matchText){
		            	$("#allschool2Desc").html(values + pickerMidDesc[col.activeIndex].split("|")[0]);
		            	$("#allschool2Dis").html(pickerMidDesc[col.activeIndex].split("|")[1] + " Mi");
	            	}*/
	            },
	            onClose: function (picker) {	
	            },
	            onOpen: function (picker) {
	            	 picker.container.find('.toolbar-randomize-link').on('click', function () {
		            	var col = pickerListxqA2.cols[0];
		            	var name = pickerMidNames[col.activeIndex];
		            	if(name != matchText){
		            		myApp.showPreloader('正在更新数据，请稍后...');
			            	var moreParam={};
			    			moreParam.level="middle";
			    			moreParam.type="public";
			    			moreParam.name=name;
			    			moreParam.mls=$("#h_artno").val();
			            	$.post(webroot+'/agent/updateShowSchool.wx',moreParam, function(res) {
			            		myApp.hidePreloader();
			            		var resObj = JSON.parse(res); 
			            		if(resObj.res=='success'){
			            			//needreloadurl.push(currenturl);
			            			mainView.router.refreshPage();
			            			myApp.alert('更新成功');
			            		}
			            		if(resObj.res=='failed'){
			            			myApp.alert('更新失败');		
			            		}
			            	});
		            	}else{
		            		updateSchool(2,$("#h_artno").val())
		            	}
	            	 });
	            },
	            cols: [
	                {
	                    textAlign: 'center',
	                    values: pickerMidNames
	                }
	            ]
	        });
	        var pickerListxqA3 = myApp.picker({
	            input: '#pickerA-xqname3',
	            toolbarTemplate: 
	                '<div class="toolbar">' +
	                    '<div class="toolbar-inner">' +
		                    '<div class="left">' +
	                            '<a href="#" class="link close-picker" style="color:blue;">取消</a>' +
	                        '</div>' +
	                        '<div class="right">' +
	                            '<a href="#" class="link toolbar-randomize-link" style="color:blue;">确定</a>' +
	                        '</div>' +		                        
	                    '</div>' +
	                '</div>',
	            onChange: function (picker, values, displayValues) {
	            	/*var col = pickerListxqA3.cols[0];
	            	if(pickerHighNames[col.activeIndex] != matchText){
		            	$("#allschool3Desc").html(values + pickerHighDesc[col.activeIndex].split("|")[0]);
		            	$("#allschool3Dis").html(pickerHighDesc[col.activeIndex].split("|")[1] + " Mi");
	            	}*/
	            },
	            onClose: function (picker) {       	
	            },
	            onOpen: function (picker) {
	            	 picker.container.find('.toolbar-randomize-link').on('click', function () {
			            	var col = pickerListxqA3.cols[0];
			            	var name = pickerHighNames[col.activeIndex];
			            	if(name != matchText){
			            		myApp.showPreloader('正在更新数据，请稍后...');
				            	var moreParam={};
				    			moreParam.level="high";
				    			moreParam.type="public";
				    			moreParam.name=name;
				    			moreParam.mls=$("#h_artno").val();
				            	$.post(webroot+'/agent/updateShowSchool.wx',moreParam, function(res) {
				            		myApp.hidePreloader();
				            		var resObj = JSON.parse(res); 
				            		if(resObj.res=='success'){
				            			//needreloadurl.push(currenturl);
				            			mainView.router.refreshPage();
				            			myApp.alert('更新成功');
				            		}
				            		if(resObj.res=='failed'){
				            			myApp.alert('更新失败');		
				            		}
				            	});
			            	}else{
			            		updateSchool(3,$("#h_artno").val())
			            	}
	            	
	            	 });
	            },
	            cols: [
	                {
	                    textAlign: 'center',
	                    values: pickerHighNames
	                }
	            ]
	        });	
	
		}catch(xqe){
						
					}

		try{
			calculate_payment();//计算贷款数据
		}catch(sss){}
		
		/*加拿大学区信息 修改学校*/
		try{
			var pickerBEleNames = $("#elementaryNames").val().replace("[","").replace("]","").split(",");
	        var pickerBSecNames = $("#secondaryNames").val().replace("[","").replace("]","").split(",");
	        var pickerBEleDesc = $("#elementaryDesc").val().replace("[","").replace("]","").split(",");
	        var pickerBSecDesc = $("#secondaryDesc").val().replace("[","").replace("]","").split(",");
	        var pickerBEleRank = $("#elementaryRank").val().replace("[","").replace("]","").split(",");
	        var pickerBSecRank = $("#secondaryRank").val().replace("[","").replace("]","").split(",");
	        var pickerListxqB1 = myApp.picker({
	            input: '#pickerB-elementary',
	            toolbarTemplate: 
	                '<div class="toolbar">' +
	                    '<div class="toolbar-inner">' +
		                    '<div class="left">' +
	                            '<a href="#" class="link close-picker" style="color:blue;">取消</a>' +
	                        '</div>' +
	                        '<div class="right">' +
	                            '<a href="#" class="link toolbar-randomize-link" style="color:blue;">确定</a>' +
	                        '</div>' +		                        
	                    '</div>' +
	                '</div>',
	            onChange: function (picker, values, displayValues) {
	            },
	            onClose: function (picker) {		            	
	            	
	            },
	            onOpen: function (picker) {
	            	 picker.container.find('.toolbar-randomize-link').on('click', function () {
		            	var col = pickerListxqB1.cols[0];
		            	var name = pickerBEleNames[col.activeIndex];				            	
		            	if(name != matchText){
			            	myApp.showPreloader('正在更新数据，请稍后...');
			            	var dis = pickerBEleDesc[col.activeIndex].split("|")[1].trim();
			            	var rt = pickerBEleRank[col.activeIndex];
			            	var grade = pickerBEleDesc[col.activeIndex].split("|")[0].trim().split(" ")[2];
			            	var moreParam={};
			    			moreParam.level="elementary";
			    			moreParam.type="public";
			    			moreParam.name=name;
			    			moreParam.mls=$("#h_artno").val();
			    			moreParam.distance=dis;
			    			moreParam.rank=rt;
			    			moreParam.grade=grade;
			            	$.post(webroot+'/agent/updateCreaShowSchool.wx',moreParam, function(res) {
			            		myApp.hidePreloader();
			            		var resObj = JSON.parse(res); 
			            		if(resObj.res=='success'){
			            			mainView.router.refreshPage();
			            			myApp.alert('更新成功');	            			
			            		}
			            		if(resObj.res=='failed'){
			            			myApp.alert('更新失败');		
			            		}
			            	});
		            	}else{
		            		updateCreaSchool("elementary",$("#h_artno").val())
		            	}
	            	 });
	            },
	            cols: [
	                {
	                    textAlign: 'center',
	                    values: pickerBEleNames
	                }
	            ]
	        });
	        var pickerListxqB2 = myApp.picker({
	            input: '#pickerB-secondary',
	            toolbarTemplate: 
	                '<div class="toolbar">' +
	                    '<div class="toolbar-inner">' +
		                    '<div class="left">' +
	                            '<a href="#" class="link close-picker" style="color:blue;">取消</a>' +
	                        '</div>' +
	                        '<div class="right">' +
	                            '<a href="#" class="link toolbar-randomize-link" style="color:blue;">确定</a>' +
	                        '</div>' +		                        
	                    '</div>' +
	                '</div>',
	            onChange: function (picker, values, displayValues) {
	            },
	            onClose: function (picker) {	
	            },
	            onOpen: function (picker) {
	            	 picker.container.find('.toolbar-randomize-link').on('click', function () {
		            	var col = pickerListxqB2.cols[0];
		            	var name = pickerBSecNames[col.activeIndex];				            	
		            	if(name != matchText){
		            		myApp.showPreloader('正在更新数据，请稍后...');
		            		var dis = pickerBSecDesc[col.activeIndex].split("|")[1].trim();
			            	var rt = pickerBSecRank[col.activeIndex];
			            	var grade = pickerBSecDesc[col.activeIndex].split("|")[0].trim().split(" ")[2];
			            	var moreParam={};
			    			moreParam.level="secondary";
			    			moreParam.type="public";
			    			moreParam.name=name;
			    			moreParam.mls=$("#h_artno").val();
			    			moreParam.distance=dis;
			    			moreParam.rank=rt;
			    			moreParam.grade=grade;
			            	$.post(webroot+'/agent/updateCreaShowSchool.wx',moreParam, function(res) {
			            		myApp.hidePreloader();
			            		var resObj = JSON.parse(res); 
			            		if(resObj.res=='success'){
			            			mainView.router.refreshPage();
			            			myApp.alert('更新成功');
			            		}
			            		if(resObj.res=='failed'){
			            			myApp.alert('更新失败');		
			            		}
			            	});
		            	}else{
		            		updateCreaSchool("secondary",$("#h_artno").val())
		            	}
	            	 });
	            },
	            cols: [
	                {
	                    textAlign: 'center',
	                    values: pickerBSecNames
	                }
	            ]
	        });
		
		}catch(creaxqe){
						
					}
});
	
function updateSchool(index,mls){
	var title ="输入学区信息";
	var level = "";
	if(index == 1){
		level = "elementary"
	}else if(index == 2){
		level = "middle"
	}else if(index == 3){
		level = "high"
	}
	
	var desc = $("#allschool"+index+"Desc").html();
	var dis = $("#allschool"+index+"Dis").html().replace("Mi","").trim();
	var src = $("#allschool"+index+"Rt").attr("src").split(".png")[0];
	var rt = src.split("rating")[1];

	
	var text = '<div class="swiper-container" style="width: auto; margin:5px -15px -15px">'+
	'<span id="lname">学校名称：</span><input id="model-schoolname" value="'+ desc.split("<br>")[0].trim() +'"></input></br>'+
	'<span></span><br>'+
	'<span id="lgrade">年级范围：</span><input id="model-schoolgrade" value="'+ desc.split("<br>")[1].split(" ")[2].trim() +'"></input></br>'+
	'<span></span><br>'+
	'<span id="ldis">评分等级：</span><input id="model-schoolrating" value="'+ rt +'" oninput = "value=value.replace(/[^(-?\\d+)]/g,\'\')"></input></br>'+
	'<span></span><br>'+
	'<input type="text" id="tips-2" readonly="readonly" style=" border:0;color:red;"/><br>'+
	'<span id="ldis">学校距离：</span><input id="model-schooldistance" value="'+ dis +'" oninput = "value=value.replace(/[^(-?\\d+)(\\.\\d+)?]/g,\'\')"></input></br>'+
	'<span></span><br>'
	
	myApp.modal({
	    title:  title,
	    text: text, 
	    buttons: [
	      {
	        text: 'Cancel',
	      },
	      {
		        text: 'Reset',
		        close:false,
		        onClick: function() {
		        	var schoolname = $("#model-schoolname").val("");
		        	var schoolgrade = $("#model-schoolgrade").val("");
		        	var schooldistance = $("#model-schooldistance").val("");
		        	var schoolrating = $("#model-schoolrating").val("");
		        }
		  },
	      {
	        text: 'OK',
	        close:false,
	        onClick: function() {
	        	$("#tips-2").val("");
	        	var schoolname = $("#model-schoolname").val();
	        	var schoolgrade = $("#model-schoolgrade").val();
	        	var schooldistance = $("#model-schooldistance").val();
	        	var schoolrating = $("#model-schoolrating").val();
	        	if(schoolname == ""){
	        		$("#model-schoolname").focus();
	        	}else if(schoolgrade == ""){
	        		$("#model-schoolgrade").focus();
	        	}else if(schoolrating == ""){
	        		$("#model-schoolrating").focus();
	        	}else if(schooldistance == ""){
	        		$("#model-schooldistance").focus();
	        	}else if(schoolrating !="" &&(schoolrating > 10 || schoolrating < 0)){
					$("#tips-2").val("评分等级只能是0到10");
        		}else{	
        			$("#tips-2").val("");
					var checked = "public";
		        	$.post(webroot+'/agent/updateShowSchool.wx',{mls:mls,name:schoolname,grade:schoolgrade,type:checked,level:level,distance:schooldistance,rating:schoolrating},function(res) {		
		        		var resObj = JSON.parse(res); 
		        		if(resObj.res=='success'){
		        			myApp.hidePreloader();
		        			myApp.alert("修改成功!");
		        			/*schooldistance += " Mi"
		        			$("#allschool"+index+"Desc").html(schoolname+"<br>"+checked+" "+level+" "+schoolgrade);
		        			$("#allschool"+index+"Dis").html(schooldistance);
		        			if(schoolrating == "" || schoolrating < 0 || schoolrating > 10){
		        				$("#allschool"+index+"Rt").attr("src","/newContent/img/rating0.png?t=" + random(3));
		        			}else{
		        				$("#allschool"+index+"Rt").attr("src","/newContent/img/rating"+schoolrating+".png?t=" + random(3));
		        			}
		        			myApp.closeModal(modal);*/
		        			mainView.router.refreshPage();
		        		}else{
		        			myApp.hidePreloader();
		        			myApp.alert("修改失败!");
		        		}
		        	});
	        	}
	        }
	      },
	    ]
	  })
}




function updateCreaSchool(index,mls){
	 var title ="输入学区信息";
	 var level = index;

	 var desc = $("#allschool"+level+"Desc").html();
	 var dis = $("#allschool"+level+"Dis").html().replace("Mi","").trim();
	 var rt = $("#allschool"+level+"Rt").text();


	 var text = '<div class="swiper-container" style="width: auto; margin:5px -15px -15px">'+
	 '<span id="lname">学校名称：</span><input id="model-schoolname" value="'+ desc.split("<br>")[0].trim() +'"></input></br>'+
	 '<span></span><br>'+
	 '<span id="lgrade">年级范围：</span><input id="model-schoolgrade" value="'+ desc.split("<br>")[1].split(" ")[2].trim() +'"></input></br>'+
	 '<span></span><br>'+
	 '<span id="ldis">评分等级：</span><input id="model-schoolrating" value="'+ rt +'" oninput = "value=value.replace(/[^(-?\\d+)]/g,\'\')"></input></br>'+
	 '<span></span><br>'+
	 '<input type="text" id="tips-2" readonly="readonly" style=" border:0;color:red;"/><br>'+
	 '<span id="ldis">学校距离：</span><input id="model-schooldistance" value="'+ dis +'" oninput = "value=value.replace(/[^(-?\\d+)(\\.\\d+)?]/g,\'\')"></input></br>'+
	 '<span></span><br>'

	 myApp.modal({
	     title:  title,
	     text: text, 
	     buttons: [
	       {
	         text: 'Cancel',
	       },
	       {
	 	        text: 'Reset',
	 	        close:false,
	 	        onClick: function() {
	 	        	var schoolname = $("#model-schoolname").val("");
	 	        	var schoolgrade = $("#model-schoolgrade").val("");
	 	        	var schooldistance = $("#model-schooldistance").val("");
	 	        	var schoolrating = $("#model-schoolrating").val("");
	 	        }
	 	  },
	       {
	         text: 'OK',
	         close:false,
	         onClick: function() {
	         	$("#tips-2").val("");
	         	var schoolname = $("#model-schoolname").val();
	         	var schoolgrade = $("#model-schoolgrade").val();
	         	var schooldistance = $("#model-schooldistance").val();
	         	var schoolrating = $("#model-schoolrating").val();
	         	if(schoolname == ""){
	         		$("#model-schoolname").focus();
	         	}else if(schoolgrade == ""){
	         		$("#model-schoolgrade").focus();
	         	}else if(schoolrating == ""){
	         		$("#model-schoolrating").focus();
	         	}else if(schooldistance == ""){
	         		$("#model-schooldistance").focus();
	         	}else if(schoolrating !="" &&(schoolrating > 10 || schoolrating < 0)){
	 				$("#tips-2").val("评分等级只能是0到10");
	     		}else{	
	     			$("#tips-2").val("");
	 				var checked = "public";
	 	        	$.post(webroot+'/agent/updateCreaShowSchool.wx',{mls:mls,name:schoolname,grade:schoolgrade,type:checked,level:level,distance:schooldistance,rank:schoolrating},function(res) {		
	 	        		var resObj = JSON.parse(res); 
	 	        		if(resObj.res=='success'){
	 	        			myApp.hidePreloader();
	 	        			myApp.alert("修改成功!");
	 	        			mainView.router.refreshPage();
	 	        		}else{
	 	        			myApp.hidePreloader();
	 	        			myApp.alert("修改失败!");
	 	        		}
	 	        	});
	         	}
	         }
	       },
	     ]
	   })
	 }

function gotoCommentPage(level,url){
	 if(level==6){
	 		myApp.alert('此功能暂不开放，请联系经纪人！');
	 	}
	 	else{
	 		window.location.href=url;
	 	}
}
function DispimgDiv(){
	
	$(".videocon").hide();
	$(".swiper-container").hide();
	
	$(".silidercon").hide();
	$(".abtnimage").hide();
	$(".abtnslider").hide();
	
	$(".abtnvideo").hide();
	//$(".imglist").css({"z-index":99});
	$(".abtnnormal").show();
	$(".imglist").show();
	$('img.lazy').trigger('lazy');
}
function DispvideoDiv(){
	
	$(".imglist").hide();
	$(".swiper-container").hide();
	$(".abtnslider").hide();
	$(".silidercon").hide();
	//$("#ifrvideo").css({"width":"101%"});
	$(".abtnimage").hide();
	$(".abtnvideo").hide();
	$(".abtnnormal").show();
	$(".videocon").show();
	
	//初始化腾讯视频
	var h = $("#mod_player").height();
	var qqvideoid =$("#hid_qqvideo").val(); 
		  var w = $("#mod_player").width();
	 var video1 = new tvp.VideoInfo();
  	  video1.setVid(qqvideoid);
  	  window.player = new tvp.Player();
  	  window.player.create({
  	    width  : w,
  	    height : h,
  	    pic: tvp.common.getVideoSnapMobile(qqvideoid),
  	    video  : video1,
  	    playerType: 'html5',
  	    modId  : "mod_player",
  	    // 正片是否自动播放
  	    autoplay: false,
  	    html5loop: false,
  	    // 前贴广告播完是否自动播放正片
  	    autoplayAfterLoadingad: false,
  	    // 前贴广告是否自动播放
  	    loadingadAutoplay: false,
  	    isSkipLoadingAd: true,
  	    // isHtml5ShowLoadingAdOnStart: true,
  	    // isHtml5ShowLoadingAdOnChange: true,
  	    isiPhoneShowPosterOnPause: false,
  	    isContinuePlay: false,
  	    onplay:function(){
  	    	
  	    },
  	    oninited:function(){
  	    	canPlay=true;
  	    	 
  	    },
  	    ongetnext:function(){
  	    	window.player.pause();
  	    	
  	    	
  	    	
  	    },
  	    onallended:function(){
  	    	window.player.pause();
  	    	
  	    	
  	    },
  	     plugins: {
  	      AppRecommend: true,
  	      // adonend: true
  	    },
  	    useHtml5VerticalBullet: true, 
  	    onwrite: function(){
  	     
  	    }
  	  });
}
function DispnormalDiv(){
	$(".imglist").hide();
	$(".silidercon").hide();
	$(".ninthimglist").hide();
	$(".flyerimglist").hide();
	$(".longimglist").hide();
	$(".videocon").hide();
	$(".abtnnormal").hide();
	$(".swiper-container").show();
    $(".abtnimage").show();
	$(".abtnslider").show();
	$(".abtnvideo").show();
	var bgaudio = $("#bgaudio")[0];
	bgaudio.pause();
}

function DispsliderDiv(){
	$(".videocon").hide();
	$(".imglist").hide();
	$(".swiper-container").hide();
	$(".abtnslider").hide();
	//$("#ifrvideo").css({"width":"101%"});
	$(".abtnimage").hide();
	$(".abtnvideo").hide();
	$(".abtnnormal").show();
	$(".silidercon").show();
	var bgaudio = $("#bgaudio")[0];
	bgaudio.play();
}
function DispDiv(a,b,c,d,e,f,g){
	
	 if(c)
		 	$(c).hide();
		 	if(d)
		 	$(d).hide();
		 	if(e){
		 		$(e).hide();	
		 		 $(e).css({"z-index":-1});
		 	}
		 	
		 	if(f)
		 	$(f).hide();
		 	if(f)
		 	$(g).hide();
	 if(a){
		 $(a).show(); 
		 $(a).css({"z-index":1});
	 }
	 
	if(b){
		$(b).show();
		$(b).css({"z-index":1});
		 $(a).css({"z-index":0});
	}
	

		
	
	
	if(a==".swiper-container"){
		if(b)
		 	$(b).show();	
		 	if(c)
		 	$(c).show();
	}
	if(a==".videocon"){
		$(".videocon").css({"position":"relative"});
		
		$(".videocon").css({"z-index":0});
	
		//$(".videocon").css({"width":"100%"});
		//alert(1);
		//$("#ifrvideo").width("101%");
		/*$(".videocon").width(640);
		
		$(".videocon").css("height","auto");*/
		 
	}
	//$("#ifrvideo").height(230);
	
	
}
function isRealNum(val){
    // 先判定是否为number
   val = Number(val);
    if(!isNaN(val)){
        return true;
    }else{
        return false;
    }
}

/**
 * [number_format 参数说明：]
 * @param  {[type]} number        [number：要格式化的数字]
 * @param  {[type]} decimals      [decimals：保留几位小数]
 * @param  {[type]} dec_point     [dec_point：小数点符号]
 * @param  {[type]} thousands_sep [thousands_sep：千分位符号]
 * @param  {[type]} roundtag      [roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入]
 * @return {[type]}               [description]
 *    
 */
function number_format(number, decimals, dec_point, thousands_sep, roundtag) {

    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    roundtag = roundtag || "ceil"; //"ceil","floor","round"
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {

            var k = Math.pow(10, prec);
            console.log();

            return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function calculate_payment(compent){
	if($("#ip_totalprice").val()==""||$("#ip_payratio").val()==""
		||$("#ip_payrate").val()==""||$("#ip_totalplan").val()==""||$("#ip_totalprice").val()==""
			||$("#ip_firstpay").val()=="")
	return;
	
	if(!isRealNum($("#ip_totalprice").val().replace(/,/g,""))
			||!isRealNum($("#ip_payratio").val().replace(/,/g,""))
			||!isRealNum($("#ip_payrate").val().replace(/,/g,""))
			||!isRealNum($("#ip_totalplan").val().replace(/,/g,""))
			||!isRealNum($("#ip_totalprice").val().replace(/,/g,""))
			||!isRealNum($("#ip_firstpay").val().replace(/,/g,"")))
	return;
	
	var chineseprice = Number($("#hid_chprice").val());
	var ROUND_DIGITS = true;
	var DIGIT_PRECISION = 2;
	var housetotal = Number($("#ip_totalprice").val());
	
	
	var payratio = Number($("#ip_payratio").val())*0.01;
	
	
	var interest_rate = Number($("#ip_payrate").val())/100;
	var length_of_mortgage = Number($("#ip_totalplan").val());
	var firstpay = Number($("#ip_firstpay").val());
	//var exchangerate=7.05;
	if(compent&&compent=="ip_totalprice")//房屋总额
		{
		housetotal = Number($("#ip_totalprice").val());
		//6.88、、div_totalprice
		var houset =housetotal*exchangerate;
		var housetf = houset.toFixed(DIGIT_PRECISION);
		var housetfs =localeString(housetf);
		$("#div_totalprice").html("￥"+housetfs);
		
		var firsts = housetotal*payratio*exchangerate;
		var firstsf = firsts.toFixed(DIGIT_PRECISION);
		var firstsfs = localeString(firstsf);
		$("#div_firstpay").html("￥"+firstsfs);
		
		var firstpus = housetotal*payratio;
		var firstpusf = firstpus.toFixed(DIGIT_PRECISION);
		var firstpusfs =localeString(firstpusf);
		
		$("#ip_firstpay").val(firstpusfs);
		}
		
	if(compent&&compent=="ip_totalplan")//贷款年限
	{
		var totalmonth = length_of_mortgage*12;
		
		$("#div_totalmonth").html(totalmonth);
		length_of_mortgage = Number($("#ip_totalplan").val());
		
		var firsts = housetotal*payratio*exchangerate;
		var firstsf = firsts.toFixed(DIGIT_PRECISION);
		var firstsfs = localeString(firstsf);
		
		$("#div_firstpay").html("￥"+firstsfs);
		
		var firstpus = housetotal*payratio;
		var firstpusf = firstpus.toFixed(DIGIT_PRECISION);
		var firstpusfs =localeString(firstpusf);
		
		$("#ip_firstpay").val(firstpusfs);
	}
	
	if(compent&&compent=="ip_firstpay")//首付金额
	{
	//6.88
		firstpay = Number($("#ip_firstpay").val());
		var firsts = firstpay*exchangerate;
		var firstsf = firsts.toFixed(DIGIT_PRECISION);
		var firstsfs = localeString(firstsf);
		
		$("#div_firstpay").html("￥"+firstsfs);
		
		//$("#div_firstpay").html("￥"+localeString((firstpay*(6.88)).toFixed(DIGIT_PRECISION)));
		var firstpay = (firstpay*100)/housetotal;
		var firstpayf = firstpay.toFixed(0);
		$("#ip_payratio").val(firstpayf)
		payratio = Number($("#ip_payratio").val())*0.01;
	}
	if(compent&&compent=="ip_payratio")//首付比例
	{
	//6.88
		payratio = Number($("#ip_payratio").val())*0.01;
		
		var firsts = housetotal*payratio*exchangerate;
		var firstsf = firsts.toFixed(DIGIT_PRECISION);
		var firstsfs = localeString(firstsf);
		
		$("#div_firstpay").html("￥"+firstsfs);
		
		var firstpus = housetotal*payratio;
		var firstpusf = firstpus.toFixed(DIGIT_PRECISION);
		var firstpusfs =localeString(firstpusf);
		
		$("#ip_firstpay").val(firstpusfs);
		
		
	/*	$("#div_firstpay").html("￥"+localeString((housetotal*payratio*(6.88)).toFixed(DIGIT_PRECISION)));
		$("#ip_firstpay").val(localeString((housetotal*payratio).toFixed(DIGIT_PRECISION)));*/
	}
	if(compent&&compent=="ip_payrate")//年利率
	{
	//6.88
	}
	
	 chineseprice = Number($("#hid_chprice").val());

	 housetotal = Number($("#ip_totalprice").val());
	
	
	 payratio = Number($("#ip_payratio").val())*0.01;
	
	
	 interest_rate = Number($("#ip_payrate").val())/100;
	 length_of_mortgage = Number($("#ip_totalplan").val());
	 firstpay = Number($("#ip_firstpay").val().replace(/,/g,""));
	
	loan_amount= housetotal*(1-payratio);
	//$("#ip_firstpay").html("$"+localeString((housetotal*(payratio)).toFixed(DIGIT_PRECISION)));
	//$("#div_firstpay").html("$"+localeString((chineseprice*(payratio)).toFixed(DIGIT_PRECISION)));
	
	
	var monthly_interest_rate = interest_rate/12;//转换成月利率
	length_of_mortgage = length_of_mortgage*12;//年转月
	var top_val = monthly_interest_rate * Math.pow((1+monthly_interest_rate),length_of_mortgage);
	var bot_val = Math.pow((1 + monthly_interest_rate),(length_of_mortgage))-1;
	var monthlypayamount;
	if (ROUND_DIGITS) {
		  var monthly_mortgage = parseFloat(loan_amount*(top_val/bot_val)).toFixed(DIGIT_PRECISION);
		  monthlypayamount=monthly_mortgage;
		  $("#span_monthly").html(symbol+localeString(monthly_mortgage));
		} else {
			var monthly_mortgage = parseFloat(loan_amount*(top_val/bot_val));
			$("#span_monthly").html(symbol+localeString(monthly_mortgage));
		}
	var total_interest = parseFloat(0);
	for(i=length_of_mortgage; i>0; i--) {
		var monthly_interest = parseFloat((loan_amount-(loan_amount * monthly_interest_rate*i))*monthly_interest_rate).toFixed(DIGIT_PRECISION);
		total_interest = parseFloat(total_interest) + parseFloat(monthly_interest);
	}
	total_interest= monthlypayamount*length_of_mortgage-loan_amount
	
	
	$("#div_loannum").html(symbol+localeString(parseFloat(loan_amount).toFixed(DIGIT_PRECISION)));
	$("#div_total_interest").html(symbol+localeString(parseFloat(total_interest).toFixed(DIGIT_PRECISION)));
	
}


function localeString(x, sep, grp) {
	var sx = (''+x).split('.'), s = '', i, j;
	sep || (sep = ','); // default seperator
	grp || grp === 0 || (grp = 3); // default grouping
	i = sx[0].length;
	while (i > grp) {
			j = i - grp;
			s = sep + sx[0].slice(j, i) + s;
			i = j;
	}
	s = sx[0].slice(0, i) + s;
	sx[0] = s;
	return sx.join('.')
}
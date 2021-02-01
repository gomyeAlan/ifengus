$$(document).on('pageInit', function (e) {
    
    //签名文章
    
    //清除历史
    $$("#clearHistory").on('click',function(){
        $$("#historysoso li").remove();
    });
    //判断是否中文
    var str= $$('#post-name').text();
    var bodyWidth = $$(window).width();
    var nameWidth = $$('#post-name').width();
    var descWidth = bodyWidth - nameWidth - 32;
    $$('#post-desc').css('width',descWidth);
    if (escape(str).indexOf( "%u" )<0)    {
        if ($$('#post-name').hasClass('media_name_chn')) {
            $$('#post-name').removeClass('media_name_chn').addClass('media_name_eng');
        }
    } else {
        if ($$('#post-name').hasClass('media_name_eng')){
            $$('#post-name').removeClass('media_name_eng').addClass('media_name_chn');
        }
    }
    //留言删除
  
    //周边设施 table 切换
    $$('#tabm1').on('click', function () {
        $$(this).parent().children('.tab-link-m').removeClass('active');
        $$(this).addClass('active');
        myApp.showTab('.show-tab-1');
    });
    $$('#tabm2').on('click', function () {
        $$(this).parent().children('.tab-link-m').removeClass('active');
        $$(this).addClass('active');
        myApp.showTab('.show-tab-2');
    });
    $$('#tabm3').on('click', function () {
        $$(this).parent().children('.tab-link-m').removeClass('active');
        $$(this).addClass('active');
        myApp.showTab('.show-tab-3');
    });
    $$('#tabm4').on('click', function () {
        $$(this).parent().children('.tab-link-m').removeClass('active');
        $$(this).addClass('active');
        myApp.showTab('.show-tab-4');
    });
    $$('#tabm5').on('click', function () {
        $$(this).parent().children('.tab-link-m').removeClass('active');
        $$(this).addClass('active');
        myApp.showTab('.show-tab-5');
    });
    $$('#tabm6').on('click', function () {
        $$(this).parent().children('.tab-link-m').removeClass('active');
        $$(this).addClass('active');
        myApp.showTab('.show-tab-6');
    });
  
    
    
  /*//2018.4.20加
	//圆形进度
	//大学及以上学历比例
    $('#indicatorContainer1').radialIndicator({
		radius: 100,
        barColor: '#00b3f9',
        barWidth: 10,
        initValue: 71,
        percentage: true,
		fontFamily: 'Microsoft yahei',
		fontSize : 50,
		//fontWeight: 'normal'
    });
	 $('#indicatorContainer2').radialIndicator({
		radius: 100,
        barColor: '#00e2ff',
        barWidth: 10,
        initValue: 41,
        percentage: true,
		fontFamily: 'Microsoft yahei',
		fontSize : 50,
		//fontWeight: 'normal'
    });
	 $('#indicatorContainer3').radialIndicator({
		radius: 100,
        barColor: '#92d13c',
        barWidth: 10,
        initValue: 37,
        percentage: true,
		fontFamily: 'Microsoft yahei',
		fontSize : 50,
		//fontWeight: 'normal'
    });
	//失业率
	$('#indicatorContainer4').radialIndicator({
		radius: 100,
        barColor: '#00b3f9',
        barWidth: 10,
        initValue: 4,
        percentage: true,
		fontFamily: 'Microsoft yahei',
		fontSize : 50,
		//fontWeight: 'normal'
    });
	$('#indicatorContainer5').radialIndicator({
		radius: 100,
        barColor: '#00e2ff',
        barWidth: 10,
        initValue: 6,
        percentage: true,
		fontFamily: 'Microsoft yahei',
		fontSize : 50,
		//fontWeight: 'normal'
    });
	
	$('#indicatorContainer6').radialIndicator({
		radius: 100,
        barColor: '#92d13c',
        barWidth: 10,
        initValue: 6,
        percentage: true,
		fontFamily: 'Microsoft yahei',
		fontSize : 50,
		//fontWeight: 'normal'
    });
	//族裔比例
	// 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('Chart1'));
		option1 = {
				tooltip: {
					show:false,
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',	//horizontal				
					//x: 'left',
					//left:0,
					 right: 0,	
					top:20,									
					itemWidth:12,
					itemHeight:12,
					itemGap:20,
					//padding: [5,15],
					textStyle:{
						fontSize:14,
					},
										
					formatter: function(name) {
						datearray={"dataname":["西裔","黑人","白人","亚裔"],"datavalue":["5","2","69","24"]};
						var index = 0;
						datearray.dataname.forEach(function(value,i){
							if(value == name){
								index = i;
							}
						});
						return name + " " + datearray.datavalue[index] +"%";
					},
					
					data:['西裔','黑人','白人','亚裔'],
					
					
				},
				
				color:[ '#c1d1e0','#818181','#31beff','#ffd460'],
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
						center: ['25%', '45%'],	
						label: {
							normal: {
								show: false,
								position: 'center',	
							},
							emphasis: {
								show: false,
								textStyle: {
									fontSize: '20',
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
						
							{value:5, name:'西裔'},
							{value:2, name:'黑人'},
							{value:69, name:'白人'},
							{value:24, name:'亚裔'}
						],
						
					}
				]
		};
		// 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);*/
});
$(document).ready(function(){
    
    //签名文章
    $('#mysign').on('click',function(){
        //console.log($$('#likeNum').text());
        if ($(this).children('i').hasClass('fa-sign')){
            $(this).children('i').removeClass('fa-sign').addClass('fa-sign-o');
        }else{
            $(this).children('i').removeClass('fa-sign-o').addClass('fa-sign');
        }
    });
    //周边设施 table 切换
    $('#tabm1').on('click', function () {
        $(this).parent().children('.tab-link-m').removeClass('active');
        $(this).addClass('active');
        myApp.showTab('.show-tab-1');
    });
    $('#tabm2').on('click', function () {
        $(this).parent().children('.tab-link-m').removeClass('active');
        $(this).addClass('active');
        myApp.showTab('.show-tab-2');
    });
    $('#tabm3').on('click', function () {
        $(this).parent().children('.tab-link-m').removeClass('active');
        $(this).addClass('active');
        myApp.showTab('.show-tab-3');
    });
    $('#tabm4').on('click', function () {
        $(this).parent().children('.tab-link-m').removeClass('active');
        $(this).addClass('active');
        myApp.showTab('.show-tab-4');
    });
    $('#tabm5').on('click', function () {
        $(this).parent().children('.tab-link-m').removeClass('active');
        $(this).addClass('active');
        myApp.showTab('.show-tab-5');
    });
    $('#tabm6').on('click', function () {
        $(this).parent().children('.tab-link-m').removeClass('active');
        $(this).addClass('active');
        myApp.showTab('.show-tab-6');
    });

});
//分享朋友圈弹出提示
function showPop(e) {
    var t=$(document).height();
    $(e).height(t).fadeIn()
}
function hidePop(e){$(e).fadeOut()}

//点击选中个数增加
var clicktimes = 0;	
function addremovethis(a){
	//$(a).addClass("active");
	//alert($(a+" span"));
	if($(a).hasClass("active")){
		clicktimes--;
		$(a).removeClass("active");
		$(a).find(".unchecked").html("");
		
	}else{
		clicktimes++;
		$(a).addClass("active");
		$(a).find(".unchecked").html(clicktimes);
		
	}
	//alert(clicktimes);
}

//类别选择

//经纪人文章类别选择




//左侧设置语言
//$$('.listmore').on('click',function(){
//    var changeLan = $$(this).children('span').text();
//    $$('.listmore').removeClass('color-blue');
//    if($$(this).hasClass('color-blue')){
//        $$(this).removeClass('color-blue');
//    }else{
//        $$(this).addClass('color-blue');
//    }
//    $$('#picker-langu').val(changeLan);
//});


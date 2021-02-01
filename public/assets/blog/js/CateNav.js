jQuery.CateNav=function(elem1,elem2){
		//添加目录
		var currObj;
		var offsetTop=0;
		var h2List=new Array(),h3List=new Array();
		var $jj = jQuery.noConflict(); 
		
		var addNav=function(){
			var i1=0,i2=0,n1=0,n2=0;
			var temp='<dl style="display:none;">';
			var cateList=$j(elem1).html().match(/(<h[2-3][^>]*>.*?<\/h[2-3]>)/ig);
			for(var i=0;i<cateList.length;i++){
				if(/(<h2[^>]*>.*?<\/h2>)/ig.test(cateList[i])){
					n1++;
					n2=0;
					temp+='<dd class="cate-item1"><span>'+n1+'</span><a href="#'+n1+'">'+cateList[i].replace(/<[^>].*?>/g,"")+'</a></dd>';
					h2List[i1]=n1;
					i1++;
				}else{
					n2++;
					temp+='<dd class="cate-item2"><span>'+n1+'.'+n2+'</span><a href="#'+n1+'_'+n2+'">'+cateList[i].replace(/<[^>].*?>/g,"")+'</a></dd>';
					h3List[i2]=n1+'_'+n2;
					i2++;
				}
			}
			temp+='</dl>';
			$j(elem2).append(temp);
		};
		//添加锚点
		var addPoint=function(){
			var i1=i2=0;
			$j(elem1).find('h2').each(function(){
				$j(this).prepend('<a name="'+h2List[i1]+'"></a>');
				i1++;
			});
			$j(elem1).find('h3').each(function(){
				$j(this).prepend('<a name="'+h3List[i2]+'"></a>');
				i2++;
			});
		};
		//点击锚点，跳转制定位置
		var clickPoint=function(){
			$j(elem2+' a').click(function(e){
				e.preventDefault();
				$j(elem2+' dd').removeClass('active');
				$j(this).parent('dd').addClass('active');
				currObj=$j("[name='"+$j(this).attr('href').replace(/#/,'')+"']");
				offsetTop=currObj.offset().top;
				$j('html,body').animate({
					scrollTop:offsetTop
				},500,'swing');
			});
		};
		//屏幕滚动，显示并选中锚点
		var scrollWin=function(){
		var windowTop=0;
			$j(window).scroll(function(){
				windowTop=$j(window).scrollTop();
				if(windowTop>=$j(elem1).offset().top){
					$j(elem2+' dl').slideDown(750);
				}else{
					$j(elem2+' dl').slideUp(750);
				}
				$j(elem2+' a').each(function(){
					currObj=$j("[name='"+$j(this).attr('href').replace(/#/,'')+"']");
					offsetTop=currObj.offset().top;
					if(windowTop>offsetTop){
						$j(elem2+' dd').removeClass('active');
						$j(this).parent('dd').addClass('active');
						return;
					}
				});
			});
		};
		var init=function(){
			addNav();
			addPoint();
			clickPoint();
			scrollWin();
		}
		init();
	}
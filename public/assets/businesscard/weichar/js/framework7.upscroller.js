/*Framework7.prototype.plugins.upscroller = function (app, params) {
    'use strict';
    params = params || {text: ''};
    //Export selectors engine
    var $$ = window.Dom7;

    return {
        hooks : {
			pageBeforeInit: function (pageData) {				
				var $$btn = $$('<div class="upscroller"> ' + params.text + '</div>');
				$$(pageData.container).prepend($$btn);
				if ($$("[data-page='"+pageData.name+"'] > .searchbar")[0]) $$("[data-page='"+pageData.name+"'] >  .upscroller").css('bottom', '-70px');
				
				$$btn.click(function(event) {
					event.stopPropagation();
				    event.preventDefault();
				    var curpage = $$(".page-content", app.getCurrentView().activePage.container);				
				    $$(curpage).scrollTop(0, Math.round($$(curpage).scrollTop()/4));
				});
				
				$$(".scrolltop", pageData.container).scroll(function(event){
				  var e = $$(event.target).scrollTop();
				  if(e > 300) {
			          $$btn.addClass('show'); 
				  }
				  else {
			          $$btn.removeClass('show');
				  }					  
				});
            }
        }
    };
};
*/
/*$(document).bind("touchstart", function() {
					
				}).bind("touchend", function() {
					
				});*/
var scrapp;
var scrollbtn;
Framework7.prototype.plugins.upscroller = function (app, params) {
    'use strict';
    params = params || {text: ''};
    //Export selectors engine
    var $$ = window.Dom7;
    scrapp= app;
    return {
        hooks : {
			pageBeforeInit: function (pageData) {
				if(pageData.name!="home"&&pageData.name!="detailPage"&&pageData.name!="detailview")return;
				var $$btn = $$('<div class="upscroller"> ' + params.text + '</div>');
				scrollbtn = $$btn;
				$$(pageData.container).prepend($$btn);
				if ($$("[data-page='"+pageData.name+"'] > .searchbar")[0]) $$("[data-page='"+pageData.name+"'] >  .upscroller").css('bottom', '-70px');

				$$btn.click(function(event) {
                    //alert($$(".page-on-center").children("#upDiv").length)
                    if($$(".page-on-center").children("#upDiv").length>0){
                        $(".page-on-center").children("#upDiv").toggle();
                        return;
                    }
                    var $$div = $$('<div id="upDiv" class="upDiv"></div>');
                    $$div.prepend("<div onclick='gotosearchhouse()' class='upDiv_ch' style='margin-top: 20px;'></div>");
                    $$div.prepend("<div  id='div_ghome' onclick='gotohome()' class='upDiv_ch' style='margin-top: 20px;'></div>");
                    
                    $$div.prepend("<div  id='div_gchat' onclick='gotochat()' class='upDiv_ch ' style='margin-top: 20px;'></div>");
                   
                    var langcode = $("#ip_currentlang").val();
                   
                    $$(pageData.container).prepend($$div);
                    if(langcode=="en"){
                    	
                    	$("#div_gchat").css({"background":"url(../../newContent/img/liao1_en.png)  no-repeat","background-size":"48px 48px"});
                    }
                    	
                    //event.stopPropagation();
                    // event.preventDefault();
                    //var curpage = $$(".page-content", app.getCurrentView().activePage.container);
                    //$$(curpage).scrollTop(0, Math.round($$(curpage).scrollTop()/4));
				});

				$$btn.addClass('show');
                if($$(".page-on-center").children("#upDiv").length>0){
                    $(".page-on-center").children("#upDiv").show();
                }
                
               /* $$(".scrolltop", pageData.container).scroll(function(event){
                    var e = $$(event.target).scrollTop();
                    if(e > 300) {
                        $$btn.addClass('show');
                        if($$(".page-on-center").children("#upDiv").length>0){
                            $(".page-on-center").children("#upDiv").show();
                        }
                    }
                    else {
                        $$btn.removeClass('show');
                        $(".page-on-center").children("#upDiv").remove();
                        if($$(".page-on-center").children("#upDiv").length>0){
                            $(".page-on-center").children("#upDiv").hide();
                        }
                    }
                });*/

            }
        }
    };
};
function gototopo(event){
	event.stopPropagation();
    event.preventDefault();
    var curpage = $$(".page-content", scrapp.getCurrentView().activePage.container);				
    $$(curpage).scrollTop(0, Math.round($$(curpage).scrollTop()/4));
}

$(document).ready(function(){
	$$(".page-content").touchend(function(){
		$(".upscroller").addClass('show');
         if($$(".page-on-center").children("#upDiv").length>0){
             $(".page-on-center").children("#upDiv").show();
         }
		
	});
	$$(".page-content").touchstart(function(){
		$(".upscroller").removeClass('show');
		if($(".page-on-center").children("#upDiv").length>0){
        $(".page-on-center").children("#upDiv").remove();
        if($(".page-on-center").children("#upDiv").length>0){
            $(".page-on-center").children("#upDiv").hide();
        }
		}
	});
	
});




var map;
	var infowindow;
	var panorama;
	
	//var pyrmont = new google.maps.LatLng(34.1317, -118.025823);
	var pyrmont;
	var searchlat;
	var searchlng;
	// Places array.
	var places = [];
	// Marker array.
	var showing_markers = new Array();
function showgooglemap(latitude,longitude,title){
	
	searchlat= latitude;
	searchlng=longitude;
	$("#h_latitude").val(searchlat);
	$("#h_longitude").val(searchlng);
	if($("#mapcontainer")){
		
		var queryParam={};
		queryParam.lat= latitude;
		queryParam.lng =longitude;
		queryParam.searchtype = "1";
		queryParam.infoid = $("#hid_detailinfoid").val();
		queryParam.regioncode = $("#h_mlsRegionCode").val();
		if(queryParam.infoid){
			$.post('/agent/getNearBy.wx', queryParam, function(res) {
				if(res){
			    	var ret = jQuery.parseJSON(res);
			    	places[1] =ret;
			    	
			    	var html = "";
		    		for ( var i = 0; i < ret.length; i++) {
		    			html = html
		    					+ createLiByNameAndId(1, ret[i].dataname, ret[i].dataid);
		    		}
		    		$("#palceType1").html(html);
		    		
		    		pyrmont = new google.maps.LatLng(ret[0].lat, ret[0].lng);
		    		 initialize();
			    	while(showing_markers.length>0) {
		         		showing_markers.pop().setMap(null);
		         	}
		         	
			    	$("#h_latitude").val(pyrmont.lat());
	  			  $("#h_longitude").val(pyrmont.lng());
		            // 显示当前分组所有的Marker.
		            // alert("这一组包含的Place个数是:"+places[e+1].length);
		            // 获取对应分类的Place查询结果.
		            var res = places[1];
		            // 迭代查询结果,逐个显示在地图里.
		            for (var i = 0; i < res.length; i++) {
		            	createMarkerlatlng(res[i].datalat,res[i].datalng,res[i].dataicon);
		            }
		           
			    }
			    else{
			    	if(latitude==null || latitude=="" ||longitude==null ){
			    	    var address = title;
			    	    geocoder.geocode( { 'address': address}, function(results, status) {
			    	      if (status == google.maps.GeocoderStatus.OK) {
			    			pyrmont = results[0].geometry.location;
			    			$("#h_latitude").val(pyrmont.lat());
			    			  $("#h_longitude").val(pyrmont.lng());
			    			  searchlat= pyrmont.lat();
			    				searchlng=pyrmont.lng();
			    			  initialize();
			  		    	var request = {
			  		    			location : pyrmont,
			  		    			radius : 3200,
			  		    			types : types[0]
			  		    		};
			  		    		
			  		    		service.nearbySearch(request, eval("callback"
			  		    				+ 1));

			  		    	infowindow = new google.maps.InfoWindow();
			    			
			    	      } else {
			    	        $('#housearound').html("Can not locate on google map.");
			    	      }
			    	    });
			    	}
			    	else{
			    		pyrmont = new google.maps.LatLng(latitude, longitude);
			    		$("#h_latitude").val(pyrmont.lat());
		    			  $("#h_longitude").val(pyrmont.lng());
			    		google.maps.event.addDomListener(window, 'load', initialize);
			    		initialize();
				    	var request = {
				    			location : pyrmont,
				    			radius : 3200,
				    			types : types[0]
				    		};
				    		
				    		service.nearbySearch(request, eval("callback"
				    				+ 1));

				    	infowindow = new google.maps.InfoWindow();
			    	}
			    	
			    }
			});
		}
		
		
	
	}
}

function CenterControl(controlDiv, map,lat,lng) {

	  // Set CSS for the control border.
	  var controlUI = document.createElement('div');

	  controlUI.title = '点击去Google地图导航';
	  controlDiv.appendChild(controlUI);

	  // Set CSS for the control interior.
	  var controlText = document.createElement('div');
	  controlText.style.paddingRight = '10px';
	  controlText.innerHTML = '<a  class="external" href="https://www.google.com/maps?daddr='+lat+','+lng+'&mrsp=0&dirflg=t"><img width="36" height="36" src="'+webdomain+'/newContent/img/daohang.png"></img></a>';
	  controlUI.appendChild(controlText);

	  // Setup the click event listeners: simply set the map to Chicago.
	  controlUI.addEventListener('click', function() {
	    
	  });

	}
var service ;
var types = [
	[ 'school', 'university', 'library' ],
	[ 'food', 'restaurant', 'cafe' ],
	[ 'park', 'museum', 'library', 'stadium',
			'zoo', 'movie_theater' ],
	[ 'convenience_store',
			'grocery_or_supermarket', 
			'clothing_store',
			'shopping_mall',
			'electronics_store',
			'home_goods_store' ],
	[ 'hospital', 'gym', 'pharmacy',
			'hair_care' ],
	[ 'bus_station', 'train_station',
			'subway_station',
			'air_port' ] ];
function initialize() {

	map = new google.maps.Map(document
			.getElementById('mapcontainer'), {
		center : pyrmont,
		zoom : 12,
		mapTypeControl: true,
        /*mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },*/
        zoomControl: true,
        /*zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },*/
        scaleControl: true,
        streetViewControl: true,
        /*streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },*/
        fullscreenControl: false
	});
	
	var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map,Number(pyrmont.lat()),Number(pyrmont.lng()));

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(centerControlDiv);
    
    
	var fenway = {lat: Number(pyrmont.lat()), lng: Number(pyrmont.lng())};
	panorama = map.getStreetView();
	  panorama.setPosition(fenway);
	  panorama.setPov(/** @type {google.maps.StreetViewPov} */({
	    heading: 265,
	    pitch: 0
	  }));
	//alert(map);
	// 为这个坐标原点创建一个Marker,这个标记不会删除.
	var house_marker = new google.maps.Marker({
		map : map,
		position : pyrmont
	});
	
	service = new google.maps.places.PlacesService(
			map);
	
	/*for ( var i = 1; i <= 6; i++) {
		
		var request = {
			location : pyrmont,
			radius : 3200,
			types : types[i - 1]
		};
		
		service.nearbySearch(request, eval("callback"
				+ i));
		
	}*/
	
	/* alert("init end."); */
	
	houseChangeli();
}

// 回调方法,修改每个tab的内容.			
function callback1(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		
		for(var ri=0;ri<results.length;ri++){
			var p = results[ri];
			if(p.photos)
			var photourl = p.photos[0].getUrl();
			var vicinity = p.vicinity;
			var t="";
			for(var i=0;i<p.types.length;i++){
				if(t!="")
					t=t+",";
				t=t+p.types[i];
			}
			var lat = p.geometry.location.lat();
			var lng = p.geometry.location.lng();
			var id = p.id;
			var rating= p.rating;
			var icon = p.icon;
			var name  = p.name;
			var price_level = p.price_level;
			if(p.opening_hours)
			var openingnow = p.opening_hours.open_now.toString();;
			var user_ratings_total = p.user_ratings_total;
			
			var queryParam={};
			queryParam.lat= searchlat;
			queryParam.lng =searchlng;
			queryParam.searchtype = "1";
			queryParam.dataname =name;
			queryParam.dataid =id;
			queryParam.dataphotourl =photourl;
			queryParam.datavicinity =vicinity;
			queryParam.datatype =t;
			queryParam.datalat =lat;
			queryParam.datalng =lng;
			queryParam.datarating =rating;
			queryParam.dataicon =icon;
			queryParam.pricelevel =price_level;
			queryParam.openingnow =openingnow;
			queryParam.userratingstotal =user_ratings_total;
			queryParam.infoid = $("#hid_detailinfoid").val();
			queryParam.regioncode = $("#h_mlsRegionCode").val();
			if(queryParam.infoid){
				$.post('/agent/addNearBy.wx', queryParam, function(res) {
					
				});
			}
			
		}
		
		var queryParam={};
		queryParam.lat= $("#h_latitude").val();
		queryParam.lng =$("#h_longitude").val();
		queryParam.searchtype = "1";
		queryParam.infoid = $("#hid_detailinfoid").val();
		queryParam.regioncode = $("#h_mlsRegionCode").val();
		if(queryParam.infoid){
			$.post('/agent/getNearBy.wx', queryParam, function(res) {
			    if(res){
			    	var ret = jQuery.parseJSON(res);
			    	places[1] =ret;
			    	while(showing_markers.length>0) {
		         		showing_markers.pop().setMap(null);
		         	}
		         	
		            // 显示当前分组所有的Marker.
		            // alert("这一组包含的Place个数是:"+places[e+1].length);
		            // 获取对应分类的Place查询结果.
		            var res = places[1];
		            // 迭代查询结果,逐个显示在地图里.
		            for (var i = 0; i < res.length; i++) {
		            	createMarkerlatlng(res[i].datalat,res[i].datalng,res[i].dataicon);
		            }
			    }
			});
			// alert("搜索到Place数量:"+results.length);
			var html = "";
			for ( var i = 0; i < results.length; i++) {
				html = html
						+ createLiByNameAndId(1, results[i].name, results[i].id);
			}
			$("#palceType1").html(html);
		}
		
	    // 默认显示第一个分组的Marker.
	   // $(".buttons-row a").eq(0).click();
	}
}
function callback2(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		
		
		for(var ri=0;ri<results.length;ri++){
			var p = results[ri];
			if(p.photos)
			var photourl = p.photos[0].getUrl();
			var vicinity = p.vicinity;
			var t="";
			for(var i=0;i<p.types.length;i++){
				if(t!="")
					t=t+",";
				t=t+p.types[i];
			}
			var lat = p.geometry.location.lat();
			var lng = p.geometry.location.lng();
			var id = p.id;
			var rating= p.rating;
			var icon = p.icon;
			var name  = p.name;
			var price_level = p.price_level;
			if(p.opening_hours)
			var openingnow = p.opening_hours.open_now.toString();;
			var user_ratings_total = p.user_ratings_total;
			
			var queryParam={};
			queryParam.lat= searchlat;
			queryParam.lng =searchlng;
			queryParam.searchtype = "2";
			queryParam.dataname =name;
			queryParam.dataid =id;
			queryParam.dataphotourl =photourl;
			queryParam.datavicinity =vicinity;
			queryParam.datatype =t;
			queryParam.datalat =lat;
			queryParam.datalng =lng;
			queryParam.datarating =rating;
			queryParam.dataicon =icon;
			queryParam.pricelevel =price_level;
			queryParam.openingnow =openingnow;
			queryParam.userratingstotal =user_ratings_total;
			queryParam.infoid = $("#hid_detailinfoid").val();
			queryParam.regioncode = $("#h_mlsRegionCode").val();
			if(queryParam.infoid){
				$.post('/agent/addNearBy.wx', queryParam, function(res) {
					
				});
			}
			
		}
		var queryParam={};
		queryParam.lat= $("#h_latitude").val();
		queryParam.lng =$("#h_longitude").val();
		queryParam.searchtype = "2";
		queryParam.infoid = $("#hid_detailinfoid").val();
		queryParam.regioncode = $("#h_mlsRegionCode").val();
		if(queryParam.infoid){
			$.post('/agent/getNearBy.wx', queryParam, function(res) {
			    if(res){
			    	var ret = jQuery.parseJSON(res);
			    	places[2] =ret;
			    	while(showing_markers.length>0) {
		         		showing_markers.pop().setMap(null);
		         	}
		         	
		            // 显示当前分组所有的Marker.
		            // alert("这一组包含的Place个数是:"+places[e+1].length);
		            // 获取对应分类的Place查询结果.
		            var res = places[2];
		            // 迭代查询结果,逐个显示在地图里.
		            for (var i = 0; i < res.length; i++) {
		            	createMarkerlatlng(res[i].datalat,res[i].datalng,res[i].dataicon);
		            }
			    }
			});
			var html = "";
			for ( var i = 0; i < results.length; i++) {
				html = html
						+ createLiByNameAndId(2, results[i].name, results[i].id);
			}
			$("#palceType2").html(html);
		}
		
	}
}
function callback3(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		
		for(var ri=0;ri<results.length;ri++){
			var p = results[ri];
			if(p.photos)
			var photourl = p.photos[0].getUrl();
			var vicinity = p.vicinity;
			var t="";
			for(var i=0;i<p.types.length;i++){
				if(t!="")
					t=t+",";
				t=t+p.types[i];
			}
			var lat = p.geometry.location.lat();
			var lng = p.geometry.location.lng();
			var id = p.id;
			var rating= p.rating;
			var icon = p.icon;
			var name  = p.name;
			var price_level = p.price_level;
			if(p.opening_hours)
			var openingnow = p.opening_hours.open_now.toString();;
			var user_ratings_total = p.user_ratings_total;
			
			var queryParam={};
			queryParam.lat= searchlat;
			queryParam.lng =searchlng;
			queryParam.searchtype = "3";
			queryParam.dataname =name;
			queryParam.dataid =id;
			queryParam.dataphotourl =photourl;
			queryParam.datavicinity =vicinity;
			queryParam.datatype =t;
			queryParam.datalat =lat;
			queryParam.datalng =lng;
			queryParam.datarating =rating;
			queryParam.dataicon =icon;
			queryParam.pricelevel =price_level;
			queryParam.openingnow =openingnow;
			queryParam.userratingstotal =user_ratings_total;
			queryParam.infoid = $("#hid_detailinfoid").val();
			queryParam.regioncode = $("#h_mlsRegionCode").val();
			if(queryParam.infoid){
				$.post('/agent/addNearBy.wx', queryParam, function(res) {
					
				});
			}
			
		}
		var queryParam={};
		queryParam.lat= $("#h_latitude").val();
		queryParam.lng =$("#h_longitude").val();
		queryParam.searchtype = "3";
		queryParam.infoid = $("#hid_detailinfoid").val();
		queryParam.regioncode = $("#h_mlsRegionCode").val();
		if(queryParam.infoid){
			$.post('/agent/getNearBy.wx', queryParam, function(res) {
			    if(res){
			    	var ret = jQuery.parseJSON(res);
			    	places[3] =ret;
			    	while(showing_markers.length>0) {
		         		showing_markers.pop().setMap(null);
		         	}
		         	
		            // 显示当前分组所有的Marker.
		            // alert("这一组包含的Place个数是:"+places[e+1].length);
		            // 获取对应分类的Place查询结果.
		            var res = places[3];
		            // 迭代查询结果,逐个显示在地图里.
		            for (var i = 0; i < res.length; i++) {
		            	createMarkerlatlng(res[i].datalat,res[i].datalng,res[i].dataicon);
		            }
			    }
			});
			var html = "";
			for ( var i = 0; i < results.length; i++) {
				html = html
						+ createLiByNameAndId(3, results[i].name, results[i].id);
			}
			$("#palceType3").html(html);
		}
		
	}
}
function callback4(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		
		for(var ri=0;ri<results.length;ri++){
			var p = results[ri];
			if(p.photos)
			var photourl = p.photos[0].getUrl();
			var vicinity = p.vicinity;
			var t="";
			for(var i=0;i<p.types.length;i++){
				if(t!="")
					t=t+",";
				t=t+p.types[i];
			}
			var lat = p.geometry.location.lat();
			var lng = p.geometry.location.lng();
			var id = p.id;
			var rating= p.rating;
			var icon = p.icon;
			var name  = p.name;
			var price_level = p.price_level;
			if(p.opening_hours)
			var openingnow = p.opening_hours.open_now.toString();;
			var user_ratings_total = p.user_ratings_total;
			
			var queryParam={};
			queryParam.lat= searchlat;
			queryParam.lng =searchlng;
			queryParam.searchtype = "4";
			queryParam.dataname =name;
			queryParam.dataid =id;
			queryParam.dataphotourl =photourl;
			queryParam.datavicinity =vicinity;
			queryParam.datatype =t;
			queryParam.datalat =lat;
			queryParam.datalng =lng;
			queryParam.datarating =rating;
			queryParam.dataicon =icon;
			queryParam.pricelevel =price_level;
			queryParam.openingnow =openingnow;
			queryParam.userratingstotal =user_ratings_total;
			queryParam.infoid = $("#hid_detailinfoid").val();
			queryParam.regioncode = $("#h_mlsRegionCode").val();
			if(queryParam.infoid){
				$.post('/agent/addNearBy.wx', queryParam, function(res) {
					
				});
			}
			
		}
		var queryParam={};
		queryParam.lat= $("#h_latitude").val();
		queryParam.lng =$("#h_longitude").val();
		queryParam.searchtype = "4";
		queryParam.infoid = $("#hid_detailinfoid").val();
		queryParam.regioncode = $("#h_mlsRegionCode").val();
		if(queryParam.infoid){
			$.post('/agent/getNearBy.wx', queryParam, function(res) {
			    if(res){
			    	var ret = jQuery.parseJSON(res);
			    	places[4] =ret;
			    	while(showing_markers.length>0) {
		         		showing_markers.pop().setMap(null);
		         	}
		         	
		            // 显示当前分组所有的Marker.
		            // alert("这一组包含的Place个数是:"+places[e+1].length);
		            // 获取对应分类的Place查询结果.
		            var res = places[4];
		            // 迭代查询结果,逐个显示在地图里.
		            for (var i = 0; i < res.length; i++) {
		            	createMarkerlatlng(res[i].datalat,res[i].datalng,res[i].dataicon);
		            }
			    }
			});
			var html = "";
			for ( var i = 0; i < results.length; i++) {
				html = html
						+ createLiByNameAndId(4, results[i].name, results[i].id);
			}
			$("#palceType4").html(html);
		}
		
	}
}
function callback5(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		
		for(var ri=0;ri<results.length;ri++){
			var p = results[ri];
			if(p.photos)
			var photourl = p.photos[0].getUrl();
			var vicinity = p.vicinity;
			var t="";
			for(var i=0;i<p.types.length;i++){
				if(t!="")
					t=t+",";
				t=t+p.types[i];
			}
			var lat = p.geometry.location.lat();
			var lng = p.geometry.location.lng();
			var id = p.id;
			var rating= p.rating;
			var icon = p.icon;
			var name  = p.name;
			var price_level = p.price_level;
			if(p.opening_hours)
			var openingnow = p.opening_hours.open_now.toString();;
			var user_ratings_total = p.user_ratings_total;
			
			var queryParam={};
			queryParam.lat= searchlat;
			queryParam.lng =searchlng;
			queryParam.searchtype = "5";
			queryParam.dataname =name;
			queryParam.dataid =id;
			queryParam.dataphotourl =photourl;
			queryParam.datavicinity =vicinity;
			queryParam.datatype =t;
			queryParam.datalat =lat;
			queryParam.datalng =lng;
			queryParam.datarating =rating;
			queryParam.dataicon =icon;
			queryParam.pricelevel =price_level;
			queryParam.openingnow =openingnow;
			queryParam.userratingstotal =user_ratings_total;
			queryParam.infoid = $("#hid_detailinfoid").val();
			queryParam.regioncode = $("#h_mlsRegionCode").val();
			if(queryParam.infoid){
				$.post('/agent/addNearBy.wx', queryParam, function(res) {
					
				});
			}
			
		}
		var queryParam={};
		queryParam.lat= $("#h_latitude").val();
		queryParam.lng =$("#h_longitude").val();
		queryParam.searchtype = "5";
		queryParam.infoid = $("#hid_detailinfoid").val();
		queryParam.regioncode = $("#h_mlsRegionCode").val();
		if(queryParam.infoid){
			$.post('/agent/getNearBy.wx', queryParam, function(res) {
			    if(res){
			    	var ret = jQuery.parseJSON(res);
			    	places[5] =ret;
			    	while(showing_markers.length>0) {
		         		showing_markers.pop().setMap(null);
		         	}
		         	
		            // 显示当前分组所有的Marker.
		            // alert("这一组包含的Place个数是:"+places[e+1].length);
		            // 获取对应分类的Place查询结果.
		            var res = places[5];
		            // 迭代查询结果,逐个显示在地图里.
		            for (var i = 0; i < res.length; i++) {
		            	createMarkerlatlng(res[i].datalat,res[i].datalng,res[i].dataicon);
		            }
			    }
			});
			var html = "";
			for ( var i = 0; i < results.length; i++) {
				html = html
						+ createLiByNameAndId(5, results[i].name, results[i].id);
			}
			$("#palceType5").html(html);
		}
		
	}
}
function callback6(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		
		for(var ri=0;ri<results.length;ri++){
			var p = results[ri];
			if(p.photos)
			var photourl = p.photos[0].getUrl();
			var vicinity = p.vicinity;
			var t="";
			for(var i=0;i<p.types.length;i++){
				if(t!="")
					t=t+",";
				t=t+p.types[i];
			}
			var lat = p.geometry.location.lat();
			var lng = p.geometry.location.lng();
			var id = p.id;
			var rating= p.rating;
			var icon = p.icon;
			var name  = p.name;
			var price_level = p.price_level;
			if(p.opening_hours)
			var openingnow = p.opening_hours.open_now.toString();;
			var user_ratings_total = p.user_ratings_total;
			
			var queryParam={};
			queryParam.lat= searchlat;
			queryParam.lng =searchlng;
			queryParam.searchtype = "6";
			queryParam.dataname =name;
			queryParam.dataid =id;
			queryParam.dataphotourl =photourl;
			queryParam.datavicinity =vicinity;
			queryParam.datatype =t;
			queryParam.datalat =lat;
			queryParam.datalng =lng;
			queryParam.datarating =rating;
			queryParam.dataicon =icon;
			queryParam.pricelevel =price_level;
			queryParam.openingnow =openingnow;
			queryParam.userratingstotal =user_ratings_total;
			queryParam.infoid = $("#hid_detailinfoid").val();
			queryParam.regioncode = $("#h_mlsRegionCode").val();
			if(queryParam.infoid){
				$.post('/agent/addNearBy.wx', queryParam, function(res) {
					
				});
			}
			
		}
		
		var queryParam={};
		queryParam.lat= $("#h_latitude").val();
		queryParam.lng =$("#h_longitude").val();
		queryParam.searchtype = "6";
		queryParam.infoid = $("#hid_detailinfoid").val();
		queryParam.regioncode = $("#h_mlsRegionCode").val();
		if(queryParam.infoid){
			$.post('/agent/getNearBy.wx', queryParam, function(res) {
			    if(res){
			    	var ret = jQuery.parseJSON(res);
			    	places[6] =ret;
			    	
			    	while(showing_markers.length>0) {
		         		showing_markers.pop().setMap(null);
		         	}
		         	
		            // 显示当前分组所有的Marker.
		            // alert("这一组包含的Place个数是:"+places[e+1].length);
		            // 获取对应分类的Place查询结果.
		            var res = places[6];
		            // 迭代查询结果,逐个显示在地图里.
		            for (var i = 0; i < res.length; i++) {
		            	createMarkerlatlng(res[i].datalat,res[i].datalng,res[i].dataicon);
		            }
			    }
			});
			var html = "";
			for ( var i = 0; i < results.length; i++) {
				html = html
						+ createLiByNameAndId(6, results[i].name, results[i].id);
			}
			$("#palceType6").html(html);
		}
		
	}
}

// 使用返回的数据拼一组html——<li>标签.
function createLiByNameAndId(index, placeName, placeId) {
	return "<li><a  onclick='deleteOtherMarkers("+index+", \""+placeId+"\", this)'>" + placeName
			+ "</a></li>";
}

var image = {
		  url: 'http://maps.google.com/mapfiles/marker_purple.png',
		  // This marker is 20 pixels wide by 32 pixels tall.
		  size: new google.maps.Size(32, 36)
		  // The origin for this image is 0,0.
		  /* origin: new google.maps.Point(0,0), */
		  // The anchor for this image is the base of the flagpole at 0,32.
		  /* anchor: new google.maps.Point(0, 32) */
};

function createMarker(place, marker_array) {
	var marker = new google.maps.Marker({
		map : map,
		position : place.geometry.location,
		icon : image
	});

	// 将当前显示Marker添加到显示集合里.
	showing_markers.push(marker);
	
	google.maps.event.addListener(marker, 'click',
		function() {
			infowindow.setContent(place.name);
			infowindow.open(map, this);
		});
}

function createMarkerlatlng(lat,lang,icon) {
	var image = {
		    url: icon,
		    // This marker is 20 pixels wide by 32 pixels high.
		    size: new google.maps.Size(20, 20),
		  };
	var myLatlng = new google.maps.LatLng(lat,lang); 
	var marker = new google.maps.Marker({
		map : map,
		position : myLatlng,
		icon : "http://member.thehouseclub.com/images/Map-Marker-Marker-Outside-Chartreuse-icon.png"
	});

	// 将当前显示Marker添加到显示集合里.
	showing_markers.push(marker);
	
	google.maps.event.addListener(marker, 'click',
		function() {
			infowindow.setContent(place.name);
			infowindow.open(map, this);
		});
}


function houseChangeli() {	
    var e = 0;
  
 /*    $(".housearound").find("ul").css("display", "none"), 
    $(".housearound").find("ul").eq(0).css("display", "block"), */ 
    $(".buttons-row a").click(function() {
        var a = $(this).index();
        e = a; 
        
        map.setCenter({lat:Number($("#h_latitude").val()), lng:Number($("#h_longitude").val())});
        map.setZoom(12);
        if($("#palceType"+(e+1)).html().indexOf(".....")<0){
        	while(showing_markers.length>0) {
         		showing_markers.pop().setMap(null);
         	}
        	 var res = places[e+1];
	            // 迭代查询结果,逐个显示在地图里.
	            for (var i = 0; i < res.length; i++) {
	            	createMarkerlatlng(res[i].datalat,res[i].datalng,res[i].dataicon);
	            }
        	return;
        }
        	
        var queryParam={};
		queryParam.lat= $("#h_latitude").val();
		queryParam.lng =$("#h_longitude").val();
		queryParam.searchtype = (e+1)+"";
		queryParam.infoid = $("#hid_detailinfoid").val();
		queryParam.regioncode = $("#h_mlsRegionCode").val();
		if(queryParam.infoid){
			$.post('/agent/getNearBy.wx', queryParam, function(res) {
			    if(res){
			    	var ret = jQuery.parseJSON(res);
			    		places[e+1] =ret;
			    	
			    		var html = "";
			    		for ( var i = 0; i < ret.length; i++) {
			    			html = html
			    					+ createLiByNameAndId(e+1, ret[i].dataname, ret[i].dataid);
			    		}
			    		$("#palceType"+(e+1)).html(html);
			    	   
			    		while(showing_markers.length>0) {
			         		showing_markers.pop().setMap(null);
			         	}
			         	
			            // 显示当前分组所有的Marker.
			            // alert("这一组包含的Place个数是:"+places[e+1].length);
			            // 获取对应分类的Place查询结果.
			            var res = places[e+1];
			            // 迭代查询结果,逐个显示在地图里.
			            for (var i = 0; i < res.length; i++) {
			            	createMarkerlatlng(res[i].datalat,res[i].datalng,res[i].dataicon);
			            }
			            
			           
			    }
			    else{
			    	
			    	var request = {
			    			location : pyrmont,
			    			radius : 3200,
			    			types : types[e]
			    		};
			    	searchlat= pyrmont.lat();
					searchlng=pyrmont.lng();
			    		service.nearbySearch(request, eval("callback"
			    				+ (e+1)));
			    }
			});
		}
		
        
        
       /*  $(".housearoundnav li").removeClass("housearoundnav_current"), 
        $(this).addClass("housearoundnav_current"), 
        $(".housearound").find("ul").css("display", "none"), 
        $(".housearound").find("ul").eq(e).css("display", "block"); */
        
     	// 清除之前显示的markers;
		
    });
}

// 删除地图上除了该点外的其它点.
function deleteOtherMarkers(index,id, element) {
 	// 清除之前显示的markers;
	while(showing_markers.length>0) {
 		showing_markers.pop().setMap(null);
	}
	// 清除之前高亮显示的名称,因为只能有一个名称高亮显示.
	$(".showedPosition").removeClass("showedPosition");
	
	// 获取这个分类的结果集合.
	var res = places[index];
	// 从places集合里找到对应Marker重新添加到地图里.
	var place = null;
	for (var i = 0; i < res.length; i++) {
		if(res[i].dataid == id) {
			place = res[i];
			break;
		}
	}
	// 如果从结果集合里找到要显示的Place.
	if(place) {
		// 在地图绘制Marker.
		//createMarker(place);
		createMarkerlatlng(place.datalat,place.datalng,place.dataicon);
	}
	
	var myLatlng = new google.maps.LatLng(place.datalat,place.datalng);
	map.fitBounds(new google.maps.LatLngBounds(pyrmont,myLatlng));
	// 这里会在Bounds声明坐标顺序不对的情况下,显示世界Map出现.
	if (map.zoom == 0) {
	    // 调整两个坐标顺序重新调用fitBounds.
		map.fitBounds(new google.maps.LatLngBounds(myLatlng, pyrmont));
	}
	/* map.panToBounds(new google.maps.LatLngBounds(pyrmont, place.geometry.location)); */
	
	// 为当前点击的名称添加样式,高亮显示.
	$(element).addClass("showedPosition");
}
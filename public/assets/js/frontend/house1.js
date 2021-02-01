
   // ===== ===== ===== 获取select元素 ===== ===== =====
    // 获取下拉表单
    var select_province = document.getElementById('province');
    var select_city = document.getElementById('city');
    var select_county = document.getElementById('county');



    // ===== ===== ===== 给select填充数据的操作 ===== ===== =====
    // 填充province
    function addDataProvince(stateId) {
        var html = "<option value='0'>请选择州</option>";
        var length = arr_province.length;
        for (var i = 0; i < length; i++) {
            if (arr_province[i].id  == stateId) {
                html += "<option value='" + arr_province[i].id + "' selected>" + arr_province[i].name + "</option>";
            }else{
                html += "<option value='" + arr_province[i].id + "'>" + arr_province[i].name + "</option>";
            }
        }

        select_province.innerHTML = html;
    }

    // 填充city
    function addDataCity(provinceId,cId) {
        var html = "<option value='0'>请选择区域</option>";
        var length = arr_city.length;
        for (var i = 0; i < length; i++) {
            var obj = arr_city[i];
            if (obj.id == cId) {
                html += "<option value='" + obj.id + "' selected>" + obj.name + "</option>";
            }
            if (obj.province_id == provinceId) {
                html += "<option value='" + obj.id + "'>" + obj.name + "</option>";
            }

        }
        select_city.innerHTML = html;
    }

    // 填充county
    function addDataCounty(cityId,aId) {
        var html = "<option value='0'>请选择城市</option>";
        var length = arr_county.length;
        for (var i = 0; i < length; i++) {
            var obj = arr_county[i];
            if (obj.id == aId) {
                html += "<option value='" + obj.id + "' selected>" + obj.name + "</option>";
            }
            if (obj.city_id == cityId) {
                html += "<option value='" + obj.id + "'>" + obj.name + "</option>";
            }
        }
        select_county.innerHTML = html;
    }


    // ===== ===== ===== 给select绑定change事件 ===== ===== =====
    // select_province绑定change事件
    select_province.onchange = function () {
        var provinceId = select_province.value;
        addDataCity(provinceId);
    };

    // select_city绑定change事件
    select_city.onchange = function () {
        var cityId = select_city.value;
        addDataCounty(cityId);
    };

    // select初始化数据
    addDataProvince(0);
    addDataCity(arr_province[0].id,0);
    addDataCounty(arr_city[0].id,0);


    /* 核心思想就是，通过监听上一级的变化获得上级的value，进而改变本级显示的列表内容。*/

    



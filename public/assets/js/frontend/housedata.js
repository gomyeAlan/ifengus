



    // ===== ===== ===== 准备三级联动的数据 ===== ===== =====
    // 省份
    var arr_province = [
        // 省份ID, 省份名称
        { id: 1100000, name: 'California' }
    ];

    // 城市
    var arr_city = [
        // 城市ID, 城市名称, 城市所属的省份（即本级的上一级的ID）
        { id: 1101000, name: 'Los Angeles', province_id: 1100000 },
        { id: 1102000, name: 'Orange', province_id: 1100000 },
        { id: 1103000, name: 'RiverSide', province_id: 1100000 }
    ];

    // 区县
    var arr_county = [
        // 区县ID, 区县名称, 区县所属的城市（即本级的上一级的ID）
        { id: 1101001, name: 'Arcadia', city_id: 1101000 },
        { id: 1101002, name: 'Pasadena', city_id: 1101000 },
        { id: 1101003, name: 'Diamond Bar', city_id: 1101000 },
        { id: 1101004, name: 'Temple City ', city_id: 1101000 },
        { id: 1101005, name: 'West Covina', city_id: 1101000 },
        { id: 1101006, name: 'Walnut', city_id: 1101000 },
        { id: 1101007, name: 'Arcadia', city_id: 1101000 },
        { id: 1101008, name: 'Hacienda Heights', city_id: 1101000 },
        { id: 1101009, name: 'Chino', city_id: 1101000 },
        { id: 1101010, name: 'Rowland Heights', city_id: 1101000 },
        { id: 1102001, name: 'Yorba Linda', city_id: 1102000 },
        { id: 1102002, name: 'Irvine', city_id: 1102000 },
        { id: 1102003, name: 'Newport Beach', city_id: 1102000 },
        { id: 1102004, name: 'Chino Hills', city_id: 1102000 },
        { id: 1102005, name: 'Lake Forest', city_id: 1102000 },
        { id: 1102006, name: 'Laguna Niguel', city_id: 1102000 },
        { id: 1103001, name: 'Ontario', city_id: 1103000 },
        { id: 1103002, name: 'Eastvale', city_id: 1103000 },
        { id: 1103003, name: 'Rancho Cucamonga', city_id: 1103000 },
        { id: 1103004, name: 'Portland', city_id: 1103000 }
    ];

define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'scrm/remind/index' + location.search,
                    add_url: 'scrm/remind/add',
                    multi_url: 'scrm/remind/multi',
                    table: 'scrm_client',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'username', title: __('Username')},
						{field: 'sex', title: __('Sex'), searchList: {"1":__('Sex 1'),"0":__('Sex 0')}, formatter: Table.api.formatter.normal},
                        {field: 'tel', title: __('Tel')},
                        {field: 'qq', title: __('Qq')},
                        {field: 'weixin', title: __('Weixin')},
                        {field: 'email', title: __('Email')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'remindertime', title: __('Remindertime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.normal},
                        //{field: 'status', title: __('Status'), searchList: {"normal":__('Normal'),"hidden":__('Hidden')}, formatter: Table.api.formatter.status},
						{field: 'label_id', title: __('Label_id'), searchList: Config.crmvisitId, formatter: Table.api.formatter.normal},
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'detail',
                                    title: __('详情'),
									text:'详情',
									extend: 'data-toggle="tooltip"',
                                    classname: 'btn btn-info btn-xs btn-detail btn-dialog',
                                    icon: 'fa fa-list',
                                    url: 'scrm/remind/detail',
									callback: function (data) {
										table.bootstrapTable('refresh');
                                        Layer.alert(JSON.stringify(data));
                                    }
                                },
                                {
                                    name: 'detail',
                                    title: __('回访'),
									text:'回访',
									extend: 'data-toggle="tooltip"',
                                    classname: 'btn btn-success btn-xs btn-visit btn-dialog',
                                    icon: 'fa fa-plus',
                                    url: 'scrm/visit/index',
									callback: function (data) {
										table.bootstrapTable('refresh');
                                        Layer.alert(JSON.stringify(data));
                                    }
                                }
                            ],
                            formatter: Table.api.formatter.operate
                        },
						
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
            //绑定TAB事件
		   $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
				var field = $(this).closest("ul").data("field");
				var value = $(this).data("value");
				if(value === ''){
					$("#remindertime").val('');
				}else{
					$("#remindertime").val(Config.date_arr[value][0]+' - '+Config.date_arr[value][1]);
				}
				
				//$("select[name='" + field + "'] option[value='" + value + "']", table.closest(".bootstrap-table").find(".commonsearch-table")).prop("selected", true);
				table.bootstrapTable('refresh', {pageNumber: 1});
				return false;
			});	
        },
        visit: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'scrm/visit/index' + location.search,
                    multi_url: 'scrm/remind/multi',
                    table: 'scrm_user',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'username', title: __('Username')},

                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'status', title: __('Status'), searchList: {"normal":__('Normal'),"hidden":__('Hidden')}, formatter: Table.api.formatter.status},
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'detail',
                                    title: __('详情'),
									extend: 'data-toggle="tooltip"',
                                    classname: 'btn btn-info btn-xs btn-detail btn-dialog',
                                    icon: 'fa fa-list',
                                    url: 'scrm/remind/detail',
									callback: function (data) {
										table.bootstrapTable('refresh');
                                        Layer.alert(JSON.stringify(data));
                                    }
                                },
                                {
                                    name: 'detail',
                                    title: __('回访'),
									text:'回访',
									extend: 'data-toggle="tooltip"',
                                    classname: 'btn btn-success btn-xs btn-visit btn-dialog',
                                    icon: 'fa fa-plus',
                                    url: 'scrm/visit/index',
									callback: function (data) {
										table.bootstrapTable('refresh');
                                        Layer.alert(JSON.stringify(data));
                                    }
                                }
                            ],
                            formatter: Table.api.formatter.operate
                        },
						
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);

        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'scrm/visit/index/ids/'+Config.crmvisitId + location.search,
                    add_url: 'scrm/visit/add/ids/'+Config.crmvisitId,
                    del_url: 'scrm/visit/del',
                    table: 'scrm_visit',
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
                        {field: 'label_text', title: __('Label_id')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
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
                                    url: 'scrm/visit/detail',
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
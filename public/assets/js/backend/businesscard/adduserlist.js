define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'businesscard/adduser/adduserlist',
                    table: 'user',
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
                        {field: 'id', title: __('ID'),visible: false},
                        {field: 'username', title: __('Username')},
                        {field: 'status', title: __('Status'), formatter: Table.api.formatter.status},
                        {field: 'operate', 
                         title: __('Operate'), 
                         table: table, 
                         events: Table.api.events.operate, 
                         buttons: [
                         {
                            name: 'adduser',
                            text: '添加',
                            title: __('添加'),
                            classname: 'btn btn-xs btn-primary btn-axja',
                            icon: 'fa fa-check ',
                            url: 'businesscard/adduser/adduserlist'
                        }],
                         formatter: Table.api.formatter.operate}
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
        filteruser: function(){

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
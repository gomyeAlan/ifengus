define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'businesscard/bslog/index' + location.search,
                    add_url: 'businesscard/bslog/add',
                    edit_url: 'businesscard/bslog/edit',
                    del_url: 'businesscard/bslog/del',
                    multi_url: 'businesscard/bslog/multi',
                    table: 'bs_log',
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
                        {field: 'adminid', title: __('Adminid')},
                        {field: 'userid', title: __('Userid')},
                        {field: 'url', title: __('Url'), formatter: Table.api.formatter.url},
                        {field: 'content', title: __('Content')},
                        {field: 'errorcode', title: __('Errorcode')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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
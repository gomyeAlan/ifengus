define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'businesscard/company/index' + location.search,
                    add_url: '',
                    edit_url: 'businesscard/company/edit',
                    del_url: '',
                    multi_url: '',
                    table: 'bs_company',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'ID',
                sortName: 'ID',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'ID', title: __('Id'),visible:false},
                        {field: 'companyname', title: __('Companyname')},
                        {field: 'companyename', title: __('Companyename')},
                        {field: 'status', title: __('Status'), formatter: Table.api.formatter.status},
                        {field: 'operate', 
                         title: __('Operate'), 
                         table: table, 
                         events: Table.api.events.operate, 
                         buttons: [
                         {
                            name: 'adduser',
                            text: '添加员工',
                            title: __('添加员工'),
                            classname: 'btn btn-xs btn-primary btn-dialog',
                            icon: 'fa fa-user-o ',
                            url: 'businesscard/company/adduser'
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
        adduser: function () {
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
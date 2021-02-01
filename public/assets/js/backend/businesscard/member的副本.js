define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'businesscard/member/index' + location.search,
                    add_url: '',
                    edit_url: '',
                    del_url: '',
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
                        {field: 'companyuser', title: __('Companyuser')},
                        {field: 'companyname', title: __('Companyname')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {   field: 'operate', 
                            width: "150px",
                            title: __('Operate'), 
                            table: table, 
                            events: Table.api.events.operate, 
                            buttons:[
                                {
                                    name: 'select',
                                    title: __('选择员工'),
                                    classname: 'btn btn-xs btn-primary btn-dialog',
                                    icon: 'fa fa-list',
                                    url: 'businesscard/member/selectm'
                                }

                            ],
                            formatter: Table.api.formatter.operate
                        }
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
        },
        

        
        
        selectm: function(data){
            var ids = $("#assign-data-ids").val();
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: '',
                    add_url: '',
                    edit_url: '',
                    del_url: '',
                    table: 'user',
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
                        {field: 'username', title: __('Username'), operate: 'LIKE'},
                        {field: 'nickname', title: __('Nickname'), operate: 'LIKE'},
                        {field: 'email', title: __('Email'), operate: 'LIKE'},
                        {field: 'mobile', title: __('Mobile'), operate: 'LIKE'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
    };
    return Controller;
});
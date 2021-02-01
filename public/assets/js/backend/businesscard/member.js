define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init();
            this.table.first();
            this.table.second();
        },
        table: {
            first: function () {
                // 表格1
                var table1 = $("#table1");
                table1.bootstrapTable({
                    url: 'businesscard/member/index',
                    toolbar: '#toolbar1',
                    sortName: 'id',
                    search: false,
                    columns: [
                        [
                            {field: 'state', checkbox: true,},
                            {field: 'ID', title: 'ID'},
                            {field: 'companyname', title: __('公司名')},
                            {
                                field: 'operate', title: __('Operate'), table: table1, events: Table.api.events.operate, buttons: [
                                    {
                                        name: 'log',
                                        title: '公司名单',
                                        text: '公司名单',
                                        icon: 'fa fa-list',
                                        classname: 'btn btn-primary btn-xs btn-click',
                                        click: function (e, data) {
                                            $("#myTabContent2 .form-commonsearch input[name='companyid']").val(data.ID);
                                            $("#myTabContent2 .btn-refresh").trigger("click");
                                        }
                                    }
                                ], formatter: Table.api.formatter.operate
                            }
                        ]
                    ]
                });

                // 为表格1绑定事件
                Table.api.bindevent(table1);
            },
            second: function () {
                // 表格2
                var table2 = $("#table2");
                table2.bootstrapTable({
                    url: 'businesscard/member/table2',
                    extend: {
                        index_url: '',
                        add_url: '',
                        edit_url: '',
                        del_url: '',
                        multi_url: '',
                        table: '',
                    },
                    toolbar: '#toolbar2',
                    sortName: 'id',
                    search: false,
                    columns: [
                        [
                            {field: 'state', checkbox: true,},
                            {field: 'id', title: 'ID', visible: false},
                            {field: 'username', title: __('Nickname')},
                            {field: 'companyid', title: __('CompanyID'), visible: false},
                            {field: 'operate', 
                             title: __('Operate'), 
                             table: table2,
                             events: Table.api.events.operate,
                             buttons: [
                             {
                                name: 'editcard',
                                text: '名片信息',
                                title: __('名片信息'),
                                classname: 'btn btn-primary btn-xs btn-dialog',
                                icon: 'fa fa-user-o ',
                                url: 'businesscard/member/editcard'
                            }],
                             formatter: Table.api.formatter.operate}
                        ]
                    ]
                });

                // 为表格2绑定事件
                Table.api.bindevent(table2);
            }
        },
        editcard: function(){
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
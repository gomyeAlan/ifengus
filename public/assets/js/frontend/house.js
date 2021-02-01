define(['jquery', 'bootstrap', 'frontend', 'template', 'form'], function ($, undefined, Frontend, Template, Form) {
    var Controller = {
        myhouse: function(){

        },
        myrenthouse: function(){

        },
        addhouse: function () {
 			require(['jquery-tagsinput'], function () {
                //标签输入
                var elem = "#c-tags";
                var tags = $(elem);
                tags.tagsInput({
                    width: 'auto',
                    defaultText: '输入后回车确认',
                    minInputWidth: 110,
                    height: '36px',
                    placeholderColor: '#999',
                    onChange: function (row) {
                        if (typeof callback === 'function') {

                        } else {
                            $(elem + "_addTag").focus();
                            $(elem + "_tag").trigger("blur.autocomplete").focus();
                        }
                    },
                    autocomplete: {
                        url: 'cms.archives/tags_autocomplete',
                        minChars: 1,
                        menuClass: 'autocomplete-tags'
                    }
                });
            });
            Form.api.bindevent($("form[role=form]"), function (data, ret) {
                setTimeout(function () {
                    location.href = Fast.api.fixurl('house/myhouse');
                }, 1500);
            });
            $("#c-channel_id").trigger("change");
        },
        addrent: function () {
            require(['jquery-tagsinput'], function () {
                //标签输入
                var elem = "#c-tags";
                var tags = $(elem);
                tags.tagsInput({
                    width: 'auto',
                    defaultText: '输入后回车确认',
                    minInputWidth: 110,
                    height: '36px',
                    placeholderColor: '#999',
                    onChange: function (row) {
                        if (typeof callback === 'function') {

                        } else {
                            $(elem + "_addTag").focus();
                            $(elem + "_tag").trigger("blur.autocomplete").focus();
                        }
                    },
                    autocomplete: {
                        url: 'cms.archives/tags_autocomplete',
                        minChars: 1,
                        menuClass: 'autocomplete-tags'
                    }
                });
            });
            Form.api.bindevent($("form[role=form]"), function (data, ret) {
                setTimeout(function () {
                    location.href = Fast.api.fixurl('house/myrenthouse');
                }, 1500);
            });
            $("#c-channel_id").trigger("change");
        }
    };
    return Controller;
});
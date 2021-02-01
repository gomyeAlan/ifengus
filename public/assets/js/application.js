if (!window.TurbolinksBootstrapped) {
  window.TurbolinksBootstrapped = {};
}

var doTurbolinksBootstrap = function(callback, id) {
  if (window.TurbolinksBootstrapped[id]) { return; }
  callback();
  window.TurbolinksBootstrapped[id] = true;

  console.log('Bootstrap for ['+ id + ']');
};
/**
 * Created by jc on 1/21/15.
 */
/// <reference path="../../../typings/tsd.d.ts" />
;
/**
 * Created by jc on 1/17/15.
 */
/// <reference path="../../../typings/tsd.d.ts" />
var Renative;
(function (Renative) {
    var ConfigType = (function () {
        function ConfigType() {
        }
        return ConfigType;
    })();
    Renative.ConfigType = ConfigType;
    var RuntimeType = (function () {
        function RuntimeType() {
        }
        return RuntimeType;
    })();
    Renative.RuntimeType = RuntimeType;
    Renative.runtime = new RuntimeType();
    Renative.runtime.history = { urls: [], version: 0 };
    Renative.runtime.bindings = {};
    Renative.runtime.caches = {};
    Renative.runtime.logs = [];
    Renative.runtime.url = window.location.href;
    Renative.runtime.loading = false;
    Renative.runtime.binding = false;
    Renative.runtime.rendering = false;
    Renative.runtime.popStated = false;
    Renative.runtime.pushStated = false;
    Renative.runtime.delayQueue = [];
    Renative.runtime.turbolinks = false;
    Renative.config;
    if (!Renative.config) {
        Renative.config = new ConfigType();
        Renative.config.index = 'index';
        Renative.config.defaultRegion = "#default";
        Renative.config.defaultVariant = "default";
        Renative.config.defaultModalRegion = "#modal-default";
        Renative.config.defaultModalVariant = "modal-default";
        Renative.config.defaultEventListener = "#renative-listener";
    }
    Renative.config.scrollElement = window;
    function theEval(fullname, root) {
        if (root === void 0) { root = window; }
        var namespaces = (fullname + '').split('.');
        var i = 0, l = namespaces.length;
        for (i; i < l; i += 1) {
            if (_.isEmpty(root)) {
                break;
            }
            root = root[namespaces[i]];
        }
        return root;
    }
    Renative.theEval = theEval;
    ;
    function tryCatch(fn, logMessage) {
        if (logMessage === void 0) { logMessage = 'NONE'; }
        if (_.isFunction(fn)) {
            try {
                fn();
            }
            catch (ex) {
                console.log(logMessage, ex);
            }
        }
    }
    Renative.tryCatch = tryCatch;
    ;
    Renative.Cookies;
})(Renative || (Renative = {}));
/**
 * Created by jc on 1/16/15.
 */

var Renative;
(function (Renative) {
    var DOM;
    (function (DOM) {
        function stopPropagation(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
        DOM.stopPropagation = stopPropagation;
    })(DOM = Renative.DOM || (Renative.DOM = {}));
})(Renative || (Renative = {}));
/**
 * Created by jc on 1/16/15.
 */

var Renative;
(function (Renative) {
    var Event;
    (function (Event) {
        function create(selector, eventType, eventHandler) {
            if (selector !== null, !_.isEmpty(eventType) && eventHandler !== null) {
                return {
                    selector: selector,
                    eventType: eventType,
                    eventHandler: eventHandler
                };
            }
            else {
                return null;
            }
        }
        Event.create = create;
    })(Event = Renative.Event || (Renative.Event = {}));
})(Renative || (Renative = {}));
/**
 * Created by jc on 1/16/15.
 */

var Renative;
(function (Renative) {
    var I18n;
    (function (I18n) {
        var Message;
        (function (Message) {
            // TODO: get message from server;
            Message.H403 = "We just experienced an error while processing your request. Would you please refresh the webpage?";
            Message.H422 = "Your submitted data is invalid. Would you please try again?";
            Message.H500 = "We just experienced an error while processing your request. Would you please try again?";
        })(Message = I18n.Message || (I18n.Message = {}));
    })(I18n = Renative.I18n || (Renative.I18n = {}));
})(Renative || (Renative = {}));
/**
 * Created by jc on 1/16/25.
 */

var Renative;
(function (Renative) {
    var Notify;
    (function (Notify) {
        function enqueue(e, messages) {
            for (var k in messages) {
                console.log('#[Renative.Notify] trigger: [' + k + ': ' + messages[k] + ']');
                if (Renative.Notify[k]) {
                    Renative.Notify[k](messages[k]);
                }
            }
        }
        Notify.enqueue = enqueue;
        function success(message, timeout) {
            if (timeout === void 0) { timeout = 7; }
            $(document).trigger('display:notify:message', [message, 'success', timeout]);
        }
        Notify.success = success;
        function info(message, timeout) {
            if (timeout === void 0) { timeout = 7; }
            $(document).trigger('display:notify:message', [message, 'info', timeout]);
        }
        Notify.info = info;
        function notice(message, timeout) {
            if (timeout === void 0) { timeout = 7; }
            $(document).trigger('display:notify:message', [message, 'info', timeout]);
        }
        Notify.notice = notice;
        function warn(message, timeout) {
            if (timeout === void 0) { timeout = 10; }
            $(document).trigger('display:notify:message', [message, 'warning', timeout]);
        }
        Notify.warn = warn;
        function warning(message, timeout) {
            if (timeout === void 0) { timeout = 10; }
            $(document).trigger('display:notify:message', [message, 'warning', timeout]);
        }
        Notify.warning = warning;
        function error(message, timeout) {
            if (timeout === void 0) { timeout = 15; }
            $(document).trigger('display:notify:message', [message, 'danger', timeout]);
        }
        Notify.error = error;
        function alert(message, timeout) {
            if (timeout === void 0) { timeout = 15; }
            $(document).trigger('display:notify:message', [message, 'danger', timeout]);
        }
        Notify.alert = alert;
        function nps() {
            return Q.fcall(function () {
                if (typeof NProgress !== "undefined") {
                    if (!NProgress.status) {
                        NProgress.start();
                    }
                }
            });
        }
        Notify.nps = nps;
        function npe() {
            return Q.fcall(function () {
                if (typeof NProgress !== "undefined") {
                    try {
                        NProgress.done(true);
                    }
                    catch (ex) { }
                }
            });
        }
        Notify.npe = npe;
    })(Notify = Renative.Notify || (Renative.Notify = {}));
})(Renative || (Renative = {}));
/**
 * Created by jc on 1/16/15.
 */

var Renative;
(function (Renative) {
    var Net;
    (function (Net) {
        var Notify = Renative.Notify;
        var I18n = Renative.I18n;
        Net.token = "";
        Net.tokening = false;
        Net.version = "";
        function A(options, undone_callback, reloadToken) {
            if (undone_callback === void 0) { undone_callback = null; }
            if (reloadToken === void 0) { reloadToken = true; }
            var prefix = window.location.href.split(window.location.pathname)[0];
            if (/^http/i.test(options.url)) {
                options.url = options.url.replace(prefix, '');
            }
            console.log('#[Renative.Net] XHR: ' + options.url);
            if (!(/^\/.+/i).test(options.url)) {
                throw new Error('#[Renative.Net] XHR request url invalid, missing (/) at the beginning!\n[' + options.url + ']');
            }
            return Q.Promise(function (resolve, reject) {
                $.ajax(options).done(function (data, textStatus, jqXHR) {
                    // reload page when assets version updated
                    if (jqXHR) {
                        var ver = jqXHR.getResponseHeader('x-assets-version');
                        if (_.isEmpty(Net.version)) {
                            Net.version = ver;
                        }
                        if (ver > Net.version) {
                            Renative.UI.stopLoading();
                            window.location.reload(true);
                            return resolve({ redirect: true, location: window.location.href, redirecting: true }, jqXHR);
                        }
                        // reload with x-location set
                        var loc = jqXHR.getResponseHeader('x-location');
                        if (!_.isEmpty(loc)) {
                            if (!/\?r=|&r=/i.test(loc)) {
                                if (loc.split('?').length >= 2) {
                                    loc += "&r=" + (new Date()).getTime();
                                }
                                else {
                                    loc += "?r=" + (new Date()).getTime();
                                }
                            }
                            // Renative.Inspection.log('redirecting', loc);
                            Renative.UI.stopLoading();
                            window.location.replace(loc);
                            return resolve({ redirect: true, location: loc, redirecting: true }, jqXHR);
                        }
                    }
                    console.log('#[Renative.Net] XHR RESPONSE BEGIN');
                    console.log([data]);
                    console.log('#[Renative.Net] XHR RESPONSE ENDDD');
                    // no data present?
                    if (!data && jqXHR.status === 204) {
                        Renative.UI.stopLoading();
                        window.location.replace("/?r=" + (new Date()).getTime());
                        return resolve({ redirect: true, location: '/', redirecting: true }, jqXHR);
                    }
                    // return html response;
                    if (_.isString(data)) {
                        return resolve({ data: data }, jqXHR);
                    }
                    // show alert message from api data;
                    var message = 'UNKNOWN EXCEPTION';
                    if (data.alert && data.alert.show && data.alert.message) {
                        message = data.alert.message;
                        var ui = data.alert.ui || 'info';
                        Notify[ui](message);
                    }
                    // call custom undone callback;
                    if (/(post|delete|put)/i.test(options.type)) {
                        if (data.done === false) {
                            if ($.isFunction(undone_callback)) {
                                // always return when undone_callback present;
                                return undone_callback(data, jqXHR);
                            }
                        }
                    }
                    // final resolve
                    return resolve(data, jqXHR);
                }).fail(function (e) {
                    if (e.status === 403) {
                        if (reloadToken) {
                            Net.token = "";
                            return resolve(Net.TA(options, undone_callback, false), e);
                        }
                        else {
                            Notify.warn(I18n.Message.H403);
                        }
                    }
                    else if (e.status === 422) {
                        console['table'](e);
                        Notify.error(I18n.Message.H422);
                    }
                    else {
                        console['table'](e);
                        Notify.error(I18n.Message.H500);
                    }
                    Notify.npe();
                    resolve({}, e);
                    throw e;
                });
            });
        }
        Net.A = A;
        function AX(options, undone_callback) {
            if (undone_callback === void 0) { undone_callback = null; }
            return A(options, undone_callback);
        }
        Net.AX = AX;
        function AP(options, undone_callback, reloadToken) {
            if (undone_callback === void 0) { undone_callback = null; }
            if (reloadToken === void 0) { reloadToken = true; }
            if (_.isEmpty(Net.token)) {
                if (Net.tokening) {
                    return Q.delay(100).then(function () {
                        return Net.AP(options, undone_callback, false);
                    });
                }
                else {
                    return TA(options, undone_callback, reloadToken);
                }
            }
            var method, qs, uri, url;
            method = options.type || 'GET';
            uri = options.url.split('?');
            url = uri[0];
            qs = uri.length === 2 ? uri[1] : '';
            if (options.binary !== true) {
                if (_.isObject(options.data)) {
                    options.data = JSON.stringify(options.data);
                }
                console.log('#[Renative.Net] AP options:', options);
                var sign = function (method, url, params, data) {
                    var x = function () {
                        var a = (Net.token + '').split('');
                        var b = a[0] - 0;
                        var e = a[a.length - 1] - 0 + 1 + b;
                        var s = '';
                        for (var i = b; i < e; i += 1) {
                            s += a[i];
                        }
                        return s;
                    };
                    var a = [x(), (method + '').toUpperCase(), url, params, data].join(':');
                    return md5(a);
                };
                options['headers'] = options['headers'] || {};
                options['headers']['Content-Type'] = 'application/json';
                options['headers']['SIG'] = sign(method, url, qs, options.data);
            }
            return Net.A(options, undone_callback, reloadToken);
        }
        Net.AP = AP;
        function TA(options, undone_callback, reloadToken) {
            if (undone_callback === void 0) { undone_callback = null; }
            if (reloadToken === void 0) { reloadToken = true; }
            if (Net.tokening) {
                return Q.delay(100).then(function () {
                    if (options) {
                        return Net.AP(options, undone_callback, reloadToken);
                    }
                });
            }
            Net.tokening = true;
            // set tokening = false after timeout in 2 secs.
            Q.delay(2000).then(function () {
                Net.tokening = false;
            });
            return Q($.ajax({
                url: '/api/token/new?r=' + (new Date()).getTime()
            })).then(function (data) {
                Net.tokening = false;
                Net.token = data;
                console.log('#[Renative.Net] TA token: ' + data);
                if (options) {
                    return Net.AP(options, undone_callback, reloadToken);
                }
            });
        }
        Net.TA = TA;
    })(Net = Renative.Net || (Renative.Net = {}));
})(Renative || (Renative = {}));
/**
 * Created by jc on 1/21/15.
 */

var Renative;
(function (Renative) {
    var UI;
    (function (UI) {
        function dispose(region) {
            console.log('#[Renative.UI] dispose: (' + region + ') [begin]');
            // stop delay queue
            UI.stopDelayQueue();
            // unbind renative binding events
            UI.unbind(region);
            // dispose google adsense
            $(document).trigger('dispose:google:adsense');
            // dispose region
            $(document).trigger('dispose:region', region);
            console.log('#[Renative.UI] dispose: (' + region + ') [done]');
        }
        UI.dispose = dispose;
        ;
        function modalDispose(region) {
            // dispose default modal region
            UI.dispose(Renative.config.defaultModalRegion);
            $(document).trigger('dispose:modal:region', region);
        }
        UI.modalDispose = modalDispose;
        ;
        function stopDelayQueue() {
            console.log('#[Renative.UI] stopDelayQueue:', Renative.runtime.delayQueue);
            // stop delayRendering
            if (Renative.runtime.delayRendering) {
                clearTimeout(Renative.runtime.delayRendering);
            }
            Renative.runtime.delayRendering = null;
            // stop delayQueue
            _.each(Renative.runtime.delayQueue, function (tid) { if (tid) {
                clearTimeout(tid);
            } });
            Renative.runtime.delayQueue = [];
            console.log('#[Renative.UI] stopDelayQueue [done]');
        }
        UI.stopDelayQueue = stopDelayQueue;
        ;
        function unbind(region) {
            console.log('#[Renative.UI] unbind bindings:', Renative.runtime.bindings[region]);
            var $region = $(region);
            _.each(_.keys(Renative.runtime.bindings), function (key) {
                if (region === key || $region.find(key).length > 0) {
                    _.each(Renative.runtime.bindings[key], function (e) {
                        e.selector.unbind();
                    });
                    delete Renative.runtime.bindings[key];
                }
            });
            Renative.runtime.binding = false;
        }
        UI.unbind = unbind;
        function bind(region) {
            if (Renative.runtime.binding === true) {
                console.log('#[Renative.UI] ###[BUG]### Another thread is binding...');
                return;
            }
            Renative.runtime.binding = true;
            var bindings = [];
            $(region).find('[renative-bind]').each(function (index, el) {
                // console.log(el);
                var self = $(el);
                var data = $.parseJSON(self.attr('renative-bind'));
                _.each(data, function (item) {
                    if (_.isArray(item) && item.length == 2 && !_.isEmpty(item[0]) && !_.isEmpty(item[1])) {
                        var e = Renative.Event.create(self, item[0], Renative.theEval(item[1]));
                        e.selector.bind(e.eventType, e.eventHandler);
                        bindings.push(e);
                        console.log('#[Renative.UI] bind: [' + item[0] + '] (' + item[1] + ')');
                    }
                });
            });
            Renative.runtime.bindings[region] = bindings;
            Renative.runtime.binding = false;
        }
        UI.bind = bind;
        function trigger(region) {
            // trigger ui events;
            $(region).find('[renative-trigger]').each(function (index, el) {
                var self = $(el);
                var data = $.parseJSON(self.attr('renative-trigger'));
                _.each(data, function (item) {
                    if (_.isArray(item) && item.length > 0 && !_.isEmpty(item[0])) {
                        // self without params
                        if (item.length === 1) {
                            self.trigger(item[0]);
                        }
                        else if (item.length === 2) {
                            if (_.isArray(item[1])) {
                                // 2nd params is array, self
                                self.trigger(item[0], item[1]);
                            }
                            else if (!_.isEmpty(item[0]) && !_.isEmpty(item[1])) {
                                // 2nd params is event_type, find listener
                                $(item[0]).trigger(item[1]);
                            }
                        }
                        else if (item.length === 3 && !_.isEmpty(item[1])) {
                            // listener with params
                            $(item[0]).trigger(item[1], item[2]);
                        }
                        console.log('#[Renative.UI] trigger: (' + item + ')');
                    }
                });
            });
            // tranditional trigger queues
            var q = window['renativeTriggerQueue'] || [];
            _.each(q, function (fn) { if (fn) {
                Renative.tryCatch(fn);
            } });
            window['renativeTriggerQueue'] = [];
        }
        UI.trigger = trigger;
        function markScrollTop() {
            // Renative.Inspection.log("#[Renative.UI] markScrollTop.", Renative.config.scrollElement, $(Renative.config.scrollElement).scrollTop());
            return { top: $(Renative.config.scrollElement).scrollTop() };
        }
        UI.markScrollTop = markScrollTop;
        function loading(silentLoading, hideNavbar) {
            if (silentLoading === void 0) { silentLoading = false; }
            if (hideNavbar === void 0) { hideNavbar = false; }
            var dom = $('#xhr-loading');
            if (Renative.Device.desktop() || dom.length === 0) {
                return false;
            }
            if (hideNavbar) {
                dom.find('#xhr-loading-navbar').hide();
            }
            else {
                dom.find('#xhr-loading-navbar').show();
            }
            Renative.runtime.loading = true;
            Renative.runtime.silentLoading = silentLoading;
            dom.hide();
            dom.removeClass('fadeOut');
            dom.addClass('fadeIn');
            Q.delay(0).then(function () {
                dom.show();
                Renative.runtime.delayQueue.push(setTimeout(function () { Renative.runtime.loading = false; }, 750));
            });
            return true;
        }
        UI.loading = loading;
        function stopLoading() {
            UI.loaded();
        }
        UI.stopLoading = stopLoading;
        function loaded() {
            var dom = $('#xhr-loading');
            if (dom.length === 0) {
                return;
            }
            dom.removeClass('fadeIn');
            dom.addClass('fadeOut');
            Q.delay(350).then(function () { dom.hide(); });
        }
        UI.loaded = loaded;
        function back() {
            if (Renative.runtime.rendering === true) {
                return;
            }
            if (Renative.runtime.silentLoading) {
                UI.stopRendering();
            }
            else {
                window.history.back();
            }
        }
        UI.back = back;
        function backed() {
            UI.loaded();
        }
        UI.backed = backed;
        function stopRendering() {
            UI.stopDelayQueue();
            Renative.Notify.npe();
            Renative.runtime.stopRendering = true;
            Q.delay(100).then(function () {
                Renative.runtime.loading = false;
                UI.backed();
            });
        }
        UI.stopRendering = stopRendering;
        function renderCompleted() {
            UI.loaded();
        }
        UI.renderCompleted = renderCompleted;
        function render(html, options) {
            // always clear delay rendering callback;
            if (Renative.runtime.delayRendering) {
                clearTimeout(Renative.runtime.delayRendering);
            }
            if (Renative.runtime.stopRendering) {
                return;
            }
            if (Renative.runtime.loading === true || Renative.runtime.rendering === true) {
                console.log('#[Renative.UI] ###[BUG]### Another thread is rendering...');
                Renative.runtime.delayRendering = setTimeout(function () {
                    UI.render(html, options);
                }, 100);
                return;
            }
            Renative.runtime.rendering = true;
            Renative.Notify.npe();
            // set default region
            var region = options.region;
            if (_.isEmpty(region)) {
                region = Renative.config.defaultRegion;
            }
            // get top position
            var scrollTop = $(document).scrollTop();
            var offsetTop = ($(region).offset() || $(document).offset() || { top: 0 }).top;
            var offsetTopHistory = offsetTop;
            if (offsetTop > scrollTop) {
                offsetTop = scrollTop;
            }
            if (!options.popstate) {
                options.scroll = true;
            }
            console.log('#[Renative.UI] offset-top: (' + offsetTop + '), scrollTop: (' + scrollTop + ')');
            var domHistory = $(region);
            // if domHistory missing; reload page
            if (domHistory.length == 0) {
                window.location.replace(options.href);
            }
            // create virtual dom
            var dom = $(html);
            dom.attr('region', region);
            // check if current page cacheable?
            var cacheable = !options.popstate && dom.attr('xhr-cacheable') == 'true';
            // mark domHistory to be deleted
            domHistory.attr('id', region + '-' + (new Date()).getTime());
            // add new dom to document
            dom.addClass('hidden');
            domHistory.after(dom);
            // compiling and cssing
            UI.compiling(options, dom);
            UI.cssing(region, dom);
            // without animation;
            Q.delay(0).then(function () {
                dom.removeClass('hidden');
                domHistory.remove();
                Renative.runtime.rendering = false;
                UI.bootstrap(region, options, offsetTop, cacheable);
                UI.renderCompleted();
            });
        }
        UI.render = render;
        ;
        function cssing(region, dom) {
            // update main region's class
            if (region !== Renative.config.defaultRegion) {
                var classes = dom.attr('xhr-class') || '';
                if (!_.isEmpty(classes)) {
                    console.log('#[Renative.UI] set page css: [' + classes + ']');
                    $(Renative.config.defaultRegion).removeClass().addClass(classes + '');
                }
            }
        }
        UI.cssing = cssing;
        ;
        function compiling(options, dom) {
            var region = options.region;
            // set canonical link
            var canonical = (dom.attr('xhr-canonical') || '') + '';
            if (!_.isEmpty(canonical)) {
                console.log('#[Renative.UI] set canonical link: [' + canonical + ']');
                $('head link[rel=canonical]').attr('href', canonical);
                $('head meta[name="og:url"]').attr('content', canonical);
            }
            // set document title
            var title = (dom.attr('xhr-title') || '') + '';
            if (!_.isEmpty(title)) {
                console.log('#[Renative.UI] set document title: [' + title + ']');
                document.title = title;
                $('head meta[name="og:title"]').attr('content', title + '');
            }
            // set description
            var description = (dom.attr('xhr-description') || '') + '';
            if (!_.isEmpty(description)) {
                console.log('#[Renative.UI] set description: [' + description + ']');
                $('head meta[name=description]').attr('content', description);
                $('head meta[name="og:description"]').attr('content', description);
            }
            // set image
            var image = (dom.attr('xhr-image') || '') + '';
            if (!_.isEmpty(image)) {
                console.log('#[Renative.UI] set image: [' + image + ']');
                $('head link[rel=image_src]').attr('href', image);
                $('head meta[name="og:image"]').attr('content', image);
            }
            // ui bindings
            UI.bind(region);
            // trigger region compiling
            $(document).trigger('bootstrap:region:compiling', [region, options.force_compile]);
        }
        UI.compiling = compiling;
        ;
        function bootstrap(region, options, offsetTop, cacheable) {
            if (offsetTop === void 0) { offsetTop = 0; }
            if (cacheable === void 0) { cacheable = false; }
            // ui trigger bootstrap region
            $(document).trigger('bootstrap:region', region);
            // ui trigger
            UI.trigger(region);
            if (options.scroll) {
                if (options.popstate) {
                    // Renative.Inspection.log("#[Renative.UI] popstate.", options.scroll);
                    $(Renative.config.scrollElement).animate({ scrollTop: options.scroll.top }, 0);
                }
                else {
                    $('html, body').animate({ scrollTop: offsetTop }, 100);
                }
            }
            // save dom cache
            if (cacheable && !_.isEmpty(options.cache_digest)) {
                UI.saveCache(options.cache_digest);
            }
            $(document).trigger('bootstrap:region:completed', region);
        }
        UI.bootstrap = bootstrap;
        ;
        function saveCache(cache_digest) {
            var dom = $(Renative.config.defaultRegion).clone();
            dom.attr('xhr-title', document.title);
            dom.attr('xhr-canonical', $('head link[rel=canonical]').attr('href'));
            Renative.runtime.caches[cache_digest] = dom.wrap('<div>').parent().html();
        }
        UI.saveCache = saveCache;
        ;
        function updateCache() {
            if (history.state && !_.isEmpty(history.state.cache_digest) && history.state.nocache != true) {
                UI.saveCache(history.state.cache_digest);
            }
        }
        UI.updateCache = updateCache;
        ;
        function jump(xhr_hash) {
            if (!_.isEmpty(xhr_hash)) {
                var loc_hash = /#/.test(window.location.hash) ? window.location.hash.replace(/^.*#/i, '') : '';
                if (xhr_hash !== loc_hash) {
                    window.location.hash = xhr_hash;
                    console.log('#[Renative.UI] change location hash, xhr hash: ' + xhr_hash);
                }
                var offset = $('a[name=' + xhr_hash + ']').offset();
                if (offset) {
                    var top = $('a[name=' + xhr_hash + ']').offset().top - 0;
                    $('html, body').animate({ scrollTop: top }, 300);
                    console.log('#[Renative.UI] hash jumpping...: ' + xhr_hash);
                }
            }
        }
        UI.jump = jump;
        ;
        function modal(html, options) {
            Renative.Notify.npe();
            // set default region
            var region = options.region;
            if (_.isEmpty(region)) {
                region = Renative.config.defaultModalRegion;
            }
            var dom = $(html);
            dom.attr('region', region);
            var modalRegion = $(region);
            // set modal title
            var title = dom.data('title') || '';
            if (!_.isEmpty(title)) {
                console.log('#[Renative.UI] set modal title: [' + title + ']');
                modalRegion.find('.modal-title').text(title + '');
            }
            // set modal content
            modalRegion.find('.modal-body').empty().append(dom);
            // update modal region css
            var classes = 'modal-page ' + (dom.data('class') || '');
            modalRegion.removeClass().addClass(classes);
            // ui bindings
            UI.bind(region);
            // trigger region compiling
            $(document).trigger('bootstrap:region:compiling', region);
            UI.bootstrap(region, options);
            UI.renderCompleted();
            if (!modalRegion.find('.modal').hasClass('in')) {
                modalRegion.find('.modal').modal('show');
            }
        }
        UI.modal = modal;
        ;
    })(UI = Renative.UI || (Renative.UI = {}));
})(Renative || (Renative = {}));
/**
 * Created by jc on 1/16/15.
 */

var Renative;
(function (Renative) {
    var Uri;
    (function (Uri) {
        var Notify = Renative.Notify;
        function pushState() {
            if (Renative.runtime.pushStated) {
                return;
            }
            Renative.runtime.pushStated = true;
            // AX links events;
            $(document).on('click', "a[href]", function (e) {
                var el = $(e.currentTarget);
                var href = el.attr('href');
                var crossDomain = Uri.crossDomain(href);
                // a[data-confirm], a[data-method], a[data-remote],
                // a[data-disable-with], a[data-disable]
                if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey ||
                    !history.pushState || crossDomain ||
                    (!/^(http|\/)/i.test(href)) || el.attr('xhr') === 'no' ||
                    !_.isEmpty(el.attr('data-turbolinks-action')) ||
                    !_.isEmpty(el.attr('target')) || !_.isEmpty(el.data('method')) ||
                    !_.isEmpty(el.data('confirm')) || !_.isEmpty(el.data('remote')) ||
                    !_.isEmpty(el.data('disable')) || !_.isEmpty(el.data('disable-with'))) {
                    // add target="_blank"
                    if (crossDomain && _.isEmpty(el.attr('target'))) {
                        el.attr('target', '_blank');
                    }
                    // trigger url:changing
                    $(document).trigger("url:changing", [
                        href,
                        false,
                        crossDomain
                    ]);
                }
                else {
                    Renative.DOM.stopPropagation(e);
                    var options = {
                        region: el.attr('region'),
                        variant: el.attr('variant'),
                        modal: el.attr('modal') === "true",
                        nocache: el.attr('nocache') === "true"
                    };
                    if (options.modal) {
                        Uri.modal(href, options);
                    }
                    else {
                        Uri.navigate(href, options);
                    }
                }
            });
            // AX form events;
            $(document).on('submit', 'form', function (e) {
                var el = $(e.currentTarget);
                // verify google recaptcha filled
                // if (el.find('[name=g-recaptcha-response]').length > 0) {
                //   if (_.isEmpty(el.find('[name=g-recaptcha-response]').val())) {
                //     Notify.info('Please make sure you are not a robot and fill the recaptcha :-)');
                //     DOM.stopPropagation(e);
                //
                //     return false;
                //   }
                // }
                //without xhr or has target or action is a different domain
                if (el.attr('xhr') === 'no' ||
                    !_.isEmpty(el.attr('target')) ||
                    !history.pushState ||
                    Uri.crossDomain(el.attr('action'))) {
                    // trigger url:changing
                    $(document).trigger("url:changing", [
                        el.attr('action'),
                        false,
                        Uri.crossDomain(el.attr('action'))
                    ]);
                    return true;
                }
                Renative.DOM.stopPropagation(e);
                var options = {};
                options.method = (el.attr('method') + '').toUpperCase();
                options.region = el.attr('region');
                options.variant = el.attr('variant');
                options.nocache = el.attr('nocache') === "" ? options.method !== 'GET' : el.attr('nocache') === "true";
                // setup default variant
                if (_.isEmpty(options.variant)) {
                    options.variant = Renative.config.defaultVariant;
                }
                // setup default region
                if (_.isEmpty(options.region)) {
                    options.region = Renative.config.defaultRegion;
                }
                var path = el.attr('action') + '';
                var data = el.serialize();
                var uri = null;
                // build path
                if (options.method === 'GET') {
                    uri = Uri.buildUri(path, options.region, options.variant, data);
                }
                else {
                    uri = Uri.buildUri(path, options.region, options.variant);
                    options.data = data;
                    options.data._variant = options.variant;
                }
                // check if uri available
                if (!uri.available) {
                    return false;
                }
                // uri
                options.uri = uri;
                // AX xhr request
                options.href = uri.href;
                // xhr html with variant
                options.url = uri.url;
                Uri.load(options);
                return false;
            });
            console.log('#[Renative.Uri.pushState bootstrap] [done]');
        }
        Uri.pushState = pushState;
        function popState() {
            if (Renative.runtime.popStated) {
                return;
            }
            Renative.runtime.popStated = true;
            // pushState history
            $(window).bind('popstate', function (e) {
                console.log('#[Renative.Uri.popState event]:', e);
                if (Renative.runtime.loading === true) {
                    Renative.UI.stopRendering();
                    return;
                }
                var state = e.originalEvent.state || {};
                // Renative.Inspection.log('#[Renative.Uri.popstate] trigger', state);
                // avoid hash navigation trigger popstate
                if (!state.href && history.length > 0 && /#/.test(window.location.hash)) {
                    return;
                }
                // console.log('state', state, e);
                if (!state.href) {
                    state.href = window.location.href;
                }
                Renative.Inspection.log('#[Renative.Uri.popstate] popState', state);
                console.log('#[Renative.Uri.popState] popState:', state);
                // back to first page if nocache applied.
                if (state.nocache === true) {
                    setTimeout(function () { history.back(); }, 100);
                    return;
                }
                var options = _.clone(state);
                // set default region when partial region doesn't exist
                if (!options.region || $(options.region).length == 0) {
                    options.region = Renative.config.defaultRegion;
                    options.variant = Renative.config.defaultVariant;
                }
                if (!options.version) {
                    options.version = 0;
                }
                options.popstate = true;
                options.silent = false;
                options.backwards = options.version < Renative.runtime.history.version;
                if (_.isEmpty(options.cache_digest)) {
                    options.cache_digest = window.location.pathname + window.location.search;
                }
                // set runtime version to state version
                Renative.runtime.history.version = options.version;
                Renative.runtime.url = options.href;
                // find dom cache by url
                var cacheHtml = Renative.runtime.caches[options.cache_digest];
                if (!_.isEmpty(cacheHtml)) {
                    // since dom cache contains all defaultRegion html;
                    // change region to defaultRegion
                    options.region = Renative.config.defaultRegion;
                    options.force_compile = true;
                    // UI dispose
                    Renative.UI.dispose(options.region);
                    // UI modal dispose
                    Renative.UI.modalDispose(options.region);
                    Renative.runtime.stopRendering = false;
                    Renative.UI.render(cacheHtml, options);
                    $(document).trigger('xhr:url:changed', [options.href, { cache: true }]);
                }
                else {
                    Uri.navigate(options.href, options);
                }
            });
            console.log('#[Renative.Uri.popState bootstrap] [done]');
        }
        Uri.popState = popState;
        function crossDomain(url) {
            if (!/^http/i.test(url)) {
                return false;
            }
            var domain = window.location.protocol + '//' + window.location.hostname;
            if (url.substr(0, domain.length) === domain) {
                return false;
            }
            return true;
        }
        Uri.crossDomain = crossDomain;
        function buildUri(href, region, variant, data) {
            if (data === void 0) { data = null; }
            href += '';
            var available = false;
            var url, cache_digest, xhr_path, xhr_hash, loc_path, loc_hash, same;
            // check if is uri available;
            if (/^(http|\/)/i.test(href)) {
                available = true;
                xhr_path = href.split('#')[0];
                xhr_hash = /#/.test(href) ? href.replace(/^.+#/i, '') : '';
                loc_path = '';
                loc_hash = /#/.test(window.location.hash) ? window.location.hash.replace(/^.*#/i, '') : '';
                if (!/^http/i.test(href)) {
                    loc_path = window.location.pathname;
                    if (!_.isEmpty(window.location.search)) {
                        loc_path += window.location.search;
                    }
                }
                else {
                    loc_path = window.location.href.split('#')[0];
                }
                // setup default xhr_path
                if (_.isEmpty(xhr_path)) {
                    xhr_path = loc_path;
                }
                same = (xhr_path === loc_path) && (xhr_hash === loc_hash);
                console.log('#[Renative.Uri] route: [' + href + '] [same=' + (same) + '] [hash: xhr(' + xhr_hash + ')=loc(' + loc_hash + ')]');
                var path = xhr_path.split('?')[0];
                var search = '';
                if (/\?/.test(xhr_path)) {
                    search = xhr_path.replace(/^.*\?/i, '');
                }
                if (path === '') {
                    path = '/';
                }
                // default index
                if (/\/$/.test(path)) {
                    path += Renative.config.index;
                }
                // xhr html with variant
                url = [path.replace(/\.+$/, ''), '.html+', variant].join('');
                // update data query string
                if (data) {
                    if (search !== '') {
                        search += '&';
                    }
                    else {
                        search = "?";
                    }
                    search += data;
                }
                if (search !== '') {
                    url += ('?' + search);
                }
                cache_digest = xhr_path;
                if (/^(http)/i.test(xhr_path)) {
                    cache_digest = xhr_path.replace(/^http:\/\/(.[^\/]*)/i, '');
                }
                console.log('#[Renative.Uri]', [xhr_path, xhr_hash, search, region, variant, url]);
            }
            return {
                href: href,
                url: url,
                hash: xhr_hash,
                xhr_path: xhr_path,
                loc_path: loc_path,
                same: same,
                available: available,
                cache_digest: cache_digest
            };
        }
        Uri.buildUri = buildUri;
        function buildOptions(href, options) {
            if (options === void 0) { options = {}; }
            // setup default variant
            if (_.isEmpty(options.variant)) {
                options.variant = Renative.config.defaultVariant;
            }
            // setup default region
            if (_.isEmpty(options.region)) {
                options.region = Renative.config.defaultRegion;
            }
            // uri
            options.uri = Uri.buildUri(href, options.region, options.variant);
            // AX xhr request
            options.href = options.uri.href;
            // xhr html with variant
            options.url = options.uri.url;
            // same uri
            options.same = options.uri.same;
            // cache digest
            options.cache_digest = options.uri.cache_digest;
            return options;
        }
        Uri.buildOptions = buildOptions;
        function modal(href, options) {
            if (options === void 0) { options = {}; }
            // setup default variant
            if (_.isEmpty(options.variant)) {
                options.variant = Renative.config.defaultModalVariant;
            }
            // setup default region
            if (_.isEmpty(options.region)) {
                options.region = Renative.config.defaultModalRegion;
            }
            options = Uri.buildOptions(href, options);
            // check if uri available
            if (!options.uri.available) {
                return false;
            }
            // start nps
            Notify.nps();
            // UI dispose
            Renative.UI.dispose(options.region);
            // UI modal dispose
            $('.modal').not($(options.region).find('.modal')).modal('hide');
            // AX call
            Renative.Net.AX(options).then(function (response) {
                // skip ui render when redirecting...
                if (response.redirect && response.redirecting) {
                    return;
                }
                // stop rendering on error
                if (_.isEmpty(response.data)) {
                    return;
                }
                $(document).trigger('xhr:url:changed', [options.href, { modal: true }]);
                Renative.UI.modal(response.data, options);
            });
            return true;
        }
        Uri.modal = modal;
        ;
        function navigate(href, options) {
            if (options === void 0) { options = {}; }
            options = Uri.buildOptions(href, options);
            // check if uri available
            if (!options.uri.available) {
                return false;
            }
            // check if hash navigation
            if (!options.popstate && !options.silent && options.uri.xhr_path === options.uri.loc_path && !_.isEmpty(options.uri.hash)) {
                Renative.UI.jump(options.uri.hash);
                return false;
            }
            // no pushState just reload href
            if (!history.pushState || !Renative.runtime.pushStated) {
                console.log('#[Renative.Uri] Non pushState page loading...');
                // trigger url:changing
                $(document).trigger("url:changing", [
                    options.href,
                    false,
                    Uri.crossDomain(options.href)
                ]);
                window.location.href = options.href;
                return true;
            }
            else if (Renative.runtime.turbolinks) {
                console.log('#[Renative.Uri] switch to turbolinks...');
                Turbolinks.visit(options.href);
                return true;
            }
            Uri.load(options);
            return true;
        }
        Uri.navigate = navigate;
        function load(options) {
            var xhr_hash = options.uri.hash;
            // ??????????? need know the specific bug
            // trigger dispose:region event before change pushState
            // especially for angular dispose
            // ???????????
            // set default method
            if (_.isEmpty(options.method)) {
                options.method = "GET";
            }
            Renative.runtime.history.version += 1;
            Renative.runtime.history.urls.push('(' + Renative.runtime.history.version + '):[' + options.region + ']:' + options.url);
            var currentAXVersion = Renative.runtime.history.version;
            // set current options.version;
            options.version = Renative.runtime.history.version;
            console.log('#[Renative.Uri.load] popState:(false)', options);
            // update history state
            if (!options.silent && !options.popstate && !options.same && !options.nocache) {
                if (!Renative.runtime.popStated) {
                    Uri.popState();
                }
                // set current scrollTop
                var state = history.state || {};
                state.scroll = Renative.UI.markScrollTop();
                history.replaceState(state, "");
                history.pushState(options, "", options.href);
                console.log('#[Renative.Uri] pushState: (' + options.href + ')');
            }
            Renative.runtime.url = options.href;
            // log uri.load
            // Renative.Inspection.log('#[Renative.Uri.load]', Renative.runtime.url, options, xhr_hash);
            if (options.same && !_.isEmpty(xhr_hash)) {
                return Renative.UI.jump(xhr_hash);
            }
            // xhr call to get new page
            // trigger url:changing
            $(document).trigger("url:changing", [options.href, true, false]);
            // start nps
            Notify.nps();
            // UI dispose
            Renative.UI.dispose(options.region);
            // UI modal dispose
            Renative.UI.modalDispose(options.region);
            // UI loading
            if (!options.popstate && !options.same) {
                Renative.UI.loading();
            }
            // AX call
            Renative.Net.AX(options).then(function (response) {
                // skip ui render when redirecting...
                if (response.redirect && response.redirecting) {
                    return;
                }
                // stop rendering if error
                if (_.isEmpty(response.data)) {
                    Renative.UI.back();
                    return;
                }
                // avoid multiple click loading
                if (currentAXVersion === Renative.runtime.history.version) {
                    Renative.runtime.stopRendering = false;
                    Renative.UI.render(response.data, options);
                    Renative.UI.jump(xhr_hash);
                    $(document).trigger('xhr:url:changed', [options.href, { regular: true }]);
                }
                else {
                }
            });
        }
        Uri.load = load;
        ;
    })(Uri = Renative.Uri || (Renative.Uri = {}));
})(Renative || (Renative = {}));
var Renative;
(function (Renative) {
    var Device;
    (function (Device) {
        function desktop() {
            return !(("ontouchstart" in window) || (window['DocumentTouch'] && (document instanceof window['DocumentTouch'])));
        }
        Device.desktop = desktop;
        function inWechat() {
            return /micromessenger/i.test(navigator.userAgent);
        }
        Device.inWechat = inWechat;
        function inFacebook() {
            return /FBAV/i.test(navigator.userAgent);
        }
        Device.inFacebook = inFacebook;
        function ios() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
        }
        Device.ios = ios;
        function native_ios() {
            return /iOS:Guruin/i.test(navigator.userAgent);
        }
        Device.native_ios = native_ios;
        function native_android() {
            return /Android:GuruIn/i.test(navigator.userAgent);
        }
        Device.native_android = native_android;
    })(Device = Renative.Device || (Renative.Device = {}));
})(Renative || (Renative = {}));
var Renative;
(function (Renative) {
    var Base64;
    (function (Base64) {
        var PADCHAR = '=';
        var ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        function getbyte64(s, i) {
            var idx = ALPHA.indexOf(s.charAt(i));
            if (idx == -1) {
                throw "Cannot decode base64";
            }
            return idx;
        }
        function decode(s) {
            // convert to string
            s = "" + s;
            var pads, i, b10;
            var imax = s.length;
            if (imax == 0) {
                return s;
            }
            if (imax % 4 != 0) {
                throw "Cannot decode base64";
            }
            pads = 0;
            if (s.charAt(imax - 1) == PADCHAR) {
                pads = 1;
                if (s.charAt(imax - 2) == PADCHAR) {
                    pads = 2;
                }
                // either way, we want to ignore this last block
                imax -= 4;
            }
            var x = [];
            for (i = 0; i < imax; i += 4) {
                b10 = (getbyte64(s, i) << 18) | (getbyte64(s, i + 1) << 12) |
                    (getbyte64(s, i + 2) << 6) | getbyte64(s, i + 3);
                x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff));
            }
            switch (pads) {
                case 1:
                    b10 = (getbyte64(s, i) << 18) | (getbyte64(s, i + 1) << 12) | (getbyte64(s, i + 2) << 6);
                    x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
                    break;
                case 2:
                    b10 = (getbyte64(s, i) << 18) | (getbyte64(s, i + 1) << 12);
                    x.push(String.fromCharCode(b10 >> 16));
                    break;
            }
            return x.join('');
        }
        Base64.decode = decode;
        function getbyte(s, i) {
            var x = s.charCodeAt(i);
            if (x > 255) {
                throw "INVALID_CHARACTER_ERR: DOM Exception 5";
            }
            return x;
        }
        function encode(s) {
            if (arguments.length != 1) {
                throw "SyntaxError: Not enough arguments";
            }
            var i, b10;
            var x = [];
            // convert to string
            s = "" + s;
            var imax = s.length - s.length % 3;
            if (s.length == 0) {
                return s;
            }
            for (i = 0; i < imax; i += 3) {
                b10 = (getbyte(s, i) << 16) | (getbyte(s, i + 1) << 8) | getbyte(s, i + 2);
                x.push(ALPHA.charAt(b10 >> 18));
                x.push(ALPHA.charAt((b10 >> 12) & 0x3F));
                x.push(ALPHA.charAt((b10 >> 6) & 0x3f));
                x.push(ALPHA.charAt(b10 & 0x3f));
            }
            switch (s.length - imax) {
                case 1:
                    b10 = getbyte(s, i) << 16;
                    x.push(ALPHA.charAt(b10 >> 18) + ALPHA.charAt((b10 >> 12) & 0x3F) + PADCHAR + PADCHAR);
                    break;
                case 2:
                    b10 = (getbyte(s, i) << 16) | (getbyte(s, i + 1) << 8);
                    x.push(ALPHA.charAt(b10 >> 18) + ALPHA.charAt((b10 >> 12) & 0x3F) + ALPHA.charAt((b10 >> 6) & 0x3f) + PADCHAR);
                    break;
            }
            return x.join('');
        }
        Base64.encode = encode;
        ;
    })(Base64 = Renative.Base64 || (Renative.Base64 = {}));
})(Renative || (Renative = {}));
/*!
 * JavaScript Cookie v2.1.2
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
}(function () {
  function extend () {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[ i ];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }

  function init (converter) {
    function api (key, value, attributes) {
      var result;
      if (typeof document === 'undefined') {
        return;
      }

      // Write

      if (arguments.length > 1) {
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
          attributes.expires = expires;
        }

        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        if (!converter.write) {
          value = encodeURIComponent(String(value))
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }

        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);

        return (document.cookie = [
          key, '=', value,
          attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
          attributes.path    && '; path=' + attributes.path,
          attributes.domain  && '; domain=' + attributes.domain,
          attributes.secure ? '; secure' : ''
        ].join(''));
      }

      // Read

      if (!key) {
        result = {};
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling "get()"
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;

      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read ?
            converter.read(cookie, name) : converter(cookie, name) ||
            cookie.replace(rdecode, decodeURIComponent);

          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }

          if (key === name) {
            result = cookie;
            break;
          }

          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }

      return result;
    }

    api.set = api;
    api.get = function (key) {
      return api(key);
    };
    api.getJSON = function () {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};

    api.remove = function (key, attributes) {
      api(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.withConverter = init;

    return api;
  }

  return init(function () {});
}));

Renative.Cookies = Cookies.noConflict();
var Renative;
(function (Renative) {
    var Inspection;
    (function (Inspection) {
        function table_row(n, v, c) {
            if (c === void 0) { c = ''; }
            return '<tr class="' + c + '"><th class="hidden-xs debug-row-th">' + n + '</th><td><div class="visible-xs-block debug-row-th"><pre><code>' + n + '</code></pre></div>' + v + '</td></tr>';
        }
        function dump_object(o) {
            var row = [];
            row.push(o);
            if (_.isArray(o)) {
                var srow = [];
                for (var i = 0; i < o.length; i += 1) {
                    srow.push(dump_object(o[i]));
                }
                row.push('<div class="debug-sub-row-content">' + srow.join('<br>') + '</div>');
            }
            else if (_.isObject(o)) {
                var srow = [];
                for (var n in o) {
                    if (_.isObject(o[n])) {
                        srow.push('[' + n + ']: ');
                        srow.push('<div class="debug-sub-row-content">' + dump_object(o[n]) + '</div>');
                    }
                    else {
                        srow.push('[' + n + ']: ' + o[n]);
                    }
                }
                row.push('<div class="debug-sub-row-content">' + srow.join('<br>') + '</div>');
            }
            return row.join('<br>');
        }
        function log() {
            var body = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                body[_i - 0] = arguments[_i];
            }
            console.log(body[0], body.slice(1));
            Renative.runtime.logs.push({ t: (new Date()).toLocaleString(), b: body });
            Renative.runtime.logs.slice(100);
        }
        Inspection.log = log;
        function runtime() {
            var h = ['<table class="table table-bordered table-default">'];
            // runtime current url;
            h.push(table_row("runtime.url", Renative.runtime.url));
            // runtime bindings;
            h.push(table_row("runtime.bindings", _.keys(Renative.runtime.bindings).length));
            for (var k in Renative.runtime.bindings) {
                var bh = [];
                _.each(Renative.runtime.bindings[k], function (e) {
                    bh.push([e['eventType'], e['eventHandler'], '<textarea>' + e['selector'][0].outerHTML + '</textarea>'].join('<br>'));
                });
                h.push(table_row(k, bh.join('<br>')));
            }
            ;
            // runtime histories;
            h.push(table_row("runtime.history.version", Renative.runtime.history.version));
            h.push(table_row("runtime.history.urls", Renative.runtime.history.urls.join('<br>')));
            // runtime logs
            h.push(table_row("runtime.logs", Renative.runtime.logs.length, 'debug-sub-row'));
            for (var i = Renative.runtime.logs.length - 1; i >= 0; i -= 1) {
                var o = Renative.runtime.logs[i];
                h.push(table_row(o['t'], dump_object(o['b']), 'debug-sub-row'));
            }
            ;
            h.push('</table>');
            $('#debug #debug-renative-runtime').html(h.join(''));
        }
        Inspection.runtime = runtime;
        function javascript() {
            var h = ['<table class="table table-bordered table-default">'];
            var v = $('#debug-javascript-runtime-var').val();
            if (v === '') {
                return;
            }
            var o = eval(v);
            h.push(table_row(v, _.escape(o)));
            if (o && _.isObject(o)) {
                for (var n in o) {
                    h.push(table_row(n, _.escape(o[n])));
                }
            }
            $('#debug-javascript-runtime').html(h.join(''));
        }
        Inspection.javascript = javascript;
    })(Inspection = Renative.Inspection || (Renative.Inspection = {}));
})(Renative || (Renative = {}));
var Renative;
(function (Renative) {
    var I18n;
    (function (I18n) {
        var Message;
        (function (Message) {
            // TODO: get message from server;
            Message.H403 = "请求出错, 请刷新页面";
            Message.H422 = "您提交的数据不正确, 请重新尝试";
            Message.H500 = "处理请求中出错, 请重试";
        })(Message = I18n.Message || (I18n.Message = {}));
    })(I18n = Renative.I18n || (Renative.I18n = {}));
})(Renative || (Renative = {}));
var GuruIn;
(function (GuruIn) {
    var Service;
    (function (Service) {
        var I18n;
        (function (I18n) {
            var Message;
            (function (Message) {
                Message.I100 = "感谢您申请咕噜服务助手，请完善您的信息。";
                Message.I110 = "您的信息已经更新，感谢您申请咕噜服务助手服务。";
            })(Message = I18n.Message || (I18n.Message = {}));
        })(I18n = Service.I18n || (Service.I18n = {}));
    })(Service = GuruIn.Service || (GuruIn.Service = {}));
})(GuruIn || (GuruIn = {}));














var GuruIn;
(function (GuruIn) {
    var Plugins;
    (function (Plugins) {
        function _locate() {
            var geo_options = {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 27000
            };
            var deferred = $.Deferred();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject, geo_options);
            }
            else {
                deferred.reject(new Error('Your browser does not support Geo Location.'));
            }
            return deferred.promise();
        }
        ;
        function _updateUrlParameter(uri, key, value) {
            var i = uri.indexOf('#');
            var hash = i === -1 ? '' : uri.substr(i);
            uri = i === -1 ? uri : uri.substr(0, i);
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
            if (uri.match(re)) {
                uri = uri.replace(re, '$1' + key + "=" + value + '$2');
            }
            else {
                uri = uri + separator + key + "=" + value;
            }
            return uri + hash;
        }
        ;
        function _changeUrl(position) {
            var link = window.location.href;
            var changedLink = false;
            if (link.indexOf('lat=') > -1) {
                link = _updateUrlParameter(link, 'lat', position.coords.latitude);
                changedLink = true;
            }
            if (link.indexOf('lng=') > -1) {
                link = _updateUrlParameter(link, 'lng', position.coords.longitude);
                changedLink = true;
            }
            if (link.indexOf('poi=') > -1) {
                link = _updateUrlParameter(link, 'poi', '0');
                changedLink = true;
            }
            if (link.indexOf('page=') > -1) {
                link = _updateUrlParameter(link, 'page', '1');
                changedLink = true;
            }
            if (changedLink) {
                Turbolinks.visit(link, { action: 'replace' });
            }
            else {
                location.reload();
            }
        }
        ;
        function _changeMerchantUrlWhenFailed() {
            var link = window.location.href;
            var poiId = Renative.Cookies.get('poi');
            var switchDefault = true;
            if (poiId) {
                link = _updateUrlParameter(link, 'region_poi', poiId);
                switchDefault = false;
            }
            var lat = Renative.Cookies.get('lat');
            if (lat) {
                link = _updateUrlParameter(link, 'region_lat', lat);
                switchDefault = false;
            }
            var lng = Renative.Cookies.get('lng');
            if (lng) {
                link = _updateUrlParameter(link, 'region_lng', lng);
                switchDefault = false;
            }
            if (switchDefault) {
                link = _updateUrlParameter(link, 'region_poi', '2311');
            }
            window.location.href = link;
        }
        ;
        function _changeMerchantUrl(position) {
            var link = window.location.href;
            link = _updateUrlParameter(link, 'region_lat', position.coords.latitude);
            link = _updateUrlParameter(link, 'region_lng', position.coords.longitude);
            link = _updateUrlParameter(link, 'region_poi', '0');
            if (link.indexOf('page=') > -1) {
                link = _updateUrlParameter(link, 'page', '1');
            }
            window.location.href = link;
        }
        ;
        function _setMerchantPoiCookie(lat, lng) {
            Renative.Cookies.set('region_lat', lat, { expires: 15 / 60 / 24, path: '/' });
            Renative.Cookies.set('region_lng', lng, { expires: 15 / 60 / 24, path: '/' });
            Renative.Cookies.set('region_poi', "", { expires: 15 / 60 / 24, path: '/' });
        }
        ;
        function _setPoiCookie(lat, lng) {
            Renative.Cookies.set('lat', lat, { expires: 15 / 60 / 24, path: '/' });
            Renative.Cookies.set('lng', lng, { expires: 15 / 60 / 24, path: '/' });
            Renative.Cookies.set('poi', "", { expires: 15 / 60 / 24, path: '/' });
            _setMerchantPoiCookie(lat, lng);
        }
        ;
        function merchant_locate() {
            _locate().then(function (position) {
                $('#loading-location-text').text('我们已经获取了您的位置, 正在努力刷新页面...');
                postIPAndPoiRelation(position.coords.latitude, position.coords.longitude);
                GuruInGlobalMethod_sync_poi(0, position.coords.latitude, position.coords.longitude, 'geo', 0, function () {
                    _setMerchantPoiCookie(position.coords.latitude, position.coords.longitude);
                    Renative.Cookies.set('sfl', "1", { expires: 15 / 60 / 24, path: '/' });
                    _changeMerchantUrl(position);
                });
            }).fail(function (err) {
                $('#loading-location-text').text('很抱歉, 获取位置失败. 请手动点击按钮"获取我的位置"来切换城市.');
                Renative.Cookies.set('sfl', "1", { expires: 15 / 60 / 24, path: '/' });
                _changeMerchantUrlWhenFailed();
            });
        }
        Plugins.merchant_locate = merchant_locate;
        ;
        function home_locate(home) {
            if (home === void 0) { home = true; }
            _locate().then(function (position) {
                postIPAndPoiRelation(position.coords.latitude, position.coords.longitude);
                GuruInGlobalMethod_sync_poi(0, position.coords.latitude, position.coords.longitude, 'geo', (home ? 1 : 0), function () {
                    _setPoiCookie(position.coords.latitude, position.coords.longitude);
                    if (home) {
                        nativeHome(position.coords.latitude, position.coords.longitude);
                    }
                    Renative.Cookies.set('sfl', "1", { expires: 15 / 60 / 24, path: '/' });
                });
            }).fail(function (err) {
                Renative.Cookies.set('sfl', "1", { expires: 15 / 60 / 24, path: '/' });
            });
        }
        Plugins.home_locate = home_locate;
        ;
        function onLocate(done) {
            _locate().then(function (position) {
                postIPAndPoiRelation(position.coords.latitude, position.coords.longitude);
                GuruInGlobalMethod_sync_poi(0, position.coords.latitude, position.coords.longitude, 'geo', 0, function () {
                    done(position);
                    Renative.Cookies.set('sfl', "1", { expires: 15 / 60 / 24, path: '/' });
                });
            }).fail(function (err) {
                window.alert('获取您的位置失败了,请稍后再试.');
                Renative.Cookies.set('sfl', "1", { expires: 15 / 60 / 24, path: '/' });
            });
        }
        Plugins.onLocate = onLocate;
        ;
        function locate(start, done, errorFuc) {
            if (start) {
                start();
            }
            _locate().then(function (position) {
                postIPAndPoiRelation(position.coords.latitude, position.coords.longitude);
                if (done) {
                    done();
                }
                Renative.Cookies.set('sfl', "1", { expires: 15 / 60 / 24, path: '/' });
                if (window.location.href.indexOf('/merchants') > -1 || window.location.href.indexOf('/coupons') > -1) {
                    GuruInGlobalMethod_sync_poi(0, position.coords.latitude, position.coords.longitude, 'geo', 0, function () {
                        _changeMerchantUrl(position);
                    });
                }
                else {
                    GuruInGlobalMethod_sync_poi(0, position.coords.latitude, position.coords.longitude, 'geo', 1, function () {
                        _setPoiCookie(position.coords.latitude, position.coords.longitude);
                        _changeUrl(position);
                    });
                }
            }).fail(function (err) {
                window.alert('获取位置失败，可能是因为您在浏览器里禁用了位置功能，请进入浏览器『设置』里修改，或者在上方的地址窗口手动输入。');
                if (errorFuc) {
                    errorFuc();
                }
                Renative.Cookies.set('sfl', "1", { expires: 15 / 60 / 24, path: '/' });
            });
        }
        Plugins.locate = locate;
        ;
        function setLocation(lat, lng) {
            _setPoiCookie(lat, lng);
            GuruInGlobalMethod_sync_poi(0, lat, lng, 'native', 1, function () {
                _setPoiCookie(lat, lng);
            });
            postIPAndPoiRelation(lat, lng);
        }
        Plugins.setLocation = setLocation;
        ;
        function native_locate(eventName) {
            $(document).trigger('guruin:web:start:fetch:location', eventName);
            var fnm = window.location.href.indexOf('from_native_merchant=1') > -1;
            if (fnm) {
                $(document).trigger('guruin:native:start:fetch:merchant:location', eventName);
            }
            else {
                $(document).trigger('guruin:native:start:fetch:location', eventName);
            }
            return false;
        }
        Plugins.native_locate = native_locate;
        ;
        function getNativeLocationName(lat, lng) {
            _setPoiCookie(lat, lng);
        }
        Plugins.getNativeLocationName = getNativeLocationName;
        ;
        function postIPAndPoiRelation(lat, lng) {
            var url = '/poi-mapings?latitude=' + lat + '&longitude=' + lng;
            $.post(url);
        }
        Plugins.postIPAndPoiRelation = postIPAndPoiRelation;
        ;
        function nativeHome(lat, lng) {
            if (window.GuruInGlobalVar_nativeHomeLoading) {
                return;
            }
            window.GuruInGlobalVar_nativeHomeLoading = true;
            $.ajax('/location_address?lat=' + lat + '&lng=' + lng).done(function (data) {
                window.GuruInGlobalVar_nativeHomeLoading = false;
                var el = $(data);
                var location = el.find('#native-location');
                if (location.length > 0) {
                    var poiId = location.attr('poi-id');
                    var OldPoiId = $('#native-location').attr('poi-id');
                    if (poiId != OldPoiId) {
                        $('#native-location').replaceWith(location);
                    }
                }
                var mobile = el.find('#mobile-location');
                if (mobile.length > 0) {
                    var address = mobile.attr('poi-name');
                    if (address) {
                        $('#modal-location').find('mobile-autocomplete').find('input').attr('placeholder', address);
                        $('#modal-search').find('form:not(.search-keywords)').find('mobile-autocomplete').find('input').attr('placeholder', address);
                        $('#modal_lat_hid').val(lat);
                        $('#modal_lng_hid').val(lng);
                        $('#modal_poi_id_hid').val('0');
                    }
                }
            });
        }
        Plugins.nativeHome = nativeHome;
        ;
    })(Plugins = GuruIn.Plugins || (GuruIn.Plugins = {}));
})(GuruIn || (GuruIn = {}));
function GuruInGlobalMethod_GoogleMapInitialize() {
  var results = GuruInGlobalData_GoogleMapData;
  var map_div_id = GuruInGlobalData_GoogleMapViewId;
  if (!results || !results.map || !results.data || results.data.length <= 0) {
      return;
  }
  var googleMaps = google.maps || {};
  var markers = [];
  //create a infoWindow for all makers
  var infoWnd = new googleMaps.InfoWindow();
  //to control markers's visibility by data
  var markerController = new googleMaps.MVCObject();
  var mapCanvas;

  var locationClicked = function(){
      var id = $(this).attr("id");
      markerController.set("select", id);
  };

  // contructor
  var mapDiv = document.getElementById(map_div_id);
  mapCanvas = new googleMaps.Map(mapDiv);
  mapCanvas.setTilt(45);
  mapCanvas.setMapTypeId(googleMaps.MapTypeId.ROADMAP);
  mapCanvas.setOptions({maxZoom: 15});

  //iterate all locations to setup monitor
  for (var i = 0; i < results.data.length; ++i){
    var label = document.getElementById(results.data[i].id);
    if(label){
      googleMaps.event.addDomListener(label, "click", locationClicked)
    }
  }

  var bounds = new googleMaps.LatLngBounds();

  window['GuruInGlobalData_GoogleMapInfoWindow'] = infoWnd;
  window['GuruInGlobalData_GoogleMaps'] = googleMaps;
  window['GuruInGlobalData_GoogleMapMarkerController'] = markerController;
  window['GuruInGlobalData_GoogleMapMarkers'] = markers;

  for (var i = 0; i < results.data.length; ++i){
      var location = results.data[i];
      var latlng = new googleMaps.LatLng(location.latitude, location.longitude);
      bounds.extend(latlng);
      GuruInGlobalMethod_GoogleMapCreateMarker({
        map: mapCanvas,
        position: latlng,
        others: location,
        icon: {
          url: 'https://mt.google.com/vt/icon?psize=16&color=ffffffff&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=50&text='+ (i+1),
        }
      });
  }

  mapCanvas.fitBounds(bounds);
  window['GuruInGlobalData_GoogleMapCanvas'] = mapCanvas;
  window['GuruInGlobalData_GoogleMapBounds'] = bounds;

  if(GuruInGlobalMethod_CheckMiniArticlesPopup()){
    googleMaps.event.clearListeners(mapCanvas, 'tilesloaded');
    window['GuruInGlobalData_GoogleMapBindEvent'] = false;
    googleMaps.event.addListener(mapCanvas, 'tilesloaded', function() { console.log('tilesloaded'); GuruInGlobalVar_addMiniArticleMapListener();});
  }
};

function GuruInGlobalMethod_GoogleMapChangeMarkerVisibility() {
  var mapCanvas = window['GuruInGlobalData_GoogleMapCanvas'];
  var googleMaps = window['GuruInGlobalData_GoogleMaps'];
  var markers = window['GuruInGlobalData_GoogleMapMarkers']
  if (!mapCanvas || !googleMaps || !markers) {
    console.log('no map no google maps no markers');
    return;
  };

  var marker = this;
  var others = marker.get("others");
  var selectedValue = marker.get("select");
  if ( others.id == selectedValue ) {
    marker.setVisible(true);
    if(markers.length > 0){
      for(var i = 0; i < markers.length; i++){
        var o = markers[i].get("others");
        if(o.id == others.id){
          continue;
        }
        var pos = markers[i].getPosition();
        if(marker.getPosition().equals(pos)){
          markers[i].setVisible(false);
        }
      }
    }
    googleMaps.event.trigger(marker, "click");
    if ( mapCanvas ) {
      if(GuruInGlobalMethod_CheckMiniArticlesPopup()){
        window['GuruInGlobalData_ManuallyZoom'] = true;
        mapCanvas.setZoom(15);
        mapCanvas.panTo(marker.position);
      }else{
        mapCanvas.setZoom(15);
        mapCanvas.panTo(marker.position);
      }
    }
  }
};

function GuruInGlobalMethod_GoogleMapCreateMarker(params) {
  var infoWnd = window['GuruInGlobalData_GoogleMapInfoWindow'];
  var googleMaps = window['GuruInGlobalData_GoogleMaps'];
  var markerController = window['GuruInGlobalData_GoogleMapMarkerController'];
  var markers = window['GuruInGlobalData_GoogleMapMarkers'];
  if (!infoWnd || !googleMaps || !markerController || !markers) {
    console.log('no infoWnd or googleMaps');
    return;
  };

  var marker = new googleMaps.Marker(params);
  googleMaps.event.addListener(marker, "click", function() {
    var str = [];

    if ((params.others.url || "") != "") {
      str.push("<div class='info_content'>");
      str.push("<a href='" + params.others.url + "'>");

      if ((params.others.photo_url || "") != "") {
        str.push("<img src='" + params.others.photo_url +  "'></img>");
      }
      str.push("<h3>"+ (params.others.name || "") + "</h3>");
      str.push("</a>");
      str.push("<p>"+ (params.others.description || "") + "</p>");
      str.push("</div>");
    } else {
      // str.push("<a class='external' href='https://maps.google.com/?q="+ params.others.google_formatted_address +"'>");
      str.push("<div class='info_content'><h3>"+ (params.others.name || "") + "</h3>");
      str.push("<p>"+ (params.others.description || "") + "</p>");
      str.push("<a class='btn btn-default pull-left' href='javascript:;' onclick='GuruInGlobalMethod_FindPoiInArticle("+params.others.article_poi_relation_id+");'>查看文章</a>")
      str.push("<a class='btn btn-default pull-right external' href='https://maps.google.com/?q="+ params.others.google_formatted_address +"'>到这里去</a>")
      str.push("</div>");
      // str.push("</a>");
    }

    infoWnd.setContent(str.join(''));
    infoWnd.open(params.map, marker);
  });

  marker.bindTo("select", markerController, "select");
  console.log('create marker');
  googleMaps.event.addListener(marker, "select_changed", GuruInGlobalMethod_GoogleMapChangeMarkerVisibility);
  markers.push(marker);
  return marker;
};

function GuruInGlobalMethod_RedrawGoogleMapMarkers() {
  var results = GuruInGlobalData_GoogleMapData;
  var googleMaps = google.maps || {};
  var markers = [];
  var markerController = window['GuruInGlobalData_GoogleMapMarkerController'];
  var locationClicked = function(){
      var id = $(this).attr("id");
      markerController.set("select", id);
  };

  //iterate all locations to setup monitor
  for (var i = 0; i < results.data.length; ++i){
    var label = document.getElementById(results.data[i].id);
    if(label){
      googleMaps.event.addDomListener(label, "click", locationClicked)
    }
  }

  if (window['GuruInGlobalData_GoogleMapCanvas'] && window['GuruInGlobalData_GoogleMapBounds']) {
    var results = GuruInGlobalData_GoogleMapData;
    for (var i = 0; i < results.data.length; ++i){
      var location = results.data[i];
      var latlng = new googleMaps.LatLng(location.latitude, location.longitude);
      window['GuruInGlobalData_GoogleMapBounds'].extend(latlng);
      GuruInGlobalMethod_GoogleMapCreateMarker({
        map: window['GuruInGlobalData_GoogleMapCanvas'],
        position: latlng,
        others: location,
        icon: {
          url: 'https://mt.google.com/vt/icon?psize=16&color=ffffffff&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=50&text='+ (i+1),
        }
      });
    }
  };
};

function GuruInGlobalMethod_loadMaps(){
  url = "//maps.googleapis.com/maps/api/js?key="+ GURUIN_GOOGLE_BROWSER_API +"&sensor=false&callback=GuruInGlobalMethod_GoogleMapInitialize";

  if (typeof google === 'object' && typeof google.maps === 'object') {
    GuruInGlobalMethod_GoogleMapInitialize();
  }else{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
  }
};

function GuruInGlobalMethod_GoogleMapFitBounds() {
  Renative.tryCatch(function() {
    if (window['GuruInGlobalData_GoogleMapCanvas'] && window['GuruInGlobalData_GoogleMapBounds']) {
      window['GuruInGlobalData_GoogleMapCanvas'].fitBounds(window['GuruInGlobalData_GoogleMapBounds']);
    }
  }, '#[GuruInGlobalMethod_GoogleMapFitBounds] fitBounds:');
};

function GuruInGlobalMethod_FindPoiInArticle(article_poi_relation_id) {
  Renative.tryCatch(function() {
    $('#modal-article-map').modal('hide');
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
    if(GuruInGlobalMethod_CheckMiniArticlesPopup()){
      Turbolinks.visit('/mini-articles/' + article_poi_relation_id);
    }else{
      var scroll_height = $("a[data-article-poi-relation-id="+article_poi_relation_id+"]").offset().top-$(window).height()/2;
      $('html, body').animate({
          scrollTop: scroll_height
      }, 2000);
    }
  }, '#[GuruInGlobalMethod_FindPoiInArticle] FindPoiInArticle:');
};

function GuruInGlobalMethod_GoogleMapCurrentLocation() {
  Renative.Notify.info('正在获取您的当前位置...');
  Renative.tryCatch(function() {
    if (window['GuruInGlobalData_GoogleMapCurrentLocationMarker']) {
      window['GuruInGlobalData_GoogleMapCurrentLocationMarker'].setMap(null);
    }

    if (window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow']) {
      window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow'].close();
    }
  }, '#[GuruInGlobalMethod_GoogleMapCurrentLocation] cleanup current location map objects:');

  GuruIn.Plugins.onLocate(function(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    window['GuruInGlobalData_GoogleMapCurrentLocationMarker'] = new google.maps.Marker({
      position: latlng,
      animation: google.maps.Animation.BOUNCE,
      map: window['GuruInGlobalData_GoogleMapCanvas'],
      icon: {
        url: 'https://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-blue.png'
      }
    });
    window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow'] = new google.maps.InfoWindow({
      content: '我在这里...'
    });
    window['GuruInGlobalData_GoogleMapCanvas'].setZoom(15);
    window['GuruInGlobalData_GoogleMapCanvas'].panTo(latlng);

    window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow'].open(window['GuruInGlobalData_GoogleMapCanvas'], window['GuruInGlobalData_GoogleMapCurrentLocationMarker']);

    window['GuruInGlobalData_GoogleMapCurrentLocationMarker'].addListener('click', function() {
      window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow'].open(window['GuruInGlobalData_GoogleMapCanvas'], window['GuruInGlobalData_GoogleMapCurrentLocationMarker']);
    });
  });
};

function GuruInGlobalMethod_initAutocomplete() {
  var field = document.getElementById('activity_autocomplete');
  if(field != null){
    autocomplete = new google.maps.places.Autocomplete(field);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      var place = autocomplete.getPlace();
      if(place){
        $('#activity_autocomplete').val(place.formatted_address);

        $('#activity_autocomplete').trigger('input');

        if(navigator.userAgent.indexOf("MSIE")!=-1 || navigator.userAgent.indexOf("Trident")!=-1){
          $('#activity_autocomplete').trigger('change');
        }
      }
    });
  }
  field = document.getElementById('address_autocomplete');
  if(field != null){
    var article_id = $(field).data('article-id');
    autocomplete = new google.maps.places.Autocomplete(field);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      var place = autocomplete.getPlace();
      console.log(place);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
      if(place){
        $('#address_autocomplete').val(place.formatted_address);
        var obj = {};
        obj['location'] = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
        obj['address_components'] = place.address_components;
        obj['formatted_address'] = place.formatted_address;
        obj['source'] = 'jsapi'
        obj['place_id'] = place.place_id;
        obj['name'] = place.name;

        console.log(obj);

        $.ajax({
          url: '/articles/'+article_id+'/insert_address',
          type: 'post',
          dataType: 'json',
          data: {obj: obj, place_id: place.place_id},
          success: function(data){
            // $('#address_autocomplete').trigger('input');
            $('#modal-add-address').modal('hide');
            $('#address_autocomplete').val('');
            $('.item-article-content').trigger('select_address', { obj: obj, article_poi_relation_id: data.article_poi_relation_id, source: '#modal-add-address' });

            if(navigator.userAgent.indexOf("MSIE")!=-1 || navigator.userAgent.indexOf("Trident")!=-1){
              $('#address_autocomplete').trigger('change');
            }

          }
        });
      }
    });
  }

};

function GuruInGlobalMethod_loadGoogleAutocomplete(){
  var data_maps = $("#data_maps").val();
  url = "//maps.googleapis.com/maps/api/js?key=" + data_maps + "&signed_in=true&libraries=places&callback=GuruInGlobalMethod_initAutocomplete";
  if(typeof google === 'object' && typeof google.maps === 'object'){
    GuruInGlobalMethod_initAutocomplete();
  }else{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
  }
};

function GuruInGlobalMethod_loadMiniArticleMap(){
  if($('#mini-article-modal-dialog').length > 0){
    $('#modal-article-map').modal('show');
    return;
  }
  if(window['GuruInGlobalVar_loadMiniArticleMap']){
    return;
  }
  $('#modal-article-map').empty();
  window['GuruInGlobalVar_loadMiniArticleMap'] = true;
  var url = '/mini-articles/load_map_view' + window.location.pathname.replace('/mini-articles', '');
  if (window.location.href.indexOf('?') > -1){
    url = url + '?' + window.location.search.slice(1);
  }
  $.post(url).then(function(result){
    if(result){
      $('#modal-article-map').html(result);
      $('#modal-article-map').modal();
    }
    window['GuruInGlobalVar_loadMiniArticleMap'] = false;
  }, function(){
    window['GuruInGlobalVar_loadMiniArticleMap'] = false;
  });
};

function GuruInGlobalMethod_loadMiniArticleRelatedMap(id) {
  if($('#mini-article-modal-dialog').length > 0){
    var existingId = $('#modal-popup-map').attr('mini-article-id');
    if(typeof existingId != 'undefined' && existingId == id + "") {
      $('#modal-popup-map').modal('show');
      return;
    }
  }
  if(window['GuruInGlobalVar_loadMiniArticleRelatedMap']){
    return;
  }
  $('#modal-popup-map').empty();
  window['GuruInGlobalVar_loadMiniArticleRelatedMap'] = true;
  var url = '/mini-articles/' + id + '/load_related_map';
  $.get(url).then(function(result){
    if(result){
      $('#modal-popup-map').attr('mini-article-id', id);
      $('#modal-popup-map').html(result);
      $('#modal-popup-map').modal();
    }
    window['GuruInGlobalVar_loadMiniArticleRelatedMap'] = false;
  }, function(){
    window['GuruInGlobalVar_loadMiniArticleRelatedMap'] = false;
  });
};

function GuruInGlobalMethod_GoogleMapReCalculateMapViewportData() {
  if(!GuruInGlobalMethod_CheckMiniArticlesPopup()){
    return;
  }
  if(window['GuruInGlobalData_ManuallyZoom']){
    window['GuruInGlobalData_ManuallyZoom'] = false;
    return;
  }
  console.log('GuruInGlobalMethod_GoogleMapReCalculateMapViewportData');
  var newBounds = window['GuruInGlobalData_GoogleMapCanvas'].getBounds();
  var ne = newBounds.getNorthEast();
  var sw = newBounds.getSouthWest();

  var new_bounds = {
    bounds: {
      ne: {
        lat: ne.lat(),
        lng: ne.lng()
      },
      sw: {
        lat: sw.lat(),
        lng: sw.lng()
      }
    }
  };
  var url = '/mini-articles/bounding_box';
  if (window.location.href.indexOf('?') > -1){
    url = url + '?' + window.location.search.slice(1);
  }

  $.post(url, new_bounds, function(result) {
    if(result){
      window['GuruInGlobalData_GoogleMapData'] = {
        data: result.data,
        map: true
      };
      $('.article-map-pois').html(result.html_safe_string);
      GuruInGlobalMethod_DeleteGoogleMapMarkers(null);
      GuruInGlobalMethod_RedrawGoogleMapMarkers();
    };
  }, "json");
};

function GuruInGlobalMethod_CheckMiniArticlesPopup() {
  var miniArticles = (window.location.href.indexOf('/mini-articles') > -1);
  return miniArticles;
};

function GuruInGlobalMethod_DeleteGoogleMapMarkers(map) {
  var googleMaps = window['GuruInGlobalData_GoogleMaps'];
  var markers = window['GuruInGlobalData_GoogleMapMarkers'] || [];
  for (var i = 0; i < markers.length; i++) {
    googleMaps.event.clearListeners(markers[i], "select_changed");
    googleMaps.event.clearListeners(markers[i], "click");
    markers[i].setMap(map);
  };
  window['GuruInGlobalData_GoogleMapMarkers'] = [];
};

function GuruInGlobalVar_addMiniArticleMapListener() {
  if(window['GuruInGlobalData_GoogleMapBindEvent']){
    return;
  }
  console.log('GuruInGlobalVar_addMiniArticleMapListener fired.');
  var googleMaps = window['GuruInGlobalData_GoogleMaps'];
  var mapCanvas = window['GuruInGlobalData_GoogleMapCanvas'];
  googleMaps.event.addListener(mapCanvas, 'dragend', GuruInGlobalMethod_GoogleMapReCalculateMapViewportData);
  googleMaps.event.addListener(mapCanvas, 'zoom_changed', GuruInGlobalMethod_GoogleMapReCalculateMapViewportData);
  window['GuruInGlobalData_GoogleMapBindEvent'] = true;
};
!function(a,b,c){var d=a(b),e=d,f=b.devicePixelRatio||1,g=null,h=console&&console.log?function(a,b){console.log(a,b||"")}:a.noop;a.fn.smartify=function(i){var j=this,k={threshold:0,limit_retry:0,event:"scroll",effect:"fadeIn",container:b,src_attr:"sm-src",skip_invisible:!0,placeholder:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTEwNTEuMzYyMikiIC8+PC9zdmc+",appear:a.noop,load:a.noop};a.extend(k,i||{}),f>1&&(g=k.src_attr+"-"+(f>2?"3x":f>1.5?"2x":"1-5x")),null===g&&(g=k.src_attr),e=k.container===c||k.container===b?d:a(k.container);var l=function(){var b=0;j.each(function(){var c=a(this);if(!k.skip_invisible||c.is(":visible"))if(a.above_the_top(this,k.threshold)||a.left_of_begin(this,k.threshold));else if(a.below_the_fold(this,k.threshold)||a.right_of_fold(this,k.threshold)){if(++b>k.limit_retry)return!1}else c.trigger("appear"),b=0})},m=function(){var b=a.grep(j,function(a){return!(a.loaded||a.no_src_attr)});j=a(b)},n=function(a){var b=a.data("toggle-class"),c=a.data("add-class"),d=a.data("remove-class");b&&a.toggleClass(b),d&&a.toggleClass(d),c&&a.toggleClass(c)},o=function(b,c,d){var e=a(b),f=a.trim(e.attr(c.src_attr));e.attr(g)&&(f=a.trim(e.attr(g))),a("<img />").bind("load",function(){e.hide(),e.attr("src",f),e[c.effect](c.effect_speed),b.loaded=!0,d(),c.load(b,j,c)}).attr("src",f)},p=function(b,c,d){var e=a(b),f=a.trim(e.attr(c.src_attr));e.attr(g)&&(f=a.trim(e.attr(g))),e.on("load",function(){e[c.effect](c.effect_speed),b.loaded=!0,d(),c.load(b,j,c)}).attr("src",f)},q=function(b,c,d){var e=a(b),f=e.attr("href"),g=e.data("do"),h=e.data("target");if("callback()"===h)return n(e),b.loaded=!0,void d();if("parent()"===h?h=e.parent():h&&(h=a(h)),h.is("iframe"))h.attr(c.src_attr,f),p(h.get(0),c,d),n(h);else if(h.is("img"))h.attr(c.src_attr,f),o(h.get(0),c,d),n(h);else{var i={method:"GET",url:f,data:{}};a.ajax(i).done(function(a){"append"===g?h.appendChild(a):h.html(a),h[c.effect](c.effect_speed),n(h),b.loaded=!0,d(),c.load_target_and_smartify&&c.elements_selector&&h.find(c.elements_selector).smartify(k),c.load(b,j,c,a)}).fail(function(a,d){c.load(b,j,c,a,d)})}};return 0===k.event.indexOf("scroll")&&e.bind(k.event,function(){return l()}),this.each(function(){var b=this,c=a(b),d=a.extend({},k,c.data());d.threshold=parseInt(d.threshold),b.loaded=!1,b.no_src_attr=!1;var e=a.trim(c.attr("src"))||!1,f=a.trim(c.attr(d.src_attr))||!1,g=c.is("a"),i=c.is("img"),l=c.is("iframe");if(c.data("toggle-class")||c.data("add-class")||c.data("remove-class")){var r=d.load;d.load=function(a,b,d,e,f){r(a,b,d,e,f),n(c)}}return!i&&!l||e||c.attr("src",d.placeholder),!i&&!l||f?(c.one("appear",function(){this.loaded||(d.appear&&d.appear(b,j,d),i?o(b,d,m):g?c.data("target")?q(b,d,m):h('%cAn Anchor Tag must have defined data-target="" attribute to load response content in!',"color: #ff9900;"):l?p(b,d,m):(m(),d.load(b,j,d)))}),void(d.event.indexOf("scroll")&&c.bind(d.event,function(){b.loaded||c.trigger("appear")}))):(h("%cElement has no "+d.src_attr+" defined to load","color: #ff9900;"),b.no_src_attr=!0,void m())}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&d.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&j.each(function(){a(this).trigger("appear")})}),d.bind("resize orientationchange",l),a(b.document).ready(l),this};var i=function(){return"function"==typeof e.scrollTop?e.scrollTop():e.offset().top},j=function(){return"function"==typeof e.scrollLeft?e.scrollLeft():e.offset().left};a.below_the_fold=function(b,c){return e.height()+i()<=a(b).offset().top-c},a.right_of_fold=function(b,c){return e.width()+j()<=a(b).offset().left-c},a.above_the_top=function(b,c){return i()>=a(b).offset().top+c+a(b).height()},a.left_of_begin=function(b,c){return j()>=a(b).offset().left+c+a(b).width()},a.visible_in_viewport=function(b,c){return!(a.right_of_fold(b,c)&&a.left_of_begin(b,c)&&a.below_the_fold(b,c)&&a.above_the_top(b,c))},a.extend(a.expr[":"],{"visible-in-viewport":function(b){return a.visible_in_viewport(b,0)},"below-the-fold":function(b){return a.below_the_fold(b,0)},"above-the-top":function(b){return!a.below_the_fold(b,0)},"right-of-screen":function(b){return a.right_of_fold(b,0)},"left-of-screen":function(b){return!a.right_of_fold(b,0)}}),a.fn.smartify_section=function(b,c){var e={threshold:0,on_trigger:"visible",persist_trigger:!1,skip_invisible:!0,children_selector:".smartify-children"};a.extend(e,b||{}),this.each(function(){var b=a(this),f=a.extend({},e,b.data()),g=b.attr("href");g||(g=f.target);var h;h=g?a(g).find(f.children_selector):a(f.children_selector);var i=function(a){h.smartify(c),a.target&&d.scrollTop(d.scrollTop()+2)};"visible"===f.on_trigger?b.smartify({threshold:f.threshold,appear:i}):f.on_trigger&&(f.persist_trigger?b.on(f.on_trigger,i):b.one(f.on_trigger,i))})}}(jQuery,window);
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    }
    else if (typeof exports === 'object') {
        module.exports = factory();
    }
    else {
        root.Marquee3k = factory();
    }
}(this, function () {
    'use strict';
    var Marquee3k = (function () {
        function Marquee3k(element, options) {
            this.element = element;
            this.selector = options.selector;
            this.speed = element.dataset.speed || 0.25;
            this.pausable = element.dataset.pausable;
            this.reverse = element.dataset.reverse;
            this.paused = false;
            this.parent = element.parentElement;
            this.parentProps = this.parent.getBoundingClientRect();
            this.content = element.children[0];
            this.innerContent = this.content.innerHTML;
            this.wrapStyles = '';
            this.offset = 0;
            this._setupWrapper();
            this._setupContent();
            this._setupEvents();
            this.wrapper.appendChild(this.content);
            this.element.appendChild(this.wrapper);
        }
        Marquee3k.prototype._setupWrapper = function () {
            this.wrapper = document.createElement('div');
            this.wrapper.classList.add('marquee3k__wrapper');
            this.wrapper.style.whiteSpace = 'nowrap';
        };
        Marquee3k.prototype._setupContent = function () {
            this.content.classList.add(this.selector + "__copy");
            this.content.style.display = 'inline-block';
            this.contentWidth = this.content.offsetWidth;
            this.requiredReps = this.contentWidth > this.parentProps.width ? 2 : Math.ceil((this.parentProps.width - this.contentWidth) / this.contentWidth) + 1;
            for (var i = 0; i < this.requiredReps; i++) {
                this._createClone();
            }
            if (this.reverse) {
                this.offset = this.contentWidth * -1;
            }
            this.element.classList.add('is-init');
        };
        Marquee3k.prototype._setupEvents = function () {
            var _this = this;
            this.element.addEventListener('mouseenter', function () {
                if (_this.pausable)
                    _this.paused = true;
            });
            this.element.addEventListener('mouseleave', function () {
                if (_this.pausable)
                    _this.paused = false;
            });
        };
        Marquee3k.prototype._createClone = function () {
            var clone = this.content.cloneNode(true);
            clone.style.display = 'inline-block';
            clone.classList.add(this.selector + "__copy");
            this.wrapper.appendChild(clone);
        };
        Marquee3k.prototype.animate = function () {
            if (!this.paused) {
                var isScrolled = this.reverse ? this.offset < 0 : this.offset > this.contentWidth * -1;
                var direction = this.reverse ? -1 : 1;
                var reset = this.reverse ? this.contentWidth * -1 : 0;
                if (isScrolled)
                    this.offset -= this.speed * direction;
                else
                    this.offset = reset;
                this.wrapper.style.whiteSpace = 'nowrap';
                this.wrapper.style.transform = "translate(" + this.offset + "px, 0) translateZ(0)";
            }
        };
        Marquee3k.prototype._refresh = function () {
            this.contentWidth = this.content.offsetWidth;
        };
        Marquee3k.prototype.repopulate = function (difference, isLarger) {
            this.contentWidth = this.content.offsetWidth;
            if (isLarger) {
                var amount = Math.ceil(difference / this.contentWidth) + 1;
                for (var i = 0; i < amount; i++) {
                    this._createClone();
                }
            }
        };
        Marquee3k.refresh = function (index) {
            MARQUEES[index]._refresh();
        };
        Marquee3k.refreshAll = function () {
            for (var i = 0; i < MARQUEES.length; i++) {
                MARQUEES[i]._refresh();
            }
        };
        Marquee3k.init = function (options) {
            var _this = this;
            if (options === void 0) { options = { selector: 'marquee3k' }; }
            window.MARQUEES = [];
            var marquees = Array.from(document.querySelectorAll("." + options.selector));
            var previousWidth = window.innerWidth;
            var timer;
            for (var i = 0; i < marquees.length; i++) {
                var marquee = marquees[i];
                var instance = new Marquee3k(marquee, options);
                MARQUEES.push(instance);
            }
            animate();
            function animate() {
                for (var i = 0; i < MARQUEES.length; i++) {
                    MARQUEES[i].animate();
                }
                window.requestAnimationFrame(animate);
            }
            window.addEventListener('resize', function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    var isLarger = previousWidth < window.innerWidth;
                    var difference = window.innerWidth - previousWidth;
                    for (var i = 0; i < MARQUEES.length; i++) {
                        MARQUEES[i].repopulate(difference, isLarger);
                    }
                    previousWidth = _this.innerWidth;
                });
            }, 250);
        };
        return Marquee3k;
    })();
    return Marquee3k;
}));
var MiniArticlePopupMap;
(function (MiniArticlePopupMap) {
  MiniArticlePopupMap.loadMaps = function() {
    url = "//maps.googleapis.com/maps/api/js?key="+ GURUIN_GOOGLE_BROWSER_API +"&sensor=false&callback=MiniArticlePopupMap.initializeGoogleMaps";

    if (typeof google === 'object' && typeof google.maps === 'object') {
      MiniArticlePopupMap.initializeGoogleMaps();
    }else{
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.src = url;
      head.appendChild(script);
    }
  };

  MiniArticlePopupMap.initializeGoogleMaps = function() {
    var results = GuruInGlobalData_GoogleMapData_Mini;
    var map_div_id = GuruInGlobalData_GoogleMapViewId_Mini;
    if (!results || !results.map || !results.data || results.data.length <= 0) {
        return;
    }
    var googleMaps = google.maps || {};
    var markers = [];
    //create a infoWindow for all makers
    var infoWnd = new googleMaps.InfoWindow();
    //to control markers's visibility by data
    var markerController = new googleMaps.MVCObject();
    var mapCanvas;

    var locationClicked = function(){
        var id = $(this).attr("id");
        markerController.set("select", id);
    };

    // contructor
    var mapDiv = document.getElementById(map_div_id);
    mapCanvas = new googleMaps.Map(mapDiv);
    mapCanvas.setTilt(45);
    mapCanvas.setMapTypeId(googleMaps.MapTypeId.ROADMAP);
    mapCanvas.setOptions({maxZoom: 15});

    //iterate all locations to setup monitor
    for (var i = 0; i < results.data.length; ++i){
      var label = document.getElementById(results.data[i].id);
      if(label){
        googleMaps.event.addDomListener(label, "click", locationClicked)
      }
    }

    var bounds = new googleMaps.LatLngBounds();

    window['GuruInGlobalData_GoogleMapInfoWindow_Mini'] = infoWnd;
    window['GuruInGlobalData_GoogleMaps_Mini'] = googleMaps;
    window['GuruInGlobalData_GoogleMapMarkerController_Mini'] = markerController;
    window['GuruInGlobalData_GoogleMapMarkers_Mini'] = markers;

    for (var i = 0; i < results.data.length; ++i){
        var location = results.data[i];
        var latlng = new googleMaps.LatLng(location.latitude, location.longitude);
        bounds.extend(latlng);
        MiniArticlePopupMap.createMarker({
          map: mapCanvas,
          position: latlng,
          others: location,
          icon: {
            url: 'https://mt.google.com/vt/icon?psize=16&color=ffffffff&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=50&text='+ (i+1),
          }
        });
    }

    mapCanvas.fitBounds(bounds);
    window['GuruInGlobalData_GoogleMapCanvas_Mini'] = mapCanvas;
    window['GuruInGlobalData_GoogleMapBounds_Mini'] = bounds;

    googleMaps.event.clearListeners(mapCanvas, 'tilesloaded');
    window['GuruInGlobalData_GoogleMapBindEvent_Mini'] = false;
    googleMaps.event.addListener(mapCanvas, 'tilesloaded', function() { console.log('tilesloaded'); MiniArticlePopupMap.addListener();});
  };

  MiniArticlePopupMap.addListener = function() {
    if(window['GuruInGlobalData_GoogleMapBindEvent_Mini']){
      return;
    }
    console.log('MiniArticlePopupMap.addListener fired.');
    var googleMaps = window['GuruInGlobalData_GoogleMaps_Mini'];
    var mapCanvas = window['GuruInGlobalData_GoogleMapCanvas_Mini'];
    googleMaps.event.addListener(mapCanvas, 'dragend', MiniArticlePopupMap.reCalculateMapViewportData);
    googleMaps.event.addListener(mapCanvas, 'zoom_changed', MiniArticlePopupMap.reCalculateMapViewportData);
    window['GuruInGlobalData_GoogleMapBindEvent_Mini'] = true;
  };

  MiniArticlePopupMap.reCalculateMapViewportData = function() {
    if(window['GuruInGlobalData_ManuallyZoom_Mini']){
      window['GuruInGlobalData_ManuallyZoom_Mini'] = false;
      return;
    }
    console.log('MiniArticlePopupMap.reCalculateMapViewportData');
    var newBounds = window['GuruInGlobalData_GoogleMapCanvas_Mini'].getBounds();
    var ne = newBounds.getNorthEast();
    var sw = newBounds.getSouthWest();

    var new_bounds = {
      bounds: {
        ne: {
          lat: ne.lat(),
          lng: ne.lng()
        },
        sw: {
          lat: sw.lat(),
          lng: sw.lng()
        }
      }
    };
    var url = '/mini-articles/bounding_box';
    var lat = $('#popup_latitude').val();
    var lng = $('#popup_longitude').val();
    if(typeof lat != 'undefined' && typeof lng != 'undefined') {
      url = url + '?' + 'lat=' + lat + '&lng=' + lng;
    }

    $.post(url, new_bounds, function(result) {
      if(result){
        window['GuruInGlobalData_GoogleMapData_Mini'] = {
          data: result.data,
          map: true
        };
        $('.article-map-pois-mini').html(result.html_safe_string);
        MiniArticlePopupMap.deleteGoogleMapMarkers(null);
        MiniArticlePopupMap.redrawGoogleMapMarkers();
      };
    }, "json");
  };

  MiniArticlePopupMap.redrawGoogleMapMarkers = function() {
    var results = GuruInGlobalData_GoogleMapData_Mini;
    var googleMaps = google.maps || {};
    var markers = [];
    var markerController = window['GuruInGlobalData_GoogleMapMarkerController_Mini'];
    var locationClicked = function(){
        var id = $(this).attr("id");
        markerController.set("select", id);
    };

    //iterate all locations to setup monitor
    for (var i = 0; i < results.data.length; ++i){
      var label = document.getElementById(results.data[i].id);
      if(label){
        googleMaps.event.addDomListener(label, "click", locationClicked)
      }
    }

    if (window['GuruInGlobalData_GoogleMapCanvas_Mini'] && window['GuruInGlobalData_GoogleMapBounds_Mini']) {
      var results = GuruInGlobalData_GoogleMapData_Mini;
      for (var i = 0; i < results.data.length; ++i){
        var location = results.data[i];
        var latlng = new googleMaps.LatLng(location.latitude, location.longitude);
        window['GuruInGlobalData_GoogleMapBounds_Mini'].extend(latlng);
        MiniArticlePopupMap.createMarker({
          map: window['GuruInGlobalData_GoogleMapCanvas_Mini'],
          position: latlng,
          others: location,
          icon: {
            url: 'https://mt.google.com/vt/icon?psize=16&color=ffffffff&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=50&text='+ (i+1),
          }
        });
      }
    };
  };

  MiniArticlePopupMap.deleteGoogleMapMarkers = function(map) {
    var googleMaps = window['GuruInGlobalData_GoogleMaps_Mini'];
    var markers = window['GuruInGlobalData_GoogleMapMarkers_Mini'] || [];
    for (var i = 0; i < markers.length; i++) {
      googleMaps.event.clearListeners(markers[i], "select_changed");
      googleMaps.event.clearListeners(markers[i], "click");
      markers[i].setMap(map);
    };
    window['GuruInGlobalData_GoogleMapMarkers_Mini'] = [];
  };

  MiniArticlePopupMap.findPoiInArticle = function(article_poi_relation_id) {
    Renative.tryCatch(function() {
      $('#modal-popup-map').modal('hide');
      $('.modal-backdrop').remove();
      $('body').removeClass('modal-open');
      Turbolinks.visit('/mini-articles/' + article_poi_relation_id);
    }, '#[MiniArticlePopupMap.findPoiInArticle] FindPoiInArticle:');
  };

  MiniArticlePopupMap.createMarker = function(params) {
    var infoWnd = window['GuruInGlobalData_GoogleMapInfoWindow_Mini'];
    var googleMaps = window['GuruInGlobalData_GoogleMaps_Mini'];
    var markerController = window['GuruInGlobalData_GoogleMapMarkerController_Mini'];
    var markers = window['GuruInGlobalData_GoogleMapMarkers_Mini'];
    if (!infoWnd || !googleMaps || !markerController || !markers) {
      console.log('no infoWnd or googleMaps');
      return;
    };

    var marker = new googleMaps.Marker(params);
    googleMaps.event.addListener(marker, "click", function() {
      var str = [];

      if ((params.others.url || "") != "") {
        str.push("<div class='info_content'>");
        str.push("<a href='" + params.others.url + "'>");

        if ((params.others.photo_url || "") != "") {
          str.push("<img src='" + params.others.photo_url +  "'></img>");
        }
        str.push("<h3>"+ (params.others.name || "") + "</h3>");
        str.push("</a>");
        str.push("<p>"+ (params.others.description || "") + "</p>");
        str.push("</div>");
      } else {
        // str.push("<a class='external' href='https://maps.google.com/?q="+ params.others.google_formatted_address +"'>");
        str.push("<div class='info_content'><h3>"+ (params.others.name || "") + "</h3>");
        str.push("<p>"+ (params.others.description || "") + "</p>");
        str.push("<a class='btn btn-default pull-left' href='javascript:;' onclick='MiniArticlePopupMap.findPoiInArticle("+params.others.article_poi_relation_id+");'>查看文章</a>")
        str.push("<a class='btn btn-default pull-right external' href='https://maps.google.com/?q="+ params.others.google_formatted_address +"'>到这里去</a>")
        str.push("</div>");
        // str.push("</a>");
      }

      infoWnd.setContent(str.join(''));
      infoWnd.open(params.map, marker);
    });

    marker.bindTo("select", markerController, "select");
    console.log('create marker');
    googleMaps.event.addListener(marker, "select_changed", MiniArticlePopupMap.changeMarkerVisibility);
    markers.push(marker);
    return marker;
  };

  MiniArticlePopupMap.changeMarkerVisibility = function() {
    var mapCanvas = window['GuruInGlobalData_GoogleMapCanvas_Mini'];
    var googleMaps = window['GuruInGlobalData_GoogleMaps_Mini'];
    var markers = window['GuruInGlobalData_GoogleMapMarkers_Mini']
    if (!mapCanvas || !googleMaps || !markers) {
      console.log('no map no google maps no markers');
      return;
    };

    var marker = this;
    var others = marker.get("others");
    var selectedValue = marker.get("select");
    if ( others.id == selectedValue ) {
      marker.setVisible(true);
      if(markers.length > 0){
        for(var i = 0; i < markers.length; i++){
          var o = markers[i].get("others");
          if(o.id == others.id){
            continue;
          }
          var pos = markers[i].getPosition();
          if(marker.getPosition().equals(pos)){
            markers[i].setVisible(false);
          }
        }
      }
      googleMaps.event.trigger(marker, "click");
      if ( mapCanvas ) {
        window['GuruInGlobalData_ManuallyZoom_Mini'] = true;
        mapCanvas.setZoom(15);
        mapCanvas.panTo(marker.position);
      }
    }
  };

  MiniArticlePopupMap.fitBounds = function() {
    Renative.tryCatch(function() {
      if (window['GuruInGlobalData_GoogleMapCanvas_Mini'] && window['GuruInGlobalData_GoogleMapBounds_Mini']) {
        window['GuruInGlobalData_GoogleMapCanvas_Mini'].fitBounds(window['GuruInGlobalData_GoogleMapBounds_Mini']);
      }
    }, '#[MiniArticlePopupMap.fitBounds] fitBounds:');
  };

  MiniArticlePopupMap.currentLocation = function() {
    Renative.Notify.info('正在获取您的当前位置...');
    Renative.tryCatch(function() {
      if (window['GuruInGlobalData_GoogleMapCurrentLocationMarker_Mini']) {
        window['GuruInGlobalData_GoogleMapCurrentLocationMarker_Mini'].setMap(null);
      }

      if (window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow_Mini']) {
        window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow_Mini'].close();
      }
    }, '#[MiniArticlePopupMap.currentLocation] cleanup current location map objects:');

    GuruIn.Plugins.onLocate(function(position) {
      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      window['GuruInGlobalData_GoogleMapCurrentLocationMarker_Mini'] = new google.maps.Marker({
        position: latlng,
        animation: google.maps.Animation.BOUNCE,
        map: window['GuruInGlobalData_GoogleMapCanvas_Mini'],
        icon: {
          url: 'https://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-blue.png'
        }
      });
      window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow_Mini'] = new google.maps.InfoWindow({
        content: '我在这里...'
      });
      window['GuruInGlobalData_GoogleMapCanvas_Mini'].setZoom(15);
      window['GuruInGlobalData_GoogleMapCanvas_Mini'].panTo(latlng);

      window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow_Mini'].open(window['GuruInGlobalData_GoogleMapCanvas_Mini'], window['GuruInGlobalData_GoogleMapCurrentLocationMarker_Mini']);

      window['GuruInGlobalData_GoogleMapCurrentLocationMarker_Mini'].addListener('click', function() {
        window['GuruInGlobalData_GoogleMapCurrentLocationInfoWindow_Mini'].open(window['GuruInGlobalData_GoogleMapCanvas_Mini'], window['GuruInGlobalData_GoogleMapCurrentLocationMarker_Mini']);
      });
    });
  };
})(MiniArticlePopupMap || (MiniArticlePopupMap = {}));
;(function(exports) {

  var calendarGenerators = {
    google: function(event) {
      var startTime = moment.tz(event.start, event.timezone).format('YYYYMMDDTHHmmss');
      var endTime = moment.tz(event.end, event.timezone).format('YYYYMMDDTHHmmss');

      var href = encodeURI([
        'https://www.google.com/calendar/render',
        '?action=TEMPLATE',
        '&text=' + (event.title || ''),
        '&dates=' + (startTime || ''),
        '/' + (endTime || ''),
        '&ctz=' + (event.timezone || ''),
        '&details=' + (event.description || ''),
        '&location=' + (event.address || ''),
        '&sprop=&sprop=name:'
      ].join(''));
      return '<li><a target="_blank" href="' + href + '"><i class="fa fa-google"></i>Google 日历</a></li>';
    },

    yahoo: function(event) {
      // Remove timezone from event time
      var st = moment.tz(event.start, event.timezone).format('YYYYMMDDTHHmmZ');
      var et = moment.tz(event.end, event.timezone).format('YYYYMMDDTHHmmZ');

      var href = encodeURI([
        'http://calendar.yahoo.com/?v=60&view=d&type=20',
        '&title=' + (event.title || ''),
        '&st=' + st,
        '&et=' + et,
        '&desc=' + (event.description || ''),
        '&in_loc=' + (event.address || '')
      ].join(''));

      return '<li><a target="_blank" href="' + href + '"><i class="fa fa-yahoo"></i>Yahoo! 日历</a></li>';
    },

    ics: function(event, eClass, calendarName) {
      var startTime = moment.tz(event.start, 'UTC').format('YYYYMMDDTHHmmss') + 'Z';
      var endTime = moment.tz(event.end, 'UTC').format('YYYYMMDDTHHmmss') + 'Z';

      var href = encodeURI(
        'data:text/calendar;charset=utf8,' + [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'BEGIN:VEVENT',
          'URL:' + document.URL,
          'DTSTART:' + (startTime || ''),
          'DTEND:' + (endTime || ''),
          'SUMMARY:' + (event.title || ''),
          'DESCRIPTION:' + (event.description || ''),
          'LOCATION:' + (event.address || ''),
          'END:VEVENT',
          'END:VCALENDAR'].join('\n'));

      return '<li><a target="_blank" href="' + href + '"><i class="fa ' + eClass + '"></i>' + calendarName + ' 日历</a></li>';
    },

    ical: function(event) {
      return this.ics(event, 'fa-apple', 'iCal');
    },

    outlook: function(event) {
      return this.ics(event, 'fa-windows', 'Outlook');
    }
  };

  var generateCalendars = function(event) {
    return {
      google: calendarGenerators.google(event),
      yahoo: calendarGenerators.yahoo(event),
      ical: calendarGenerators.ical(event),
      outlook: calendarGenerators.outlook(event)
    };
  };

  // Make sure we have the necessary event data, such as start time and event duration
  var validParams = function(params) {
    return params.data !== undefined && params.data.start !== undefined;
  };

  var generateMarkup = function(calendars) {
    var result = document.createElement('span');

    var innerHTML = '<a aria-expanded="false" aria-haspopup="true" class="btn btn-default btn-sm"\
                          data-toggle="dropdown" href="javascript:;">\
                          <i class="fa fa-calendar-plus-o"></i>\
                          加入日历\
                        </a>';

    innerHTML += '<ul class="dropdown-menu right" aria-labelledby="add-to-calender">'
    Object.keys(calendars).forEach(function(services) {
      innerHTML += calendars[services];
    });
    innerHTML += '</ul>';

    result.innerHTML = innerHTML;

    result.className = 'add-to-calendar dropdown';
    return result;
  };

  exports.createCalendar = function(params) {
    if (!validParams(params)) {
      console.log('Event details missing.');
      return;
    }

    return generateMarkup(generateCalendars(params.data));
  };
})(this);

var ExternalService;
(function (ExternalService) {
  var Web;
  (function (Web) {
    Web.openMap = function(lat, lng, name, mapUrl){
      $(document).trigger('guruin:web:poi:openmap', [mapUrl]);
      $(document).trigger('guruin:native:poi:openmap', [lat, lng, name]);
    };

    Web.openEmail = function(email){
      $(document).trigger('guruin:web:open:email', [email]);
      $(document).trigger('guruin:native:open:email', [email]);
    };

    Web.openPhone = function(phone){
      $(document).trigger('guruin:web:open:phone', [phone]);
      $(document).trigger('guruin:native:open:phone', [phone]);
    };

    Web.openFreshStory = function(id, sourceUrl){
      if ( id && id != '0' ) {
        $.post( '/click_news/' + id );
      }
      $(document).trigger('guruin:web:news:open', [sourceUrl]);
      $(document).trigger('guruin:native:news:open', [sourceUrl]);
    };

    Web.syncNotification = function(){
      $.getJSON('/notifications/unread_count', function (data) {
        if(data && data.count && data.count > 0) {
          $('#responsive_notification_count').text(data.count);
          $(document).trigger('guruin:notification:unread:count', data.count);
        }
      });
    };

    Web.hideFeed = function(id){
      if(id && id != 0){
        $.post('/feeds/hide/' + id).done(function() {
          $('.feed-' + id).hide();
        })
        .fail(function(response) {
          var errorText = '隐藏时发生错误, 请稍后重试或者联系我们.';
          if(response && response.responseText){
            var error = JSON.parse(response.responseText);
            if(error && error.error){
              errorText = error.error;
            }
          }
          Renative.Notify.warn(errorText);
        });
      }
    };

    Web.hideAdvertisement = function(id, type, type_id){
      if(id && id != 0){
        $.post('/advertisements/hide/' + id).done(function() {
          $('.advertisement-' + id).hide();
        })
        .fail(function(response) {
          var errorText = '隐藏时发生错误, 请稍后重试或者联系我们.';
          if(response && response.responseText){
            var error = JSON.parse(response.responseText);
            if(error && error.error){
              errorText = error.error;
            }
          }
          Renative.Notify.warn(errorText);
        });
      }
    };

    Web.clickAdvertisement = function(id, url, type, type_id, new_window){
      if(id && id != 0){
        var post_url = '/advertisements/click/' + id;
        if(type_id){
          post_url += '?entity_type=' + type + '&entity_id=' + type_id;
        }
        $.post(post_url)
         .done(function() {})
         .fail(function() {});
      }
      if(url){
        if(new_window){
          window.open(url, '_blank');
        }else{
          Turbolinks.visit(url);
        }
      }
    };

    Web.showSearchModal = function(){
      if($('#modal-search-specific').hasClass('in')){
        return true;
      }
      $('.modal').modal('hide');
      $('.modal-backdrop').remove();
      $('body').removeClass('modal-open');
      $('#modal-search-specific').modal('show');
      return true;
    };

    Web.showLocationModal = function(){
      if($('#modal-location').hasClass('in')){
        return true;
      }
      $('.modal').modal('hide');
      $('.modal-backdrop').remove();
      $('body').removeClass('modal-open');
      $('#modal-location').modal({backdrop: 'static'});
      return true;
    };

    Web.fetchNativeCouponLocation = function(){
      GuruIn.Plugins.native_locate('guruin:location:fetch:withoutrefresh');
      Renative.Cookies.set('sfl', "1", { expires: 15 / 60 / 24, path: '/'});
    };

    Web.setNavigationRightBarButtonItem = function(){
      Guruin.appNativeMessage('setNavigationRightBarButtonItem', 'action');
    };

    Web.hideNavigationBar = function(){
      Guruin.appNativeMessage('hideNavigationBar');
    };

    Web.showNavigationBar = function(){
      Guruin.appNativeMessage('showNavigationBar');
    };

    Web.actionButtonClicked = function(){
      Guruin.appNativeMessage('showShareMenu', window['GuruInGlobalData_ShareGroups']);
    };

    Web.checkIfWechatInstalled = function(){
      Guruin.appNativeMessage('checkIfWechatInstalled');
    };

    Web.LandingPageLazyLoad = function(){
      $('.lazyload').smartify();
    };

    Web.AutoClicks = function() {
      var url = $('#auto-clicks-panel').data('url');
      if(url) {
        window.location.href = url;
      }
    };

    Web.showNotificationCount = function(count) {
      if (count > 0) {
        $('.notification-badge').text(count);
        $('.notification-badge').show();
      } else {
        $('.notification-badge').text('');
        $('.notification-badge').hide();
      }
    };

    Web.closeDiscoverModalMenu = function(){
      $('.modal').modal('hide');
      $('.modal-backdrop').remove();
      $('body').removeClass('modal-open');

      $('#modal-sign').modal('show');
    };

    Web.checkWechatLoginButton = function(wechatInstalled){
      if(wechatInstalled){
        $('.wechat-oauth-login-button').show();
      }else{
        $('.wechat-oauth-login-button').hide();
      }
    };

    Web.chooseList = function(){
      var selValue = $('input[name=select-category]:checked').val();
      if(selValue){
        $('#modal-create-listing').modal('hide');
        Turbolinks.visit("/listings/new?category_id=" + selValue);
      }
    };

    Web.chooseGroup = function(){
      var selValue = $('input[name=select-group]:checked').val();
      if(selValue){
        $('#modal-create-activity').modal('hide');
        Turbolinks.visit("/groups/" + selValue + "/activities/new");
      }
    };

    Web.navigationInitMiniArticle = function(){
      $(".swiper-cards .swiper-container").each(function(index, element){
        var $this = $(this);
        var swiper = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
            nextButton: $this.parents('.swiper-cards').find(".swiper-btn-next")[0],
            prevButton: $this.parents('.swiper-cards').find(".swiper-btn-prev")[0],
            breakpoints: {
              1199: {
                  slidesPerView: 3,
                  slidesPerGroup: 3
              },
              991: {
                  slidesPerView: 2,
                  slidesPerGroup: 2
              },
              560: {
                freeMode: true,
                slidesPerView: 'auto',
                CSSWidthAndHeight: true,
                slidesPerGroup: 1,
                spaceBetween: 15
              }
            }
        });
      });
      $('#campaign-radar .swiper-btn-prev').click();
    };

    Web.loadMiniArticle = function(id){
      var c = $('#category-' + id);
      if(c && c.hasClass('active')){
        return;
      }

      if(window.GuruInGlobalVar_loadMiniArticle){ return; }
      window.GuruInGlobalVar_loadMiniArticle = true;
      $.post('/load-mini-article?category=' + id).then(function(result){
        window.GuruInGlobalVar_loadMiniArticle = false;
        $('#mini-article-content').html(result);
        $('.campaign-tag').removeClass('active');
        c.addClass('active');
        ExternalService.Web.navigationInitMiniArticle();
        var link = $('#mini-articles-more-link').attr('ml');
        $('#mini-articles-more-link').attr('href', link + id);
      }, function(){
        window.GuruInGlobalVar_loadMiniArticle = false;
      });
    };

    Web.loadMerchants = function(id){
      var c = $('#category-' + id);
      if(c && c.hasClass('active')){
        return;
      }

      if(window.GuruInGlobalVar_loadMerchants){ return; }
      window.GuruInGlobalVar_loadMerchants = true;
      $.post('/load-merchant?category=' + id).then(function(result){
        window.GuruInGlobalVar_loadMerchants = false;
        $('#merchant-list').html(result);
        $('#campaign-merchants .campaign-tag').removeClass('active');
        c.addClass('active');
        $("#campaign-merchants.swiper-cards .swiper-container").each(function(index, element){
          var $this = $(this);
          var swiper = new Swiper(this, {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 4,
              nextButton: $this.parents('.swiper-cards').find(".swiper-btn-next")[0],
              prevButton: $this.parents('.swiper-cards').find(".swiper-btn-prev")[0],
              breakpoints: {
                1199: {
                  slidesPerView: 3,
                  slidesPerGroup: 3
                },
                991: {
                  slidesPerView: 2,
                  slidesPerGroup: 2
                },
                560: {
                  freeMode: true,
                  slidesPerView: 'auto',
                  CSSWidthAndHeight: true,
                  slidesPerGroup: 1,
                  spaceBetween: 15
                }
              }
          });
          swiper.update();
        });
        for(var i = 0; i < 4; ++i){
          $('#campaign-merchants .swiper-btn-prev').click();
        }
        var link = $('#merchant-more-link').attr('ml');
        $('#merchant-more-link').attr('href', link + id);
      }, function(){
        window.GuruInGlobalVar_loadMerchants = false;
      });
    };

    Web.loadTopMerchants = function(id) {
      var c = $('.category-' + id);
      if(c && c.hasClass('active')) {
        return;
      }
      if(window.GuruInGlobalVar_loadMerchants){ return; }
      window.GuruInGlobalVar_loadMerchants = true;
      var sort = $('.merchants-listing-section').data('sort');
      var pagesize = $('.merchants-listing-section').data('pagesize');
      $.post('/load-top-merchants?category=' + id + '&sort=' + sort + '&pagesize=' + pagesize).then(function(result){
        window.GuruInGlobalVar_loadMerchants = false;
        $('.merchants-listing-section').html(result);
        $('#campaign-top-agents .campaign-tag').removeClass('active');
        c.addClass('active');
        var link = $('.merchant-more-link').attr('ml');
        $('.merchant-more-link').attr('href', link + id);
        $(".swiper-cards .swiper-container").each(function(index, element){
          var $this = $(this);
          var swiper = new Swiper(this, {
              slidesPerView: 3,
              spaceBetween: 15,
              slidesPerGroup: 3,
              nextButton: $this.parents('.swiper-cards').find(".swiper-btn-next")[0],
              prevButton: $this.parents('.swiper-cards').find(".swiper-btn-prev")[0],
              breakpoints: {
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                }
              }
          });
          swiper.update();
        });
        for(var i = 0; i < 4; ++i){
          $('#campaign-top-agents .swiper-btn-prev').click();
        }
      }, function() {
        window.GuruInGlobalVar_loadMerchants = false;
      });
    };

    Web.loadFeedMerchants = function(id) {
      var c = $('.category-' + id);
      if(c && c.hasClass('active')) {
        return;
      }
      if(window.GuruInGlobalVar_loadMerchants){ return; }
      window.GuruInGlobalVar_loadMerchants = true;
      $.post('/load-feed-merchants?category=' + id).then(function(result){
        window.GuruInGlobalVar_loadMerchants = false;
        $('.merchants-listing-section').html(result);
        $('.swiper-recommend-merchants .campaign-tag').removeClass('active');
        c.addClass('active');
        $(".swiper-recommend-merchants .swiper-container").each(function(index, element){
          var $this = $(this);
          var swiper = new Swiper(this, {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 4,
              nextButton: $this.parents('.swiper-recommend-merchants').find(".swiper-btn-next")[0],
              prevButton: $this.parents('.swiper-recommend-merchants').find(".swiper-btn-prev")[0],
              breakpoints: {
                1199: {
                  slidesPerView: 3,
                  slidesPerGroup: 3
                },
                991: {
                  slidesPerView: 2,
                  slidesPerGroup: 2
                },
                560: {
                  freeMode: true,
                  slidesPerView: 'auto',
                  CSSWidthAndHeight: true,
                  slidesPerGroup: 1,
                  spaceBetween: 15
                }
              }
          });
          swiper.update();
        });
        for(var i = 0; i < 4; ++i){
          $('.swiper-recommend-merchants .swiper-btn-prev').click();
        }
        var link = $('.merchant-more-link').attr('ml');
        $('.merchant-more-link').attr('href', link + id);
      }, function(){
        window.GuruInGlobalVar_loadMerchants = false;
      });
    };

    Web.loadFreshStories = function(category_id, sort){
      var c = $('#news-' + sort);
      if(c && c.hasClass('active')){
        return;
      }

      if(window.GuruInGlobalVar_loadFreshStories){ return; }
      window.GuruInGlobalVar_loadFreshStories = true;
      $.post('/load-fresh-story?category=' + category_id + '&sort=' + sort).then(function(result){
        window.GuruInGlobalVar_loadFreshStories = false;
        $('#fresh-stories').html(result);
        $('#campaign-news .campaign-tag').removeClass('active');
        c.addClass('active');
        $(".swiper-cards .swiper-container").each(function(index, element){
          var $this = $(this);
          var swiper = new Swiper(this, {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 4,
              nextButton: $this.parents('.swiper-cards').find(".swiper-btn-next")[0],
              prevButton: $this.parents('.swiper-cards').find(".swiper-btn-prev")[0],
              breakpoints: {
                1199: {
                  slidesPerView: 3,
                  slidesPerGroup: 3
                },
                991: {
                  slidesPerView: 2,
                  slidesPerGroup: 2
                },
                560: {
                  freeMode: true,
                  slidesPerView: 'auto',
                  CSSWidthAndHeight: true,
                  slidesPerGroup: 1,
                  spaceBetween: 15
                }
              }
          });
          swiper.update();
        });
        $('#campaign-news .swiper-btn-prev').click();
        $('#campaign-news .swiper-btn-prev').click();
        var link = $('#fresh-story-more-link').attr('ml');
        $('#fresh-story-more-link').attr('href', link + '?sort=' + sort);
      }, function(){
        window.GuruInGlobalVar_loadFreshStories = false;
      });
    };

    Web.loadArticleCollectionSection = function(article_collection_id, section_id){
      var c = $('#section-' + section_id);
      if(c && c.hasClass('active')){
        return;
      }

      if(window.GuruInGlobalVar_loadArticleCollectionSection){ return; }
      window.GuruInGlobalVar_loadArticleCollectionSection = true;
      $.post('/load-article-collection-section?articlecollectionid=' + article_collection_id + '&sectionid=' + section_id).then(function(result){
        window.GuruInGlobalVar_loadArticleCollectionSection = false;
        $('#article-collection-section').html(result);
        $('#campaign-articles .campaign-tag').removeClass('active');
        c.addClass('active');
        $(".swiper-articles .swiper-container").each(function(index, element){
          var $this = $(this);
          var swiper = new Swiper(this, {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 2,
              breakpoints: {
                991: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 0
                }
              },
              nextButton: $this.parents('.swiper-articles').find(".swiper-btn-next")[0],
              prevButton: $this.parents('.swiper-articles').find(".swiper-btn-prev")[0]
          });
          swiper.update();
        });
        $('#campaign-articles .swiper-btn-prev').click();
        var link = $('#article-collection-more-link').attr('ml');
        $('#article-collection-more-link').attr('href', link + section_id);
      }, function(){
        window.GuruInGlobalVar_loadArticleCollectionSection = false;
      });
    };

    Web.initializeNormalLandingPage = function(){
      $('.campaign-side-sm').affix({
        offset: {
          top: function () {
            return (this.top = $('.campaign-section').outerHeight(true) - $('.campaign-section').height() + $('#header').outerHeight(true) + $('.campaign-hero').outerHeight(true) + $('.campaign-side-sm .campaign-sticky').outerHeight(true))
          },
          bottom: function () {
            return (this.bottom = 152 + ($('.campaign-section-footer').length > 0 ? $('.campaign-section-footer').outerHeight(true) : 0))
          }
        }
      });
      $('.campaign-side-sm').click(function() {
        if ($(this).hasClass('affix')) {
          $(this).find('.campaign-guide').toggleClass('open');
          $(this).find('.campaign-list').slideToggle();
        }
      });
      $('body').scrollspy({ target: '#campaign-spy' })
      var set_catalog = function() {
        var active_catalog = $('#campaign-spy li.active').html();
        $('.campaign-side-sm .campaign-catalog').html(active_catalog);
      }
      var set_affix = function() {
        var sticky_height = $('.campaign-side-sm.affix-top .campaign-sticky').outerHeight(true);
        $('.campaign-side-sm').on('affixed.bs.affix', function() {
          $('.campaign-article:first').css('margin-top', sticky_height);
        });
        $('.campaign-side-sm').on('affixed-top.bs.affix', function() {
          $('.campaign-article:first').css('margin-top', 0);
        });
      }
      set_catalog();
      set_affix();
      $( window ).scroll(function() {
        set_catalog();
      });
      $(window).resize(function() {
        set_affix();
        var bsAffix = $('.campaign-side-sm').data('bs.affix');
        if(bsAffix && bsAffix.options && bsAffix.options.offset){
          bsAffix.options.offset.top = $('.campaign-section').outerHeight(true) - $('.campaign-section').height() + $('#header').outerHeight(true) + $('.campaign-hero').outerHeight(true) + $('.campaign-side-sm .campaign-sticky').outerHeight(true);
        }
      });
    };

    Web.initializeOnepageLandingPage = function(){
      $('#campaign-spy .nav a').click(function() {
        if (window.innerWidth < 992) {
          Guruin.appNativeMessage('hideNavigationBar');
          var is_display = $(this).attr('href');
          $(this).parents('.campaign-side-sm').hide();
          $('.campaign-hero').hide();
          $('.campaign-nav-back').show();
          $('#header').hide().outerHeight('0');
          $('#footer').hide().outerHeight('0');
          $(is_display).show();
          $(is_display).parents('.campaign-paragraph').show();
        }
      });
      $('.campaign-nav-back .icon-back').click(function() {
        Guruin.appNativeMessage('showNavigationBar');
        $('.campaign-side-sm').show();
        $('.campaign-hero').show();
        $('.campaign-paragraph').hide();
        $('.campaign-nav-back').hide();
        $('.campaign-section.campaign-section-lg').css('margin-top', 0);
        $('#header').show().outerHeight('auto');;
        $('#footer').show().outerHeight('auto');;
      });
      $('.campaign-side-sm').affix({
        offset: {
          top: function () {
            return (this.top = $('.campaign-section').outerHeight(true) - $('.campaign-section').height() + $('#header').outerHeight(true) + $('.campaign-hero').outerHeight(true) + $('.campaign-side-sm .campaign-sticky').outerHeight(true))
          },
          bottom: function () {
            return (this.bottom = 152 + ($('.campaign-section-footer').length > 0 ? $('.campaign-section-footer').outerHeight(true) : 0))
          }
        }
      });
      $('.campaign-nav-back').affix({
        offset: {
          top: function () {
            return (this.top = $('#header').outerHeight(true))
          },
          bottom: function () {
            return (this.bottom = 152 + ($('.campaign-section-footer').length > 0 ? $('.campaign-section-footer').outerHeight(true) : 0))
          }
        }
      });
      $('.campaign-nav-back').on('affixed.bs.affix', function() {
        var sticky_height = $(this).outerHeight(true);
        $('.campaign-section.campaign-section-lg').css('margin-top', sticky_height);
      });
      $('.campaign-nav-back').on('affixed-top.bs.affix', function() {
        $('.campaign-section.campaign-section-lg').css('margin-top', 0);
      });
      $('body').scrollspy({ target: '#campaign-spy' });
      $(window).resize(function() {
        if (window.innerWidth < 992) {
          $(window).off('.affix');
        }
      });
    };

    Web.bindVideoModalShowEvent = function(v) {
      $(v).on('show.bs.modal', function(e){
        $('body').css("cssText", "position: relative !important;");
        if($('.campaign-affix').length > 0){
          $('.campaign-affix').css("cssText", "z-index: 10 !important;");
        }
      }).on('hidden.bs.modal', function(e){
        $('body').css("cssText", "");
        if($('.campaign-affix').length > 0){
          $('.campaign-affix').css("cssText", "");
        }
      });
    };

    Web.loadVideoFeed = function(id){
      var feedId = '#modal-video-' + id;
      if($(feedId).children().length > 0){
        $(feedId).modal();
        return;
      }
      if(window['GuruInGlobalVar_VideoFeedRequest']){
        return;
      }
      $(feedId).off('show.bs.modal');
      $(feedId).off('hidden.bs.modal');
      ExternalService.Web.bindVideoModalShowEvent(feedId);
      $(feedId).empty();
      window['GuruInGlobalVar_VideoFeedRequest'] = true;
      $.post('/utilities/videos/' + id).then(function(result){
        if(result){
          $(feedId).html(result);
          $(feedId).find('.lazyload').smartify({ skip_invisible: false });
          $('.campaign-side.affix').css('z-index', 3000);
          $(feedId).modal();
        }
        window['GuruInGlobalVar_VideoFeedRequest'] = false;
      }, function(){
        window['GuruInGlobalVar_VideoFeedRequest'] = false;
      });
    };

    Web.clodeVideoFeed = function(id){
      $('.modal').modal('hide');
      $('.modal-backdrop').remove();
      $('body').removeClass('modal-open');
      $('.campaign-side.affix').css('z-index', 99999);
    };

    Web.loadVideoAdvertisement = function(id){
      var advertisementId = '#modal-video-ad' + id;
      if($(advertisementId).children().length > 0){
        $(advertisementId).modal();
        return;
      }
      if(window['GuruInGlobalVar_VideoAdvertisementRequest']){
        return;
      }

      $(advertisementId).off('show.bs.modal');
      $(advertisementId).off('hidden.bs.modal');
      ExternalService.Web.bindVideoModalShowEvent(advertisementId);
      $(advertisementId).empty();
      window['GuruInGlobalVar_VideoAdvertisementRequest'] = true;
      $.post('/utilities/advertisements/videos/' + id).then(function(result){
        if(result){
          $(advertisementId).html(result);
          $(advertisementId).find('.lazyload').smartify({ skip_invisible: false });
          $('.campaign-side.affix').css('z-index', 3000);
          $(advertisementId).modal();
        }
        window['GuruInGlobalVar_VideoAdvertisementRequest'] = false;
      }, function(){
        window['GuruInGlobalVar_VideoAdvertisementRequest'] = false;
      });
    };

    Web.subjectFeedSwiderInitialize = function(){
      $(".swiper-cards-subject .swiper-container").each(function(index, element){
        var $this = $(this);
        var swiper = new Swiper(this, {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 3,
            nextButton: $this.parents('.swiper-cards').find(".swiper-btn-next")[0],
            prevButton: $this.parents('.swiper-cards').find(".swiper-btn-prev")[0],
            pagination: $this.parents('.swiper-cards').find(".swiper-pagination")[0],
            breakpoints: {
              1199: {
                slidesPerView: 3,
                slidesPerGroup: 3
              },
              991: {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              560: {
                freeMode: true,
                slidesPerView: 'auto',
                CSSWidthAndHeight: true,
                slidesPerGroup: 1,
                spaceBetween: 15
              }
            }
        });
      });
    };

    Web.dashang = function(selectorId, points) {
      var id = '#' + selectorId;
      if(points == 0) {
        points = parseInt($(id + ' input[name=points]').val());
        maxPoints = parseInt($(id + ' input[name=points]').attr('max'));
        if(points > maxPoints) {
          Renative.Notify.warn('你的咕噜币不足.');
          return;
        }
      }

      if(!(points > 0)) {
        Renative.Notify.warn('请填写你要打赏的咕噜币数目.');
        return;
      }

      var user_id = $(id + ' input[name=user_id]').val();
      var receive_user_id = $(id + ' input[name=receive_user_id]').val();
      var dashangable_type = $(id + ' input[name=dashangable_type]').val();
      var dashangable_id = $(id + ' input[name=dashangable_id]').val();
      if(window['GuruInGlobalVar_Dashang']){
        return;
      }
      window['GuruInGlobalVar_Dashang'] = true;

      $.post('/dashang', { dashang: {user_id: user_id, receive_user_id: receive_user_id, dashangable_type: dashangable_type, dashangable_id: dashangable_id, points: points }}).then(function(result){
        window['GuruInGlobalVar_Dashang'] = false;
        Renative.Notify.success('打赏成功, 我们正在刷新页面.');
        window.location.reload();
      }, function(httpResponse){
        window['GuruInGlobalVar_Dashang'] = false;
        Renative.Notify.error(httpResponse.data.error);
      });
    };

    Web.setCurrentSite = function(site) {
      $('.set-current-site').text(site);
    };
  })(Web = ExternalService.Web || (ExternalService.Web = {}));
})(ExternalService || (ExternalService = {}));
var PushNotification;

doTurbolinksBootstrap(function(){
  (function (PushNotification) {
    var Plugins;
    (function (Plugins) {
      Plugins.getLocalItem = function(key) {
        return localStorage.getItem(key)
      };

      Plugins.setLocalItem = function(key, value) {
        return localStorage.setItem(key, value)
      };

      Plugins.removeLocalItem = function(key) {
        return localStorage.removeItem(key)
      };

      Plugins.clearLocalItems = function() {
        return localStorage.clear();
      }

      Plugins.getNotificationInfo = function() {
        try {
          var info = JSON.parse(Plugins.getLocalItem('guruin.push.notification'));
          return info;
        } catch(e) { console.log(e); }

        return null;
      };

      Plugins.postMessageToServiceWorker = function(info) {
        var data = {}
        data.token = info.token;
        data.slug = 'WPN';
        data.identifier = GuruInGlobalVar_web_push_notification_identitier;
        data.applicationServerKey = Plugins.urlBase64ToUint8Array(GuruInGlobalVar_web_push_notification_key);
        if(navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage(data);
        }
      };

      Plugins.urlBase64ToUint8Array = function(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      };

      Plugins.parseBrowserNameAndVersion = function(){
        var ua=navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
          tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
          return {name:'IE ',version:(tem[1]||'')};
        }
        if(M[1]==='Chrome'){
          tem=ua.match(/\bOPR\/(\d+)/)
          if(tem!=null){
            return {name:'Opera', version:tem[1]};
          }
        }
        M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {
          M.splice(1,1,tem[1]);
        }
        return { name: M[0], version: M[1] };
      };

      Plugins.setNotificationInfo = function(info) {
        try {
          Plugins.setLocalItem('guruin.push.notification', JSON.stringify(info));
          Plugins.postMessageToServiceWorker(info);
        } catch (e) { console.log(e); }
      };

      Plugins.registerServiceWorker = function(workFile){
        return navigator.serviceWorker.register(workFile)
                        .then(function(registration){
                          return registration;
                        },function(err){
                          console.error(err);
                        });
      };

      Plugins.registerWebPushNotification = function(){
        return new Promise(function(resolve, reject){
          var permissionResult = Notification.requestPermission(function(result){
            resolve(result);
          });
          if(permissionResult){
            permissionResult.then(resolve, reject);
          }
        }).then(function(permissionResult){
          if(permissionResult != 'granted'){
            throw new Error('用户拒绝授权我们发送通知信息.');
          }
        });
      };

      Plugins.syncNotificationToServer = function(info) {
      	var needSync = false;
      	if(!info.sync) {
      		needSync = true;
      	}
      	if(GuruInGlobalVar_web_push_notification_identitier) {
      		if(typeof info.identifiers == 'undefined') {
      			needSync = true;
      		} else if(!info.identifiers.includes(GuruInGlobalVar_web_push_notification_identitier)) {
      			needSync = true;
      		}
      	}

      	if(!needSync) {
      		return;
      	}

      	var payload = { token: info.token, identifier: GuruInGlobalVar_web_push_notification_identitier };
        $.ajax({
          url: '/link-notification',
          dataType: 'json',
          contentType: 'application/json',
          type: 'post',
          data: JSON.stringify(payload),
          processData: false,
          success: function (response) {
          	if (response.success) {
  	          info.sync = true;
  	          if(info.identifiers && !info.identifiers.includes(GuruInGlobalVar_web_push_notification_identitier)) {
  	          	info.identifiers.push(GuruInGlobalVar_web_push_notification_identitier);
  	          } else {
  	          	info.identifiers = [GuruInGlobalVar_web_push_notification_identitier];
  	          }

  	          Plugins.setNotificationInfo(info);
  	        }
          },
          error: function (error) {
            console.log(error);
          }
        });
      };

      Plugins.subscribePushNotification = function(registration){
        var subscribeOptions = {
          userVisibleOnly: true,
          applicationServerKey: Plugins.urlBase64ToUint8Array(GuruInGlobalVar_web_push_notification_key)
        };

        return registration.pushManager.subscribe(subscribeOptions)
                .then(function(pushSubscription){
                  var browserInfo = Plugins.parseBrowserNameAndVersion();
                  var payload = { identifier: GuruInGlobalVar_web_push_notification_identitier, name: browserInfo.name, version: browserInfo.version, subscription: pushSubscription};
                  $.ajax({
  					        url: '/subscribe-notification',
  					        dataType: 'json',
  					        contentType: 'application/json',
  					        type: 'post',
  					        data: JSON.stringify(payload),
  					        processData: false,
  					        success: function (response) {
  					        	if (response.success) {
  						        	var info = {};
  						          info.sync = true;
  						          if(GuruInGlobalVar_web_push_notification_identitier) {
  						          	info.identifiers = [GuruInGlobalVar_web_push_notification_identitier];
  						          }
  						          info.token = pushSubscription.endpoint;

  						          Plugins.setNotificationInfo(info);
  						        }
  					        },
  					        error: function (error) {
  					          console.log(error);
  					        }
  					      });
                });
      };

      Plugins.register = function(){
        if(Renative.Device.inWechat() || Renative.Device.inFacebook()){
          return;
        }
        var existingInfo = Plugins.getNotificationInfo();
        if(existingInfo != null && existingInfo.token) {
          Plugins.syncNotificationToServer(existingInfo);
        }

        if (window && 'serviceWorker' in navigator) {
          navigator.serviceWorker.addEventListener('message', event => {
            console.log(event);
            if(event.data.slug == "newToken") {
              var info = Plugins.getNotificationInfo();
              if(info == null) {
                info = {};
              }
              info.token = event.data.token;
              info.sync = true;
              Plugins.setLocalItem('guruin.push.notification', JSON.stringify(info));
            }
          });

          if (existingInfo != null) {
            navigator.serviceWorker.register('/service-worker.js')
                                    .then(function() {
                                      Plugins.postMessageToServiceWorker(existingInfo);
                                    })
                                    .catch(function(error) {
                                      console.log(error);
                                    });
          } else {
            Plugins.registerWebPushNotification().then(function(){
              Plugins.registerServiceWorker('/service-worker.js');
              navigator.serviceWorker.ready.then(function(serviceWorkRegistration){
                Plugins.subscribePushNotification(serviceWorkRegistration);
              });
            }, function(err){
              console.log(err.message);
            });
          }
        }
      };
    })(Plugins = PushNotification.Plugins || (PushNotification.Plugins = {}));
  })(PushNotification || (PushNotification = {}));
}, 'push');
function GuruInGlobalMethod_shareButtonClick() {
  $(document).trigger('guruin:web:share:button:click');
  $(document).trigger('guruin:native:share:button:click');
  return false;
};

function GuruInGlobalMethod_ShareListButtonClick(id) {
  $(document).trigger('guruin:web:list:share:button:click', [id]);
  $(document).trigger('guruin:native:list:share:button:click', [id]);
  return false;
};

function GuruInGlobalMethod_shareLink( url ) {
  window.open( url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes' );
  var id = $( '#user_id_field' ).val();
  if ( id && id != '0' ) {
    $.post( '/share/' + id );
  }
  if($('.my-share.dropdown').length > 0){
    $('.my-share.dropdown').removeClass('open'); // substitute with your own selector
  }
  if($('#share_button').length > 0){
    $('#share_button').attr('aria-expanded', false); // substitute with your own selector
  }
  return false;
};

function GuruInGlobalMethod_ShareListButtonLink( url, id ) {
  window.open( url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes' );
  var userId = $( '#user_id_field_' + id ).val();
  if ( userId && userId != '0' ) {
    $.post( '/share/' + userId );
  }
  $('.dropdown.my-share-' + id).removeClass('open'); // substitute with your own selector
  $('#share_button_' + id).attr('aria-expanded', false); // substitute with your own selector
  return false;
};

function GuruInGlobalMethod_SetupWeixinShareJS(config, share_title, share_description, share_image, share_url){
  wx.config( config );
  wx.ready( function () {
    wx.onMenuShareTimeline( {
      title: share_title,
      desc: share_description,
      link: share_url,
      imgUrl: share_image,
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    } );

    wx.onMenuShareAppMessage( {
      title: share_title,
      desc: share_description,
      link: share_url,
      imgUrl: share_image,
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    } );

  } );
};

function GuruInGlobalMethod_UpdateWechatShareMeta() {
  if ( !Renative.Device.inWechat() ) {
    return;
  }

  var share_title = $( "meta[property='og:title']" ).attr( 'content' );
  var share_description = $( "meta[property='og:description']" ).attr( 'content' );
  var share_image = $( "meta[property='og:image']" ).attr( 'content' );
  var share_url = $( "meta[name=share_url]" ).attr( 'content' );

  if (/\?[a-z0-9]/i.test(share_url)) {
    share_url = share_url + '&scene=wechat';
  } else {
    share_url = share_url + '?scene=wechat';
  }

  $.ajax( {
    url: "/wechat_jsapi_config?url=" + encodeURIComponent( window.location.href.replace( /#.*$/, '' ) ),
    type: 'get',
    dataType: 'json',
    success: function ( c ) {
      var config = {
        debug: false,
        appId: c[ 'appId' ],
        timestamp: c[ 'timestamp' ],
        nonceStr: c[ 'nonceStr' ],
        signature: c[ 'signature' ],
        jsApiList: [
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "hideOptionMenu",
        "showOptionMenu",
        "showAllNonBaseMenuItem",
        "hideMenuItems",
        "scanQRCode"
        ]
      };
      if(typeof wx != 'undefined'){
      	GuruInGlobalMethod_SetupWeixinShareJS(config, share_title, share_description, share_image, share_url);
      }else{
      	var weixin_check_interval = setInterval(function(){
      		if(typeof wx != 'undefined'){
      			GuruInGlobalMethod_SetupWeixinShareJS(config, share_title, share_description, share_image, share_url)
      			clearInterval(weixin_check_interval);
      		}
      	}, 100);
      }
    }
  } );
}

function GuruInGlobalMethod_shareToFacebook(link){
  $(document).trigger('guruin:web:share:facebook', [link]);
  $(document).trigger('guruin:native:share:facebook', [link]);
  return false;
};

function GuruInGlobalMethod_shareToWeibo(link){
  $(document).trigger('guruin:web:share:weibo', [link]);
  $(document).trigger('guruin:native:share:weibo', [link]);
  return false;
}

function GuruInGlobalMethod_shareToWeChat(){
  $(document).trigger('guruin:web:share:wechat');
  $(document).trigger('guruin:native:share:wechat');
  return false;
};

function GuruinGlobalFunction_ChooseHotKeywords(url){
  $(document).trigger('guruin:native:closemodal:url', [encodeURI(url)]);
  $(document).trigger('guruin:mobile:closemodal:url', [url]);
};

function GuruinGlobalFunction_ChooseModalResult(suggestion, scope) {
  var obj = suggestion;
  if (typeof suggestion === 'string'){
    obj = JSON.parse(decodeURIComponent(suggestion));
  }
  angular.element(scope).scope().chooseModalResult(obj);
};

function GuruinGlobalFunction_ChooseLocation(suggestion, scope){
  var obj = suggestion;
  if (typeof suggestion === 'string'){
    obj = JSON.parse(decodeURIComponent(suggestion));
  }
  angular.element(scope).scope().chooseLocation(obj);
};

function GuruinGlobalFunction_ChooseDepartureAirport(airport, scope){
  var obj = airport;
  if (typeof airport === 'string'){
    obj = JSON.parse(decodeURIComponent(airport));
  }
  angular.element(scope).scope().ChooseDepartureAirport(obj);
};

function GuruinGlobalFunction_ChooseArrivalAirport(airport, scope){
  var obj = airport;
  if (typeof airport === 'string'){
    obj = JSON.parse(decodeURIComponent(airport));
  }
  angular.element(scope).scope().ChooseArrivalAirport(obj);
};

function GuruinGlobalFunction_InviteFriend(user, scope){
  var result = user;
  if (typeof user === 'string'){
    result = JSON.parse(decodeURIComponent(user));
  }
  angular.element(scope).scope().invite({ originalObject: { id: result.id, nickname: result.nickname,  photo_url: result.photo_url } });
};

function GuruInGlobalFunction_ReplaceSpecialCharacter(str){
  if(str){
    return str.replace('\'', '%27');
  }

  return str;
};

function GuruinGlobalFunction_BuildAutocompleteInviteFriendResult(dynamicHtmlSelect, element, outterScope){
  var html = [];
  html.push('<li class="dynamic-result-li">');
  html.push('<button class="btn btn-success btn-sm pull-right" onclick="');
  html.push(dynamicHtmlSelect + '');
  html.push('(\'' + GuruInGlobalFunction_ReplaceSpecialCharacter(encodeURIComponent(JSON.stringify(element))) + '\', \'' + outterScope + '\')">');
  html.push('邀请</button>');

  html.push('<a class="search-list-user" href="javascript:;" onclick="');
  html.push(dynamicHtmlSelect + '');
  html.push('(\'' + GuruInGlobalFunction_ReplaceSpecialCharacter(encodeURIComponent(JSON.stringify(element))) + '\', \'' + outterScope + '\')">');
  html.push('<div class="item-avatar"><span class="img-circle" style="background-image: url(\'');
  html.push(element.photo_url);
  html.push('\');"></span></div>');
  html.push(element.nickname);
  html.push('</a>')

  html.push('</li>');
  return html.join('');
};

function GuruinGlobalFunction_BuildAutocompletePlainResult(dynamicHtmlSelect, element, outterScope){
  var html = [];
  html.push('<li class="dynamic-result-li">');
  html.push('<a class="search-list-area" href="javascript:;" onclick="');
  html.push(dynamicHtmlSelect + '');
  html.push('(\'' + GuruInGlobalFunction_ReplaceSpecialCharacter(encodeURIComponent(JSON.stringify(element))) + '\', \'' + outterScope + '\')">');
  html.push(element.iata + ' - ' + element.city + ' - ' + element.country)
  html.push('</a>');
  html.push('</li>');
  return html.join('');
};

function GuruinGlobalFunction_BuildAutocompleteResultWithIcon(dynamicHtmlSelect, element, outterScope){
  var html = [];
  html.push('<li class="dynamic-result-li">');
  html.push('<a class="search-list-area" href="javascript:;" onclick="');
  html.push(dynamicHtmlSelect + '');
  html.push('(\'' + GuruInGlobalFunction_ReplaceSpecialCharacter(encodeURIComponent(JSON.stringify(element))) + '\', \'' + outterScope + '\')">');
  html.push('<span class="icon-wrap">');
  html.push('<span class="icon icon-' + element.slug + '">');
  html.push(element.type);
  html.push('</span>');
  html.push('</span>');
  html.push(element.name);
  html.push('</a>');
  html.push('</li>');
  return html.join('');
};
var GuruIn;
(function (GuruIn) {
    var Plugins;
    (function (Plugins) {
        function swiperInitialize(region) {
            $(region).find('.swiper-banner').each(function (i, e) {
                new Swiper(e, {
                    pagination: $(this).find('.swiper-pagination'),
                    paginationClickable: true,
                    nextButton: $(this).find('.swiper-button-next'),
                    prevButton: $(this).find('.swiper-button-prev'),
                    autoplay: 5000,
                    autoplayDisableOnInteraction: false,
                    loop: true
                });
            });
            $(region).find('.hero-gallery').each(function (i, e) {
                new Swiper(e, {
                    slidesPerView: 'auto'
                });
            });
            var setSwiper = function (Swiper) {
                if (window.matchMedia('(max-width: 559px)').matches) {
                    Swiper.params.spaceBetween = 20;
                    Swiper.params.slidesPerView = 1;
                    Swiper.params.slidesPerGroup = 1;
                }
                if (window.matchMedia('(min-width: 560px) and (max-width: 991px)').matches) {
                    Swiper.params.spaceBetween = 20;
                    Swiper.params.slidesPerView = 2;
                    Swiper.params.slidesPerGroup = 2;
                }
                if (window.matchMedia('(min-width: 992px) and (max-width: 1199px)').matches) {
                    Swiper.params.spaceBetween = 20;
                    Swiper.params.slidesPerView = 3;
                    Swiper.params.slidesPerGroup = 3;
                }
                if (window.matchMedia('(min-width: 1200px)').matches) {
                    Swiper.params.spaceBetween = 20;
                    Swiper.params.slidesPerView = 4;
                    Swiper.params.slidesPerGroup = 4;
                }
            };
            var swiper_activity = new Swiper('#swiper-activity', {
                nextButton: '#swiper-activity .swiper-button-next',
                prevButton: '#swiper-activity .swiper-button-prev',
                onInit: function (Swiper) {
                    setSwiper(Swiper);
                    Swiper.update();
                }
            });
            var swiper_group = new Swiper('#swiper-group', {
                nextButton: '#swiper-group .swiper-button-next',
                prevButton: '#swiper-group .swiper-button-prev',
                onInit: function (Swiper) {
                    setSwiper(Swiper);
                    Swiper.update();
                }
            });
            var swiper_article = new Swiper('#swiper-article', {
                nextButton: '#swiper-article .swiper-button-next',
                prevButton: '#swiper-article .swiper-button-prev',
                onInit: function (Swiper) {
                    setSwiper(Swiper);
                    Swiper.update();
                }
            });
            var swiper_area = new Swiper('#swiper-area', {
                nextButton: '#swiper-area .swiper-button-next',
                prevButton: '#swiper-area .swiper-button-prev',
                onInit: function (Swiper) {
                    setSwiper(Swiper);
                    Swiper.update();
                }
            });
            var swiper_city = new Swiper('#swiper-city', {
                nextButton: '#swiper-city .swiper-button-next',
                prevButton: '#swiper-city .swiper-button-prev',
                onInit: function (Swiper) {
                    setSwiper(Swiper);
                    Swiper.update();
                }
            });
            var swiper_state = new Swiper('#swiper-state', {
                nextButton: '#swiper-state .swiper-button-next',
                prevButton: '#swiper-state .swiper-button-prev',
                onInit: function (Swiper) {
                    setSwiper(Swiper);
                    Swiper.update();
                }
            });
            var swiper_attraction = new Swiper('#swiper-attraction', {
                nextButton: '#swiper-attraction .swiper-button-next',
                prevButton: '#swiper-attraction .swiper-button-prev',
                onInit: function (Swiper) {
                    setSwiper(Swiper);
                    Swiper.update();
                }
            });
            var swiper_campaign_image = new Swiper('.campaign-image .swiper-container', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });
            var swiper_campaign_gallery = new Swiper('.campaign-gallery .swiper-container', {
                centeredSlides: true,
                grabCursor: true,
                slidesPerView: 5,
                slideToClickedSlide: true
            });
            swiper_campaign_image.params.control = swiper_campaign_gallery;
            swiper_campaign_gallery.params.control = swiper_campaign_image;
            var swiper_merchant_cai = new Swiper('.campaign-card-cai .swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 15,
                nextButton: '.campaign-card-cai .swiper-btn-next',
                prevButton: '.campaign-card-cai .swiper-btn-prev',
                preloadImages: false,
                lazyLoading: true,
                watchSlidesVisibility: true
            });
            var swiper_merchant_photoes = new Swiper('.campaign-images .swiper-container', {
                nextButton: '.campaign-images .swiper-button-next',
                prevButton: '.campaign-images .swiper-button-prev',
                slidesPerView: 3,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                spaceBetween: 15,
                preloadImages: false,
                lazyLoading: true,
                watchSlidesVisibility: true
            });
            var swiper_hot_merchants = new Swiper('.campaign-card-hot-merchants .swiper-container', {
                slidesPerView: 4,
                slidesPerGroup: 4,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                spaceBetween: 15,
                nextButton: '.campaign-card-hot-merchants .swiper-btn-next',
                prevButton: '.campaign-card-hot-merchants .swiper-btn-prev',
                preloadImages: false,
                lazyLoading: true,
                watchSlidesVisibility: true,
                breakpoints: {
                    991: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 15
                    }
                }
            });
            var swiper_hot_merchants = new Swiper('.campaign-card-hot-coupons .swiper-container', {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 15,
                nextButton: '.campaign-card-hot-coupons .swiper-btn-next',
                prevButton: '.campaign-card-hot-coupons .swiper-btn-prev',
                preloadImages: false,
                lazyLoading: true,
                watchSlidesVisibility: true,
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 15,
                        autoHeight: true
                    }
                }
            });
            window.addEventListener('resize', function () {
                setSwiper(swiper_activity);
                setSwiper(swiper_group);
                setSwiper(swiper_article);
                setSwiper(swiper_area);
                setSwiper(swiper_city);
                setSwiper(swiper_state);
                setSwiper(swiper_attraction);
            });
            if ($(".swiper-cards .swiper-container").length > 0) {
                $(".swiper-cards .swiper-container").each(function (index, element) {
                    var $this = $(this);
                    var swiper = new Swiper(this, {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        slidesPerGroup: 4,
                        nextButton: $this.parents('.swiper-cards').find(".swiper-btn-next")[0],
                        prevButton: $this.parents('.swiper-cards').find(".swiper-btn-prev")[0],
                        breakpoints: {
                            1199: {
                                slidesPerView: 3,
                                slidesPerGroup: 3
                            },
                            991: {
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            },
                            560: {
                                freeMode: true,
                                slidesPerView: 'auto',
                                CSSWidthAndHeight: true,
                                slidesPerGroup: 1,
                                spaceBetween: 15
                            }
                        }
                    });
                });
            }
            if ($(".swiper-coupons .swiper-container").length > 0) {
                $(".swiper-coupons .swiper-container").each(function (index, element) {
                    var $this = $(this);
                    var swiper = new Swiper(this, {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        slidesPerGroup: 3,
                        autoHeight: true,
                        nextButton: $this.parents('.swiper-coupons').find(".swiper-btn-next")[0],
                        prevButton: $this.parents('.swiper-coupons').find(".swiper-btn-prev")[0],
                        breakpoints: {
                            1199: {
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            },
                            991: {
                                slidesPerView: 1,
                                slidesPerGroup: 1
                            },
                            560: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 0
                            }
                        }
                    });
                });
            }
            if ($(".swiper-ratings .swiper-container").length > 0) {
                $(".swiper-ratings .swiper-container").each(function (index, element) {
                    var $this = $(this);
                    var swiper = new Swiper(this, {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        slidesPerGroup: 3,
                        nextButton: $this.parents('.swiper-ratings').find(".swiper-btn-next")[0],
                        prevButton: $this.parents('.swiper-ratings').find(".swiper-btn-prev")[0],
                        breakpoints: {
                            1199: {
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            },
                            991: {
                                slidesPerView: 1,
                                slidesPerGroup: 1
                            },
                            560: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 0
                            }
                        }
                    });
                });
            }
        }
        Plugins.swiperInitialize = swiperInitialize;
    })(Plugins = GuruIn.Plugins || (GuruIn.Plugins = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        angular
            .module('GuruIn.App', [
            'ngResource',
            'ngSanitize',
            'blueimp.fileupload',
            'angucomplete-alt',
        ]).directive('ngAssign', function () {
            return {
                restrict: 'A',
                controller: [
                    '$scope', '$element', '$attrs', '$parse', function ($scope, $element, $attrs, $parse) {
                        var getter, setter, val, raw;
                        // Read value from ng-assign
                        if ($attrs.ngAssign === 'text') {
                            raw = $element.text();
                        }
                        else {
                            raw = $attrs[$attrs.ngAssign] || $attrs.value;
                        }
                        if ($attrs.encoding === 'base64') {
                            raw = Renative.Base64.decode(raw);
                        }
                        if ($attrs.format === 'json') {
                            val = angular.fromJson(raw || '{}');
                        }
                        else if ($attrs.format === 'number') {
                            val = raw - 0;
                        }
                        else if ($attrs.format === 'bool') {
                            val = (raw === 'true' || raw === '1');
                        }
                        else {
                            val = raw;
                        }
                        getter = $parse($attrs.ngModel || $attrs.ngBind);
                        setter = getter.assign;
                        setter($scope, val);
                    }
                ]
            };
        }).run(function ($compile, $rootScope, $document) {
            $document.on('bootstrap:region:delay:compiling', function (event, el, force_compile) {
                // console.log("#[GuruIn.App (angular)] bootstrap:region:delay:compiling");
                if (force_compile || !el.hasClass('ng-scope')) {
                    $compile(el)($rootScope);
                }
                // console.log("#[GuruIn.App (angular)] bootstrap:region:delay:compiled");
                $(document).trigger('bootstrap:region:delay:compiled', 'angular');
            });
            return $document.on('bootstrap:region:compiling', function (event, region, force_compile) {
                if (force_compile === void 0) { force_compile = false; }
                console.log("#[GuruIn.App (angular)] bootstrap:region:compiling (" + region + ")");
                angular.element(region).find('[ng-compile="true"]').each(function (i, e) {
                    var el = angular.element(e);
                    // not compiled
                    if (force_compile || !el.hasClass('ng-scope')) {
                        $compile(el)($rootScope);
                    }
                });
                angular.element(region).find('[ng-compile="delay"]').each(function (i, e) {
                    var a = angular.element(e);
                    var dt = a.attr('ng-delay') - 0;
                    Q.delay(dt).then(function () {
                        $(document).trigger('bootstrap:region:delay:compiling', [a, force_compile]);
                    });
                });
                console.log("#[GuruIn.App (angular)] bootstrap:region:compiled (" + region + ")");
                $(document).trigger('bootstrap:region:compiled', 'angular');
            });
        }).config([
            '$provide', function ($provide) {
                return $provide.decorator('$rootScope', [
                    '$delegate', function ($delegate) {
                        $delegate.safeApply = function (fn) {
                            var phase = $delegate.$$phase;
                            if (phase === "$apply" || phase === "$digest") {
                                if (fn && typeof fn === 'function') {
                                    fn();
                                }
                            }
                            else {
                                $delegate.$apply(fn);
                            }
                        };
                        return $delegate;
                    }
                ]);
            }
        ]);
        doTurbolinksBootstrap(function () {
            // only bootstrap once. The rest will be "bootstrapped" by the handler in run function.
            $(document).on('angular:bootstrap', function (e) {
                angular.bootstrap(document.body, ['GuruIn.App']);
                console.log("#[GuruIn.App (angular)] App bootstrap...");
            });
            $(document).on('angular:dispose', function (e) {
                var scope = angular.element(document.body).scope();
                if (scope) {
                    scope.$destroy();
                }
                console.log("#[GuruIn.App (angular)] dispose:rootScope");
            });
            $(document).on('dispose:region', function (event, region) {
                angular.element(region).find('.ng-scope').each(function (i, e) {
                    // console.log('#[GuruIn.App (angular)] $destroy scope: ', e, angular.element(e).scope());
                    var scope = angular.element(e).scope();
                    if (scope) {
                        scope.$destroy();
                    }
                });
                angular.element(region).find('.ng-isolate-scope').each(function (i, e) {
                    // console.log('#[GuruIn.App (angular)] $destroy scope: ', e, angular.element(e).scope());
                    var scope = angular.element(e).scope();
                    if (scope) {
                        scope.$destroy();
                    }
                });
                console.log("#[GuruIn.App (angular)] dispose:region (" + region + ")");
            });
            $(document).on('guruin:weekends:activities:rendering', function (e, el) {
                GuruInGlobalMethod_DynamicCompileContent('.campaign-section .container .row .col-md-8', el);
                GuruInGlobalMethod_LoadShareGroupsData();
            });
            $(document).on('guruin:articles:rendering', function (e, el) {
                GuruInGlobalMethod_DynamicCompileContent('.campaign-section .container .row .col-md-9', el);
                GuruInGlobalMethod_LoadShareGroupsData();
            });
            $(document).on('guruin:users:follow:rendering', function (e, el) {
                GuruInGlobalMethod_DynamicCompileContent('.col-md-9.item-list', el);
            });
            $(document).on('guruin:coupons:render', function (e, el) {
                GuruInGlobalMethod_DynamicCompileContent('#coupons_list', el);
            });
            $(document).on('guruin:news:list:rendering', function (e, el) {
                GuruInGlobalMethod_DynamicCompileContent('#news-list', el);
                GuruInGlobalMethod_LoadShareGroupsData();
            });
            $(document).on('guruin:question:answer:rendering', function (e, el) {
                GuruInGlobalMethod_DynamicCompileContent('#new_question_answer_panel', el);
            });
            $(document).on('guruin:share:menu:rendering', function (e, el) {
                GuruInGlobalMethod_LoadShareGroupsData();
            });
            $(document).on('guruin:feed:rendering', function (e, el) {
                GuruInGlobalMethod_LoadShareGroupsData();
                ExternalService.Web.subjectFeedSwiderInitialize();
            });
        }, 'guruin.app');
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
/**
 * Created by jc on 1/21/15.
 */

var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Notify;
        (function (Notify) {
            function Controller($scope) {
                var self = $scope;
                self.messages = [];
                self.timeout = function (message) {
                    message.animation = "animated fadeOutUp";
                    message.timeout = 0;
                };
                self.count_down = function () {
                    self.safeApply(function () {
                        if (self.timeoutHandler) {
                            clearTimeout(self.timeoutHandler);
                        }
                        _.each(self.messages, function (message) {
                            message.timeout -= 1;
                            if (message.timeout == 1) {
                                message.animation = "animated fadeOutUp";
                            }
                        });
                        self.messages = _.reject(self.messages, function (message) {
                            return message.timeout <= 0;
                        });
                        if (self.messages.length > 0) {
                            self.timeoutHandler = setTimeout(self.count_down, 1000);
                        }
                    });
                };
                $(document).on('dispose:region', function (event, region) {
                    if (self.timeoutHandler) {
                        clearTimeout(self.timeoutHandler);
                    }
                    self.safeApply(function () {
                        self.messages = [];
                    });
                });
                $(document).on('display:notify:message', function (e, message, message_class_name, timeout) {
                    // if (message_class_name === 'danger') {
                    //   timeout = 15;
                    // } else {
                    //   timeout = 5;
                    // }
                    self.safeApply(function () {
                        self.messages.push({
                            content: message,
                            class_name: "alert-" + message_class_name,
                            animation: "animated fadeInDown",
                            timeout: timeout
                        });
                    });
                    self.count_down();
                });
            }
            Notify.Controller = Controller;
            // module initialize
            angular
                .module('GuruIn.App')
                .controller('GuruIn.App.Notify', ['$scope', Controller]);
        })(Notify = App.Notify || (App.Notify = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
angular.module('GuruIn.App')
  .filter('gender', [function() {
    return function(gender) {
      if (gender == 'male') {
        return '帅欧巴';
      }

      if (gender == 'female') {
        return '萌妹子';
      }

      return '其他';
    }
  }]);
// moment.locale('zh-cn');

angular.module('GuruIn.App')
  .filter('momentDate', [function() {
    return function(t) {
      return moment(t, 'YYYY-MM-DD').format('MM/DD/YYYY');
    }
  }])
  .filter('moment', [function() {
    return function(t) {
      return moment(t, 'YYYY-MM-DDThh:mm:ss.SSS').format('MM/DD/YYYY HH:mm');
    }
  }]);
angular.module('GuruIn.App')
  .directive('addToCalendar', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        var myCalendar = createCalendar({data: scope.$eval(attrs.addToCalendar)});
        element.empty();
        element.append(myCalendar);
      }
    };
  });
angular.module('GuruIn.App')
  .directive('serverRepeat', function() {
    return {
      scope: true,
      controller: ['$scope', '$attrs', function($scope, $attrs) {
        var match                = $attrs.serverRepeat.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)$/);
        var memberIdentifier     = match[1];
        var collectionIdentifier = match[2];
        var member               = $scope[memberIdentifier] = { $$scope: $scope };
        var collection           = $scope.$parent[collectionIdentifier] || [];

        $scope.$parent[collectionIdentifier] = collection;

        $scope.$index  = collection.length;
        $scope.$first  = ($scope.$index === 0);
        $scope.$last   = false;
        $scope.$middle = false;
        $scope.$odd    = !($scope.$even = ($scope.$index&1) === 0);

        if ($scope.$first) {
          var removeWatcher = $scope.$parent.$watchCollection(collectionIdentifier, function(collection) {
            angular.forEach(collection, function(member) {
              member.$$scope.$last = (member.$$scope.$index === (collection.length - 1));
              member.$$scope.$middle = !(member.$$scope.$first || member.$$scope.$last);
            });
            removeWatcher();
          });
        }

        collection.push(member);

        this.setProperty = function(key, value) {
          member[key] = value;
        };

        this.setProperties = function(properties) {
          angular.extend(member, properties);
        };

        this.getProperty = function(key) {
          return member[key];
        };
      }]
    };
  })

  .directive('serverBind', function() {
    return {
      require: '^serverRepeat',
      restrict: 'A',
      link: function(scope, element, attrs, ngServerRepeatCtrl) {
        if (attrs.hasOwnProperty('serverRepeat')) {
          ngServerRepeatCtrl.setProperties(angular.fromJson(attrs.serverBind));
        } else {
          ngServerRepeatCtrl.setProperty(attrs.serverBind, element.text());
          element = element[0];

          scope.$watch(function() {
            return ngServerRepeatCtrl.getProperty(attrs.serverBind);
          }, function (value) {
            if (element.textContent === value) return;
            element.textContent = value === undefined ? '' : value;
          });
        }
      }
    };
  });
angular.module('GuruIn.App')
.directive('confirmClick', [
  function(){
    return {
      priority: -1,
      restrict: 'A',
      link: function(scope, element, attrs){
        element.bind('click', function(e){
          var message = attrs.confirmClick;
          if(message && !confirm(message)){
            e.stopImmediatePropagation();
            e.preventDefault();
          }
        });
      }
    }
  }
]);
angular.module('GuruIn.App')
.directive('datetimePicker', function($filter, modernizr) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var options = {
        format: 'm/d/Y H:i'
      };
      var minDate = elm.attr('min-date');

      if (minDate != '') {
        options['minDate'] = minDate;
      }

      var maxDate = elm.attr('max-date');
      if(maxDate != ''){
        options['maxDate'] = maxDate;
      }

      elm.attr('type', 'text').datetimepicker(options);

      // Reset default angular formatters/parsers for datetime-local
      ctrl.$parsers.length = 0;
      ctrl.$formatters.length = 0;

      ctrl.$parsers.push(function(data) {
        return data;
      });
      ctrl.$formatters.push(function(data) {
        return $filter('date')(data, 'MM/dd/yyyy HH:mm');
      });
    }
  };
})
.directive('datePicker', ['$filter', 'modernizr', function($filter, modernizr) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var options = {
        format: 'm/d/Y'
      };
      var minDate = elm.attr('min-date');

      if (minDate != '') {
        options['minDate'] = minDate;
      }

      elm.attr('type', 'text')
        .datetimepicker({
          format: 'm/d/Y',
          timepicker: false
        });

      // Reset default angular formatters/parsers for datetime-local
      ctrl.$parsers.length = 0;
      ctrl.$formatters.length = 0;

      ctrl.$parsers.push(function(data) {
        return data;
      });
      ctrl.$formatters.push(function(data) {
        return $filter('date')(data, 'MM/dd/yyyy');
      });
    }
  };
}])
.directive('timePicker', ['$filter', 'modernizr', function($filter, modernizr){
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl){
      elm.attr('type', 'text')
         .datetimepicker({
           format: 'H:i',
           datepicker: false
         });
      ctrl.$parsers.length = 0;
      ctrl.$formatters.length = 0;

      ctrl.$parsers.push(function(data){
        return data;
      });

      ctrl.$formatters.push(function(data){
        return $filter('date')(data, 'HH:mm');
      });
    }
  };
}]);
angular.module('GuruIn.App')
  .factory('MobileAutocompleteDataReceiver', function($http, $q, $timeout){
    var MobileAutocompleteDataReceiver = new Object();
    MobileAutocompleteDataReceiver.getData = function(url, parameters){
      var remoteData = $q.defer();
      var remoteUrl = url;
      if(parameters){
        if(remoteUrl.indexOf('?') > -1){
          remoteUrl = remoteUrl + '&' + $.param(parameters);
        }else{
          remoteUrl = remoteUrl + '?' + $.param(parameters);
        }
      }
      $http.get(remoteUrl).success(function(data){
        remoteData.resolve(data);
      });

      return remoteData.promise;
    };

    return MobileAutocompleteDataReceiver;
  });

  angular.module('GuruIn.App')
    .directive('mobileAutocomplete', ['$compile', 'MobileAutocompleteDataReceiver',function($compile, MobileAutocompleteDataReceiver) {
      var index = -1;

      return {
        restrict: 'E',
        scope: {
          remoteUrl: '@',
          remoteUrlRequestFormatter: '=',
          searchParam: '=ngModel',
          suggestions: '=data',
          onSelect: '=',
          autocompleteRequired: '=',
          focusMethod: '=',
          blurMethod: '=',
          dynamicResultBuilder: '@',
          callService: '@',
          useDynamicHtml: '@',
          searchResultPanelId: '@',
          dynamicHtmlSelect: '@',
          outterScope: '@',
          resultIndex: '@'
        },
        controller: ['$scope', function($scope){
          $scope.currentIndex = -1;
          $scope.initLock = true;
          $scope.searching = true;

          $scope.setIndex = function(i){
            $scope.currentIndex = parseInt(i);
          };

          this.setIndex = function(i){
            $scope.setIndex(i);
            $scope.$apply();
          };

          $scope.getIndex = function(i){
            return $scope.currentIndex;
          };

          var watching = true;

          $scope.completing = false;

          $scope.$watch('searchParam', function(newValue, oldValue){
            if(!$scope.callService){
              return;
            }
            if(oldValue === newValue || (!oldValue && $scope.initLock)){
              return;
            }

            if(watching && typeof $scope.searchParam !== 'undefined' && $scope.searchParam !== null){
              $scope.completing = true;
              $scope.searchFilter = $scope.searchParam;
              $scope.currentIndex = -1;
            }

            if($scope.searchParam && $scope.searchParam.length >= 2 && $scope.remoteUrl){
              $scope.onType($scope.searchParam);
            }else {
              $scope.clearResults();
            }
          });

          $scope.onType = function(typed){
            $scope.searching = true;
            var parameters = null;
            if($scope.remoteUrlRequestFormatter){
              parameters = $scope.remoteUrlRequestFormatter(typed);
            }

            var newData = MobileAutocompleteDataReceiver.getData($scope.remoteUrl, parameters);
            newData.then(function(data){
              $scope.suggestions = data;
              $scope.searching = false;
              if($scope.useDynamicHtml){
                $scope.buildResultHtml();
              }
            });
          };

          $scope.buildResultHtml = function(){
            if(!$scope.searchResultPanelId){
              $scope.searchResultPanelId = 'search_result_panel';
            }

            var resultUl = $('#' + $scope.searchResultPanelId).find('ul.search-list-auto');
            if(resultUl.length <= 0){
              return;
            }

            if($scope.suggestions == null || $scope.suggestions.length <= 0){
              resultUl.children('.dynamic-result-li').remove();
            }else{
              if(!$scope.dynamicHtmlSelect){
                $scope.dynamicHtmlSelect = 'GuruinGlobalFunction_ChooseModalResult';
              }
              if(!$scope.dynamicResultBuilder){
                $scope.dynamicResultBuilder = 'GuruinGlobalFunction_BuildAutocompleteResultWithIcon';
              }
              var html = [];
              $scope.suggestions.forEach(function(element) {
                html.push(window[$scope.dynamicResultBuilder]($scope.dynamicHtmlSelect, element, $scope.outterScope));
              });
              resultUl.children('.dynamic-result-li').remove();
              if($scope.resultIndex){
                resultUl.children(':nth-child(' + $scope.resultIndex + ')').after(html.join(''));
              }else{
                resultUl.prepend(html.join(''));
              }
            }
          };

          this.preSelect = function(suggestion){
            watching = false;

            $scope.$apply();

            watching = true;
          };
          $scope.preSelect = this.preSelect;

          this.preSelectOff = function(){
            watching = true;
          }
          $scope.preSelectOff = this.preSelectOff;

          $scope.select = function(suggestion){
            if(suggestion){
              $scope.searchParam = suggestion;
              $scope.searchFilter = suggestion;
              if($scope.onSelect){
                suggestion.originalObject = suggestion;
                $scope.onSelect(suggestion);
              }

              watching = false;
              $scope.completing = false;
              setTimeout(function(){watching = true;}, 1000);
              $scope.setIndex(-1);
            }
          };

          $scope.clearResults = function(){
            $scope.suggestions = [];
            $scope.searching = false;
            if($scope.useDynamicHtml){
              $scope.buildResultHtml();
            }
          };
        }],
        link: function(scope, element, attrs){

          setTimeout(function(){
            scope.initLock = false;
            scope.$apply();
          }, 250);

          var attr = '';

          scope.attrs = {
            'inputplaceholder': '',
            'inputtype': 'text',
            'divclass': 'searchbar-input',
            'id': '',
            'inputclass': '',
            'inputid': ''
          };

          for(var a in attrs){
            attr = a.replace('attr', '').toLowerCase();
            scope.attrs[attr] = attrs[a];
          }

          if(attrs.clickActivation){
            element[0].onclick = function(e){
              if(!scope.searchParam){
                setTimeout(function(){
                  scope.completing = true;
                  scope.$apply();
                }, 200);
              }
            };
          }

          var key = { left: 37, up: 38, right: 39, down: 40, enter: 13, esc: 27, tab: 9};
          element[0].addEventListener('keydown', function(e){
            var keycode = e.keyCode || e.which;

            switch(keycode){
              case key.esc:
                scope.select();
                scope.setIndex(-1);
                scope.$apply();
                e.preventDefault();
            }
          }, true);

          element[0].addEventListener('blur', function(e){
            setTimeout(function(){
              scope.select();
              scope.setIndex(-1);
              scope.clearResults();
              scope.$apply();
              if(scope.blurMethod){
                scope.blurMethod();
              }
            }, 1000);
          }, true);

          if(scope.focusMethod){
            var input_box = element[0].querySelector('input')
            if(input_box){
              input_box.addEventListener('focus', function(e){
                if(scope.focusMethod){
                  scope.focusMethod();
                }
                if(scope.searchParam && scope.searchParam.length >= 2 && scope.remoteUrl){
                  scope.onType(scope.searchParam);
                }
              });
            }
          }

          element[0].addEventListener('keydown', function(e){
            if(scope.focusMethod){
              scope.focusMethod();
            }
            var keycode = e.keyCode || e.which;

            var l = angular.element(this).find('li').length;
            if(!scope.completing || l == 0) return;

            switch(keycode){
              case key.up:
                index = scope.getIndex - 1;
                if(index < -1){
                  index = l - 1;
                }else if(index >= 1){
                  index = -1;
                  scope.setIndex(index);
                  scope.preSelectOff();
                  break;
                }
                scope.setIndex(index);

                if(index !== -1){
                  scope.preSelect(angular.element(angular.element(this).find('li')[index]).text());
                }

                scope.$apply();
                break;

              case key.down:
                index = scope.getIndex() + 1;
                if(index < -1){
                  index = l - 1;
                } else if (index >= 1){
                  index = -1;
                  scope.setIndex(index);
                  scope.preSelectOff();
                  scope.$apply();
                  break;
                }
                scope.setIndex(index);

                if(index !== -1){
                  scope.preSelect(angular.element(angular.element(this).find('li')[index]).text());
                }
                scope.$apply();
                break;

              case key.left:
                break;

              case key.right:
              case key.enter:
              case key.tab:
                index = scope.getIndex();
                if(index !== -1){
                  scope.select(angular.element(angular.element(this).find('li')[index]).text());
                  if(keycode == key.enter){
                    e.preventDefault();
                  }
                }else {
                  if(keycode == key.enter){
                    scope.select();
                  }
                }
                scope.setIndex(-1);
                scope.$apply();
                break;

              case key.esc:
                scope.select();
                scope.setIndex(-1);
                scope.$apply();
                e.preventDefault();
                break;

              default:
                return;
            }
          });
        },
        template: '\
        <div class="{{ attrs.divclass }}"> \
          <input \
            type="{{ attrs.inputtype }}" \
            ng-model="searchParam" \
            placeholder="{{ attrs.inputplaceholder }}" \
            class="{{ attrs.inputclass }}" \
            id="{{ attrs.inputid }}" \
            ng-required="{{ autocompleteRequired }}" \
            autocapitalize="off" autocomplete="off" autocorrect="off" /></div>'
      };
    }])
;
angular.module('GuruIn.App')
  .directive('ngImageLoaded', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('load', function() {
          scope.$apply(attrs.ngImageLoaded);
        });
      }
    }
  });

angular.module('GuruIn.App')
  .directive('ngTabLink', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function(e) {
          Renative.DOM.stopPropagation(e);
          Renative.UI.loading(true);

          var options = Renative.Uri.buildOptions(attrs.href);
          options.cache_digest = window.location.pathname + window.location.search;

          // AX call
          Renative.Net.AX(options).then(function(response) {
            // skip ui render when redirecting...
            if (response.redirect && response.redirecting) { return; }

            // stop rendering if error
            if (_.isEmpty(response.data)) {
              Renative.UI.back();
              return;
            }

            // avoid multiple click loading
            Renative.runtime.stopRendering = false;
            Renative.UI.render(response.data, options);
          });

          return false;
        });
      }
    }
  });
'use strict';

function parseDateTime(dateString) {
  return moment(dateString).toDate();
}

/**
 * @ngdoc directive
 * @name GuruinApp.directive:ngInitial
 * @description
 * # ngInitial
 */
angular.module('GuruIn.App')
  .directive('ngInitial', function ($filter, $log) {
    return {
      restrict: 'A',
      controller: [
        '$scope', '$element', '$attrs', '$parse', function($scope, $element, $attrs, $parse) {
          var getter, setter, val, filter;
          // Read value from ng-initial="value", or value="value", or element's inner text.
          val = ($attrs.ngInitial || $attrs.value || $element.text()).trim();
          filter = $attrs.ngInitialFilter;
          getter = $parse($attrs.ngModel || $attrs.ngBind);
          setter = getter.assign;
          // Parse data.
          if (val && filter) {
            try {
              val = $filter(filter)(val);
            } catch (e) {
              try {
                val = eval(filter)(val);
              } catch (e) {
                $log.warning(filter + ' does not exist!');
              }
            }
          }
          setter($scope, val);
        }
      ]
    };
  });
angular.module('GuruIn.App')
  .directive('inGallerySwipe', function (modernizr) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        if (modernizr.touch) {
          element.find('a.gallery-prev').addClass('gallery-prev-touch');
          element.find('a.gallery-next').addClass('gallery-next-touch');
          var el = element[0];
          Hammer(el).on("swipeleft", function() {
            $(el).animate({
              left: "-=20"
            },
            100,
            function() {
              $('#modal-gallery').trigger('view:photo:next');
            });
          });
          Hammer(el).on("swiperight", function() {
            $(el).animate({
              left: "+=20"
            },
            100,
            function() {
              $('#modal-gallery').trigger('view:photo:prev');
            });
          });
        }
      }
    };
  });
angular.module('GuruIn.App')
  .directive('textToLink', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        var html = element.html();
        element.html(Autolinker.link( html ));
      }
    };
  })
  .directive('scrollOnClick', function() {
    return {
      restrict: 'A',
      link: function(scope, $elm, attrs) {
        var idToScroll = attrs.scrollTo;
        $elm.on('click', function(e) {
          Renative.DOM.stopPropagation(e);
          var $target;
          if (idToScroll) {
            $target = $(idToScroll);
          } else {
            $target = $elm;
          }
          if($target && $target.offset()){
            $("html, body").stop().animate({scrollTop: $target.offset().top}, "slow");

            if (window.innerWidth < 992) {
              $("html, body").stop().animate({scrollTop: $target.offset().top}, "slow");
            }
          }
        });
      }
    }
  });
angular.module('GuruIn.App')
.provider('modernizr', function() {
  this.$get = function () {
    return Modernizr || {};
  };
});
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Resources;
        (function (Resources) {
            'use strict';
            var Notify = Renative.Notify;
            var updateAction = {
                method: 'PUT',
                isArray: false
            };
            function railsResource($resource, url, additionalActions, paramDefaults) {
                if (!paramDefaults) {
                    paramDefaults = { id: '@id' };
                }
                var actions = angular.extend({ update: updateAction }, additionalActions);
                return $resource(url, paramDefaults, actions);
            }
            Resources.railsResource = railsResource;
            function railsError(e) {
                var message = [];
                if (e.status === 422) {
                    if (e.data) {
                        for (var f in e.data) {
                            message.push("[" + f + "]: " + e.data[f].join(', '));
                        }
                    }
                    if (message.length === 0) {
                        message.push(Renative.I18n.Message.H422);
                    }
                }
                else {
                    message.push(Renative.I18n.Message.H500);
                }
                Notify.error(message.join('<br>'));
            }
            Resources.railsError = railsError;
        })(Resources = App.Resources || (App.Resources = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Activity;
            (function (Activity_1) {
                var R = GuruIn.App.Resources;
                var Notify = Renative.Notify;
                var memberAction = {
                    method: 'POST',
                    isArray: false,
                    url: '/activities/:id/member.json',
                    interceptor: {
                        response: function (response) {
                            var result = response.resource;
                            result.$status = response.status;
                            return result;
                        }
                    }
                };
                var photoAction = {
                    method: 'POST',
                    isArray: false,
                    url: '/activities/:id/photo.json'
                };
                // resource service definition
                function ActivityResource($resource) {
                    return R.railsResource($resource, '/activities/:id.json', { member: memberAction, photo: photoAction });
                }
                Activity_1.ActivityResource = ActivityResource;
                // controller definition
                function ActivityCreateCtrl($scope, $filter, Activity) {
                    var self = $scope;
                    self.totalSteps = 5;
                    self.currentStep = self.currentStep || 1;
                    self.repeatTypes = {
                        not_repeated: '否',
                        repeated_weekly: '每周重复',
                        repeated_biweekly: '每两周重复',
                        repeated_monthly: '每月重复'
                    };
                    self.activity = {
                        start_at: moment().startOf('hour').toDate(),
                        end_at: moment().startOf('hour').add(2, 'd').toDate(),
                        register_before: moment().startOf('hour').add(2, 'd').toDate()
                    };
                    if (angular.isDefined(self.current_start_at)) {
                        self.activity.start_at = self.current_start_at;
                    }
                    else {
                        self.activity.start_at = moment().startOf('hour').toDate();
                    }
                    if (angular.isDefined(self.current_end_at)) {
                        self.activity.end_at = self.current_end_at;
                    }
                    else {
                        self.activity.end_at = moment().startOf('hour').add(2, 'd').toDate();
                    }
                    if (angular.isDefined(self.current_register_before)) {
                        self.activity.register_before = self.current_register_before;
                    }
                    else {
                        self.activity.register_before = moment().startOf('hour').add(2, 'd').toDate();
                    }
                    self.viewDateTime = function (val) {
                        if (!val) {
                            return null;
                        }
                        if (_.isDate(val)) {
                            return moment(val).format('MM/DD/YYYY HH:mm');
                        }
                        else {
                            return val;
                        }
                    };
                    self.ensure_fee = function (min_fee, max_fee) {
                        if (min_fee && max_fee) {
                            return $filter('currency')(Math.min(Math.abs(min_fee), Math.abs(max_fee))) + ' - ' + $filter('currency')(Math.max(Math.abs(min_fee), Math.abs(max_fee)));
                        }
                        if (min_fee) {
                            return $filter('currency')(Math.abs(min_fee));
                        }
                        if (max_fee) {
                            return '$0.00 - ' + $filter('currency')(Math.abs(max_fee));
                        }
                        return '无';
                    };
                    self.momentDateTime = function (val) {
                        return moment(val, 'MM/DD/YYYY HH:mm');
                    };
                    self.toggleStep = function (step) {
                        self.currentStep = step;
                    };
                    self.goPrevStep = function () {
                        if (self.currentStep === 1) {
                            return;
                        }
                        self.submitted = false;
                        self.toggleStep(self.currentStep - 1);
                    };
                    self.saveStep = function () {
                        self.submitted = true;
                        // update validator first
                        if (self.currentStep == 3) {
                            var minDate = new Date(0);
                            var start_at = self.momentDateTime(self.viewDateTime(self.activity.start_at));
                            var end_at = self.momentDateTime(self.viewDateTime(self.activity.end_at));
                            self.activityValidator3.start_at.$invalid = start_at < minDate || start_at >= end_at;
                            self.activityValidator3.end_at.$invalid = end_at < minDate;
                            if (!self.activityValidator3.$invalid) {
                                self.activityValidator3.$invalid = self.activityValidator3.start_at.$invalid;
                            }
                            if (!self.activityValidator3.$invalid) {
                                self.activityValidator3.$invalid = self.activityValidator3.end_at.$invalid;
                            }
                        }
                        if (self['activityValidator' + self.currentStep] && self['activityValidator' + self.currentStep].$invalid) {
                            return;
                        }
                        if (self.currentStep == 2) {
                            if (!self.atLeastOneCategory()) {
                                return;
                            }
                        }
                        if (self.currentStep == 5) {
                            var activity = self.activity;
                            activity.start_at = self.viewDateTime(self.activity.start_at);
                            activity.end_at = self.viewDateTime(self.activity.end_at);
                            activity.register_before = self.viewDateTime(self.activity.register_before);
                            var tmp_start_at = activity.start_at;
                            var tmp_end_at = activity.end_at;
                            var tmp_register_before = activity.register_before;
                            if (self.activity_id) {
                                Activity.update({ id: self.activity_id, send_notification: self.send_notification, activity: activity }, function () {
                                    Turbolinks.visit("/activities/" + self.activity_id, { action: 'replace' });
                                }, function (httpResponse) {
                                    activity.start_at = tmp_start_at;
                                    activity.end_at = tmp_end_at;
                                    activity.register_before = tmp_register_before;
                                    Notify.error(httpResponse.data.error);
                                });
                            }
                            else {
                                Activity.save({ activity: activity }, function (a) {
                                    Turbolinks.visit("/activities/" + a.id, { action: 'replace' });
                                }, function () {
                                    activity.start_at = tmp_start_at;
                                    activity.end_at = tmp_end_at;
                                    activity.register_before = tmp_register_before;
                                });
                            }
                        }
                        else {
                            self.toggleStep(self.currentStep + 1);
                        }
                        self.submitted = false;
                    };
                    self.atLeastOneCategory = function () {
                        if (!self.activity.activity_category_relations_attributes) {
                            return false;
                        }
                        if (self.activity.activity_category_relations_attributes.length === 0) {
                            return false;
                        }
                        return _.some(self.activity.activity_category_relations_attributes, function (c) {
                            return c && !c['_destroy'];
                        });
                    };
                    self.isActiveCategory = function (id) {
                        var c = _.find(self.activity.activity_category_relations_attributes, function (c) {
                            return c['category_id'] == id;
                        });
                        return c && !c['_destroy'];
                    };
                    self.toggleCategory = function (id) {
                        var c = _.find(self.activity.activity_category_relations_attributes, function (c) {
                            return c['category_id'] == id;
                        });
                        if (c) {
                            c['_destroy'] = !c['_destroy'];
                        }
                        else {
                            self.activity.activity_category_relations_attributes.push({ category_id: id });
                        }
                    };
                    self.chooseActivityLocation = function (prediction) {
                        if (prediction && prediction.description) {
                            self.activity.address = prediction.description;
                            $("#activity_autocomplete").attr('placeholder', prediction.description);
                            $("#activity_autocomplete").val(prediction.description);
                            $("#activity_autocomplete").text(prediction.description);
                            self.saveStep();
                        }
                    };
                }
                Activity_1.ActivityCreateCtrl = ActivityCreateCtrl;
                function ActivityShowCtrl($scope, $compile, $http, Activity) {
                    var self = $scope;
                    self.modifyNotes = function () {
                        self.originalNotes = angular.copy(self.activity.activity_notes_attributes);
                        self.isEditingNotes = true;
                    };
                    self.saveNotes = function () {
                        Activity.update({ id: self.activity_id, activity: { activity_notes_attributes: self.activity.activity_notes_attributes } }, function () {
                            self.originalNotes = self.activity.activity_notes_attributes;
                            Notify.success('保存成功！');
                        }, function (httpResponse) {
                            Notify.error(httpResponse.data.error);
                        });
                        self.isEditingNotes = false;
                    };
                    self.cancelNotes = function () {
                        self.activity.activity_notes_attributes = self.originalNotes;
                        self.isEditingNotes = false;
                    };
                    self.deleteNote = function (index) {
                        self.activity.activity_notes_attributes[index]['_destroy'] = true;
                    };
                    self.addNote = function () {
                        if (self.newNote && self.newNote != '') {
                            self.activity.activity_notes_attributes.push({ id: null, note: self.newNote, _destroy: false });
                            self.newNote = '';
                        }
                    };
                    self.quit = function () {
                        if (confirm('你确定要退出这个活动吗？')) {
                            var data = { id: self.activity_id, member: { action: 'quit', uid: null } };
                            Activity.member(data, function (data) {
                                window.location.reload();
                            }, function () {
                                Notify.warn('退出失败,请稍后再试.');
                            });
                        }
                    };
                    self.cancel = function () {
                        if (confirm('你确定要取消这个活动吗？')) {
                            $http['delete']('/activities/' + self.activity_id)
                                .then(function () {
                                Turbolinks.visit('/activities', { action: 'replace' });
                            }, function () {
                                Renative.Notify.warn('取消失败,请稍后再试.');
                            });
                        }
                        ;
                    };
                    $(document).on('guruin:native:activity:join', function (e, join, need_group_approve) {
                        if (need_group_approve && confirm('你还没有加入此活动所在的群组，是否先加入群组？')) {
                            $scope.memberRequest(join);
                        }
                        else {
                            $scope.memberRequest(join);
                        }
                    });
                    $(document).on('guruin:native:activity:quit', function (e) {
                        $scope.quit();
                    });
                    $(document).on('guruin:native:activity:cancel', function (e) {
                        $scope.cancel();
                    });
                    self.memberRequest = function (action, uid) {
                        var data = { id: self.activity_id, member: { action: action, uid: null } };
                        if (uid) {
                            data['member']['uid'] = uid;
                        }
                        self.sending = true;
                        Activity.member(data, function (data) {
                            if (data.$status == 202) {
                                Notify.success('申请已经提交.');
                            }
                            else {
                                if (self.activity.purchase_required == 'true') {
                                    //$('#modal-activity-purchase').modal('show');
                                    //$(document).trigger('framework7:activity:purchase');
                                    self.sending = false;
                                    Turbolinks.visit("/activities/" + self.activity_id + "/checkout");
                                    return;
                                }
                                else {
                                    Notify.success('已加入成功.');
                                }
                            }
                            self.memberSuccessMessage = "Success: " + action;
                            self.memberFailMessage = null;
                            setTimeout(function () {
                                window.location.reload();
                            }, 3000);
                        }, function () {
                            self.memberSuccessMessage = null;
                            self.memberFailMessage = "Fail: " + action;
                            Notify.warn('申请提交失败,请稍后再试.');
                            self.sending = false;
                        });
                    };
                    self.checkin = function (uid) {
                        var data = { id: self.activity_id, member: { action: 'checkin', uid: null } };
                        if (uid) {
                            data['member']['uid'] = uid;
                        }
                        Activity.member(data, function (data) {
                            Notify.success('已成功签到');
                            self.memberSuccessMessage = "Success: checkin";
                            self.memberFailMessage = null;
                            window.location.reload();
                        }, function () {
                            self.memberSuccessMessage = null;
                            self.memberFailMessage = "Fail: checkin";
                            Notify.warn('签到申请提交失败,请稍后再试.');
                        });
                    };
                    self.uncheckin = function (uid) {
                        var data = { id: self.activity_id, member: { action: 'uncheckin', uid: null } };
                        if (uid) {
                            data['member']['uid'] = uid;
                        }
                        Activity.member(data, function (data) {
                            Notify.success('已成功更新');
                            self.memberSuccessMessage = "Success: un-checkin";
                            self.memberFailMessage = null;
                            window.location.reload();
                        }, function () {
                            self.memberSuccessMessage = null;
                            self.memberFailMessage = "Fail: un-checkin";
                            Notify.warn('未签到申请提交失败,请稍后再试.');
                        });
                    };
                    self.promote = function (uid) {
                        if (confirm('你确定要把这个人提升为管理员吗？')) {
                            var data = { id: self.activity_id, member: { action: 'admin', uid: null } };
                            if (uid) {
                                data['member']['uid'] = uid;
                            }
                            Activity.member(data, function (data) {
                                Notify.success('已成功把那个人提升为管理员');
                                self.memberSuccessMessage = "Success: admin";
                                self.memberFailMessage = null;
                                window.location.reload();
                            }, function () {
                                self.memberSuccessMessage = null;
                                self.memberFailMessage = "Fail: admin";
                                Notify.warn('提升管理员申请提交失败,请稍后再试.');
                            });
                        }
                    };
                    self.demote = function (uid) {
                        if (confirm('你确定要解除这个人的管理员权限吗？')) {
                            var data = { id: self.activity_id, member: { action: 'demote', uid: null } };
                            if (uid) {
                                data['member']['uid'] = uid;
                            }
                            Activity.member(data, function (data) {
                                Notify.success('已成功解除那个人的管理员权限');
                                self.memberSuccessMessage = "Success: demote";
                                self.memberFailMessage = null;
                                window.location.reload();
                            }, function () {
                                self.memberSuccessMessage = null;
                                self.memberFailMessage = "Fail: demote";
                                Notify.warn('解除管理员申请提交失败,请稍后再试.');
                            });
                        }
                    };
                    self.kick = function (uid) {
                        if (confirm('你确定要把这个人踢出活动吗？')) {
                            var data = { id: self.activity_id, member: { action: 'reject', uid: null } };
                            if (uid) {
                                data['member']['uid'] = uid;
                            }
                            Activity.member(data, function (data) {
                                Notify.success('已成功把那个人踢出活动');
                                self.memberSuccessMessage = "Success: reject";
                                self.memberFailMessage = null;
                                window.location.reload();
                            }, function () {
                                self.memberSuccessMessage = null;
                                self.memberFailMessage = "Fail: reject";
                                Notify.warn('踢出活动申请提交失败,请稍后再试.');
                            });
                        }
                    };
                    self.remoteUrlRequestFn = function (str) {
                        return { k: str, g: self.group_id };
                    };
                    self.invite = function (result) {
                        var data = { id: self.activity_id, member: { action: 'invite', uid: result.originalObject.id } };
                        Activity.member(data, function (data) {
                            Notify.success('已成功发出邀请');
                            self.memberSuccessMessage = "Success: reject";
                            self.memberFailMessage = null;
                            $('#item-search-result-panel').hide();
                            $('#modal-activity-invite').modal('hide');
                        }, function () {
                            self.memberSuccessMessage = null;
                            self.memberFailMessage = "Fail: reject";
                            Notify.error('邀请失败,请稍后再试.');
                        });
                    };
                    self.showSearchResultPanel = function () {
                        $('#item-search-result-panel').show();
                    };
                    // https://github.com/blueimp/jQuery-File-Upload/wiki/Options#callback-options
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (result.photoable_id == self.activity_id && /::Activity/i.test(result.photoable_type)) {
                                Activity.update({ id: self.activity_id, activity: { photo_id: result.id, photo_url: result.url } }, function () {
                                    self.activity.photo_id = result.id;
                                    self.activity.photo_url = result.url;
                                }, function (httpResponse) {
                                    Notify.error(httpResponse.data.error);
                                });
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $(document).on('guruin:activity:member:rendering', function (e, el) {
                        var $newData = $(el);
                        $compile($newData)($scope);
                        $(el).replaceWith($newData);
                    });
                }
                Activity_1.ActivityShowCtrl = ActivityShowCtrl;
                ;
                function ActivityPhotosCtrl($scope, $http, $compile) {
                    $scope.photos = [];
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (result.photoable_id == $scope.activity_id && /::Activity/i.test(result.photoable_type)) {
                                $scope.photos.unshift({ id: result.id, url: result.url });
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $(document).on('guruin:activity:photo:rendering', function (e, el) {
                        var plainHtml = $("<div />").append($("#photo-list").clone()).html();
                        var $newData = $(plainHtml);
                        angular.element('#photo-list').empty();
                        $compile($newData)($scope);
                        $('#photo-list').replaceWith($newData);
                    });
                }
                Activity_1.ActivityPhotosCtrl = ActivityPhotosCtrl;
                ;
                // module initialize
                angular.module('GuruIn.App')
                    .factory('ActivityResource', ['$resource', ActivityResource])
                    .controller('ActivityCreateCtrl', ['$scope', '$filter', 'ActivityResource', ActivityCreateCtrl])
                    .controller('ActivityShowCtrl', ['$scope', '$compile', '$http', 'ActivityResource', ActivityShowCtrl]);
                angular.module('GuruIn.App')
                    .controller('ActivityPhotosCtrl', ['$scope', '$http', '$compile', ActivityPhotosCtrl]);
            })(Activity = Controllers.Activity || (Controllers.Activity = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Services;
        (function (Services) {
            var Activity;
            (function (Activity) {
                var R = GuruIn.App.Resources;
                var doCheckout = {
                    method: 'POST',
                    isArray: false,
                    url: '/activities/:id/do_checkout.json'
                };
                // resource service definition
                function CheckoutResource($resource) {
                    var actions = {
                        doCheckout: doCheckout
                    };
                    return R.railsResource($resource, '/activities/:id.json', actions);
                }
                Activity.CheckoutResource = CheckoutResource;
                angular
                    .module('GuruIn.App')
                    .factory('GuruIn.App.Services.Activity.Checkout', ['$resource', CheckoutResource]);
            })(Activity = Services.Activity || (Services.Activity = {}));
        })(Services = App.Services || (App.Services = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Activity;
            (function (Activity) {
                var Checkout;
                (function (Checkout) {
                    var Notify = Renative.Notify;
                    var DOM = Renative.DOM;
                    function Controller($scope, checkout) {
                        var self = $scope;
                        self.allowCheckbox = function () {
                            return true;
                        };
                        self.calc_options_records = function (activity_product_relation) {
                            if (activity_product_relation.seats_records.length > 0) {
                                if (activity_product_relation.quantity == 0) {
                                    activity_product_relation.seats_records = [];
                                    activity_product_relation.temporary_selected_section = '';
                                    activity_product_relation.temporary_selected_row = '';
                                    activity_product_relation.temporary_row_list = [];
                                    activity_product_relation.temporary_column_list = [];
                                    self.enable_seat_options(activity_product_relation);
                                }
                                else if (activity_product_relation.quantity > activity_product_relation.seats_records.length) {
                                    self.enable_seat_options(activity_product_relation);
                                }
                                else if (activity_product_relation.quantity < activity_product_relation.seats_records.length) {
                                    self.disable_seat_options(activity_product_relation);
                                    for (var i = activity_product_relation.quantity - 1; i < activity_product_relation.seats_records.length; ++i) {
                                        activity_product_relation.seats_records.splice(i, 1);
                                    }
                                }
                            }
                            if (activity_product_relation.options_config == null) {
                                activity_product_relation.options_records = [];
                                return;
                            }
                            if (activity_product_relation.options_records != null && activity_product_relation.options_records.length == 1) {
                                return;
                            }
                            // REVIEW: always keep '{}' and ';' to avoid potential syntax problems
                            // especially for others may change your code
                            activity_product_relation.options_records = [];
                            var a = [];
                            _.each(activity_product_relation.options_config, function (field) {
                                var obj = {};
                                obj['name'] = field['name'];
                                obj['type'] = field['type'];
                                obj['required'] = field['required'];
                                a.push(obj);
                            });
                            activity_product_relation.options_records.push(a);
                            // var current_length = activity_product_relation.options_records.length;
                            // if(current_length < activity_product_relation.quantity){
                            //   for(var i=current_length+1; i <= activity_product_relation.quantity; i++){
                            //     var a = [];
                            //     _.each(activity_product_relation.options_config, function(field){
                            //       var obj = {};
                            //       obj['name'] = field['name'];
                            //       obj['type'] = field['type'];
                            //       obj['required'] = field['required'];
                            //       a.push(obj);
                            //     });
                            //     activity_product_relation.options_records.push(a);
                            //   }
                            // }else if(current_length > activity_product_relation.quantity){
                            //   for(var i=current_length; i > activity_product_relation.quantity; i--){
                            //     activity_product_relation.options_records.pop();
                            //   }
                            // }
                        };
                        self.calc_total = function () {
                            var total = 0;
                            _.each(self.model.required_activity_product_relations, function (activity_product_relation) {
                                total += activity_product_relation.quantity * activity_product_relation.actual_price;
                            });
                            _.each(self.model.optional_activity_product_relations, function (activity_product_relation) {
                                total += activity_product_relation.quantity * activity_product_relation.actual_price;
                            });
                            return total.toFixed(2);
                        };
                        self.do_checkout = function (e) {
                            self.checkout_form.$submitted = true;
                            DOM.stopPropagation(e);
                            var total_amount = self.calc_total();
                            if (total_amount <= 0) {
                                Notify.error("请至少选择一个产品");
                                return;
                            }
                            var errors = [];
                            _.each(self.model.required_activity_product_relations, function (activity_product_relation) {
                                if (activity_product_relation.quantity > activity_product_relation.available_count) {
                                    errors.push("(" + activity_product_relation.actual_name + ") 库存数量不足, 请修改订购数量后重试");
                                }
                                if (activity_product_relation.available_seats && activity_product_relation.available_seats.length > 0) {
                                    if (activity_product_relation.quantity != activity_product_relation.seats_records.length) {
                                        var left_quantity = activity_product_relation.quantity - activity_product_relation.seats_records.length;
                                        errors.push("请再选择(" + activity_product_relation.actual_name + ")的" + left_quantity + "个座位后重试");
                                    }
                                }
                            });
                            _.each(self.model.optional_activity_product_relations, function (activity_product_relation) {
                                if (activity_product_relation.quantity > activity_product_relation.available_count) {
                                    errors.push("(" + activity_product_relation.actual_name + ") 库存数量不足, 请修改订购数量后重试");
                                }
                                if (activity_product_relation.available_seats && activity_product_relation.available_seats.length > 0) {
                                    if (activity_product_relation.quantity != activity_product_relation.seats_records.length) {
                                        var left_quantity = activity_product_relation.quantity - activity_product_relation.seats_records.length;
                                        errors.push("请再选择(" + activity_product_relation.actual_name + ")的" + left_quantity + "个座位后重试");
                                    }
                                }
                            });
                            var options_completed = true;
                            _.each(self.model.required_activity_product_relations, function (activity_product_relation) {
                                _.each(activity_product_relation.options_records, function (or) {
                                    _.each(or, function (field) {
                                        if (field['required'] && (field['value'] == null || field['value'] == '')) {
                                            options_completed = false;
                                        }
                                    });
                                });
                            });
                            _.each(self.model.optional_activity_product_relations, function (activity_product_relation) {
                                _.each(activity_product_relation.options_records, function (or) {
                                    _.each(or, function (field) {
                                        if (field['required'] && (field['value'] == null || field['value'] == '')) {
                                            options_completed = false;
                                        }
                                    });
                                });
                            });
                            if (!options_completed) {
                                errors.push("请填写订单必要信息");
                            }
                            if (errors.length > 0) {
                                Notify.error(errors.join("<br>"));
                                return;
                            }
                            if (self.model.agree_to_refund_policy != 'yes') {
                                Notify.error("请同意退货条款");
                                return;
                            }
                            if (self.model.agree_to_tos_policy != 'yes') {
                                Notify.error("请同意购买条款");
                                return;
                            }
                            if (self.checkout_form.email && self.checkout_form.email.$error.required) {
                                Notify.error("请输入你的Email");
                                return;
                            }
                            if (self.checkout_form.email && self.checkout_form.email.$error.email) {
                                Notify.error("你输入的Email格式不正确");
                                return;
                            }
                            var data = { id: self.model.id, checkout: self.model };
                            $(e.target).attr('disabled', 'disabled');
                            checkout.doCheckout(data, function (result) {
                                Notify.success('保存成功！');
                                Turbolinks.visit("/orders/" + result.order_id);
                            }, function (result) {
                                $(e.target).removeAttr('disabled');
                                self.model = result.data.checkout;
                                Notify.error(result.data.message);
                            });
                        };
                        self.show_change_seat = function (activity_product_relation) {
                            if (!activity_product_relation.choose_seat) {
                                // no seat config
                                return false;
                            }
                            if (activity_product_relation.seats_records.length <= 0) {
                                // no seat selected
                                return false;
                            }
                            return true;
                        };
                        self.show_choose_seat = function (activity_product_relation) {
                            if (!activity_product_relation.choose_seat) {
                                // no seat config
                                return false;
                            }
                            if (activity_product_relation.seats_records.length > 0) {
                                // already choose seat
                                return false;
                            }
                            if (!activity_product_relation.available_seats || activity_product_relation.available_seats.length <= 0) {
                                // no available seats
                                return false;
                            }
                            return true;
                        };
                        self.prepare_range = function (n) {
                            var total = parseInt(n);
                            var range = [];
                            if (total <= 0) {
                                return range;
                            }
                            for (var i = 1; i <= total; ++i) {
                                range.push(i);
                            }
                            return range;
                        };
                        self.prepare_selected_range = function (activity_product_relation) {
                            var range = [];
                            if (activity_product_relation.seats_records.length >= activity_product_relation.quantity) {
                                return range;
                            }
                            for (var i = activity_product_relation.seats_records.length + 1; i <= activity_product_relation.quantity; ++i) {
                                range.push(i);
                            }
                            return range;
                        };
                        self.show_options = function (activity_product_relation) {
                            var has_options = activity_product_relation.options_config != null && activity_product_relation.options_records.length > 0;
                            var has_quantity = activity_product_relation.quantity > 0;
                            var has_seat_options = activity_product_relation.choose_seat && activity_product_relation.available_seats.length > 0;
                            return (has_options || has_seat_options) && has_quantity;
                        };
                        self.close_seat_modal = function (id, activity_product_relation) {
                            $(id + '-' + activity_product_relation.id).modal('hide');
                        };
                        self.open_seat_modal = function (id, activity_product_relation) {
                            if (activity_product_relation.quantity == activity_product_relation.seats_records.length) {
                                // full, disable all select option
                                self.disable_seat_options(activity_product_relation);
                            }
                            $(id + '-' + activity_product_relation.id).modal({ backdrop: "static" });
                        };
                        self.prepare_section_list = function (activity_product_relation) {
                            var sections = [];
                            for (var i = 0; i < activity_product_relation.available_seats.length; ++i) {
                                var seat = activity_product_relation.available_seats[i];
                                if (seat.length >= 1) {
                                    if (sections.indexOf(seat[0]) == -1) {
                                        sections.push(seat[0]);
                                    }
                                }
                            }
                            return sections.sort(function (a, b) { return a - b; });
                        };
                        self.prepare_row_list = function (section, activity_product_relation) {
                            var rows = [];
                            if (activity_product_relation.available_seats.length <= 0) {
                                return rows;
                            }
                            var first_seat = activity_product_relation.available_seats[0];
                            if (first_seat.length <= 2) {
                                return rows;
                            }
                            for (var i = 0; i < activity_product_relation.available_seats.length; ++i) {
                                var seat = activity_product_relation.available_seats[i];
                                if (seat.length >= 3 && seat[0] == section) {
                                    if (rows.indexOf(seat[1]) == -1) {
                                        rows.push(seat[1]);
                                    }
                                }
                            }
                            return rows.sort(function (a, b) { return a - b; });
                        };
                        self.prepare_column_list = function (row, section, activity_product_relation) {
                            var columns = [];
                            for (var i = 0; i < activity_product_relation.available_seats.length; ++i) {
                                var seat = activity_product_relation.available_seats[i];
                                if (seat.length >= 3 && seat[0] == section && seat[1] == row) {
                                    if (columns.indexOf(seat[2]) == -1) {
                                        columns.push(seat[2]);
                                    }
                                }
                                if (seat.length == 2 && seat[0] == section) {
                                    if (columns.indexOf(seat[0]) == -1) {
                                        columns.push(seat[1]);
                                    }
                                }
                            }
                            return columns.sort(function (a, b) { return a - b; });
                        };
                        self.is_section_selected = function (section, activity_product_relation) {
                            if (activity_product_relation.seats_records.length <= 0) {
                                return false;
                            }
                            var prefix = section + '-';
                            for (var i = 0; i < activity_product_relation.seats_records.length; ++i) {
                                var seat = activity_product_relation.seats_records[i];
                                if (seat.indexOf(prefix) == 0) {
                                    return true;
                                }
                            }
                            return false;
                        };
                        self.is_row_selected = function (row, section, activity_product_relation) {
                            if (row == activity_product_relation.temporary_selected_row) {
                                return true;
                            }
                            if (activity_product_relation.seats_records.length <= 0) {
                                return false;
                            }
                            var prefix = section + '-' + row + '-';
                            for (var i = 0; i < activity_product_relation.seats_records.length; ++i) {
                                var seat = activity_product_relation.seats_records[i];
                                if (seat.indexOf(prefix) == 0) {
                                    return true;
                                }
                            }
                            return false;
                        };
                        self.is_column_selected = function (column, row, section, activity_product_relation) {
                            if (activity_product_relation.seats_records.length <= 0) {
                                return false;
                            }
                            var seat = section + '-' + row + '-' + column;
                            if (activity_product_relation.seat_level == 2) {
                                seat = section + '-' + column;
                            }
                            return activity_product_relation.seats_records.indexOf(seat) > -1;
                        };
                        self.choose_seat_section = function (e, section, activity_product_relation) {
                            if (activity_product_relation.quantity == activity_product_relation.seats_records.length) {
                                //full
                                return;
                            }
                            this.clear_row_selected_style(activity_product_relation);
                            var active = $(e.target).hasClass('active');
                            if (active) {
                                activity_product_relation.temporary_selected_section = '';
                                activity_product_relation.temporary_selected_row = '';
                                activity_product_relation.temporary_row_list = [];
                                activity_product_relation.temporary_column_list = [];
                                $(e.target).removeClass('active');
                                return;
                            }
                            activity_product_relation.temporary_selected_section = section;
                            activity_product_relation.temporary_selected_row = '';
                            if (activity_product_relation.seat_level == 3) {
                                activity_product_relation.temporary_row_list = self.prepare_row_list(section, activity_product_relation);
                                if (activity_product_relation.temporary_row_list.length > 0) {
                                    activity_product_relation.temporary_selected_row = activity_product_relation.temporary_row_list[0];
                                    activity_product_relation.temporary_column_list = self.prepare_column_list(activity_product_relation.temporary_selected_row, section, activity_product_relation);
                                }
                                else {
                                    activity_product_relation.temporary_column_list = [];
                                }
                            }
                            else {
                                activity_product_relation.temporary_row_list = [];
                                activity_product_relation.temporary_column_list = self.prepare_column_list('', section, activity_product_relation);
                            }
                            $(e.target).parent().parent().find('a').each(function () {
                                $(this).removeClass('active');
                            });
                            $(e.target).addClass('active');
                        };
                        self.choose_seat_row = function (e, row, section, activity_product_relation) {
                            if (activity_product_relation.quantity == activity_product_relation.seats_records.length) {
                                //full
                                return;
                            }
                            this.clear_column_selected_style(activity_product_relation);
                            var active = $(e.target).hasClass('active');
                            if (active) {
                                activity_product_relation.temporary_selected_row = '';
                                activity_product_relation.temporary_column_list = [];
                                $(e.target).removeClass('active');
                                return;
                            }
                            activity_product_relation.temporary_selected_row = row;
                            activity_product_relation.temporary_column_list = self.prepare_column_list(row, section, activity_product_relation);
                            $(e.target).parent().parent().find('a').each(function () {
                                $(this).removeClass('active');
                            });
                            $(e.target).addClass('active');
                        };
                        self.choose_seat_column = function (e, column, row, section, activity_product_relation) {
                            if (activity_product_relation.quantity == activity_product_relation.seats_records.length) {
                                //full
                                return;
                            }
                            var seat = section + '-' + row + '-' + column;
                            if (activity_product_relation.seat_level == 2) {
                                seat = section + '-' + column;
                            }
                            var selected = $(e.target).hasClass('selected');
                            if (selected) {
                                var index = activity_product_relation.seats_records.indexOf(seat);
                                if (index > -1) {
                                    activity_product_relation.seats_records.splice(index, 1);
                                    $(e.target).removeClass('selected');
                                    self.enable_seat_options(activity_product_relation);
                                }
                                return;
                            }
                            $(e.target).addClass('selected');
                            if (activity_product_relation.seats_records.indexOf(seat) == -1) {
                                activity_product_relation.seats_records.push(seat);
                                if (activity_product_relation.quantity == activity_product_relation.seats_records.length) {
                                    // full, disable all select option
                                    self.disable_seat_options(activity_product_relation);
                                }
                            }
                        };
                        self.remove_seat = function (activity_product_relation, seat) {
                            var index = activity_product_relation.seats_records.indexOf(seat);
                            if (index > -1) {
                                activity_product_relation.seats_records.splice(index, 1);
                            }
                            // remove all disabled class
                            self.enable_seat_options(activity_product_relation);
                        };
                        self.disable_seat_options = function (activity_product_relation) {
                            $('#modal-select-seats-panel-' + activity_product_relation.id).addClass('disabled');
                        };
                        self.enable_seat_options = function (activity_product_relation) {
                            $('#modal-select-seats-panel-' + activity_product_relation.id).removeClass('disabled');
                        };
                        self.clear_row_selected_style = function (activity_product_relation) {
                            $('#modal-select-seats-row-panel-' + activity_product_relation.id).find('a').each(function () {
                                if ($(this).hasClass('active')) {
                                    $(this).removeClass('active');
                                }
                            });
                        };
                        self.clear_column_selected_style = function (activity_product_relation) {
                            $('#modal-select-seats-column-panel-' + activity_product_relation.id).find('a').each(function () {
                                if ($(this).hasClass('selected')) {
                                    $(this).removeClass('selected');
                                }
                            });
                        };
                    }
                    Checkout.Controller = Controller;
                    // module initialize
                    angular
                        .module('GuruIn.App')
                        .controller('GuruIn.App.Controllers.Activity.Checkout', ['$scope', 'GuruIn.App.Services.Activity.Checkout', Controller]);
                })(Checkout = Activity.Checkout || (Activity.Checkout = {}));
            })(Activity = Controllers.Activity || (Controllers.Activity = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Article;
            (function (Article_1) {
                var Notify = Renative.Notify;
                angular.module('GuruIn.App')
                    .factory('ArticleResource', ['$resource', function ($resource) {
                        var updateAction = {
                            method: 'PUT',
                            isArray: false
                        };
                        return $resource('/articles/:id.json', { id: '@id' }, {
                            update: updateAction
                        });
                    }])
                    .controller('ArticleCtrl', ['$scope', '$compile', 'ArticleResource', function ($scope, $compile, Article) {
                        $scope.article = {
                            nationwide: true,
                            poi_id: 0
                        };
                        $scope.cover_photo_loaded_class = '';
                        $scope.currentStep = 1;
                        $scope.coverImageLoaded = function () {
                            $scope.cover_photo_url = $scope.photo_url;
                            $scope.cover_photo_loaded_class = 'fadeOut';
                        };
                        $scope.goPrevStep = function () {
                            if ($scope.currentStep === 1) {
                                return;
                            }
                            $scope.submitted = false;
                            $scope.goStep(--$scope.currentStep);
                        };
                        $scope.goNextStep = function () {
                            $scope.submitted = true;
                            if ($scope.currentStep === 1 && (!$scope.articleForm || $scope.articleForm.title.$invalid)) {
                                return;
                            }
                            if ($scope.currentStep === 2 && (!$scope.articleForm || $scope.articleForm.poi_id.$invalid)) {
                                return;
                            }
                            $scope.submitted = false;
                            $scope.goStep(++$scope.currentStep);
                        };
                        $scope.goStep = function (step) {
                            $scope.currentStep = step;
                        };
                        $scope.remoteUrlRequestFn = function (str) {
                            return { k: str };
                        };
                        $scope.selectedLocation = function (selected) {
                            if (selected && selected.originalObject) {
                                $scope.article.poi_id = selected.originalObject.id;
                                $scope.article.nationwide = false;
                                $scope.poi_name = selected.originalObject.name;
                                $scope.searchStr = $scope.poi_name;
                                $('#article_city_input').val($scope.poi_name);
                                $('#article_city_input').text($scope.poi_name);
                                $('#article_city_input').attr('placeholder', $scope.poi_name);
                            }
                        };
                        $scope.update = function () {
                            $scope.submitted = true;
                            if ($scope.article.title.$invalid || ($scope.article.poi_id.$invalid && $scope.article.nationwide.$invalid)) {
                                return;
                            }
                            if (!$scope.atLeastOneCategory()) {
                                return;
                            }
                            Article.update({ id: $scope.article_id, article: $scope.article }, function () {
                                window.location.href = '/articles/' + $scope.article_id + '/edit';
                            }, function () {
                                Notify.warn('保存失败');
                            });
                        };
                        $scope.create = function () {
                            $scope.submitted = true;
                            if ($scope.article.title.$invalid || ($scope.article.poi_id.$invalid && $scope.article.nationwide.$invalid)) {
                                return;
                            }
                            if (!$scope.atLeastOneCategory()) {
                                return;
                            }
                            Article.save({ article: $scope.article }, function (a) {
                                $scope.article.id = a.id;
                                window.location.href = '/articles/' + $scope.article.id + '/edit';
                            });
                        };
                        $scope.reset_poi = function () {
                            $scope.article.poi_id = undefined;
                        };
                        $scope.toggle_nationwide = function () {
                            if ($scope.article.nationwide) {
                                $scope.article.poi_id = 0;
                            }
                            else {
                                $scope.article.poi_id = undefined;
                            }
                        };
                        $scope.atLeastOneCategory = function () {
                            if (!$scope.article.article_category_relations_attributes) {
                                return false;
                            }
                            if ($scope.article.article_category_relations_attributes.length === 0) {
                                return false;
                            }
                            return _.some($scope.article.article_category_relations_attributes, function (c) {
                                return c && !c['_destroy'];
                            });
                        };
                        $scope.actived_categories = function () {
                            return _.filter($scope.article.article_category_relations_attributes, function (c) {
                                return c && !c['_destroy'];
                            });
                        };
                        $scope.toggleCategory = function (relation) {
                            var c = _.find($scope.article.article_category_relations_attributes, function (c) {
                                return c['category_id'] == relation.category_id;
                            });
                            if (c) {
                                c['_destroy'] = !c['_destroy'];
                            }
                            else {
                                if ($scope.actived_categories().length < 5) {
                                    $scope.article.article_category_relations_attributes.push({ category_id: relation.category_id, name: relation.name });
                                }
                            }
                        };
                        $scope.contains_category = function (category_id) {
                            var c = _.find($scope.article.article_category_relations_attributes, function (c) {
                                return c['category_id'] == category_id;
                            });
                            return c && !c['_destroy'];
                        };
                        $scope.$on('fileuploaddone', function (event, data) {
                            if (data && data.result && data.result.files && data.result.files.length > 0) {
                                var result = data.result.files[0];
                                if (result.photoable_id == $scope.article_id && /::Article/i.test(result.photoable_type)) {
                                    Article.update({
                                        id: $scope.article_id,
                                        article: { photo_id: result.id, photo_url: result.url }
                                    }, function () {
                                        $scope.photo_url = result.url;
                                    }, function (httpResponse) {
                                        Notify.error(httpResponse.data.error);
                                    });
                                }
                            }
                            else {
                                Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                            }
                        });
                        $scope.$on('fileuploadfail', function (event, data) {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        });
                        $(document).on('guruin:product:service:opening', function (e, url, id) {
                            if (GuruInGlobalVar_product_loading) {
                                return;
                            }
                            GuruInGlobalVar_product_loading = true;
                            console.log('guruin:product:service:opening event');
                            if ($('#modal-inquiry-order_' + id).length > 0) {
                                $('#modal-inquiry-order_' + id).modal();
                                GuruInGlobalVar_product_loading = false;
                                return;
                            }
                            $.get(url, function (data) {
                                var $newData = $(data);
                                $compile($newData)($scope);
                                $newData.modal();
                                GuruInGlobalVar_product_loading = false;
                            });
                        });
                    }]);
            })(Article = Controllers.Article || (Controllers.Article = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Articles;
            (function (Articles) {
              function initEditor(articleId) {
                var editor = new MediumEditor('.item-article-content', {
                  toolbar: {
                    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'justifyLeft',
                              'justifyCenter', 'anchor', 'h2', 'quote', 'orderedlist', 'unorderedlist']
                  },
                  placeholder: {
                    text: '请输入您的文章内容...'
                  },
                  anchor: {
                      /* These are the default options for anchor form,
                         if nothing is passed this is what it used */
                      customClassOption: null,
                      customClassOptionText: 'Button',
                      linkValidation: true,
                      placeholderText: '粘贴或输入一个连接',
                      targetCheckbox: false,
                      targetCheckboxText: '在新窗口中打开'
                  }
                });

                ;(function ($, window, document, undefined) {
                  'use strict';

                  /** Default values */
                  var pluginName = 'mediumInsert',
                    defaults = {
                      placeHolder: '在这里加入描述',
                      actions: {
                        remove: {
                          label: '<span class="fa fa-times"></span>',
                          clicked: function () {
                            var $event = $.Event('keydown');

                            $event.which = 8;
                            $(document).trigger($event);
                          }
                        }
                      }
                    };

                  /**
                   * Custom Addon object
                   *
                   * Sets options, variables and calls init() function
                   *
                   * @constructor
                   * @param {DOM} el - DOM element to init the plugin on
                   * @param {object} options - Options to override defaults
                   * @return {void}
                   */

                  function GuruInEmbed (el, options) {
                      this.el = el;
                      this.$el = $(el);
                      this.core = this.$el.data('plugin_'+ pluginName);

                      this.options = $.extend(true, {}, defaults, options);

                      this._defaults = defaults;
                      this._name = pluginName;

                      this.init();
                  }

                  /**
                   * Initialization
                   *
                   * @return {void}
                   */

                  GuruInEmbed.prototype.init = function () {
                    //merchants
                    var $merchantembeds = this.$el.find('.medium-insert-merchants');
                    $merchantembeds.each(function () {
                      if(!$(this).hasClass('medium-insert-guruinembeds')) {
                        $(this).addClass('medium-insert-guruinembeds');
                      }
                    });

                    var $embeds = this.$el.find('.medium-insert-guruinembeds');

                    $embeds.attr('contenteditable', false);
                    $embeds.each(function () {
                      if ($(this).find('.medium-insert-guruinembeds-overlay').length === 0) {
                        $(this).find('.medium-insert-guruinembed').append($('<div />').addClass('medium-insert-guruinembeds-overlay'));
                      }
                    });
                    this.events();
                  };

                  /**
                   * Event listeners
                   *
                   * @return {void}
                   */

                  GuruInEmbed.prototype.events = function () {
                    $(document)
                      .on('click', $.proxy(this, 'unselectEmbed'))
                      .on('click', '.medium-insert-embeds-toolbar2 .medium-editor-action', $.proxy(this, 'toolbar2Action'))
                      .on('keydown', $.proxy(this, 'removeEmbed'));

                    this.$el
                      .on('select', $.proxy(this, 'insert'))
                      .on('select_address', $.proxy(this, 'insertAddress'))
                      .on('select_merchant', $.proxy(this, 'insertMerchant'))
                      .on('click', '.medium-insert-guruinembeds-overlay', $.proxy(this, 'selectEmbed'));

                    if (this.options.popup !== true) {
                      this.$el
                        .on('keyup click paste', $.proxy(this, 'togglePlaceholder'))
                        .on('keydown', $.proxy(this, 'processLink'))
                    }
                  };

                  /**
                   * Add custom content
                   *
                   * This function is called when user click on the addon's icon
                   *
                   * @return {void}
                   */

                  GuruInEmbed.prototype.add = function () {
                    if (this.options.popup === true) {
                      $(this.options.modalId).modal();
                    } else {
                      var $place = this.$el.find('.medium-insert-active');

                      // Make sure that the content of the paragraph is empty and <br> is wrapped in <p></p> to avoid Firefox problems
                      $place.html('<p><br></p>');

                      // Replace paragraph with div to prevent #124 issue with pasting in Chrome,
                      // because medium editor wraps inserted content into paragraph and paragraphs can't be nested
                      if ($place.is('p')) {
                        $place.replaceWith('<div class="medium-insert-active">'+ $place.html() +'</div>');
                        $place = this.$el.find('.medium-insert-active');
                        this.core.moveCaret($place);
                      }

                      $place.addClass('medium-insert-embeds medium-insert-embeds-input medium-insert-embeds-active');

                      this.togglePlaceholder({ target: $place.get(0) });
                    }
                    this.core.hideButtons();
                  };

                  /**
                   * Toggles placeholder
                   *
                   * @param {Event} e
                   * @return {void}
                   */

                  GuruInEmbed.prototype.togglePlaceholder = function (e) {
                    var $place = $(e.target),
                        selection = window.getSelection(),
                        range, $current, text;

                    if (!selection || selection.rangeCount === 0) {
                      return;
                    }

                    range = selection.getRangeAt(0);
                    $current = $(range.commonAncestorContainer);

                    if ($current.hasClass('medium-insert-embeds-active')) {
                      $place = $current;
                    } else if ($current.closest('.medium-insert-embeds-active').length) {
                      $place = $current.closest('.medium-insert-embeds-active');
                    }

                    if ($place.hasClass('medium-insert-embeds-active')) {

                      text = $place.text().trim();

                      if (text === '' && $place.hasClass('medium-insert-embeds-placeholder') === false) {
                        $place
                          .addClass('medium-insert-embeds-placeholder')
                          .attr('data-placeholder', '插入专题、攻略、指南、活动、群组、雷达、咕噜（用户）的链接然后回车（仅支持本站链接）');
                      } else if (text !== '' && $place.hasClass('medium-insert-embeds-placeholder')) {
                        $place
                          .removeClass('medium-insert-embeds-placeholder')
                          .removeAttr('data-placeholder');
                      }

                    } else {
                      this.$el.find('.medium-insert-embeds-active').remove();
                    }
                  };

                  /**
                   * Right click on placeholder in Chrome selects whole line. Fix this by placing caret at the end of line
                   *
                   * @param {Event} e
                   * @return {void}
                   */

                  GuruInEmbed.prototype.fixRightClickOnPlaceholder = function (e) {
                    this.core.moveCaret($(e.target));
                  };

                  /**
                   * Process link
                   *
                   * @param {Event} e
                   * @return {void}
                   */

                  GuruInEmbed.prototype.processLink = function (e) {
                    var $place = this.$el.find('.medium-insert-embeds-active'),
                        url;

                    if (!$place.length) {
                      return;
                    }

                    url = $place.text().trim();

                    // Return empty placeholder on backspace, delete or enter
                    if (url === '' && [8, 46, 13].indexOf(e.which) !== -1) {
                      $place.remove();
                      return;
                    }

                    if (e.which === 13) {
                      e.preventDefault();
                      e.stopPropagation();

                      this.parseUrl(url);
                    }
                  };

                  /**
                   * Get HTML using regexp
                   *
                   * @param {string} url
                   * @return {void}
                   */

                  GuruInEmbed.prototype.parseUrl = function (url) {
                    var html;
                    var result = (/((https?:\/\/www.guruin.(com|cn))|http:\/\/localhost:\d+)\/(articles|gurus|groups|activities|article_collections|mini-articles)\/(\d+)/i).exec(url)
                    if (result == null){
                      result = (/((https?:\/\/www.guruin.(com|cn))|http:\/\/localhost:\d+)\/(guides)\/(.+)/i).exec(url)
                    }
                    if (result == null) {
                      Renative.Notify.warn('你只能插入专题、攻略、指南、活动、群组、雷达、咕噜（用户）的链接');
                      $.proxy(this, 'convertBadEmbed', url)();
                      return false;
                    }
                    var type = result[4].toLowerCase();
                    var insertable_id = result[5];
                    var $el = this.$el;
                    var height = this.options.height;

                    result = /articles\/(\d+)/.exec(location.pathname);
                    if(result != null){
                      var id_str = result[1];
                      $.ajax({
                        url: '/articles/'+id_str+'/add_article_object_relation',
                        type: 'post',
                        dataType: 'json',
                        data: {type: type, insertable_id: insertable_id},
                        success: function(data){
                          var article_object_relation_id = data.article_object_relation_id;

                          url = url.replace('https://www.guruin.com', '').replace('http://www.guruin.cn', '') + '.html+embed';
                          var $place = $el.find('.medium-insert-embeds-active');
                          $place.after('<div class="medium-insert-guruinembeds">\
                              <div class="item-grid" contenteditable="false">\
                                <figure class="row" style="position:relative;">\
                                  <div class="col-md-6 col-sm-6 col-xs-6">\
                                    <div class="medium-insert-guruinembed">\
                                      <iframe data-article-object-relation-id="'+article_object_relation_id+'" src="' + url + '" width="100%" height="' + height + '" frameborder="0" style="display: block;"></iframe>\
                                      <div class="medium-insert-guruinembeds-overlay"></div>\
                                    </div>\
                                  </div>\
                                </figure>\
                              </div>\
                            </div>');
                          $place.remove();

                          $el.trigger('input');
                        }
                      });
                    }


                  };

                  /**
                   * Convert bad oEmbed content to an actual line.
                   * Instead of displaying the error message we convert the bad embed
                   *
                   * @param {string} content Bad content
                   *
                   * @return {void}
                   */
                  GuruInEmbed.prototype.convertBadEmbed = function (content) {
                    var $place, $empty, $content,
                        emptyTemplate = '<p><br></p>';

                    $place = this.$el.find('.medium-insert-embeds-active');

                    // convert embed node to an empty node and insert the bad embed inside
                    $content = $(emptyTemplate);
                    $place.before($content);
                    $place.remove();
                    $content.html(content);

                    // add an new empty node right after to simulate Enter press
                    $empty = $(emptyTemplate);
                    $content.after($empty);

                    this.core.triggerInput();

                    this.core.moveCaret($place);
                  };

                  GuruInEmbed.prototype.insert = function (e, data) {
                    if (data.source !== this.options.modalId) {
                      return;
                    }

                    var type = data.type;
                    var insertable_id = data.insertable_id;
                    var $el = this.$el;
                    var height = this.options.height;
                    var url = data.url;

                    result = /articles\/(\d+)/.exec(location.pathname);
                    if(result != null){
                      var id_str = result[1];
                      $.ajax({
                        url: '/articles/'+id_str+'/add_article_object_relation',
                        type: 'post',
                        dataType: 'json',
                        data: {type: type, insertable_id: insertable_id},
                        success: function(data){
                          var article_object_relation_id = data.article_object_relation_id;

                          var $place = $el.find('.medium-insert-active');
                          $place.after('<div class="medium-insert-guruinembeds">\
                              <div class="item-grid" contenteditable="false">\
                                <figure class="row" style="position:relative;">\
                                  <div class="col-md-6 col-sm-6 col-xs-6">\
                                    <div class="medium-insert-guruinembed">\
                                      <iframe data-article-object-relation-id="'+article_object_relation_id+'" src="' + url + '" width="100%" height="' + height + '" frameborder="0" style="display: block;"></iframe>\
                                      <div class="medium-insert-guruinembeds-overlay"></div>\
                                    </div>\
                                  </div>\
                                </figure>\
                              </div>\
                            </div>');
                          $place.remove();

                          $el.trigger('input');
                        }
                      });
                    }
                  };

                  GuruInEmbed.prototype.insertAddress = function (e, data) {
                    if (data.source !== this.options.modalId) {
                      return;
                    }

                    var $place = this.$el.find('.medium-insert-active');

                    var formatted_address = data.obj.formatted_address
                    var name = data.obj.name
                    if(formatted_address.indexOf(name) >= 0){
                      var address = formatted_address;
                    }else{
                      var address = ''+name+' - '+formatted_address;
                    }
                    $place.after('<div class="medium-insert-guruinembeds medium-insert-address">\
                        <div contenteditable="false">\
                          <figure style="position:relative;">\
                            <div class="medium-insert-guruinembed">\
                              <a class="address-link external" href="https://maps.google.com/?q='+data.obj.formatted_address+'" data-article-poi-relation-id="'+data.article_poi_relation_id+'">'+address+'</a>\
                              <div class="medium-insert-guruinembeds-overlay"></div>\
                            </div>\
                          </figure>\
                        </div>\
                      </div>');
                    $place.remove();
                    this.$el.trigger('input');
                  };

                  GuruInEmbed.prototype.insertMerchant = function (e, data) {
                    if (data.source !== this.options.modalId) {
                      return;
                    }

                    var $place = this.$el.find('.medium-insert-active');
                    var categoryId = data.category_id;
                    var url = '/merchants/top.html+iframe?category=' + categoryId + '&pagesize=24&sort=twd';
                    var name = data.name
                    if(name) {
                      url += '&name=' + name;
                    }
                    $place.after('<div class="medium-insert-merchants medium-insert-guruinembeds">\
                                    <div class="medium-insert-guruinembed">\
                                      <iframe class="auto-height" src="' + url + '" style="display: block;" width="100%" allowtransparency="true" frameborder="0" scrolling="0" onload="GuruInGlobalMethod_resizeIframe(this);"></iframe>\
                                      <div class="medium-insert-guruinembeds-overlay"></div>\
                                    </div>\
                                  </div>'
                    );

                    $place.remove();
                    this.$el.trigger('input');
                  };

                  /**
                   * Select clicked embed
                   *
                   * @param {Event} e
                   * @returns {void}
                   */

                  GuruInEmbed.prototype.selectEmbed = function (e) {
                    if (this.core.options.enabled) {
                      var $embed = $(e.target).hasClass('medium-insert-guruinembeds') ? $(e.target) : $(e.target).closest('.medium-insert-guruinembeds'),
                        that = this;
                      var isAddress = $embed.hasClass('medium-insert-address');

                      $embed.addClass('medium-insert-guruinembeds-selected');

                      setTimeout(function () {
                        that.addToolbar(isAddress);
                        if(!isAddress){
                          that.addCaption($embed.find('figure'));
                        }
                      }, 50);
                    }
                  };

                  /**
                   * Add caption
                   *
                   * @param {jQuery Element} $el
                   * @return {void}
                   */

                  GuruInEmbed.prototype.addCaption = function ($el) {
                    var $caption = $el.find('div > .item-note > .item-note-content');

                    if ($caption.length === 0) {
                        $el.append('<div class="col-md-6 col-sm-6 col-xs-6">\
                          <div class="item-note">\
                            <div class="item-note-content">\
                              <figcaption class="medium-insert-caption-placeholder"\
                                contenteditable="true" data-placeholder="' + this.options.placeHolder + '">\
                              </figcaption>\
                            </div>\
                          </div>\
                        </div>');
                    } else {
                      if ($caption.find('figcaption').length === 0) {
                        $caption.append('<figcaption class="medium-insert-caption-placeholder"\
                            contenteditable="true" data-placeholder="' + this.options.placeHolder + '">\
                          </figcaption>');
                      }
                      $caption.attr('contenteditable', true);
                    }
                  }

                  /**
                   * Remove captions
                   *
                   * @param {jQuery Element} $ignore
                   * @return {void}
                   */

                  GuruInEmbed.prototype.removeCaptions = function ($ignore) {
                    var $captions = this.$el.find('div > .item-note > .item-note-content');

                    if ($ignore) {
                      $captions = $captions.not($ignore);
                    }

                    $captions.each(function () {
                      if ($(this).hasClass('medium-insert-caption-placeholder') || $(this).text().trim() === '') {
                        $(this).parent().parent().remove();
                      }
                    });
                  };

                  /**
                   * Remove caption placeholder
                   *
                   * @param {jQuery Element} $el
                   * @return {void}
                   */

                  GuruInEmbed.prototype.removeCaptionPlaceholder = function ($el) {
                    var $caption = $el.is('figcaption') ? $el : $el.find('figcaption');

                    if ($caption.length) {
                      $caption.removeClass('medium-insert-caption-placeholder');
                      $caption.removeAttr('data-placeholder');
                    }
                  };

                  /**
                   * Unselect selected embed
                   *
                   * @param {Event} e
                   * @returns {void}
                   */

                  GuruInEmbed.prototype.unselectEmbed = function (e) {
                    var $el = $(e.target).hasClass('medium-insert-guruinembeds') ? $(e.target) : $(e.target).closest('.medium-insert-guruinembeds'),
                        $embed = this.$el.find('.medium-insert-guruinembeds-selected');

                    if ($el.hasClass('medium-insert-guruinembeds-selected')) {
                      $embed.not($el).removeClass('medium-insert-guruinembeds-selected');
                      $('.medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2').remove();
                      this.removeCaptions($el.find('div > .item-note > .item-note-content'));

                      if ($(e.target).is('.medium-insert-caption-placeholder') || $(e.target).is('figcaption') || $(e.target).is('figure.row')) {
                        $el.removeClass('medium-insert-guruinembeds-selected');
                        this.removeCaptionPlaceholder($el.find('figure'));
                      }
                      return;
                    }

                    $embed.removeClass('medium-insert-guruinembeds-selected');
                    $('.medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2').remove();

                    if ($(e.target).is('.medium-insert-caption-placeholder')) {
                      this.removeCaptionPlaceholder($el.find('figure'));
                    } else if ($(e.target).is('figcaption') === false) {
                      this.removeCaptions();
                    }
                  };

                  /**
                   * Remove embed
                   *
                   * @param {Event} e
                   * @returns {void}
                   */

                  GuruInEmbed.prototype.removeEmbed = function (e) {
                    var $embed, $empty;

                    if (e.which === 8 || e.which === 46) {
                      $embed = this.$el.find('.medium-insert-guruinembeds-selected');

                      if ($embed.length) {
                        e.preventDefault();

                        $empty = $('<p><br></p>');
                        $embed.before($empty);

                        var $addressLink = $embed.find('.address-link');
                        var $embedFrame = $embed.find('iframe');
                        if($addressLink.length > 0){
                          var article_poi_relation_id = $addressLink.data('article-poi-relation-id');
                          $.ajax({
                            url: '/articles/remove_address',
                            type: 'post',
                            dataType: 'json',
                            data: {article_poi_relation_id: article_poi_relation_id}
                          });
                        }else if($embedFrame.length > 0){
                          var article_object_relation_id = $embedFrame.data('article-object-relation-id');
                          $.ajax({
                            url: '/articles/remove_article_object_relation',
                            type: 'post',
                            dataType: 'json',
                            data: {article_object_relation_id: article_object_relation_id}
                          });
                        }

                        $embed.remove();
                        // Hide addons
                        this.core.hideAddons();

                        this.core.moveCaret($empty);
                        this.$el.trigger('input');
                      }
                    }
                  };

                  /**
                   * Adds embed toolbar to editor
                   *
                   * @returns {void}
                   */

                  GuruInEmbed.prototype.addToolbar = function (isAddress) {
                    var $embed = this.$el.find('.medium-insert-guruinembeds-selected'),
                      active = false,
                      $toolbar, $toolbar2, top;

                    if ($embed.length === 0) {
                      return;
                    }

                    $('body').append(Handlebars.compile('{{#if actions}}\
                        <div class="medium-insert-embeds-toolbar2 medium-editor-toolbar medium-editor-toolbar-active {{#if isAddress}}medium-editor-address-remove{{/if}}">\
                          <ul class="medium-editor-toolbar-actions clearfix">\
                            {{#each actions}}\
                              {{#if label}}\
                                <li>\
                                  <button class="medium-editor-action" data-action="{{@key}}">{{{label}}}</button>\
                                </li>\
                              {{/if}}\
                            {{/each}}\
                          </ul>\
                        </div>\
                      {{/if}}')({
                      actions: this.options.actions,
                      isAddress: isAddress
                    }).trim());

                    $toolbar = $('.medium-insert-embeds-toolbar');
                    $toolbar2 = $('.medium-insert-embeds-toolbar2');

                    top = $embed.offset().top - $toolbar.height() - 8 - 2 - 5; // 8px - hight of an arrow under toolbar, 2px - height of an embed outset, 5px - distance from an embed
                    if (top < 0) {
                        top = 0;
                    }

                    $toolbar
                      .css({
                        top: top,
                        left: $embed.offset().left + $embed.width() / 2 - $toolbar.width() / 2
                      })
                      .show();

                    $toolbar2
                      .css({
                        top: $embed.offset().top + 2, // 2px - distance from a border
                        left: $embed.offset().left + $embed.width() - $toolbar2.width() - 4 // 4px - distance from a border
                      })
                      .show();

                    $toolbar.find('button').each(function () {
                      if ($embed.hasClass('medium-insert-embeds-'+ $(this).data('action'))) {
                        $(this).addClass('medium-editor-button-active');
                        active = true;
                      }
                    });

                    if (active === false) {
                      $toolbar.find('button').first().addClass('medium-editor-button-active');
                    }
                  };

                  GuruInEmbed.prototype.toolbar2Action = function (e) {
                    var $button = $(e.target).is('button') ? $(e.target) : $(e.target).closest('button'),
                        callback = this.options.actions[$button.data('action')].clicked;

                    if (callback) {
                      callback(this.$el.find('.medium-insert-guruinembeds-selected'));
                    }

                    this.core.triggerInput();
                  };

                  var attractionAddon = 'GuruInAttractionEmbed';

                  $.fn[pluginName + attractionAddon] = function (options) {
                      return this.each(function () {
                          if (!$.data(this, 'plugin_' + pluginName + attractionAddon)) {
                              $.data(this, 'plugin_' + pluginName + attractionAddon, new GuruInEmbed(this, options));
                          }
                      });
                  };

                  var addressAddon = 'GuruInAddressEmbed';

                  $.fn[pluginName + addressAddon] = function (options) {
                      return this.each(function () {
                          if (!$.data(this, 'plugin_' + pluginName + addressAddon)) {
                              $.data(this, 'plugin_' + pluginName + addressAddon, new GuruInEmbed(this, options));
                          }
                      });
                  };

                  var merchantIframeAddon = 'GuruInMerchantIframeEmbed';
                  $.fn[pluginName + merchantIframeAddon] = function (options) {
                      return this.each(function () {
                        if (!$.data(this, 'plugin_' + pluginName + merchantIframeAddon)) {
                            $.data(this, 'plugin_' + pluginName + merchantIframeAddon, new GuruInEmbed(this, options));
                        }
                      });
                  };

                  var articleAddon = 'GuruInArticleEmbed';

                  $.fn[pluginName + articleAddon] = function (options) {
                    return this.each(function () {
                      if (!$.data(this, 'plugin_' + pluginName + articleAddon)) {
                        $.data(this, 'plugin_' + pluginName + articleAddon, new GuruInEmbed(this, options));
                      }
                    });
                  };

                })(jQuery, window, document);

                $(function () {
                  $('.item-article-content').mediumInsert({
                    editor: editor,
                    addons: {
                      images: {
                        deleteScript: null,
                        fileUploadOptions: {
                          url: '/photos',
                          paramName: 'photo[url]',
                          formData: [
                            {
                              name: 'photo[photoable_id]',
                              value: articleId
                            },
                            {
                              name: 'photo[photoable_type]',
                              value: 'Db::Article'
                            },
                            {
                              name: 'photo[context]',
                              value: 'embed'
                            }
                          ],
                          acceptFileTypes: /(.|\/)(gif|jpe?g|png)$/i
                        }
                      },
                      embeds: false,
                      guruInAddressEmbed: {
                        label: '<span class="fa fa-map-pin" title="插入地址"></span>',
                        modalId: '#modal-add-address',
                        popup: true,
                        height: 309
                      },
                      guruInArticleEmbed: {
                        label: '<span class="fa fa-map-signs" title="插入专题、攻略、指南、活动、群组、雷达、咕噜（用户）"></span>',
                        popup: false,
                        height: 300
                      },
                      guruInAttractionEmbed: {
                        label: '<span class="fa fa-binoculars" title="插入景点"></span>',
                        modalId: '#modal-add-attraction',
                        popup: true,
                        height: 309
                      },
                      GuruInMerchantIframeEmbed: {
                        label: '<span class="fa fa-home" title="插入商家"></span>',
                        modalId: '#modal-add-merchants-iframe',
                        popup: true,
                        height: 300
                      }
                    }
                  });
                });
              }

              Articles.initEditor = initEditor;
            })(Articles = Controllers.Articles || (Controllers.Articles = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Article;
            (function (Article_1) {
                var Manage;
                (function (Manage) {
                    // GuruIn.App.Controllers.Articles.publish
                    var Notify = Renative.Notify;
                    var DOM = Renative.DOM;
                    // controller definition
                    function Controller($scope, $window, Article) {
                        var self = $scope;
                        self.saving = false;
                        self.destroy = false;
                        self.allowSave = function () {
                            return !self.saving;
                        };
                        self.allowPublish = function () {
                            return self.model.draft == 'true';
                        };
                        self.allowHide = function () {
                            return self.model.published == 'true';
                        };
                        self.save = function () {
                            self.saving = true;
                            var content = formatArticleBody();
                            if (_.isEmpty(content)) {
                                self.saving = false;
                                return;
                            }
                            var data = { id: self.model.id, article: { content: content } };
                            Article.update(data, function () {
                                self.saving = false;
                                Notify.success('保存成功！');
                            }, function () {
                                self.saving = false;
                                Notify.error('保存失败，请重试！');
                            });
                        };
                        self.manage = function (e) {
                            if (self.allowPublish()) {
                                doPublish();
                            }
                            else if (self.allowHide()) {
                                doUnpublish();
                            }
                        };
                        var doAutoSave = function () {
                            if (self.destroy) {
                                return;
                            }
                            if (!self.allowHide()) {
                                Notify.info('自动保存中...');
                                console.log('#[GuruIn.App.Controllers.Article.Manage] auto saving...');
                                self.saving = true;
                                var content = formatArticleBody(true);
                                if (_.isEmpty(content) || self.content == content) {
                                    self.saving = false;
                                    return;
                                }
                                var data = { id: self.model.id, article: { content: content } };
                                Article.update(data, function () {
                                    self.saving = false;
                                    self.content = content;
                                }, function () {
                                    self.saving = false;
                                });
                            }
                            // self.autoSaveHandler = setTimeout(doAutoSave, 30000);
                        };
                        var doPublish = function () {
                            var content = formatArticleBody();
                            if (_.isEmpty(content)) {
                                return;
                            }
                            var data = { id: self.model.id, article: { status: 'published', content: content } };
                            Article.update(data, function () {
                                Notify.success('发布成功！');
                                self.model.draft = 'false';
                                self.model.published = 'true';
                            }, function () {
                                Notify.error('发布失败，请重试！');
                            });
                        };
                        var doUnpublish = function () {
                            var data = { id: self.model.id, article: { status: 'draft' } };
                            Article.update(data, function () {
                                Notify.success('隐藏成功！别人无法再浏览这篇攻略。');
                                self.model.draft = 'true';
                                self.model.published = 'false';
                            }, function () {
                                Notify.error('隐藏失败，请重试！');
                            });
                        };
                        var formatArticleBody = function (auto_save) {
                            if (auto_save === void 0) { auto_save = false; }
                            var editor = $('.item-article-content');
                            var base64_images = editor.find('img[src^="data:image"]').length;
                            if (!auto_save && base64_images > 0) {
                                Notify.error('您的文章中有 (' + base64_images + ') 张图片没上传成功，请删除后重新上传。未上传成功的图片显示半透明！');
                                return '';
                            }
                            var content = $.fn.append.apply($('<div>'), $.parseHTML(editor.html()));
                            content.find('[contenteditable]').removeAttr('contenteditable');
                            content.find('.medium-insert-merchants').removeClass('medium-insert-guruinembeds');
                            content.find('.medium-insert-buttons').remove();
                            content.find('.medium-insert-guruinembeds-overlay').remove();
                            content.find('img[src^="data:image"]').remove();
                            return content.html();
                        };
                        var preventPageChange = function (e) {
                            if ($(e.currentTarget).hasClass('allow-in-editing')) {
                                return true;
                            }
                            var go = $window.confirm('您现在正在编辑文章，请确认您要离开编辑页面前往其他页面？');
                            // debugger
                            if (!go) {
                                DOM.stopPropagation(e);
                            }
                            return go;
                        };
                        var preventPageRefresh = function () {
                            return "您现在正在编辑文章，请确认您要刷新页面？";
                        };
                        $(document).unbind('keydown').bind('keydown', function (event) {
                            // backspace
                            if (event.keyCode === 8) {
                                var d = event.srcElement || event.target;
                                var jd = $(d);
                                if (jd.closest('.item-article-editing').length == 0 && !jd.is('input, textarea')) {
                                    event.preventDefault();
                                }
                            }
                        });
                        $(window).bind('beforeunload', preventPageRefresh);
                        $('a[href]').bind('click', preventPageChange);
                        // self.autoSaveHandler = setTimeout(doAutoSave, 30000);
                        self.$on('$destroy', function () {
                            // console.log('#[GuruIn.App.Controllers.Article.Manage] destroy: (' + self.autoSaveHandler + ')');
                            self.destroy = true;
                            $(window).unbind('beforeunload', preventPageRefresh);
                            $('a[href]').unbind('click', preventPageChange);
                            //if (self.autoSaveHandler) {
                            //  clearTimeout(self.autoSaveHandler);
                            //}
                        });
                    }
                    Manage.Controller = Controller;
                    $('#modal-add-address').on('shown.bs.modal', function () {
                        $(this).find('input[name=address]').focus();
                    });
                    $('#modal-add-attraction').on('shown.bs.modal', function () {
                        $(this).find('input[type=text]').eq(0).focus();
                    });
                    // module initialize
                    angular
                        .module('GuruIn.App')
                        .controller('GuruIn.App.Controllers.Article.Manage', ['$scope', '$window', 'ArticleManageResource', Controller]);
                })(Manage = Article_1.Manage || (Article_1.Manage = {}));
            })(Article = Controllers.Article || (Controllers.Article = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Article;
            (function (Article) {
                var R = GuruIn.App.Resources;
                // resource service definition
                function Resource($resource) {
                    return R.railsResource($resource, '/articles/:id.json');
                }
                Article.Resource = Resource;
                angular
                    .module('GuruIn.App')
                    .factory('ArticleManageResource', ['$resource', Resource]);
            })(Article = Controllers.Article || (Controllers.Article = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Articles;
            (function (Articles) {
                var DOM = Renative.DOM;
                var Notify = Renative.Notify;
                function buildAnchors() {
                    var titles = $('.item-article-content h2');
                    var outline = $('.item-outline ul.nav');
                    for (var i = 0; i < titles.length; i++) {
                        var text = $(titles[i]).text();
                        var name = Math.random().toString(36).substr(2, 5);
                        var aList = $(titles[i]).find('a');
                        if (aList.length > 0) {
                            var $a = $(aList[0]);
                            $a.attr('id', name);
                            $a.attr('name', name);
                        }
                        else {
                            var $title = $(titles[i]);
                            $title.text('');
                            $title.append('<a id="' + name + '" name="' + name + '">' + text + '</a>');
                        }
                        outline.append('<li><a href="#' + name + '" xhr="no">' + text + '</a></li>');
                    }
                }
                function setOutline() {
                    "use strict";
                    buildAnchors();
                    var $body = $(document.body);
                    $body.scrollspy({
                        target: ".item-outline"
                    });
                    $body.scrollspy("refresh");
                    setTimeout(function () {
                        var $sidebar = $("nav.item-outline");
                        var article = $(".item-section .item-article");
                        $sidebar.affix({
                            offset: {
                                top: $('.item-outline').offset().top - 20,
                                bottom: $('#page').height() - article.height() - article.offset().top + 50
                            }
                        });
                    }, 1000);
                }
                Articles.setOutline = setOutline;
                function publish(e) {
                    var content = $.fn.append.apply($('<div>'), $.parseHTML($('.item-article-content').html()));
                    content.find('[contenteditable]').removeAttr('contenteditable');
                    content.find('.medium-insert-buttons').remove();
                    content.find('.medium-insert-guruinembeds-overlay').remove();
                    $.ajax({
                        url: window.location.pathname, method: 'PUT', data: {
                            article: {
                                status: 'published',
                                content: content.html()
                            }
                        }, dataType: 'html'
                    })
                        .done(function () {
                        $(e.currentTarget).hide();
                        $('#unpublish-article').show();
                        Notify.success('发布成功！');
                    });
                }
                Articles.publish = publish;
                function unpublish(e) {
                    $.ajax({ url: window.location.pathname, method: 'PUT', data: { article: { status: 'draft' } }, dataType: 'html' })
                        .done(function () {
                        $(e.currentTarget).hide();
                        $('#publish-article').show();
                        Notify.success('隐藏成功！别人无法再浏览这篇攻略。');
                    });
                }
                Articles.unpublish = unpublish;
                function ArticleSeriesShow($scope) {
                    var self = $scope;
                    self.show_all = function (e) {
                        DOM.stopPropagation(e);
                        $('.article-series-item').removeClass('hide');
                        $(e.target).hide();
                    };
                }
                Articles.ArticleSeriesShow = ArticleSeriesShow;
                function MiniArticlePhotosCtrl($scope, $http, $compile) {
                    $scope.photos = [];
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (result.photoable_id == $scope.activity_id && /::MiniArticle/i.test(result.photoable_type)) {
                                $scope.photos.push({ id: result.id, url: result.url });
                            }
                            window.location.reload();
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                }
                Articles.MiniArticlePhotosCtrl = MiniArticlePhotosCtrl;
                ;
                angular
                    .module('GuruIn.App')
                    .controller('GuruIn.App.Controllers.Articles.MiniArticlePhotosCtrl', ['$scope', '$http', '$compile', MiniArticlePhotosCtrl])
                    .controller('GuruIn.App.Controllers.Articles.ArticleSeriesShow', ['$scope', ArticleSeriesShow]);
                $(document).on('bootstrap:region:completed', function () {
                    if ($('#modal-article-map').length > 0) {
                        $('#modal-article-map').on('shown.bs.modal', function () {
                            GuruInGlobalMethod_loadMaps();
                        });
                    }
                    if ($('#modal-popup-map').length > 0) {
                        $('#modal-popup-map').on('shown.bs.modal', function () {
                            MiniArticlePopupMap.loadMaps();
                        });
                    }
                });
            })(Articles = Controllers.Articles || (Controllers.Articles = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Attraction;
            (function (Attraction) {
                'use strict';
                var Notify = Renative.Notify;
                function AttractionActionsCtrl($scope, $http, $compile) {
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            Turbolinks.visit(window.location.href, { action: 'replace' });
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $(document).on('guruin:attraction:photos:rendering', function (e, el) {
                        var plainHtml = $("<div />").append($("#photo-list").clone()).html();
                        var $newData = $(plainHtml);
                        angular.element('#photo-list').empty();
                        $compile($newData)($scope);
                        $('#photo-list').replaceWith($newData);
                    });
                }
                Attraction.AttractionActionsCtrl = AttractionActionsCtrl;
                ;
                angular.module('GuruIn.App')
                    .controller('AttractionActionsCtrl', ['$scope', '$http', '$compile', AttractionActionsCtrl]);
            })(Attraction = Controllers.Attraction || (Controllers.Attraction = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Attraction;
            (function (Attraction) {
                function AttractionSearchController($scope, $http) {
                    $scope.remoteUrlRequestFn = function (str) {
                        return { k: str };
                    };
                    $scope.selectedAttraction = function (selected) {
                        if (selected && selected.originalObject) {
                            var url = '';
                            if (selected.originalObject.type == "attraction") {
                                url = '/attractions/' + selected.originalObject.id + '.html+embed';
                            }
                            else {
                                url = '/attractions/l/' + selected.originalObject.id + '.html+embed';
                            }
                            $('.item-article-content').trigger('select', { url: url, type: 'attractions', insertable_id: selected.originalObject.id, source: '#modal-add-attraction' });
                            $('#modal-add-attraction').modal('hide');
                            $scope.searchStr = '';
                        }
                    };
                }
                Attraction.AttractionSearchController = AttractionSearchController;
                angular
                    .module('GuruIn.App')
                    .controller('AttractionSearchController', ['$scope', '$http', AttractionSearchController]);
            })(Attraction = Controllers.Attraction || (Controllers.Attraction = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Group;
            (function (Group) {
                var Notify = Renative.Notify;
                function TopicsController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.has_error = false;
                    $scope.error_msg = '';
                    $scope.url = '';
                    $scope.topic_type = 0;
                    $scope.topic_list_selector = '';
                    $scope.anonymous = true;
                    $scope.photos = [];
                    $scope.resetPhoto = function () {
                        if (typeof $scope.queue != 'undefined') {
                            $scope.queue = null;
                        }
                        for (var i = 0, len = $scope.photos.length; i < len; ++i) {
                            $('#photo-' + $scope.photos[i]).remove();
                        }
                    };
                    $scope.content = '';
                    $scope.submit = function ($event) {
                        if ($.trim($scope.content).length === 0) {
                            alert('请输入内容');
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        var content = $scope.content;
                        $scope.content = '';
                        $http.post($scope.url, { topic: { anonymous: !$scope.anonymous, content: content.replace(/\n/g, '<br>'), rating: ($scope.rating || 0), topic_type: $scope.topic_type } })
                            .then(function (result) {
                            var $new_topic = $(result.data);
                            $compile($new_topic)($scope);
                            if ($scope.topic_list_selector && $scope.topic_list_selector != '') {
                                var container = $($scope.topic_list_selector);
                            }
                            else {
                                var container = $($event.target).closest('[ng-controller=DiscussionCtrl]').find('div.topics');
                                if (!container || container.length < 1) {
                                    container = $('div.campaign-list[ng-controller=TopicListController]');
                                }
                                if (!container || container.length < 1) {
                                    container = $('div.topics');
                                }
                            }
                            container.prepend($new_topic);
                            $new_topic.hide();
                            $new_topic.slideDown('slow');
                            $new_topic.find('div.alert').show();
                            $scope.loading = false;
                            $scope.has_error = false;
                            $scope.error_msg = '';
                            $('#modal-rate-review').modal('hide'); // hack for attractions, will work even if #modal-rate-view is not present.
                            if (typeof autosize == 'function' && $new_topic.find('textarea.autosize-textarea').length > 0) {
                                autosize($new_topic.find('textarea.autosize-textarea'));
                            }
                            if ($('#total_topic_count').length > 0) {
                                var original = parseInt($('#total_topic_count').text());
                                $('#total_topic_count').text(original + 1);
                            }
                            var pureCount = container.find('#total-pure-topic-count');
                            if (pureCount.length > 0) {
                                var original = parseInt(pureCount.val());
                                pureCount.val((original + 1) + '');
                                $new_topic.find('.pull-right').html('<span class="campaign-level">' + (original + 1) + ' 楼</span>');
                            }
                            $scope.resetPhoto();
                        }, function () {
                            $scope.content = content;
                            $scope.has_error = true;
                            $scope.error_msg = '发表失败，请重试或联系我们。';
                            $scope.loading = false;
                        });
                    };
                    $scope.submitCampaign = function ($event) {
                        if ($.trim($scope.content).length === 0) {
                            Notify.warn('请输入内容');
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        var content = $scope.content;
                        $scope.content = '';
                        $http.post($scope.url, { topic: { anonymous: !$scope.anonymous, content: content.replace(/\n/g, '<br>'), rating: ($scope.rating || 0), topic_type: $scope.topic_type } })
                            .then(function (result) {
                            var $new_topic = $(result.data);
                            $compile($new_topic)($scope);
                            var container_selector = 'div.campaign-list[ng-controller=TopicListController]';
                            if ($scope.topic_list_selector && $scope.topic_list_selector != '') {
                                container_selector = $scope.topic_list_selector;
                            }
                            var container = $(container_selector);
                            container.prepend($new_topic);
                            $new_topic.hide();
                            $new_topic.slideDown('slow');
                            if (typeof autosize == 'function' && $new_topic.find('textarea.autosize-textarea').length > 0) {
                                autosize($new_topic.find('textarea.autosize-textarea'));
                            }
                            if ($('#total_topic_count').length > 0) {
                                var original = parseInt($('#total_topic_count').text());
                                $('#total_topic_count').text(original + 1);
                            }
                            var pureCount = container.find('#total-pure-topic-count');
                            if (pureCount.length > 0) {
                                var original = parseInt(pureCount.val());
                                pureCount.val((original + 1) + '');
                                $new_topic.find('.pull-right').html('<span class="campaign-level">' + (original + 1) + ' 楼</span>');
                            }
                            $scope.loading = false;
                            $scope.resetPhoto();
                        }, function () {
                            Notify.warn('发表失败，请重试或联系我们。');
                            $scope.loading = false;
                        });
                    };
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (result.context == 'photo') {
                                $scope.photos.push(result.id);
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                }
                Group.TopicsController = TopicsController;
                angular.module('GuruIn.App')
                    .controller('TopicsController', ['$scope', '$http', '$compile', TopicsController]);
                function CommentsController($scope, $http, $compile) {
                    $scope.topic_id = 0;
                    $scope.loading = false;
                    $scope.has_error = false;
                    $scope.error_msg = '';
                    $scope.url = '';
                    $scope.reply_model = {
                        content: '',
                        at_user_id: 0,
                        at_user_name: '',
                        reply_content: '',
                        anonymous: true
                    };
                    $scope.get_input_padding = function () {
                        if ($scope.reply_model.at_user_id > 0) {
                            var tmp = $('<span style="display:hidden" class="item-reply-name">回复 ' + $scope.reply_model.at_user_name + '：</span>');
                            $('span#item-reply-name-' + $scope.topic_id).parent().append(tmp);
                            var padding = tmp.width() + 20;
                            tmp.remove();
                            return padding + 'px';
                        }
                        return '';
                    };
                    $scope.on_keydown = function (code) {
                        var $input = $('span#item-reply-name-' + $scope.topic_id).parent().find('input');
                        // Backspace
                        if (code == 8 && $input[0]['selectionStart'] == 0) {
                            $scope.reply_model.at_user_id = 0;
                        }
                    };
                    $scope.reply = function (at_user_id, at_user_name) {
                        $scope.reply_model.at_user_id = at_user_id;
                        $scope.reply_model.at_user_name = at_user_name;
                        var $input = $('span#item-reply-name-' + $scope.topic_id).parent().find('input');
                        $input[0].focus();
                    };
                    $scope.replyCampaign = function (at_user_id, at_user_name, comment_id) {
                        if ($('#reply-collapse-' + comment_id).is(":visible")) {
                            $scope.reply_model.at_user_id = 0;
                            $scope.reply_model.at_user_name = '';
                            $('#reply-collapse-' + comment_id).hide();
                        }
                        else {
                            $scope.reply_model.at_user_id = at_user_id;
                            $scope.reply_model.at_user_name = at_user_name;
                            $("[id^=reply-collapse-]").hide();
                            $('#reply-collapse-' + comment_id).show();
                        }
                    };
                    $scope.openModalComment = function () {
                        $('#modal-topic-id').val($scope.topic_id);
                        $('#modal-at-user-id').val($scope.reply_model.at_user_id);
                        $('#modal-photo-comment').modal('show');
                    };
                    $scope.toggleTopic = function (topic_id) {
                        var comment_list_id = '#comments-' + $scope.topic_id;
                        if ($(comment_list_id).is(":visible")) {
                            $(comment_list_id).hide();
                        }
                        else {
                            $(comment_list_id).show();
                        }
                    };
                    $scope.submit = function () {
                        if ($.trim($scope.reply_model.content).length === 0) {
                            alert('请输入内容');
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $http.post($scope.url, { comment: { content: $scope.reply_model.content, at_user_id: $scope.reply_model.at_user_id, anonymous: !$scope.reply_model.anonymous } })
                            .then(function (result) {
                            var $new_comment = $(result.data);
                            var container = angular.element(document.querySelector('div#comments-' + $scope.topic_id));
                            container.append($new_comment);
                            $compile($new_comment)($scope);
                            $scope.reply_model.content = '';
                            $scope.reply_model.at_user_id = 0;
                            $scope.reply_model.at_user_name = '';
                            $new_comment.hide();
                            $new_comment.slideDown('slow');
                            $scope.loading = false;
                            $scope.has_error = false;
                            $scope.error_msg = '';
                        }, function () {
                            $scope.has_error = true;
                            $scope.error_msg = '发表失败，请重试或联系我们。';
                            $scope.loading = false;
                        });
                    };
                    $scope.submitCampaign = function (topicId) {
                        if ($.trim($scope.reply_model.content).length === 0 && $.trim($scope.reply_model.reply_content).length === 0) {
                            alert('请输入内容');
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        var reply_comment = $scope.reply_model.content;
                        if ($.trim(reply_comment).length === 0) {
                            reply_comment = $scope.reply_model.reply_content;
                        }
                        var commentCountId = '#comment-total-count-' + topicId;
                        $http.post($scope.url, { comment: { content: reply_comment, at_user_id: $scope.reply_model.at_user_id, anonymous: !$scope.reply_model.anonymous } })
                            .then(function (result) {
                            var comment_list_id = '#comments-' + $scope.topic_id;
                            if (!($(comment_list_id).is(":visible"))) {
                                $(comment_list_id).show();
                            }
                            var $new_comment = $(result.data);
                            $compile($new_comment)($scope);
                            $('#split-comments-' + $scope.topic_id).before($new_comment);
                            $scope.reply_model.content = '';
                            $scope.reply_model.reply_content = '';
                            $scope.reply_model.at_user_id = 0;
                            $scope.reply_model.at_user_name = '';
                            $new_comment.hide();
                            $new_comment.slideDown('slow');
                            if ($(commentCountId).length > 0) {
                                var original = parseInt($(commentCountId).text());
                                $(commentCountId).text(original + 1);
                            }
                            if ($('#total_topic_count').length > 0) {
                                var original = parseInt($('#total_topic_count').text());
                                $('#total_topic_count').text(original + 1);
                            }
                            $scope.loading = false;
                            $("[id^=reply-collapse-]").hide();
                            if (typeof autosize == 'function') {
                                autosize($new_comment.find('textarea.autosize-textarea'));
                            }
                        }, function () {
                            $scope.loading = false;
                            Notify.warn('发表失败，请重试或联系我们。');
                        });
                    };
                    $scope.deleteTopic = function (e, id) {
                        if (confirm('你确定要删除这个主题吗？')) {
                            $http['delete']('/topics/' + id)
                                .then(function (data) {
                                Notify.success('删除主题成功.');
                                $(e.target).closest('.item-panel').hide('slow');
                            }, function () {
                                Notify.warn('删除失败,请稍后再试.');
                            });
                        }
                    };
                    $scope.deleteCampaignTopic = function (e, id) {
                        if (confirm('你确定要删除这个主题吗？')) {
                            $http['delete']('/topics/' + id)
                                .then(function (data) {
                                Notify.success('删除主题成功.');
                                $(e.target).closest('.campaign-wrap').hide('slow');
                                if ($('#total_topic_count').length > 0) {
                                    var original = parseInt($('#total_topic_count').text());
                                    var commentCount = parseInt($('#comment-total-count-' + id).text());
                                    $('#total_topic_count').text(original - commentCount - 1 > 0 ? original - commentCount - 1 : 0);
                                }
                            }, function () {
                                Notify.warn('删除失败,请稍后再试.');
                            });
                        }
                    };
                    $scope.deleteComment = function (e, id) {
                        if (confirm('你确定要删除这个评论吗？')) {
                            $http['delete']('/comments/' + id)
                                .then(function (data) {
                                Notify.success('删除评论成功.');
                                $(e.target).closest('.item-user').hide('slow');
                            }, function () {
                                Notify.warn('删除失败,请稍后再试.');
                            });
                        }
                    };
                    $scope.deleteCampaignComment = function (e, id, topic_id) {
                        if (confirm('你确定要删除这个评论吗？')) {
                            $http['delete']('/comments/' + id)
                                .then(function (data) {
                                Notify.success('删除评论成功.');
                                $(e.target).closest('.campaign-reply').remove();
                                var comment_list_id = '#comments-' + topic_id;
                                if ($('div.campaign-reply').length <= 0) {
                                    $(comment_list_id).hide();
                                }
                                else {
                                    $(comment_list_id).show();
                                }
                                var commentCountId = '#comment-total-count-' + topic_id;
                                if ($(commentCountId).length > 0) {
                                    var original = parseInt($(commentCountId).text());
                                    $(commentCountId).text(original - 1 >= 0 ? original - 1 : 0);
                                }
                                if ($('#total_topic_count').length > 0) {
                                    var original = parseInt($('#total_topic_count').text());
                                    $('#total_topic_count').text(original - 1 > 0 ? original - 1 : 0);
                                }
                            }, function () {
                                Notify.warn('删除失败,请稍后再试.');
                            });
                        }
                    };
                }
                Group.CommentsController = CommentsController;
                angular.module('GuruIn.App')
                    .controller('CommentsController', ['$scope', '$http', '$compile', CommentsController]);
                function TopicListController($scope, $http, $compile) {
                    $scope.hasMoreTopics = true;
                    $scope.load_more_url = '';
                    $scope.page_number = 2;
                    $scope.loadMoreTopics = function (container_id) {
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $http.get($scope.load_more_url + '&page=' + $scope.page_number)
                            .then(function (response) {
                            var $newData = $(response.data);
                            $compile($newData)($scope);
                            $(container_id).append($newData);
                            $newData.hide();
                            $newData.slideDown('slow');
                            $scope.loading = false;
                            $scope.page_number += 1;
                            if (response.data.length == 0) {
                                $scope.hasMoreTopics = false;
                            }
                            var loading_element = $(container_id).children('.campaign-reply.campaign-reply-more').first();
                            loading_element.remove();
                        }, function () {
                            Renative.Notify.warning('加载失败, 请稍后重新或者联系我们.');
                            $scope.loading = false;
                        });
                    };
                    $(document).on('guruin:topic:rendering', function (e, el) {
                        var $newData = $(el);
                        $compile($newData)($scope);
                        $(el).replaceWith($newData);
                        if (typeof autosize == 'function' && $newData.find('textarea.autosize-textarea').length > 0) {
                            autosize($newData.find('textarea.autosize-textarea'));
                        }
                    });
                }
                Group.TopicListController = TopicListController;
                angular.module('GuruIn.App')
                    .controller('TopicListController', ['$scope', '$http', '$compile', TopicListController]);
                function CommentsModalController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.has_error = false;
                    $scope.error_msg = '';
                    $scope.url = '';
                    $scope.content = '';
                    $scope.anonymous = true;
                    $scope.photos = [];
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (result.context == 'photo') {
                                $scope.photos.push(result.id);
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                    $scope.submitCampaign = function () {
                        if ($.trim($scope.content).length === 0) {
                            alert('请输入内容');
                            return;
                        }
                        var topic_id = $('#modal-topic-id').val();
                        if (topic_id === "0") {
                            return;
                        }
                        var at_user_id = $('#modal-at-user-id').val();
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        var reply_comment = $scope.content;
                        var commentCountId = '#comment-total-count-' + topic_id;
                        var post_url = $scope.url + '/' + topic_id + '/comments';
                        $http.post(post_url, { comment: { content: reply_comment, at_user_id: at_user_id, anonymous: !$scope.anonymous } })
                            .then(function (result) {
                            var comment_list_id = '#comments-' + topic_id;
                            if (!($(comment_list_id).is(":visible"))) {
                                $(comment_list_id).show();
                            }
                            var $new_comment = $(result.data);
                            $compile($new_comment)($scope);
                            $('#split-comments-' + topic_id).before($new_comment);
                            $scope.content = '';
                            $('#modal-topic-id').val('0');
                            $('#modal-at-user-id').val('0');
                            $new_comment.hide();
                            $new_comment.slideDown('slow');
                            if ($(commentCountId).length > 0) {
                                var original = parseInt($(commentCountId).text());
                                $(commentCountId).text(original + 1);
                            }
                            if ($('#total_topic_count').length > 0) {
                                var original = parseInt($('#total_topic_count').text());
                                $('#total_topic_count').text(original + 1);
                            }
                            $scope.loading = false;
                            $("[id^=reply-collapse-]").hide();
                            if (typeof autosize == 'function') {
                                autosize($new_comment.find('textarea.autosize-textarea'));
                            }
                            $scope.resetPhoto();
                            $('#modal-photo-comment').modal('hide');
                        }, function () {
                            $scope.loading = false;
                            Notify.warn('发表失败，请重试或联系我们。');
                        });
                    };
                    $scope.resetPhoto = function () {
                        if (typeof $scope.queue != 'undefined') {
                            $scope.queue = null;
                        }
                        for (var i = 0, len = $scope.photos.length; i < len; ++i) {
                            $('#photo-' + $scope.photos[i]).remove();
                        }
                    };
                }
                Group.CommentsModalController = CommentsModalController;
                angular.module('GuruIn.App')
                    .controller('CommentsModalController', ['$scope', '$http', '$compile', CommentsModalController]);
            })(Group = Controllers.Group || (Controllers.Group = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
angular.module('GuruIn.App')
.factory('buildPageParam', function() {
  return function(pageIndex, pageSize, type) {
    var result = '';
    var has_parameter = false;
    if (pageIndex > 1) {
      result = '?page=' + pageIndex;
      has_parameter = true;
    }

    result += (has_parameter ? '&page_size=' : '?page_size=') + pageSize;
    result += '&type=' + type;

    return result;
  };
})
.controller('DiscussionCtrl', ['$scope', '$http', '$compile', 'buildPageParam', function($scope, $http, $compile, buildPageParam) {
  $scope.nextPageIndex = 2;
  $scope.hasMore = true;

  $scope.loadMore = function() {
    $scope.loading = true;

    $http.get($scope.path + '.html+partial-empty' + buildPageParam($scope.nextPageIndex, 5, 0))
    .then(function(response) {
      var $newData = $(response.data);
      $compile($newData)($scope);
      $($scope.container_id).append($newData);
      $newData.hide();
      $newData.slideDown('slow');
      $scope.loading = false;
      $scope.nextPageIndex++;

      if (response.data.length == 0) {
        $scope.hasMore = false;
      }
    }, function() {
      Renative.Notify.warning('加载失败, 请稍后重新或者联系我们.');
      $scope.loading = false;
    });
  };
}])
.controller('DiscussionCampaignCtrl', ['$scope', '$http', '$compile', 'buildPageParam', function($scope, $http, $compile, buildPageParam) {
  $scope.nextPageIndex = 2;
  $scope.hasMore = true;

  $scope.loadMore = function() {
    $scope.loading = true;

    $http.get($scope.path + '.html+partial-empty' + buildPageParam($scope.nextPageIndex, $scope.page_size, 1))
    .then(function(response) {
      var $newData = $(response.data);
      $compile($newData)($scope);
      $($scope.container_id).before($newData);
      $newData.hide();
      $newData.slideDown('slow');
      $scope.loading = false;
      $scope.nextPageIndex++;

      if (response.data.length == 0) {
        $scope.hasMore = false;
      }

      if(typeof autosize == 'function'){
        autosize($newData.find('textarea.autosize-textarea'));
      }
    }, function() {
      Renative.Notify.warning('加载失败, 请稍后重新或者联系我们.');
      $scope.loading = false;
    });
  };
}]);
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Group;
            (function (Group_1) {
                var R = GuruIn.App.Resources;
                var Notify = Renative.Notify;
                function GroupResource($resource) {
                    return R.railsResource($resource, '/groups/:id.json');
                }
                Group_1.GroupResource = GroupResource;
                function GroupCreateCtrl($scope, Group) {
                    var self = $scope;
                    self.currentStep = 1;
                    self.group = {};
                    self.group.approval_type = 'do_not_need_to_approve';
                    self.group.visibility_type = 'all_can_see';
                    self.group.activity_creation_type = 'members_can_create';
                    self.group.group_questions_attributes = [];
                    self.group.group_questions_attributes.push({ question: '' });
                    self.goPrevStep = function () {
                        if (self.currentStep === 1) {
                            return;
                        }
                        self.submitted = false;
                        self.goStep(--self.currentStep);
                    };
                    self.goNextStep = function () {
                        self.submitted = true;
                        if (self.currentStep === 1 && (!self.city || self.city.$invalid)) {
                            return;
                        }
                        if (self.currentStep === 2
                            && (!self.group.group_category_relations_attributes
                                || self.group.group_category_relations_attributes.length === 0)) {
                            return;
                        }
                        if (self.currentStep === 3
                            && ((!self.group.name || self.group.name.length < 5 || self.group.name.length > 100)
                                || (!self.group.description || self.group.description.length < 5))) {
                            return;
                        }
                        self.submitted = false;
                        self.goStep(++self.currentStep);
                    };
                    self.goStep = function (step) {
                        self.currentStep = step;
                    };
                    self.addCategory = function (relation) {
                        if (!self.group.group_category_relations_attributes) {
                            self.group.group_category_relations_attributes = [];
                        }
                        if (self.official || self.group.group_category_relations_attributes.length < 5) {
                            self.group.group_category_relations_attributes.push(relation);
                        }
                    };
                    self.removeCategory = function (relation) {
                        var array = self.group.group_category_relations_attributes;
                        self.group.group_category_relations_attributes = _.reject(array, function (c) { return c.category_id == relation.category_id; });
                    };
                    self.toggleCategory = function (relation) {
                        if (_.filter(self.group.group_category_relations_attributes, function (c) { return c.category_id === relation.category_id; }).length > 0) {
                            self.removeCategory(relation);
                        }
                        else {
                            self.addCategory(relation);
                        }
                    };
                    self.get_approval_type = function () {
                        if (self.group.approval_type == 'do_not_need_to_approve') {
                            return '无需审批';
                        }
                        else if (self.group.approval_type == 'admin_can_approve') {
                            return '需管理员审批';
                        }
                        else if (self.group.approval_type == 'members_can_approve') {
                            return '需成员审批';
                        }
                        else {
                            return '';
                        }
                    };
                    self.get_visibility_type = function () {
                        if (self.group.visibility_type == 'members_can_see') {
                            return '成员可见';
                        }
                        else if (self.group.visibility_type == 'all_can_see') {
                            return '公众可见';
                        }
                        else {
                            return '';
                        }
                    };
                    self.get_activity_creation_type = function () {
                        if (self.group.activity_creation_type == 'admin_can_create') {
                            return '管理员可创建活动';
                        }
                        else if (self.group.activity_creation_type == 'members_can_create') {
                            return '所有成员可创建活动';
                        }
                        else {
                            return '';
                        }
                    };
                    self.add_question = function () {
                        if (self.group.group_questions_attributes.length < 5) {
                            self.group.group_questions_attributes.push({ question: '' });
                        }
                    };
                    self.create = function () {
                        Group.save({ group: self.group }, function (g) {
                            self.group.id = g.id;
                            Turbolinks.visit('/groups/' + self.group.id, { action: 'replace' });
                        }, function (response) {
                            if (response && response.data) {
                                Notify.warn(response.data.message);
                            }
                        });
                    };
                    self.remoteUrlRequestFn = function (str) {
                        return { k: str, c: self.country.id };
                    };
                    self.searchStr = "";
                    self.selectedLocation = function (selected) {
                        if (selected && selected.originalObject) {
                            self.group.poi_id = selected.originalObject.id;
                            self.poi_name = selected.originalObject.name;
                            self.searchStr = self.poi_name;
                            $('#group_city_input').val(self.poi_name);
                            $('#group_city_input').text(self.poi_name);
                            $('#group_city_input').attr('placeholder', self.poi_name);
                        }
                    };
                    self.reset_poi = function () {
                        self.group.poi_id = undefined;
                        self.poi_name = '';
                    };
                    self.contains_category = function (category_id) {
                        return _.find(self.group.group_category_relations_attributes, function (c) {
                            return c.category_id === category_id;
                        });
                    };
                }
                Group_1.GroupCreateCtrl = GroupCreateCtrl;
                angular.module('GuruIn.App')
                    .factory('GroupResource', ['$resource', GroupResource])
                    .controller('GroupCreateCtrl', ['$scope', 'GroupResource', GroupCreateCtrl]);
            })(Group = Controllers.Group || (Controllers.Group = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Group;
            (function (Group) {
                'use strict';
                function collapseDesc() {
                    var $intro = $('.item-intro');
                    if ($intro.find('.collapse-details').height() <= 90) {
                        $intro.find('.collapse-btn').hide();
                    }
                    else {
                        $intro.find('.collapse-btn').show();
                        $('.collapse-btn').click(function () {
                            $(this).parents('.collapse-section').find('.collapse-content').toggleClass('open');
                            var $i = $(this).find('a.btn i');
                            var $a = $(this).find('a.btn');
                            if ($i.hasClass('fa-angle-up')) {
                                $a.html('展开 <i class="fa fa-angle-down"></i>');
                            }
                            else {
                                $a.html('收起 <i class="fa fa-angle-up"></i>');
                            }
                        });
                    }
                }
                Group.collapseDesc = collapseDesc;
                var R = GuruIn.App.Resources;
                function GroupDescResource($resource) {
                    var params = {
                        id: '@id'
                    };
                    return R.railsResource($resource, '/groups/:id.json', {}, params);
                }
                Group.GroupDescResource = GroupDescResource;
                function GroupDescCtrl($scope, $http, GroupDescResource) {
                    $scope.isEditing = false;
                    $scope.save = function () {
                        GroupDescResource.update({ id: $scope.group_id, group: { description: $scope.group_desc_temp } })
                            .$promise.then(function (result) {
                            $scope.group_desc = result.group.description;
                            $scope.isEditing = false;
                            Renative.Notify.success('编辑成功');
                            setTimeout(function () {
                                collapseDesc();
                            }, 200);
                        });
                    };
                    $scope.cancel = function () {
                        $scope.isEditing = false;
                    };
                    $scope.edit = function () {
                        $scope.isEditing = true;
                    };
                }
                Group.GroupDescCtrl = GroupDescCtrl;
                angular.module('GuruIn.App').filter('nl2br', function ($sce) {
                    return function (text) {
                        text = text.replace(/\n/g, '<br />');
                        return $sce.trustAsHtml(text);
                    };
                });
                angular.module('GuruIn.App')
                    .factory('GroupDescResource', ['$resource', GroupDescResource])
                    .controller('GroupDescCtrl', ['$scope', '$http', 'GroupDescResource', GroupDescCtrl]);
            })(Group = Controllers.Group || (Controllers.Group = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Group;
            (function (Group_1) {
                'use strict';
                var R = GuruIn.App.Resources;
                var Notify = Renative.Notify;
                function GroupInvitationResource($resource) {
                    var params = {
                        group_id: '@group_id'
                    };
                    return R.railsResource($resource, '/groups/:group_id/invitations.json', {}, params);
                }
                Group_1.GroupInvitationResource = GroupInvitationResource;
                function GroupActionsCtrl($scope, $http, Invitation, Group) {
                    $scope.quit = function (group_id, user_id) {
                        if (confirm('你确定要退出这个群吗？')) {
                            $http['delete']('/groups/' + group_id + '/members/' + user_id)
                                .then(function () {
                                Turbolinks.visit('/groups/' + group_id, { action: 'replace' });
                            });
                        }
                        ;
                    };
                    $scope.approve = function (group_id, user_id, $event) {
                        $http.put('/groups/' + group_id + '/members/' + user_id, { 'action': 'approve' })
                            .then(function () {
                            $($event.target).closest('.notification-list.clearfix').hide('slow', function () {
                                $(this).remove();
                            });
                        });
                    };
                    $scope.decline = function (group_id, user_id, $event) {
                        $http.put('/groups/' + group_id + '/members/' + user_id, { 'action': 'decline' })
                            .then(function () {
                            $($event.target).closest('.notification-list.clearfix').hide('slow', function () {
                                $(this).remove();
                            });
                        });
                    };
                    $scope.remoteUrlRequestFn = function (str) {
                        return { k: str };
                    };
                    $scope.showSearchResultPanel = function () {
                        $('#item-search-result-panel').show();
                    };
                    $scope.invite = function (result) {
                        Invitation.save({ invitation: { invitee_id: result.originalObject.id }, group_id: $scope.group_id })
                            .$promise.then(function () {
                            $('#item-search-result-panel').hide();
                            $('#modal-group-invite').modal('hide');
                            Notify.success('邀请成功');
                        }, function (response) {
                            if (response.status === 400) {
                                Notify.error('你不能邀请这个用户');
                            }
                            else if (response.status == 444) {
                                Notify.error('该用户已经在群组里了');
                            }
                            else if (response.status === 401) {
                                Notify.error('你还未登录');
                            }
                            else if (response.status === 403) {
                                Notify.error('你没有权限邀请别人加入这个组');
                            }
                            else {
                                Notify.error('抱歉，有错误发生，请稍候再试');
                            }
                        });
                    };
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (result.photoable_id == $scope.group_id && /::Group/i.test(result.photoable_type)) {
                                Group.update({ id: $scope.group_id, group: { photo_id: result.id, photo_url: result.url } }, function () {
                                    $scope.photo_url = result.url;
                                }, function (httpResponse) {
                                    Notify.error(httpResponse.data.error);
                                });
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $(document).on('guruin:native:group:quit', function (e, group_id, user_id) {
                        $scope.quit(group_id, user_id);
                    });
                }
                Group_1.GroupActionsCtrl = GroupActionsCtrl;
                angular.module('GuruIn.App')
                    .factory('GroupInvitationResource', ['$resource', GroupInvitationResource])
                    .factory('GroupResource', ['$resource', Group_1.GroupResource])
                    .controller('GroupActionsCtrl', ['$scope', '$http', 'GroupInvitationResource', 'GroupResource', GroupActionsCtrl]);
            })(Group = Controllers.Group || (Controllers.Group = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controller;
        (function (Controller) {
            var Group;
            (function (Group) {
                'use strict';
                var R = GuruIn.App.Resources;
                function GroupJoinResource($resource) {
                    var params = {
                        group_id: '@group_id'
                    };
                    return R.railsResource($resource, '/groups/:group_id/members.json', {}, params);
                }
                Group.GroupJoinResource = GroupJoinResource;
                function GroupJoinCtrl($scope, JoinRequest) {
                    var self = $scope;
                    $scope.sending = false;
                    $scope.group_answers_attributes = [];
                    self.send = function () {
                        $scope.sending = true;
                        JoinRequest.save({ request: self.group_answers_attributes, group_id: self.group_id }, function () {
                            Turbolinks.visit('/groups/' + self.group_id, { action: 'replace' });
                        });
                    };
                    $(document).on('guruin:native:group:join', function (e) {
                        $scope.send();
                    });
                }
                Group.GroupJoinCtrl = GroupJoinCtrl;
                angular.module('GuruIn.App')
                    .factory('GroupJoinResource', ['$resource', GroupJoinResource])
                    .controller('GroupJoinCtrl', ['$scope', 'GroupJoinResource', GroupJoinCtrl]);
            })(Group = Controller.Group || (Controller.Group = {}));
        })(Controller = App.Controller || (App.Controller = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Group;
            (function (Group) {
                'use strict';
                function GroupMemberCtrl($scope, $http, $compile) {
                    $scope.kick = function (user_id) {
                        if (confirm('你确定要把这个人踢出群吗？')) {
                            $http.put('/groups/' + $scope.group_id + '/members/' + user_id, { 'action': 'kick' })
                                .then(function () {
                                Turbolinks.visit('/groups/' + $scope.group_id + '/members', { action: 'replace' });
                            });
                        }
                        ;
                    };
                    $scope.promote = function (user_id) {
                        if (confirm('你确定要把这个人提升为管理员吗？')) {
                            $http.put('/groups/' + $scope.group_id + '/members/' + user_id, { 'action': 'promote' })
                                .then(function () {
                                Turbolinks.visit('/groups/' + $scope.group_id + '/members', { action: 'replace' });
                            });
                        }
                        ;
                    };
                    $scope.demote = function (user_id) {
                        if (confirm('你确定要把这个人降级为普通成员吗？')) {
                            $http.put('/groups/' + $scope.group_id + '/members/' + user_id, { 'action': 'demote' })
                                .then(function () {
                                Turbolinks.visit('/groups/' + $scope.group_id + '/members', { action: 'replace' });
                            });
                        }
                        ;
                    };
                    $(document).on('guruin:group:member:rendering', function (e, el) {
                        var $newData = $(el);
                        $compile($newData)($scope);
                        $(el).replaceWith($newData);
                    });
                }
                Group.GroupMemberCtrl = GroupMemberCtrl;
                angular.module('GuruIn.App')
                    .controller('GroupMemberCtrl', ['$scope', '$http', '$compile', GroupMemberCtrl]);
            })(Group = Controllers.Group || (Controllers.Group = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Group;
            (function (Group) {
                'use strict';
                var Notify = Renative.Notify;
                function GroupPhotosCtrl($scope, $http, $compile) {
                    $scope.photos = [];
                    // https://github.com/blueimp/jQuery-File-Upload/wiki/Options#callback-options
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (result.photoable_id == $scope.group_id && /::Group/i.test(result.photoable_type)) {
                                if (result.context == 'photo') {
                                    $scope.photos.unshift({ id: result.id, url: result.url });
                                }
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $(document).on('guruin:group:photos:rendering', function (e, el) {
                        var plainHtml = $("<div />").append($("#photo-list").clone()).html();
                        var $newData = $(plainHtml);
                        angular.element('#photo-list').empty();
                        $compile($newData)($scope);
                        $('#photo-list').replaceWith($newData);
                    });
                }
                Group.GroupPhotosCtrl = GroupPhotosCtrl;
                angular.module('GuruIn.App')
                    .controller('GroupPhotosCtrl', ['$scope', '$http', '$compile', GroupPhotosCtrl]);
            })(Group = Controllers.Group || (Controllers.Group = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Notification;
            (function (Notification_1) {
                var R = GuruIn.App.Resources;
                var Net = Renative.Net;
                function NotificationResource($resource) {
                    return R.railsResource($resource, '/notifications/:id.json');
                }
                Notification_1.NotificationResource = NotificationResource;
                function NotificationCtrl($scope, $http, $window, $compile, $timeout, $interval, Notification, Activity) {
                    var self = $scope;
                    self.unreadCount = 0;
                    var getUnreadCount = function () {
                        var options = { url: '/notifications/unread_count.json?' + (new Date()).getTime(), type: 'GET' };
                        Net.AX(options).then(function (data) {
                            $(document).trigger('guruin:notification:unread:count', data.count);
                            self.unreadCount = data.count;
                            if ($('#notification_message_count').length == 0 && $('#responsive_notification_count').length == 0) {
                                return;
                            }
                            if (data.count > 0) {
                                $('#notification_message_count').text(data.count);
                                $('.notification-badge').text(data.count);
                                $('#notification_message_count').show();
                                $('.notification-badge').show();
                            }
                            else {
                                $('#notification_message_count').text('');
                                $('.notification-badge').text('');
                                $('#notification_message_count').hide();
                                $('.notification-badge').hide();
                            }
                        });
                    };
                    self.unreadHandler = setTimeout(getUnreadCount, 60000);
                    self.$on('$destroy', function () {
                        if (self.unreadHandler) {
                            clearTimeout(self.unreadHandler);
                        }
                    });
                    getUnreadCount();
                }
                Notification_1.NotificationCtrl = NotificationCtrl;
                // module initialize
                angular.module('GuruIn.App')
                    .factory('NotificationResource', ['$resource', NotificationResource])
                    .controller('NotificationCtrl', ['$scope', '$http', '$window', '$compile', '$timeout', '$interval', 'NotificationResource', 'ActivityResource', NotificationCtrl]);
            })(Notification = Controllers.Notification || (Controllers.Notification = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
angular.module('GuruIn.App')
  .provider('PhotoModalWindow', function() {

    this.getPhotoUploader = function() {}

    this.$get = ['$http', '$document', function($http, $document) {
      var PhotoModalWindow = {};

      PhotoModalWindow.photos = [];

      PhotoModalWindow.currentIndex = -1;

      PhotoModalWindow.modalInstance = null;

      PhotoModalWindow.loading = false;

      PhotoModalWindow.open = function(photos, index) {
        PhotoModalWindow.photos = photos;
        PhotoModalWindow.setPhoto(index);

        PhotoModalWindow.modalInstance = $('#modal-gallery').modal('show');

        $('#modal-gallery').off('view:photo:next').on('view:photo:next', function(e) {
          PhotoModalWindow.nextPhoto();
        });

        $('#modal-gallery').off('view:photo:prev').on('view:photo:prev', function(e) {
          PhotoModalWindow.prevPhoto();
        });
      };

      PhotoModalWindow.close = function(result) {
        return PhotoModalWindow.modalInstance.close(result);
      };

      PhotoModalWindow.setPhoto = function(index) {
        if (!(index in PhotoModalWindow.photos)) {
          throw 'Invalid Photo';
        }

        PhotoModalWindow.currentIndex = index;

        PhotoModalWindow.loading = true;

        var photo = PhotoModalWindow.photos[index];

        $http.get('/photos/' + photo + '.html+partial-empty')
        .then(function(data) {
          PhotoModalWindow.loading = false;

          var content = $('#modal-gallery').find('.modal-content');
          content.html(data.data);
          var scope_element = $('#photo-scope-div').length > 0 ? angular.element('#photo-scope-div') : angular.element('#photo-list');
          scope_element.injector().invoke(['$compile', function ($compile) {
            var scope = scope_element.scope();

            // [jc@07/21/2015] only compile ng-compile="true"
            var el, compiled;
            angular.element(content).find('[ng-compile="true"]').each(function(i, e) {
              el = angular.element(e);
              // not compiled
              if (!el.hasClass('ng-scope')) {
                compiled = $compile(el)(scope||$rootScope);
                el.replaceWith(compiled);
              }
            });
          }]);
        }, function(data) {
          PhotoModalWindow.loading = false;
        });
      };

      PhotoModalWindow.prevPhoto = function () {
        PhotoModalWindow.setPhoto((PhotoModalWindow.currentIndex - 1 + PhotoModalWindow.photos.length) %
          PhotoModalWindow.photos.length);
      };

      PhotoModalWindow.nextPhoto = function () {
        PhotoModalWindow.setPhoto((PhotoModalWindow.currentIndex + 1) % PhotoModalWindow.photos.length);
      };

      $document.bind('keydown', function (event) {
        if (['input', 'textarea'].indexOf(event.target.tagName.toLowerCase()) >= 0) {
          return;
        }

        switch (event.which) {
        case 39: // right arrow key
          PhotoModalWindow.nextPhoto();
          event.preventDefault();
          break;
        case 37: // left arrow key
          PhotoModalWindow.prevPhoto();
          event.preventDefault();
          break;
        }

      });

      return PhotoModalWindow;
    }];
  })
  .directive('initGallery', ['$window', 'PhotoModalWindow', function($window, PhotoModalWindow) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var photos = element.find('.gallery-photo');

        var photoIds = $.map(photos, function(photo) {
          return $(photo).data("photo-id");
        });

        var photoUrls = $.map(photos, function(photo){
          return $(photo).attr('data-native-photo');
        });

        photos.click(function(e) {
           e.preventDefault();

           var index = $.inArray($(e.currentTarget)[0], photos);

           $(document).trigger('guruin:web:open:photo', [PhotoModalWindow, photoIds, index]);
           $(document).trigger('guruin:native:open:photo', [PhotoModalWindow, photoUrls, index]);
        });
      }
    }
  }]);
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Photo;
            (function (Photo) {

              function deletePhoto(id) {
                if (confirm('你确定要删除这个照片吗？')) {
                  $.ajax({
                    url: '/photos/' + id,
                    type: 'delete'
                  })
                  .done(function() {
                    Renative.Notify.success('删除照片成功.');
                    $("#modal-gallery").modal('hide');
                  })
                  .fail(function() {
                    Renative.Notify.warn('删除失败,请稍后再试.');
                  });
                }
              }

              Photo.deletePhoto = deletePhoto;
            })(Photo = Controllers.Photo || (Controllers.Photo = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Search;
            (function (Search) {
                'use strict';
                function SearchRequestCtrl($scope, $compile, $http) {
                    $scope.choose_property = function (id, url, deleteUrl) {
                        if ($('#' + id).prop('checked') == true) {
                            $(document).trigger('guruin:web:visit:url', [deleteUrl]);
                            $(document).trigger('guruin:native:replace:url', [deleteUrl]);
                        }
                        else {
                            $(document).trigger('guruin:web:visit:url', [url]);
                            $(document).trigger('guruin:native:replace:url', [url]);
                        }
                    };
                    $scope.choice_responsive_property = function (id) {
                        var $filter = $("#" + id).parents(".item-filter");
                        var $buttons = $filter.find("input:checkbox");
                        $buttons.each(function () {
                            if (this.id !== id) {
                                $(this).removeAttr('checked');
                            }
                        });
                    };
                    $scope.choose_responsive_property = function (baseUrl) {
                        var properties = {};
                        $("#responsive-filter-modal input:checkbox").each(function () {
                            if (this.checked) {
                                var pId = $(this).attr("property-id");
                                var vId = $(this).attr("value-id");
                                if (pId && vId) {
                                    if (properties[pId]) {
                                        properties[pId].push(vId);
                                    }
                                    else {
                                        var values = [];
                                        values.push(vId);
                                        properties[pId] = values;
                                    }
                                }
                            }
                        });
                        var p = "";
                        if ($('#hidden_property_value').length > 0) {
                            var hiddenProperty = $('#hidden_property_value').val();
                            if (hiddenProperty) {
                                p = "-t" + hiddenProperty;
                            }
                        }
                        $.each(properties, function (name, value) {
                            p = p + "-t" + name + "_";
                            for (var i in value) {
                                p = p + value[i] + "_";
                            }
                            if (p.charAt(p.length - 1) === '_') {
                                p = p.substring(0, p.length - 1);
                            }
                        });
                        var url = null;
                        if (p.length > 0) {
                            if (p.charAt(0) === '-') {
                                p = p.substr(1);
                            }
                            url = baseUrl.replace("{0}", p);
                        }
                        else {
                            url = baseUrl.replace("/{0}", "");
                        }
                        if (url) {
                            $(document).trigger('guruin:web:visit:url', [url]);
                            $(document).trigger('guruin:native:replace:url', [url]);
                        }
                    };
                    $scope.sort = function (id) {
                        var link = $('#' + id).attr('link');
                        $(document).trigger('guruin:web:visit:url', [link]);
                        $(document).trigger('guruin:native:replace:url', [link]);
                    };
                    $scope.expand = function (id_prefix, property_id, start_index, visible_count) {
                        var collapseId = "li_collapse_" + property_id;
                        if (id_prefix) {
                            collapseId = id_prefix + "_" + collapseId;
                        }
                        var expandId = "li_expand_" + property_id;
                        if (id_prefix) {
                            expandId = id_prefix + "_" + expandId;
                        }
                        // show all extra properties
                        for (var i = start_index + 1; i <= visible_count; ++i) {
                            var id = "li_" + property_id + "_" + i;
                            if (id_prefix) {
                                id = id_prefix + '_' + id;
                            }
                            if ($("#" + id)) {
                                $("#" + id).show();
                            }
                        }
                        if ($("#" + expandId)) {
                            $("#" + expandId).hide();
                        }
                        if ($("#" + collapseId)) {
                            $("#" + collapseId).show();
                        }
                    };
                    $scope.collapse = function (id_prefix, property_id, start_index, visible_count) {
                        var expandId = "li_expand_" + property_id;
                        if (id_prefix) {
                            expandId = id_prefix + "_" + expandId;
                        }
                        var collapseId = "li_collapse_" + property_id;
                        if (id_prefix) {
                            collapseId = id_prefix + "_" + collapseId;
                        }
                        // hide all extra properties
                        for (var i = start_index + 1; i <= visible_count; ++i) {
                            var id = "li_" + property_id + "_" + i;
                            if (id_prefix) {
                                id = id_prefix + '_' + id;
                            }
                            if ($("#" + id)) {
                                $("#" + id).hide();
                            }
                        }
                        if ($("#" + collapseId)) {
                            $("#" + collapseId).hide();
                        }
                        if ($("#" + expandId)) {
                            $("#" + expandId).show();
                        }
                    };
                    $scope.clearAllFilter = function () {
                        $("#responsive-filter-modal input:checkbox").each(function () {
                            if (this.checked) {
                                $(this).removeAttr('checked');
                            }
                        });
                    };
                    $scope.showSearchView = function (type, lat, lng, title) {
                        $(document).trigger("guruin:mobile:show:search", [type, lat, lng, title]);
                        $(document).trigger("guruin:native:show:search", [type, lat, lng, title]);
                        $('#mobile-search-input').blur();
                    };
                    $scope.clearFilter = function (url) {
                        $(document).trigger('guruin:web:visit:url', [url]);
                        $(document).trigger('guruin:native:replace:url', [url]);
                    };
                }
                Search.SearchRequestCtrl = SearchRequestCtrl;
                ;
                angular.module('GuruIn.App')
                    .controller('SearchRequestCtrl', ['$scope', '$compile', '$http', SearchRequestCtrl]);
            })(Search = Controllers.Search || (Controllers.Search = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
function GuruinGlobalMethod_sort(option) {
    var link = $(option).find(":selected").attr('link');
    $(document).trigger('guruin:web:visit:url', [link]);
    $(document).trigger('guruin:native:replace:url', [link]);
}
;
function GuruInGlobalMethod_loadSearchResultCount() {
    var url = window.location.href;
    if (url.indexOf("?") > -1) {
        url = url + "&get_result_count=1";
    }
    else {
        url = url + "?get_result_count=1";
    }
    $.ajax({
        url: url,
        dataType: 'json',
    }).done(function (data) {
        if (data.article_count > 0) {
            $('#article_count').text(" (" + data.article_count + ")");
        }
        else {
            $("#article_count").text("");
        }
        if (data.article_collection_count > 0) {
            $('#article_collection_count').text(" (" + data.article_collection_count + ")");
        }
        else {
            $("#article_collection_count").text("");
        }
        if (data.activity_count > 0) {
            $('#activity_count').text(" (" + data.activity_count + ")");
        }
        else {
            $('#activity_count').text("");
        }
        if (data.merchant_count > 0) {
            $('#merchant_count').text(" (" + data.merchant_count + ")");
        }
        else {
            $('#merchant_count').text("");
        }
        if (data.fresh_story_count > 0) {
            $('#fresh_story_count').text(" (" + data.fresh_story_count + ")");
        }
        else {
            $('#fresh_story_count').text("");
        }
    });
}
;
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var SearchAutocomplete;
            (function (SearchAutocomplete) {
                'use strict';
                function SearchAutocompleteCtrl($scope, $http, $q, $timeout) {
                    $scope.distance_string = "";
                    $scope.current_location_name = "";
                    function removeSpecialCharaceters(word) {
                        if (word) {
                            return word.split('.').join(' ');
                        }
                        return word;
                    }
                    ;
                    function prepareSearchKeywords() {
                        if ($scope.container == 'modal-search-box-container'
                            || $scope.container == 'specific-modal-search-box-container') {
                            if ($('#modal_search_box').val()) {
                                return removeSpecialCharaceters($('#modal_search_box').val());
                            }
                            if ($('#specific_modal_search_box').val()) {
                                return removeSpecialCharaceters($('#specific_modal_search_box').val());
                            }
                            if ($('#txt_keywords_specific').val()) {
                                return removeSpecialCharaceters($('#txt_keywords_specific').val());
                            }
                            if ($('#ios_txt_keywords_specific').val()) {
                                return removeSpecialCharaceters($('#ios_txt_keywords_specific').val());
                            }
                            if ($('#txt_keywords').val()) {
                                return removeSpecialCharaceters($('#txt_keywords').val());
                            }
                        }
                        else if ($scope.container == 'header-search-box-container') {
                            return removeSpecialCharaceters($('#header_search_box').val());
                        }
                        else {
                            return removeSpecialCharaceters($('#search_box').val());
                        }
                    }
                    ;
                    function resetSearchKeywords() {
                        $('#modal_search_box').val('');
                        $('#specific_modal_search_box').val('');
                        $('#txt_keywords_specific').val('');
                        $('#ios_txt_keywords_specific').val('');
                        $('#txt_keywords').val('');
                        $('#header_search_box').val('');
                    }
                    ;
                    function prepareLatitude() {
                        if ($scope.container == 'modal-search-box-container'
                            || $scope.container == 'specific-modal-search-box-container') {
                            if ($('#modal_lat_hid').val()) {
                                return $('#modal_lat_hid').val();
                            }
                        }
                        else {
                            if ($('#lat_hid').val()) {
                                return $('#lat_hid').val();
                            }
                        }
                        return null;
                    }
                    ;
                    function prepareLongitude() {
                        if ($scope.container == 'modal-search-box-container'
                            || $scope.container == 'specific-modal-search-box-container') {
                            if ($('#modal_lng_hid').val()) {
                                return $('#modal_lng_hid').val();
                            }
                        }
                        else {
                            if ($('#lng_hid').val()) {
                                return $('#lng_hid').val();
                            }
                        }
                        return null;
                    }
                    ;
                    function prepareDistance() {
                        if ($scope.container == 'modal-search-box-container'
                            || $scope.container == 'specific-modal-search-box-container') {
                            if ($('#modal_dist_hid').val()) {
                                return $('#modal_dist_hid').val();
                            }
                        }
                        else {
                            if ($('#dist_hid').val()) {
                                return $('#dist_hid').val();
                            }
                        }
                        return null;
                    }
                    ;
                    function prepareSearchTab(type) {
                        if ($scope.container == 'modal-search-box-container') {
                            if ($('#modal_tab_hid').val()) {
                                return parseInt($('#modal_tab_hid').val());
                            }
                        }
                        else if ($scope.container == 'specific-modal-search-box-container') {
                            if ($('#specific_modal_tab_hid').val()) {
                                return parseInt($('#specific_modal_tab_hid').val());
                            }
                        }
                        else {
                            if ($('#tab_hid').val()) {
                                return parseInt($('#tab_hid').val());
                            }
                        }
                        return type;
                    }
                    ;
                    function preparePoiId() {
                        if ($scope.container == 'modal-search-box-container'
                            || $scope.container == 'specific-modal-search-box-container') {
                            if ($('#modal_poi_id_hid').val()) {
                                return $('#modal_poi_id_hid').val();
                            }
                        }
                        else {
                            if ($('#poi_id_hid').val()) {
                                return $('#poi_id_hid').val();
                            }
                        }
                        return null;
                    }
                    ;
                    $scope.search = function (type) {
                        var keywords = prepareSearchKeywords();
                        if (!keywords || keywords.length <= 0) {
                            keywords = '';
                        }
                        keywords = encodeURIComponent(keywords);
                        var poi_id = preparePoiId();
                        var lat = prepareLatitude();
                        var lng = prepareLongitude();
                        var distance = prepareDistance();
                        type = prepareSearchTab(type);
                        var search_page = (window.location.href.indexOf('/search/') > -1);
                        var url = null;
                        if (type == 1) {
                            url = "/search/activity/" + keywords;
                        }
                        else if (type == 2) {
                            url = "/groups/?keywords=" + keywords;
                        }
                        else if (type == 3) {
                            url = "/search/article/" + keywords;
                        }
                        else if (type == 4) {
                            url = "/search/area/" + keywords;
                        }
                        else if (type == 5) {
                            url = "/attractions/near/?keywords=" + keywords;
                        }
                        else if (type == 6) {
                            url = "/search/guru/" + keywords;
                        }
                        else if (type == 7) {
                            url = "/yaoyan/" + keywords;
                        }
                        else if (type == 8) {
                            url = "/coupons/?keywords=" + keywords;
                        }
                        else if (type == 9) {
                            url = search_page ? "/search/merchant/" + keywords : "/merchants/" + "?keywords=" + keywords;
                        }
                        else if (type == 10) {
                            url = "/search/article_collection/" + keywords;
                        }
                        else if (type == 11) {
                            url = "/questions/?keywords=" + keywords;
                            var from = getUrlParameter('from');
                            if (from) {
                                url = url + '&from=' + from;
                            }
                        }
                        else if (type == 12) {
                            url = search_page ? "/search/fresh_story/" + keywords : "/news/?keywords=" + keywords;
                        }
                        else if (type == 13) {
                            url = "/coupons/youworld/?keywords=" + keywords;
                        }
                        else if (type == 14) {
                            url = "/mini-articles/?keywords=" + keywords;
                            var from = getUrlParameter('from');
                            if (from) {
                                url = url + '&from=' + from;
                            }
                        }
                        else if (type == 15) {
                            url = search_page ? "/search/life_tip/" + keywords : "/life-tips/?keywords=" + keywords;
                        }
                        else if (type == 16) {
                            url = "/deals/?keywords=" + keywords;
                            var from = getUrlParameter('from');
                            var reuse = getUrlParameter('reuse');
                            if (from) {
                                url = url + '&from=' + from;
                            }
                            if (reuse) {
                                url = url + '&reuse=' + reuse;
                            }
                        }
                        else {
                            url = "/search/article/" + keywords;
                        }
                        if (type != 7 && type != 8 && type != 11 && type != 12) {
                            var region = (type == 9 && !search_page) || type == 13;
                            var hasQuestion = false;
                            if (url.indexOf('?') > -1) {
                                hasQuestion = true;
                            }
                            if (lat) {
                                var lat_name = (region ? 'region_lat' : 'lat');
                                if (hasQuestion) {
                                    url = url + '&' + lat_name + '=' + lat;
                                }
                                else {
                                    hasQuestion = true;
                                    url = url + '?' + lat_name + '=' + lat;
                                }
                            }
                            if (lng) {
                                var lng_name = (region ? 'region_lng' : 'lng');
                                if (hasQuestion) {
                                    url = url + '&' + lng_name + '=' + lng;
                                }
                                else {
                                    hasQuestion = true;
                                    url = url + '?' + lng_name + '=' + lng;
                                }
                            }
                            if (poi_id) {
                                var poi_id_name = (region ? 'region_poi' : 'poi');
                                if (hasQuestion) {
                                    url = url + '&' + poi_id_name + '=' + poi_id;
                                }
                                else {
                                    hasQuestion = true;
                                    url = url + '?' + poi_id_name + '=' + poi_id;
                                }
                            }
                            if (distance) {
                                if (hasQuestion) {
                                    url = url + '&distance=' + distance;
                                }
                                else {
                                    hasQuestion = true;
                                    url = url + '?distance=' + distance;
                                }
                            }
                            if (type == 0) {
                                if (hasQuestion) {
                                    url = url + '&all=1';
                                }
                                else {
                                    hasQuestion = true;
                                    url = url + '?all=1';
                                }
                            }
                            if (type == 0 || type == 1) {
                                if (hasQuestion) {
                                    url = url + '&epa=1';
                                }
                                else {
                                    hasQuestion = true;
                                    url = url + '?epa=1';
                                }
                            }
                        }
                        resetSearchKeywords();
                        $scope.showNativeSearchKeywords();
                        $(document).trigger('guruin:native:closemodal:url', [url]);
                        $(document).trigger('guruin:mobile:closemodal:url', [url]);
                    };
                    $scope.chooseDistance = function (dist, type) {
                        $('#dist_hid').val(dist);
                        $scope.distance = dist;
                        if ($scope.distance == 0) {
                            $scope.distance_string = "不限";
                        }
                        else {
                            $scope.distance_string = $scope.distance + " miles以内";
                        }
                        $("[id^=distance_]").show();
                        var id = '#distance_' + dist;
                        $(id).hide();
                    };
                    $scope.remoteUrlRequestFnIncludingLocation = function (str) {
                        return {
                            k: str,
                            dist: $('#dist_hid').val(),
                            lat: $('#lat_hid').val(),
                            lng: $('#lng_hid').val(),
                            poi: $('#poi_id_hid').val()
                        };
                    };
                    $scope.remoteUrlRequestFn = function (str) {
                        return { k: str };
                    };
                    $scope.remoteUrlRequestFnWithoutCountry = function (str) {
                        return { k: str, ec: 1 };
                    };
                    $scope.selectedLocation = function (selected) {
                        selected = prepareSelectedObject(selected);
                        $(document).trigger('guruin:native:closemodal:url', [selected.url]);
                        $(document).trigger('guruin:mobile:closemodal:url', [selected.url]);
                    };
                    $scope.selectedCity = function (selected) {
                        if (selected) {
                            selected = prepareSelectedObject(selected);
                            if ($scope.container == 'modal-search-box-container'
                                || $scope.container == 'specific-modal-search-box-container') {
                                $('#modal_lat_hid').val(selected.latitude);
                                $('#modal_lng_hid').val(selected.longitude);
                                $('#modal_poi_id_hid').val(selected.id);
                            }
                            else {
                                $('#lat_hid').val(selected.latitude);
                                $('#lng_hid').val(selected.longitude);
                                $('#poi_id_hid').val(selected.id);
                            }
                            $scope.current_location_name = selected.name;
                        }
                    };
                    function prepareSelectedObject(selected) {
                        if (selected && selected.originalObject) {
                            return selected.originalObject;
                        }
                        return selected;
                    }
                    var fromNativeMerchant = function () {
                        return window.location.href.indexOf('from_native_merchant=1') > -1;
                    };
                    var merchantsRelatedPages = function () {
                        var url = window.location.href.toLowerCase();
                        return url.indexOf('/merchants') > -1 ||
                            url.indexOf('coupons/youworld') > -1;
                    };
                    var reloadPageAfterChoosingPoi = function (selected) {
                        $("#modal-location").modal('hide');
                        $(document).trigger('guruin:native:closeLocationModal:url');
                        if (window.location.href.indexOf('region_lat=') > -1 ||
                            window.location.href.indexOf('region_lng=') > -1 ||
                            window.location.href.indexOf('region_poi=') > -1) {
                            var link = $scope.updateUrlParameter(window.location.href, 'region_lat', selected.latitude);
                            link = $scope.updateUrlParameter(link, 'region_lng', selected.longitude);
                            link = $scope.updateUrlParameter(link, 'region_poi', selected.id);
                            link = $scope.updateUrlParameter(link, 'page', '1');
                            $(document).trigger('guruin:web:replace:url', [link]);
                        }
                        else if (window.location.href.indexOf('lat=') > -1 ||
                            window.location.href.indexOf('lng=') > -1 ||
                            window.location.href.indexOf('poi=') > -1 ||
                            window.location.href.indexOf('page=') > -1) {
                            var link = $scope.updateUrlParameter(window.location.href, 'lat', selected.latitude);
                            link = $scope.updateUrlParameter(link, 'lng', selected.longitude);
                            link = $scope.updateUrlParameter(link, 'poi', selected.id);
                            link = $scope.updateUrlParameter(link, 'page', '1');
                            $(document).trigger('guruin:web:replace:url', [link]);
                        }
                        else {
                            $(document).trigger('guruin:web:page:reload');
                        }
                    };
                    var setMerchantPoiCookie = function (selected) {
                        document.cookie = "region_lat=" + selected.latitude + "; path=/";
                        document.cookie = "region_lng=" + selected.longitude + "; path=/";
                        document.cookie = "region_poi=" + selected.id + "; path=/";
                    };
                    var setSelectedPoiCookie = function (selected) {
                        document.cookie = "lat=" + selected.latitude + "; path=/";
                        document.cookie = "lng=" + selected.longitude + "; path=/";
                        document.cookie = "poi=" + selected.id + "; path=/";
                        setMerchantPoiCookie(selected);
                        $(document).trigger('guruin:native:set:poi', [selected]);
                    };
                    var getUrlParameter = function (name) {
                        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                        var results = regex.exec(location.search);
                        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
                    };
                    $scope.chooseLocation = function (selected) {
                        if (selected) {
                            selected = prepareSelectedObject(selected);
                            var fnm = fromNativeMerchant();
                            var merchant = merchantsRelatedPages();
                            if (!fnm && !merchant) {
                                GuruInGlobalMethod_sync_poi(selected.id, selected.latitude, selected.longitude, 'poi', 0, function () {
                                    setSelectedPoiCookie(selected);
                                    reloadPageAfterChoosingPoi(selected);
                                });
                            }
                            else {
                                setMerchantPoiCookie(selected);
                                reloadPageAfterChoosingPoi(selected);
                            }
                        }
                    };
                    $scope.updateUrlParameter = function (uri, key, value) {
                        var i = uri.indexOf('#');
                        var hash = i === -1 ? '' : uri.substr(i);
                        uri = i === -1 ? uri : uri.substr(0, i);
                        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
                        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
                        if (uri.match(re)) {
                            uri = uri.replace(re, '$1' + key + "=" + value + '$2');
                        }
                        else {
                            uri = uri + separator + key + "=" + value;
                        }
                        return uri + hash;
                    };
                    $scope.showSearchKeywords = function () {
                        $("#search_location_panel").hide();
                        $("#search_result_panel").show();
                        if ($('#txt_keywords').val() && $('#txt_keywords').val().length >= 2) {
                            //$('#modal_hot_keywords').hide();
                            $('#modal-search-nav').hide();
                        }
                        else {
                            //$('#modal_hot_keywords').show();
                            $('#modal-search-nav').show();
                        }
                    };
                    $scope.showSearchNav = function () {
                        $("#search_location_panel").hide();
                        $("#search_result_panel").show();
                        $('#modal-search-nav').show();
                    };
                    $scope.showSearchLocation = function () {
                        $("#search_location_panel").show();
                        $("#search_result_panel").hide();
                        //$('#modal_hot_keywords').hide();
                        $('#modal-search-nav').hide();
                    };
                    $scope.chooseModalResult = function (suggestion) {
                        $("#modal-search").modal('hide');
                        $(document).trigger('guruin:native:closemodal:url', [suggestion.url]);
                        $(document).trigger('guruin:mobile:closemodal:url', [suggestion.url]);
                    };
                    $scope.chooseModalLocation = function (suggestion) {
                        if (suggestion) {
                            $('#modal_lat_hid').val(suggestion.latitude);
                            $('#modal_lng_hid').val(suggestion.longitude);
                            $('#modal_poi_id_hid').val(suggestion.id);
                            if ($('#txt_location').length > 0) {
                                $('#txt_location').text(suggestion.name);
                                $('#txt_location').val(suggestion.name);
                                $('#txt_location').attr("placeholder", suggestion.name);
                            }
                        }
                        $scope.showSearchKeywords();
                    };
                    $scope.chooseSpecificModalLocation = function (suggestion) {
                        $('#modal_lat_hid').val(suggestion.latitude);
                        $('#modal_lng_hid').val(suggestion.longitude);
                        $('#modal_poi_id_hid').val(suggestion.id);
                        if ($('#txt_location_specific').length > 0) {
                            $('#txt_location_specific').text(suggestion.name);
                            $('#txt_location_specific').val(suggestion.name);
                            $('#txt_location_specific').attr("placeholder", suggestion.name);
                        }
                        $scope.showSpecificSearchKeywords();
                    };
                    $scope.showSpecificSearchLocation = function () {
                        $("#search_location_panel_specific").show();
                        $("#search_result_panel_specific").hide();
                        //$('#specific_modal_hot_keywords').hide();
                        $('#modal-specific-search-nav').hide();
                    };
                    $scope.showSpecificSearchKeywords = function () {
                        $("#search_location_panel_specific").hide();
                        $("#search_result_panel_specific").show();
                        if ($('#txt_keywords_specific').val() && $('#txt_keywords_specific').val().length >= 2) {
                            //$('#specific_modal_hot_keywords').hide();
                            $('#modal-specific-search-nav').hide();
                        }
                        else {
                            //$('#specific_modal_hot_keywords').show();
                            $('#modal-specific-search-nav').show();
                        }
                    };
                    $scope.showSpecificSearchNav = function () {
                        $("#search_location_panel_specific").hide();
                        $("#search_result_panel_specific").show();
                        $('#modal-specific-search-nav').show();
                    };
                    $scope.chooseNativeModalLocation = function (suggestion) {
                        $('#modal_lat_hid').val(suggestion.latitude);
                        $('#modal_lng_hid').val(suggestion.longitude);
                        $('#modal_poi_id_hid').val(suggestion.id);
                        if ($('#ios_txt_location_specific').length > 0) {
                            $('#ios_txt_location_specific').text(suggestion.name);
                            $('#ios_txt_location_specific').val(suggestion.name);
                            $('#ios_txt_location_specific').attr("placeholder", suggestion.name);
                        }
                        $scope.showNativeSearchKeywords();
                    };
                    $scope.showNativeSearchKeywords = function () {
                        $("#ios_search_location_panel_specific").hide();
                        $("#ios_search_result_panel_specific").show();
                        if ($('#ios_txt_keywords_specific').val() && $('#ios_txt_keywords_specific').val().length >= 2) {
                            //$('#native_modal_hot_keywords').hide();
                            $('#native-search-nav').hide();
                        }
                        else {
                            //$('#native_modal_hot_keywords').show();
                            $('#native-search-nav').show();
                        }
                    };
                    $scope.showNativeSearchNav = function () {
                        $("#ios_search_location_panel_specific").hide();
                        $("#ios_search_result_panel_specific").show();
                        $('#native-search-nav').show();
                    };
                    $scope.showNativeSearchLocation = function () {
                        $("#ios_search_location_panel_specific").show();
                        $("#ios_search_result_panel_specific").hide();
                        //$('#native_modal_hot_keywords').hide();
                        $('#native-search-nav').hide();
                    };
                    $scope.check_hot_keywords_visibility = function () {
                        if ($('#txt_keywords').is(':focus')) {
                            if ($('#txt_keywords').val().length > 1) {
                                //$('#modal_hot_keywords').hide();
                                $('#modal-search-nav').hide();
                            }
                            else {
                                //$('#modal_hot_keywords').show();
                                $('#modal-search-nav').show();
                            }
                        }
                        else if ($('#txt_location').is(':focus')) {
                            //$('#modal_hot_keywords').hide();
                            $('#modal-search-nav').hide();
                        }
                        return true;
                    };
                    $scope.check_specific_hot_keywords_visibility = function () {
                        if ($('#txt_keywords_specific').is(':focus')) {
                            if ($('#txt_keywords_specific').val().length > 1) {
                                //$('#specific_modal_hot_keywords').hide();
                                $('#modal-specific-search-nav').hide();
                            }
                            else {
                                //$('#specific_modal_hot_keywords').show();
                                $('#modal-specific-search-nav').show();
                            }
                        }
                        else if ($('#txt_location_specific').is(':focus')) {
                            //$('#specific_modal_hot_keywords').hide();
                            $('#modal-specific-search-nav').hide();
                        }
                        return true;
                    };
                    $scope.check_native_hot_keywords_visibility = function () {
                        if ($('#ios_txt_keywords_specific').is(':focus')) {
                            if ($('#ios_txt_keywords_specific').val().length > 1) {
                                //$('#native_modal_hot_keywords').hide();
                                $('#native-search-nav').hide();
                            }
                            else {
                                //$('#native_modal_hot_keywords').show();
                                $('#native-search-nav').show();
                            }
                        }
                        else if ($('#ios_txt_location_specific').is(':focus')) {
                            //$('#native_modal_hot_keywords').hide();
                            $('#native-search-nav').hide();
                        }
                        return true;
                    };
                }
                SearchAutocomplete.SearchAutocompleteCtrl = SearchAutocompleteCtrl;
                ;
                angular.module('GuruIn.App')
                    .controller('SearchAutocompleteCtrl', ['$scope', '$http', '$q', '$timeout', SearchAutocompleteCtrl]);
            })(SearchAutocomplete = Controllers.SearchAutocomplete || (Controllers.SearchAutocomplete = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var User;
            (function (User) {
                var BindEmail;
                (function (BindEmail) {
                    var Notify = Renative.Notify;
                    var DOM = Renative.DOM;
                    ;
                    function Controller($scope, userResource) {
                        var self = $scope;
                        self.connect_using_password = function (e) {
                            DOM.stopPropagation(e);
                            if (self.check_bind_email_result.result_type == 'connect_using_password') {
                                var data = { operation_type: 'connect_using_password', email: self.model.email, password: self.model.password, user_oauth_id: self.model.user_oauth_id };
                            }
                            else if (self.check_bind_email_result.result_type == 'connect_using_oauth') {
                            }
                            userResource.connectUsingPassword(data, function (result) {
                                if (result.success) {
                                    Notify.success(result.msg);
                                    location.href = result.redirect_url;
                                }
                                else {
                                    show_error_message(result.msg);
                                }
                            }, function (result) {
                                show_error_message("验证密码发生错误, 请刷新页面后重试或者联系我们.");
                            });
                        };
                        self.connect_using_oauth = function (oauth, e) {
                            DOM.stopPropagation(e);
                            location.href = '/users/auth/' + oauth;
                        };
                        self.check_bind_email = function (e) {
                            DOM.stopPropagation(e);
                            if (!GuruInGlobalMethod_ValidateEmail(self.model.email)) {
                                show_error_message("请输入您的邮箱地址.");
                                return;
                            }
                            var data = { user_oauth_id: self.model.user_oauth_id, email: self.model.email };
                            userResource.checkBindEmail(data, function (result) {
                                self.check_bind_email_result = result;
                                if (result.result_type == 'ok') {
                                    Notify.success(result.msg);
                                    location.href = result.redirect_url;
                                }
                            }, function (result) {
                                show_error_message("绑定邮箱发生错误, 请刷新页面后重试或者联系我们.");
                            });
                        };
                        function show_error_message(message) {
                            if (self.native_app == 1) {
                                alert(message);
                            }
                            else {
                                Notify.error(message);
                            }
                        }
                        ;
                    }
                    BindEmail.Controller = Controller;
                    ;
                    // module initialize
                    angular
                        .module('GuruIn.App')
                        .controller('GuruIn.App.Controllers.User.BindEmail', ['$scope', 'GuruIn.App.Services.User', Controller]);
                })(BindEmail = User.BindEmail || (User.BindEmail = {}));
            })(User = Controllers.User || (Controllers.User = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Users;
            (function (Users) {
                'use strict';
                var Notify = Renative.Notify;
                function UserEditCtrl($scope, $http) {
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (result.photoable_id == $scope.user_id && /::User/i.test(result.photoable_type)) {
                                $http.put('/gurus/' + $scope.user_id + '.json', { id: $scope.user_id, user: { photo_id: result.id, photo_url: result.url } }).then(function () {
                                    Notify.success('上传成功!');
                                    $scope.user.photo_url = result.url;
                                }, function () {
                                    Notify.warn('修改提交失败,请稍后再试.');
                                });
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $scope.saveProfile = function () {
                        if ($scope.user == null) {
                            Notify.warn('修改提交失败,请稍后再试或者联系我们.');
                            return;
                        }
                        $http.put('/gurus/' + $scope.user_id + '.json', { id: $scope.user_id, user: $scope.user }).then(function () {
                            Notify.success('修改成功!');
                            Turbolinks.visit('/');
                        }, function () {
                            Notify.warn('修改提交失败,请稍后再试.');
                        });
                    };
                    $scope.editBio = function () {
                        $scope.isEditingBio = true;
                        $scope.originalBio = angular.copy($scope.user.bio);
                    };
                    $scope.cancelBio = function () {
                        $scope.isEditingBio = false;
                        $scope.user.bio = $scope.originalBio;
                        $scope.originalBio = undefined;
                    };
                    $scope.saveBioSuccess = function () {
                        Notify.success('修改成功!');
                        $scope.isEditingBio = false;
                    };
                    $scope.saveBioFailed = function () {
                        Notify.warn('修改提交失败,请稍后再试.');
                    };
                    $scope.saveBio = function () {
                        $http.put('/gurus/' + $scope.user_id + '.json', { id: $scope.user_id, user: { bio: $scope.user.bio } })
                            .then(function () {
                            $scope.saveBioSuccess();
                        }, function () {
                            $scope.saveBioFailed();
                        });
                    };
                    $scope.editOccupation = function () {
                        $scope.isEditingOccupation = true;
                        $scope.originalOccupation = angular.copy($scope.user.occupation);
                    };
                    $scope.cancelOccupation = function () {
                        $scope.isEditingOccupation = false;
                        $scope.user.occupation = $scope.originalOccupation;
                        $scope.originalOccupation = undefined;
                    };
                    $scope.saveOccupationSuccess = function () {
                        Notify.success('修改成功!');
                        $scope.isEditingOccupation = false;
                    };
                    $scope.saveOccupationFailed = function () {
                        Notify.warn('修改提交失败,请稍后再试.');
                    };
                    $scope.saveOccupation = function () {
                        $http.put('/gurus/' + $scope.user_id + '.json', { id: $scope.user_id, user: { occupation: $scope.user.occupation } })
                            .then(function () {
                            $scope.saveOccupationSuccess();
                        }, function () {
                            $scope.saveOccupationFailed();
                        });
                    };
                    $scope.editPhone = function () {
                        $scope.isEditingPhone = true;
                        $scope.originalPhone = angular.copy($scope.user.phone);
                    };
                    $scope.cancelPhone = function () {
                        $scope.isEditingPhone = false;
                        $scope.user.phone = $scope.originalPhone;
                        $scope.originalPhone = undefined;
                    };
                    $scope.savePhoneSuccess = function () {
                        Notify.success('修改成功!');
                        $scope.isEditingPhone = false;
                    };
                    $scope.savePhoneFailed = function () {
                        Notify.warn('修改提交失败,请稍后再试.');
                    };
                    $scope.savePhone = function () {
                        $http.put('/gurus/' + $scope.user_id + '.json', { id: $scope.user_id, user: { phone: $scope.user.phone } })
                            .then(function () {
                            $scope.savePhoneSuccess();
                        }, function () {
                            $scope.savePhoneFailed();
                        });
                    };
                    $scope.editBirthday = function () {
                        $scope.isEditingBirthday = true;
                        $scope.originalBirthday = angular.copy($scope.user.birthday);
                    };
                    $scope.cancelBirthday = function () {
                        $scope.isEditingBirthday = false;
                        $scope.user.birthday = $scope.originalBirthday;
                        $scope.originalBirthday = undefined;
                    };
                    $scope.saveBirthdaySuccess = function () {
                        Notify.success('修改成功!');
                        $scope.isEditingBirthday = false;
                    };
                    $scope.saveBirthdayFailed = function () {
                        Notify.warn('修改提交失败,请稍后再试.');
                    };
                    $scope.viewDate = function (val) {
                        if (!val) {
                            return null;
                        }
                        if (_.isDate(val)) {
                            return moment(val).format('MM/DD/YYYY');
                        }
                        else {
                            return val;
                        }
                    };
                    $scope.saveBirthday = function () {
                        $scope.user.birthday = $scope.viewDate($scope.user.birthday);
                        $http.put('/gurus/' + $scope.user_id + '.json', { id: $scope.user_id, user: { birthday: $scope.user.birthday } })
                            .then(function () {
                            $scope.saveBirthdaySuccess();
                        }, function () {
                            $scope.saveBirthdayFailed();
                        });
                    };
                    $scope.showGender = function () {
                        if ($scope.user.gender == 'male') {
                            return '男';
                        }
                        else if ($scope.user.gender == 'female') {
                            return '女';
                        }
                        else if ($scope.user.gender == 'gender_unknown') {
                            return '不明';
                        }
                    };
                    $scope.saveGender = function (g) {
                        var originalGender = $scope.gender;
                        $scope.user.gender = g;
                        $http.put('/gurus/' + $scope.user_id + '.json', { id: $scope.user_id, user: { gender: g } })
                            .then(function () {
                            Notify.success('修改成功!');
                            originalGender = undefined;
                            $scope.save_error = false;
                        }, function () {
                            Notify.warn('修改提交失败,请稍后再试.');
                            $scope.user.gender = originalGender;
                            originalGender = undefined;
                            $scope.save_error = true;
                        });
                    };
                    $scope.isActiveCategory = function (id) {
                        var c = _.find($scope.user.user_category_relations_attributes, function (c) {
                            return c['category_id'] == id;
                        });
                        return c && c['status'] == 1;
                    };
                    $scope.toggleCategory = function (id) {
                        var c = _.find($scope.user.user_category_relations_attributes, function (c) {
                            return c['category_id'] == id;
                        });
                        if (c) {
                            if (c['status'] == 1) {
                                c['status'] = 0;
                            }
                            else {
                                c['status'] = 1;
                            }
                        }
                        else {
                            $scope.user.user_category_relations_attributes.push({ category_id: id, status: 1 });
                        }
                        $http.put('/gurus/' + $scope.user_id + '.json', {
                            id: $scope.user_id,
                            user: {
                                user_category_relations_attributes: $scope.user.user_category_relations_attributes
                            }
                        }).then(function (result) {
                            _.each(result.data.user_category_relations_attributes, function (r) {
                                var found = _.find($scope.user.user_category_relations_attributes, function (c) {
                                    return c['category_id'] == r.category_id;
                                });
                                found['id'] = r['id'];
                            });
                        });
                    };
                    $scope.remoteUrlRequestFn = function (str) {
                        return { k: str, c: $scope.country.id };
                    };
                    $scope.selectedLocation = function (selected) {
                        if (selected && selected.originalObject) {
                            var originalPOI = {
                                id: $scope.user.poi_id,
                                name: $scope.user.poi_name
                            };
                            $scope.user.poi_id = selected.originalObject.id;
                            $scope.user.poi_name = selected.originalObject.name;
                            $('#user_city_input').val($scope.user.poi_name);
                            $('#user_city_input').text($scope.user.poi_name);
                            $('#user_city_input').attr('placeholder', $scope.user.poi_name);
                        }
                    };
                    $scope.editLocation = function () {
                        $scope.isEditingLocation = true;
                        $scope.originalPoiId = angular.copy($scope.user.poi_id);
                        $scope.originalPoiName = angular.copy($scope.user.poi_name);
                        if ($scope.user.poi_id == 0) {
                            $scope.user.poi_name = '';
                        }
                    };
                    $scope.cancelLocation = function () {
                        $scope.isEditingLocation = false;
                        $scope.user.poi_id = $scope.originalPoiId;
                        $scope.user.poi_name = $scope.originalPoiName;
                        $scope.originalPoiId = undefined;
                        $scope.originalPoiName = undefined;
                    };
                    $scope.saveLocationSuccess = function (result) {
                        Notify.success('修改成功!');
                        $scope.originalPoiId = undefined;
                        $scope.originalPoiName = undefined;
                        $scope.isEditingLocation = false;
                    };
                    $scope.saveLocationFailed = function () {
                        Notify.warn('修改提交失败,请稍后再试.');
                    };
                    $scope.saveLocation = function (poi) {
                        if (poi === void 0) { poi = null; }
                        if (poi) {
                            $scope.user = {};
                            $scope.user.poi_id = poi.id;
                            $scope.user.poi_name = poi.name;
                        }
                        if (!$scope.user.poi_id) {
                            Notify.warn('请选择所在地信息后再试.');
                            return;
                        }
                        ;
                        $http.put('/gurus/' + $scope.user_id + '.json', {
                            id: $scope.user_id,
                            user: {
                                poi_id: $scope.user.poi_id
                            }
                        }).then(function (result) {
                            $scope.saveLocationSuccess(result);
                        }, function () {
                            $scope.saveLocationFailed();
                        });
                    };
                    $scope.reset_poi = function () {
                        $scope.user.poi_id = 0;
                        $scope.user.poi_name = '';
                    };
                    $scope.saveNickNameSuccess = function (result) {
                        $('#modal-nickname-edit').modal('hide');
                        Notify.success('修改成功!');
                        $scope.user.nickname = $scope.user.new_nickname;
                        $scope.user.new_nickname = '';
                        $scope.user.current_password = '';
                        $scope.nicknameForm.$setPristine();
                        $scope.password_error = false;
                    };
                    $scope.saveNickNameFailed = function (response) {
                        if (response.status == 422) {
                            $scope.password_error = true;
                        }
                        else {
                            Notify.warn('修改提交失败,请稍后再试.');
                        }
                    };
                    $scope.saveNickname = function () {
                        if ($scope.nicknameForm.$invalid) {
                            return;
                        }
                        $http.put('/users/update_nickname.json', {
                            id: $scope.user_id,
                            user: {
                                nickname: $scope.user.new_nickname,
                                current_password: $scope.user.current_password
                            }
                        }).then(function (result) {
                            $scope.saveNickNameSuccess(result);
                        }, function (response) {
                            $scope.saveNickNameFailed(response);
                        });
                    };
                    $scope.savePasswordSuccess = function (result) {
                        $('#modal-pwd-edit').modal('hide');
                        Notify.success('修改成功!');
                        $scope.user.password = '';
                        $scope.user.password_confirmation = '';
                        $scope.user.current_password = '';
                        $scope.passwordForm.$setUntouched();
                        $scope.password_error = false;
                    };
                    $scope.savePasswordFailed = function (response) {
                        if (response.status == 422) {
                            $scope.password_error = true;
                        }
                        else {
                            Notify.warn('修改提交失败,请稍后再试.');
                        }
                    };
                    $scope.savePassword = function (nextPage) {
                        if (nextPage === void 0) { nextPage = null; }
                        if ($scope.user.password != $scope.user.password_confirmation &&
                            $scope.passwordForm.password.$touched &&
                            $scope.passwordForm.password_confirmation.$touched) {
                            return;
                        }
                        if ($scope.passwordForm.$invalid) {
                            return;
                        }
                        $http.put('/users/update_password.json', {
                            id: $scope.user_id,
                            user: {
                                password: $scope.user.password,
                                password_confirmation: $scope.user.password_confirmation,
                                current_password: $scope.user.current_password
                            }
                        }).then(function (result) {
                            $scope.savePasswordSuccess(result);
                            if (nextPage) {
                                Turbolinks.visit(nextPage);
                            }
                        }, function (response) {
                            $scope.savePasswordFailed(response);
                        });
                    };
                    $scope.saveEmailSuccess = function (result) {
                        $('#modal-email-edit').modal('hide');
                        Notify.success('修改成功！您的新邮箱将会收到一封确认账号的邮件。');
                        $scope.user.email = $scope.user.new_email;
                        $scope.user.new_email = '';
                        $scope.user.email_confirmation = '';
                        $scope.user.current_password = '';
                        $scope.emailForm.$setUntouched();
                        $scope.password_error = false;
                        setTimeout(function () {
                            Turbolinks.visit(window.location.href, { action: 'replace' });
                        }, 3000);
                    };
                    $scope.saveEmailFailed = function (response) {
                        if (response.status == 422) {
                            $scope.password_error = true;
                        }
                        else {
                            if (response.data && response.data.message) {
                                Notify.warn(response.data.message);
                            }
                            else {
                                Notify.warn('修改提交失败,请稍后再试.');
                            }
                        }
                    };
                    $scope.saveEmail = function (nextPage) {
                        if (nextPage === void 0) { nextPage = null; }
                        if ($scope.user.new_email != $scope.user.email_confirmation &&
                            $scope.emailForm.email.$touched &&
                            $scope.emailForm.email_confirmation.$touched) {
                            return;
                        }
                        if ($scope.emailForm.$invalid) {
                            return;
                        }
                        $http.put('/users/update_email.json', {
                            id: $scope.user_id,
                            user: {
                                email: $scope.user.new_email,
                                current_password: $scope.user.current_password
                            }
                        }).then(function (result) {
                            $scope.saveEmailSuccess(result);
                            if (nextPage) {
                                Turbolinks.visit(nextPage);
                            }
                        }, function (response) {
                            $scope.saveEmailFailed(response);
                        });
                    };
                }
                Users.UserEditCtrl = UserEditCtrl;
                angular.module('GuruIn.App')
                    .controller('UserEditCtrl', ['$scope', '$http', UserEditCtrl]);
            })(Users = Controllers.Users || (Controllers.Users = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Users;
            (function (Users) {
                'use strict';
                function unfollowfollow(user_id, current_user_id, changeClass, showStatusText) {
                    if (changeClass === void 0) { changeClass = false; }
                    if (showStatusText === void 0) { showStatusText = false; }
                    var followButtonId = '.follow-button-' + user_id;
                    var performing = $(followButtonId).data('performing');
                    if (performing) {
                        return;
                    }
                    var followButtonIconId = '.follow-button-i-' + user_id;
                    var followButtonTextId = '.follow-button-text-' + user_id;
                    var followingCoutId = '.following-count-' + current_user_id;
                    var followedCountId = '.followed-count-' + user_id;
                    $(followButtonId).data('performing', true);
                    var isfollowed = $(followButtonId).data('isfollowed');
                    var isfollowing = $(followButtonId).data('isfollowing');
                    if (isfollowed) {
                        $.ajax({
                            url: '/gurus/' + user_id + '/unfollow.json',
                            method: 'POST'
                        }).done(function () {
                            $(followButtonIconId).removeClass('fa-exchange fa-check').addClass('fa-user-plus');
                            if ($(followButtonTextId).length > 0) {
                                $(followButtonTextId).text('关注');
                            }
                            if ($(followButtonId).is('[title]')) {
                                $(followButtonId).attr('title', '关注');
                            }
                            if (changeClass) {
                                $(followButtonId).removeClass('btn-success btn-default').addClass('btn-success');
                            }
                            $(followButtonId).data('isfollowed', false);
                            //update count
                            if ($(followingCoutId).length > 0) {
                                var followingCount = parseInt($(followingCoutId).first().text());
                                if (followingCount > 0) {
                                    $(followingCoutId).text(followingCount - 1);
                                }
                            }
                            if ($(followedCountId).length > 0) {
                                var followedCount = parseInt($(followedCountId).first().text());
                                if (followedCount > 0) {
                                    $(followedCountId).text(followedCount - 1);
                                }
                            }
                        }).always(function () {
                            $(followButtonId).data('performing', false);
                        });
                    }
                    else {
                        $.ajax({
                            url: '/gurus/' + user_id + '/follow.json',
                            method: 'POST'
                        }).done(function () {
                            if (isfollowing) {
                                $(followButtonIconId).removeClass('fa-user-plus fa-check').addClass('fa-exchange');
                            }
                            else {
                                $(followButtonIconId).removeClass('fa-exchange fa-user-plus').addClass('fa-check');
                            }
                            if ($(followButtonTextId).length > 0) {
                                var statusText = showStatusText ? (isfollowing ? '互相关注' : '已关注') : '取消关注';
                                $(followButtonTextId).text(statusText);
                            }
                            if ($(followButtonId).is('[title]')) {
                                $(followButtonId).attr('title', '取消关注');
                            }
                            if (changeClass) {
                                $(followButtonId).removeClass('btn-success btn-default').addClass('btn-default');
                            }
                            $(followButtonId).data('isfollowed', true);
                            //update count
                            if ($(followingCoutId).length > 0) {
                                var followingCount = parseInt($(followingCoutId).first().text());
                                $(followingCoutId).text(followingCount + 1);
                            }
                            if ($(followedCountId).length > 0) {
                                var followedCount = parseInt($(followedCountId).first().text());
                                $(followedCountId).text(followedCount + 1);
                            }
                        }).always(function () {
                            $(followButtonId).data('performing', false);
                        });
                    }
                }
                Users.unfollowfollow = unfollowfollow;
                ;
            })(Users = Controllers.Users || (Controllers.Users = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
/*global angular, Renative, _, moment*/

'use strict';

angular.module('GuruIn.App')
  .controller('OnboardController', ['$scope', '$http', function($scope, $http) {

    $scope.$on('fileuploaddone', function(event, data) {
      if(data && data.result && data.result.files && data.result.files.length > 0){
        var result = data.result.files[0];
        if (result.photoable_id === $scope.user_id && /::User/i.test(result.photoable_type)) {
          $http.put('/gurus/' + $scope.user_id + '.json', { id: $scope.user_id, user: { photo_id: result.id, photo_url: result.url } }).then(function() {
            Renative.Notify.success('上传成功!');
            $scope.user.photo_url = result.url;
          }, function() {
            Renative.Notify.warn('修改提交失败,请稍后再试.');
          });
        }
      }else{
        Renative.Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
      }
    });

    $scope.$on('fileuploadfail', function(event, data){
      Renative.Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
    });

    $scope.currentStep = 1;

    $scope.goPrevStep = function() {
      if ($scope.currentStep === 1) {
        return;
      }
      $scope.goStep(--$scope.currentStep);
    };

    $scope.goNextStep = function() {
      $scope.goStep(++$scope.currentStep);
    };

    $scope.goStep = function(step) {
      $scope.currentStep = step;
    };

    $scope.save = function() {
      if ($scope.user.birthday) {
        $scope.user.birthday = moment($scope.user.birthday).format('L');
      }
      $http.put('/gurus/' + $scope.user_id + '.json', { id: $scope.user_id, user: $scope.user })
        .then(function() {
          Renative.Notify.success('保存成功!');
          Turbolinks.visit('/me', { action: 'replace' });
        }, function() {
          Renative.Notify.warn('提交失败,请稍后再试.');
        });
    };

    $scope.isActiveCategory = function(id) {
      var c = _.find($scope.user.user_category_relations_attributes, function(c) {
        return c.category_id === id;
      });
      return c && c.status === 1;
    };

    $scope.toggleCategory = function(relation) {
      var c = _.find($scope.user.user_category_relations_attributes, function(c) {
        return c.category_id === relation.id;
      });
      if (c) {
        if (c.status === 1) {
          c.status = 0;
        } else {
          c.status = 1;
        }
      } else {
        $scope.user.user_category_relations_attributes.push({ category_id: relation.id, category_name: relation.name, status: 1 });
      }
    };

    $scope.remoteUrlRequestFn = function(str) {
      return { k: str, c: $scope.country.id };
    };

    $scope.searchStr = "";
    $scope.selectedLocation = function(selected) {
      if (selected && selected.originalObject) {
        $scope.user.poi_id = selected.originalObject.id;
        $scope.user.poi_name = selected.originalObject.name;
        $scope.searchStr = $scope.user.poi_name;
        $('#user_city_input').val($scope.user.poi_name);
        $('#user_city_input').text($scope.user.poi_name);
        $('#user_city_input').attr('placeholder',$scope.user.poi_name);
      }
    };
  }]);
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Services;
        (function (Services) {
            var User;
            (function (User) {
                var R = GuruIn.App.Resources;
                var checkBindEmail = {
                    method: 'POST',
                    isArray: false,
                    url: '/users/check_bind_email.json'
                };
                var connectUsingPassword = {
                    method: 'POST',
                    isArray: false,
                    url: '/users/do_bind_email.json'
                };
                // resource service definition
                function UserResource($resource) {
                    var actions = {
                        checkBindEmail: checkBindEmail,
                        connectUsingPassword: connectUsingPassword
                    };
                    return R.railsResource($resource, '/users.json', actions);
                }
                User.UserResource = UserResource;
                angular
                    .module('GuruIn.App')
                    .factory('GuruIn.App.Services.User', ['$resource', UserResource]);
            })(User = Services.User || (Services.User = {}));
        })(Services = App.Services || (App.Services = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var About;
            (function (About) {
                'use strict';
                function initAbout() {
                    $('#about-us')['fullpage']({
                        anchors: ['one', 'two', 'three', 'four'],
                        sectionsColor: ['#121b29', '#e36059', '#8a60b5', '#ffffff'],
                        navigation: true,
                        navigationPosition: 'right'
                    });
                    $(document).on('dispose:region', function () {
                        $.fn.fullpage.destroy(true);
                    });
                }
                About.initAbout = initAbout;
            })(About = Controllers.About || (Controllers.About = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Address;
            (function (Address) {
                function Controller($scope, $http) {
                }
                Address.Controller = Controller;
                angular
                    .module('GuruIn.App')
                    .controller('GuruIn.App.Controllers.Address', ['$scope', '$http', Controller]);
            })(Address = Controllers.Address || (Controllers.Address = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var ArticleCollection;
            (function (ArticleCollection_1) {
                'use strict';
                var Notify = Renative.Notify;
                ;
                ;
                angular.module('GuruIn.App')
                    .factory('ArticleCollectionResource', ['$resource', function ($resource) {
                        var updateAction = {
                            method: 'PUT',
                            isArray: false
                        };
                        return $resource('/article_collections/:id.json', { id: '@id' }, {
                            update: updateAction
                        });
                    }])
                    .controller('ArticleCollectionShowCtrl', ['$scope', 'ArticleCollectionResource', function ($scope, ArticleCollection) {
                        $scope.cover_photo_loaded_class = '';
                        $scope.coverImageLoaded = function () {
                            $scope.cover_photo_url = $scope.photo_url;
                            $scope.cover_photo_loaded_class = 'fadeOut';
                        };
                        $scope.$on('fileuploaddone', function (event, data) {
                            if (data && data.result && data.result.files && data.result.files.length > 0) {
                                var result = data.result.files[0];
                                if (result.photoable_id == $scope.article_collection_id && /::ArticleCollection/i.test(result.photoable_type)) {
                                    ArticleCollection.update({
                                        id: $scope.article_collection_id,
                                        article_collection: { photo_id: result.id, photo_url: result.url }
                                    }, function () {
                                        $scope.photo_url = result.url;
                                    }, function (httpResponse) {
                                        Notify.error(httpResponse.data.error);
                                    });
                                }
                            }
                            else {
                                Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                            }
                        });
                        $scope.$on('fileuploadfail', function (event, data) {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        });
                    }]);
            })(ArticleCollection = Controllers.ArticleCollection || (Controllers.ArticleCollection = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Coupon;
            (function (Coupon) {
                var prepare_unique_id = function () {
                    var unique_id = '';
                    if (window.localStorage) {
                        unique_id = window.localStorage.getItem('UNIQUE_ID');
                        if (!unique_id) {
                            unique_id = $('#unique_id').val();
                            window.localStorage.setItem('UNIQUE_ID', unique_id);
                        }
                    }
                    else {
                        unique_id = $('#unique_id').val();
                    }
                    return unique_id;
                };
                function youworld_view(id) {
                    if (window['GuruInGlobalVar_YouworldRequest']) {
                        return;
                    }
                    var unique_id = prepare_unique_id();
                    $('#modal-youworld').empty();
                    window['GuruInGlobalVar_YouworldRequest'] = true;
                    $.get('/coupons/youworld/' + id + '?unique_id=' + unique_id).then(function (result) {
                        if (result) {
                            $('#modal-youworld').html(result);
                            $('#modal-youworld').modal();
                        }
                        window['GuruInGlobalVar_YouworldRequest'] = false;
                    }, function () {
                        window['GuruInGlobalVar_YouworldRequest'] = false;
                    });
                }
                Coupon.youworld_view = youworld_view;
                ;
                function my_youworld_link() {
                    var unique_id = prepare_unique_id();
                    Turbolinks.visit("/coupons/youworld/?my=1&ui=" + unique_id, { action: 'replace' });
                }
                Coupon.my_youworld_link = my_youworld_link;
                ;
                function youworld_redeem(id) {
                    var unique_id = prepare_unique_id();
                    if (window['GuruInGlobalVar_YouworldRequest']) {
                        return;
                    }
                    window['GuruInGlobalVar_YouworldRequest'] = true;
                    $.post('/coupons/do_redeem_youworld', { youworld: { coupon_id: id, unique_id: unique_id, user_id: $('#user_id_field').val() } }).then(function (result) {
                        window['GuruInGlobalVar_YouworldRequest'] = false;
                        $('#coupon-redeem-count-' + id).show();
                        $('#popup-coupon-redeem-count-' + id).show();
                        var original = $('#popup-span-coupon-count-' + id).text();
                        var newCount = parseInt(original) + 1;
                        $('#span-coupon-count-' + id).text(newCount);
                        $('#popup-span-coupon-count-' + id).text(newCount);
                        $('#redeem-success-' + id).show();
                        $('#redeem-button-' + id).hide();
                        $('#coupon-discount-' + id).show();
                        $('#coupon-details-' + id).show();
                    }, function () {
                        window['GuruInGlobalVar_YouworldRequest'] = false;
                    });
                }
                Coupon.youworld_redeem = youworld_redeem;
                ;
                function CouponController($scope, $window, $http, $compile) {
                    $scope.loading = false;
                    $scope.has_error = false;
                    $scope.error_msg = '';
                    $scope.redeem_success = false;
                    $scope.view = function (id, modal_id) {
                        $(modal_id).modal('show');
                        $http.post('/coupons/track', { coupon_id: id, usage_type_name: 'view' })
                            .then(function (result) { }, function () { });
                    };
                    $scope.redeem = function (id) {
                        $scope.loading = true;
                        $http.post('/coupons/track', { coupon_id: id, usage_type_name: 'redeem' })
                            .then(function (result) {
                            $scope.loading = false;
                            $scope.has_error = false;
                            $scope.error_msg = '';
                            $scope.redeem_success = true;
                            $('#coupon-redeem-count-' + id).show();
                            $('#model-coupon-redeem-count-' + id).show();
                            $('#model-coupon-redeem-button-' + id).hide();
                            var original = $('#span-coupon-count-' + id).text();
                            var newCount = parseInt(original) + 1;
                            $('#span-coupon-count-' + id).text(newCount);
                            $('#model-span-coupon-count-' + id).text(newCount);
                        }, function () {
                            $scope.has_error = true;
                            $scope.error_msg = '兑换失败，请重试或联系我们.';
                            $scope.loading = false;
                            $scope.redeem_success = false;
                        });
                    };
                }
                Coupon.CouponController = CouponController;
                angular.module('GuruIn.App')
                    .controller('CouponController', ['$scope', '$window', '$http', '$compile', CouponController]);
            })(Coupon = Controllers.Coupon || (Controllers.Coupon = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Deal;
            (function (Deal) {
                'use strict';
                var DOM = Renative.DOM;
                var Notify = Renative.Notify;
                function Controller($scope) {
                    var self = $scope;
                    self.viewSource = function (url) {
                        window.open(url, 'preview', 'toolbar=yes,top=0,left=0,width=800,height=600');
                    };
                    var setExpiresLabel = function (id) {
                        var soldOut = $('#sold-out-status-' + id).val();
                        if (soldOut === '1') {
                            $('#expires-label-' + id).text('售罄');
                            $('#expires-div-' + id).show();
                            return;
                        }
                        var expires = $('#expires-status-' + id).val();
                        if (expires === '1') {
                            $('#expires-label-' + id).text('过期');
                            $('#expires-div-' + id).show();
                            return;
                        }
                        $('#expires-label-' + id).text('');
                        $('#expires-div-' + id).hide();
                    };
                    self.markSoldout = function (id, e) {
                        DOM.stopPropagation(e);
                        $.ajax({
                            type: 'POST',
                            url: '/deals/' + id + '/mark_soldout',
                            success: function (result) {
                                $('#sold-out-status-' + id).val('1');
                                $('#soldout-button-' + id).hide();
                                $('#non-soldout-button-' + id).show();
                                setExpiresLabel(id);
                            },
                            error: function () {
                                Notify.warn('操作时发生错误.');
                            },
                            dataType: 'json'
                        });
                    };
                    self.markNonSoldout = function (id, e) {
                        DOM.stopPropagation(e);
                        $.ajax({
                            type: 'POST',
                            url: '/deals/' + id + '/mark_nonsoldout',
                            success: function (result) {
                                $('#sold-out-status-' + id).val('0');
                                $('#soldout-button-' + id).show();
                                $('#non-soldout-button-' + id).hide();
                                setExpiresLabel(id);
                            },
                            error: function () {
                                Notify.warn('操作时发生错误.');
                            },
                            dataType: 'json'
                        });
                    };
                    self.markExpired = function (id, e) {
                        DOM.stopPropagation(e);
                        $.ajax({
                            type: 'POST',
                            url: '/deals/' + id + '/mark_expired',
                            success: function (result) {
                                $('#expires-status-' + id).val('1');
                                $('#expired-button-' + id).hide();
                                $('#non-expired-button-' + id).show();
                                setExpiresLabel(id);
                            },
                            error: function () {
                                Notify.warn('操作时发生错误.');
                            },
                            dataType: 'json'
                        });
                    };
                    self.markNonExpired = function (id, e) {
                        DOM.stopPropagation(e);
                        $.ajax({
                            type: 'POST',
                            url: '/deals/' + id + '/mark_nonexpired',
                            success: function (result) {
                                $('#expires-status-' + id).val('0');
                                $('#expired-button-' + id).show();
                                $('#non-expired-button-' + id).hide();
                                setExpiresLabel(id);
                            },
                            error: function () {
                                Notify.warn('操作时发生错误.');
                            },
                            dataType: 'json'
                        });
                    };
                }
                Deal.Controller = Controller;
                angular.module('GuruIn.App')
                    .controller('GuruIn.App.Controllers.Deal', ['$scope', Controller]);
            })(Deal = Controllers.Deal || (Controllers.Deal = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var FreshStory;
            (function (FreshStory) {
                function FreshStoryController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.button_text = '换一换';
                    $scope.new_index = 2;
                    $scope.max_index = 4;
                    $scope.change = function ($event) {
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $scope.button_text = '拼命加载中...';
                        $('#hot-news-button').html('<i class="fa fa-refresh"></i>' + $scope.button_text);
                        $http.get($scope.url, { params: { page: $scope.new_index } })
                            .then(function (result) {
                            $scope.loading = false;
                            $scope.button_text = '换一换';
                            $scope.new_index += 1;
                            if ($scope.new_index > $scope.max_index) {
                                $scope.new_index = 1;
                            }
                            var $news = $(result.data);
                            angular.element(document.querySelector('div.fresh-story-md')).remove();
                            var container = angular.element(document.querySelector('div#hot-fresh-story'));
                            container.prepend($news);
                            $('#hot-news-button').html('<i class="fa fa-refresh"></i>' + $scope.button_text);
                        }, function () {
                            $scope.loading = false;
                            $scope.button_text = '换一换';
                            $('#hot-news-button').html('<i class="fa fa-refresh"></i>' + $scope.button_text);
                        });
                    };
                }
                FreshStory.FreshStoryController = FreshStoryController;
                angular.module('GuruIn.App')
                    .controller('FreshStoryController', ['$scope', '$http', '$compile', FreshStoryController]);
            })(FreshStory = Controllers.FreshStory || (Controllers.FreshStory = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            'use strict';
            function LikeUnlikeCtrl($rootScope, $scope, $element, $http) {
                var like = function () {
                    $http.post($scope.url_prefix + 'like_it.json')
                        .then(function () {
                        $scope.liked_count += 1;
                        $scope.liked = true;
                        $rootScope.$broadcast('guruin:app:likeunlike:sync', $scope);
                        if (window['GuruInGlobalData_ShareGroups'] && window['GuruInGlobalData_ShareGroups']['groups']) {
                            for (var j = 0; j < window['GuruInGlobalData_ShareGroups']['groups'].length; ++j) {
                                var action = window['GuruInGlobalData_ShareGroups']['groups'][j];
                                if (action && action['name'] && action['name'] == 'action') {
                                    var like_action_index = null;
                                    for (var i = 0, len = action['menuItems'].length; i < len; ++i) {
                                        if (action['menuItems'][i]["id"] && action['menuItems'][i]["id"] == 'like') {
                                            like_action_index = i;
                                        }
                                    }
                                    if (like_action_index) {
                                        action['menuItems'].splice(like_action_index, 1);
                                    }
                                }
                            }
                        }
                    });
                };
                var unlike = function (id) {
                    if (id === void 0) { id = null; }
                    $http.post($scope.url_prefix + 'unlike_it.json')
                        .then(function () {
                        $scope.liked_count -= 1;
                        $scope.liked = false;
                        if (id) {
                            $('#' + id).hide();
                        }
                        if ($scope.refresh_url) {
                            Turbolinks.visit($scope.refresh_url);
                        }
                        else {
                            $rootScope.$broadcast('guruin:app:likeunlike:sync', $scope);
                        }
                    });
                };
                $scope.likeunlike = function (id) {
                    if (id === void 0) { id = null; }
                    if ($scope.liked) {
                    }
                    else {
                        like();
                    }
                };
                $scope.dislike = function (id) {
                    if (id === void 0) { id = null; }
                    if ($scope.disliked || $scope.liked) {
                        return;
                    }
                    $http.post($scope.url_prefix + 'unlike_it.json')
                        .then(function () {
                        $scope.disliked_count += 1;
                        $scope.disliked = true;
                    });
                };
                $scope.dolike = function (id) {
                    if (id === void 0) { id = null; }
                    if ($scope.liked || $scope.disliked) {
                        return;
                    }
                    $http.post($scope.url_prefix + 'like_it.json')
                        .then(function () {
                        $scope.liked_count += 1;
                        $scope.liked = true;
                    });
                };
                $scope.$on('guruin:app:likeunlike:sync', function (e, broadcast_scope) {
                    if (broadcast_scope.url_prefix === $scope.url_prefix) {
                        $scope.safeApply(function () {
                            $scope.liked_count = broadcast_scope.liked_count;
                            $scope.liked = broadcast_scope.liked;
                        });
                    }
                });
                $(document).on('guruin:native:like', function (e, url, count) {
                    if ($element.hasClass('handle-event')) {
                        $scope.url_prefix = url;
                        $scope.liked_count = count;
                        $scope.likeunlike();
                    }
                });
            }
            Controllers.LikeUnlikeCtrl = LikeUnlikeCtrl;
            angular.module('GuruIn.App')
                .controller('LikeUnlikeCtrl', ['$rootScope', '$scope', '$element', '$http', LikeUnlikeCtrl]);
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Listing;
            (function (Listing_1) {
                var R = GuruIn.App.Resources;
                var Notify = Renative.Notify;
                ;
                ;
                ;
                ;
                function ListingResource($resource) {
                    return R.railsResource($resource, '/listings/:id.json');
                }
                Listing_1.ListingResource = ListingResource;
                ;
                function ListingCreateController($scope, $window, Listing) {
                    var self = $scope;
                    self.createIndexArray = function (arrayLength) {
                        arrayLength = Math.ceil(arrayLength);
                        var arr = new Array(arrayLength), i = 0;
                        for (; i < arrayLength; i++) {
                            arr[i] = i;
                        }
                        return arr;
                    };
                    self.remoteUrlRequestFn = function (str) {
                        return { k: str };
                    };
                    self.checkError = function () {
                        var errors = [];
                        if ($.trim(self.model.name).length == 0) {
                            errors.push('请填写标题.');
                        }
                        if ($.trim(self.model.address).length == 0) {
                            errors.push('请填写所在地.');
                        }
                        if ($.trim(self.model.price).length > 0) {
                            self.model.price = self.model.price.replace(',', '').replace('，', '');
                            var priceFloat = parseFloat(self.model.price);
                            if (isNaN(priceFloat)) {
                                errors.push('请填写正确的期望售价.');
                            }
                        }
                        for (var i = 0, len = self.model.properties.length; i < len; ++i) {
                            var category_property_relation = self.model.properties[i];
                            var has_error = false;
                            if (category_property_relation.show_type != 'range' && category_property_relation.form_required && $.trim(category_property_relation.property_value).length == 0) {
                                errors.push('请填写' + category_property_relation.property_name + '.');
                            }
                            if (category_property_relation.show_type != 'range' && category_property_relation.numeric && $.trim(category_property_relation.property_value).length > 0) {
                                if (!($.isNumeric(category_property_relation.property_value))) {
                                    errors.push('请正确填写' + category_property_relation.property_name + '.');
                                }
                            }
                            if (category_property_relation.show_type == 'range' && category_property_relation.form_required &&
                                ($.trim(category_property_relation.property_range_value1).length == 0 || $.trim(category_property_relation.property_range_value2).length == 0)) {
                                errors.push('请填写' + category_property_relation.property_name + '.');
                                has_error = true;
                            }
                            if (category_property_relation.show_type == 'range' && category_property_relation.numeric && $.trim(category_property_relation.property_range_value1).length > 0) {
                                if (!($.isNumeric(category_property_relation.property_range_value1))) {
                                    errors.push('请正确填写' + category_property_relation.property_name + '.');
                                    has_error = true;
                                }
                            }
                            if (category_property_relation.show_type == 'range' && category_property_relation.numeric && $.trim(category_property_relation.property_range_value2).length > 0) {
                                if (!($.isNumeric(category_property_relation.property_range_value2))) {
                                    errors.push('请正确填写' + category_property_relation.property_name + '.');
                                    has_error = true;
                                }
                            }
                            if (category_property_relation.show_type == 'range' && !has_error) {
                                category_property_relation.property_value = '';
                                var has_first_value = false;
                                if ($.trim(category_property_relation.property_range_value1).length > 0) {
                                    category_property_relation.property_value = category_property_relation.property_range_value1;
                                    has_first_value = true;
                                }
                                if ($.trim(category_property_relation.property_range_value2).length > 0) {
                                    if (has_first_value) {
                                        category_property_relation.property_value += ' 至 ';
                                    }
                                    category_property_relation.property_value += category_property_relation.property_range_value2;
                                }
                            }
                        }
                        if ($.trim(self.model.user_name).length == 0) {
                            errors.push('请填写姓名.');
                        }
                        if ($.trim(self.model.email).length == 0) {
                            errors.push('请填写联系方式邮箱.');
                        }
                        if ($.trim(self.model.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail(self.model.email)) {
                                errors.push('请填写正确的邮箱, 好方便用户咨询.');
                            }
                        }
                        if ($.trim(self.model.phone_number).length == 0) {
                            errors.push('请填写电话号码, 它只对咕噜可见.');
                        }
                        return errors;
                    };
                    self.getPropertyById = function (property_id) {
                        for (var i = 0, len = self.model.properties.length; i < len; ++i) {
                            var category_property_relation = self.model.properties[i];
                            if (category_property_relation.property_id == property_id) {
                                return category_property_relation;
                            }
                        }
                        return null;
                    };
                    self.reset = function () {
                        self.model.name = '';
                        self.model.promotion_text = '';
                        self.model.address = '';
                        self.model.price = '';
                        self.model.description = '';
                        self.model.photo_id == 0;
                        for (var i = 0; i < self.model.photos.length; i += 1) {
                            $('#photo-' + self.model.photos[i].id).hide();
                        }
                        self.model.photos = [];
                        if (typeof self.queue != 'undefined') {
                            self.queue = null;
                        }
                        for (var i = 0, len = self.model.properties.length; i < len; ++i) {
                            var category_property_relation = self.model.properties[i];
                            if (category_property_relation.show_type != 'dropdown') {
                                category_property_relation.property_value = '';
                                category_property_relation.property_range_value1 = '';
                                category_property_relation.property_range_value2 = '';
                            }
                        }
                    };
                    self.do_save = function (e) {
                        var errors = self.checkError();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        $('#save-button').text('提交中...');
                        if (self.model.id > 0) {
                            Listing.update({ id: self.model.id, listing: self.model }, function () {
                                Turbolinks.visit('/listings/' + self.model.id, { action: 'replace' });
                            }, function () {
                                Notify.warn('保存信息发生错误, 请稍后重试或者联系我们.');
                                $('#save-button').text('提交发布');
                            });
                        }
                        else {
                            Listing.save({ listing: self.model }, function (a) {
                                Notify.success('创建申请已发送，管理员批准后，您会收到邮件提示，谢谢.');
                                self.reset();
                                $('#save-button').text('提交发布');
                            }, function () {
                                Notify.warn('保存信息发生错误, 请稍后重试或者联系我们.');
                                $('#save-button').text('提交发布');
                            });
                        }
                    };
                    self.removePhoto = function (id) {
                        var selected_index = [];
                        for (var i = 0; i < self.model.photos.length; i += 1) {
                            if (self.model.photos[i].id == id) {
                                selected_index.push(i);
                            }
                        }
                        for (var j = 0; j < selected_index.length; j += 1) {
                            self.model.photos.splice(selected_index[j], 1);
                        }
                        if (self.model.photo_id == id) {
                            self.model.photo_id == 0;
                        }
                        setTimeout(function () { $('#photo-' + id).hide(); }, 1);
                    };
                    self.selectPhoto = function (id) {
                        self.model.photo_id = id;
                    };
                    self.ChoosePropertyValue = function (pv) {
                        if (pv) {
                            var category_property_relation = self.getPropertyById(pv.property_id);
                            if (category_property_relation) {
                                category_property_relation.property_value = pv.value;
                            }
                        }
                    };
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (/::Listing/i.test(result.photoable_type)) {
                                if (result.context == 'photo') {
                                    self.model.photos.push({ id: result.id, url: result.url, is_new: true, listing_id: 0 });
                                    if (self.model.photo_id == 0) {
                                        self.model.photo_id = result.id;
                                    }
                                }
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                }
                Listing_1.ListingCreateController = ListingCreateController;
                ;
                function deactivate(id) {
                    if (confirm('你确定要停止这个发布信息吗？这样其他人就看不到它了.')) {
                        $.ajax({
                            url: '/listings/' + id,
                            type: 'delete'
                        })
                            .done(function () {
                            Notify.success('停止发布信息成功, 我们正在刷新页面.');
                            window.location.reload();
                        })
                            .fail(function () {
                            Notify.warn('停止发布信息失败,请稍后再试.');
                        });
                    }
                }
                Listing_1.deactivate = deactivate;
                ;
                function goesToNewPage(id) {
                    Turbolinks.visit('/listings/new?category_id=' + id);
                }
                Listing_1.goesToNewPage = goesToNewPage;
                ;
                function activate(listing_id) {
                    $.ajax({
                        url: '/listings/' + listing_id + '/activate',
                        method: "POST",
                        data: { id: listing_id }
                    })
                        .done(function () {
                        Notify.success('激活发布信息成功, 我们正在刷新页面.');
                        window.location.reload();
                    })
                        .fail(function () {
                        Notify.warn('激活发布信息失败,请稍后再试.');
                    });
                }
                Listing_1.activate = activate;
                ;
                function expire(listing_id) {
                    $.ajax({
                        url: '/listings/' + listing_id + '/expire',
                        method: "POST",
                        data: { id: listing_id }
                    })
                        .done(function () {
                        Notify.success('设置发布信息过期成功, 我们正在刷新页面.');
                        window.location.reload();
                    })
                        .fail(function () {
                        Notify.warn('设置发布信息过期失败,请稍后再试.');
                    });
                }
                Listing_1.expire = expire;
                ;
                function deexpire(listing_id) {
                    $.ajax({
                        url: '/listings/' + listing_id + '/deexpire',
                        method: "POST",
                        data: { id: listing_id }
                    })
                        .done(function () {
                        Notify.success('设置发布信息未过期成功, 我们正在刷新页面.');
                        window.location.reload();
                    })
                        .fail(function () {
                        Notify.warn('设置发布信息未过期失败,请稍后再试.');
                    });
                }
                Listing_1.deexpire = deexpire;
                ;
                angular.module('GuruIn.App')
                    .factory('ListingResource', ['$resource', ListingResource])
                    .controller('ListingCreateController', ['$scope', '$window', 'ListingResource', ListingCreateController]);
            })(Listing = Controllers.Listing || (Controllers.Listing = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Merchant;
            (function (Merchant) {
                var Notify = Renative.Notify;
                function MerchantController($scope, $http, $compile) {
                    $scope.vote = function (merchant_cai_relation_id, merchant_id, cai_id) {
                        var can_vote = true;
                        var cid_array = [];
                        if (localStorage) {
                            var cids = localStorage.getItem('cids');
                            cid_array = JSON.parse(cids);
                            if (cid_array && cid_array.length > 0 && cid_array.indexOf(merchant_cai_relation_id) > -1) {
                                can_vote = false;
                            }
                        }
                        if (!cid_array) {
                            cid_array = [];
                        }
                        if (can_vote) {
                            //send vote request
                            $http.post($scope.url, { cai_id: cai_id, merchant_cai_relation_id: merchant_cai_relation_id })
                                .then(function (result) {
                                Notify.success('投票成功！');
                                var rating = parseInt($scope.customer_rating) + 1;
                                $scope.customer_rating = rating + '';
                                cid_array.push(merchant_cai_relation_id);
                                if (localStorage) {
                                    localStorage.setItem('cids', JSON.stringify(cid_array));
                                }
                                $('#customer_rating_' + merchant_cai_relation_id).text('赞 (' + $scope.customer_rating + ')');
                            }, function () {
                                Notify.error('提交失败，请重试或联系我们。');
                            });
                        }
                        else {
                            Notify.error('您已经投票了.');
                        }
                    };
                }
                Merchant.MerchantController = MerchantController;
                ;
                function MerchantCreateController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.removePhoto = function (id) {
                        var selected_index = [];
                        for (var i = 0; i < $scope.model.photos.length; i += 1) {
                            if ($scope.model.photos[i].id == id) {
                                selected_index.push(i);
                            }
                        }
                        for (var j = 0; j < selected_index.length; j += 1) {
                            $scope.model.photos.splice(selected_index[j], 1);
                        }
                        if ($scope.model.photo_id == id) {
                            $scope.model.photo_id = 0;
                        }
                        setTimeout(function () { $('#photo-' + id).hide(); }, 1);
                    };
                    $scope.selectPhoto = function (id) {
                        $scope.model.photo_id = id;
                    };
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (/::Merchant/i.test(result.photoable_type)) {
                                if (result.context == 'photo') {
                                    $scope.model.photos.push({ id: result.id, url: result.url, merchant_id: 0 });
                                    if ($scope.model.photo_id == 0) {
                                        $scope.model.photo_id = result.id;
                                    }
                                }
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                    $scope.reset = function () {
                        $scope.model.name = '';
                        $scope.model.display_name = '';
                        $scope.model.address = '';
                        $scope.model.description = '';
                        $scope.model.email = '';
                        $scope.model.phone_number1 = '';
                        $scope.model.phone_number2 = '';
                        $scope.model.contact_person = '';
                        $scope.model.website = '';
                        $scope.model.open_hour_monday = '';
                        $scope.model.open_hour_tuesday = '';
                        $scope.model.open_hour_wednesday = '';
                        $scope.model.open_hour_thursday = '';
                        $scope.model.open_hour_friday = '';
                        $scope.model.open_hour_saturday = '';
                        $scope.model.open_hour_sunday = '';
                        $scope.model.photo_id = 0;
                        for (var i = 0; i < $scope.model.photos.length; i += 1) {
                            $('#photo-' + $scope.model.photos[i].id).hide();
                        }
                        $scope.model.photos = [];
                        if (typeof $scope.queue != 'undefined') {
                            $scope.queue = null;
                        }
                    };
                    $scope.checkError = function () {
                        var errors = [];
                        if ($.trim($scope.model.name).length == 0) {
                            errors.push('请填写英文名');
                        }
                        if ($.trim($scope.model.address).length == 0) {
                            errors.push('请填写详细地址');
                        }
                        if ($.trim($scope.model.description).length == 0) {
                            errors.push('请填写详细描述');
                        }
                        if ($.trim($scope.model.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.model.email)) {
                                errors.push('请填写正确的邮箱, 好方便用户咨询.');
                            }
                        }
                        if ($.trim($scope.model.phone_number1).length == 0 && $.trim($scope.model.phone_number2).length == 0) {
                            errors.push('请填写至少一个电话号码');
                        }
                        if ($.trim($scope.model.contact_person).length == 0) {
                            errors.push('请填写联系人');
                        }
                        if ($scope.model.photos.length == 0) {
                            errors.push('请上传商家图片');
                        }
                        return errors;
                    };
                    $scope.do_save = function (e) {
                        var errors = $scope.checkError();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $('#save-button').text('提交中...');
                        $http.post('/merchants', { merchant: $scope.model })
                            .then(function (result) {
                            $scope.loading = false;
                            Notify.success('创建申请已发送，管理员批准后，您会收到邮件提示，谢谢.');
                            $scope.reset();
                            $('#save-button').text('提交');
                        }, function () {
                            Notify.error('提交失败，请重试或联系我们.');
                            $scope.loading = false;
                            $('#save-button').text('提交');
                        });
                    };
                }
                Merchant.MerchantCreateController = MerchantCreateController;
                ;
                angular.module('GuruIn.App')
                    .controller('MerchantController', ['$scope', '$http', '$compile', MerchantController])
                    .controller('MerchantCreateController', ['$scope', '$http', '$compile', MerchantCreateController]);
            })(Merchant = Controllers.Merchant || (Controllers.Merchant = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Order;
            (function (Order) {
                var ActivityOrder;
                (function (ActivityOrder) {
                    // import Notify = Renative.Notify;
                    var DOM = Renative.DOM;
                    var Device = Renative.Device;
                    function Controller($scope, $timeout) {
                        var self = $scope;
                        self.reloadPage = function () {
                            window.location.reload();
                        };
                        self.makeWechatPaymentOnDesktop = function (e) {
                            if (Device.desktop()) {
                                DOM.stopPropagation(e);
                                var requestUrl = '/orders/pay_with_stripe_source';
                                $.ajax({
                                    type: 'POST',
                                    url: requestUrl,
                                    data: {
                                        id: self.model.id,
                                        source_type: 'wechat',
                                    },
                                    success: function (result) {
                                        $('#wechat-pay-qrcode').empty().qrcode({ text: result.qrcode_url });
                                        $('#modal-wechat-pay').modal('show');
                                    },
                                    dataType: 'json'
                                });
                            }
                            else if (Device.ios()) {
                            }
                        };
                        self.countdown = function () {
                            var now = (new Date()).getTime();
                            var end = now + self.model.time_left * 1000;
                            $('#activity-order-countdown').countdown(new Date(end), function (event) {
                                $(this).html(event.strftime('%M:%S'));
                                // $timeout(function(){
                                // });
                                self.safeApply(function () {
                                    self.model.time_left = event.offset.minutes * 60 + event.offset.seconds;
                                    console.log(self.model.time_left);
                                    if (self.model.time_left <= 0 && self.model.order_status == 'created') {
                                        self.model.order_status = 'voiding';
                                    }
                                });
                            });
                            return true;
                        };
                        self.queryOrderStatus = function () {
                            if (self.model.has_pending_transactions) {
                                var requestUrl = '/orders/' + self.model.id + '/get_order_status';
                                $.get(requestUrl, function (result) {
                                    var jsonResult = JSON.parse(result);
                                    self.model.unpaid_amount = jsonResult.unpaid_amount;
                                    self.model.payable = jsonResult.payable;
                                    self.model.has_unconfirmed_transactions = jsonResult.has_unconfirmed_transactions;
                                    self.model.has_pending_transactions = jsonResult.has_pending_transactions;
                                    self.model.last_pending_transaction_type = jsonResult.last_pending_transaction_type;
                                    if (self.model.has_pending_transactions) {
                                        setTimeout(function () { self.queryOrderStatus(); }, 10000);
                                    }
                                    else {
                                        Turbolinks.visit('/orders/' + self.model.id);
                                    }
                                    ;
                                });
                            }
                            ;
                        };
                        if ($('.order-message').data('success-message') != '') {
                            //$(document).trigger('display:notify:message', [$('.order-message').data('success-message'), 'success']);
                            Renative.Notify.success($('.order-message').data('success-message'));
                        }
                        if ($('.order-message').data('error-message') != '') {
                            //$(document).trigger('display:notify:message', [$('.order-message').data('error-message'), 'error']);
                            Renative.Notify.error($('.order-message').data('error-message'));
                        }
                    }
                    ActivityOrder.Controller = Controller;
                    // module initialize
                    angular
                        .module('GuruIn.App')
                        .controller('GuruIn.App.Controllers.Order.ActivityOrder', ['$scope', '$timeout', Controller]);
                })(ActivityOrder = Order.ActivityOrder || (Order.ActivityOrder = {}));
            })(Order = Controllers.Order || (Controllers.Order = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Product;
            (function (Product_1) {
                var R = GuruIn.App.Resources;
                var Notify = Renative.Notify;
                var DOM = Renative.DOM;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                function ProductResource($resource) {
                    return R.railsResource($resource, '/products/:id.json');
                }
                Product_1.ProductResource = ProductResource;
                ;
                function ProductController($scope, $http, $compile) {
                    $(document).on('guruin:product:purchase', function (e, id) {
                        $scope.checkout(id);
                    });
                    $scope.checkout = function (id) {
                        var quantity = $('#product-quantity').val();
                        var time = $('#participate-datetime').val();
                        var url = '/products/' + id + '/checkout?quantity=' + quantity;
                        if (time) {
                            url = url + '&datetime=' + encodeURIComponent(time);
                        }
                        Turbolinks.visit(url);
                    };
                    $scope.selectProduct = function (product_group_id, product_id) {
                        var url = '/products/groups/' + product_group_id + '?product=' + product_id;
                        Turbolinks.visit(url, { action: 'replace' });
                    };
                    $scope.allowCheckbox = function () {
                        return true;
                    };
                    $scope.showOptions = function () {
                        var hasOptions = $scope.model.options_config != null && $scope.model.options_config.length > 0;
                        var hasQuantity = $scope.model.quantity > 0;
                        return hasOptions && hasQuantity;
                    };
                    $scope.calculateTotalAmount = function () {
                        var total = $scope.model.quantity * $scope.model.price;
                        return total.toFixed(2);
                    };
                    $scope.doCheckout = function (e) {
                        $scope.checkout_form.$submitted = true;
                        DOM.stopPropagation(e);
                        var total_amount = $scope.calculateTotalAmount();
                        if (total_amount <= 0) {
                            Notify.error('请至少选择一个产品.');
                            return;
                        }
                        var errors = [];
                        if ($scope.model.quantity > $scope.model.max_quantity) {
                            errors.push('库存数量不足, 请修改订购数量后重试.');
                        }
                        if ($scope.model.datetime_mark && ($scope.model.participate_datetime == null || $scope.model.participate_datetime == '')) {
                            errors.push('请填写时间.');
                        }
                        if ($scope.checkout_form.email && $scope.checkout_form.email.$error.required) {
                            errors.push('请输入你的邮箱.');
                        }
                        if ($scope.checkout_form.email && $scope.checkout_form.email.$error.email) {
                            errors.push('你输入的邮箱格式不正确.');
                        }
                        var options_completed = true;
                        _.each($scope.model.options_config, function (field) {
                            if (field['required'] && (field['value'] == null || field['value'] == '')) {
                                options_completed = false;
                            }
                        });
                        if (!options_completed) {
                            errors.push('请填写订单必要信息.');
                        }
                        if ($scope.model.has_refund_policy && $scope.model.agree_to_refund_policy != 'yes') {
                            errors.push('请同意退货条款.');
                        }
                        if ($scope.model.has_tos_policy && $scope.model.agree_to_tos_policy != 'yes') {
                            errors.push('请同意购买条款.');
                        }
                        if (errors.length > 0) {
                            Notify.error(errors.join('<br>'));
                            return;
                        }
                        var data = { id: $scope.model.id, checkout: $scope.model };
                        $(e.target).attr('disabled', 'disabled');
                        $http.post($scope.url, data)
                            .then(function (result) {
                            Turbolinks.visit('/orders/' + result.data.order_id + '?step=true');
                        }, function (result) {
                            $(e.target).removeAttr('disabled');
                            $scope.model = result.data.checkout;
                            Notify.error(result.data.message);
                        });
                    };
                }
                Product_1.ProductController = ProductController;
                ;
                function ProductCreateController($scope, $window, Product) {
                    $scope.createIndexArray = function (arrayLength) {
                        arrayLength = Math.ceil(arrayLength);
                        var arr = new Array(arrayLength), i = 0;
                        for (; i < arrayLength; i++) {
                            arr[i] = i;
                        }
                        return arr;
                    };
                    $scope.tos_policy_selected = function () {
                        if ($scope.model.tos_policy_id == "-1") {
                            $scope.model.new_tos_policy = true;
                        }
                        else {
                            $scope.model.new_tos_policy = false;
                        }
                    };
                    $scope.refund_policy_selected = function () {
                        if ($scope.model.refund_policy_id == "-1") {
                            $scope.model.new_refund_policy = true;
                        }
                        else {
                            $scope.model.new_refund_policy = false;
                        }
                    };
                    $scope.selectPhoto = function (id) {
                        $scope.model.photo_id = id;
                    };
                    $scope.removePhoto = function (id) {
                        var selected_index = [];
                        for (var i = 0; i < $scope.model.photos.length; i += 1) {
                            if ($scope.model.photos[i].id == id) {
                                selected_index.push(i);
                            }
                        }
                        for (var j = 0; j < selected_index.length; j += 1) {
                            $scope.model.photos.splice(selected_index[j], 1);
                        }
                        if ($scope.model.photo_id == id) {
                            $scope.model.photo_id = 0;
                        }
                        setTimeout(function () { $('#photo-' + id).hide(); }, 1);
                    };
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传图片的过程中发生错误, 有可能是因为图片尺寸太大, 请尝试上传尺寸小一点的图片或者联系我们.');
                    });
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (/::Product/i.test(result.photoable_type)) {
                                if (result.context == 'photo') {
                                    $scope.model.photos.push({ id: result.id, url: result.url, is_new: true, product_id: 0 });
                                    if ($scope.model.photo_id == 0) {
                                        $scope.model.photo_id = result.id;
                                    }
                                }
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传图片的过程中发生错误, 有可能是因为图片尺寸太大, 请尝试上传尺寸小一点的图片或者联系我们.');
                        }
                    });
                    $scope.checkError = function () {
                        var errors = [];
                        if ($.trim($scope.model.name).length == 0) {
                            errors.push('请填写标题.');
                        }
                        if ($.trim($scope.model.address).length == 0) {
                            errors.push('请填写地址.');
                        }
                        if ($.trim($scope.model.price).length == 0) {
                            errors.push('请填写价格.');
                        }
                        if ($.trim($scope.model.price).length > 0) {
                            var priceFloat = parseFloat($scope.model.price);
                            if (isNaN(priceFloat) || priceFloat < 0) {
                                errors.push('请填写正确的价格.');
                            }
                        }
                        if ($.trim($scope.model.starts_at).length > 0 && $.trim($scope.model.expires_at).length > 0) {
                            var starts = new Date($scope.model.starts_at);
                            ;
                            var expires = new Date($scope.model.expires_at);
                            if (starts > expires) {
                                errors.push('开始时间不能比结束时间晚.');
                            }
                        }
                        if ($scope.model.purchase_type === "3") {
                            if ($.trim($scope.model.summary).length == 0) {
                                errors.push('请填写概要描述.');
                            }
                            if ($.trim($scope.model.destination_url).length == 0) {
                                errors.push('请填写目的URL.');
                            }
                            if ($.trim($scope.model.merchant_id).length == 0) {
                                errors.push('请填写商家ID.');
                            }
                            else {
                                var merchantIdInt = parseInt($scope.model.merchant_id);
                                if (isNaN(merchantIdInt) || merchantIdInt <= 0) {
                                    errors.push('请填写正确的商家ID.');
                                }
                            }
                            return errors;
                        }
                        if ($.trim($scope.model.description).length == 0) {
                            errors.push('请填写详细描述.');
                        }
                        if ($.trim($scope.model.remain).length == 0) {
                            errors.push('请填写总库存.');
                        }
                        if ($.trim($scope.model.remain).length > 0) {
                            var remainInt = parseInt($scope.model.remain);
                            if (isNaN(remainInt) || remainInt < 0) {
                                errors.push('请填写正确的库存.');
                            }
                        }
                        for (var i = 0, len = $scope.model.properties.length; i < len; ++i) {
                            var category_property_relation = $scope.model.properties[i];
                            var has_error = false;
                            if (category_property_relation.show_type != 'range' && category_property_relation.form_required && $.trim(category_property_relation.property_value).length == 0) {
                                errors.push('请填写' + category_property_relation.property_name + '.');
                            }
                            if (category_property_relation.show_type != 'range' && category_property_relation.numeric && $.trim(category_property_relation.property_value).length > 0) {
                                if (!($.isNumeric(category_property_relation.property_value))) {
                                    errors.push('请正确填写' + category_property_relation.property_name + '.');
                                }
                            }
                            if (category_property_relation.show_type == 'range' && category_property_relation.form_required &&
                                ($.trim(category_property_relation.property_range_value1).length == 0 || $.trim(category_property_relation.property_range_value2).length == 0)) {
                                errors.push('请填写' + category_property_relation.property_name + '.');
                                has_error = true;
                            }
                            if (category_property_relation.show_type == 'range' && category_property_relation.numeric && $.trim(category_property_relation.property_range_value1).length > 0) {
                                if (!($.isNumeric(category_property_relation.property_range_value1))) {
                                    errors.push('请正确填写' + category_property_relation.property_name + '.');
                                    has_error = true;
                                }
                            }
                            if (category_property_relation.show_type == 'range' && category_property_relation.numeric && $.trim(category_property_relation.property_range_value2).length > 0) {
                                if (!($.isNumeric(category_property_relation.property_range_value2))) {
                                    errors.push('请正确填写' + category_property_relation.property_name + '.');
                                    has_error = true;
                                }
                            }
                            if (category_property_relation.show_type == 'range' && !has_error) {
                                category_property_relation.property_value = '';
                                var has_first_value = false;
                                if ($.trim(category_property_relation.property_range_value1).length > 0) {
                                    category_property_relation.property_value = category_property_relation.property_range_value1;
                                    has_first_value = true;
                                }
                                if ($.trim(category_property_relation.property_range_value2).length > 0) {
                                    if (has_first_value) {
                                        category_property_relation.property_value += ' 至 ';
                                    }
                                    category_property_relation.property_value += category_property_relation.property_range_value2;
                                }
                            }
                        }
                        return errors;
                    };
                    $scope.do_save = function (e) {
                        var errors = $scope.checkError();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        $('#save-button').text('提交中...');
                        if ($scope.model.id > 0) {
                            Product.update({ id: $scope.model.id, product: $scope.model }, function () {
                                Turbolinks.visit('/products/' + $scope.model.id, { action: 'replace' });
                            }, function () {
                                Notify.warn('保存产品发生错误, 请稍后重试或者联系我们.');
                                $('#save-button').text('提交发布');
                            });
                        }
                        else {
                            Product.save({ product: $scope.model }, function (a) {
                                Notify.success('创建产品成功.');
                                Turbolinks.visit('/products/' + a.id, { action: 'replace' });
                            }, function () {
                                Notify.warn('保存产品发生错误, 请稍后重试或者联系我们.');
                                $('#save-button').text('提交发布');
                            });
                        }
                    };
                }
                Product_1.ProductCreateController = ProductCreateController;
                ;
                angular.module('GuruIn.App')
                    .factory('ProductResource', ['$resource', ProductResource])
                    .controller('ProductController', ['$scope', '$http', '$compile', ProductController])
                    .controller('ProductCreateController', ['$scope', '$window', 'ProductResource', ProductCreateController]);
            })(Product = Controllers.Product || (Controllers.Product = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Product;
            (function (Product) {
                var Notify = Renative.Notify;
                function InquiryOrderController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.has_error = false;
                    $scope.error_msg = '';
                    $scope.url = '';
                    $scope.phone_number = '';
                    $scope.email = '';
                    $scope.wechat = '';
                    $scope.memo = '';
                    $scope.inquiry_orderable_id = '';
                    $scope.inquiry_orderable_type = '';
                    $scope.submit = function ($event) {
                        if ($.trim($scope.phone_number).length == 0 &&
                            $.trim($scope.email).length == 0 &&
                            $.trim($scope.wechat).length == 0) {
                            Notify.warn('请输入联系方式');
                            return;
                        }
                        if ($.trim($scope.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                                Notify.warn('请填写正确的邮箱.');
                                return;
                            }
                        }
                        $scope.loading = true;
                        $http.post($scope.url, { inquiry_order: { memo: $scope.memo.replace(/\n/g, '<br>'),
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                wechat: $scope.wechat,
                                inquiry_orderable_id: $scope.inquiry_orderable_id,
                                inquiry_orderable_type: $scope.inquiry_orderable_type } })
                            .then(function (result) {
                            $scope.loading = false;
                            $scope.has_error = false;
                            $scope.error_msg = '';
                            Notify.success('提交成功！', 10);
                            $("[id^=modal-inquiry-order]").modal('hide'); // hack for attractions, will work even if #modal-rate-view is not present.
                        }, function () {
                            $scope.has_error = true;
                            $scope.error_msg = '提交失败，请重试或联系我们。';
                            $scope.loading = false;
                        });
                    };
                }
                Product.InquiryOrderController = InquiryOrderController;
                ;
                function ContactUsController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.has_error = false;
                    $scope.error_msg = '';
                    $scope.button_text = '提交';
                    $scope.url = '';
                    $scope.name = '';
                    $scope.phone_number = '';
                    $scope.email = '';
                    $scope.type = '意见反馈';
                    $scope.memo = '';
                    $scope.wechat = '';
                    $scope.checkError = function () {
                        var errors = [];
                        if ($.trim($scope.name).length == 0) {
                            errors.push('请输入姓名.');
                        }
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入您的邮箱, 我们会稍后回复您.');
                        }
                        if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                            errors.push('请输入正确的邮箱, 我们会稍后回复您.');
                        }
                        if ($.trim($scope.memo).length == 0) {
                            errors.push('请告诉我们您的想法, 我们会稍后回复您.');
                        }
                        return errors;
                    };
                    $scope.sendDataSuccessfully = function () {
                        $scope.button_text = '提交';
                        $scope.has_error = false;
                        $scope.error_msg = '';
                        $scope.name = '';
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.type = '意见反馈';
                        $scope.memo = '';
                        $scope.wechat = '';
                        if ($scope.contact_type == 2) {
                            $('#modal-contact-us').modal('hide');
                            $('body').removeClass('modal-open');
                        }
                        Notify.success('提交成功！');
                    };
                    $scope.submit = function ($event) {
                        var errors = $scope.checkError();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        $scope.button_text = "提交中...";
                        $http.post($scope.url, { contact_us: { memo: $scope.memo.replace(/\n/g, '<br>'),
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                name: $scope.name,
                                type: $scope.type,
                                wechat: $scope.wechat,
                                contact_type: $scope.contact_type,
                                url: window.location.href
                            } })
                            .then(function (result) {
                            $scope.sendDataSuccessfully();
                        }, function () {
                            $scope.has_error = true;
                            $scope.error_msg = '提交失败，请重试或联系我们。';
                            $scope.button_text = '提交';
                        });
                    };
                }
                Product.ContactUsController = ContactUsController;
                ;
                function IvfContactController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.has_error = false;
                    $scope.error_msg = '';
                    $scope.button_text = '提交';
                    $scope.url = '';
                    $scope.name = '';
                    $scope.email = '';
                    $scope.memo = '';
                    $scope.arrive = '';
                    $scope.checkError = function () {
                        var errors = [];
                        if ($.trim($scope.name).length == 0) {
                            errors.push('请输入姓名.');
                        }
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入您的邮箱, 我们会稍后回复您.');
                        }
                        if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                            errors.push('请输入正确的邮箱, 我们会稍后回复您.');
                        }
                        if ($.trim($scope.arrive).length == 0) {
                            errors.push('请输入您计划赴美时间.');
                        }
                        return errors;
                    };
                    $scope.sendDataSuccessfully = function () {
                        $scope.button_text = '提交';
                        $scope.has_error = false;
                        $scope.error_msg = '';
                        $scope.name = '';
                        $scope.email = '';
                        $scope.memo = '';
                        $scope.arrive = '';
                        Notify.success('提交成功！');
                    };
                    $scope.submit = function ($event) {
                        var errors = $scope.checkError();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        $scope.button_text = "提交中...";
                        $http.post($scope.url, { ivf: { memo: $scope.memo.replace(/\n/g, '<br>'),
                                email: $scope.email,
                                name: $scope.name,
                                arrive: $scope.arrive
                            } })
                            .then(function (result) {
                            $scope.sendDataSuccessfully();
                        }, function () {
                            $scope.has_error = true;
                            $scope.error_msg = '提交失败，请重试或联系我们。';
                            $scope.button_text = '提交';
                        });
                    };
                }
                Product.IvfContactController = IvfContactController;
                ;
                function BusinessClassController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.pageType = 0;
                    $scope.travelType = 0;
                    $scope.departure = '';
                    $scope.arrival = '';
                    $scope.departureDate = '';
                    $scope.arrivalDate = '';
                    $scope.oneDays = false;
                    $scope.threeDays = false;
                    $scope.numberOfPerson = 0;
                    $scope.numberOfChildren = 0;
                    $scope.numberOfBaby = 0;
                    if ($scope.pageType == 0) {
                        $scope.flightType = '商务舱';
                    }
                    else {
                        $scope.flightType = '经济舱';
                    }
                    $scope.flightNumber = '';
                    $scope.nonStop = false;
                    $scope.url = '';
                    $scope.phone_number = '';
                    $scope.email = '';
                    $scope.name = '';
                    $scope.momentDateTime = function (val) {
                        return moment(val, 'MM/DD/YYYY');
                    };
                    $scope.formatCurrentDate = function () {
                        var date = new Date();
                        var year = date.getFullYear();
                        var month = (1 + date.getMonth()).toString();
                        month = month.length > 1 ? month : '0' + month;
                        var day = date.getDate().toString();
                        day = day.length > 1 ? day : '0' + day;
                        return month + '/' + day + '/' + year;
                    };
                    $scope.checkFlightError = function () {
                        var errors = [];
                        if ($.trim($scope.departure).length == 0) {
                            errors.push('请输入出发城市.');
                        }
                        if ($.trim($scope.arrival).length == 0) {
                            errors.push('请输入到达城市');
                        }
                        if ($.trim($scope.departureDate).length == 0) {
                            errors.push('请选择出发时间.');
                        }
                        var currentDate = new Date();
                        if ($scope.momentDateTime($scope.departureDate) < $scope.momentDateTime($scope.formatCurrentDate())) {
                            errors.push('请选择正确出发时间.');
                        }
                        if ($scope.travelType == 0) {
                            if ($.trim($scope.arrivalDate).length == 0) {
                                errors.push('请选择返回时间.');
                            }
                            if ($scope.momentDateTime($scope.arrivalDate) < $scope.momentDateTime($scope.departureDate)) {
                                errors.push('到达时间不能比出发时间早哦.');
                            }
                        }
                        if ($scope.numberOfPerson == 0 && $scope.numberOfChildren == 0 && $scope.numberOfBaby == 0) {
                            errors.push('请选择乘客人数.');
                        }
                        return errors;
                    };
                    $scope.submit = function ($event) {
                        var errors = $scope.checkFlightError();
                        var contactErrors = [];
                        if ($.trim($scope.name).length == 0) {
                            contactErrors.push('姓名');
                        }
                        if ($.trim($scope.phone_number).length == 0) {
                            contactErrors.push('电话号码');
                        }
                        if ($.trim($scope.email).length == 0) {
                            contactErrors.push('邮箱');
                        }
                        if ($.trim($scope.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                                contactErrors.push('请填写正确的邮箱.');
                            }
                        }
                        if (contactErrors.length > 0) {
                            errors.push('请输入' + contactErrors.join(', ') + ', 方便我们联系您.');
                        }
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, { business_class: {
                                name: $scope.name,
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                travelType: $scope.travelType,
                                departure: $scope.departure,
                                arrival: $scope.arrival,
                                departureDate: $scope.departureDate,
                                arrivalDate: $scope.arrivalDate,
                                numberOfPerson: $scope.numberOfPerson,
                                flightType: $scope.flightType,
                                flightNumber: $scope.flightNumber,
                                nonStop: $scope.nonStop,
                                threeDays: $scope.threeDays,
                                oneDays: $scope.oneDays,
                                pageType: $scope.pageType,
                                numberOfChildren: $scope.numberOfChildren,
                                numberOfBaby: $scope.numberOfBaby
                            }
                        })
                            .then(function (result) {
                            $scope.loading = false;
                            Notify.success('提交成功, 稍后会有我们两家合作伙伴联系您.', 15);
                            $scope.reset();
                            $('#submit-button').text('即时询价');
                        }, function () {
                            Notify.error('提交失败，请重试或联系我们.');
                            $scope.loading = false;
                            $('#submit-button').text('即时询价');
                        });
                    };
                    $scope.reset = function () {
                        $scope.loading = false;
                        $scope.pageType = 0;
                        $scope.travelType = 0;
                        $scope.departure = '';
                        $scope.arrival = '';
                        $scope.departureDate = '';
                        $scope.arrivalDate = '';
                        $scope.threeDays = false;
                        $scope.oneDays = false;
                        $scope.numberOfPerson = 0;
                        $scope.numberOfChildren = 0;
                        $scope.numberOfBaby = 0;
                        if ($scope.pageType == 0) {
                            $scope.flightType = '商务舱';
                        }
                        else {
                            $scope.flightType = '经济舱';
                        }
                        $scope.flightNumber = '';
                        $scope.nonStop = false;
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.name = '';
                    };
                    $scope.toggle = function (type) {
                        if ($scope.travelType == type) {
                            return;
                        }
                        $scope.travelType = type;
                        if (type == 0) {
                            $('#two-way').addClass('active');
                            $('#ony-way').removeClass('active');
                        }
                        else if (type == 1) {
                            $('#two-way').removeClass('active');
                            $('#ony-way').addClass('active');
                        }
                    };
                    $scope.remoteUrlRequestFn = function (str) {
                        return { k: str };
                    };
                    $scope.ChooseDepartureAirport = function (selected) {
                        if (selected) {
                            $scope.departure = selected.iata + ' - ' + selected.city + ' - ' + selected.country;
                            $('#departure-ul').hide();
                        }
                    };
                    $scope.showDepartureDropdown = function () {
                        if ($.trim($scope.departure).length > 0) {
                            $('#departure-ul').show();
                        }
                    };
                    $scope.ChooseArrivalAirport = function (selected) {
                        if (selected) {
                            $scope.arrival = selected.iata + ' - ' + selected.city + ' - ' + selected.country;
                            $('#arrival-ul').hide();
                        }
                    };
                    $scope.showArrivalDropdown = function () {
                        if ($.trim($scope.arrival).length > 0) {
                            $('#arrival-ul').show();
                        }
                    };
                    $scope.flightTypeChanged = function (url) {
                        if ($scope.flightType === '经济舱') {
                            $(document).trigger('guruin:native:open:external:url', [url]);
                            $(document).trigger('guruin:mobile:open:external:url', [url]);
                        }
                    };
                    $scope.openContactModal = function (id) {
                        var errors = $scope.checkFlightError();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        $('#' + id).modal('show');
                    };
                }
                Product.BusinessClassController = BusinessClassController;
                ;
                function ListingController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.attachments = [];
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传简历的过程中发生错误, 有可能是因为文件太大, 请尝试上传小一点的文件或者联系我们. 建议上传pdf或者word文件.');
                    });
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (/::Listing/i.test(result.attachmentable_type)) {
                                if (result.context == 'resume') {
                                    $scope.attachments.unshift({ id: result.id, url: result.url, is_new: true, listing_id: 0 });
                                }
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传简历的过程中发生错误, 有可能是因为文件太大, 请尝试上传小一点的文件或者联系我们. 建议上传pdf或者word文件.');
                        }
                    });
                    $scope.reset = function () {
                        $('#listing-contact-form').find(".form-control.input-lg").each(function () {
                            if ($(this).is('select')) {
                                $(this).val('##-1##');
                            }
                            else if ($(this).is(':checkbox')) {
                                $(this).prop('checked', false);
                            }
                            else {
                                $(this).val("");
                            }
                        });
                        $scope.attachments = [];
                    };
                    $scope.check = function () {
                        var errors = [];
                        $('#listing-contact-form').find(".form-control.input-lg").each(function () {
                            if ($(this).data('force')) {
                                var value = $(this).val();
                                if ($.trim(value).length <= 0) {
                                    errors.push('请输入' + $(this).data('label'));
                                }
                                if ($(this).is('select') && value == '##-1##') {
                                    errors.push('请选择' + $(this).data('label'));
                                }
                            }
                        });
                        if ($scope.need_attachments == 'true' && $scope.attachments.length <= 0) {
                            errors.push('请上传一份简历');
                        }
                        return errors;
                    };
                    $scope.submit = function ($event) {
                        var errors = $scope.check();
                        if (errors && errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        var data = [];
                        $('#listing-contact-form').find(".form-control.input-lg").each(function () {
                            var name = $(this).data('label');
                            var value = $(this).val();
                            if ($(this).is(':checkbox')) {
                                value = (value == 'on' ? '是' : '否');
                            }
                            if ($(this).is('select') && value == '##-1##') {
                                value = '';
                            }
                            data.push({ name: name, value: value });
                        });
                        var buttonText = $('#submit-button').text();
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, { contact_info: {
                                fields: data,
                                id: $scope.model_id,
                                attachments: $scope.attachments
                            } })
                            .then(function (result) {
                            $scope.loading = false;
                            Notify.success('提交成功，请耐心等待，商家会与您联系.');
                            $scope.reset();
                            $('#submit-button').text(buttonText);
                            $("[id^=listing-contact-modal]").modal('hide');
                        }, function () {
                            Notify.error('提交失败，请重试或联系我们.');
                            $scope.loading = false;
                            $('#submit-button').text(buttonText);
                        });
                    };
                }
                Product.ListingController = ListingController;
                ;
                function RentCarController($scope, $http, $compile) {
                    $scope.pickupLocation = -1;
                    $scope.returnLocation = -1;
                    $scope.differentLocation = false;
                    $scope.pickupDatetime = '';
                    $scope.returnDatetime = '';
                    $scope.carTypes = [];
                    $scope.chooseCarType = function (id) {
                        if (id == -1) {
                            $scope.carTypes = [];
                            return;
                        }
                        if (id <= 0) {
                            return;
                        }
                        var index = $scope.carTypes.indexOf(id);
                        if (index > -1) {
                            $scope.carTypes.splice(index, 1);
                        }
                        else {
                            $scope.carTypes.push(id);
                        }
                    };
                    $scope.momentDateTime = function (val) {
                        return moment(val, 'MM/DD/YYYY HH:mm');
                    };
                    $scope.formatCurrentDate = function () {
                        var date = new Date();
                        var year = date.getFullYear();
                        var month = (1 + date.getMonth()).toString();
                        month = month.length > 1 ? month : '0' + month;
                        var day = date.getDate().toString();
                        day = day.length > 1 ? day : '0' + day;
                        var hour = date.getHours().toString();
                        hour = hour.length > 1 ? hour : '0' + hour;
                        var minute = date.getMinutes().toString();
                        minute = minute.length > 1 ? minute : '0' + minute;
                        return month + '/' + day + '/' + year + ' ' + hour + ':' + minute;
                    };
                    $scope.check = function () {
                        var errors = [];
                        if ($scope.pickupLocation == -1) {
                            errors.push('请选择取车地点.');
                        }
                        if ($scope.differentLocation && $scope.returnLocation == -1) {
                            errors.push('你选择了异地还车, 请选择还车地点.');
                        }
                        if ($.trim($scope.pickupDatetime).length == 0) {
                            errors.push('请选择取车时间.');
                        }
                        if ($.trim($scope.returnDatetime).length == 0) {
                            errors.push('请选择还车时间.');
                        }
                        var currentDate = new Date();
                        if ($scope.momentDateTime($scope.pickupDatetime) < $scope.momentDateTime($scope.formatCurrentDate())) {
                            errors.push('请选择正确取车时间.');
                        }
                        if ($scope.momentDateTime($scope.returnDatetime) < $scope.momentDateTime($scope.pickupDatetime)) {
                            errors.push('还车时间不能比取车时间早哦.');
                        }
                        return errors;
                    };
                    $scope.submit = function ($event) {
                        var errors = $scope.check();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        var lpid = parseInt($scope.location_property_id) + parseInt($scope.seed);
                        var cpid = parseInt($scope.car_type_property_id) + parseInt($scope.seed);
                        var url = $scope.url + '-t' + lpid + '_' + $scope.pickupLocation;
                        if ($scope.carTypes.length > 0) {
                            url = url + '-t' + cpid + '_' + $scope.carTypes.join('_');
                        }
                        url = url + '?return=' + $scope.returnLocation + '&pickupDatetime=' + encodeURIComponent($scope.pickupDatetime) + '&returnDatetime=' + encodeURIComponent($scope.returnDatetime);
                        if ($scope.kxrental_type == 1) {
                            url = url + '&kxrental=1';
                        }
                        Turbolinks.visit(url);
                    };
                }
                Product.RentCarController = RentCarController;
                ;
                function BuyCarController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.region = '洛杉矶';
                    $scope.language = '中英皆可';
                    $scope.phone_number = '';
                    $scope.email = '';
                    $scope.name = '';
                    $scope.wechat = '';
                    $scope.memo = '';
                    $scope.brand = '';
                    $scope.model = '';
                    $scope.year = '';
                    $scope.color = '';
                    $scope.payment = '全款';
                    $scope.buydate = '一周内';
                    $scope.credit = '';
                    $scope.lease = '以前lease过';
                    $scope.contact_time = '';
                    $scope.chooseBrand = function (b) {
                        $scope.brand = b.value;
                    };
                    $scope.chooseModel = function (m) {
                        $scope.model = m.value;
                    };
                    $scope.toggle = function (type, value, cls, parentClass) {
                        if ($("a" + cls).hasClass('btn-active')) {
                            return;
                        }
                        $(parentClass).find('a').removeClass('btn-active');
                        $(parentClass).find('a').each(function () {
                            if (!$(this).hasClass('btn-default')) {
                                $(this).addClass('btn-default');
                            }
                        });
                        $("a" + cls).addClass('btn-active');
                        $("a" + cls).removeClass('btn-default');
                        if (type == 0) {
                            $scope.payment = value;
                        }
                        else if (type == 1) {
                            $scope.buydate = value;
                        }
                    };
                    $scope.remoteUrlRequestFn = function (str) {
                        return { k: str };
                    };
                    $scope.check = function () {
                        var errors = [];
                        if ($.trim($scope.brand).length == 0) {
                            errors.push('请输入汽车品牌.');
                        }
                        if ($.trim($scope.model).length == 0) {
                            errors.push('请输入汽车型号.');
                        }
                        if ($.trim($scope.name).length == 0) {
                            errors.push('请输入姓名.');
                        }
                        if ($.trim($scope.phone_number).length == 0) {
                            errors.push('请输入电话号码.');
                        }
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入邮箱.');
                        }
                        if ($.trim($scope.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                                errors.push('请填写正确的邮箱.');
                            }
                        }
                        if ($scope.payment === 'Lease') {
                            if ($.trim($scope.credit).length == 0) {
                                errors.push('请选择信用分数.');
                            }
                            if ($scope.credit === '无信用') {
                                errors.push('对不起，没有信用无法 Lease 车，建议您选择全款的方式。');
                            }
                        }
                        return errors;
                    };
                    $scope.reset = function () {
                        $scope.region = '洛杉矶';
                        $scope.language = '中英皆可';
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.name = '';
                        $scope.memo = '';
                        $scope.wechat = '';
                        $scope.brand = '';
                        $scope.model = '';
                        $scope.year = '';
                        $scope.color = '';
                        $scope.payment = '全款';
                        $scope.buydate = '一周内';
                        $scope.credit = '';
                        $scope.lease = '以前lease过';
                        $scope.contact_time = '';
                        $scope.toggle(0, "全款", ".payment-full", ".payment-options");
                        $scope.toggle(1, "一周内", ".buydate-oneweek", ".buydate-options");
                    };
                    $scope.do_save = function (e) {
                        var errors = $scope.check();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, { buy_car: {
                                name: $scope.name,
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                memo: $scope.memo,
                                brand: $scope.brand,
                                model: $scope.model,
                                year: $scope.year,
                                color: $scope.color,
                                payment: $scope.payment,
                                buydate: $scope.buydate,
                                wechat: $scope.wechat,
                                credit: $scope.credit,
                                lease: $scope.lease,
                                contact_time: $scope.contact_time,
                                region: $scope.region,
                                language: $scope.language
                            }
                        })
                            .then(function (result) {
                            $scope.loading = false;
                            Notify.success('提交成功, 稍后我们会联系您.');
                            $scope.reset();
                            $('#submit-button').text('提交需求');
                        }, function () {
                            Notify.error('提交失败，请重试或联系我们.');
                            $scope.loading = false;
                            $('#submit-button').text('提交需求');
                        });
                    };
                }
                Product.BuyCarController = BuyCarController;
                ;
                function SellCarController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.phone_number = '';
                    $scope.email = '';
                    $scope.name = '';
                    $scope.wechat = '';
                    $scope.vin = '';
                    $scope.body_color = '';
                    $scope.trim_color = '';
                    $scope.price = '';
                    $scope.address = '';
                    $scope.check = function () {
                        var errors = [];
                        if ($.trim($scope.area).length == 0) {
                            errors.push('请选择区域.');
                        }
                        if ($.trim($scope.vin).length == 0) {
                            errors.push('请输入VIN NO.');
                        }
                        if ($.trim($scope.body_color).length == 0) {
                            errors.push('请输入车身颜色.');
                        }
                        if ($.trim($scope.trim_color).length == 0) {
                            errors.push('请输入内饰颜色.');
                        }
                        if ($.trim($scope.price).length == 0) {
                            errors.push('请输入期望价值.');
                        }
                        if ($.trim($scope.name).length == 0) {
                            errors.push('请输入姓名.');
                        }
                        if ($.trim($scope.phone_number).length == 0) {
                            errors.push('请输入电话.');
                        }
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入邮箱.');
                        }
                        if ($.trim($scope.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                                errors.push('请填写正确的邮箱.');
                            }
                        }
                        return errors;
                    };
                    $scope.reset = function () {
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.name = '';
                        $scope.trim_color = '';
                        $scope.body_color = '';
                        $scope.price = '';
                        $scope.vin = '';
                        $scope.address = '';
                        $scope.wechat = '';
                    };
                    $scope.do_save = function (e) {
                        var errors = $scope.check();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, { sell_car: {
                                name: $scope.name,
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                trim_color: $scope.trim_color,
                                body_color: $scope.body_color,
                                price: $scope.price,
                                vin: $scope.vin,
                                address: $scope.address,
                                wechat: $scope.wechat,
                                area: $scope.area
                            }
                        })
                            .then(function (result) {
                            $scope.loading = false;
                            Notify.success('提交成功, 稍后我们会联系您.');
                            $scope.reset();
                            $('#submit-button').text('提交');
                        }, function () {
                            Notify.error('提交失败，请重试或联系我们.');
                            $scope.loading = false;
                            $('#submit-button').text('提交');
                        });
                    };
                }
                Product.SellCarController = SellCarController;
                ;
                function MerchantCertificationController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.phone_number = '';
                    $scope.email = '';
                    $scope.name = '';
                    $scope.memo = '';
                    $scope.check = function () {
                        var errors = [];
                        if ($.trim($scope.name).length == 0) {
                            errors.push('请输入姓名.');
                        }
                        if ($.trim($scope.phone_number).length == 0) {
                            errors.push('请输入电话.');
                        }
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入邮箱.');
                        }
                        if ($.trim($scope.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                                errors.push('请填写正确的邮箱.');
                            }
                        }
                        return errors;
                    };
                    $scope.reset = function () {
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.name = '';
                        $scope.memo = '';
                    };
                    $scope.do_save = function (e) {
                        var errors = $scope.check();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, { certification: {
                                name: $scope.name,
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                memo: $scope.memo
                            }
                        })
                            .then(function (result) {
                            $scope.loading = false;
                            $scope.reset();
                            $('#submit-button').text('提交');
                            Notify.success('提交成功, 稍后我们会联系您.');
                        }, function () {
                            $scope.loading = false;
                            $('#submit-button').text('提交');
                            Notify.error('提交失败，请重试或联系我们.');
                        });
                    };
                }
                Product.MerchantCertificationController = MerchantCertificationController;
                ;
                function MerchantContactController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.phone_number = '';
                    $scope.email = '';
                    $scope.name = '';
                    $scope.wechat = '';
                    $scope.memo = '';
                    $scope.check = function () {
                        var errors = [];
                        if ($.trim($scope.name).length == 0) {
                            errors.push('请输入姓名.');
                        }
                        if ($.trim($scope.phone_number).length == 0) {
                            errors.push('请输入电话.');
                        }
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入邮箱.');
                        }
                        if ($.trim($scope.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                                errors.push('请填写正确的邮箱.');
                            }
                        }
                        return errors;
                    };
                    $scope.reset = function () {
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.name = '';
                        $scope.memo = '';
                        $scope.wechat = '';
                    };
                    $scope.do_save = function (e) {
                        var errors = $scope.check();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, { contact: {
                                name: $scope.name,
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                memo: $scope.memo,
                                wechat: $scope.wechat
                            }
                        })
                            .then(function (result) {
                            $scope.loading = false;
                            $scope.reset();
                            $('#submit-button').text('提交');
                            Notify.success('提交成功, 稍后我们会联系您.');
                        }, function () {
                            $scope.loading = false;
                            $('#submit-button').text('提交');
                            Notify.error('提交失败，请重试或联系我们.');
                        });
                    };
                }
                Product.MerchantContactController = MerchantContactController;
                ;
                function EnrollmentController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.phone_number = '';
                    $scope.email = '';
                    $scope.name = '';
                    $scope.memo = '';
                    $scope.check = function () {
                        var errors = [];
                        if ($.trim($scope.name).length == 0) {
                            errors.push('请输入姓名.');
                        }
                        if ($.trim($scope.phone_number).length == 0) {
                            errors.push('请输入电话.');
                        }
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入邮箱.');
                        }
                        if ($.trim($scope.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                                errors.push('请填写正确的邮箱.');
                            }
                        }
                        return errors;
                    };
                    $scope.reset = function () {
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.name = '';
                        $scope.memo = '';
                    };
                    $scope.do_save = function (e) {
                        var errors = $scope.check();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, { enrollment: {
                                name: $scope.name,
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                memo: $scope.memo,
                                type: $scope.type
                            }
                        })
                            .then(function (result) {
                            $scope.loading = false;
                            $scope.reset();
                            $('#submit-button').text('提交');
                            Notify.success('提交成功, 稍后我们会联系您.');
                        }, function () {
                            $scope.loading = false;
                            $('#submit-button').text('提交');
                            Notify.error('提交失败，请重试或联系我们.');
                        });
                    };
                }
                Product.EnrollmentController = EnrollmentController;
                ;
                function LandingController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.reset = function () {
                        $scope.name = '';
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.memo = '';
                    };
                    $scope.resetH1B = function () {
                        $scope.reset();
                        $scope.jobTitle = '';
                        $scope.city = '';
                        $scope.degree = '';
                        $scope.status = '';
                        $scope.business = '';
                        $scope.website = '';
                        $scope.numberOfEmployee = '';
                    };
                    $scope.check = function () {
                        var errors = [];
                        if ($.trim($scope.name).length == 0) {
                            errors.push('请输入姓名.');
                        }
                        if ($.trim($scope.phone_number).length == 0) {
                            errors.push('请输入电话.');
                        }
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入邮箱.');
                        }
                        if ($.trim($scope.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                                errors.push('请填写正确的邮箱.');
                            }
                        }
                        return errors;
                    };
                    $scope.checkH1B = function () {
                        var errors = $scope.check();
                        if ($.trim($scope.jobTitle).length == 0) {
                            errors.push('请输入工作职位.');
                        }
                        if ($.trim($scope.city).length == 0) {
                            errors.push('请输入工作城市.');
                        }
                        if ($.trim($scope.degree).length == 0) {
                            errors.push('请输入学位和专业.');
                        }
                        if ($.trim($scope.status).length == 0) {
                            errors.push('请输入目前身份及到期日.');
                        }
                        if ($.trim($scope.business).length == 0) {
                            errors.push('请输入雇主主营业务.');
                        }
                        if ($.trim($scope.numberOfEmployee).length == 0) {
                            errors.push('请输入雇主员工总数.');
                        }
                        return errors;
                    };
                    $scope.checkErrors = function () {
                        if ($scope.type == 'h1b') {
                            return $scope.checkH1B();
                        }
                        if ($scope.type == 'tax') {
                            return $scope.check();
                        }
                        return [];
                    };
                    $scope.resetAfterSaving = function () {
                        if ($scope.type == 'h1b') {
                            $scope.resetH1B();
                        }
                        if ($scope.type == 'tax') {
                            $scope.reset();
                        }
                    };
                    $scope.postModel = function () {
                        if ($scope.type == 'h1b') {
                            return {
                                payload: {
                                    name: $scope.name,
                                    email: $scope.email,
                                    phone_number: $scope.phone_number,
                                    memo: $scope.memo,
                                    type: $scope.type,
                                    jobTitle: $scope.jobTitle,
                                    city: $scope.city,
                                    salary: $scope.salary,
                                    degree: $scope.degree,
                                    status: $scope.status,
                                    business: $scope.business,
                                    website: $scope.website,
                                    numberOfEmployee: $scope.numberOfEmployee
                                }
                            };
                        }
                        if ($scope.type == 'tax') {
                            return {
                                payload: {
                                    name: $scope.name,
                                    email: $scope.email,
                                    phone_number: $scope.phone_number,
                                    memo: $scope.memo,
                                    type: $scope.type,
                                    taxType: $scope.taxType
                                }
                            };
                        }
                        return {};
                    };
                    $scope.do_save = function (e) {
                        var errors = $scope.checkErrors();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        var tempModel = $scope.postModel();
                        if (!tempModel.payload) {
                            return;
                        }
                        $scope.loading = true;
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, tempModel)
                            .then(function (result) {
                            $scope.loading = false;
                            $scope.resetAfterSaving();
                            $('#submit-button').text('提交');
                            Notify.success('提交成功, 稍后我们会联系您.');
                        }, function () {
                            $scope.loading = false;
                            $('#submit-button').text('提交');
                            Notify.error('提交失败，请重试或联系我们.');
                        });
                    };
                }
                Product.LandingController = LandingController;
                ;
                function AirportPickupController($scope, $window, $http, $compile) {
                    $scope.reset = function () {
                        $scope.loading = false;
                        $scope.loading_price = false;
                        $scope.airport = 0;
                        $scope.flightType = 0;
                        $scope.address = '';
                        $scope.pickupDate = '';
                        $scope.flightNumber = '';
                        $scope.numberOfPerson = 0;
                        $scope.hasChildren = false;
                        $scope.numberOfChildren = 0;
                        $scope.childrenAge = '';
                        $scope.other_request = '';
                        $scope.name = '';
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.wechat = '';
                        $scope.memo = '';
                        $scope.departure = '';
                        $scope.destination = '';
                        $scope.startDate = '';
                        $scope.days = '';
                        $scope.raiseFlag = false;
                        if ($scope.type == 1) {
                            $scope.type = 0;
                        }
                        $scope.agree_to_tos_policy = false;
                    };
                    $scope.reset();
                    $scope.calc_order_amount = function () {
                        if ($scope.type == 2 || $scope.airport == 0 || $scope.numberOfPerson == 0 || $.trim($scope.address).length == 0 || $.trim($scope.pickupDate).length == 0) {
                            $('#total-money').text('$0.00');
                            $('#money-panel').hide();
                            return;
                        }
                        if ($scope.loading_price) {
                            return;
                        }
                        $scope.loading_price = true;
                        $http.post('/services/cal_airport_pickup_amount', { airport_pickup: {
                                airport: $scope.airport,
                                type: $scope.type,
                                address: $scope.address,
                                pickupDate: $scope.pickupDate,
                                numberOfPerson: $scope.numberOfPerson,
                                raiseFlag: $scope.raiseFlag
                            }
                        })
                            .then(function (result) {
                            $scope.loading_price = false;
                            if (result && result.data && result.data.amount > 0.0) {
                                $('#total-money').text('$' + result.data.amount);
                                $('#money-panel').show();
                            }
                        }, function (result) {
                            if (result && result.data && result.data.error) {
                                Notify.error(result.data.error);
                            }
                            $('#total-money').text('$0.00');
                            $('#money-panel').hide();
                            $scope.loading_price = false;
                        });
                    };
                    $scope.checkAirportError = function () {
                        var errors = [];
                        if ($scope.type == 2) {
                            if ($.trim($scope.departure).length == 0) {
                                errors.push('请选择出发地.');
                            }
                            if ($.trim($scope.destination).length == 0) {
                                errors.push('请选择目的地.');
                            }
                            if ($.trim($scope.startDate).length == 0) {
                                errors.push('请输入开始时间.');
                            }
                            else {
                                var pdt = new Date($scope.startDate);
                                var now_pdt = new Date();
                                var hours = (pdt.getTime() - now_pdt.getTime()) / (3600 * 1000.0);
                                if (hours < 48.0) {
                                    errors.push('很抱歉, 请提前48小时预约.');
                                }
                            }
                            if ($.trim($scope.days).length == 0) {
                                errors.push('请输入天数.');
                            }
                        }
                        else if ($scope.type == 0) {
                            if ($scope.airport == 0) {
                                errors.push('请选择机场.');
                            }
                            if ($.trim($scope.address).length == 0) {
                                errors.push('请输入地址.');
                            }
                            if ($.trim($scope.pickupDate).length == 0) {
                                errors.push('请输入接送时间.');
                            }
                            else {
                                var pdt = new Date($scope.pickupDate);
                                var now_pdt = new Date();
                                var hours = (pdt.getTime() - now_pdt.getTime()) / (3600 * 1000.0);
                                if (hours < 48.0) {
                                    errors.push('很抱歉, 请提前48小时预约.');
                                }
                            }
                            if ($.trim($scope.flightNumber).length == 0) {
                                errors.push('请输入航班号.');
                            }
                        }
                        if ($scope.numberOfPerson == 0) {
                            errors.push('请输入人数信息.');
                        }
                        if ($scope.hasChildren && $scope.numberOfChildren == 0) {
                            errors.push('请输入儿童人数.');
                        }
                        if ($scope.hasChildren && $.trim($scope.childrenAge).length == 0) {
                            errors.push('请输入儿童年龄.');
                        }
                        return errors;
                    };
                    $scope.openBookingModal = function (id) {
                        var errors = $scope.checkAirportError();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        $('#' + id).modal('show');
                    };
                    $scope.check = function () {
                        var errors = $scope.checkAirportError();
                        if ($.trim($scope.name).length == 0) {
                            errors.push('请输入姓名.');
                        }
                        if ($.trim($scope.phone_number).length == 0) {
                            errors.push('请输入手机号码.');
                        }
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入邮箱.');
                        }
                        if ($.trim($scope.email).length > 0) {
                            if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                                errors.push('请填写正确的邮箱.');
                            }
                        }
                        if ($scope.type == 0 && !$scope.agree_to_tos_policy) {
                            errors.push('请预订前阅读并同意条款.');
                        }
                        return errors;
                    };
                    $scope.submit = function ($event) {
                        var errors = $scope.check();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, { airport_pickup: {
                                name: $scope.name,
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                wechat: $scope.wechat,
                                memo: $scope.memo,
                                airport: $scope.airport,
                                type: $scope.type,
                                flightType: $scope.flightType,
                                address: $scope.address,
                                pickupDate: $scope.pickupDate,
                                flightNumber: $scope.flightNumber,
                                numberOfPerson: $scope.numberOfPerson,
                                hasChildren: $scope.hasChildren,
                                numberOfChildren: $scope.numberOfChildren,
                                childrenAge: $scope.childrenAge,
                                other_request: $scope.other_request,
                                departure: $scope.departure,
                                destination: $scope.destination,
                                startDate: $scope.startDate,
                                days: $scope.days,
                                raiseFlag: $scope.raiseFlag
                            }
                        })
                            .then(function (result) {
                            $scope.loading = false;
                            $('#submit-button').text($scope.type == 2 ? '立即咨询' : '立即预订');
                            if ($scope.type == 2) {
                                Notify.success('提交成功, 稍后我们会联系您. 您也可以咨询我们的客服人员来获取更加详细的信息.');
                                $scope.reset();
                            }
                            else {
                                Turbolinks.visit("/orders/" + result.data.order_id);
                            }
                        }, function (result) {
                            if (result && result.data && result.data.error) {
                                Notify.error(result.data.error);
                            }
                            else {
                                Notify.error('提交失败，请重试或联系我们.');
                            }
                            $scope.loading = false;
                            $('#submit-button').text($scope.type == 2 ? '立即咨询' : '立即预订');
                        });
                    };
                }
                Product.AirportPickupController = AirportPickupController;
                ;
                function KoalaContactUsController($scope, $http, $compile) {
                    $scope.reset = function () {
                        $scope.loading = false;
                        $scope.phone_number = '';
                        $scope.email = '';
                        $scope.wechat = '';
                    };
                    $scope.checkError = function () {
                        var errors = [];
                        if ($.trim($scope.email).length == 0) {
                            errors.push('请输入您的邮箱, 我们会稍后回复您.');
                        }
                        if (!GuruInGlobalMethod_ValidateEmail($scope.email)) {
                            errors.push('请输入正确的邮箱, 我们会稍后回复您.');
                        }
                        if ($.trim($scope.wechat).length == 0) {
                            errors.push('请输入您的微信, 我们稍后会回复您.');
                        }
                        return errors;
                    };
                    $scope.submit = function ($event) {
                        var errors = $scope.checkError();
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $('#submit-button').text('提交中...');
                        $http.post($scope.url, { contact_us: {
                                email: $scope.email,
                                phone_number: $scope.phone_number,
                                wechat: $scope.wechat
                            }
                        })
                            .then(function (result) {
                            $scope.loading = false;
                            $scope.reset();
                            $('#submit-button').text('提交');
                            Notify.success('您的申请已提交，考拉的课程顾问会在24小时内联系您。', 30);
                        }, function () {
                            $scope.loading = false;
                            $('#submit-button').text('提交');
                            Notify.error('提交失败，请重试或联系我们.', 15);
                        });
                    };
                }
                Product.KoalaContactUsController = KoalaContactUsController;
                ;
                function AddMerchantIframeController($scope, $http, $compile) {
                    $scope.reset = function () {
                        $scope.category_id = '';
                        $scope.widget_name = '';
                    };
                    $scope.create_merchant_iframe = function ($event) {
                        var errors = [];
                        if ($.trim($scope.category_id).length == 0) {
                            errors.push('请输入商家分类编号.');
                        }
                        if (isNaN($scope.category_id)) {
                            errors.push('请输入正确的商家分类编号.');
                        }
                        if (errors.length > 0) {
                            Notify.warn(errors.join('<br/>'));
                            return;
                        }
                        $('.item-article-content').trigger('select_merchant', { name: $scope.widget_name, type: 'merchants_iframe', category_id: $scope.category_id, source: '#modal-add-merchants-iframe' });
                        $('#modal-add-merchants-iframe').modal('hide');
                        $scope.reset();
                    };
                }
                Product.AddMerchantIframeController = AddMerchantIframeController;
                ;
                angular.module('GuruIn.App')
                    .controller('InquiryOrderController', ['$scope', '$http', '$compile', InquiryOrderController])
                    .controller('ContactUsController', ['$scope', '$http', '$compile', ContactUsController])
                    .controller('BusinessClassController', ['$scope', '$http', '$compile', BusinessClassController])
                    .controller('ListingController', ['$scope', '$http', '$compile', ListingController])
                    .controller('RentCarController', ['$scope', '$http', '$compile', RentCarController])
                    .controller('BuyCarController', ['$scope', '$http', '$compile', BuyCarController])
                    .controller('SellCarController', ['$scope', '$http', '$compile', SellCarController])
                    .controller('EnrollmentController', ['$scope', '$http', '$compile', EnrollmentController])
                    .controller('MerchantContactController', ['$scope', '$http', '$compile', MerchantContactController])
                    .controller('MerchantCertificationController', ['$scope', '$http', '$compile', MerchantCertificationController])
                    .controller('AirportPickupController', ['$scope', '$window', '$http', '$compile', AirportPickupController])
                    .controller('LandingController', ['$scope', '$http', '$compile', LandingController])
                    .controller('KoalaContactUsController', ['$scope', '$http', '$compile', KoalaContactUsController])
                    .controller('IvfContactController', ['$scope', '$http', '$compile', IvfContactController])
                    .controller('AddMerchantIframeController', ['$scope', '$http', '$compile', AddMerchantIframeController]);
            })(Product = Controllers.Product || (Controllers.Product = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Question;
            (function (Question) {
                var Notify = Renative.Notify;
                function QuestionController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.submit = function ($event) {
                        if ($scope.loading) {
                            return;
                        }
                        if ($.trim($scope.answer).length == 0) {
                            Notify.warn('请输入您对这个问题的答案.');
                            return;
                        }
                        $scope.loading = true;
                        $http.post($scope.url, { question_answer: { question_id: $scope.question_id, answer: $scope.answer } })
                            .then(function (result) {
                            var $new_answer = $(result.data);
                            $compile($new_answer)($scope);
                            $('#answer-list').prepend($new_answer);
                            if ($('#total_answer_count').length > 0) {
                                var original = parseInt($('#total_answer_count').text());
                                $('#total_answer_count').text(original + 1);
                            }
                            $new_answer.hide();
                            $new_answer.slideDown('slow');
                            $new_answer.find('div.alert').show();
                            if (typeof autosize == 'function' && $new_answer.find('textarea.autosize-textarea').length > 0) {
                                autosize($new_answer.find('textarea.autosize-textarea'));
                            }
                            $scope.loading = false;
                            $scope.answer = '';
                        }, function () {
                            Notify.warn('提交答案失败, 请稍后重试或者联系我们.');
                            $scope.loading = false;
                        });
                    };
                }
                Question.QuestionController = QuestionController;
                ;
                angular.module('GuruIn.App')
                    .controller('QuestionController', ['$scope', '$http', '$compile', QuestionController]);
                function QuestionAnswerCommentsController($scope, $http, $compile) {
                    $scope.answer_id = 0;
                    $scope.loading = false;
                    $scope.url = '';
                    $scope.reply_model = {
                        content: '',
                        at_user_id: 0,
                        at_user_name: ''
                    };
                    $scope.toggleAnswer = function (answer_id) {
                        var comment_list_id = '#comments-' + $scope.answer_id;
                        if ($(comment_list_id).is(":visible")) {
                            $(comment_list_id).hide();
                        }
                        else {
                            $(comment_list_id).show();
                        }
                    };
                    $scope.reply = function (at_user_id, at_user_name, comment_id) {
                        if ($('#reply-collapse-' + comment_id).is(":visible")) {
                            $scope.reply_model.at_user_id = 0;
                            $scope.reply_model.at_user_name = '';
                            $('#reply-collapse-' + comment_id).hide();
                        }
                        else {
                            $scope.reply_model.at_user_id = at_user_id;
                            $scope.reply_model.at_user_name = at_user_name;
                            $("[id^=reply-collapse-]").hide();
                            $('#reply-collapse-' + comment_id).show();
                            $('#item-reply-name-' + comment_id).focus();
                        }
                    };
                    $scope.submit = function () {
                        if ($.trim($scope.reply_model.content).length === 0 && $.trim($scope.reply_model.reply_content).length === 0) {
                            alert('请输入内容');
                            return;
                        }
                        $scope.loading = true;
                        var reply_comment = $scope.reply_model.content;
                        if ($.trim(reply_comment).length === 0) {
                            reply_comment = $scope.reply_model.reply_content;
                        }
                        $http.post($scope.url, { answer_comment: { content: reply_comment, at_user_id: $scope.reply_model.at_user_id } })
                            .then(function (result) {
                            var comment_list_id = '#comments-' + $scope.answer_id;
                            if (!($(comment_list_id).is(":visible"))) {
                                $(comment_list_id).show();
                            }
                            var $new_comment = $(result.data);
                            $compile($new_comment)($scope);
                            $('#comments-anchor-' + $scope.answer_id).before($new_comment);
                            $scope.reply_model.content = '';
                            $scope.reply_model.reply_content = '';
                            $scope.reply_model.at_user_id = 0;
                            $scope.reply_model.at_user_name = '';
                            $new_comment.hide();
                            $new_comment.slideDown('slow');
                            if (typeof autosize == 'function' && $new_comment.find('textarea.autosize-textarea').length > 0) {
                                autosize($new_comment.find('textarea.autosize-textarea'));
                            }
                            var total_comments_count = parseInt($('#total-comments-' + $scope.answer_id).text());
                            $('#total-comments-' + $scope.answer_id).html(total_comments_count + 1 + '');
                            $("[id^=reply-collapse-]").hide();
                            $scope.loading = false;
                        }, function () {
                            Notify.warn('发表失败，请重试或联系我们。');
                        });
                    };
                    $scope.deleteComment = function (e, id, answer_id) {
                        if (confirm('你确定要删除这个评论吗？')) {
                            $http['delete']('/question_answer_comments/' + id)
                                .then(function (data) {
                                Notify.success('删除评论成功.');
                                $(e.target).closest('.campaign-reply').remove();
                                var comment_list_id = '#comments-' + $scope.answer_id;
                                if ($('div.campaign-reply').length <= 0) {
                                    $(comment_list_id).hide();
                                }
                                else {
                                    $(comment_list_id).show();
                                }
                                var total_comments_count = parseInt($('#total-comments-' + $scope.answer_id).text());
                                if (total_comments_count > 0) {
                                    $('#total-comments-' + $scope.answer_id).html('' + (total_comments_count - 1));
                                }
                            }, function () {
                                Notify.warn('删除失败,请稍后再试.');
                            });
                        }
                    };
                    $scope.nextPageIndex = 2;
                    $scope.hasMore = true;
                    $scope.loadingMore = false;
                    $scope.loadMore = function () {
                        $scope.loadingMore = true;
                        $http.get($scope.answer_path + '.html+partial-empty?page=' + $scope.nextPageIndex)
                            .then(function (response) {
                            var $newData = $(response.data);
                            $compile($newData)($scope);
                            $('#comments-anchor-' + $scope.answer_id).before($newData);
                            $newData.hide();
                            $newData.slideDown('slow');
                            $scope.loadingMore = false;
                            $scope.nextPageIndex++;
                            if (response.data.length == 0) {
                                $scope.hasMore = false;
                            }
                        }, function () {
                            Notify.warning('加载更多评论时出错, 请稍后重试或者联系我们.');
                            $scope.loadingMore = false;
                        });
                    };
                }
                Question.QuestionAnswerCommentsController = QuestionAnswerCommentsController;
                angular.module('GuruIn.App')
                    .controller('QuestionAnswerCommentsController', ['$scope', '$http', '$compile', QuestionAnswerCommentsController]);
            })(Question = Controllers.Question || (Controllers.Question = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Samples;
            (function (Samples) {
                var Main;
                (function (Main) {
                    var Notify = Renative.Notify;
                    // controller definition
                    function Controller($scope, Sample) {
                        var self = $scope;
                        self.saving = false;
                        self.save = function () {
                            self.saving = true;
                            var data = { id: self.model.id, sample: self.model };
                            Sample.update(data, function () {
                                self.saving = false;
                                Notify.success('保存成功！');
                            }, function () {
                                self.saving = false;
                                Notify.error('保存失败，请重试！');
                            });
                        };
                        var doAutoSave = function () {
                            console.log('auto saving...');
                        };
                        var preventPageChange = function () {
                            console.log('page changing...');
                        };
                        var preventPageRefresh = function () {
                            console.log('page refreshing...');
                        };
                        $(window).bind('beforeunload', preventPageRefresh);
                        $('a[href]').bind('click', preventPageChange);
                        self.autoSaveHandler = setTimeout(doAutoSave, 30000);
                        self.$on('$destroy', function () {
                            console.log('#[GuruIn.App.Controllers.Samples.Main] destroy: (' + self.autoSaveHandler + ')');
                            $(window).unbind('beforeunload', preventPageRefresh);
                            $('a[href]').unbind('click', preventPageChange);
                            if (self.autoSaveHandler) {
                                clearTimeout(self.autoSaveHandler);
                            }
                        });
                    }
                    Main.Controller = Controller;
                    // module initialize
                    angular
                        .module('GuruIn.App')
                        .controller('GuruIn.App.Controllers.Samples.Main', ['$scope', 'SampleResource', Controller]);
                })(Main = Samples.Main || (Samples.Main = {}));
            })(Samples = Controllers.Samples || (Controllers.Samples = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Samples;
            (function (Samples) {
                var R = GuruIn.App.Resources;
                var customActionOne = {
                    method: 'POST',
                    isArray: false,
                    url: '/samples/:id/custom_action.json'
                };
                // resource service definition
                function Resource($resource) {
                    var actions = {
                        customActionOne: customActionOne
                    };
                    return R.railsResource($resource, '/samples/:id.json', actions);
                }
                Samples.Resource = Resource;
                angular
                    .module('GuruIn.App')
                    .factory('SampleResource', ['$resource', Resource]);
            })(Samples = Controllers.Samples || (Controllers.Samples = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            'use strict';
            $(document).on('guruin:native:save', function (e, id, user_id, iconHeart, changeAction) {
                saveunsave(id, user_id, iconHeart, changeAction);
            });
            function _changeShareSaveMenu(saved, id, user_id, iconHeart, changeAction) {
                if (window['GuruInGlobalData_ShareGroups'] && window['GuruInGlobalData_ShareGroups']['groups']) {
                    for (var j = 0; j < window['GuruInGlobalData_ShareGroups']['groups'].length; ++j) {
                        var action = window['GuruInGlobalData_ShareGroups']['groups'][j];
                        if (action && action['name'] && action['name'] == 'action') {
                            for (var i = 0, len = action['menuItems'].length; i < len; ++i) {
                                if (action['menuItems'][i]["id"] && action['menuItems'][i]["id"] == 'save') {
                                    action['menuItems'][i]["name"] = (saved ? "取消收藏" : "收藏");
                                    action['menuItems'][i]["image"] = (saved ? "action_unsave" : "action_save");
                                    action['menuItems'][i]["actionScript"] = "$(document).trigger('guruin:native:save', [" + id + ", " + user_id + ", " + (iconHeart ? "true" : "false") + ", " + (changeAction ? "true" : "false") + "])";
                                }
                            }
                        }
                    }
                }
            }
            ;
            function saveunsave(id, user_id, iconHeart, changeAction, text) {
                if (iconHeart === void 0) { iconHeart = false; }
                if (changeAction === void 0) { changeAction = false; }
                if (text === void 0) { text = '收藏'; }
                var favoriteButtonId = '.favorite-button-' + id;
                var performing = $(favoriteButtonId).data('performing');
                if (performing) {
                    return;
                }
                var favoriteButtonIconId = '.favorite-button-i-' + id;
                var favoriteButtonTextId = '.favorite-button-text-' + id;
                var favoriteLikeIconId = '.favorite-like-i-' + id;
                var favoriteLikeTextId = '.favorite-like-text-' + id;
                var urlPrefixId = '#url_prefix_' + id;
                var favoriteCountId = '.favorite-count-' + user_id;
                $(favoriteButtonId).data('performing', true);
                var isFavorite = $(favoriteButtonId).data('isfavorited');
                if (isFavorite) {
                    var url = $(urlPrefixId).val() + 'unsave_it.json';
                    $.ajax({
                        url: url,
                        method: 'POST'
                    }).done(function () {
                        $(favoriteButtonId).data('isfavorited', false);
                        if (iconHeart) {
                            $(favoriteButtonIconId).removeClass('fa-heart fa-heart-o').addClass('fa-heart-o');
                        }
                        else {
                            $(favoriteButtonIconId).removeClass('fa-bookmark fa-bookmark-o').addClass('fa-bookmark-o');
                        }
                        if ($(favoriteButtonTextId).length > 0) {
                            $(favoriteButtonTextId).text(text);
                        }
                        if ($(favoriteLikeTextId).length > 0) {
                            var favoriteCount = parseInt($(favoriteLikeTextId).first().text());
                            if (favoriteCount > 0) {
                                $(favoriteLikeTextId).text(favoriteCount - 1);
                            }
                        }
                        if ($(favoriteLikeIconId).length > 0) {
                            $(favoriteLikeIconId).removeClass('fa-thumbs-up fa-thumbs-o-up').addClass('fa-thumbs-o-up');
                        }
                        if ($(favoriteCountId).length > 0) {
                            var favoriteCount = parseInt($(favoriteCountId).first().text());
                            if (favoriteCount > 0) {
                                $(favoriteCountId).text(favoriteCount - 1);
                            }
                        }
                        _changeShareSaveMenu(false, id, user_id, iconHeart, changeAction);
                    }).always(function () {
                        $(favoriteButtonId).data('performing', false);
                    });
                }
                else {
                    var url = $(urlPrefixId).val() + 'save_it.json';
                    $.ajax({
                        url: url,
                        method: 'POST'
                    }).done(function () {
                        $(favoriteButtonId).data('isfavorited', true);
                        if (iconHeart) {
                            $(favoriteButtonIconId).removeClass('fa-heart fa-heart-o').addClass('fa-heart');
                        }
                        else {
                            $(favoriteButtonIconId).removeClass('fa-bookmark fa-bookmark-o').addClass('fa-bookmark');
                        }
                        if ($(favoriteButtonTextId).length > 0) {
                            $(favoriteButtonTextId).text('取消' + text);
                        }
                        if ($(favoriteLikeTextId).length > 0) {
                            var favoriteCount = parseInt($(favoriteLikeTextId).first().text());
                            $(favoriteLikeTextId).text(favoriteCount + 1);
                        }
                        if ($(favoriteLikeIconId).length > 0) {
                            $(favoriteLikeIconId).removeClass('fa-thumbs-up fa-thumbs-o-up').addClass('fa-thumbs-up');
                        }
                        if ($(favoriteCountId).length > 0) {
                            var favoriteCount = parseInt($(favoriteCountId).first().text());
                            $(favoriteCountId).text(favoriteCount + 1);
                        }
                        _changeShareSaveMenu(true, id, user_id, iconHeart, changeAction);
                    }).always(function () {
                        $(favoriteButtonId).data('performing', false);
                    });
                }
            }
            Controllers.saveunsave = saveunsave;
            ;
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Subjects;
            (function (Subjects) {
                var Notify = Renative.Notify;
                function DiscussionController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.has_error = false;
                    $scope.error_msg = '';
                    $scope.url = '';
                    $scope.description = '';
                    $scope.name = '';
                    $scope.photos = [];
                    $scope.submit = function ($event) {
                        if ($.trim($scope.name).length === 0) {
                            alert('请输入标题');
                            return;
                        }
                        if ($.trim($scope.description).length === 0) {
                            alert('请输入内容');
                            return;
                        }
                        if ($scope.loading) {
                            return;
                        }
                        $scope.loading = true;
                        $http.post($scope.url, { discussion: { description: $scope.description, name: $scope.name, photos: $scope.photos } })
                            .then(function (result) {
                            var $new_topic = $(result.data);
                            $compile($new_topic)($scope);
                            $('#discussion-header').after($new_topic);
                            $new_topic.hide();
                            $new_topic.slideDown('slow');
                            $new_topic.find('div.alert').show();
                            $scope.loading = false;
                            $scope.has_error = false;
                            $scope.error_msg = '';
                            $scope.description = '';
                            $scope.photos = [];
                            $scope.name = '';
                            $('#modal-new-discussion').modal('hide');
                            $('#discussions-panel').show();
                        }, function () {
                            $scope.has_error = true;
                            $scope.error_msg = '发表失败，请重试或联系我们。';
                            $scope.loading = false;
                        });
                    };
                    $scope.$on('fileuploadfail', function (event, data) {
                        Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                    });
                    $scope.$on('fileuploaddone', function (event, data) {
                        if (data && data.result && data.result.files && data.result.files.length > 0) {
                            var result = data.result.files[0];
                            if (/::SubjectDiscussion/i.test(result.photoable_type)) {
                                if (result.context == 'photo') {
                                    $scope.photos.push(result.id);
                                }
                            }
                        }
                        else {
                            Notify.error('很抱歉, 上传照片的过程中发生错误, 有可能是因为照片尺寸太大, 请尝试上传尺寸小一点的照片或者联系我们.');
                        }
                    });
                }
                Subjects.DiscussionController = DiscussionController;
                angular.module('GuruIn.App')
                    .controller('DiscussionController', ['$scope', '$http', '$compile', DiscussionController]);
            })(Subjects = Controllers.Subjects || (Controllers.Subjects = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Tab;
            (function (Tab) {
                'use strict';
                function click(e) {
                    var target_id = $(e).attr('data-target');
                    var children = $(e).children('i');
                    var has_plus = children.hasClass('fa-plus-circle');
                    if (has_plus) {
                        $(e).html('<i class="fa fa-minus-circle"></i>收缩');
                        $(target_id).addClass('in');
                    }
                    else {
                        $(e).html('<i class="fa fa-plus-circle"></i>展开');
                        $(target_id).removeClass('in');
                    }
                }
                Tab.click = click;
                ;
            })(Tab = Controllers.Tab || (Controllers.Tab = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var TripQuery;
            (function (TripQuery) {
                var Checkout;
                (function (Checkout) {
                    var Notify = Renative.Notify;
                    var DOM = Renative.DOM;
                    function Controller($scope, tripQueryResource) {
                        var self = $scope;
                        self.set_trip_type = function (trip_type) {
                            self.model.trip_type = trip_type;
                        };
                        self.checkTripError = function () {
                            var errors = [];
                            if (self.trip_query_form.number_of_people.$error.required) {
                                errors.push("请输入你的参与人数");
                            }
                            if (self.trip_query_form.start_date.$error.required) {
                                errors.push("请输入你的出发时间");
                            }
                            if (self.trip_query_form.trip_days.$error.required) {
                                errors.push("请输入你的旅行天数");
                            }
                            return errors;
                        };
                        self.check = function () {
                            var errors = self.checkTripError();
                            if (self.trip_query_form.contact_name.$error.required) {
                                errors.push("请输入你的联系人");
                            }
                            if (self.trip_query_form.contact_phone_number.$error.required) {
                                errors.push("请输入你的电话");
                            }
                            if (self.trip_query_form.email.$error.required) {
                                errors.push("请输入你的Email");
                            }
                            if (self.trip_query_form.email.$error.email) {
                                errors.push("你输入的Email格式不正确");
                            }
                            return errors;
                        };
                        self.openBookingModal = function (id) {
                            var errors = self.checkTripError();
                            if (errors.length > 0) {
                                Notify.warn(errors.join('<br/>'));
                                return;
                            }
                            $('#' + id).modal('show');
                        };
                        self.create_trip_query = function (e) {
                            self.trip_query_form.$submitted = true;
                            DOM.stopPropagation(e);
                            var errors = self.check();
                            if (errors.length > 0) {
                                Notify.warn(errors.join('<br/>'));
                                return;
                            }
                            $(e.target).attr('disabled', 'disabled');
                            tripQueryResource.save({ trip_query: self.model }, function () {
                                Notify.success('您的旅行需求已收到，谢谢您的支持', 10);
                                self.model.destination = '';
                                self.model.number_of_people = '';
                                self.model.start_date = '';
                                self.model.trip_days = '';
                                self.model.trip_type = '0';
                                self.model.memo = '';
                                self.model.contact_name = '';
                                self.model.contact_phone_number = '';
                                self.model.email = '';
                                self.trip_query_form.$submitted = false;
                                $(e.target).removeAttr('disabled');
                            }, function () {
                                alert('提交失败，请稍后再试');
                                $(e.target).removeAttr('disabled');
                            });
                        };
                    }
                    Checkout.Controller = Controller;
                    // module initialize
                    angular
                        .module('GuruIn.App')
                        .controller('GuruIn.App.Controllers.TripQuery.Create', ['$scope', 'GuruIn.App.Services.TripQuery.Create', Controller]);
                })(Checkout = TripQuery.Checkout || (TripQuery.Checkout = {}));
            })(TripQuery = Controllers.TripQuery || (Controllers.TripQuery = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Services;
        (function (Services) {
            var TripQuery;
            (function (TripQuery) {
                var R = GuruIn.App.Resources;
                // resource service definition
                function TripQueryResource($resource) {
                    var actions = {};
                    return R.railsResource($resource, '/trip_queries/:id.json', actions);
                }
                TripQuery.TripQueryResource = TripQueryResource;
                angular
                    .module('GuruIn.App')
                    .factory('GuruIn.App.Services.TripQuery.Create', ['$resource', TripQueryResource]);
            })(TripQuery = Services.TripQuery || (Services.TripQuery = {}));
        })(Services = App.Services || (App.Services = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));
var GuruIn;
(function (GuruIn) {
    var App;
    (function (App) {
        var Controllers;
        (function (Controllers) {
            var Yaoyan;
            (function (Yaoyan) {
                var Notify = Renative.Notify;
                function YaoyanSuggestionController($scope, $http, $compile) {
                    $scope.loading = false;
                    $scope.has_error = false;
                    $scope.error_msg = '';
                    $scope.yaoyan = '';
                    $scope.submit = function ($event) {
                        if ($.trim($scope.yaoyan).length == 0) {
                            alert('请输入谣言');
                            return;
                        }
                        $scope.loading = true;
                        $http.post($scope.url, { yaoyan_suggestion: { yaoyan: $scope.yaoyan.replace(/\n/g, '<br>') } })
                            .then(function (result) {
                            $scope.loading = false;
                            $scope.has_error = false;
                            $scope.error_msg = '';
                            Notify.success('提交成功！');
                            $('#modal-submit-rumor').modal('hide');
                        }, function () {
                            $scope.has_error = true;
                            $scope.error_msg = '提交失败，请重试或联系我们。';
                            $scope.loading = false;
                        });
                    };
                }
                Yaoyan.YaoyanSuggestionController = YaoyanSuggestionController;
                angular.module('GuruIn.App')
                    .controller('YaoyanSuggestionController', ['$scope', '$http', '$compile', YaoyanSuggestionController]);
            })(Yaoyan = Controllers.Yaoyan || (Controllers.Yaoyan = {}));
        })(Controllers = App.Controllers || (App.Controllers = {}));
    })(App = GuruIn.App || (GuruIn.App = {}));
})(GuruIn || (GuruIn = {}));




















window.GURUIN_JAVASCRIPT_ANGULAR_MODULES_COMPLETED = true;
doTurbolinksBootstrap(function(){
  document.addEventListener('guruin:bootstrap:onetime', function() {
      if(PushNotification && PushNotification.Plugins && ['www.guruin.com', 'localhost'].indexOf(window.location.hostname.toLowerCase()) > -1){
        PushNotification.Plugins.register();
      }

      $(document).on('guruin:mobile:show:search', function(e, type, lat, lng, title){
        $('#modal-search-specific').modal('show');
      });

      $(document).on('guruin:mobile:closemodal:url', function(e, url){
        $("#modal-search").modal('hide');
        $("#modal-search-specific").modal('hide');
        Turbolinks.visit(url);
      });

      $(document).on('guruin:web:share:button:click', function(e){
        if($('.my-share.dropdown').hasClass('open')){
          $('.my-share.dropdown').removeClass('open'); // substitute with your own selector
          $('#share_button').attr('aria-expanded', false); // substitute with your own selector
        }else{
          $('.my-share.dropdown').addClass('open'); // substitute with your own selector
          $('#share_button').attr('aria-expanded', true).focus(); // substitute with your own selector
        }
      });

      $(document).on('guruin:web:list:share:button:click', function(e, id){
        if($('.dropdown.my-share-' + id).hasClass('open')){
          $('.dropdown.my-share-' + id).removeClass('open'); // substitute with your own selector
          $('#share_button_' + id).attr('aria-expanded', false); // substitute with your own selector
        }else{
          $('.dropdown.my-share-' + id).addClass('open'); // substitute with your own selector
          $('#share_button_' + id).attr('aria-expanded', true).focus(); // substitute with your own selector
        }
      });

      $(document).on('guruin:web:share:facebook', function(e, link){
        GuruInGlobalMethod_shareLink(link);
      });

      $(document).on('guruin:web:share:weibo', function(e, link){
        GuruInGlobalMethod_shareLink(link);
      });

      $(document).on('guruin:web:share:wechat', function(e){
        if(Renative.Device.inWechat()){
          $('#modal-share-in-wechat').modal('show');
        } else {
          $('#modal-web-share-article').modal('show');
          $('#web-share-article-link').val(window.location.href);
          $('#web-share-article-link-qrcode').html('')['qrcode']({ text: window.location.href });
        }
      });

      $(document).on('guruin:web:poi:openmap', function(e, mapUrl){
        window.open(mapUrl, '_blank');
      });

      $(document).on('guruin:web:page:reload', function(e){
        window.location.reload();
      });

      $(document).on('guruin:web:open:email', function(e, email){
        if(email){
          window.open('mailto:' + email, '_self');
        }
      });

      $(document).on('guruin:web:open:phone', function(e, phone){
        if(phone){
          window.location.href = 'tel://' + phone.replace('(', '').replace('-', '').replace(')', '').replace(/ +/g, '');
        }
      });

      $(document).on('guruin:web:news:open', function(e, url){
        window.open(url, '_blank');
      });

      $(document).on('guruin:mobile:open:external:url', function(e, url){
        window.open(url, '_blank');
      });

      $(document).on('guruin:web:replace:url', function(e, url){
        Turbolinks.visit(url, { action: 'replace' });
      });

      $(document).on('guruin:web:visit:url', function(e, url){
        Turbolinks.visit(url);
      });

      $(document).on('guruin:web:open:photo', function(e, PhotoModalWindow, photoIds, index){
        PhotoModalWindow.open(photoIds, index);
      });

      $(document).on('guruin:show:location:modal', function(e){
        $('#modal-location').modal({backdrop: "static"});
      });

      $(document).on('guruin:show:merchant:location:modal', function(e){
        $('#modal-location').modal({backdrop: "static"});
      });

      $(document).on('guruin:web:start:fetch:location', function(e, eventName){
        if(eventName == 'guruin:location:fetch:refresh') {
          GuruIn.Plugins.locate(
            function(){
              $('#native_location_button').text('正在获取中...');
            },
            function(){
              $('#native_location_button').text('获取成功, 我们正在刷新页面');
            },
            function(){
              $('#native_location_button').text('使用我当前的位置');
            }
          );
        }else if(eventName == 'guruin:location:fetch:withoutrefresh'){
          $('#search_location_button').text('正在获取中...');
          GuruIn.Plugins.onLocate(
            function(position){
              $('#search_location_button').text('获取成功');
              $('#modal_lat_hid').val(position.coords.latitude);
              $('#modal_lng_hid').val(position.coords.longitude);
              $('#modal_poi_id_hid').val('-1');
              $('#txt_location_specific').attr('placeholder', position.coords.latitude + ', ' + position.coords.longitude);
              $('#txt_location').attr('placeholder', position.coords.latitude + ', ' + position.coords.longitude);
            });
        }
      });
    });
  }, 'webevent');
/**
* Created by jc on 1/15/15.
*/

;
;
;
var GuruIn;
(function (GuruIn) {
    'use strict';
    function defaultBootstrap() {
        // default bootstrap
        if (window['fbq']) {
            window['fbq']('init', window['FACEBOOK_PIXEL_ID']);
        }
        $(document).on('bootstrap:region', function (e, region) {
            console.log('#[GuruIn.defaultBoostrap] bootstrap:region (' + region + ')');
            var menuElements = document.getElementsByClassName('dropdown-menu nav-dropdown-menu');
            if (menuElements.length > 0) {
                menuElements[0].addEventListener('click', function (event) {
                    var events = $._data(document, 'events') || {};
                    events = events.click || [];
                    for (var i = 0; i < events.length; i++) {
                        if (events[i].selector) {
                            if ($(event.target).is(events[i].selector)) {
                                events[i].handler.call(event.target, event);
                            }
                            $(event.target).parents(events[i].selector).each(function () {
                                events[i].handler.call(this, event);
                            });
                        }
                    }
                    event.stopPropagation();
                });
            }
            Renative.tryCatch(function () {
                GuruIn.Plugins.swiperInitialize(region);
            }, '#[GuruIn.defaultBoostrap] initialize plugins:');
            Renative.tryCatch(function () {
                $(region).find('input, textarea').placeholder();
            }, '#[GuruIn.defaultBoostrap] initialize placeholder:');
            Renative.tryCatch(function () {
                $(region).find('.dropdown-toggle').dropdown();
            }, '#[GuruIn.defaultBoostrap] initialize dropdown:');
            Renative.tryCatch(function () {
                if (Renative.Device.desktop()) {
                    $(region).find('[data-toggle="tooltip"]').tooltip();
                }
                else {
                    $(region).find('[data-allow-tooltip="true"]').tooltip();
                }
            }, '#[GuruIn.defaultBoostrap] initialize tooltip:');
            //# update signin [name="after_signin"]
            if (location.pathname.indexOf('/users/signin') < 0) {
                $('[name="after_signin"]').val(window.location.pathname);
            }
            //show wechat follow image
            if (Renative.Device.inWechat()) {
                $('.wechat-follow-item').fadeIn();
            }
            // move events to bootstrap area;
            $('.simplified-converter').click(function (e) {
                Renative.DOM.stopPropagation(e);
                Renative.Cookies.set('simplified', $(this).data('simplified'), { expires: 365, path: '/' });
                //Turbolinks.clearCache();
                $(document).trigger('guruin:native:page:reload');
                $(document).trigger('guruin:web:page:reload');
            });
            $('#swb-close').click(function (e) {
                Renative.DOM.stopPropagation(e);
                // use a shorter cookie name.
                Renative.Cookies.set('__giapdl', '1', { expires: 7, path: '/' });
                // document.cookie = 'gi_hapdl=1; path=/';
                $('#smartWebBanner').remove();
            });
            $('.swblink').click(function (e) {
                Renative.DOM.stopPropagation(e);
                var href_path = window.location.href;
                if (/^http/i.test(href_path)) {
                    href_path = href_path.replace(/^[^:]+:\/\/[^\/]+\//i, '/');
                }
                var device = 'mobile';
                if (Renative.Device.inWechat()) {
                    device = 'wechat';
                }
                else if (Renative.Device.inFacebook()) {
                    device = 'facebook';
                }
                var via = $(e.currentTarget).data('via');
                if (window['ga']) {
                    window['ga']('send', 'event', 'iosApp', 'download', '(' + device + '):BDB via [' + via + ']: ' + href_path);
                }
                if (device == 'wechat') {
                    $('#modal-app-download-in-wechat').modal('show');
                }
                else {
                    window.location.href = $(e.currentTarget).prop('href');
                }
            });
            $('.modal.resolve-scroll-issue').each(function () {
                var element = $(this);
                element.on('show.bs.modal', function (e) {
                    $('body').css("cssText", "position: relative !important;");
                    if ($('.campaign-affix').length > 0) {
                        $('.campaign-affix').css("cssText", "z-index: 10 !important;");
                    }
                }).on('hidden.bs.modal', function (e) {
                    $('body').css("cssText", "");
                    if ($('.campaign-affix').length > 0) {
                        $('.campaign-affix').css("cssText", "");
                    }
                });
            });
            // disable turbolinks when disabled on body
            if ($('body').data('turbolinks') == false) {
                Turbolinks.controller.disable();
            }
            if (typeof autosize == 'function') {
                autosize($('textarea.autosize-textarea'));
            }
            if ($('.campaign-affix').length > 0) {
                $('.campaign-affix').affix({
                    offset: {
                        top: function () {
                            return (this.top = $('.campaign-banner').outerHeight(true) + $('.campaign-subject').outerHeight(true) + 15 + $('#header').outerHeight(true) + $('.campaign-breadcrumb').outerHeight(true) + $('.campaign-ad-new.visible-phone').outerHeight(true) + $('.swiper-banners').outerHeight(true));
                        }
                    }
                });
            }
            if ($('.campaign-affix-lp').length > 0) {
                $('.campaign-affix-lp').affix({
                    offset: {
                        top: function () {
                            return (this.top = $('.campaign-hero').outerHeight(true) + $('#header').outerHeight(true));
                        }
                    }
                });
            }
            if ($('.campaign-header-affix').length > 0) {
                $('.campaign-header-affix').affix({
                    offset: {
                        top: function () {
                            return (this.top = $('.campaign-hero').outerHeight(true) + $('#header').outerHeight(true) + $('.campaign-tab').outerHeight(true));
                        }
                    }
                });
            }
            function getPageScroll() {
                var xScroll, yScroll;
                if (self.pageYOffset) {
                    yScroll = self.pageYOffset;
                    xScroll = self.pageXOffset;
                }
                else if (document.documentElement && document.documentElement.scrollTop) {
                    yScroll = document.documentElement.scrollTop;
                    xScroll = document.documentElement.scrollLeft;
                }
                else if (document.body) {
                    yScroll = document.body.scrollTop;
                    xScroll = document.body.scrollLeft;
                }
                return new Array(xScroll, yScroll);
            }
            function setBoxFixed(o) {
                var $box = jQuery(o);
                if ($box.length > 0) {
                    var _b_H = $box.outerHeight(true);
                    var _b_T = $box.offset().top;
                    if (!$box.parent('.campaign-affix-wrap').get(0)) {
                        $box.wrap('<div class="campaign-affix-wrap" style="height: ' + _b_H + 'px;"></div>');
                    }
                    $box.parent().parent().css('position', 'static');
                    $box.css('width', $box.parent('.campaign-affix-wrap').width());
                    var $wrap = $box.parent().parent().parent().css('position', 'relative');
                    if (_b_H >= $wrap.outerHeight(true)) {
                        $wrap.css('position', 'relative');
                    }
                    else {
                        jQuery(window).scroll(function () {
                            var _w_T = $wrap.offset().top;
                            var _w_H = $wrap.outerHeight(true);
                            var _s_T = getPageScroll()[1];
                            if (_s_T >= _w_T + _w_H - _b_H) {
                                $box.css({
                                    position: "absolute",
                                    top: "auto",
                                    bottom: "0",
                                });
                            }
                            else if (_s_T <= _b_T) {
                                $box.css({
                                    position: "relative",
                                    top: "auto",
                                    bottom: "auto",
                                });
                            }
                            else {
                                $box.css({
                                    position: "fixed",
                                    top: "0",
                                    bottom: "auto",
                                });
                            }
                        }).resize(function () {
                            var t = setTimeout(function () {
                                _b_H = $box.outerHeight(true);
                                $box.parent('.campaign-affix-wrap').css({
                                    height: _b_H
                                });
                            }, 500);
                        }).scroll(function () {
                            var t = setTimeout(function () {
                                _b_H = $box.outerHeight(true);
                                $box.parent('.campaign-affix-wrap').css({
                                    height: _b_H
                                });
                            }, 500);
                        });
                    }
                }
            }
            setBoxFixed('.campaign-affix-pane');
            setBoxFixed('.campaign-affix-ad');
            $(window).load(function () {
                setBoxFixed('.campaign-affix-pane');
                setBoxFixed('.campaign-affix-ad');
            });
            $(window).resize(function () {
                setBoxFixed('.campaign-affix-pane');
                setBoxFixed('.campaign-affix-ad');
            });
            $('.checkbox-more').delegate('a', 'click', function () {
                setBoxFixed('.campaign-affix-pane');
                setBoxFixed('.campaign-affix-ad');
            });
            $('#campaign-tab .nav-link').on('shown.bs.tab', function () {
                setBoxFixed('.campaign-affix-pane');
                setBoxFixed('.campaign-affix-ad');
            });
            if ($('.campaign-cost').length > 0) {
                $('.campaign-cost').affix({
                    offset: {
                        top: function () {
                            return (this.top = $('.campaign-section').outerHeight(true) - $('.campaign-section').outerHeight() + $('#header').outerHeight(true) + $('.campaign-hero').outerHeight(true) + $('.campaign-hero-actions').outerHeight(true) + 30);
                        },
                        bottom: function () {
                            return (this.bottom = 152);
                        }
                    }
                });
            }
            if ($('.btn-promo-code').length > 0) {
                $(".btn-promo-code").click(function () {
                    var _this = this;
                    var range = document.createRange();
                    window.getSelection().removeAllRanges();
                    range.selectNodeContents($(_this).get(0));
                    window.getSelection().addRange(range);
                    document.execCommand('copy');
                    window.getSelection().removeAllRanges();
                    $(_this).tooltip('show');
                });
                $(".btn-promo-code").mouseleave(function () {
                    var _this = this;
                    $(_this).tooltip('hide');
                });
                $('.btn-promo-code[data-toggle="tooltip"]').on('shown.bs.tooltip', function () {
                    var _this = $(this);
                    var element = _this[0];
                    if (element.myShowTooltipEventNum == null) {
                        element.myShowTooltipEventNum = 0;
                    }
                    else {
                        element.myShowTooltipEventNum++;
                    }
                    var eventNum = element.myShowTooltipEventNum;
                    setTimeout(function () {
                        if (element.myShowTooltipEventNum == eventNum) {
                            _this.tooltip('hide');
                        }
                    }, 2000);
                });
            }
            $('#modal-search').on('shown.bs.modal', function () {
                if ($('#modal_search_box').is(":visible")) {
                    $('#modal_search_box').focus();
                }
                if ($('#txt_keywords').is(":visible")) {
                    $('#txt_keywords').focus();
                }
            });
            $('#modal-search-specific').on('shown.bs.modal', function () {
                if ($('#specific_modal_search_box').is(":visible")) {
                    $('#specific_modal_search_box').focus();
                }
                if ($('#txt_keywords_specific').is(":visible")) {
                    $('#txt_keywords_specific').focus();
                }
            });
            if ($('.lazyload-resize').length > 0) {
                $('.lazyload-resize').smartify({
                    load: function (element) {
                        GuruInGlobalMethod_resizeIframe(element);
                    }
                });
            }
        });
        // renative:notify:enqueue logic;
        $(Renative.config.defaultEventListener).on('renative:notify:enqueue', Renative.Notify.enqueue);
        $(document).on('dispose:region', function (event, region) {
            if (Renative.Device.desktop()) {
                $(region).find('[data-toggle="tooltip"]').tooltip('destroy');
            }
            else {
                $(region).find('[data-allow-tooltip="true"]').tooltip('destroy');
            }
            // hide all tooltip
            $('.tooltip').hide();
            // hide all dropdown menu
            $('.dropdown.open').removeClass('open');
            $('.modal').modal('hide');
            // fix modal view bug
            $('.modal-backdrop').remove();
            $('body').removeClass('modal-open');
            console.log("#[GuruIn] dispose:region (" + region + ") [done]");
        });
        $(document).on('dispose:modal:region', function (event, region) {
            // hide all modal view
            $('.modal').modal('hide');
            // fix modal view bug
            $('.modal-backdrop').remove();
            $('body').removeClass('modal-open');
        });
        $(document).on('url:changing', function (event, url, xhr, crossDomain) {
            console.log("#[Renative.Uri] url:changing", "(url: " + url + ")", "(xhr: " + xhr + ")", "(crossDomain: " + crossDomain + ")");
        });
        var sendPageviewTracking = function (href) {
            var href_path = href;
            if (/^http/i.test(href)) {
                href_path = href.replace(/^[^:]+:\/\/[^\/]+\//i, '/');
            }
            if (window['ga']) {
                window['ga']('set', 'page', href_path);
                window['ga']('send', 'pageview');
            }
            if (window['fbq']) {
                window['fbq']('track', 'PageView');
            }
            console.log("#[GuruIn] sendPageviewTracking [" + href_path + "]");
            console.log("#[GuruIn] sendPageviewTracking [done]");
        };
        $(document).on('xhr:url:changed', function (event, href, options) {
            Renative.tryCatch(function () {
                sendPageviewTracking(href);
            }, '#[GuruIn.GA] send pageview');
            console.log("#[GuruIn] xhr:url:changed [done]");
        });
        $(document).on('turbolinks:url:changed', function (event) {
            Renative.tryCatch(function () {
                sendPageviewTracking(window.location.href);
            }, '#[GuruIn.GA] send pageview');
            console.log("#[GuruIn] turbolinks:url:changed [done]");
        });
        $(document).on('click', '.simplified-converter', function () {
            Renative.Cookies.set('simplified', $(this).data('simplified'), { expires: 365, path: '/' });
            //Turbolinks.clearCache();
            $(document).trigger('guruin:native:page:reload');
            $(document).trigger('guruin:web:page:reload');
            return false;
        });
        $(document).on('click', '#swb-close', function () {
            // use a shorter cookie name.
            Renative.Cookies.set('__giapdl', '1', { expires: 7, path: '/' });
            // document.cookie = 'gi_hapdl=1; path=/';
            $('#smartWebBanner').remove();
            return false;
        });
        $(document).on('click', '.swblink', function (e) {
            var href_path = window.location.href;
            if (/^http/i.test(href_path)) {
                href_path = href_path.replace(/^[^:]+:\/\/[^\/]+\//i, '/');
            }
            var device = 'mobile';
            if (Renative.Device.inWechat()) {
                device = 'wechat';
            }
            else if (Renative.Device.inFacebook()) {
                device = 'facebook';
            }
            var via = $(e.currentTarget).data('via');
            if (window['ga']) {
                window['ga']('send', 'event', 'iosApp', 'download', '(' + device + '):BDB via [' + via + ']: ' + href_path);
            }
            if (device == 'wechat') {
                $('#modal-app-download-in-wechat').modal('show');
            }
            else {
                window.location.href = $(e.currentTarget).prop('href');
            }
        });
        $(document).on('guruin:infinite:scrolling', function () {
            var xhr = $('.infinite.scrolling').data('xhr') + '';
            if (xhr == '') {
                return;
            }
            var maxPage = $('.infinite.scrolling').data('max-page');
            var nextPage = $('.infinite.scrolling').data('next-page');
            if (maxPage && nextPage) {
                if (parseInt(maxPage) < parseInt(nextPage)) {
                    return;
                }
            }
            var callbackEvent = $('.infinite.scrolling').data('callback') + '';
            $('.infinite.scrolling').on('inview', function (e, visible) {
                if (!visible) {
                    return;
                }
                if (GuruInGlobalVar_autoloading) {
                    return;
                }
                GuruInGlobalVar_autoloading = true;
                $.ajax(xhr).done(function (data) {
                    GuruInGlobalVar_autoloading = false;
                    var el = $(data);
                    if (GuruInGlobalVar_enable_chinese_conversion) {
                        if (GuruInGlobalVar_preferred_simplified_chinese) {
                            el = $(data).t2s();
                        }
                        else {
                            el = $(data).s2t();
                        }
                    }
                    $('.infinite.scrolling').replaceWith(el);
                    if (callbackEvent != '') {
                        $(document).trigger(callbackEvent, [el]);
                    }
                    // for non-turbolinks update infinite scrolling page
                    if (!Turbolinks.controller.enabled) {
                        el.find('a[href]').bind('click', function (e) {
                            var url = $(e.currentTarget).data('url') + '';
                            if (url == '' || url == 'undefined') {
                                return;
                            }
                            Turbolinks.controller.pushHistoryWithLocationAndRestorationIdentifier(url);
                        });
                    }
                    // enable infinite scrolling
                    $(document).trigger('guruin:infinite:scrolling');
                    // update cached snapshots
                    //Turbolinks.controller.cacheSnapshot();
                });
            });
        });
        if (typeof GuruInGlobalMethod_ConvertChinese === 'function') {
            $(document).on('bootstrap:region:completed', GuruInGlobalMethod_ConvertChinese);
        }
        ;
        if (typeof GuruInGlobalMethod_UpdateWechatShareMeta === 'function') {
            $(document).on('bootstrap:region:completed', GuruInGlobalMethod_UpdateWechatShareMeta);
        }
        ;
        if (typeof GuruInGlobalMethod_Viglink_Bind === 'function') {
            $(document).on('bootstrap:region:completed', GuruInGlobalMethod_Viglink_Bind);
        }
        if (typeof GuruInGlobalMethod_WriteTimeZoneCookie === 'function') {
            $(document).on('bootstrap:region:completed', GuruInGlobalMethod_WriteTimeZoneCookie);
        }
        if (typeof GuruInGlobalMethod_Intercom_load === 'function') {
            GuruInGlobalMethod_Intercom_load();
        }
        // dynamic load wechat jssdk
        if (Renative.Device.inWechat()) {
            $.getScript('https://res.wx.qq.com/open/js/jweixin-1.0.0.js').done(function (script, textStatus) {
                if (GuruInGlobalMethod_UpdateWechatShareMeta) {
                    GuruInGlobalMethod_UpdateWechatShareMeta();
                }
            });
        }
    }
    GuruIn.defaultBootstrap = defaultBootstrap;
    function bootstrap(e) {
        if (window['GuruInTurbolinksVisits'] == 0 && e) {
            return;
        }
        console.log('###### GuruIn Bootstrap BEGIN ######');
        if (!e) {
            GuruIn.defaultBootstrap();
            if (window['Turbolinks'] && window['Turbolinks'].supported) {
                Renative.runtime.turbolinks = true;
                Renative.Uri.pushState();
                console.log('Turbolinks bootstrap...');
                document.addEventListener('turbolinks:load', GuruIn.bootstrap);
                // always dispose first (for Turbolinks history navigation)
                document.addEventListener('turbolinks:before-render', function () {
                    Renative.UI.dispose(Renative.config.defaultRegion);
                    $(document).trigger('angular:dispose');
                    if (window['googletag']) {
                        window['googletag'].destroySlots();
                    }
                });
                Turbolinks.dispatch('guruin:bootstrap:onetime');
            }
        }
        // ui bind
        Renative.UI.bind(Renative.config.defaultRegion);
        // trigger bootstrap first
        $(document).trigger('bootstrap');
        $(document).trigger('angular:bootstrap');
        $(document).trigger('bootstrap:region', Renative.config.defaultRegion);
        // infinite scrolling
        GuruInGlobalVar_autoloading = false;
        Turbolinks.dispatch('guruin:bootstrap');
        $(document).trigger('guruin:infinite:scrolling');
        $(document).trigger('turbolinks:url:changed');
        // ui trigger
        Renative.UI.trigger(Renative.config.defaultRegion);
        // bootstrap:region:completed
        $(document).trigger('bootstrap:region:completed', Renative.config.defaultRegion);
        console.log('###### GuruIn Bootstrap ENDDD ######');
    }
    GuruIn.bootstrap = bootstrap;
    window['GuruInTurbolinksVisits'] = 0;
    document.addEventListener('turbolinks:visit', function () {
        window['GuruInTurbolinksVisits'] += 1;
    });
    function onBootstrap() {
        if (!window['GURUIN_JAVASCRIPT_LIBRARY_COMPLETED']) {
            Q.delay(5).then(function () {
                GuruIn.onBootstrap();
            });
            return;
        }
        doTurbolinksBootstrap(function () { GuruIn.bootstrap(null); }, 'boot');
    }
    GuruIn.onBootstrap = onBootstrap;
    GuruIn.onBootstrap();
})(GuruIn || (GuruIn = {}));
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//







;

window.ymConfig = { "bot": "x1734168923745", "host": "https://r0.cloud.yellow.ai" };
(function() {
    var w = window,
        ic = w.YellowMessenger;
    if ("function" === typeof ic) {
        ic("reattach_activator");
        ic("update", ymConfig);
    } else {
        var d = document,
            i = function() {
                i.c(arguments);
            };
        function l() {
            var e = d.createElement("script");
            e.type = "text/javascript";
            e.async = !0;
            e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js?no-cache=${new Date().getTime()}";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
        }
        i.q = [];
        i.c = function(e) {
            i.q.push(e);
        };
        w.YellowMessenger = i;
        l();
    }
})();
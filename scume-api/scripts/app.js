(function (global) {
    var app = global.app = global.app || {};

    app.makeUrlAbsolute = function (url) {
            var anchorEl = document.createElement("a");
            anchorEl.href = url;
            return anchorEl.href;
        };

    document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();

        if (kendo.support.mobileOS.android) {
            // init app with skin android-light
			app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", skin: "android-light" });
        } else {
			app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" });
        }


    }, false);
})(window);
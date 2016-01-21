function imageIsLoaded(img) {
    if (!img.complete) return false;
    return !(typeof img.naturalWidth != 'undefined' && img.naturalWidth == 0);
}

function setUserAgent(w, userAgent) {
    if (w.navigator.userAgent != userAgent) {
        var userAgentProp = { get: function () { return userAgent; } };
        try {
            Object.defineProperty(w.navigator, 'userAgent', userAgentProp);
        } catch (e) {
            w.navigator = Object.create(navigator, { userAgent: userAgentProp });
        }
    }
}
setUserAgent(document.querySelector('iframe').contentWindow, 'A User Agent String');

var getAbsoluteUrl = (function() {
    var a;
    return function(url) {
        if(!a) a = document.createElement('a');
        a.href = url;
        return a.href;
    };
})();
getAbsoluteUrl('/something');
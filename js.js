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

function getAbsoluteUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.href;
}
getAbsoluteUrl('/something');

function getFromCSS() {
    return +window.getComputedStyle(
        document.querySelector('body'),
        '::after'
    ).content.replace(/\'/g, '').replace(/\"/g, '');
}

// not blocked popup
//<a id="aaa" href="...">link</a>
$('#aaa').on('click', function (e) {
    e.preventDefault();
    window.open($(this).attr('href'), 'new_window', 'status=0');
});

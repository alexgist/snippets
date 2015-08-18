function imageIsLoaded(img) {
    if (!img.complete) return false;
    return !(typeof img.naturalWidth != 'undefined' && img.naturalWidth == 0);
}

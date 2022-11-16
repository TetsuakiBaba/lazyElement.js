function respondToVisibility(element, callback, options) {


    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            callback(element, entry.intersectionRatio > 0, observer);
        });
    }, options);

    observer.observe(element);
}
function addLazyElement(element,
    options = {
        once: false,
        root: null,
        rootMargin: '-10% 0px',
        threshold: 0
    }) {

    if (!options.once) options.once = false;
    if (!options.root) options.root = null;
    if (!options.rootMargin) options.rootMargin = '-25% 0px';
    if (!options.threshold) options.threshold = 0;

    respondToVisibility(element, function (element, in_out, observer) {
        if (in_out) {
            if (element.classList.contains('lazyfadeout')) element.classList.remove('lazyfadeout');
            if (element.classList.contains('lazyfadein)')) element.classList.remove('lazyfadein');

            element.classList.add('lazyfadein');

            // 一回だけで終わりたい場合はdisconnectする
            if (options.once) observer.disconnect();
        }
        else {
            if (element.classList.contains('lazyfadeout')) element.classList.remove('lazyfadeout');
            if (element.classList.contains('lazyfadein')) element.classList.remove('lazyfadein');
            element.classList.add('lazyfadeout');
        }
    }, options);
}
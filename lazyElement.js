function respondToVisibility(element, callback) {
    var options = {
        root: null,
        rootMargin: "0px 0px", // ビューポートの中心を判定基準にする
        threshold: 0 // 閾値は0
    };

    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            callback(element, entry.intersectionRatio > 0, observer);
        });
    }, options);

    observer.observe(element);
}
function addLazyElement(element, options = { once: false }) {
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

        console.log('hello', element, in_out, observer);
    })
}
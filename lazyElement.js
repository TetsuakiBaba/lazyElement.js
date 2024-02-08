function respondToVisibility(element, callback, options) {
    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            //callback(element, entry.intersectionRatio > 0, observer);
            callback(element, entry.isIntersecting, observer);
        });
    }, options);

    observer.observe(element);
}
function addLazyElement(element,
    options = {
        once: false,
        root: null,
        rootMargin: '-20%',
        threshold: 0
    }) {

    // onceは独自定義オプション
    if (!options.once) options.once = false;
    if (!options.root) options.root = null;
    if (!options.rootMargin) options.rootMargin = '-20%';
    if (!options.threshold) options.threshold = 0.0;


    // 渡されたelement内にimage要素がある場合、読み込みに時間がかかり正しい位置判定ができないまま未定義動作になることがあるため、一旦全ての要素をチェックし、imageがあれば全て読み込まれてからlazyelementを適応する。イメージが読み込まれない限りはエフェクトが適応されないので注意
    // ちゃんと全部のイメージロードできたらlazyloadエフェクトをかける、そうでない場合はエフェクトかけない
    let images = element.querySelectorAll('img');
    let image_length = images.length;
    let loaded_count = 0;

    if (image_length > 0) {
        for (let i of images) {
            i.addEventListener('load', (e) => {
                loaded_count++;
                if (loaded_count == image_length) {
                    respondToVisibility(element, function (element, in_out, observer) {
                        if (in_out) {
                            if (element.classList.contains('lazyfadeout')) element.classList.remove('lazyfadeout');
                            if (element.classList.contains('lazyfadein')) element.classList.remove('lazyfadein');

                            element.classList.add('lazyfadein');

                            // 一回だけで終わりたい場合はdisconnectする
                            if (options.once) {
                                // なんらかの理由でlazyfaceoutのまま disconnectしてしまう減少があるため、念の為チェックしておく
                                if (element.classList.contains('lazyfadeout')) element.classList.remove('lazyfadeout');
                                observer.disconnect();
                            }
                        }
                        else {
                            if (element.classList.contains('lazyfadeout')) element.classList.remove('lazyfadeout');
                            if (element.classList.contains('lazyfadein')) element.classList.remove('lazyfadein');
                            element.classList.add('lazyfadeout');
                        }
                    }, options);
                }
            })
        }
    }
    else {
        respondToVisibility(element, function (element, in_out, observer) {
            if (in_out) {
                if (element.classList.contains('lazyfadeout')) element.classList.remove('lazyfadeout');
                if (element.classList.contains('lazyfadein')) element.classList.remove('lazyfadein');

                element.classList.add('lazyfadein');

                // 一回だけで終わりたい場合はdisconnectする
                if (options.once) {
                    // なんらかの理由でlazyfaceoutのまま disconnectしてしまう減少があるため、念の為チェックしておく
                    if (element.classList.contains('lazyfadeout')) element.classList.remove('lazyfadeout');
                    observer.disconnect();
                }
            }
            else {
                if (element.classList.contains('lazyfadeout')) element.classList.remove('lazyfadeout');
                if (element.classList.contains('lazyfadein')) element.classList.remove('lazyfadein');
                element.classList.add('lazyfadeout');
            }
        }, options);
    }



}
# lazyElement.js
lazyElement.js is a library that makes it easy to control the fade-in/out of arbitrary elements using observer. It requires only one single line of code.

<img src="./teaser.gif">

## Demo
  * <a href="https://tetsuakibaba.github.io/lazyElement.js/" target="_blank">demo</a>

## CDN
lazyElement works with css effect, so please use css and js file both.
lazyElement.css

``` css
<link href="https://cdn.jsdelivr.net/gh/TetsuakiBaba/lazyElement.js@main/lazyElement.css" rel="stylesheet"
        type="text/css" media="all">
```

lazyElement.js

``` js
<script src="https://cdn.jsdelivr.net/gh/TetsuakiBaba/lazyElement.js@main/lazyElement.js" crossorigin="anonymous"
        type="text/javascript"></script>
```

## Starter Sample
``` html
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>lazyElement.js demo</title>
    <link href="https://cdn.jsdelivr.net/gh/TetsuakiBaba/lazyElement.js@main/lazyElement.css" rel="stylesheet"
        type="text/css" media="all">
</head>

<body>
    <h1>Starter Sample </h1>
    <span class="small"> scroll down!!</span>
    <h1 id="lazy" style="margin-top:1000px;">
        I'm fade in
    </h1>
    <h1>
        I'm not fade in
    </h1>
    <script src="https://cdn.jsdelivr.net/gh/TetsuakiBaba/lazyElement.js@main/lazyElement.js" crossorigin="anonymous"
        type="text/javascript"></script>
    <script>
        window.addEventListener('DOMContentLoaded', function () {
            addLazyElement(document.querySelector('#lazy'), { once: false });
        })
    </script>
</body>

</html>
```


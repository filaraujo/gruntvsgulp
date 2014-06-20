(function(){
    window.addEventListener('load', function(){
        document.querySelector('.gulp .js-compile').classList.add('is-compiled');

        var img = new Image();
        img.onload = function(){
            document.querySelector('.gulp .image-minified').classList.add('is-minified');
        };
        img.src = '/dist/gulp/check.png';
    });

})();

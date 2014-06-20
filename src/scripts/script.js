(function(){
    window.addEventListener('load', function(){
        document.querySelector('.grunt .js-compile').classList.add('is-compiled');

        var img = new Image();
        img.onload = function(){
            document.querySelector('.grunt .image-minified').classList.add('is-minified');
        };
        img.src = '/dist/grunt/check.png';
    });

})();

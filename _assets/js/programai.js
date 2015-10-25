(function(document) {
    var topMenuHidden = true;

    document.querySelector('#toggle-top-menu').onclick = function() {
        if (topMenuHidden) {
            document.querySelector('#top-menu .menu').style.display = 'block';
        } else {
            document.querySelector('#top-menu .menu').style.display = 'none';
        }

        topMenuHidden = ! topMenuHidden;
    };
})(document);

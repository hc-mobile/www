$(document).ready(function(){
    $.ajax({
        // url: 'examples.json',
        url: 'http://lstr.huahcoding.com/examples.json',
        type: 'GET',
        dataType:"jsonp",
        jsonpCallback: "_testcb",
        success: function(res) {
            var txt=res;

            var section = document.getElementsByTagName('section')[0];
            var iPad = navigator.userAgent.match(/iPad/i) != null;
            var retina = window.devicePixelRatio >= 2 ? true : false;
            var icon = (retina) ? (iPad) ? 'icon@144.png' : 'icon@2x.png' : (iPad) ? 'icon@72.png' : 'icon.png';
            var category, item, ul, element, ln, i, j;


            var categories = [];
            categories = txt;
            ln = categories.length;

            for (i = 0; i < ln; i++) {
                category = categories[i];

                element = document.createElement('header');
                element.innerHTML = category.title;
                section.appendChild(element);

                ul = document.createElement('ul');

                for (j = 0; j < category.items.length; j++) {
                    item = category.items[j];

                    element = document.createElement('li');
                    element.innerHTML = [
                        '<a href="' + item.url + '">',
                            // '<img src="icon.png"/>',
                            '<img src="' + item.iconLocation + '/' + icon + '" />',
                            '<h3>' + item.text + '</h3>',
                            '<p>' + item.desc + '</p>',
                        '</a>'
                    ].join('');
                    ul.appendChild(element);
                }

                section.appendChild(ul);
            }

            document.getElementById('wrapper').style.opacity = 1;

        },
        error: function(e) {
            console.info("Error");
        }
    });
});
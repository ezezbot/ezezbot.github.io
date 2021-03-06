const object = [
    {
        name: 'Kumbh Sans Bold',
        file: 'url(fonts/KumbhSans-Bold.ttf)'
    },
    {
        name: 'Kumbh Sans Regular',
        file: 'url(fonts/KumbhSans-Regular.ttf)'
    },
    {
        name: 'Kumbh Sans Light',
        file: 'url(fonts/KumbhSans-Light.ttf)'
    }
];

define("js/fonts/index",
    function() {
        return function() {
            for (let i in object) {
                let font = new FontFace(object[i].name, object[i].file);
                font.load().then(function(loaded_face) {
                    document.fonts.add(loaded_face);
                }).catch(function(error) {
                    console.log('CrayCSS: Fonts error.');
                });
            }
        }
    }
);
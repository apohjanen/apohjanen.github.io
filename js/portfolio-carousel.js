(function() {

    var slidersContainer = document.querySelector('.sliders-container');

    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [1, 3],
        rangeContent: function (i) {
            return '<h1>0' + i + '</h1>';
        },
        style: {
            transform: [{scale: [0.4, 1]}],
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the titles slider
    var titles = [
        'Brawls of Steel',
        'Tap and Spin',
        'Gravitoid',
    ];
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, 2],
        rangeContent: function (i) {
            return '<h3>'+ titles[i] +'</h3>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });

	/*var links = [
		'https://play.google.com/store/apps/details?id=com.superplusgames.brawlsofsteel&hl=en_NZ&gl=US',
		'https://play.google.com/store/apps/details?id=com.superplusgames.tapandspin&hl=en_NZ&gl=US',
		'https://play.google.com/store/apps/details?id=com.EndlessTea.Gravitoid'
    ];*/
	
	var links = [
		'https://youtu.be/HVirhJNAJsw',
		'https://youtu.be/79J5Ki-vcFY',
		'https://youtu.be/Cra66S1nWp0'
    ];
	
	// Initializing the links slider
    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 2],
        rangeContent: function (i) {
			return '<a href="' + links[i] + '"target="_blank" rel="noopener noreferrer">Show trailer on Youtube</a>';
            //return '<a class="ms-slide__link">Show on Store</a>';
        },
        vertical: true,
        interactive: false
    });

    // Get pagination items
    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 4 slides required
        range: [0, 2],
        rangeContent: function () {
            return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.ms-slide__image': {
                transform: [{scale: [1.5, 1]}]
            }
        },
        // Update pagination if slider change
        change: function(newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('pagination__item--active');
            }
            paginationItems[newIndex].classList.add('pagination__item--active');
        }
    });

    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener('click', function(e) {
        if (e.target.matches('.pagination__button')) {
            var index = paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }
    });

})();

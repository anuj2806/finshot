        var images = document.querySelectorAll('.kg-gallery-image img');
        images.forEach(function (image) {
            var container = image.closest('.kg-gallery-image');
            var width = image.attributes.width.value;
            var height = image.attributes.height.value;
            var ratio = width / height;
            container.style.flex = ratio + ' 1 0%';
        })
  
    window.onload = function () {
        document.getElementById('nav-main-links').style.display = 'block';
        const links = [
            {
                link: '/archive/',
                id: 'daily',
                title: 'Finshots Daily',
                description: "3 Min reads that are fun, insightful and easy to understand.<br> This is Finshots as you know it."
            },
            {
                link: '/markets/',
                id: 'markets',
                title: 'Finshots Markets',
                description: "5 min articles focused on the Indian capital market ecosystem.<br> We'll have a new story for you each week."
            },
            {
                link: '/money/',
                id: 'money',
                title: 'Finshots Money',
                description: "3 min articles that will help you kickstart your personal finance journey."
            },
            {
                link: '/infographic/',
                id: 'infographic',
                title: '',
                description: ''
            }
        ];

        if (window.location.pathname !== '/') {
            const index = links.findIndex((i => window.location.pathname.includes(i.link)))
            document.getElementById(`${links[index].id}`).style.display = 'none'; // removing the current nav item

            if (index === 3)
                document.getElementsByClassName('site-header-content')[0].style.padding = 0;
            else {
                document.getElementById('site-title').innerHTML = links[index].title;
                document.getElementById('site-description').innerHTML = links[index].description;
            }
        }
    }
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("overlay").style.display = "block";

        setTimeout(function () {
            jQuery(function ($) {
                $('#mobile-item a').css({
                    display: 'block'
                });
                $('[id^=mobile-item]').addClass('mobile-item-fadeIn');
            });
        }, 300)
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";

        jQuery(function ($) {
            $('#mobile-item a').css({
                display: 'none'
            });
            $('[id^=mobile-item]').removeClass('mobile-item-fadeIn');
        });

        document.getElementById("overlay").style.transition = ".5s ease-out";
        setTimeout(function () {
            document.getElementById("overlay").style.display = "none";
        }, 500)
    }
    var links = document.querySelectorAll('a');
    links.forEach((link) => {
        var a = new RegExp('/' + window.location.host + '/');
        if(!a.test(link.href)) {
          	link.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                window.open(link.href, '_blank');
            });
        }
    });
    
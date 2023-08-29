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

if (!(document.cookie.match("(^|;)\\s*" + "MailShotsPopupSubcribed" +
                "\\s*=\\s*([^;]+)")?.pop() || document.cookie.match("(^|;)\\s*" +
                    "MailShotsPopupClosed" + "\\s*=\\s*([^;]+)")?.pop()) || "") {
                window.addEventListener("scroll", () => {
                    let scrollTop = window.scrollY;
                    let docHeight = document.body.offsetHeight;
                    let winHeight = window.innerHeight;
                    let scrollPercent = Math.round((scrollTop / (docHeight - winHeight) * 100))
                    if (scrollPercent > 40) {
                        document.getElementById("subscribe-popup-parent").style.visibility =
                            "visible";
                    }
                })
            }
            function closePopup() {
                document.getElementById("subscribe-popup-parent").style.display = "none";
            }
            function setCookie(name, days) {
                const d = new Date(); d.setTime(d.getTime()
                    + days * 24 * 60 * 60 * 1000); document.cookie = `${name}=yes;
        expires=${d.toUTCString()}; path=/`;
            }
            document
                .getElementById("mailshots-embedded-subscribe-form")
                .addEventListener("submit", function () {
                    closePopup();
                    setCookie("MailShotsPopupSubcribed", 15);
                });
            function closeButton() {
                closePopup(); setCookie("MailShotsPopupClosed", 30);
            }
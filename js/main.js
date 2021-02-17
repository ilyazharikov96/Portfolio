document.addEventListener('DOMContentLoaded', () => {
    $('.promo__title').typeIt({});

    const socialIcons = document.querySelectorAll('.social-item'),
          smoothLinks = document.querySelectorAll('a[href^="#"]');
          arrow = document.querySelector('.arrow__img')

    socialIcons.forEach((item, index) => {
        function showIcon(icon, time) {
            setTimeout(() => {
                icon.classList.add('active')
            }, time)
        }

        index === 0 ? showIcon(item, 3000) :
        index === 1 ? showIcon(item, 3700) : showIcon(item, 4300)

        showIcon(arrow, 4900)
    })

    const smoothScroll = () => {
        for (let smoothLink of smoothLinks) {
            smoothLink.addEventListener('click', function (e) {
                e.preventDefault();
                const id = smoothLink.getAttribute('href');
    
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        };
    }

    smoothScroll()
})
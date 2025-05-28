document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    // Inhouse Slider
    if ($(".inhuse_sldr").length) {
        var $slider = $('.inhuse_sldr');
        $slider.each(function () {
            var $sliderParent = $(this).parents(".in_huse_mmbr_sldr_wrppr");
            var slideControls = $sliderParent.find('.sldr_custom_dots_hldr');
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '17.65rem',
                prevArrow: $sliderParent.find('.sldr_custm_arrw .arrw_prev '),
                nextArrow: $sliderParent.find('.sldr_custm_arrw .arrw_next'),
                customPaging: function (slider, i) {
                    return '<button>' + (i + 1 < 10 ? '0' + (i + 1) : i + 1) + '</button>';
                },
                appendDots: slideControls,
                dots: true,
                dotsClass: 'slick-dots sldr_custom_dots',
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            centerPadding: '6.667rem',
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            centerPadding: '4rem',
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '2rem',
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: false,
                            centerPadding: '0',
                        }
                    }
                ]
            });

        });
    }

    //  Members Slider Append Arrows
    if ($(".box_wrppr").length) {
        let tl = gsap.timeline();
        $(".box_wrppr").each(function (numSlick, sliderParent) {
            let slider2 = $(sliderParent).find('.mmbr_sldr'),
                slider1 = $(sliderParent).find('.mmbr_img_sldr');

            var slideControls = $(sliderParent).find('.sldr_custom_dots_hldr');

            const sl2 = slider2.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                fade: true,
                appendDots: slideControls,
                prevArrow: $(sliderParent).find('.sldr_custm_arrw .arrw_prev '),
                nextArrow: $(sliderParent).find('.sldr_custm_arrw .arrw_next'),
                lazyLoad: 'progressive',
                dotsClass: 'slick-dots sldr_custom_dots',
                customPaging: function (slider, i) {
                    return '<button>' + (i + 1 < 10 ? '0' + (i + 1) : i + 1) + '</button>';
                },
                cssEase: 'ease-in',
                speed: 500,
                asNavFor: slider1,
            });

            const sl1 = slider1.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                lazyLoad: 'progressive',
                cssEase: 'ease-in',
                dots: false,
                asNavFor: slider2,
            });
        });
    }

    //  Members Slider Append Arrows
    if ($(".indvdl_innr_sldr_wrppr").length) {
        $(".indvdl_innr_sldr_wrppr").each(function (numSlick, sliderParent) {
            slider1 = $(sliderParent).find('.innr_sldr');
            var slideControls = $(sliderParent).find('.sldr_custom_dots_hldr');
            const sl2 = slider1.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                fade: true,
                appendDots: slideControls,
                prevArrow: $(sliderParent).find('.sldr_custm_arrw .arrw_prev '),
                nextArrow: $(sliderParent).find('.sldr_custm_arrw .arrw_next'),
                customPaging: function (slider, i) {
                    return '<button>' + (i + 1 < 10 ? '0' + (i + 1) : i + 1) + '</button>';
                },
                lazyLoad: 'progressive',
                dotsClass: 'slick-dots sldr_custom_dots',
                cssEase: 'ease-in',
                speed: 500,
            });
        });
    }

    //  Sites Slider Append Arrows
    if ($(".indvdl_stes_sldr_wrppr").length) {
        $(".indvdl_stes_sldr_wrppr").each(function (numSlick, sliderParent) {
            slider1 = $(sliderParent).find('.stes_dtls_sldr');
            var slideControls = $(sliderParent).find('.sldr_custom_dots_hldr');
            const sl2 = slider1.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                fade: false,
                appendDots: slideControls,
                prevArrow: $(sliderParent).find('.sldr_custm_arrw .arrw_prev '),
                nextArrow: $(sliderParent).find('.sldr_custm_arrw .arrw_next'),
                customPaging: function (slider, i) {
                    return '<button>' + (i + 1 < 10 ? '0' + (i + 1) : i + 1) + '</button>';
                },
                lazyLoad: 'progressive',
                dotsClass: 'slick-dots sldr_custom_dots',
                cssEase: 'ease-in',
                centerMode: false,
                speed: 500,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
        });
    }

    // Eco Slider
    if ($(".eco_sldr").length) {
        var $slider = $('.eco_sldr');
        $slider.each(function () {
            var $sliderParent = $(this).parents(".mmbr_lft_sldr_wrppr");
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $sliderParent.find('.sldr_custm_arrw .arrw_prev '),
                nextArrow: $sliderParent.find('.sldr_custm_arrw .arrw_next'),
                dots: false,
                infinite: true,
            });

        });
    }

    //  Members Slider
    function initializeSliderAlt(sliderSelector, options, wrapperSelector) {
        let slider = $(wrapperSelector).find(sliderSelector);
        if (!slider.hasClass('slick-initialized')) {
            slider.slick(options);
        }
    }

    function handleResponsiveSliderBehaviorAlt(wrapperSelector) {
        let slider3 = $(wrapperSelector).find('.mmbr_sldr_tab_lstng');
        let slideCount = slider3.find('.mmbr_sldr_tab_item').length;
        let dataSlideNum = parseInt(slider3.data('slide-num'), 10);

        if (slideCount < dataSlideNum) {
            unslickThumbnailSliderAlt(wrapperSelector);
            initializeMainSlidersAlt(wrapperSelector);
        } else {
            initializeMainSlidersAlt(wrapperSelector);
            initializeThumbnailSliderAlt(wrapperSelector);
        }
    }

    function unslickThumbnailSliderAlt(wrapperSelector) {
        let slider3 = $(wrapperSelector).find('.mmbr_sldr_tab_lstng');
        if (slider3.hasClass('slick-initialized')) {
            slider3.slick('unslick');
        }
    }

    function initializeMainSlidersAlt(wrapperSelector) {
        const isMobile = window.innerWidth <= 1199;
        const $wrapper = $(wrapperSelector);
        initializeSliderAlt('.mmbr_img_sldr', {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            lazyLoad: 'progressive',
            cssEase: 'ease-in',
            dots: false,
            infinite: true,
            speed: 500,
        }, wrapperSelector);

        initializeSliderAlt('.mmbr_optn_txt_sldr', {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            lazyLoad: 'progressive',
            cssEase: 'ease-in',
            infinite: true,
            speed: 500,
            asNavFor: $wrapper.find('.mmbr_img_sldr'),
            prevArrow: $wrapper.find('.sldr_custm_arrw .arrw_prev'),
            nextArrow: $wrapper.find('.sldr_custm_arrw .arrw_next'),
            dots: isMobile,
            appendDots: isMobile ? $wrapper.find('.sldr_custom_dots_hldr') : null,
            dotsClass: 'slick-dots sldr_custom_dots',
            customPaging: function (_, i) {
                let num = i + 1;
                return '<button>' + (num < 10 ? '0' + num : num) + '</button>';
            }
        }, wrapperSelector);
    }

    function initializeThumbnailSliderAlt(wrapperSelector) {
        const $wrapper = $(wrapperSelector);
        initializeSliderAlt('.mmbr_sldr_tab_lstng', {
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: 'progressive',
            cssEase: 'ease-in',
            focusOnSelect: true,
            dots: false,
            infinite: true,
            speed: 500,
            asNavFor: $wrapper.find('.mmbr_img_sldr, .mmbr_optn_txt_sldr'),
        }, wrapperSelector);

        $wrapper.find('.sldr_custm_arrw .arrw_prev').on('click', function () {
            $wrapper.find('.mmbr_sldr_tab_lstng').slick('slickPrev');
        });
        $wrapper.find('.sldr_custm_arrw .arrw_next').on('click', function () {
            $wrapper.find('.mmbr_sldr_tab_lstng').slick('slickNext');
        });
    }

    function setThumbnailNavigationAlt(wrapperSelector) {
        let slider3 = $(wrapperSelector).find('.mmbr_sldr_tab_lstng');
        let slider2 = $(wrapperSelector).find('.mmbr_optn_txt_sldr');

        slider3.find('.mmbr_sldr_tab_item').on('click', function (e) {
            e.preventDefault();
            slider3.find('.mmbr_sldr_tab_item').removeClass('active');
            let idx = $(this).data('slide') - 1;
            $(this).addClass('active');
            if (slider2.hasClass('slick-initialized')) {
                slider2.slick('slickGoTo', idx);
            }
        });

        slider2.on('beforeChange', function (_, slick, current, next) {
            slider3.find('.mmbr_sldr_tab_item').removeClass('active')
                .eq(next).addClass('active');
        });
    }

    document.querySelectorAll('.mmbr_sldr_tab_hldr').forEach(holder => {
        holder.querySelectorAll('.mmbr_sldr_tab_item').forEach((item, i) => {
            item.setAttribute('data-slide', i + 1);
        });
    });

    document.querySelectorAll('.mmbr_box').forEach(box => {
        handleResponsiveSliderBehaviorAlt(box);
        setThumbnailNavigationAlt(box);
        $(box).find('.mmbr_sldr_tab_lstng .mmbr_sldr_tab_item').first().addClass('active');
    });

    let wasMobile = window.innerWidth <= 1199;
    window.addEventListener('resize', () => {
        let isMobile = window.innerWidth <= 1199;
        if (isMobile !== wasMobile) {
            document.querySelectorAll('.mmbr_box').forEach(box => {
                $(box).find('.mmbr_img_sldr, .mmbr_optn_txt_sldr').slick('unslick');
                unslickThumbnailSliderAlt(box);
                handleResponsiveSliderBehaviorAlt(box);
                setThumbnailNavigationAlt(box);
                $(box).find('.mmbr_sldr_tab_lstng .mmbr_sldr_tab_item').first().addClass('active');
            });
            wasMobile = isMobile;
        }
    });

    function initializeSlider(sliderSelector, options, wrapperSelector) {
        const slider = $(wrapperSelector).find(sliderSelector);
        if (!slider.hasClass('slick-initialized')) {
            slider.slick(options);
        }
    }

    function getBreakpointSlides($thumbSldr, winWidth) {
        // Define your custom breakpoints from largest to smallest
        const breakpoints = [
            { max: Infinity, key: 'slideNumDesktop' },
            { max: 1199, key: 'slideNumTablet' },
            { max: 991, key: 'slideNumSmallTablet' },
            { max: 767, key: 'slideNumLargeMobile' },
            { max: 575, key: 'slideNumMobile' }
        ];

        let slidesToShow = 0;
        for (const bp of breakpoints) {
            const val = parseInt($thumbSldr.data(bp.key), 10);
            if (winWidth <= bp.max && !isNaN(val)) {
                slidesToShow = val;
            }
        }
        return slidesToShow;
    }

    function handleResponsiveSliderBehavior(wrapperSelector) {
        const $wrapper = $(wrapperSelector);
        const $thumbSldr = $wrapper.find('.tem_thmbnl_sldr');
        const slideCount = $thumbSldr.find('.tem_thmbnl_item').length;
        const winWidth = $(window).width();

        const slidesToShow = getBreakpointSlides($thumbSldr, winWidth);

        initializeMainSliders(wrapperSelector);

        if ($thumbSldr.hasClass('slick-initialized')) {
            $thumbSldr.slick('unslick');
        }

        if (slideCount > slidesToShow) {
            initializeThumbnailSlider(wrapperSelector, slidesToShow);
        }
    }

    function initializeMainSliders(wrapperSelector) {
        initializeSlider('.img_sldr', {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            lazyLoad: 'progressive',
            cssEase: 'ease-in',
            dots: false,
            infinite: true,
            speed: 500,
        }, wrapperSelector);

        initializeSlider('.txt_tm_sldr', {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            fade: true,
            prevArrow: $(wrapperSelector).find('.sldr_custm_arrw .arrw_prev'),
            nextArrow: $(wrapperSelector).find('.sldr_custm_arrw .arrw_next'),
            lazyLoad: 'progressive',
            cssEase: 'ease-in',
            infinite: true,
            speed: 500,
            asNavFor: $(wrapperSelector).find('.img_sldr'),
        }, wrapperSelector);
    }

    function initializeThumbnailSlider(wrapperSelector, slidesToShow) {
        const $thumbSldr = $(wrapperSelector).find('.tem_thmbnl_sldr');

        initializeSlider('.tem_thmbnl_sldr', {
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: 'progressive',
            cssEase: 'ease-in',
            focusOnSelect: true,
            dots: false,
            infinite: true,
            speed: 500,
            asNavFor: $(wrapperSelector).find('.img_sldr, .txt_tm_sldr'),
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: Math.min(slidesToShow, 6)
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: Math.min(slidesToShow, 5)
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: Math.min(slidesToShow, 4)
                    }
                }
            ]
        }, wrapperSelector);

        $(wrapperSelector).find('.sldr_custm_arrw .arrw_prev')
            .off('click')
            .on('click', () => $thumbSldr.slick('slickPrev'));
        $(wrapperSelector).find('.sldr_custm_arrw .arrw_next')
            .off('click')
            .on('click', () => $thumbSldr.slick('slickNext'));
    }

    function setThumbnailNavigation(wrapperSelector) {
        const $thumbSldr = $(wrapperSelector).find('.tem_thmbnl_sldr');
        const $txtSldr = $(wrapperSelector).find('.txt_tm_sldr');

        $thumbSldr.on('click', '.tem_thmbnl_item', function (e) {
            e.preventDefault();
            $thumbSldr.find('.tem_thmbnl_item').removeClass('active');
            const index = $(this).data('slide') - 1;
            $(this).addClass('active');
            if ($txtSldr.hasClass('slick-initialized')) {
                $txtSldr.slick('slickGoTo', index);
            }
        });

        $txtSldr.on('beforeChange', function (ev, slick, current, next) {
            $thumbSldr.find('.tem_thmbnl_item').removeClass('active')
                .eq(next).addClass('active');
        });
    }

    $('.tem_box_wrppr').each(function () {
        const wrapper = this;
        handleResponsiveSliderBehavior(wrapper);
        setThumbnailNavigation(wrapper);
        $(window).on('resize', () => handleResponsiveSliderBehavior(wrapper));
        $(wrapper).find('.tem_thmbnl_sldr .tem_thmbnl_item').eq(0).addClass('active');
    });


    //  Contact Piller Slider Append Arrows
    const wrappers = document.querySelectorAll('.cntct_sldr_outr');

    wrappers.forEach(wrapper => {
        const remVal = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const items = wrapper.querySelectorAll('.cntct_box_item');
        const buttons = wrapper.querySelectorAll('.pllr_bttn');

        function activate(index) {
            buttons.forEach((btn, i) => {
                const item = items[i];
                const color = btn.getAttribute('data-bg-color') || '';

                if (i === index) {
                    item.classList.add('active');
                    item.style.maxHeight = `${item.scrollHeight / remVal}rem`;
                    wrapper.style.backgroundColor = color;
                    btn.classList.add('active');
                    btn.style.backgroundColor = color;
                } else {
                    item.classList.remove('active');
                    item.style.maxHeight = '0px';
                    btn.classList.remove('active');
                    btn.style.backgroundColor = '';
                }
            });
        }
        buttons.forEach((btn, i) => {
            btn.addEventListener('click', () => activate(i));
        });
        if (buttons.length) activate(0);
    });

    let dataWrapper = document.querySelectorAll('.thmbnl_sldr_wrppr');
    dataWrapper.forEach((elem, i) => {
        let dataSlideItem = elem.querySelectorAll('.thmbnl_sldr_wrppr .tem_thmbnl_item');
        dataSlideItem.forEach((el, i) => {
            el.setAttribute('data-slide', i + 1);
        });
    })


    //  Incubators Lab Slider Append Arrows
    if ($(".inbtrs_avlble_wrppr").length) {
        $(".inbtrs_avlble_wrppr").each(function (numSlick, sliderParent) {
            slider1 = $(sliderParent).find('.inbtrs_lab_sldr');
            var slideControls = $(sliderParent).find('.sldr_custom_dots_hldr');
            const sl2 = slider1.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                appendDots: slideControls,
                prevArrow: $(sliderParent).find('.sldr_custm_arrw .arrw_prev '),
                nextArrow: $(sliderParent).find('.sldr_custm_arrw .arrw_next'),
                customPaging: function (slider, i) {
                    return '<button>' + (i + 1 < 10 ? '0' + (i + 1) : i + 1) + '</button>';
                },
                lazyLoad: 'progressive',
                dotsClass: 'slick-dots sldr_custom_dots',
                cssEase: 'ease-in',
                speed: 500,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1
                        }
                    }

                ]
            });
        });
    }
    // Inhouse Members Slider
    document.querySelectorAll('.huse_sldr_wrppr').forEach((wrapper) => {
        const swiperEl = wrapper.querySelector('.huse_mmbr_sldr');
        const fractionCt = wrapper.querySelector('.sldr_pgntn');

        // Read from the slider itself, with cascading fallbacks
        const perMobile = parseInt(swiperEl.dataset.slidesMobile, 10) || 1;
        const perSm = parseInt(swiperEl.dataset.slidesSm, 10) || perMobile;
        const perMd = parseInt(swiperEl.dataset.slidesMd, 10) || perSm;
        const perLg = parseInt(swiperEl.dataset.slidesLg, 10) || perMd;

        new Swiper(swiperEl, {
            slidesPerView: perMobile,
            spaceBetween: 16,
            loop: true,
            navigation: {
                nextEl: wrapper.querySelector('.arrw_next'),
                prevEl: wrapper.querySelector('.arrw_prev'),
            },
            pagination: {
                el: wrapper.querySelector('.sldr_prgrss_bg'),
                type: 'progressbar',
            },
            breakpoints: {
                576: { slidesPerView: perSm },
                768: { slidesPerView: perMd },
                1200: { slidesPerView: perLg, spaceBetween: 0 },
            },
            on: {
                init() {
                    const total = swiperEl.querySelectorAll('.swiper-slide').length;
                    fractionCt.textContent = `${this.realIndex + 1} / ${total}`;
                    this.on('slideChange', () => {
                        fractionCt.textContent = `${this.realIndex + 1} / ${total}`;
                    });
                }
            }
        });
    });
    const invisibleElements = document.querySelectorAll('.lab_sldr_wrppr.w-condition-invisible');

    invisibleElements.forEach(el => {
        el.remove();
    });

    const invisibleElements2 = document.querySelectorAll('.accrd_item.w-condition-invisible');

    invisibleElements2.forEach(el => {
        el.remove();
    });
    // Lab Slider
    let labWrppr = document?.querySelectorAll('.lab_sldr_wrppr');
    if (labWrppr.length > 0) {
        labWrppr?.forEach((el) => {
            const swiperElement = el?.querySelector('.lab_sldr');
            const fractionContainer = el?.querySelector('.sldr_pgntn_alt');

            const swiper1 = new Swiper(swiperElement, {
                slidesPerView: 1,
                spaceBetween: 16,
                loop: true,
                navigation: {
                    nextEl: el?.querySelector(".arrw_next"),
                    prevEl: el?.querySelector(".arrw_prev"),
                },
                pagination: {
                    el: el?.querySelector('.sldr_prgrss_bg'),
                    type: 'progressbar',
                },
                on: {
                    init: function () {
                        const totalSlides = swiperElement?.querySelectorAll('.swiper-slide').length;
                        const currentSlide = this.realIndex + 1;

                        fractionContainer.innerHTML = `${currentSlide} / ${totalSlides}`;

                        this.on('slideChange', function () {
                            const currentSlide = this.realIndex + 1;
                            fractionContainer.innerHTML = `${currentSlide} / ${totalSlides}`;
                        });
                    },
                    slideChange: function () {
                        const totalSlides = swiperElement?.querySelectorAll('.swiper-slide').length;
                        const currentSlide = this.realIndex + 1;
                        fractionContainer.innerHTML = `${currentSlide} / ${totalSlides}`;
                    }
                },
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }
            });
        });
    }


    // Header Animation
    // let menuHeader = document.querySelector('.main_header');
    // let lastScrollPosY = window.pageYOffset;
    // let scrollThreshold = 8;

    // let stickyFunc = () => {
    //     let scrollPosY = window.pageYOffset;

    //     if (scrollPosY > 0) {
    //         menuHeader.classList.add('sticky_header');
    //     } else {
    //         menuHeader.classList.remove('sticky_header');
    //     }

    //     if (Math.abs(scrollPosY - lastScrollPosY) > scrollThreshold) {
    //         if (scrollPosY > lastScrollPosY) {
    //             menuHeader.classList.remove('scrollup');
    //             menuHeader.classList.add('scrolldown');
    //         } else if (scrollPosY < lastScrollPosY) {
    //             menuHeader.classList.remove('scrolldown');
    //             menuHeader.classList.add('scrollup');
    //         }

    //         lastScrollPosY = scrollPosY;
    //     }
    // };

    // stickyFunc();

    // window.addEventListener('scroll', stickyFunc);

    // Dark Mode / Light Mode & Clone Right Header Part & Custom Menu
    function initializeThemeButton(themeButton) {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark_mode');
            themeButton.classList.add('dark_mode_active');
        }

        themeButton.addEventListener('click', () => {
            if (window.sc && typeof window.sc.themeChnage === 'function') {
                window.sc.themeChnage();
            }
            const allThemeButtons = document.querySelectorAll('.theme_bttn');
            allThemeButtons.forEach((btn) => {
                btn.classList.toggle('dark_mode_active');
            });

            document.body.classList.toggle('dark_mode');
            const darkModeStatus = document.body.classList.contains('dark_mode') ? 'enabled' : 'disabled';
            localStorage.setItem('darkMode', darkModeStatus);
        });
    }

    function initializeHamButton(hamButton) {
        const htmlElement = document.querySelector('html');
        const darkToggleMenu = document.querySelector('.menu_dark');
        hamButton.addEventListener('click', () => {
            const allHamButtons = document.querySelectorAll('.ham_bttn_custom');
            allHamButtons.forEach((btn) => {
                btn.classList.toggle('darkMenu_bttn_active');
            });

            const isDarkMenuActive = document.body.classList.toggle('darkMenu_active');
            htmlElement.classList.toggle('darkMenu_active', isDarkMenuActive);
            darkToggleMenu.classList.toggle('darkMenu_active_open', isDarkMenuActive);
            removeDropdownOpenClasses();
        });
    }

    function removeDropdownOpenClasses() {
        document.querySelectorAll('.menu_drpdwn .w-dropdown-toggle.w--open').forEach((element) => {
            element.classList.remove('w--open');
        });

        document.querySelectorAll('.submenu_drpdwn .w-dropdown-list.w--open').forEach((element) => {
            element.classList.remove('w--open');
        });
    }

    function initializeAllThemeButtons() {
        const themeButtons = document.querySelectorAll('.theme_bttn');
        themeButtons.forEach(initializeThemeButton);
    }
    function initializeAllHamButtons() {
        const hamButtons = document.querySelectorAll('.ham_bttn_custom');
        hamButtons.forEach(initializeHamButton);
    }
    initializeAllHamButtons();
    initializeAllThemeButtons();

    const rightHeader = document.querySelector('.hdr_rght_part');
    const subMenuDropDown = document.querySelectorAll('.submenu_drpdwn');
    subMenuDropDown.forEach((el) => {
        const submenuInner = el.querySelector('.submenu_inner_hdr_wrppr');
        if (submenuInner) {
            const rightHeaderClone = rightHeader.cloneNode(true);
            submenuInner.appendChild(rightHeaderClone);
        }

        const clonedThemeButton = el.querySelector('.theme_bttn');
        if (clonedThemeButton) {
            initializeThemeButton(clonedThemeButton);
        }

        const clonedHamButton = el.querySelector('.ham_bttn_custom');
        if (clonedHamButton) {
            initializeHamButton(clonedHamButton);
        }
    });

    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function (node) {
                    if (node.matches && node.matches('.theme_bttn')) {
                        initializeThemeButton(node);
                    }

                    if (node.matches && node.matches('.ham_bttn_custom')) {
                        initializeHamButton(node);
                    }

                    if (node.matches && node.matches('.submenu_drpdwn')) {
                        const submenuInner = node.querySelector('.submenu_inner_hdr_wrppr');
                        if (submenuInner) {
                            const rightHeaderClone = rightHeader.cloneNode(true);
                            submenuInner.appendChild(rightHeaderClone);
                        }

                        const clonedThemeButton = node.querySelector('.theme_bttn');
                        if (clonedThemeButton) {
                            initializeThemeButton(clonedThemeButton);
                        }

                        const clonedHamButton = node.querySelector('.ham_bttn_custom');
                        if (clonedHamButton) {
                            initializeHamButton(clonedHamButton);
                        }
                    }
                });
            }
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // Custom Menu With Submenu
    (function () {
        const BREAK = 1025;
        const menuItems = document.querySelectorAll('[data-menu]');
        const subMenus = document.querySelectorAll('[data-menu-open]');
        let activeKey = null;

        function toggleSubMenu(key, action) {
            const menu = document.querySelector(`[data-menu="${key}"]`);
            const submenu = document.querySelector(`[data-menu-open="${key}"]`);
            menu && menu.classList[action]('submenu_active');
            submenu && submenu.classList[action]('submenu_active');
        }

        function open(key) {
            if (activeKey && activeKey !== key) toggleSubMenu(activeKey, 'remove');
            toggleSubMenu(key, 'add');
            activeKey = key;
        }

        function close(key) {
            toggleSubMenu(key, 'remove');
            if (activeKey === key) activeKey = null;
        }

        menuItems.forEach(el => {
            el.addEventListener('mouseenter', e => {
                if (window.innerWidth < BREAK) return;
                const key = e.currentTarget.dataset.menu;
                open(key);
            });
        });

        subMenus.forEach(sm => {
            const key = sm.dataset.menuOpen;
            sm.addEventListener('mouseleave', e => {
                if (window.innerWidth < BREAK) return;
                close(key);
            });
        });

        menuItems.forEach(el => {
            el.addEventListener('click', e => {
                if (window.innerWidth >= BREAK) return;
                e.preventDefault();
                const key = e.currentTarget.dataset.menu;
                if (activeKey === key) close(key);
                else open(key);
            });
        });

        document.addEventListener('click', e => {
            if (window.innerWidth >= BREAK) return;
            if (!e.target.closest('.mnu_item') && !e.target.closest('.submenu_drpdwn')) {
                if (activeKey) close(activeKey);
            }
        });

        window.addEventListener('resize', () => {
            if (activeKey) {
                if ((window.innerWidth < BREAK && document.querySelector('.submenu_active')) ||
                    (window.innerWidth >= BREAK && document.querySelector('.submenu_active'))) {
                    close(activeKey);
                }
            }
        });
    })();




    // Dark Menu Animation
    let menuRow = document.querySelectorAll('.menu_drk_row');

    let tl2 = gsap.timeline({
        repeat: 0,
        defaults: { ease: 'ease-in' }
    });

    let indvdlLeftDarkLink, spotBox, spotLinkItem, indvdlTitle;

    menuRow.forEach((el) => {
        let totatlTime = 0.6;
        indvdlLeftDarkLink = el.querySelectorAll('.indvdl_drk_menu .drk_menu_lnk_item');
        spotBox = el.querySelectorAll('.sptlght_box');
        spotLinkItem = el.querySelectorAll('.sptlght_box .drk_menu_lnk_item');
        indvdlTitle = el.querySelectorAll('.drk_menu_indvdl_ttle');

        function titleSplit() {
            indvdlTitle.forEach((titleEl) => {
                Splitting({
                    target: titleEl,
                    by: 'chars',
                });

                gsap.set(titleEl, { opacity: 0 });

                let chars = titleEl.querySelectorAll('.char');
                chars.forEach((char) => {
                    gsap.set(char, {
                        display: 'inline-block',
                        transform: 'perspective(1000px)',
                        opacity: 0,
                        transformOrigin: 'center center',
                        transformStyle: 'preserve-3d',
                    });
                });
                gsap.to(titleEl, {
                    opacity: 1,
                    duration: 0.2,
                });

                gsap.to(chars, {
                    opacity: 1,
                    transform: 'perspective(1000px)',
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    yPercent: 0,
                    stagger: 0.05,
                    duration: 0.2,
                });
            });
        }

        gsap.set([indvdlLeftDarkLink, spotLinkItem, spotBox], {
            opacity: 0,
            y: '20%',
        });

        tl2
            .to(indvdlLeftDarkLink, totatlTime, {
                opacity: 1,
                y: '0',
                stagger: 0.1,
            })
            .to(spotBox, totatlTime, {
                opacity: 1,
                y: '0',
                stagger: 0.1,
            }, '<')
            .to(spotLinkItem, {
                opacity: 1,
                y: '0',
                stagger: 0.1,
            }, '<')
            .eventCallback("onStart", () => {
                setTimeout(() => {
                    titleSplit()
                }, 300);

            });
    });

    tl2.pause();

    let hameCus = document.querySelectorAll('.ham_bttn_custom');
    hameCus.forEach((elem) => {
        elem.addEventListener('click', () => {
            gsap.set('.drk_menu_indvdl_ttle', { opacity: 0 });
            gsap.set('.drk_menu_indvdl_ttle .char', { opacity: 0, y: '20%' });
            gsap.set([indvdlLeftDarkLink, spotLinkItem, spotBox], {
                opacity: 0,
                y: '20%',
            });

            tl2.restart();
        });
    });

    // Submenu Text Animation
    let subLinkBox = document.querySelectorAll('.submnu_scnd_lnk_box');
    const mq = window.matchMedia("(min-width: 1025px)");
    function initSubmenuHover() {
        subLinkBox.forEach(elem => {
            const subTextBox = elem.querySelector('.mnu_sub_txt_box');
            const textMaxHeight = subTextBox.scrollHeight;

            gsap.set(subTextBox, { maxHeight: 0, y: 100 });

            function expand() {
                gsap.to(subTextBox, {
                    maxHeight: textMaxHeight,
                    y: 0,
                    duration: 0.3,
                    ease: 'power1.out',
                });
            }

            function collapse() {
                gsap.to(subTextBox, {
                    maxHeight: 0,
                    y: 100,
                    duration: 0.3,
                    ease: 'power1.in',
                });
            }

            elem.addEventListener('mouseenter', expand);
            elem.addEventListener('mouseleave', collapse);

            elem._expand = expand;
            elem._collapse = collapse;
        });
    }

    function destroySubmenuHover() {
        subLinkBox.forEach(elem => {
            elem.removeEventListener('mouseenter', elem._expand);
            elem.removeEventListener('mouseleave', elem._collapse);
        });
    }
    if (mq.matches) {
        initSubmenuHover();
    }
    mq.addEventListener('change', e => {
        if (e.matches) {
            initSubmenuHover();
        } else {
            destroySubmenuHover();
        }
    });

    // Single Page Animation
    if ($('[data-anim="parent-anim-sec"]').length) {
        setTimeout(() => {
            if ($('[data-anim="parent-anim-sec"]').length) {
                const parentAnimation = document.querySelectorAll('[data-anim="parent-anim-sec"]');
                parentAnimation.forEach((elem, index) => {
                    // Create a timeline for the animations of child elements
                    let moveUpElem = elem.querySelectorAll("[data-move]");
                    let slideElem = elem.querySelectorAll("[data-slide]");
                    let growElem = elem.querySelectorAll("[data-grow]");
                    let flipElem = elem.querySelectorAll("[data-flip]");
                    let shtrElem = elem.querySelectorAll("[data-shutter]");

                    let moveTl = gsap.timeline({ paused: true });
                    let slideTl = gsap.timeline({ paused: true });
                    let growTl = gsap.timeline({ paused: true });
                    let flipTl = gsap.timeline({ paused: true });
                    let shutterTl = gsap.timeline({ paused: true });

                    // Set animations for moveUpElem
                    moveUpElem.forEach(function (elem2) {
                        if (elem2.dataset.move == "up") {
                            gsap.set(elem2, { y: 50, opacity: 0 });
                            moveTl.to(elem2, { ease: "none", duration: 0.2, y: 0, opacity: 1 });
                        }
                        if (elem2.dataset.move == "down") {
                            gsap.set(elem2, { y: -50, opacity: 0 });
                            moveTl.to(elem2, { ease: "none", duration: 0.2, y: 0, opacity: 1 });
                        }
                        if (elem2.dataset.move == "scale-up") {
                            gsap.set(elem2, { y: 50, scale: 0 });
                            moveTl.to(elem2, { ease: "Power3.easeOut", duration: 1, scale: 1, opacity: 1, y: 0 });
                        }
                    });

                    // Set animations for slideElem
                    slideElem.forEach(function (elem2) {
                        if (elem2.dataset.slide == "right") {
                            gsap.set(elem2, { x: -100, opacity: 0 });
                            slideTl.to(elem2, { ease: "Power3.easeOut", duration: 1, opacity: 1, x: 0 });
                        }
                        if (elem2.dataset.slide == "left") {
                            gsap.set(elem2, { x: 100, opacity: 0 });
                            slideTl.to(elem2, { ease: "Power3.easeOut", duration: 1, opacity: 1, x: 0 });
                        }
                    });

                    // Set animations for growElem
                    growElem.forEach(function (elem2) {
                        gsap.set(elem2, { scale: 0, opacity: 0 });
                        growTl.to(elem2, { ease: "Power3.easeOut", duration: 1, opacity: 1, scale: 1 });
                    });

                    // Set animations for flipElem
                    flipElem.forEach(function (elem2) {
                        gsap.set(elem2, { rotateY: 90 });
                        flipTl.to(elem2, { ease: "Power3.easeOut", duration: 1, opacity: 1, rotateY: 0 });
                    });

                    // Set animations for shutterElem
                    shtrElem.forEach(function (elem2) {
                        if (elem2.dataset.shutter == "right") {
                            gsap.set(elem2, { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 1 });
                            shutterTl.to(elem2, { ease: "Power3.easeOut", duration: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
                        }
                        if (elem2.dataset.shutter == "left") {
                            gsap.set(elem2, { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", opacity: 1 });
                            shutterTl.to(elem2, { ease: "Power3.easeOut", duration: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
                        }
                        if (elem2.dataset.shutter == "center") {
                            gsap.set(elem2, { clipPath: "inset(45% round 0)", opacity: 0 });
                            shutterTl.to(elem2, { ease: "power1.inOut", opacity: 1, duration: 0.5, clipPath: "inset(0% round 0)" });
                        }
                    });
                    ScrollTrigger.create({
                        trigger: elem,
                        start: "top bottom",
                        onEnter: () => {
                            moveTl.play();
                            slideTl.play();
                            growTl.play();
                            flipTl.play();
                            shutterTl.play();
                        },
                    });
                });
            }

            // Additional individual element animations
            let indvlElem = document.querySelectorAll("[data-indv]");
            indvlElem.forEach(function (elem2) {
                let indvlTl = gsap.timeline({ paused: true });
                if (elem2.dataset.indv == "up") {
                    gsap.set(elem2, { y: 50, opacity: 0 });
                    indvlTl.to(elem2, { ease: "none", duration: 0.5, y: 0, opacity: 1 });
                }
                if (elem2.dataset.indv == "down") {
                    gsap.set(elem2, { y: -50, opacity: 0 });
                    indvlTl.to(elem2, { ease: "none", duration: 0.5, y: 0, opacity: 1 });
                }
                if (elem2.dataset.indv == "left") {
                    gsap.set(elem2, { x: 50, opacity: 0 });
                    indvlTl.to(elem2, { ease: "none", duration: 0.5, x: 0, opacity: 1 });
                }
                if (elem2.dataset.indv == "right") {
                    gsap.set(elem2, { x: -50, opacity: 0 });
                    indvlTl.to(elem2, { ease: "none", duration: 0.5, x: 0, opacity: 1 });
                }

                ScrollTrigger.create({
                    trigger: elem2,
                    start: "top 85%",
                    animation: indvlTl,
                });
            });
        }, 500);
    }
    // Swiper Global Variable
    let swiper3 = null;

    // Dynamic REM Value Calculate
    const baseFontPercentage = 1.2;  // Base font size as percentage of viewport width
    const minFontSize = 8;           // Absolute minimum font size (px) for very small screens
    const maxWidth = 1920;           // Maximum width for calculation

    // Function to update the font size based on viewport width  
    function updateRootFontSize() {
        // Get current viewport width    
        let windowWidth = Math.min(window.innerWidth, maxWidth); // Cap at maxWidth

        // Calculate font size as a percentage of viewport width    
        const calculatedSize = (windowWidth * baseFontPercentage) / 100;
        const fontSize = Math.max(calculatedSize, minFontSize);

        // Update the root font size dynamically
        document.documentElement.style.fontSize = `${fontSize}px`;
    }
    function updateSwiperLayout(sw) {
        if (sw && typeof sw.update === 'function') sw.update();
    }

    updateRootFontSize();
    let resizeTimeout;
    window.addEventListener('resize', function () {
        cancelAnimationFrame(resizeTimeout);
        resizeTimeout = requestAnimationFrame(() => {
            updateRootFontSize();
            if (swiper3) {
                setTimeout(() => {
                    updateSwiperLayout(swiper3);
                }, 300);
            }
        });
    });
    window.addEventListener('scroll', () => {
        if (document?.querySelector('.main_header.inner_header')?.classList.contains('sticky_header')) {
            document.body.classList.add('innr_body');
        } else {
            document.body.classList.remove('innr_body');
        }
    });

    // Community/ Directory / Resources Filtering 


    // Checkbox Name Attribute
    if ('[data-name]' !== null) {
        let dataName = document.querySelectorAll('[data-name]');
        dataName.forEach((el) => {
            let dataNameAtt = el.getAttribute('data-name');
            el.setAttribute('name', dataNameAtt);
        })

    }
    // Filter Button Active
    let clickTimeout;

    $(".all_bttn_hlder > .fltrng_bttn").on("click", function () {
        let clickedButton = $(this);

        clearTimeout(clickTimeout);

        clickedButton.addClass("has_active").closest(".slct_fltr_bttn_hlder")
            .find(".cmnty_fltr_bttn_lstng .cmnty_fltr_bttn_item > .fltrng_bttn.has_active")
            .removeClass("has_active");
        clickTimeout = setTimeout(function () {
            clickedButton.addClass("has_active");
            clickedButton.closest(".slct_fltr_bttn_hlder")
                .find(".all_bttn_hlder > .fltrng_bttn.has_active")
                .not(clickedButton)
        }, 100);
    });

    $(".cmnty_fltr_bttn_lstng .cmnty_fltr_bttn_item > .fltrng_bttn").on("click", function () {
        $(this).closest(".slct_fltr_bttn_hlder")
            .find(".all_bttn_hlder > .fltrng_bttn.has_active")
            .removeClass("has_active");
    });
    $(".all_bttn_hlder > .fltrng_bttn").trigger("click");

    $('.avblble_area_nme, .avblble_area_nme a').on('click', (e) => {
        e.preventDefault();
    })

    //Floor Accordion Mode
    const accrdWrppr = document.querySelectorAll('.floor_tab_wrppr');

    accrdWrppr.forEach((wrapper) => {
        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const tabs = wrapper.querySelectorAll('.flloor_tab');
        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === 0);
            tab.style.maxHeight = i === 0
                ? `${tab.scrollHeight / rem}rem`
                : '0px';
        });
        wrapper.querySelectorAll('.flloor_tab').forEach((tab) => {
            tab.querySelectorAll('.flr_swtchng_bttn')[0].classList.add('active');
        });

        wrapper.querySelectorAll('.flr_swtchng_bttn')
            .forEach((btn) => {
                btn.addEventListener('click', () => {
                    const panelBtns = btn.closest('.flloor_tab')
                        .querySelectorAll('.flr_swtchng_bttn');
                    const idx = Array.from(panelBtns).indexOf(btn);

                    tabs.forEach((t) => {
                        t.classList.remove('active');
                        t.style.maxHeight = '0px';
                    });
                    wrapper.querySelectorAll('.flr_swtchng_bttn')
                        .forEach((b) => b.classList.remove('active'));
                    const targetTab = tabs[idx];
                    targetTab.classList.add('active');
                    targetTab.style.maxHeight = `${targetTab.scrollHeight / rem}rem`;
                    tabs.forEach((t) => {
                        t.querySelectorAll('.flr_swtchng_bttn')[idx]
                            .classList.add('active');
                    });
                });
            });
    });


    // Add Id To Each Floor Tab
    let ftab = document.querySelectorAll('.flloor_tab');

    ftab.forEach((el) => {
        const ftBttn = el.querySelectorAll('.floor_zone_bttn');
        const fpanel = el.querySelectorAll('.img_indvdl_box');

        ftBttn.forEach((elem, i) => {
            elem.setAttribute("data-rel", i + 1);

            let dataRelValue = elem.getAttribute("data-rel");

            if (fpanel[i]) {
                fpanel[i].id = dataRelValue;
            }
        });
    });
    // Loop through each .flloor_tab container
    $('.flloor_tab').each(function () {
        let $currentTab = $(this);
        let $buttons = $currentTab.find('.floor_zone_bttn');
        let $images = $currentTab.find('.img_indvdl_box');
        $buttons.on('click', function () {
            let target = $(this).attr('data-rel');
            $buttons.parent().removeClass('active');
            $(this).parent().addClass('active');
            $images.each(function () {
                if ($(this).attr('id') === target) {
                    $(this).fadeIn('slow');
                } else {
                    $(this).hide();
                }
            });
            return false;
        });
        $buttons.eq(0).trigger('click');
    });

    // Lab Bg Height
    if (document.querySelector('.lab_dtls_txt_box .lab_bg_color') !== null) {
        function bgHeight() {
            let labTextBgHeight = document.querySelector('.lab_dtls_txt_box .lab_bg_color').clientHeight;
            document.querySelector('.lab_bg_color.img_lab_color').style.height = labTextBgHeight + 'px';
        }
        bgHeight();
        window.addEventListener("resize", bgHeight);
        window.addEventListener("load", bgHeight);
    }

    // Accordion
    const accrdWrppr2 = document.querySelectorAll('.accrd_wrppr');
    accrdWrppr2.forEach((ele) => {
        let remVal = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const accrdItem = ele.querySelectorAll('.accrd_item');
        const accrdBttn = ele.querySelectorAll('.accrd_button');
        const accrdPanel = ele.querySelectorAll('.accrd_pnl');
        if (accrdItem.length > 0) {
            accrdItem[0].classList.add('active');
            accrdPanel[0].style.maxHeight = `${accrdPanel[0].scrollHeight / remVal}rem`;
        }

        accrdBttn.forEach((el) => {
            const accrdPanel = el.nextElementSibling;
            const panelHeight = accrdPanel.scrollHeight;

            function slideDown() {
                accrdPanel.style.maxHeight = `${panelHeight / remVal}rem`;
            }
            function slideUp() {
                accrdPanel.style.maxHeight = `0px`;
            }

            if (el.parentNode.classList.contains('active')) {
                slideDown();
            } else {
                slideUp();
            }

            el.addEventListener('click', (e) => {
                el.parentNode.classList.toggle('active');
                if (el.parentNode.classList.contains('active')) {
                    slideDown();
                } else {
                    slideUp();
                }
                accrdItem.forEach(element => {
                    if (element !== el.parentNode) {
                        element.classList.remove('active');
                        element.children[0].nextElementSibling.style.maxHeight = `0px`;
                    }
                });
            });
        });
    });

    // Play Button Add Class
    let PlayBttn = document.querySelectorAll(".ply_bttn");
    PlayBttn.forEach((el) => {
        el.addEventListener("click", () => {
            el.closest(".ply_txt_bttn").classList.toggle("play_active");
        })
    })
    // Programmes  Slider
    let prgrmsSldrWrppr = document?.querySelectorAll('.prgrmms_sldr_wrppr');
    if (prgrmsSldrWrppr.length > 0) {
        prgrmsSldrWrppr.forEach((el) => {
            const swiperElement = el?.querySelector('.prgrmss_sldr');
            const fractionContainer = el?.querySelector('.sldr_pgntn');

            const swiper2 = new Swiper(swiperElement, {
                slidesPerView: 2,
                loop: true,
                navigation: {
                    nextEl: el?.querySelector(".arrw_next"),
                    prevEl: el?.querySelector(".arrw_prev"),
                },
                pagination: {
                    el: el?.querySelector('.sldr_prgrss_bg'),
                    type: 'progressbar',
                },
                on: {
                    init: function () {
                        const totalSlides = swiperElement?.querySelectorAll('.swiper-slide').length;
                        const currentSlide = this.realIndex + 1;

                        fractionContainer.innerHTML = `${currentSlide} / ${totalSlides}`;

                        this.on('slideChange', function () {
                            const currentSlide = this.realIndex + 1;
                            fractionContainer.innerHTML = `${currentSlide} / ${totalSlides}`;
                        });
                    },
                    slideChange: function () {
                        const totalSlides = swiperElement?.querySelectorAll('.swiper-slide').length;
                        const currentSlide = this.realIndex + 1;
                        fractionContainer.innerHTML = `${currentSlide} / ${totalSlides}`;
                    }
                },
            });
        });
    }


    // Programme Date Slider
    document.querySelectorAll('.prgrmme_dte_sldr_wrppr').forEach(wrapper => {
        const swiperEl = wrapper.querySelector('.prgrmme_dte_sldr');
        const fractionContainer = wrapper.querySelector('.sldr_pgntn');
        const prevBtn = wrapper.querySelector('.arrw_prev');
        const nextBtn = wrapper.querySelector('.arrw_next');
        const totalSlides = swiperEl.querySelectorAll('.swiper-slide').length;

        const swiper3 = new Swiper(swiperEl, {
            slidesPerView: 'auto',
            loop: true,
            centeredSlides: false,
            spaceBetween: 0,
            speed: 500,
            slideToClickedSlide: true,
            preventClicks: false,
            preventClicksPropagation: false,
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
            pagination: {
                el: wrapper.querySelector('.sldr_prgrss_bg'),
                type: 'progressbar',
            },
            on: {
                init() {
                    this.navigation.init();
                    this.navigation.update();
                    fractionContainer.textContent = `${this.realIndex + 1} / ${totalSlides}`;
                },
                slideChange() {
                    fractionContainer.textContent = `${this.realIndex + 1} / ${totalSlides}`;
                    this.navigation.update();
                },
                slideChangeTransitionEnd() {
                    updateSwiperLayout(this);
                    this.navigation.update();
                },
                touchEnd() {
                    updateSwiperLayout(this);
                    this.navigation.update();
                }
            }
        });
    });

    // Programme Status With Progress
    if (document.querySelector('.prgrmme_predict')) {
        const upcomingDateElement = document.querySelector(".given_date");
        const remainingDaysElement = document.querySelector(".prdct_number");
        const progressBar = document.querySelector(".dte_prgrss_br");

        const isLeapYear = (year) => {
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        };
        const normalizeDate = (dateStr) => {
            dateStr = dateStr.replace(/[^\d\/\.\-]/g, '');
            let separator = dateStr.includes('.') ? '.' : '/';
            const [day, month, year] = dateStr.split(separator).map(Number);
            let fullYear = year;
            if (fullYear < 100) {
                fullYear += 2000;
            }
            return { day, month, year: fullYear };
        };

        const updateProgress = () => {
            const dateStr = upcomingDateElement.textContent.trim();
            const { day, month, year } = normalizeDate(dateStr);
            const fullYear = year;
            const today = new Date();
            const todayUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
            const upcomingDate = new Date(Date.UTC(fullYear, month - 1, day));
            const timeDiff = upcomingDate - todayUtc;
            const remainingDays = Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0);
            const maxDays = isLeapYear(today.getUTCFullYear()) ? 366 : 365;
            let progressPercent = 0;

            if (timeDiff < 0) {
                progressPercent = 100;
                remainingDaysElement.innerHTML = "XXX";
            } else {
                progressPercent = Math.min((remainingDays / maxDays) * 100, 100);
                remainingDaysElement.innerHTML = `${remainingDays}`;
            }
            progressBar.style.width = `${progressPercent}%`;
        };
        updateProgress();
    }

    // Fund Progress
    if (document.querySelector(".ourch_bnnr_bttm_box")) {
        const raisedValue = document.querySelector('.raised_number').textContent;
        const targetValue = document.querySelector('.prdct_number').textContent;
        const raisedNumber = parseFloat(raisedValue.replace(/[^\d.-]/g, ''));
        const targetNumber = parseFloat(targetValue.replace(/[^\d.-]/g, ''));
        const percentage = (raisedNumber / targetNumber) * 100;
        const validPercentage = Math.min(Math.max(percentage, 0), 100);
        const progressBar = document.querySelector('.fund_prgrssbar');
        progressBar.style.width = validPercentage + '%';
    }

    // Sticky Bottom Box
    const parentSection = document.querySelector('.invst_ntce_parent_section');
    if (parentSection) {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateClass = () => {
            const currentScrollY = window.scrollY;
            const scrollingUp = currentScrollY < lastScrollY;
            lastScrollY = currentScrollY;

            const parentTop = parentSection.getBoundingClientRect().top;
            const parentBottom = parentSection.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            if (scrollingUp) {
                if (parentTop <= viewportHeight && parentTop >= viewportHeight - 100) {
                    parentSection.classList.add('ntfctn_actve_onscroll_up');
                }
            } else {
                if (parentBottom > 0 && parentTop < viewportHeight) {
                    parentSection.classList.remove('ntfctn_actve_onscroll_up');
                }
            }
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateClass();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
    }

    // Select Filtering - Community/ Resources
    let selectedGroups = new Set();
    let serchSelect = document?.querySelectorAll('.srch_slct');
    let displayElement = document?.querySelector('.srch_txt_block');
    let remVal = parseFloat(getComputedStyle(document.documentElement).fontSize);
    let initialDisplayText = displayElement?.textContent;

    function slide(el, expand) {
        let h = el.scrollHeight;
        el.style.maxHeight = expand ? `${Math.ceil(h / remVal)}rem` : `0rem`;
    }

    function updateDisplayText() {
        displayElement.textContent = `Filters selected (${selectedGroups.size})`;
        displayElement.parentNode.classList.add('filters_selected');
    }
    function updateSelectedCount() {
        if (selectedGroups.size) {
            displayElement.textContent = `Filters selected (${selectedGroups.size})`;
            displayElement.parentNode.classList.add('filters_selected');
        } else {
            displayElement.textContent = initialDisplayText;
            displayElement.parentNode.classList.remove('filters_selected');
        }
    }

    function attachItemListeners(el) {
        let isDirectory = document.querySelector('.directory_filter') !== null;
        let isEvent = document.querySelector('.event_filter') !== null;

        let items = el.querySelectorAll('.drop_flte_lstng');
        items.forEach((elem, index) => {
            if (isDirectory) {
                elem.querySelectorAll('.custom_lnk input[type=checkbox]').forEach(checkbox => {
                    checkbox.addEventListener('change', () => {
                        checkbox.checked ? selectedGroups.add(checkbox.name)
                            : selectedGroups.delete(checkbox.name);
                        updateSelectedCount();
                    });
                });
            }
            else if (isEvent) {
                elem.querySelectorAll('.custom_lnk input[type=radio]').forEach(radio => {
                    radio.addEventListener('click', () => {
                        selectedGroups.add(index);
                        updateDisplayText();
                    });
                });
            }
        });
    }

    serchSelect.forEach(el => {
        let toggle = el.querySelector('.srch_slct_tggle');
        let drop = el.querySelector('.slct_lst_drp');

        slide(drop, toggle.classList.contains('srch_slct_active'));

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('srch_slct_active');
            drop.classList.toggle('srch_slct_drop_active');
            slide(drop, toggle.classList.contains('srch_slct_active'));
        });

        attachItemListeners(el);
    });

    // Resources Date Sorting
    const listWrapper = document.querySelector('.resurce_all_box [fs-cmsnest-element="list"]');

    if (listWrapper) {
        function parseDMY(s) {
            let [d, m, y] = s.split('/').map(Number);
            return new Date(y, m - 1, d);
        }

        function getCurrentOrder() {
            let sel = document.querySelector('input[name="date-sort"]:checked');
            return (sel && sel.id === 'Oldest') ? 'asc' : 'desc';
        }

        function sortByDate(order = 'desc') {
            let cards = Array.from(listWrapper.querySelectorAll('.w-dyn-item'));
            cards.sort((a, b) => {
                let da = parseDMY(a.querySelector('.rsurce_dte').textContent.trim());
                let db = parseDMY(b.querySelector('.rsurce_dte').textContent.trim());
                return order === 'desc' ? db - da : da - db;
            });
            cards.forEach(c => listWrapper.appendChild(c));
        }

        document.querySelectorAll('input[name="date-sort"]').forEach(radio => {
            radio.addEventListener('change', () => {
                document.querySelectorAll('label.w-radio').forEach(lbl => lbl.classList.remove('w--redirected-checked'));
                radio.closest('label')?.classList.add('w--redirected-checked');
                sortByDate(radio.id === 'Oldest' ? 'asc' : 'desc');
            });
        });

        const loadMoreBtn = document.querySelector('.load_mre_bttn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                setTimeout(() => sortByDate(getCurrentOrder()), 400);
            });
        }

        sortByDate(getCurrentOrder());
    }

    // clear button
    document.querySelectorAll('[fs-cmsfilter-element="clear"], .all_clr_bttn')
        .forEach(btn => {
            let timeout;
            btn.addEventListener('click', e => {
                e.stopPropagation();
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    selectedGroups.clear();
                    displayElement.textContent = initialDisplayText;
                    displayElement.parentNode.classList.remove('filters_selected');
                    let allHolderClear = document.querySelector('.all_bttn_hlder [fs-cmsfilter-element="clear"]');
                    if (allHolderClear)
                        allHolderClear
                            .classList.add('has_active');
                    document.querySelectorAll(`input[name="date-sort"]`).forEach(radio => {
                        radio.checked = false;
                    });
                    if (listWrapper) {
                        sortByDate('desc');
                    }
                }, 300);
            });
        });

    // Dark Menu Hover Color
    const MOBILE_BREAKPOINT = 768;
    const pllrLinks = document.querySelectorAll('[link-color]');

    function applyHoverLogic(link) {
        const color = link.getAttribute('link-color');

        link.addEventListener('mouseenter', () => {
            link.style.color = color;
        });

        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('w--current')) {
                link.style.color = '';
            } else {
                link.style.color = color;
            }
        });

        if (link.classList.contains('w--current')) {
            link.style.color = color;
        }
    }

    function disableLinksOnMobile() {
        const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
        pllrLinks.forEach(link => {
            if (isMobile) {
                link.setAttribute('href', 'javascript:void(0)');
            }
        });
    }
    pllrLinks.forEach(applyHoverLogic);

    disableLinksOnMobile();
    window.addEventListener('resize', disableLinksOnMobile);



    // Add #data-url
    document.querySelectorAll('[data-url]').forEach(el => {
        let url = el.getAttribute('href');
        let slug = el.getAttribute('data-url');
        if (url && slug && url !== '#') {
            // Avoid duplicate hashes
            const base = url.split('#')[0];
            el.setAttribute('href', `${base}#${slug}`);
        }
    });

    // Get Params from URL
    function getUrlParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        const urlParamsValue = urlParams.get(param);
        return urlParamsValue ? `${urlParamsValue}/` : '';
    }

    // // Ghost Knowledge Hub
    const API_URL = 'https://sciencecreates.ghost.io/ghost/api/content/posts/';
    const API_KEY = '969e9f32437ce35f25af6d1453';
    const DEFAULT_KN_URL = '/knowledge-hub/post?post_id=';

    async function fetchAndRenderGhostPosts({
        targetId,
        initialLimit = 3,
        enableSearch = false,
        searchInputId = null,
        enableSort = false,
        sortRadioName = null,
        enableFilter = false,
        loadMoreId = null,
        filterContainerSelector = null,
        renderPostHTML = null,
        postId = ''
    }) {
        const container = document.getElementById(targetId);
        if (!container) return;

        const loadMoreBtn = loadMoreId ? document.getElementById(loadMoreId) : null;
        const searchInput = searchInputId ? document.getElementById(searchInputId) : null;

        const filterTagData = container.getAttribute('tag');
        const filterTagRequest = filterTagData ? `&filter=tag:${filterTagData}` : '';

        let filterButtons = [];

        let activeSearch = '';
        let activeTag = 'all';
        let activeSort = 'latest';
        let cachedPosts = [];
        let currentVisibleCount = 0;
        let postsToRender = [];

        async function fetchAllPosts() {
            const url = `${API_URL}${postId}?key=${API_KEY}&limit=100&include=tags,authors${filterTagRequest}&order=published_at desc`;
            const response = await fetch(url, { headers: { 'Accept-Version': 'v5.0' } });
            const data = await response.json();

            cachedPosts = data.posts.map(post => {
                const tags = post.tags.map(tag => tag.name.toLowerCase());
                return {
                    ...post,
                    filterType: tags.length > 0 ? tags[0] : 'uncategorized'
                };
            });

            if (enableFilter && filterContainerSelector) {
                filterButtons = Array.from(document.querySelectorAll(
                    `${filterContainerSelector} .cat_filter_bttn`
                ));
                filterButtons.forEach(btn => btn.classList.remove('has_active'));
                const allBtn = filterButtons.find(btn => btn.dataset.filter === 'all');
                if (allBtn) allBtn.classList.add('has_active');
            }
        }

        function defaultRenderHTML(post) {
            const postDate = new Date(post.published_at).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            });
            const primaryTag = post.primary_tag?.name || 'Article';
            const featureImage = post.feature_image || 'https://via.placeholder.com/600x400?text=No+Image';

            return `
                <div data-move="up" role="listitem" class="invdl_knwldge_row_hlder w-dyn-item">
                    <div class="row knwldge_hub_row">
                        <div class="col col-3 knwldge_hub_img_col">
                            <div class="knwldge_hub_img_box">
                                <a href="${DEFAULT_KN_URL}${post.id}" class="knwldge_hhub_lnk_box w-inline-block">
                                    <img src="${featureImage}" loading="lazy" alt="${post.title}" class="knwldge_hub_img">
                                </a>
                            </div>
                        </div>
                        <div class="col col-9 knwldge_hub_info_col">
                            <div class="knwldge_info_box pl_big">
                                <div class="knwldge_info_box_innr">
                                    <div class="knwldge_info_hdr">
                                        <div class="knwldge_dte_box"><div>${postDate}</div></div>
                                        <div class="knwldge_cat_box"><div class="evnts_type_tag"><div>${primaryTag}</div></div></div>
                                    </div>
                                    <div class="knwldge_ttle_box pr_big">
                                        <a href="${DEFAULT_KN_URL}${post.id}" class="knwldge_ttle_lnk title_h2 w-inline-block">
                                            <div>${post.title}</div>
                                        </a>
                                    </div>
                                    <div class="knwldge_bttm_bttn_box">
                                        <a href="${DEFAULT_KN_URL}${post.id}" class="shape_bttn w-inline-block">
                                            <div class="shpe_cover_one">
                                                <img src="https://cdn.prod.website-files.com/6793cf33c35e2c59ec3c7f51/67ac73219c9a93e810f6683c_arrw_top_rght.svg" class="bttn_shape">
                                            </div>
                                            <div class="shpe_cover_two shpe_cover_one">
                                                <img src="https://cdn.prod.website-files.com/6793cf33c35e2c59ec3c7f51/67ac73219c9a93e810f6683c_arrw_top_rght.svg" class="bttn_shape">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }

        function renderNextBatch() {
            const postsToShow = postsToRender.slice(currentVisibleCount, currentVisibleCount + initialLimit);
            postsToShow.forEach(post => {
                const html = renderPostHTML ? renderPostHTML(post) : defaultRenderHTML(post);
                container.innerHTML += html;
            });

            currentVisibleCount += postsToShow.length;
            if (loadMoreBtn) {
                loadMoreBtn.style.display = currentVisibleCount < postsToRender.length ? 'inline-flex' : 'none';
            }
        }

        function applyFilters() {
            let filtered = [...cachedPosts];

            if (enableSearch && activeSearch) {
                filtered = filtered.filter(post =>
                    post.title.toLowerCase().includes(activeSearch.toLowerCase())
                );
            }

            if (enableFilter && activeTag !== 'all') {
                filtered = filtered.filter(post =>
                    post.tags.some(tag => tag.name.toLowerCase() === activeTag)
                );
            }

            if (enableSort) {
                filtered.sort((a, b) => {
                    return activeSort === 'oldest'
                        ? new Date(a.published_at) - new Date(b.published_at)
                        : new Date(b.published_at) - new Date(a.published_at);
                });
            }

            return filtered;
        }

        function resetAndRender() {
            container.innerHTML = '';
            currentVisibleCount = 0;
            postsToRender = applyFilters();
            renderNextBatch();
        }

        await fetchAllPosts();
        resetAndRender();

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => renderNextBatch());
        }

        if (enableFilter) {
            document.addEventListener('click', function (e) {
                if (e.target.matches('.cat_filter_bttn')) {
                    e.preventDefault();
                    const selected = e.target.getAttribute('data-filter');
                    if (!selected) return;

                    activeTag = selected;
                    filterButtons.forEach(b => b.classList.remove('has_active'));
                    e.target.classList.add('has_active');

                    resetAndRender();
                }
            });
        }

        if (enableSearch && searchInput) {
            searchInput.addEventListener('input', () => {
                activeSearch = searchInput.value.trim();
                resetAndRender();
            });
        }

        if (enableSort && sortRadioName) {
            document.querySelectorAll(`input[name="${sortRadioName}"]`).forEach(radio => {
                radio.addEventListener('change', () => {
                    const label = radio.closest('label')?.querySelector('.fltrs_label')?.textContent.trim().toLowerCase();
                    activeSort = label === 'oldest' ? 'oldest' : 'latest';
                    resetAndRender();
                });
            });
        }

        const searchClearButton = document.getElementById('srch_clear_bttn');
        if (searchClearButton) {
            searchClearButton.addEventListener('click', () => {
                activeSearch = '';
                if (searchInput) searchInput.value = '';
                resetAndRender();
            });
        }

        document.querySelectorAll('.all_clr_bttn').forEach(el => {
            el.addEventListener('click', () => {
                activeSearch = '';
                activeTag = 'all';
                activeSort = 'latest';

                if (searchInput) searchInput.value = '';
                filterButtons.forEach(b => b.classList.remove('has_active'));
                const defaultBtn = document.querySelector('.cat_filter_bttn[data-filter="all"]');
                if (defaultBtn) defaultBtn.classList.add('has_active');
                document.querySelectorAll(`input[name="${sortRadioName}"]`).forEach(radio => {
                    radio.checked = false;
                });
                resetAndRender();
            });
        });
        if (enableFilter) {
            const hash = window.location.hash.slice(1);
            if (hash) {
                const deepBtn = Array.from(document.querySelectorAll('.cat_filter_bttn')).find(b => b.getAttribute('data-filter') === hash);
                if (deepBtn) deepBtn.click();
            }
        }
    }

    if (document.getElementById('ghost-single-post')) {
        fetchAndRenderGhostPosts({
            targetId: 'ghost-single-post',
            initialLimit: 1,
            enableSearch: false,
            enableSort: false,
            enableFilter: false,
            postId: getUrlParam('post_id'),
            renderPostHTML: post => {
                const postDate = new Date(post.published_at).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: '2-digit'
                });

                const featureImage = post.feature_image || 'https://via.placeholder.com/600x400?text=No+Image';
                const primaryTag = post.primary_tag?.name || 'Article';
                const postExcerpt = post.excerpt || post.title;

                const elements = {
                    date: document.getElementById('single-post-date'),
                    image: document.getElementById('kn_singe_post_image'),
                    tag: document.getElementById('kh_tag')
                };

                elements.date.textContent = postDate;
                elements.image.style.backgroundImage = `url(${featureImage})`;
                elements.tag.textContent = primaryTag;

                const metaTags = {
                    title: (document.title = post.title),
                    description: document.querySelector('meta[name="description"]'),
                    ogTitle: document.querySelector('meta[property="og:title"]'),
                    ogDescription: document.querySelector('meta[property="og:description"]'),
                    ogImage: document.querySelector('meta[property="og:image"]')
                };

                metaTags.description?.setAttribute('content', postExcerpt);
                metaTags.ogTitle?.setAttribute('content', post.title);
                metaTags.ogDescription?.setAttribute('content', postExcerpt);
                metaTags.ogImage?.setAttribute('content', featureImage);

                return post.html;
            }
        });
    }

    if (document.getElementById('ghost_list')) {
        fetchAndRenderGhostPosts({
            targetId: 'ghost_list',
            initialLimit: 3,
            enableSearch: true,
            searchInputId: 'search_input',
            enableSort: true,
            sortRadioName: 'sort-by-filter',
            enableFilter: true,
            loadMoreId: 'load_mre_bttn',
            filterContainerSelector: '.cmnty_fltr_bttn_lstng'
        });
    }

    if (document.getElementById('ghost-posts')) {
        fetchAndRenderGhostPosts({
            targetId: 'ghost-posts',
            initialLimit: 2,
            enableSearch: false,
            enableSort: false,
            enableFilter: false
        });
    }

    if (document.getElementById('ghost-posts-magazine')) {
        fetchAndRenderGhostPosts({
            targetId: 'ghost-posts-magazine',
            initialLimit: 50,
            enableSearch: false,
            enableSort: false,
            enableFilter: false
        });
    }

    if (document.getElementById('ghost_box')) {
        fetchAndRenderGhostPosts({
            targetId: 'ghost_box',
            initialLimit: 1,
            renderPostHTML: post => {
                const featureImage = post.feature_image || 'https://via.placeholder.com/600x400?text=No+Image';
                return `
                    <div class="sptlght_img_box">
                        <a href="${DEFAULT_KN_URL}${post.id}" class="sptlght_img_lnk w-inline-block">
                            <img src="${featureImage}" loading="lazy" alt="${post.title}" class="sptlght_img">
                        </a>
                    </div>
                    <div class="sptlght_ttle_box">
                        <a href="${DEFAULT_KN_URL}${post.id}" class="sptlght_ttle_lnk">${post.title}</a>
                    </div>`;
            }
        });
    }
});

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
                speed: 500,
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
                // centerPadding:"11.574rem",
                speed: 500,
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
        let windowWidth = $(window).width();
        let slider3 = $(wrapperSelector).find('.mmbr_sldr_tab_lstng');
        let slideCount = slider3.find('.mmbr_sldr_tab_item').length;
        let dataSlideNum = parseInt(slider3.data('slide-num'));

        if (slideCount < dataSlideNum) {
            if (windowWidth > 1200) {
                unslickThumbnailSliderAlt(wrapperSelector);
                initializeMainSlidersAlt(wrapperSelector);
            } else {
                initializeMainSlidersAlt(wrapperSelector);
                initializeThumbnailSliderAlt(wrapperSelector);
            }
        } else {
            if (windowWidth > 1200) {
                initializeMainSlidersAlt(wrapperSelector);
                initializeThumbnailSliderAlt(wrapperSelector);
            } else {
                initializeMainSlidersAlt(wrapperSelector);
                initializeThumbnailSliderAlt(wrapperSelector);
            }
        }
    }

    function unslickThumbnailSliderAlt(wrapperSelector) {
        let slider3 = $(wrapperSelector).find('.mmbr_sldr_tab_lstng');
        if (slider3.hasClass('slick-initialized')) {
            slider3.slick('unslick');
        }
    }

    function initializeMainSlidersAlt(wrapperSelector) {
        initializeSlider('.mmbr_img_sldr', {
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

        // Slider 2 settings
        initializeSlider('.mmbr_optn_txt_sldr', {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            fade: true,
            prevArrow: $(wrapperSelector).find('.sldr_custm_arrw .arrw_prev'),
            nextArrow: $(wrapperSelector).find('.sldr_custm_arrw .arrw_next'),
            lazyLoad: 'progressive',
            cssEase: 'ease-in',
            speed: 500,
            infinite: true,
            asNavFor: $(wrapperSelector).find('.mmbr_img_sldr'),
        }, wrapperSelector);
    }

    function initializeThumbnailSliderAlt(wrapperSelector) {
        initializeSlider('.mmbr_sldr_tab_lstng', {
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: 'progressive',
            cssEase: 'ease-in',
            focusOnSelect: true,
            dots: false,
            speed: 500,
            infinite: true,
            asNavFor: $(wrapperSelector).find('.mmbr_img_sldr, .mmbr_optn_txt_sldr'),
        }, wrapperSelector);

        $(wrapperSelector).find('.sldr_custm_arrw .arrw_prev').click(function () {
            $(wrapperSelector).find('.mmbr_sldr_tab_lstng').slick('slickPrev');
        });
        $(wrapperSelector).find('.sldr_custm_arrw .arrw_next').click(function () {
            $(wrapperSelector).find('.mmbr_sldr_tab_lstng').slick('slickNext');
        });
    }

    function setThumbnailNavigationAlt(wrapperSelector) {
        let slider3 = $(wrapperSelector).find('.mmbr_sldr_tab_lstng');
        let slider2 = $(wrapperSelector).find('.mmbr_optn_txt_sldr');
        slider3.find('.mmbr_sldr_tab_item').click(function (e) {
            e.preventDefault();
            slider3.find('.mmbr_sldr_tab_item').removeClass('active');
            let slideIndex = $(this).data('slide') - 1;
            $(this).addClass('active');
            if (slider2.hasClass('slick-initialized')) {
                slider2.slick('slickGoTo', slideIndex);
            }
        });
        slider2.on("beforeChange", function (ev, slick, current, next) {
            slider3.find('.mmbr_sldr_tab_item').removeClass('active');
            slider3.find('.mmbr_sldr_tab_item').eq(next).addClass('active');
        });
    }

    $('.mmbr_box').each(function () {
        let wrapperSelector = this;
        handleResponsiveSliderBehaviorAlt(wrapperSelector);
        setThumbnailNavigationAlt(wrapperSelector);

        $(window).resize(function () {
            handleResponsiveSliderBehaviorAlt(wrapperSelector);
        });
        $(wrapperSelector).find('.mmbr_sldr_tab_lstng .mmbr_sldr_tab_item').eq(0).addClass('active');
    });

    let dataWrapper1 = document.querySelectorAll('.mmbr_sldr_tab_hldr');
    dataWrapper1.forEach((elem, i) => {
        let dataSlideItem = elem.querySelectorAll('.mmbr_sldr_tab_hldr .mmbr_sldr_tab_item');
        dataSlideItem.forEach((el, i) => {
            el.setAttribute('data-slide', i + 1);
        });
    })

    //  Staff Slider Custom
    function initializeSlider(sliderSelector, options, wrapperSelector) {
        let slider = $(wrapperSelector).find(sliderSelector);
        if (!slider.hasClass('slick-initialized')) {
            slider.slick(options);
        }
    }

    function handleResponsiveSliderBehavior(wrapperSelector) {
        let windowWidth = $(window).width();
        let slider3 = $(wrapperSelector).find('.tem_thmbnl_sldr');
        let slideCount = slider3.find('.tem_thmbnl_item').length;
        let dataSlideNum = parseInt(slider3.data('slide-num'));

        if (slideCount < dataSlideNum) {
            if (windowWidth > 1200) {
                unslickThumbnailSlider(wrapperSelector);
                initializeMainSliders(wrapperSelector);
            } else {
                initializeMainSliders(wrapperSelector);
                initializeThumbnailSlider(wrapperSelector);
            }
        } else {
            if (windowWidth > 1200) {
                initializeMainSliders(wrapperSelector);
                initializeThumbnailSlider(wrapperSelector);
            } else {
                initializeMainSliders(wrapperSelector);
                initializeThumbnailSlider(wrapperSelector);
            }
        }
    }

    function unslickThumbnailSlider(wrapperSelector) {
        let slider3 = $(wrapperSelector).find('.tem_thmbnl_sldr');
        if (slider3.hasClass('slick-initialized')) {
            slider3.slick('unslick');
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

        // Slider 2 settings
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
            speed: 500,
            infinite: true,
            asNavFor: $(wrapperSelector).find('.img_sldr'),
        }, wrapperSelector);
    }

    function initializeThumbnailSlider(wrapperSelector) {
        initializeSlider('.tem_thmbnl_sldr', {
            slidesToShow: 7,
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: 'progressive',
            cssEase: 'ease-in',
            focusOnSelect: true,
            dots: false,
            speed: 500,
            infinite: true,
            asNavFor: $(wrapperSelector).find('.img_sldr, .txt_tm_sldr'),
        }, wrapperSelector);

        $(wrapperSelector).find('.sldr_custm_arrw .arrw_prev').click(function () {
            $(wrapperSelector).find('.tem_thmbnl_sldr').slick('slickPrev');
        });
        $(wrapperSelector).find('.sldr_custm_arrw .arrw_next').click(function () {
            $(wrapperSelector).find('.tem_thmbnl_sldr').slick('slickNext');
        });
    }

    function setThumbnailNavigation(wrapperSelector) {
        let slider3 = $(wrapperSelector).find('.tem_thmbnl_sldr');
        let slider2 = $(wrapperSelector).find('.txt_tm_sldr');
        slider3.find('.tem_thmbnl_item').click(function (e) {
            e.preventDefault();
            slider3.find('.tem_thmbnl_item').removeClass('active');
            let slideIndex = $(this).data('slide') - 1;
            $(this).addClass('active');
            if (slider2.hasClass('slick-initialized')) {
                slider2.slick('slickGoTo', slideIndex);
            }
        });
        slider2.on("beforeChange", function (ev, slick, current, next) {
            slider3.find('.tem_thmbnl_item').removeClass('active');
            slider3.find('.tem_thmbnl_item').eq(next).addClass('active');
        });
    }

    $('.tem_box_wrppr').each(function () {
        let wrapperSelector = this;
        handleResponsiveSliderBehavior(wrapperSelector);
        setThumbnailNavigation(wrapperSelector);

        $(window).resize(function () {
            handleResponsiveSliderBehavior(wrapperSelector);
        });
        $(wrapperSelector).find('.tem_thmbnl_sldr .tem_thmbnl_item').eq(0).addClass('active');
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
                slidesToShow: 2,
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
            });
        });
    }
    // Inhouse Members Slider
    let huseWrppr = document?.querySelectorAll('.huse_sldr_wrppr');
    if (huseWrppr.length > 0) {
        huseWrppr?.forEach((el) => {
            const swiperElement = el?.querySelector('.huse_mmbr_sldr');
            const fractionContainer = el?.querySelector('.sldr_pgntn');

            const slidesPerView = parseInt(swiperElement?.getAttribute('data-comp-slider'), 10) || 6;
            const swiper = new Swiper(swiperElement, {
                slidesPerView: slidesPerView,
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
                slidesPerView: 4,
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


    // Header Animation
    let menuHeader = document.querySelector('.main_header');
    let lastScrollPosY = window.pageYOffset;
    let scrollThreshold = 8;

    let stickyFunc = () => {
        let scrollPosY = window.pageYOffset;

        if (scrollPosY > 0) {
            menuHeader.classList.add('sticky_header');
        } else {
            menuHeader.classList.remove('sticky_header');
        }

        if (Math.abs(scrollPosY - lastScrollPosY) > scrollThreshold) {
            if (scrollPosY > lastScrollPosY) {
                menuHeader.classList.remove('scrollup');
                menuHeader.classList.add('scrolldown');
            } else if (scrollPosY < lastScrollPosY) {
                menuHeader.classList.remove('scrolldown');
                menuHeader.classList.add('scrollup');
            }

            lastScrollPosY = scrollPosY;
        }
    };

    stickyFunc();

    window.addEventListener('scroll', stickyFunc);

    // Dark Mode / Light Mode & Clone Right Header Part & Custom Menu
    function initializeThemeButton(themeButton) {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark_mode');
            themeButton.classList.add('dark_mode_active');
        }

        themeButton.addEventListener('click', () => {
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
    let subMenuItem = document.querySelectorAll('[data-menu-open]');
    let menuItem = document.querySelectorAll('[data-menu]');
    let activeMenuItem = null;

    function toggleSubMenu(menuAttr, action) {
        let submenu = Array.from(subMenuItem).find(item => item.getAttribute('data-menu-open') === menuAttr);
        let menu = Array.from(menuItem).find(item => item.getAttribute('data-menu') === menuAttr);

        if (submenu) {
            submenu.classList[action]('submenu_active');
        }
        if (menu) {
            menu.classList[action]('submenu_active');
        }
    }

    menuItem.forEach((el) => {
        let menuAttr = el.getAttribute('data-menu');

        el.addEventListener('click', (e) => {
            e.preventDefault();
            if (activeMenuItem && activeMenuItem !== el) {
                let prevMenuAttr = activeMenuItem.getAttribute('data-menu');
                toggleSubMenu(prevMenuAttr, 'remove');
            }
            toggleSubMenu(menuAttr, 'toggle');
            activeMenuItem = el;
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mnu_item') && !e.target.closest('.submenu_drpdwn')) {
            if (activeMenuItem) {
                let prevMenuAttr = activeMenuItem.getAttribute('data-menu');
                toggleSubMenu(prevMenuAttr, 'remove');
                activeMenuItem = null;
            }
        }
    });

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
    subLinkBox.forEach((elem) => {
        const subTextBox = elem?.querySelector('.mnu_sub_txt_box');
        const textMaxHeight = subTextBox?.scrollHeight;

        const expandText = () => {
            gsap.to(subTextBox, {
                maxHeight: `${textMaxHeight}`,
                y: 0,
                duration: 0.3,
                ease: 'ease-out',
            });
        };

        const collapseText = () => {
            gsap.to(subTextBox, {
                maxHeight: '0',
                y: 100,
                duration: 0.3,
                ease: 'ease-in',
            });
        };
        gsap.set(subTextBox, { maxHeight: '0', y: 100 });

        elem.addEventListener('mouseenter', expandText);
        elem.addEventListener('mouseleave', collapseText);
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

    updateRootFontSize();

    let resizeTimeout;
    window.addEventListener('resize', function () {
        cancelAnimationFrame(resizeTimeout);
        resizeTimeout = requestAnimationFrame(() => {
            updateRootFontSize();
        });
    });
    window.addEventListener('scroll', () => {
        if (document?.querySelector('.main_header.inner_header')?.classList.contains('sticky_header')) {
            document.body.classList.add('innr_body');
        } else {
            document.body.classList.remove('innr_body');
        }
    });

    // Community/ Directory Filtering 
    if (document.querySelector('.directory_filter') !== null) {

        let selectedGroups = new Set();
        let serchSelect = document?.querySelectorAll('.srch_slct');
        let displayElement = document?.querySelector('.srch_txt_block');
        let initialDisplayText = displayElement?.textContent;
        let remVal = parseFloat(getComputedStyle(document.documentElement).fontSize);

        function updateSelectedCount() {
            let checkedCount = selectedGroups.size;
            if (checkedCount > 0) {
                displayElement.textContent = `Filters selected (${checkedCount})`;
                displayElement.parentNode.classList.add('filters_selected');
            } else {
                displayElement.textContent = initialDisplayText;
                displayElement.parentNode.classList.remove('filters_selected');
            }
        }

        serchSelect.forEach((el) => {
            let selectDropToggle = el.querySelector('.srch_slct_tggle');
            let selectDrop = el.querySelector('.slct_lst_drp');
            let dropMaxHeight = selectDrop.scrollHeight;

            function slideDown() {
                selectDrop.style.maxHeight = `${dropMaxHeight / remVal}rem`;
            }
            function slideUp() {
                selectDrop.style.maxHeight = `0rem`;
            }

            if (selectDropToggle.classList.contains('srch_slct_active')) {
                slideDown();
            } else {
                slideUp();
            }
            selectDropToggle.addEventListener('click', () => {
                selectDropToggle.classList.toggle('srch_slct_active');
                selectDrop.classList.toggle('srch_slct_drop_active');
                if (selectDropToggle.classList.contains('srch_slct_active')) {
                    slideDown();
                } else {
                    slideUp();
                }
            });
            let dropListing = el.querySelectorAll('.drop_flte_lstng');
            dropListing.forEach((elem, index) => {
                let checkboxes = elem.querySelectorAll('.custom_lnk input[type=checkbox]');
                checkboxes.forEach((checkbox) => {
                    checkbox.addEventListener('change', function () {
                        if (checkbox.checked) {
                            selectedGroups.add(checkbox.name);
                        } else {
                            selectedGroups.delete(checkbox.name);
                        }
                        updateSelectedCount();
                    });
                });
            });
        });
        // Clear Filter
        let clearFilter = document.querySelectorAll('[fs-cmsfilter-element="clear"]');
        clearFilter.forEach((elem) => {
            let clickTimeout = null;

            elem.addEventListener('click', (event) => {
                event.stopPropagation();
                if (clickTimeout) {
                    clearTimeout(clickTimeout);
                }
                clickTimeout = setTimeout(() => {
                    selectedGroups.clear();
                    if (displayElement) {
                        displayElement.textContent = initialDisplayText;
                        displayElement.parentNode.classList.remove('filters_selected');
                        document.querySelector('.all_bttn_hlder [fs-cmsfilter-element="clear"]').classList.add('has_active')
                    }
                }, 300);
            });
        });
    }

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

    // Event Filtering
    if (document.querySelector('.event_filter') !== null) {

        let selectedGroups = new Set();
        let serchSelect = document?.querySelectorAll('.srch_slct');
        let displayElement = document?.querySelector('.srch_txt_block');
        let remVal = parseFloat(getComputedStyle(document.documentElement).fontSize);
        let initialDisplayText = displayElement?.textContent;

        function updateDisplayText() {
            if (displayElement) {
                displayElement.textContent = `Filters selected (${selectedGroups.size})`;
                displayElement.parentNode.classList.add('filters_selected');
            }
        }

        serchSelect.forEach((el) => {
            let selectDropToggle = el.querySelector('.srch_slct_tggle');
            let selectDrop = el.querySelector('.slct_lst_drp');
            let dropMaxHeight = selectDrop.scrollHeight;

            function slideDown() {
                selectDrop.style.maxHeight = `${dropMaxHeight / remVal}rem`;
            }
            function slideUp() {
                selectDrop.style.maxHeight = `0rem`;
            }

            if (selectDropToggle.classList.contains('srch_slct_active')) {
                slideDown();
            } else {
                slideUp();
            }
            selectDropToggle.addEventListener('click', () => {
                selectDropToggle.classList.toggle('srch_slct_active');
                selectDrop.classList.toggle('srch_slct_drop_active');
                if (selectDropToggle.classList.contains('srch_slct_active')) {
                    slideDown();
                } else {
                    slideUp();
                }
            });
            let dropListing = el.querySelectorAll('.drop_flte_lstng');
            dropListing.forEach((elem, index) => {
                let customRadio = elem.querySelectorAll('.custom_lnk input[type=radio]');
                customRadio.forEach((radio) => {
                    radio.addEventListener('click', function () {
                        selectedGroups.add(index);
                        updateDisplayText();
                    });
                });
            });
        });
        // Clear Filter
        let clearFilter = document.querySelectorAll('[fs-cmsfilter-element="clear"]');
        clearFilter.forEach((elem) => {
            let clickTimeout = null;

            elem.addEventListener('click', (event) => {
                event.stopPropagation();
                if (clickTimeout) {
                    clearTimeout(clickTimeout);
                }
                clickTimeout = setTimeout(() => {
                    selectedGroups.clear();
                    if (displayElement) {
                        displayElement.textContent = initialDisplayText;
                        displayElement.parentNode.classList.remove('filters_selected');
                        document.querySelector('.all_bttn_hlder [fs-cmsfilter-element="clear"]').classList.add('has_active')
                    }
                }, 300);
            });
        });
    }

    //Floor Accordion Mode
    const accrdWrppr = document.querySelectorAll('.floor_tab_wrppr');

    accrdWrppr.forEach((ele) => {
        let remVal = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const accrdItem = ele.querySelectorAll('.flloor_tab');
        const accrdBttn = ele.querySelectorAll('.tgglebttn');

        accrdBttn.forEach((el) => {
            let mainPanel = el.closest('.flloor_tab');
            if (mainPanel.classList.contains('active')) {
                mainPanel.style.maxHeight = `${mainPanel.scrollHeight / remVal}rem`;
            } else {
                mainPanel.style.maxHeight = '0px';
            }
            el.addEventListener('click', () => {
                const activeTab = ele.querySelector('.flloor_tab.active');

                if (activeTab) {
                    activeTab.classList.remove('active');
                    activeTab.style.maxHeight = '0px';
                }
                let nextTab = mainPanel.nextElementSibling;

                if (!nextTab) {
                    nextTab = mainPanel.previousElementSibling;
                }
                if (nextTab && !nextTab.classList.contains('active')) {
                    nextTab.classList.add('active');
                    nextTab.style.maxHeight = `${nextTab.scrollHeight / remVal}rem`;
                }
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

            const swiper1 = new Swiper(swiperElement, {
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

    // Eco Slider
    if ($(".eco_sldr").length) {
        var $slider = $('.eco_sldr');
        $slider.each(function () {
            var $sliderParent = $(this).parents(".eco_wrppr");
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
})

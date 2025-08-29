$(document).ready(function() {
    // قائمة التنقل المتحركة
    $('.hamburger').click(function() {
        $('.nav-menu').toggleClass('active');
        $(this).toggleClass('active');
    });
    
    // إغلاق القائمة عند النقر على رابط
    $('.nav-menu a').click(function() {
        $('.nav-menu').removeClass('active');
        $('.hamburger').removeClass('active');
    });
    
    // تمرير سلس للروابط
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });
    
    // شريط التنقل الثابت
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    
    // شريط تقدم التمرير
    function updateScrollProgress() {
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height() - $(window).height();
        const scrollPercent = (scrollTop / docHeight) * 100;
        $('.scroll-progress').css('width', scrollPercent + '%');
    }
    
    $(window).scroll(updateScrollProgress);
    
    // تشغيل شريط التمرير
    $('body').append('<div class="scroll-progress"></div>');
    $('.scroll-progress').css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '0%',
        height: '4px',
        background: '#ff6b35',
        zIndex: 9999
    });
    
    // تشغيل شريط التمرير عند التحميل
    updateScrollProgress();
    
    // تشغيل Owl Carousel لآراء العملاء
    $('.feedback-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // معالجة نموذج الاتصال
    $('.contact-form').submit(function(e) {
        e.preventDefault();
        
        // جمع البيانات من النموذج
        const formData = {
            name: $('input[type="text"]').val(),
            phone: $('input[type="tel"]').val(),
            email: $('input[type="email"]').val(),
            type: $('select').val(),
            message: $('textarea').val()
        };
        
        // هنا يمكنك إضافة منطق إرسال البيانات إلى الخادم
        console.log('Form Data:', formData);
        
        // إظهار رسالة النجاح
        $('.success-message').fadeIn();
        
        // إعادة تعيين النموذج
        $(this)[0].reset();
        
        // إخفاء رسالة النجاح بعد 5 ثوانٍ
        setTimeout(function() {
            $('.success-message').fadeOut();
        }, 5000);
    });
    
    // إغلاق رسالة النجاح
    $('.close-btn').click(function() {
        $('.success-message').fadeOut();
    });
    
    // إضافة تأثيرات عند التمرير
    function animateOnScroll() {
        const elements = $('.offer-card, .feature, .method, .info-item');
        
        elements.each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate');
            }
        });
    }
    
    $(window).scroll(animateOnScroll);
    animateOnScroll(); // تشغيل مرة واحدة عند التحميل
    
    // إضافة فئة animate للعناصر
    $('.offer-card').css('opacity', '0').css('transform', 'translateY(30px)');
    $('.feature').css('opacity', '0').css('transform', 'translateY(30px)');
    $('.method').css('opacity', '0').css('transform', 'translateY(30px)');
    $('.info-item').css('opacity', '0').css('transform', 'translateY(30px)');
    
    // تأثير التمرير
    $('.animate').each(function() {
        $(this).css('transition', 'all 0.6s ease');
    });
    
    // تحديث فئة animate
    $('.animate').addClass('show').css({
        'opacity': '1',
        'transform': 'translateY(0)'
    });
    
    // عداد التمرير (يمكن إضافة عدادات رقمية هنا)
    function countUp() {
        const counters = $('.counter');
        const speed = 200;
        
        counters.each(function() {
            const $this = $(this);
            const countTo = $this.attr('data-count');
            
            $({ countNum: 0 }).animate({
                countNum: countTo
            }, {
                duration: speed,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }
    
    // تشغيل العداد عند التمرير
    $(window).scroll(function() {
        const counterSection = $('.counter-section');
        const counterPosition = counterSection.offset().top;
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        if (scrollPosition + windowHeight > counterPosition) {
            countUp();
            $(window).off('scroll'); // إيقاف التشغيل بعد التنفيذ
        }
    });
    
    // تأثيرات للروابط الاجتماعية
    $('.social-link').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );
    
    // تأثيرات للبطاقات
    $('.offer-card, .feedback-card').hover(
        function() {
            $(this).css('transform', 'translateY(-10px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );
});

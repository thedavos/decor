$(() => {

    function closeVideo(e, el) {
        const video = $('video')[0]
        video.load();
        video.classList.remove('active');
        $('.overlay').removeClass('overlay-active');
        $('.icon').removeClass('icon-active');
    }


    $('video').on('play', function(e) {        
        $(this).addClass('active');
        $('.icon').addClass('icon-active');
        $('.overlay').addClass('overlay-active');
    })

    $('.overlay').click(closeVideo);
    $('.icon').click(closeVideo);


    $.each($('.circle-animate'), function (index, el) { 
        
        el.addEventListener('mouseover', () => {
             $('.member-text')[index].style.opacity = '1';
        })

        el.addEventListener('mouseout', () => {
            $('.member-text')[index].style.opacity = '0';
        })
    });
    
})
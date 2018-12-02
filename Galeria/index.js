$(() => {
    const url = window.location.search
    const getQuery = url.split('?')[1]
    const param = Number(getQuery.split('=')[1])

    
    function setCarousel(index) {
        const carousel = Array.from($('.carousel-images').children());
        const galeria = galerias[index]
        galeria.images.forEach((el, index) => {
            carousel[index].src = el
        })
    }

    function setText(index) {
        const galeria = galerias[index];
        $('#galeria-title').text(galeria.title);
        $('#galeria-text').text(galeria.text);
    }

    function setLightBox(index) {
        const images = Array.from($('.image-lightbox'));
        const anchors = Array.from($('.anchor-lightbox'));
        const galeria = galerias[index];
        galeria.images.forEach((el, index) => {
            images[index].src = el;
            anchors[index].href = el
        })
    }
    

    function galeriaSegunParametro(param) {
        switch (param) {
            case 1:
                setCarousel(0);
                setText(0);
                setLightBox(0);
            break;
            case 2:
                setCarousel(1);
                setText(1);
                setLightBox(1);
            break;
            case 3:
                setCarousel(2);
                setText(2);
                setLightBox(2);
            break;
            case 4:
                setCarousel(3);
                setText(3);
                setLightBox(3);
            break;
            case 5:
                setCarousel(4);
                setText(4);
                setLightBox(4);
            break;
            case 6:
                setCarousel(5);
                setText(5);
                setLightBox(5);
            break;
            case 7:
                setCarousel(6);
                setText(6);
                setLightBox(6);
            break;
            default:
                setCarousel(7);
                setText(7);
                setLightBox(7);
            break;
        }
    }
    
    galeriaSegunParametro(param);

})

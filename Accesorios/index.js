$(() => {

    
    function cambiarContenido(item) {
        $('.item-text').each(function(index, el) {
            el.firstElementChild.textContent = item[index].nombre;
            el.lastElementChild.textContent = item[index].precio;
        })
    }


    function cambiarImagenesContenido(item, string) {
        $('#accesorios-title').text(string)
        const imagenes = $('.item').find('img');
        imagenes.each(function (index, el) {
            el.setAttribute('src', item[index].imagen);
            cambiarContenido(item);
        })
    }


    cambiarContenido(mesas);


    $('.page-link').click(function (e) { 
        e.preventDefault();

        const pageItem = $(this).parent();
        
        if (e.target.dataset.page == '1') {
            pageItem.next().removeClass('active');
            pageItem.addClass('active');
            cambiarImagenesContenido(mesas, 'Mesas')
        } else {
            pageItem.prev().removeClass('active');
            pageItem.addClass('active');
            cambiarImagenesContenido(muebles, 'Muebles')
        }
    });

    
})
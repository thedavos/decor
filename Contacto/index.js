$(() => {
    const regex = {
        name: /^[a-záéíóú\s]+$/i,
        phone: /^((\+51\s?)?\d\s?){9}$/,
        email: /^[\w\.-_!#$%&-]+@[a-z]+\.[a-z]{2,4}$/,
        message: /^[\w\s]{0,240}$/
    }

    function validateName(name, regex) {
        return !!regex.name.test(name)
    }
    
    function validateLastName(lastname, regex) {
        return !!regex.name.test(lastname)
    }

    function validatePhone(phone, regex) {
        return !!regex.phone.test(phone)
    }

    function validateEmail(email, regex) {
        return !!regex.email.test(email)
    }

    function validateMessage(message, regex) {
        return !!regex.message.test(message)
    }

    function validateInfo(regex, name, lastname, phone, email, message) {
        return  validateName(name, regex) && 
                validatePhone(phone, regex) && 
                validateEmail(email, regex) && 
                validateLastName(lastname, regex) && 
                validateMessage(message, regex);
    }

    function controlForm(name, lastname, email, phone, message, regex) {

        const validName = validateName(name, regex)
        const validLastName = validateLastName(lastname, regex)
        const validEmail = validateEmail(email, regex)
        const validphone = validatePhone(phone, regex)
        const validMessage = validateMessage(message, regex)

        if (!validName) {
            $('#name').css({
                border: '2px solid #ff5b5b',
            });
        } else {
            $('#name').css({
                border: '1px solid #ced4da',
            });
        }

        if (!validLastName) {
            $('#lastname').css({
                border: '2px solid #ff5b5b',
            });
        } else {
            $('#lastname').css({
                border: '1px solid #ced4da',
            });
        }

        if (!validphone) {
            $('#phone').css({
                border: '2px solid #ff5b5b',
            });
        } else {
            $('#phone').css({
                border: '1px solid #ced4da',
            });
        }

        if (!validEmail) {
            $('#email').css({
                border: '2px solid #ff5b5b',
            });
        } else {
            $('#email').css({
                border: '1px solid #ced4da',
            });
        }

        if (!validMessage) {
            $('#message').css({
                border: '2px solid #ff5b5b',
            });
        } else {
            $('#message').css({
                border: '1px solid #ced4da',
            });
        }
    }
    

    $('#btn').click(function(e) {
        e.preventDefault()

        const name = $('#name').val()
        const lastname = $('#lastname').val()
        const phone = $('#phone').val()
        const email = $('#email').val()
        const message = $('#message').val()
        console.log(message);
        

        if (validateInfo(regex, name, lastname, phone, email, message)) {
            controlForm(name, lastname, email, phone, message, regex)
            swal({
                icon: 'success',
                text: 'Gracias, nos pondremos en contacto',
                showConfirmButton: false,
                timer: 2000
            })
        } else {
            controlForm(name, lastname, email, phone, message, regex)
            swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Error! Inténtelo de nuevo'
            })
        }
    })
})